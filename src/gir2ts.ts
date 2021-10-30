import { Parser } from 'xml2js';
import fs = require('fs');
import { ClassNode, EnumNode, FunctionNode, InterfaceNode, NamespaceNode, ParameterNode, Node, RecordNode } from "./gir-types";
import { ClassModifier, FunctionModifier, ModifierDesc } from "./modifier-types";
import { ExcludeClass, ExcludeDesc } from "./exclude-types";
import { js_reserved_words } from "./consts";

interface Parameter {
    type: string;
    name: string;
    docString: string | null;
    optional: boolean;
}

interface FunctionInfo {
    name: string;
    return_type?: ReturnInfo;
    params: Parameter[];
    doc: string | null;
}

interface ReturnInfo {
    type: string;
    is_primitive: boolean;
    docString: string | null;
}

function NeedNewLine(text: string): string {
    if (text != null && text.trim() != "" && !text.endsWith("\n"))
        return "\n";
    return "";
}


function convertToJSType(native_type: string): string {
    switch (native_type) {
        case 'guint':
        case 'guint8':
        case 'guint16':
        case 'guint32':
        case 'guint64':
        case 'gint':
        case 'gint8':
        case 'gint16':
        case 'gint32':
        case 'gint64':
        case 'glong':
        case 'gulong':
        case 'gshort':
        case 'gushort':
        case 'guint':
        case 'gfloat':
        case 'gufloat':
        case 'gdouble':
        case 'gudouble':
        case 'gsize':
        case 'gssize':
        case 'long double':
            return 'number';
        case 'utf8':
        case 'gchar':
        case 'gunichar':
        case 'filename':
            return 'string';
        case 'gboolean':
            return 'boolean';
        case 'none':
            return 'void';
        case 'GType':
            return 'GObject.Type';
        case 'gpointer':
            return 'any';
        case 'va_list':
            return 'any[]';
        default:
            return native_type;
    }
}

function getTypeFromParameterNode(param_node: ParameterNode): [string, boolean, string | null] {
    let type: string | null = null;
    let is_primitive = false;
    let doc: string | null = "";
    if (param_node?.type?.[0]) {
        type = convertToJSType(param_node.type[0].$.name);
        is_primitive = (type !== param_node.type[0].$.name);
        doc = param_node.doc?.[0]?._ ?? null;
    } else if (param_node.array && param_node.array[0].type) {
        type = convertToJSType(param_node.array[0].type[0].$.name) + '[]';
        is_primitive = (type !== (param_node.array[0].type[0].$.name + '[]'));
        doc = "";
    } else if (param_node.array && param_node.array[0].array) {
        [type, is_primitive, doc] = getTypeFromParameterNode(param_node.array[0] as ParameterNode);
        type += "[]";
    } else {
        console.log("can't get param type", JSON.stringify(param_node, null, 4))
        return ['any', false, ""];
    }
    return [type, is_primitive, doc];
}


function renderProperty(prop_node: ParameterNode, include_access_modifier: boolean = true): string {
    let prop_name = prop_node.$.name;
    if (prop_name === 'constructor') {
        prop_name += '_'; // Append an underscore.
    }
    return (include_access_modifier ? 'public ' : '') + prop_name.replace(/-/g, '_') + ': ' + getTypeFromParameterNode(prop_node)[0] + ';';
}


