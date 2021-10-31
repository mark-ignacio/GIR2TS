import { renderDocString } from "./docStringRenderer";
import { FunctionNode, ParameterNode, RecordNode } from "../types/gir-types";
import { ExcludeClass } from "../types/exclude-types";
import { BuildConstructorNode } from "../utils/utils";
import { GetTypeInfo } from "../utils/paramUtils";
import { renderMethod } from "./methodRenderer";
import { ClassModifier, FunctionModifier } from "../types/modifier-types";
import { ignored_property_names } from "../consts";

function getAllMethods(object: RecordNode): FunctionNode[] {
    let methods: FunctionNode[] = [];
    if (object.method) {
        methods = methods.concat(object.method);
    }
    if (object['virtual-method']) {
        methods = methods.concat(object['virtual-method']);
    }
    return methods;
}

export function renderProperty(prop_node: ParameterNode, ns_name: string, include_access_modifier: boolean = true, indent: number = 0, exclude?: boolean): string {
    let prop_name = prop_node.$.name;
    if (prop_name === 'constructor') {
        prop_name += '_'; // Append an underscore.
    }
    let result = renderDocString(prop_node.doc?.[0]?._ ?? null, undefined, undefined, indent, ns_name);
    result += "\t".repeat(indent);
    if (exclude)
        result += "// ";
    result += (include_access_modifier) ? 'public ' : "";
    if (prop_node?.$?.writable != 1)
        result+= "readonly ";
    result += (prop_name.replace(/-/g, '_') + ': ' + GetTypeInfo(prop_node).type + ';');
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

export function renderRecordAsClass(rec_node: RecordNode, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {
    let props: ParameterNode[] = [];
    let callback_fields: FunctionNode[] = [];
    let methods = getAllMethods(rec_node);

    if (rec_node.field)
        for (let f of rec_node.field) {
            if ((f.type || f.array) && !ignored_property_names.includes(f.$.name)) {
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
        const excluded = exclude?.prop?.includes(f.$.name) ?? false;
        body += renderProperty(f, ns_name, true, 1, excluded) + '\n';
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