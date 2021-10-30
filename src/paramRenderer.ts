import { ClassNode, EnumNode, FunctionNode, InterfaceNode, NamespaceNode, ParameterNode, Node, RecordNode } from "./gir-types";

function convertToJSType(native_type?: string): string {
    // If undefined ti should be any
    if (native_type == null)
        return "any";
    
    switch (native_type) {
        case 'guint':
        case 'guint8':
        case 'guint16':
        case 'guint32':
        case 'guint64':
        case 'gint':
        case 'gint8':
        case 'gint16':
        case 'gint32':
        case 'gint64':
        case 'glong':
        case 'gulong':
        case 'gshort':
        case 'gushort':
        case 'guint':
        case 'gfloat':
        case 'gufloat':
        case 'gdouble':
        case 'gudouble':
        case 'gsize':
        case 'gssize':
        case 'long double':
            return 'number';
        case 'utf8':
        case 'gchar':
        case 'gunichar':
        case 'filename':
            return 'string';
        case 'gboolean':
            return 'boolean';
        case 'none':
            return 'void';
        case 'GType':
            return 'GObject.Type';
        case 'gpointer':
            return 'any';
        case 'va_list':
            return 'any[]';
        default:
            return native_type;
    }
}

export interface TypeInfo {
    type: string;
    docString: string | null;
}

export function getTypeFromParameterNode(param_node: ParameterNode): TypeInfo {
    let type: string | null = null;
    let doc: string | null = "";
    if (param_node?.type?.[0]) {
        type = convertToJSType(param_node.type[0].$.name);
        doc = param_node.doc?.[0]?._ ?? null;
    } else if (param_node.array && param_node.array[0].type) {
        type = convertToJSType(param_node.array[0].type[0].$.name) + '[]';
        doc = param_node.doc?.[0]?._ ?? null;
    } else if (param_node.array && param_node.array[0].array) {
        ({ type, docString:doc } = getTypeFromParameterNode(param_node.array[0] as ParameterNode));
        type += "[]";
    } else {
        console.log("can't get param type", JSON.stringify(param_node, null, 4))
        return {
            type: "any",
            docString: null
        };
    }
    if (type == undefined) {

    }
    return {
        type: type,
        docString: doc
    };
}