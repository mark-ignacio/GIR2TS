import { FunctionNode } from "../types/gir-types";
import { FunctionModifier } from "../types/modifier-types";
import { getFunctionInfo } from "../utils/functionUtils";
import { renderDocString } from "./docStringRenderer";

export function renderFreeFunction(func_node: FunctionNode, ns_name: string, exclude_list: string[] | null = null, modifier?: FunctionModifier): string {
    let { name, return_type, params, doc } = getFunctionInfo(func_node, modifier);

    let str = `${renderDocString(doc, params, return_type, 0, ns_name)}`;
    if (exclude_list && exclude_list.indexOf(name) !== -1) {
        str += '// ';
    }
    str += `function ${name}(${params.map((p) => `${p.name}: ${p.type}`).join(', ')})${(return_type != null) ? (": " + return_type.type) : ""};`;
    return str;
}