import { FunctionNode } from "../types/gir-types";

export function NeedNewLine(text: string): string {
    if (text != null && text.trim() != "" && !text.endsWith("\n"))
        return "\n";
    return "";
}

export function BuildConstructorNode(class_name: string): FunctionNode {
    return {
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

                ]
            }
        ]
    }
}