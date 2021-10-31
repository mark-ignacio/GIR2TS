import { EnumNode } from "../types/gir-types";
import { renderDocString } from "./docStringRenderer";

export function renderEnumeration(enum_node: EnumNode, ns_name: string): string {
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