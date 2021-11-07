import { renderDocString } from "./docStringRenderer";
import { getFunctionInfo } from "../utils/functionUtils";
import { FunctionNode } from "../types/gir-types";
import { FunctionModifier } from "../types/modifier-types";

export interface RenderMethodOptions {
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
export function renderMethod(
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
    str += renderDocString(
        info.doc,
        info.params,
        info.return_type,
        { 
            ns_name: ns_name,
            indent: indentNum,
            deprecatedDoc: info.deprecatedDoc ?? undefined
        }
    );
    
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