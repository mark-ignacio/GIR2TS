import { NodeWithType } from "../types/gir-types";
import { GetTypeInfo } from "../utils/paramUtils";
import { renderDocString } from "./docStringRenderer";

export function RenderConstant(node: NodeWithType, ns_name: string, exclude?: boolean) {
    const type = GetTypeInfo(node);
    let result = renderDocString(node?.doc?.[0]?._ ?? null, undefined, type, { ns_name: ns_name});
    if (exclude)
        result+= "// ";
    result+= `const ${node?.$?.name}: ${type.type};`;
    return result;
}