function getFunctionInfo(func_node: FunctionNode, modifier?: FunctionModifier, constructor: boolean = false): FunctionInfo {
    let func_name = func_node.$.name;
    let return_type: string = "any", primitive: boolean = false, returnDoc: string | null = null;
    if (!constructor) {
        [return_type, primitive, returnDoc] = getTypeFromParameterNode(func_node['return-value']?.[0]);

        // Modifiers
        return_type = modifier?.return_type?.type ?? return_type;
        returnDoc = modifier?.return_type?.doc ?? returnDoc;
    }
    let params: Parameter[] = [];
    const doc = func_node.doc?.[0]?.["_"] ?? null;
    //var has_params = "parameter" in method_node.parameters[0];

    if (func_node.parameters && func_node.parameters[0].parameter) {
        for (var param_node of func_node.parameters[0].parameter) {
            if (param_node.$.name === '...' || param_node.$.name === 'user_data') continue;
            let param_name = param_node.$.name;

            if (modifier?.param?.[param_name]?.skip)
                continue;

            if (js_reserved_words.indexOf(param_name) !== -1) { // if clashes with JS reserved word.
                param_name = '_' + param_name;
            }
            let [type, is_primitive] = getTypeFromParameterNode(param_node);
            params.push({
                name: modifier?.param?.[param_name]?.newName ?? param_name,
                type: modifier?.param?.[param_name]?.type ?? ((modifier?.param?.[param_name]?.type_extension?.length ?? 0 > 1) ? `${type} | ${modifier?.param?.[param_name]?.type_extension?.join(" | ")}` : type),
                docString: modifier?.param?.[param_name]?.doc ?? param_node?.doc?.[0]?._ ?? null,
                optional: modifier?.param?.[param_name]?.optional ?? false
            });
        }
    }

    if (modifier?.newParam != null) {
        for (const param of modifier.newParam) {
            params.push({
                docString: param?.doc ?? null,
                type: param.type,
                name: param.name,
                optional: param.optional ?? false
            })
        }
    }

    return {
        name: func_name,
        return_type: (constructor) ? undefined : {
            type: modifier?.return_type?.type ?? ((modifier?.return_type?.type_extension?.length ?? 0 > 1) ? `${return_type} | ${(modifier?.return_type?.type_extension?.join(" | "))}` : return_type),
            docString: modifier?.return_type?.doc ?? returnDoc,
            is_primitive: (modifier?.return_type?.type) ? false : primitive
        },
        params: params,
        doc: modifier?.doc ?? doc
    }
}

function renderFreeFunction(func_node: FunctionNode, ns_name: string, exclude_list: string[] | null = null, modifier?: FunctionModifier): string {
    let { name, return_type, params, doc } = getFunctionInfo(func_node, modifier);

    let str = `${renderDocString(doc, params, return_type, 0, ns_name)}`;
    if (exclude_list && exclude_list.indexOf(name) !== -1) {
        str += '// ';
    }
    str += `function ${name}(${params.map((p) => `${p.name}: ${p.type}`).join(', ')})${(return_type != null) ? (": " + return_type.type) : ""};`;
    return str;
}

// TODO: Add support for param links like #param
function renderDocString(docString: string | null, params?: Parameter[], return_info?: ReturnInfo, indent: number = 0, ns_name?: string): string {
    if (docString == null)
        return "";

    const ind = "\t".repeat(indent);

    /** Convert references to for same library, like #SoupMessage to {link Message} */
    function convertLinks(doc: string | undefined, ns_name?: string): string | undefined {
        if (doc == undefined)
            return doc;

        if (ns_name == undefined)
            return doc;

        const regex = new RegExp(`#${ns_name}[\\w\\d]*`, "gm");
        const result = regex.exec(doc);
        if (result != null) {
            for (const item of result) {
                if (item == `#${ns_name}`) {
                    continue;
                }

                const newItem = item.replace(`#${ns_name}`, "");
                doc = doc.replace(item, `{@link ${newItem.toString()}}`);
            }
        }
        return doc;
    }

    let doc = `${ind}/**\n`;
    for (const line of convertLinks(docString?.replace(/@/g, "#"), ns_name)?.split("\n") ?? []) {
        doc += `${ind} * ${line}\n`;
    }

    if (params != null)
        for (const param of params) {
            doc += `${ind} * @param ${param.name}`;
            if (param.docString == null) {
                doc += "\n";
                continue;
            }
            else {
                const lines = convertLinks(param.docString.replace(/@/g, "#"), ns_name)?.split("\n") ?? [""];
                doc += ` ${lines[0]}\n`;
                if (lines.length > 1)
                    for (let i = 1; i < lines.length; i++) {
                        const line = lines[i];
                        doc += `${ind} * ${line}\n`;
                    }
            }
        }


    if (return_info != null && return_info.type != "void") {
        const lines = convertLinks(return_info.docString?.replace(/@/g, "#"), ns_name)?.split("\n") ?? [""];
        doc += `${ind} * @returns ${lines[0]}\n`;
        if (lines.length > 1)
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                doc += `${ind} * ${line}\n`;
            }
    }

    doc += `${ind} */\n`
    return doc;
}

interface RenderMethodOptions {
    include_name?: boolean;
    include_access_modifier?: boolean;
    indentNum?: number;
    staticFunc?: boolean;
    isConstructor?: boolean;
    exclude?: boolean
}

