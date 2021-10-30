import { renderDocString } from "./docStringRenderer";
import { FunctionNode, ParameterNode, RecordNode } from "./gir-types";
import { ExcludeClass } from "./exclude-types";
import { BuildConstructorNode } from "./utils";
import { getTypeFromParameterNode } from "./paramRenderer";
import { renderMethod } from "./methodRenderer";
import { ClassModifier, FunctionModifier } from "./modifier-types";

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

function renderProperty(prop_node: ParameterNode): string {
    let prop_name = prop_node.$.name;
    if (prop_name === 'constructor') {
        prop_name += '_'; // Append an underscore.
    }
    return 'public ' + prop_name.replace(/-/g, '_') + ': ' + getTypeFromParameterNode(prop_node).type + ';';
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