import { js_reserved_words } from "../consts";
import { FunctionNode, NamespaceNode } from "../types/gir-types";

export function NeedNewLine(text: string): string {
    if (text != null && text.trim() != "" && !text.endsWith("\n"))
        return "\n";
    return "";
}

export function BuildConstructorNode(class_name: string): FunctionNode {
    const node: FunctionNode = {
        _: "constructor",
        $: {
            name: "constructor"
        },
        "return-value": [
            {
                $: {
                    name: class_name
                },
                _: class_name,
                type: []
            }
        ],
        "parameters": [
            {
                "_": "",
                $: {
                    name: "obj"
                },
                "parameter": [
                    {
                        "_": "",
                        $: {
                            name: "options?",
                        },
                        type: [
                            {
                                $: {
                                    name: `Partial<${class_name}InitOptions>`
                                },
                                _: ""
                            }
                        ]
                    }
                ]
            }
        ]
    }

    return node;
}

export function GatherNodeNames(ns_node: NamespaceNode): string[] {
    const result: string[] = [];

    for (let class_node of ns_node.class ?? []) {
        let class_name = class_node.$.name;
        result.push(class_name);            

        ns_node.record = ns_node.record.filter((x) => x.$.name != `${class_name}Private` && x.$.name != `${class_name}Class`);
    }

    for (let rec_node of ns_node.record ?? []) {
        result.push(rec_node.$.name);
    }
    for (let iface_node of ns_node.interface ?? []) {
        result.push(iface_node.$.name);
    }

    for (let enum_node of ns_node.enumeration ?? []) {
        result.push(enum_node.$.name);
    }

    for (let bf_node of ns_node.bitfield ?? []) {
        result.push(bf_node.$.name)
    }
    for (let cb_node of ns_node.callback ?? []) {
        result.push(cb_node.$.name)
    }

    for (let union_node of ns_node.union ?? []) {
        result.push(union_node.$.name);
    }

    for (let alias_node of ns_node.alias ?? []) {
        result.push(alias_node.$.name)
    }

    for (let func_node of ns_node.function ?? []) {
        result.push(func_node.$.name)
    }
    /*for (let constant of ns_node.constant ?? []) {
        if (js_reserved_words.includes(constant.$?.name) || constant.$?.name.match(/^\d/))
            continue;

        result.push(constant.$.name);
    }*/

    return result;
}

export function getSnakeCaseNamespaceMap(namespaces: string[]): Record<string, string> {
    let ns_names = namespaces.slice();
    let result: Record<string, string> = {} 
    for (let i = 0; i < ns_names.length; i++) {
        result[camel_to_snake(ns_names[i])] = ns_names[i]
    }

    return result;
}

export function getSnakeCaseNodeNameMap(ns_node: NamespaceNode): Record<string, string> {
    const relevantNs = GatherNodeNames(ns_node);
    const result: Record<string, string> = {};
    for (let i = 0; i < relevantNs.length; i++) {
        result[camel_to_snake(relevantNs[i])] = relevantNs[i]
    }
    return result;
}

const camel_to_snake = (str: string) => str[0].toLowerCase() + str.slice(1, str.length).replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);
