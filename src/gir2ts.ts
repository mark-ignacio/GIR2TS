import { ClassNode, EnumNode, FunctionNode, InterfaceNode, NamespaceNode, ParameterNode, Node, RecordNode } from "./types/gir-types";
import { ClassModifier, FunctionModifier, ModifierDesc } from "./types/modifier-types";
import { ExcludeClass, ExcludeDesc } from "./types/exclude-types";
import { js_reserved_words } from "./consts";
import { Parser } from 'xml2js';
import { BuildConstructorNode, NeedNewLine } from "./utils/utils";
import { GetTypeInfo, TypeInfo } from "./utils/paramUtils";
import { getFunctionInfo, Parameter } from "./utils/functionUtils";
import { renderDocString } from "./renderers/docStringRenderer";
import { renderRecordAsClass } from "./renderers/recordRenderer";
import { renderMethod } from "./renderers/methodRenderer";

function renderFreeFunction(func_node: FunctionNode, ns_name: string, exclude_list: string[] | null = null, modifier?: FunctionModifier): string {
    let { name, return_type, params, doc } = getFunctionInfo(func_node, modifier);

    let str = `${renderDocString(doc, params, return_type, 0, ns_name)}`;
    if (exclude_list && exclude_list.indexOf(name) !== -1) {
        str += '// ';
    }
    str += `function ${name}(${params.map((p) => `${p.name}: ${p.type}`).join(', ')})${(return_type != null) ? (": " + return_type.type) : ""};`;
    return str;
}

