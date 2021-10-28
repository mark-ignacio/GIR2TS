namespace GIR2TS {

    let js_reserved_words = `
        abstract else instanceof super boolean enum int switch break export
        arguments
        eval
        interface
        constructor
        synchronized
        byte
        extends
        let
        this
        case
        false
        long
        throw
        catch
        final
        native
        throws
        char
        finally
        new
        transient
        class
        float
        null
        true
        const
        for
        package
        try
        continue
        function
        private
        typeof
        debugger
        goto
        protected
        var
        default
        if
        public
        void
        delete
        implements
        return
        volatile
        do
        import
        short
        while
        double
        in
        static
        with
    `

    export interface parseGIRCallback {
        (error: Error, result: ParseGIRResult): void;
    }

    interface NodeAttributes {
        name: string;
    }


    interface ParameterAttributes extends NodeAttributes {
        direction?: string;
    }

    interface MemberAttributes extends NodeAttributes {
        value: number;
    }

    interface ClassAttributes extends NodeAttributes {
        parent?: string;
    }

    interface Node {
        "$": NodeAttributes
        "_": string;
        // doc can't have another doc inside
        doc?: Omit<Node, "doc">[];
    }

    interface ParameterNode extends Node {
        $: ParameterAttributes;
        type?: Node[];
        array?: NodeWithType[];
        doc?: Node[];
    }

    interface NodeWithType extends Node {
        type?: Node[];
        array?: NodeWithType[];
    }

    interface ParametersNode extends Node {
        parameter: ParameterNode[];
    }

    interface FunctionNode extends Node {
        "return-value": ParameterNode[];
        parameters: ParametersNode[];
        doc?: Node[];
    }

    interface Parameter {
        type: string;
        name: string;
        docString: string | null;
        optional: boolean;
    }

    interface FunctionInfo {
        name: string;
        return_type: ReturnInfo;
        params: Parameter[];
        doc: string | null;
    }

    interface ReturnInfo {
        type: string;
        is_primitive: boolean;
        docString: string | null;
    }

    interface MemberNode extends Node {
        $: MemberAttributes;
        doc?: Node[];
    }

    interface EnumNode extends Node {
        member: MemberNode[];
        doc?: Node[];
    }

    interface FieldNode extends ParameterNode {
        "callback"?: FunctionNode[];
    }

    interface RecordNode extends Node {
        "field": FieldNode[];
        "method": FunctionNode[];
        "constructor"?: FunctionNode[]
        doc?: Node[];
    }

    interface ClassNode extends Node {
        $: ClassAttributes;
        "implements": Node[];
        "constructor": FunctionNode[];
        "function": FunctionNode[];
        //"field": NodeWithType[];
        "glib-signal": Node[];
        "method": FunctionNode[];
        "virtual-method": FunctionNode[];
        "property": ParameterNode[];
        "doc": Node[];
    }

    interface InterfaceNode extends Node {
        "method": FunctionNode[];
        "virtual-method": FunctionNode[];
        "property": ParameterNode[];
    }

    export interface NamespaceNode extends Node {
        "class": ClassNode[];
        "record": RecordNode[];
        "interface": InterfaceNode[];
        "enumeration": EnumNode[];
        "bitfield": EnumNode[];
        "callback": FunctionNode[];
        "function": FunctionNode[];
        "union": Node[];
        "alias": ParameterNode[];
    }

    function NeedNewLine(text: string): string {
        if (text != null && text.trim() != "" && !text.endsWith("\n"))
            return "\n";
        return "";
    }


    function convertToJSType(native_type: string): string {
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

    function getTypeFromParameterNode(param_node: ParameterNode): [string, boolean, string | null] {
        let type: string | null = null;
        let is_primitive = false;
        let doc: string | null = "";
        if (param_node?.type?.[0]) {
            type = convertToJSType(param_node.type[0].$.name);
            is_primitive = (type !== param_node.type[0].$.name);
            doc = param_node.doc?.[0]?._ ?? null;
        } else if (param_node.array && param_node.array[0].type) {
            type = convertToJSType(param_node.array[0].type[0].$.name) + '[]';
            is_primitive = (type !== (param_node.array[0].type[0].$.name + '[]'));
            doc = "";
        } else if (param_node.array && param_node.array[0].array) {
            [type, is_primitive, doc] = getTypeFromParameterNode(param_node.array[0] as ParameterNode);
            type += "[]";
        }else {
            console.log("can't get param type", JSON.stringify(param_node, null, 4))
            return ['any', false, ""];
        }
        return [type, is_primitive, doc];
    }


    export function renderProperty(prop_node: ParameterNode, include_access_modifier: boolean = true): string {
        let prop_name = prop_node.$.name;
        if (prop_name === 'constructor') {
            prop_name += '_'; // Append an underscore.
        }
        return (include_access_modifier ? 'public ' : '') + prop_name.replace(/-/g, '_') + ': ' + getTypeFromParameterNode(prop_node)[0] + ';';
    }


    function getFunctionInfo(func_node: FunctionNode): FunctionInfo {
        var func_name = func_node.$.name;
        const [return_type, primitive, returnDoc] = getTypeFromParameterNode(func_node['return-value'][0]);
        var params: Parameter[] = [];
        const doc = func_node.doc?.[0]?.["_"] ?? null;
        //var has_params = "parameter" in method_node.parameters[0];

        if (func_node.parameters && func_node.parameters[0].parameter) {
            for (var param_node of func_node.parameters[0].parameter) {
                if (param_node.$.name === '...' || param_node.$.name === 'user_data') continue;
                let param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) { // if clashes with JS reserved word.
                    param_name = '_' + param_name;
                }
                let [type, is_primitive] = getTypeFromParameterNode(param_node);
                params.push({
                    name: param_name,
                    type: type,
                    docString: param_node?.doc?.[0]?._ ?? null,
                    optional: false
                });
            }
        }

        return {
            name: func_name,
            return_type: {
                type: return_type,
                docString: returnDoc,
                is_primitive: primitive
            },
            params: params,
            doc: doc
        }
    }

    function renderFreeFunction(func_node: FunctionNode, ns_name: string, exclude_list: string[] | null = null): string {
        let { name, return_type, params, doc } = getFunctionInfo(func_node);
        let str = `${renderDocString(doc, params, return_type, 0, ns_name)}`;
        if (exclude_list && exclude_list.indexOf(name) !== -1) {
            str+= '// ';
        }
        str += `function ${name}(${params.map((p) => `${p.name}: ${p.type}`).join(', ')}): ${return_type.type};`;
        return str;
    }

    // TODO: Add support for param links like #param
    function renderDocString(docString: string | null, params?: Parameter[], return_info?: ReturnInfo, indent: number = 0, ns_name?: string): string {
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

        
        if (return_info != null && return_info.type != "void") {
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

    interface RenderMethodOptions {
        exclude_name: boolean,
        exclude_access_modifier: boolean;

    }

    function renderNewParam(paramInfo: NewParam): string {
        return `${paramInfo.name}:${paramInfo?.optional ? "?" : ""} ${paramInfo?.type}`;
    }


    /*
        Produces the TS string declaring the method represented by method_node.
    */
    export function renderMethod(
        method_node: FunctionNode,
        include_access_modifier: boolean = true,
        include_name: boolean = true,
        forExternalInterfaceInNamespace: string | null = null,
        indentNum: number,
        ns_name: string,
        exclude: boolean = false,
        staticFunc: boolean = false,
        funcModifier?: FunctionModifier,
        constructor?: boolean
    ): string {

        // interface Parameter {
        //     type: string;
        //     name: string;
        // }

        var method_name = method_node.$.name;
        let return_type: string = "any", primitive: boolean = false, docString: string | null = null;
        if (!constructor) {
            [return_type, primitive, docString] = getTypeFromParameterNode(method_node['return-value']?.[0]);

            // Modifiers
            return_type = funcModifier?.return_type?.type ?? return_type;
            docString = funcModifier?.return_type?.doc ?? docString;
        }
        

        var params: Parameter[] = [];
        //var has_params = "parameter" in method_node.parameters[0];

        //console.log('rendering ' + method_name);

        if (method_node?.parameters && "parameter" in method_node?.parameters?.[0]) {
            for (const param_node of method_node.parameters[0].parameter) {
                if (param_node.$.name === '...' || param_node.$.name === "user_data") continue;

                let param_name = param_node.$.name;
                if (funcModifier?.param?.[param_name]?.skip) 
                    continue;

                if (js_reserved_words.indexOf(param_name) !== -1) { // if clashes with JS reserved word.
                    param_name = '_' + param_name;
                }
                let [type, is_primitive, doc] = getTypeFromParameterNode(param_node);
                if (!is_primitive && forExternalInterfaceInNamespace) {
                    type = forExternalInterfaceInNamespace + '.' + type;
                }


                let finalType = funcModifier?.param?.[param_name]?.type ?? ((funcModifier?.param?.[param_name]?.type_extension?.length ?? 0 > 1) ? `${type} | ${funcModifier?.param?.[param_name]?.type_extension?.join(" | ")}` : type);
                params.push({
                    name: funcModifier?.param?.[param_name]?.newName ?? param_name,
                    type: finalType,
                    docString: funcModifier?.param?.[param_name]?.doc ?? (doc ?? null),
                    optional: funcModifier?.param?.[param_name]?.optional ?? false
                });
            }
        }

        // Add any new params at the end
        if (funcModifier?.newParam != null) {
            for (const param of funcModifier.newParam) {
                params.push({
                    docString: param?.doc ?? null,
                    type: param.type,
                    name: param.name,
                    optional: param.optional ?? false
                })
            }
        }

        //var str = (include_access_modifier ? 'public ' : '') + method_name + ' (';
        const ind = "\t".repeat(indentNum);
        let indentAdded = false;
        let str = '';
        str += renderDocString(method_node.doc?.[0]?._ ?? null, params, { type: return_type, is_primitive: primitive, docString: docString }, indentNum, ns_name);
        if (exclude) {
            str += `${ind}// `;
            indentAdded = true;
        }

        if (include_access_modifier) {
            if (!indentAdded) {
                str += ind;
                indentAdded = true;
            }
            str += `public `;
            indentAdded = true;
        }
        if (staticFunc) {
            if (!indentAdded) {
                str += ind;
                indentAdded = true;
            }
            str += `static `;
            indentAdded = true;
        }
        if (include_name) {
            if (!indentAdded) {
                str += ind;
                indentAdded = true;
            }
            str += method_name;
        }

        if (!indentAdded) {
            str += ind;
            indentAdded = true;
        }
        str += '(';

        if (params.length > 0) {
            for (var param of params) {
                str += param.name + (param.optional ? "?" : "") + ': ' + param.type + ', ';
            }
            str = str.slice(0, -2);
        }

        str += ')'
        if (!constructor)
            str += ': ' + return_type;
        str += ";";

        return str;
    }


    export function renderCallback(cb_node: FunctionNode, ns_name: string): string {
        const cb_name = cb_node.$.name;
        let body = renderDocString(cb_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
        body += `interface ${cb_name} {\n${renderMethod(cb_node, false, false, undefined, 1, ns_name)}\n}`;
        return body;
    }


    function arrayMinus<T>(first: T[], second: T[], equals: { (a: T, b: T): boolean }): T[] {
        return first.filter((a) => {
            for (let b of second) {
                if (equals(a, b)) {
                    return false;
                }
            }
            return true;
        });
    }


    export function removeDuplicates<T>(arr: T[], equals: { (a: T, b: T): boolean }): T[] {
        const unique_arr: T[] = [];
        arr.forEach((elem) => {
            let dup = false;
            for (let e of unique_arr) {
                if (equals(e, elem)) {
                    dup = true;
                    break;
                }
            }
            if (!dup) unique_arr.push(elem);
        });
        return unique_arr;
    }


    export function searchNodeByName<N extends Node>(nodes: N[], name: string): N | null {
        for (let c of nodes) {
            if (c.$.name === name) {
                return c;
            }
        }
        return null;
    }

    function getAllMethods(object: { method: FunctionNode[] }): FunctionNode[] {
        let methods: FunctionNode[] = [];
        if (object.method) {
            methods = methods.concat(object.method);
        }
        if (object['virtual-method']) {
            methods = methods.concat(object['virtual-method']);
        }
        return methods;
    }

    function getProperties(object: { property: ParameterNode[] | null }): ParameterNode[] {
        let props: ParameterNode[] = [];
        if (object.property) {
            props = props.concat(object.property);
        }
        return props;
    }

    function getFields(object: { field: ParameterNode[] }): ParameterNode[] {
        if (object.field) {
            return getProperties({ property: object.field });
        }
        return [];
    }


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
        result +=`enum ${enum_node.$.name} {\n${body}}`;
        return result;
    }


    function renderCallbackField(cb_node: FunctionNode, ns_name: string, indent: number, exclude: boolean): string {
        let cb_name = cb_node.$.name;
        if (cb_name === 'constructor') {
            cb_name += '_'; // Append an underscore.
        }

        let result = `${"\t".repeat(indent)}`;
        if (exclude)
            result += "// ";
        result+= `${cb_name}: {${renderMethod(cb_node, false, false, undefined, 0, ns_name)}};`
        return result;
    }

    function renderConstructorField(constructor_node: FunctionNode, ns_name: string, indent: number, exclude: boolean, modifier?: FunctionModifier) {
        return `${renderMethod(constructor_node, false, true, undefined, indent, ns_name, exclude, true, modifier)}`
    }


    export function renderNodeAsBlankInterface(node: Node, ns_name: string) {
        let result = renderDocString(node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
        result += `interface ${node.$.name} {}`;
        return result;
    }

    export function renderAlias(alias_node: ParameterNode, ns_name: string): string {
        let result = renderDocString(alias_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
        result += `type ${alias_node.$.name} = ${getTypeFromParameterNode(alias_node)[0]};`;
        return result;
    }

    export function renderRecordAsClass(rec_node: RecordNode, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {
        let props: ParameterNode[] = [];
        let callback_fields: FunctionNode[] = [];
        let methods = getAllMethods(rec_node);

        if (rec_node.field)
            for (let f of rec_node.field) {
                if (f.type || f.array) {
                    props.push(f);
                } else if (f.callback) {
                    callback_fields.push(f.callback[0]);
                }
            }
        let body = '';

        // Constructor keyword causes problems here so we need to check with stringify as well
        // even if value is null it still comes up as function
        if (JSON.stringify(rec_node.constructor) != undefined && rec_node.constructor != null) {
            for (let construct of rec_node.constructor) {
                if (JSON.stringify(construct) == undefined || construct == null)
                    continue;
                const func_name = construct.$.name;
                const excluded = exclude?.static?.includes(func_name) ?? false;
                const modifierFunc = modifier?.function?.[func_name]
                body += renderConstructorField(construct, ns_name, 1, excluded, modifierFunc) + "\n";
            }
        }

        for (let f of props) {
            body+= renderDocString(f.doc?.[0]._ ?? null, undefined, undefined, 1, ns_name)
            const excluded = exclude?.prop?.includes(f.$.name) ?? false;
            body += '\t';
            if (excluded)
                body += "// "
            body += renderProperty(f) + '\n';
        }
            
        for (let c of callback_fields) {
            const func_name = c.$.name;
            const excluded = exclude?.callback?.includes(func_name) ?? false;
            body += renderCallbackField(c, ns_name, 1, excluded) + '\n';
        }

        for (let m of methods) {
            const func_name = m.$.name;
            const excluded = exclude?.method?.includes(func_name) ?? false;
            const modifierFunc = modifier?.function?.[func_name]
            body += renderMethod(m, undefined, undefined, undefined, 1, ns_name, excluded, undefined, modifierFunc) + '\n';
        }

        let result = renderDocString(rec_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name);
        result += `class ${rec_node.$.name} {\n${body}}`;
        return result
    }

    function BuildConstructorNode(class_name: string): FunctionNode {
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

    /*
        Render class as a TS interface with construct signature.
        Saves us a lot of hassle with generating stud declarations for implemented
        methods.
        @exclude_list : An array of member names to exclude.
    */
    export function renderClassAsInterface(class_node: ClassNode, ns_name: string, exclude?: ExcludeClass, modifier?: ClassModifier): string {

        const class_name = class_node.$.name;
        const ifaces: string[] = [];
        const methods: FunctionNode[] = [];
        const ctors: FunctionNode[] = [];
        const static_funcs: FunctionNode[] = [];
        let exclude_method_list: string[] = [];
        let exclude_self = false;
        let exclude_all_members = false;

        function transformExtension(className: string): string {
            const parts = className.split(".");
            parts[parts.length - 1] = `I${parts[parts.length - 1]}`
            return parts.join(".")
        }

        exclude_method_list = exclude_method_list.concat(exclude?.method ?? []);
        exclude_all_members = exclude?.members ?? false;
        if (exclude?.self) {
            exclude_self = exclude_all_members = true;
        }

        if (class_node.$.parent) {
            ifaces.push(transformExtension(class_node.$.parent));
        }
        if (class_node.implements) {
            for (let iface of class_node.implements) {
                ifaces.push(transformExtension(iface.$.name));
            }
        }

        if (class_node.method) {
            for (let m of class_node.method) {
                methods.push(m);
            }
        }

        // console.log('rendering ' + class_node.$.name);
        if (class_node.hasOwnProperty('constructor')) {
            // console.log(class_node.constructor);
            for (let c of class_node.constructor) {
                if (typeof c !== 'function')
                    ctors.push(c);
            }
        }

        if (class_node.function) {
            for (let f of class_node.function) {
                static_funcs.push(f);
            }
        }

        let mixinDocstring = ""
        mixinDocstring += `/** This construct is only for enabling class multi-inheritance,\n`;
        mixinDocstring += ` * use {@link ${class_name}} instead.\n`
        mixinDocstring += ` */\n`;

        let header = '';
        header += mixinDocstring;
        header += `interface I${class_name}`;

        const method_str_list: string[] = methods.map((m) => {
            // if method is present in exclude_list
            const excluded = (exclude_method_list.includes(m.$.name) || exclude_all_members);
            const funcModifier = modifier?.function?.[m.$.name];
            let method_str = renderMethod(m, false, undefined, undefined, 1, ns_name, excluded, undefined, funcModifier);
            return method_str;
        });

        let mixin = "";
        mixin += mixinDocstring;
        mixin += `type ${class_name}Mixin = I${class_name}`;
        if (ifaces.length > 0) {
            mixin += " &"
            mixin += ` ${ifaces.join(' & ')}`;
        }
        mixin+= ";\n\n";

        let extension = "";
        extension+= renderDocString(class_node?.doc?.[0]?._ ?? null, undefined, undefined, 0, ns_name)
        extension+= `${exclude_self ? '// ' : ''}interface ${class_name} extends ${class_name}Mixin {}\n`;

        let body = method_str_list.join('\n');

        body = ` {\n` +
            `${body}\n` +
            `}\n\n`;

        let iface_str = header + body;

        const ctor_str_list: string[] = ctors.map((c) => {
            // console.log(c);
            const funcModifier = modifier?.function?.[c.$.name];
            return renderMethod(c, false, undefined, undefined, 1, ns_name, false, true, funcModifier);
        });
        const ctors_body = ctor_str_list.join('\n');

        const static_func_str_list: string[] = static_funcs.map((sf) => {
            const funcModifier = modifier?.function?.[sf.$.name];
            return renderMethod(sf, false, undefined, undefined, 1, ns_name, false, true, funcModifier);
        });
        const static_func_body = static_func_str_list.join('\n');

        const constructor_modifier = modifier?.function?.["constructor"];
        const static_side = '\n' +
            `class ${class_name} {\n` +
            `${renderMethod(BuildConstructorNode(class_name), false, undefined, undefined, 1, ns_name, false, false, constructor_modifier, true)}\n` +
            `${ctors_body}` + NeedNewLine(ctors_body) +
            `${static_func_body + NeedNewLine(static_func_body)}` +
            `}\n`;

        return iface_str + mixin + extension + static_side;

    }


    export function renderInterface(iface_node: InterfaceNode, exclude: string | string[], ns_name: string): string {

        let exclude_method_list: string[] = [];
        let exclude_self = false;
        let exclude_all_members = false;

        if (exclude instanceof Array) {
            exclude_method_list = exclude_method_list.concat(exclude);
        } else if (exclude === 'all') {
            exclude_all_members = true;
        } else if (exclude === 'self') {
            exclude_self = exclude_all_members = true;
        }

        let body = '\n\n';
        const methods = removeDuplicates(getAllMethods(iface_node), (a, b) => a.$.name === b.$.name);
        for (let m of methods) {
            body += renderMethod(m, false, undefined, undefined, 1, ns_name) + '\n';
        }

        return `interface ${iface_node.$.name} {${body}}`;
    }


    export interface ExcludeDesc {
        "exclude": {
            "class": {
                [klass: string]: ExcludeClass;
            },
            "function": string[]
        }
    }

    export interface ExcludeClass {
        prop?: string[],
        method?: string[],
        static?: string[],
        callback?: string[],
        members?: boolean,
        self?: boolean
    }

    export interface ModifierDesc {
        amend: {
            class: {
                [klass: string]: ClassModifier;
            }
        }
    }

    export interface ClassModifier {
        doc?: string;
        function: {
            [klass: string]: FunctionModifier;
        }
    }

    export interface FunctionModifier {
        doc?: string;
        return_type?: ParamModifier;
        param?: {
            [param_name: string]: ParamModifier;
        },
        newParam?: NewParam[]
    }

    export interface NewParam {
        optional?: boolean;
        doc?: string;
        type: string;
        name: string;
    }

    export interface ParamModifier {
        doc?: string;
        type?: string;
        type_extension?: string[];
        optional?: boolean;
        newName?: string;
        skip?: boolean
    }

    export function renderNamespace(ns_node: NamespaceNode, ns_name: string, exclude?: ExcludeDesc, modifiers?: ModifierDesc): string {
        let body = '';
        let class_nodes: ClassNode[] = [];
        if (ns_node.class)
            class_nodes = class_nodes.concat(ns_node.class);
        for (let class_node of class_nodes) {
            let class_name = class_node.$.name;
            // if (exclude && class_name in exclude.exclude.class)
            body += '\n\t' + (GIR2TS.renderClassAsInterface(
                class_node,
                ns_name,
                exclude?.exclude?.class?.[class_name],
                modifiers?.amend?.class?.[class_name]
            )).replace(/\n/gm, "\n\t");
        }
        if (ns_node.record)
            for (let rec_node of ns_node.record) {
                body += '\n\t' + (GIR2TS.renderRecordAsClass(
                    rec_node,
                    ns_name,
                    exclude ? exclude.exclude.class[rec_node.$.name] : undefined,
                    modifiers?.amend?.class?.[rec_node.$.name]
                ) + '\n').replace(/\n/gm, "\n\t");
            }
        if (ns_node.interface)
            for (let iface_node of ns_node.interface) {
                body += '\n\t' + (GIR2TS.renderClassAsInterface(
                    iface_node as ClassNode,
                    ns_name,
                    exclude?.exclude?.class?.[iface_node.$.name],
                    modifiers?.amend?.class?.[iface_node.$.name]
                ) + '\n\n').replace(/\n/gm, "\n\t");
            }
        if (ns_node.enumeration)
            for (let enum_node of ns_node.enumeration) {
                body += '\n\t' + (GIR2TS.renderEnumeration(enum_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
            }
        if (ns_node.bitfield)
            for (let bf_node of ns_node.bitfield) {
                body += '\n\t' + (GIR2TS.renderEnumeration(bf_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
            }
        if (ns_node.callback)
            for (let cb_node of ns_node.callback) {
                body += '\n\t' + (GIR2TS.renderCallback(cb_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
            }
        if (ns_node.union)
            for (let union_node of ns_node.union) {
                body += '\n\t' + (GIR2TS.renderNodeAsBlankInterface(union_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
            }
        if (ns_node.alias)
            for (let alias_node of ns_node.alias) {
                body += '\n\t' + (GIR2TS.renderAlias(alias_node, ns_name) + '\n').replace(/\n/gm, "\n\t");
            }
        if (ns_node.function)
            for (let func_node of ns_node.function) {
                let exc = exclude && exclude.exclude.function ? exclude.exclude.function : undefined;
                body += '\n\t' + (renderFreeFunction(func_node, ns_name, exc) + '\n').replace(/\n/gm, "\n\t");
            }
        
        // Change lines with only whitespace chars to empty strings 
        body = body.split("\n").reduce((p, c) => p += (c.trim() == "" ? "\n" : `${c}\n`));
        return `declare namespace imports.gi.${ns_node.$.name} {\n${body}}`;
    }


    export interface ParseGIRResult {
        repository: {
            "namespace": NamespaceNode[];
        }
    }

    /*
        This function parses the GIR file producing a JS object tree.
        The rest of the program renders this tree as TS declarations.
    */
    export function parseGIR(file_path: string, cb: parseGIRCallback) {
        const fs = require('fs');
        const xml2js = require('xml2js');
        const parser = new xml2js.Parser();
        fs.readFile(file_path, function (err, data) {
            if (err) {
                console.log("Error reading file.");
                return;
            }
            parser.parseString(data, cb);
        });
    }


    export interface GeneratorResult {
        gir_name: string;
        typing_str: string;
    }


    export class Generator {

        private lib_list: { lib_name: string; xml_str: string }[];
        private ns_list: { lib_name: string; ns_node: NamespaceNode }[] = [];
        private exclude_json_map: { [class_name: string]: any } = {};
        private modifier_json_map: { [lib_name: string]: ModifierDesc } = {};

        constructor(gir_xml_list: { lib_name: string; xml_str: string }[], exclude_json_map: { [class_name: string]: any } = {}, modifier_json_map: { [lib_name: string]: ModifierDesc }) {
            this.lib_list = gir_xml_list;
            this.exclude_json_map = exclude_json_map;
            this.modifier_json_map = modifier_json_map;
        }



        public generateTypings(cb: (res: GeneratorResult[]) => any) {
            let self = this;
            let count = 0;

            function cb_counter() {
                if (++count === self.lib_list.length)
                    proceed();
            }

            const xml2js = require('xml2js');
            const parser = new xml2js.Parser();

            //let ns_list: NamespaceNode[] = [];
            for (let lib of this.lib_list) {
                parser.parseString(lib.xml_str, (err: Error, res: ParseGIRResult) => {
                    // console.log(res.repository.namespace[0].class[4].constructor)
                    this.ns_list.push({
                        lib_name: lib.lib_name,
                        ns_node: res.repository.namespace[0]
                    });
                    cb_counter();
                });
            }
            function proceed() {
                const res: GeneratorResult[] = [];
                for (let ns of self.ns_list) {
                    const ns_name = ns.ns_node.$.name;
                    const typing_str = renderNamespace(ns.ns_node, ns_name, self.exclude_json_map[ns.lib_name], self.modifier_json_map[ns.lib_name]);
                    res.push({
                        gir_name: ns.lib_name,
                        typing_str: typing_str
                    });
                }
                cb(res);
            }
        }

    }

}

import fs = require('fs');
import path = require('path');

function main() {
    console.log(__dirname);
    var argv = require('minimist')(process.argv.slice(2));
    let gir_files: string[] = [];
    let outdir = __dirname;
    let exclude_json_map: { [class_name: string]: any } = {};
    let modifier_json_map: { [lib_name: string]: GIR2TS.ModifierDesc } = {};
    if (argv.outdir) {
        console.log("Output typings directory: " + argv.outdir);
        outdir = path.join(__dirname, argv.outdir);
        if (fs.statSync(outdir).isDirectory()) {
        } else {
            throw new Error("out dir specified is not a directory.");
        }
    } else {
        throw new Error("No out dir specified.");
    }
    if (argv.overridesdir) {
        console.log("Excludes directory: " + argv.overridesdir);
        let dir = path.join(__dirname, argv.overridesdir);
        let json_files: string[] = [];
        if (fs.statSync(dir).isDirectory()) {
            json_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
        for (let json_file of json_files) {
            let lib_name = path.basename(json_file, '.json');
            let data = fs.readFileSync(json_file, 'utf8');
            exclude_json_map[lib_name] = JSON.parse(data);
        }
    }
    if (argv.modifiersdir) {
        console.log("Modifiers directory: " + argv.modifiersdir);
        let dir = path.join(__dirname, argv.modifiersdir);
        let json_files: string[] = [];
        if (fs.statSync(dir).isDirectory()) {
            json_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
        for (let json_file of json_files) {
            let lib_name = path.basename(json_file, '.json');
            let data = fs.readFileSync(json_file, 'utf8');
            modifier_json_map[lib_name] = JSON.parse(data);
        }
    }
    if (argv.girdir) {
        console.log("GIR directory: " + argv.girdir);
        let dir = path.join(__dirname, argv.girdir);
        if (fs.statSync(dir).isDirectory()) {
            gir_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
    } else {
        // gir_files.push(path.join(__dirname, argv._[0]));
        gir_files = gir_files.concat(argv._.map((arg) => path.join(__dirname, arg)));
    }
    const gir_xml_list: { lib_name: string; xml_str: string }[] = [];
    for (let file of gir_files) {
        const gir_name = path.basename(file, '.gir');
        let data = '';
        try {
            data = fs.readFileSync(file, 'utf8');
        } catch (e) {
            if (e instanceof Error)
                console.log(e.message);
            return;
        }
        gir_xml_list.push({
            lib_name: gir_name,
            xml_str: data

        });
    }

    const gen = new GIR2TS.Generator(gir_xml_list, exclude_json_map, modifier_json_map);
    gen.generateTypings((res) => {
        for (let lib of res) {
            let outfile = path.join(outdir, lib.gir_name + '.d.ts');
            try {
                fs.writeFileSync(outfile, lib.typing_str);
            } catch (err) {
                if (err instanceof Error)
                    console.log(err.message);
                return;
            }
            console.log("wrote to " + outfile);
        }
    });
}

main();
//exports.lib = GIR2TS;
