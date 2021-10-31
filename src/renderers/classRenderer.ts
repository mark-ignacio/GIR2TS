import { ClassNode, FunctionNode, ParameterNode } from "../types/gir-types";
import { ClassModifier, FunctionModifier, ModifierDesc } from "../types/modifier-types";
import { ExcludeClass } from "../types/exclude-types";
import { renderMethod } from "./methodRenderer";
import { BuildConstructorNode, NeedNewLine } from "../utils/utils";
import { renderDocString } from "./docStringRenderer";
import { ignored_property_names } from "../consts";
import { renderProperty } from "./propertyRenderer";
import { renderSignal } from "./signalRenderer";

/*
    Render class as a TS interface with construct signature.
    Saves us a lot of hassle with generating stud declarations for implemented
    methods.
    @exclude_list : An array of member names to exclude.
*/
export function renderClassAsInterface(class_node: ClassNode, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {

    const class_name = class_node.$.name;
    const ifaces: string[] = [];
    const methods: FunctionNode[] = [];
    const ctors: FunctionNode[] = [];
    const static_funcs: FunctionNode[] = [];
    const fields: ParameterNode[] = [];
    const signals: FunctionNode[] = [];
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

    if (class_node.property) {
        for (let prop of class_node.property) {
            if (prop.$.private == 1 || prop.$.readable == 0 || ignored_property_names.includes(prop.$.name))
                continue;
            fields.push(prop);
        }
    }

    if (class_node.field) {
        for (let field of class_node.field) {
            if (field.$.private == 1 || field.$.readable == 0 || ignored_property_names.includes(field.$.name))
                continue;
            fields.push(field);
        }
    }

    if (class_node.method) {
        for (let m of class_node.method) {
            methods.push(m);
        }
    }

    if (class_node["glib:signal"]) {
        for (const signal of class_node["glib:signal"]) {
            signals.push(signal);
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

    let body = "";

    let fieldsAdded: Set<string> = new Set();
    if (fields.length > 0) {
        const methodNames = new Set(methods.map((x) => x.$.name));
        for (const field of fields) {
            const fieldName = field.$.name.replace(/-/g, "_");

            let excluded = false;
            if (methodNames.has(fieldName)) 
                excluded = true;
            if (fieldsAdded.has(fieldName))
                excluded = true;
            if (exclude?.prop?.includes(fieldName))
                excluded = true

            body+= `${renderProperty(field, ns_name, modifier?.prop?.[fieldName] , false, 1, excluded)}\n`;
            fieldsAdded.add(fieldName);
        }
    }

    if (method_str_list.length > 0) {
        body += method_str_list.join('\n');
    }

    if (signals.length > 0) {
        body+= "\n";
        for (const signal of signals) {
            body+= renderSignal(signal, ns_name, false, 1);
        }
    }

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