/*
    Produces the TS string declaring the method represented by method_node.
*/
function renderMethod(
    method_node: FunctionNode,
    ns_name: string,
    funcModifier?: FunctionModifier,
    options: RenderMethodOptions = {
        include_access_modifier: true,
        include_name: true,
        indentNum: 0,
        exclude: false,
        staticFunc: false,
        isConstructor: false
    },
): string {

    const {
        include_access_modifier = true,
        include_name = true,
        indentNum = 0,
        exclude = false,
        staticFunc = false,
        isConstructor = false
    } = options;

    const info = getFunctionInfo(method_node, funcModifier, isConstructor);
    const ind = "\t".repeat(indentNum);
    let indentAdded = false;
    let str = '';
    str += renderDocString(info.doc, info.params, info.return_type, indentNum, ns_name);
    if (exclude) {
        str += `${ind}// `;
        indentAdded = true;
    }

    if (include_access_modifier) {
        if (!indentAdded) {
            str += ind;
            indentAdded = true;
        }
        str += `public `;
        indentAdded = true;
    }
    if (staticFunc) {
        if (!indentAdded) {
            str += ind;
            indentAdded = true;
        }
        str += `static `;
        indentAdded = true;
    }
    if (include_name) {
        if (!indentAdded) {
            str += ind;
            indentAdded = true;
        }
        str += info.name;
        if (funcModifier?.generic != null)
            str += funcModifier?.generic;
    }

    if (!indentAdded) {
        str += ind;
        indentAdded = true;
    }
    str += '(';

    if (info.params.length > 0) {
        let params: string[] = [];
        for (const param of info.params) {
            params.push(param.name + (param.optional ? "?" : "") + ': ' + param.type);
        }
        str += params.join(", ");
    }

    str += ')'
    if (info.return_type != null)
        str += ': ' + info.return_type.type;
    str += ";";

    return str;
}