export function renderCallback(cb_node: FunctionNode, ns_name: string): string {
    const cb_name = cb_node.$.name;
    let body = renderDocString(cb_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
    body += `interface ${cb_name} {\n${renderMethod(cb_node, ns_name, undefined, { include_name: false, include_access_modifier: false, indentNum: 1 })}\n}`;
    return body;
}

function renderEnumeration(enum_node: EnumNode, ns_name: string): string {
    let body = '';
    for (let mem of enum_node.member) {
        let mem_name = mem.$.name;
        if (parseInt(mem_name)) {
            mem_name = '_' + mem_name;
        }
        body += renderDocString(mem?.doc?.[0]?._ ?? null, undefined, undefined, 1, ns_name);
        body += `\t${mem_name.toUpperCase()} = ${mem.$.value},\n`;
    }
    body = body.slice(0, -2) + '\n'; // remove last comma
    let result = renderDocString(enum_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
    result += `enum ${enum_node.$.name} {\n${body}}`;
    return result;
}


function renderNodeAsBlankInterface(node: Node, ns_name: string) {
    let result = renderDocString(node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
    result += `interface ${node.$.name} {}`;
    return result;
}

function renderAlias(alias_node: ParameterNode, ns_name: string): string {
    let result = renderDocString(alias_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
    result += `type ${alias_node.$.name} = ${GetTypeInfo(alias_node).type};`;
    return result;
}

/*
    Render class as a TS interface with construct signature.
    Saves us a lot of hassle with generating stud declarations for implemented
    methods.
    @exclude_list : An array of member names to exclude.
*/
function renderClassAsInterface(class_node: ClassNode, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {

    const class_name = class_node.$.name;
    const ifaces: string[] = [];
    const methods: FunctionNode[] = [];
    const ctors: FunctionNode[] = [];
    const static_funcs: FunctionNode[] = [];
    let exclude_method_list: string[] = [];
    let exclude_self = false;
    let exclude_all_members = false;

    /** Transform all extends as I{className} for Mixins */
    function transformExtension(className: string): string {
        const parts = className.split(".");
        parts[parts.length - 1] = `I${parts[parts.length - 1]}`
        return parts.join(".")
    }

    exclude_method_list = exclude_method_list.concat(exclude?.method ?? []);
    exclude_all_members = exclude?.members ?? false;
    if (exclude?.self) {
        exclude_self = exclude_all_members = true;
    }

    if (class_node.$.parent) {
        ifaces.push(transformExtension(class_node.$.parent));
    }
    if (class_node.implements) {
        for (let iface of class_node.implements) {
            ifaces.push(transformExtension(iface.$.name));
        }
    }

    if (class_node.method) {
        for (let m of class_node.method) {
            methods.push(m);
        }
    }

    // console.log('rendering ' + class_node.$.name);
    if (class_node.hasOwnProperty('constructor')) {
        // console.log(class_node.constructor);
        for (let c of class_node.constructor) {
            if (typeof c !== 'function')
                ctors.push(c);
        }
    }

    if (class_node.function) {
        for (let f of class_node.function) {
            static_funcs.push(f);
        }
    }

    let mixinDocstring = ""
    mixinDocstring += `/** This construct is only for enabling class multi-inheritance,\n`;
    mixinDocstring += ` * use {@link ${class_name}} instead.\n`
    mixinDocstring += ` */\n`;

    let header = '';
    header += mixinDocstring;
    header += `interface I${class_name}`;

    const method_str_list: string[] = methods.map((m) => {
        // if method is present in exclude_list
        const excluded = (exclude_method_list.includes(m.$.name) || exclude_all_members);
        const funcModifier = modifier?.function?.[m.$.name];
        let method_str = renderMethod(m, ns_name, funcModifier, { include_access_modifier: false, indentNum: 1, exclude: excluded });
        return method_str;
    });

    let mixin = "";
    mixin += mixinDocstring;
    mixin += `type ${class_name}Mixin = I${class_name}`;
    if (ifaces.length > 0) {
        mixin += " &"
        mixin += ` ${ifaces.join(' & ')}`;
    }
    mixin += ";\n\n";

    let extension = "";
    extension += renderDocString(class_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name)
    extension += `${exclude_self ? '// ' : ''}interface ${class_name} extends ${class_name}Mixin {}\n`;

    let body = method_str_list.join('\n');

    body = ` {\n` +
        `${body}\n` +
        `}\n\n`;

    let iface_str = header + body;

    const ctor_str_list: string[] = ctors.map((c) => {
        // console.log(c);
        const funcModifier = modifier?.function?.[c.$.name];
        return renderMethod(c, ns_name, funcModifier, { indentNum: 1, staticFunc: true });
    });
    const ctors_body = ctor_str_list.join('\n');

    const static_func_str_list: string[] = static_funcs.map((sf) => {
        const funcModifier = modifier?.function?.[sf.$.name];
        return renderMethod(sf, ns_name, funcModifier, { indentNum: 1, staticFunc: true });
    });
    const static_func_body = static_func_str_list.join('\n');

    const constructor_modifier = modifier?.function?.["constructor"];
    const classGenericModifier = modifier?.generic ?? "";
    const static_side = '\n' +
        `class ${class_name}${classGenericModifier} {\n` +
        `${renderMethod(BuildConstructorNode(class_name), ns_name, constructor_modifier, {
            indentNum: 1,
            isConstructor: true
        })}\n` +
        `${ctors_body}` + NeedNewLine(ctors_body) +
        `${static_func_body + NeedNewLine(static_func_body)}` +
        `}\n`;

    return iface_str + mixin + extension + static_side;

}

function renderNamespace(ns_node: NamespaceNode, ns_name: string, exclude?: ExcludeDesc, modifiers?: ModifierDesc): string {
    let body = '';
    let class_nodes: ClassNode[] = [];
    if (ns_node.class)
        class_nodes = class_nodes.concat(ns_node.class);
    for (let class_node of class_nodes) {
        let class_name = class_node.$.name;
        // if (exclude && class_name in exclude.exclude.class)
        body += '\n\t' + (renderClassAsInterface(
            class_node,
            ns_name,
            exclude?.exclude?.class?.[class_name],
            modifiers?.amend?.class?.[class_name]
        )).replace(/\n/gm, "\n\t");
    }
    if (ns_node.record)
        for (let rec_node of ns_node.record) {
            body += '\n\t' + (renderRecordAsClass(
                rec_node,
                ns_name,
                exclude ? exclude.exclude.class[rec_node.$.name] : undefined,
                modifiers?.amend?.class?.[rec_node.$.name]
            ) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.interface)
        for (let iface_node of ns_node.interface) {
            body += '\n\t' + (renderClassAsInterface(
                iface_node as ClassNode,
                ns_name,
                exclude?.exclude?.class?.[iface_node.$.name],
                modifiers?.amend?.class?.[iface_node.$.name]
            ) + '\n\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.enumeration)
        for (let enum_node of ns_node.enumeration) {
            body += '\n\t' + (renderEnumeration(enum_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.bitfield)
        for (let bf_node of ns_node.bitfield) {
            body += '\n\t' + (renderEnumeration(bf_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.callback)
        for (let cb_node of ns_node.callback) {
            body += '\n\t' + (renderCallback(cb_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.union)
        for (let union_node of ns_node.union) {
            body += '\n\t' + (renderNodeAsBlankInterface(union_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.alias)
        for (let alias_node of ns_node.alias) {
            body += '\n\t' + (renderAlias(alias_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
        }
    if (ns_node.function)
        for (let func_node of ns_node.function) {
            let exc = exclude && exclude.exclude.function ? exclude.exclude.function : undefined;
            body += '\n\t' + (renderFreeFunction(
                func_node,
                ns_name,
                exc,
                modifiers?.amend?.function?.[func_node.$.name]
            ) + '\n').replace(/\n/gm, "\n\t");
        }

    // Change lines with only whitespace chars to empty strings 
    body = body.split("\n").reduce((p, c) => p += (c.trim() == "" ? "\n" : `${c}\n`));
    return `declare namespace imports.gi.${ns_node.$.name} {\n${body}}`;
}

//#region Generator

interface ParseGIRResult {
    repository: {
        "namespace": NamespaceNode[];
    }
}

interface GeneratorResult {
    gir_name: string;
    typing_str: string;
}


export class Generator {

    private lib_list: { lib_name: string; xml_str: string }[];
    private ns_list: { lib_name: string; ns_node: NamespaceNode }[] = [];
    private exclude_json_map: { [class_name: string]: any } = {};
    private modifier_json_map: { [lib_name: string]: ModifierDesc } = {};

    constructor(gir_xml_list: { lib_name: string; xml_str: string }[], exclude_json_map: { [class_name: string]: any } = {}, modifier_json_map: { [lib_name: string]: ModifierDesc }) {
        this.lib_list = gir_xml_list;
        this.exclude_json_map = exclude_json_map;
        this.modifier_json_map = modifier_json_map;
    }



    public generateTypings(cb: (res: GeneratorResult[]) => any) {
        let self = this;
        let count = 0;

        function cb_counter() {
            if (++count === self.lib_list.length)
                proceed();
        }

        const parser = new Parser();

        //let ns_list: NamespaceNode[] = [];
        for (let lib of this.lib_list) {
            parser.parseString(lib.xml_str, (err: Error, res: ParseGIRResult) => {
                // console.log(res.repository.namespace[0].class[4].constructor)
                this.ns_list.push({
                    lib_name: lib.lib_name,
                    ns_node: res.repository.namespace[0]
                });
                cb_counter();
            });
        }
        function proceed() {
            const res: GeneratorResult[] = [];
            for (let ns of self.ns_list) {
                const ns_name = ns.ns_node.$.name;
                const typing_str = renderNamespace(ns.ns_node, ns_name, self.exclude_json_map[ns.lib_name], self.modifier_json_map[ns.lib_name]);
                res.push({
                    gir_name: ns.lib_name,
                    typing_str: typing_str
                });
            }
            cb(res);
        }
    }

    //#endregion

}