import { Parameter } from "../utils/functionUtils";
import { TypeInfo } from "../utils/paramUtils";
import { nsNodeSnakeCaseMap, nsSnakeCaseMap } from "../gir2ts";

export interface DocStringOptions {
    ns_name: string;
    indent?: number;
    deprecatedDoc?: string;
}

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}



/**
 * Replaces snake_case or lowercase ns names and node names with their
 * CamelCase equivalents
 * @param text 
 * @param ns_name 
 * @returns 
 */
function replaceNSAndNodeNames(text: string, ns_name: string): string {
    const ns_names = nsSnakeCaseMap;

    //#region  Special case handlers
    // GMenu refs to change into CMenu
    if (ns_name == "CMenu" && text.startsWith("gmenu"))
        text = text.replace("gmenu", "c_menu")

    //CMenu refers to gio as g
    if (ns_name == "CMenu" && text.startsWith("g_"))
        text = text.replace("g", "gio");

    // These namespaces refer to GObject as g. For Gtk, it can't be reliably determined
    if (["Atk", "CinnamonDesktop", "Clutter"].includes(ns_name) && text.startsWith("g_")) {
        text = text.replace("g", "g_object");
    }

    if (ns_name == "Cinnamon" && text.startsWith("g_"))
        text = text.replace("g", "glib");


    //#endregion

    // Start with the longest name first to prevent early exit
    for (const ns_snake of Object.keys(ns_names).sort((a, b) => b.length - a.length)) {
        const ns_camel = ns_names[ns_snake];
        // Main logic
        if (text.startsWith(ns_snake)) {
            const nodeNameMap = nsNodeSnakeCaseMap[ns_camel];
            let textMinusNameSpace = text.replace(ns_snake, "");

            let finalText = ns_camel;
            for (const ns_node_snake of Object.keys(nodeNameMap).sort((a, b) => b.length - a.length)) {
                const ns_node_camel = nodeNameMap[ns_node_snake];
                
                if (textMinusNameSpace.startsWith(`_${ns_node_snake}`)) {
                    textMinusNameSpace = textMinusNameSpace.replace(`_${ns_node_snake}`, `.${ns_node_camel}`);
                    break;
                }
                else if (textMinusNameSpace.startsWith(`_${ns_node_camel.toLowerCase()}`)) {
                    textMinusNameSpace = textMinusNameSpace.replace(`_${ns_node_camel.toLowerCase()}`, `.${ns_node_camel}`);
                    break;
                }
            }

            return finalText + textMinusNameSpace;
        }
    }

    return text;
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

function convertFunctionLinks(doc: string, ns_name: string): string {
    if (doc == undefined)
        return doc;

    // Find any function looking substrings
    const regex = new RegExp(`[\\S]+\\(\\)`, "gm");
    const result = regex.exec(doc);
    if (result != null) {
        for (const item of result) {
            // Should not start with special characters
            if (item.match(/\^[\\W]*/)?.length ?? 0 > 0)
                continue;

            let newItem = item;

            // If it starts with #, it should be a link, so we remove it for processing.
            if (item.startsWith("#"))
                newItem = newItem.replace("#", "")

            // Remove function brackets handler
            newItem = item.replace("()", "");
            // Replace leading NS name and Node names with their correct equivalents
            newItem = replaceNSAndNodeNames(newItem, ns_name);

            const parts = newItem.split("_");
            if (parts.length < 2)
                continue;

            const [ first, ...rest ] = parts;

            newItem = `${capitalize(first)}.${rest.join("_")}`;
            doc = doc.replace(item, `{@link ${newItem.toString()}}`);
        }
    }
    return doc;
}

function prepareDocString(doc: string | undefined, ns_name: string): string[] | undefined {
    if (doc == undefined)
        return doc;

    let result = doc.replace(/@/g, "#");
    result = convertFunctionLinks(result, ns_name);
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
        for (const line of prepareDocString(deprecatedDoc, ns_name ?? "") ?? []) {
            doc += `${ind} * ${line}\n`
        }
        doc += `${ind} * \n`;
    }

    for (const line of prepareDocString(docString, ns_name ?? "") ?? []) {
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
                const lines = prepareDocString(param.docString, ns_name ?? "") ?? [""];
                doc += ` ${lines[0]}\n`;
                if (lines.length > 1)
                    for (let i = 1; i < lines.length; i++) {
                        const line = lines[i];
                        doc += `${ind} * ${line}\n`;
                    }
            }
        }


    if (return_info?.type != null && return_info.type != "void") {
        const lines = prepareDocString(return_info.docString ?? undefined, ns_name ?? "") ?? [""];
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