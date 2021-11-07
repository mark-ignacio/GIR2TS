import { ParameterNode } from "../types/gir-types";
import { ParamModifier } from "../types/modifier-types";
import { GetTypeInfo } from "../utils/paramUtils";
import { renderDocString } from "./docStringRenderer";

export function renderProperty(prop_node: ParameterNode, ns_name: string, modifiers?: ParamModifier, include_access_modifier: boolean = true, indent: number = 0, exclude?: boolean): string {
    let prop_name = prop_node.$.name;
    if (prop_name === 'constructor') {
        prop_name += '_'; // Append an underscore.
    }
    prop_name = prop_name.replace(/-/g, '_');

    let result = renderDocString(modifiers?.doc ?? prop_node.doc?.[0]?._ ?? null, undefined, undefined, {indent: indent, ns_name: ns_name});
    result += "\t".repeat(indent);
    if (exclude)
        result += "// ";
    result += (include_access_modifier) ? 'public ' : "";
    if (prop_node?.$?.writable != 1)
        result+= "readonly ";
    result += modifiers?.newName ?? prop_name;
    result += modifiers?.optional ? "?: " : ": ";
    result += GetTypeInfo(prop_node, modifiers).type + ';';
    return result;
}