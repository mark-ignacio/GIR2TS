import { Parameter } from "../utils/functionUtils";
import { TypeInfo } from "../utils/paramUtils";

export interface DocStringOptions {
    ns_name: string;
    indent?: number;
    deprecatedDoc?: string;
}


/** Convert references to for same library, like #SoupMessage to {link Message} */
function convertLinks(doc: string, ns_name?: string): string {
    if (doc == undefined)
        return doc;

    if (ns_name == undefined)
        return doc;

    /**
     *  @example Captures #Clutter:optional-prop
     */
    const regex = new RegExp(`#${ns_name}[\\w\\d:-]*(?<!:)`, "gm");
    const result = regex.exec(doc);
    if (result != null) {
        for (const item of result) {
            // Just the namespace name, skip
            if (item == `#${ns_name}`) {
                continue;
            }

            let newItem = item;

            newItem = newItem.replace(`#${ns_name}`, "").replace(/:+/g, ".").replace(/-/g, "_");
            doc = doc.replace(item, `{@link ${newItem.toString()}}`);
        }
    }
    return doc;
}

function prepareDocString(doc: string | undefined, ns_name?: string): string[] | undefined {
    if (doc == undefined)
        return doc;

    let result = doc.replace(/@/g, "#");
    result = convertLinks(result, ns_name);

    return result.split("\n");
}

// TODO: Add support for param links like #param
export function renderDocString(docString: string | null, params?: Parameter[], return_info?: TypeInfo, options?: DocStringOptions): string {
    const {
        indent = 0,
        ns_name,
        deprecatedDoc
    } = options ?? {};

    if (docString == null)
        return "";

    const ind = "\t".repeat(indent);

    let doc = `${ind}/**\n`;
    if (deprecatedDoc) {
        doc += `${ind} * @deprecated\n`;
        for (const line of prepareDocString(deprecatedDoc, ns_name) ?? []) {
            doc += `${ind} * ${line}\n`
        }
        doc += `${ind} * \n`;
    }

    for (const line of prepareDocString(docString, ns_name) ?? []) {
        doc += `${ind} * ${line}\n`;
    }

    if (params != null)
        for (const param of params) {
            doc += `${ind} * @param ${param.name}`;
            if (param.docString == null) {
                doc += "\n";
                continue;
            }
            else {
                const lines = prepareDocString(param.docString, ns_name) ?? [""];
                doc += ` ${lines[0]}\n`;
                if (lines.length > 1)
                    for (let i = 1; i < lines.length; i++) {
                        const line = lines[i];
                        doc += `${ind} * ${line}\n`;
                    }
            }
        }


    if (return_info?.type != null && return_info.type != "void") {
        const lines = prepareDocString(return_info.docString ?? undefined, ns_name) ?? [""];
        doc += `${ind} * @returns ${lines[0]}\n`;
        if (lines.length > 1)
            for (let i = 1; i < lines.length; i++) {
                const line = lines[i];
                doc += `${ind} * ${line}\n`;
            }
    }

    doc += `${ind} */\n`
    return doc;
}