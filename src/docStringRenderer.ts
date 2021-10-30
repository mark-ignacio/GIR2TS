import { Parameter } from "./functionUtils";
import { TypeInfo } from "./paramRenderer";

// TODO: Add support for param links like #param
export function renderDocString(docString: string | null, params?: Parameter[], return_info?: TypeInfo, indent: number = 0, ns_name?: string): string {
    if (docString == null)
        return "";

    const ind = "\t".repeat(indent);

    /** Convert references to for same library, like #SoupMessage to {link Message} */
    function convertLinks(doc: string | undefined, ns_name?: string): string | undefined {
        if (doc == undefined)
            return doc;

        if (ns_name == undefined)
            return doc;

        const regex = new RegExp(`#${ns_name}[\\w\\d]*`, "gm");
        const result = regex.exec(doc);
        if (result != null) {
            for (const item of result) {
                if (item == `#${ns_name}`) {
                    continue;
                }

                const newItem = item.replace(`#${ns_name}`, "");
                doc = doc.replace(item, `{@link ${newItem.toString()}}`);
            }
        }
        return doc;
    }

    let doc = `${ind}/**\n`;
    for (const line of convertLinks(docString?.replace(/@/g, "#"), ns_name)?.split("\n") ?? []) {
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
                const lines = convertLinks(param.docString.replace(/@/g, "#"), ns_name)?.split("\n") ?? [""];
                doc += ` ${lines[0]}\n`;
                if (lines.length > 1)
                    for (let i = 1; i < lines.length; i++) {
                        const line = lines[i];
                        doc += `${ind} * ${line}\n`;
                    }
            }
        }


    if (return_info?.type != null && return_info.type != "void") {
        const lines = convertLinks(return_info.docString?.replace(/@/g, "#"), ns_name)?.split("\n") ?? [""];
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