function renderCallback(cb_node: FunctionNode, ns_name: string): string {
    const cb_name = cb_node.$.name;
    let body = renderDocString(cb_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
    body += `interface ${cb_name} {\n${renderMethod(cb_node, ns_name, undefined, { include_name: false, include_access_modifier: false, indentNum: 1 })}\n}`;
    return body;
}


function arrayMinus<T>(first: T[], second: T[], equals: { (a: T, b: T): boolean }): T[] {
    return first.filter((a) => {
        for (let b of second) {
            if (equals(a, b)) {
                return false;
            }
        }
        return true;
    });
}


function removeDuplicates<T>(arr: T[], equals: { (a: T, b: T): boolean }): T[] {
    const unique_arr: T[] = [];
    arr.forEach((elem) => {
        let dup = false;
        for (let e of unique_arr) {
            if (equals(e, elem)) {
                dup = true;
                break;
            }
        }
        if (!dup) unique_arr.push(elem);
    });
    return unique_arr;
}


function searchNodeByName<N extends Node>(nodes: N[], name: string): N | null {
    for (let c of nodes) {
        if (c.$.name === name) {
            return c;
        }
    }
    return null;
}

function getAllMethods(object: { method: FunctionNode[] }): FunctionNode[] {
    let methods: FunctionNode[] = [];
    if (object.method) {
        methods = methods.concat(object.method);
    }
    if (object['virtual-method']) {
        methods = methods.concat(object['virtual-method']);
    }
    return methods;
}

function getProperties(object: { property: ParameterNode[] | null }): ParameterNode[] {
    let props: ParameterNode[] = [];
    if (object.property) {
        props = props.concat(object.property);
    }
    return props;
}

function getFields(object: { field: ParameterNode[] }): ParameterNode[] {
    if (object.field) {
        return getProperties({ property: object.field });
    }
    return [];
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


function renderCallbackField(cb_node: FunctionNode, ns_name: string, indent: number, exclude: boolean): string {
    let cb_name = cb_node.$.name;
    if (cb_name === 'constructor') {
        cb_name += '_'; // Append an underscore.
    }

    let result = `${"\t".repeat(indent)}`;
    if (exclude)
        result += "// ";
    result += `public ${cb_name}: {${renderMethod(cb_node, ns_name, undefined, { include_name: false, include_access_modifier: false })}};`;
    return result;
}

/** Some static functions are in constructor nodes, render them as static functions */
function renderConstructorField(constructor_node: FunctionNode, ns_name: string, indent: number, exclude: boolean, modifier?: FunctionModifier) {
    return `${renderMethod(constructor_node, ns_name, modifier, { indentNum: indent, exclude: exclude, staticFunc: true })}`
}


function renderNodeAsBlankInterface(node: Node, ns_name: string) {
    let result = renderDocString(node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
    result += `interface ${node.$.name} {}`;
    return result;
}

function renderAlias(alias_node: ParameterNode, ns_name: string): string {
    let result = renderDocString(alias_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
    result += `type ${alias_node.$.name} = ${getTypeFromParameterNode(alias_node)[0]};`;
    return result;
}

function renderRecordAsClass(rec_node: RecordNode, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {
    let props: ParameterNode[] = [];
    let callback_fields: FunctionNode[] = [];
    let methods = getAllMethods(rec_node);

    if (rec_node.field)
        for (let f of rec_node.field) {
            if (f.type || f.array) {
                props.push(f);
            } else if (f.callback) {
                callback_fields.push(f.callback[0]);
            }
        }
    let body = '';

    // Constructor keyword causes problems here so we need to check with stringify as well
    // even if value is null it still comes up as function
    if (JSON.stringify(rec_node.constructor) != undefined && rec_node.constructor != null) {
        for (let construct of rec_node.constructor) {
            if (JSON.stringify(construct) == undefined || construct == null)
                continue;
            const func_name = construct.$.name;
            const excluded = exclude?.static?.includes(func_name) ?? false;
            const modifierFunc = modifier?.function?.[func_name]
            body += renderConstructorField(construct, ns_name, 1, excluded, modifierFunc) + "\n";
        }
    }

    for (let f of props) {
        body += renderDocString(f.doc?.[0]._ ?? null, undefined, undefined, 1, ns_name)
        const excluded = exclude?.prop?.includes(f.$.name) ?? false;
        body += '\t';
        if (excluded)
            body += "// "
        body += renderProperty(f) + '\n';
    }

    for (let c of callback_fields) {
        const func_name = c.$.name;
        const excluded = exclude?.callback?.includes(func_name) ?? false;
        body += renderCallbackField(c, ns_name, 1, excluded) + '\n';
    }

    for (let m of methods) {
        const func_name = m.$.name;
        const excluded = exclude?.method?.includes(func_name) ?? false;
        const modifierFunc = modifier?.function?.[func_name]
        body += renderMethod(m, ns_name, modifierFunc, { indentNum: 1, exclude: excluded }) + '\n';
    }

    let result = renderDocString(rec_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
    const genericModifier = modifier?.generic ?? "";
    const constructor_modifier = modifier?.function?.["constructor"];
    result += `interface ${rec_node.$.name} {}\n`
    result += `class ${rec_node.$.name}${genericModifier} {\n`
    result += `${renderMethod(BuildConstructorNode(rec_node.$.name), ns_name, constructor_modifier, { indentNum: 1, isConstructor: true })}\n`;
    result += `${body}}`;
    return result
}

function BuildConstructorNode(class_name: string): FunctionNode {
    return {
        _: "constructor",
        $: {
            name: "constructor"
        },
        "return-value": [
            {
                $: {
                    name: class_name
                },
                _: class_name,
                type: []
            }
        ],
        "parameters": [
            {
                "_": "",
                $: {
                    name: "obj"
                },
                "parameter": [

                ]
            }
        ]
    }
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


function renderInterface(iface_node: InterfaceNode, exclude: string | string[], ns_name: string): string {

    let exclude_method_list: string[] = [];
    let exclude_self = false;
    let exclude_all_members = false;

    if (exclude instanceof Array) {
        exclude_method_list = exclude_method_list.concat(exclude);
    } else if (exclude === 'all') {
        exclude_all_members = true;
    } else if (exclude === 'self') {
        exclude_self = exclude_all_members = true;
    }

    let body = '\n\n';
    const methods = removeDuplicates(getAllMethods(iface_node), (a, b) => a.$.name === b.$.name);
    for (let m of methods) {
        body += renderMethod(m, ns_name, undefined, {
            include_access_modifier: false,
            indentNum: 1
        }) + '\n';
    }

    return `interface ${iface_node.$.name} {${body}}`;
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