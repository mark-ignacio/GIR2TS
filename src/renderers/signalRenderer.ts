import { FunctionNode } from "../types/gir-types";
import { FunctionModifier } from "../types/modifier-types";
import { FunctionInfo, getFunctionInfo } from "../utils/functionUtils";
import { renderDocString } from "./docStringRenderer";

export function renderSignal(node: FunctionNode, ns_name: string, exclude: boolean = false, indent: number = 0, modifiers?: FunctionModifier) {
    const info = getFunctionInfo(node, modifiers);
    
    let result = renderDocString(info.doc, undefined, undefined, indent, ns_name);
    result += "\t".repeat(indent);
    if (exclude)
        result += "// ";

    result+= `connect(signal: "${info.name}", callback: (owner: this${info.params.length > 0 ? ", " : ""}${info.params.map(x => x.name + ": " + x.type).join(", ")}) => ${info.return_type?.type}): number;\n`;
    return result;
}

export function renderSignalFromInfo(info: FunctionInfo, ns_name: string, exclude: boolean = false, indent: number = 0) {  
    let result = renderDocString(info.doc, undefined, undefined, indent, ns_name);
    result += "\t".repeat(indent);
    if (exclude)
        result += "// ";

    result+= `connect(signal: "${info.name}", callback: (owner: this${info.params.length > 0 ? ", " : ""}${info.params.map(x => x.name + ": " + x.type).join(", ")}) => ${info.return_type?.type}): number;\n`;
    return result;
}