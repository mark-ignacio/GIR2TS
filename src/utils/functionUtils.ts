import { js_reserved_words } from "../consts";
import { FunctionNode } from "../types/gir-types";
import { GetTypeInfo, TypeInfo } from "./paramUtils";
import { ClassModifier, FunctionModifier, ModifierDesc } from "../types/modifier-types";

export interface FunctionInfo {
    name: string;
    /** Only undefined if it's a constructor */
    return_type?: TypeInfo;
    params: Parameter[];
    doc: string | null;
}

export interface Parameter {
    type: string;
    name: string;
    docString: string | null;
    optional: boolean;
}

export function getFunctionInfo(func_node: FunctionNode, modifier?: FunctionModifier, constructor: boolean = false): FunctionInfo {
    let func_name = func_node.$.name;
    let return_type: string = "any", returnDoc: string | null = null;
    if (!constructor) {
        ({ type:return_type, docString:returnDoc } = GetTypeInfo(func_node['return-value']?.[0]));

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
            let { type, docString } = GetTypeInfo(param_node);
            params.push({
                name: modifier?.param?.[param_name]?.newName ?? param_name,
                type: modifier?.param?.[param_name]?.type ?? ((modifier?.param?.[param_name]?.type_extension?.length ?? 0 > 1) ? `${type} | ${modifier?.param?.[param_name]?.type_extension?.join(" | ")}` : type),
                docString: modifier?.param?.[param_name]?.doc ?? docString,
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
            docString: modifier?.return_type?.doc ?? returnDoc
        },
        params: params,
        doc: modifier?.doc ?? doc
    }
}