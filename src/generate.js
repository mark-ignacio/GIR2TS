"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GIR2TS;
(function (GIR2TS) {
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
        break
    `;
    function convertToJSType(native_type) {
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
    function getTypeFromParameterNode(param_node) {
        var _a, _b, _c;
        let type = null;
        let is_primitive = false;
        let doc = "";
        if (param_node.type) {
            type = convertToJSType(param_node.type[0].$.name);
            is_primitive = (type !== param_node.type[0].$.name);
            doc = (_c = (_b = (_a = param_node.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b._) !== null && _c !== void 0 ? _c : null;
        }
        else if (param_node.array && param_node.array[0].type) {
            type = convertToJSType(param_node.array[0].type[0].$.name) + '[]';
            is_primitive = (type !== (param_node.array[0].type[0].$.name + '[]'));
            doc = "";
        }
        else if (param_node.array && param_node.array[0].array) {
            [type, is_primitive, doc] = getTypeFromParameterNode(param_node.array[0]);
            type += "[]";
            console.log(type);
        }
        else {
            console.log("can't get param type", JSON.stringify(param_node, null, 4));
            return ['any', false, ""];
        }
        return [type, is_primitive, doc];
    }
    function renderProperty(prop_node, include_access_modifier = true) {
        let prop_name = prop_node.$.name;
        if (prop_name === 'constructor') {
            prop_name += '_';
        }
        return (include_access_modifier ? 'public ' : '') + prop_name.replace(/-/g, '_') + ': ' + getTypeFromParameterNode(prop_node)[0] + ';';
    }
    GIR2TS.renderProperty = renderProperty;
    function getFunctionInfo(func_node) {
        var _a, _b, _c, _d, _e, _f;
        var func_name = func_node.$.name;
        const [return_type, primitive, returnDoc] = getTypeFromParameterNode(func_node['return-value'][0]);
        var params = [];
        const doc = (_c = (_b = (_a = func_node.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b["_"]) !== null && _c !== void 0 ? _c : null;
        if (func_node.parameters && func_node.parameters[0].parameter) {
            for (var param_node of func_node.parameters[0].parameter) {
                if (param_node.$.name === '...')
                    continue;
                let param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) {
                    param_name = '_' + param_name;
                }
                let [type, is_primitive] = getTypeFromParameterNode(param_node);
                params.push({
                    name: param_name,
                    type: type,
                    docString: (_f = (_e = (_d = param_node === null || param_node === void 0 ? void 0 : param_node.doc) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e._) !== null && _f !== void 0 ? _f : null
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
        };
    }
    function renderFreeFunction(func_node, ns_name, exclude_list = null) {
        let { name, return_type, params, doc } = getFunctionInfo(func_node);
        let str = `${renderDocString(doc, params, return_type, 0, ns_name)}function ${name}(${params.map((p) => `${p.name}: ${p.type}`).join(', ')}): ${return_type.type};`;
        if (exclude_list && exclude_list.indexOf(name) !== -1) {
            str = '// ' + str;
        }
        return str;
    }
    function renderDocString(docString, params, return_info, indent = 0, ns_name) {
        var _a, _b, _c, _d, _e, _f, _g;
        if (docString == null)
            return "";
        const ind = "\t".repeat(indent);
        function convertLinks(doc, ns_name) {
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
        for (const line of (_b = (_a = convertLinks(docString === null || docString === void 0 ? void 0 : docString.replace(/@/g, "#"), ns_name)) === null || _a === void 0 ? void 0 : _a.split("\n")) !== null && _b !== void 0 ? _b : []) {
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
                    const lines = (_d = (_c = convertLinks(param.docString.replace(/@/g, "#"), ns_name)) === null || _c === void 0 ? void 0 : _c.split("\n")) !== null && _d !== void 0 ? _d : [""];
                    doc += ` ${lines[0]}\n`;
                    if (lines.length > 1)
                        for (let i = 1; i < lines.length; i++) {
                            const line = lines[i];
                            doc += `${ind} * ${line}\n`;
                        }
                }
            }
        if (return_info != null && return_info.type != "void") {
            const lines = (_g = (_f = convertLinks((_e = return_info.docString) === null || _e === void 0 ? void 0 : _e.replace(/@/g, "#"), ns_name)) === null || _f === void 0 ? void 0 : _f.split("\n")) !== null && _g !== void 0 ? _g : [""];
            doc += `${ind} * @returns ${lines[0]}\n`;
            if (lines.length > 1)
                for (let i = 1; i < lines.length; i++) {
                    const line = lines[i];
                    doc += `${ind} * ${line}\n`;
                }
        }
        doc += `${ind} */\n`;
        return doc;
    }
    function renderMethod(method_node, include_access_modifier = true, include_name = true, forExternalInterfaceInNamespace = null, indentNum, ns_name, exclude = false) {
        var _a, _b, _c;
        var method_name = method_node.$.name;
        const [return_type, primitive, docString] = getTypeFromParameterNode(method_node['return-value'][0]);
        var params = [];
        if (method_node.parameters && "parameter" in method_node.parameters[0]) {
            for (var param_node of method_node.parameters[0].parameter) {
                if (param_node.$.name === '...')
                    continue;
                let param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) {
                    param_name = '_' + param_name;
                }
                let [type, is_primitive, doc] = getTypeFromParameterNode(param_node);
                if (!is_primitive && forExternalInterfaceInNamespace) {
                    type = forExternalInterfaceInNamespace + '.' + type;
                }
                params.push({
                    name: param_name,
                    type: type,
                    docString: doc !== null && doc !== void 0 ? doc : null
                });
            }
        }
        const ind = "\t".repeat(indentNum);
        let indentAdded = false;
        let str = '';
        str += renderDocString((_c = (_b = (_a = method_node.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b._) !== null && _c !== void 0 ? _c : null, params, { type: return_type, is_primitive: primitive, docString: docString }, indentNum, ns_name);
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
                str += param.name + ': ' + param.type + ', ';
            }
            str = str.slice(0, -2);
        }
        str += '): ' + return_type + ';';
        return str;
    }
    GIR2TS.renderMethod = renderMethod;
    function renderCallback(cb_node, ns_name) {
        var _a, _b, _c;
        const cb_name = cb_node.$.name;
        let body = renderDocString((_c = (_b = (_a = cb_node === null || cb_node === void 0 ? void 0 : cb_node.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b._) !== null && _c !== void 0 ? _c : null, undefined, undefined, 0, ns_name);
        body += `interface ${cb_name} {\n${renderMethod(cb_node, false, false, undefined, 1, ns_name)}\n}`;
        return body;
    }
    GIR2TS.renderCallback = renderCallback;
    function arrayMinus(first, second, equals) {
        return first.filter((a) => {
            for (let b of second) {
                if (equals(a, b)) {
                    return false;
                }
            }
            return true;
        });
    }
    function removeDuplicates(arr, equals) {
        const unique_arr = [];
        arr.forEach((elem) => {
            let dup = false;
            for (let e of unique_arr) {
                if (equals(e, elem)) {
                    dup = true;
                    break;
                }
            }
            if (!dup)
                unique_arr.push(elem);
        });
        return unique_arr;
    }
    GIR2TS.removeDuplicates = removeDuplicates;
    function searchNodeByName(nodes, name) {
        for (let c of nodes) {
            if (c.$.name === name) {
                return c;
            }
        }
        return null;
    }
    GIR2TS.searchNodeByName = searchNodeByName;
    function getAllMethods(object) {
        let methods = [];
        if (object.method) {
            methods = methods.concat(object.method);
        }
        if (object['virtual-method']) {
            methods = methods.concat(object['virtual-method']);
        }
        return methods;
    }
    function getProperties(object) {
        let props = [];
        if (object.property) {
            props = props.concat(object.property);
        }
        return props;
    }
    function getFields(object) {
        if (object.field) {
            return getProperties({ property: object.field });
        }
        return [];
    }
    function renderEnumeration(enum_node, ns_name) {
        var _a, _b, _c, _d, _e, _f;
        let body = '';
        for (let mem of enum_node.member) {
            let mem_name = mem.$.name;
            if (parseInt(mem_name)) {
                mem_name = '_' + mem_name;
            }
            body += renderDocString((_c = (_b = (_a = mem === null || mem === void 0 ? void 0 : mem.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b._) !== null && _c !== void 0 ? _c : null, undefined, undefined, 1, ns_name);
            body += `\t${mem_name.toUpperCase()} = ${mem.$.value},\n`;
        }
        body = body.slice(0, -2) + '\n';
        let result = renderDocString((_f = (_e = (_d = enum_node === null || enum_node === void 0 ? void 0 : enum_node.doc) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e._) !== null && _f !== void 0 ? _f : null, undefined, undefined, 0, ns_name);
        result += `enum ${enum_node.$.name} {\n${body}}`;
        return result;
    }
    GIR2TS.renderEnumeration = renderEnumeration;
    function renderCallbackField(cb_node, ns_name) {
        let cb_name = cb_node.$.name;
        if (cb_name === 'constructor') {
            cb_name += '_';
        }
        return `${cb_name} : {${renderMethod(cb_node, false, false, undefined, 0, ns_name)}};`;
    }
    function renderNodeAsBlankInterface(node, ns_name) {
        var _a, _b, _c;
        let result = renderDocString((_c = (_b = (_a = node === null || node === void 0 ? void 0 : node.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b._) !== null && _c !== void 0 ? _c : null, undefined, undefined, 0, ns_name);
        result += `interface ${node.$.name} {}`;
        return result;
    }
    GIR2TS.renderNodeAsBlankInterface = renderNodeAsBlankInterface;
    function renderAlias(alias_node, ns_name) {
        var _a, _b, _c;
        let result = renderDocString((_c = (_b = (_a = alias_node === null || alias_node === void 0 ? void 0 : alias_node.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b._) !== null && _c !== void 0 ? _c : null, undefined, undefined, 0, ns_name);
        result += `type ${alias_node.$.name} = ${getTypeFromParameterNode(alias_node)[0]};`;
        return result;
    }
    GIR2TS.renderAlias = renderAlias;
    function renderRecordAsClass(rec_node, ns_name) {
        var _a, _b, _c;
        let props = [];
        let callback_fields = [];
        let methods = getAllMethods(rec_node);
        if (rec_node.field)
            for (let f of rec_node.field) {
                if (f.type || f.array) {
                    props.push(f);
                }
                else if (f.callback) {
                    callback_fields.push(f.callback[0]);
                }
            }
        let body = '';
        for (let f of props) {
            body += '\t' + renderProperty(f) + '\n';
        }
        body += '\n';
        for (let c of callback_fields) {
            body += '\t' + renderCallbackField(c, ns_name) + '\n';
        }
        body += '\n';
        for (let m of methods) {
            body += renderMethod(m, undefined, undefined, undefined, 1, ns_name) + '\n';
        }
        let result = renderDocString((_c = (_b = (_a = rec_node === null || rec_node === void 0 ? void 0 : rec_node.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b._) !== null && _c !== void 0 ? _c : null, undefined, undefined, 0, ns_name);
        result += `class ${rec_node.$.name} {\n${body}}`;
        return result;
    }
    GIR2TS.renderRecordAsClass = renderRecordAsClass;
    function renderClassAsInterface(class_node, ns_name, exclude) {
        var _a, _b, _c;
        const class_name = class_node.$.name;
        const ifaces = [];
        const methods = [];
        const ctors = [];
        const static_funcs = [];
        let exclude_method_list = [];
        let exclude_self = false;
        let exclude_all_members = false;
        if (exclude instanceof Array) {
            exclude_method_list = exclude_method_list.concat(exclude);
        }
        else if (exclude === 'all') {
            exclude_all_members = true;
        }
        else if (exclude === 'self') {
            exclude_self = exclude_all_members = true;
        }
        if (class_node.$.parent) {
            ifaces.push(class_node.$.parent);
        }
        if (class_node.implements) {
            for (let iface of class_node.implements) {
                ifaces.push(iface.$.name);
            }
        }
        if (class_node.method) {
            for (let m of class_node.method) {
                methods.push(m);
            }
        }
        if (class_node.hasOwnProperty('constructor')) {
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
        let header = '';
        header += renderDocString((_c = (_b = (_a = class_node === null || class_node === void 0 ? void 0 : class_node.doc) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b._) !== null && _c !== void 0 ? _c : null, undefined, undefined, 0, ns_name);
        header += `${exclude_self ? '// ' : ''}interface ${class_name}`;
        if (ifaces.length > 0) {
            header += ` extends ${ifaces.join(', ')}`;
        }
        const method_str_list = methods.map((m) => {
            const excluded = ((exclude_method_list.length > 0 && (exclude === null || exclude === void 0 ? void 0 : exclude.indexOf(m.$.name)) !== -1) || exclude_all_members);
            let method_str = renderMethod(m, false, undefined, undefined, 1, ns_name, excluded);
            return method_str;
        });
        let body = method_str_list.join('\n');
        body = ` {\n` +
            `${body}\n` +
            `${exclude_self ? '// ' : ''}}\n`;
        let iface_str = header + body;
        const ctor_str_list = ctors.map((c) => {
            return renderMethod(c, false, undefined, undefined, 1, ns_name);
        });
        const ctors_body = ctor_str_list.join('\n');
        const static_func_str_list = static_funcs.map((sf) => {
            return renderMethod(sf, false, undefined, undefined, 1, ns_name);
        });
        const static_func_body = static_func_str_list.join('\n');
        const static_side = '\n' +
            `var ${class_name}: {\n` +
            `${ctors_body}\n` +
            `${static_func_body + (static_func_body.endsWith("\n") ? "" : "\n")}` +
            `}\n`;
        if (class_name == "DesktopAppInfo") {
            console.log(class_name, ctors_body, static_func_body);
        }
        return iface_str + static_side;
    }
    GIR2TS.renderClassAsInterface = renderClassAsInterface;
    function renderClassWithInterfaceMembers(class_node, ns_list = [], my_ns, ns_name) {
        let methods = [];
        let props = [];
        let externIfaceMethods = [];
        if (class_node.implements) {
            for (let iface of class_node.implements) {
                let iface_name = iface.$.name;
                let iface_list = [];
                let iface_ns = '';
                if (iface_name.indexOf('.') !== -1) {
                    iface_ns = iface_name.split('.')[0];
                    iface_name = iface_name.split('.')[1];
                    let ns_node = searchNodeByName(ns_list, iface_ns);
                    if (ns_node && ns_node.interface) {
                        iface_list = ns_node.interface;
                    }
                }
                else {
                    iface_list = my_ns.interface;
                }
                let i = searchNodeByName(iface_list, iface_name);
                if (i) {
                    externIfaceMethods = externIfaceMethods.concat(getAllMethods(i).map((m) => {
                        return {
                            ns_name: iface_ns,
                            method: m
                        };
                    }));
                }
            }
        }
        methods = methods.concat(getAllMethods(class_node));
        const unique_methods = removeDuplicates(methods, (a, b) => a.$.name === b.$.name);
        const unique_props = props;
        let str = '';
        str += 'class ' + class_node.$.name;
        if (class_node.$.parent) {
            str += ` extends ${class_node.$.parent}`;
        }
        if (class_node.implements) {
            str += ' implements ';
            for (let iface of class_node.implements) {
                str += iface.$.name + ', ';
            }
            str = str.slice(0, -2);
        }
        str += ' {\n';
        if (unique_props.length > 0) {
            str += '\n';
            for (let prop_str of unique_props.map((prop_node) => { return renderProperty(prop_node); })) {
                str += `\t${prop_str}\n`;
            }
        }
        if (unique_methods.length > 0) {
            str += '\n';
            for (let method_str of unique_methods.map((func_node) => { return renderMethod(func_node, undefined, undefined, undefined, 1, ns_name); })) {
                str += `${method_str}\n`;
            }
        }
        str += '\n';
        str += '}\n';
        return str;
    }
    GIR2TS.renderClassWithInterfaceMembers = renderClassWithInterfaceMembers;
    function renderInterface(iface_node, exclude, ns_name) {
        let exclude_method_list = [];
        let exclude_self = false;
        let exclude_all_members = false;
        if (exclude instanceof Array) {
            exclude_method_list = exclude_method_list.concat(exclude);
        }
        else if (exclude === 'all') {
            exclude_all_members = true;
        }
        else if (exclude === 'self') {
            exclude_self = exclude_all_members = true;
        }
        let body = '\n\n';
        const methods = removeDuplicates(getAllMethods(iface_node), (a, b) => a.$.name === b.$.name);
        for (let m of methods) {
            body += renderMethod(m, false, undefined, undefined, 1, ns_name) + '\n';
        }
        return `interface ${iface_node.$.name} {${body}}`;
    }
    GIR2TS.renderInterface = renderInterface;
    function renderNamespace(ns_node, ns_name, exclude) {
        let body = '';
        let class_nodes = [];
        if (ns_node.class)
            class_nodes = class_nodes.concat(ns_node.class);
        for (let class_node of class_nodes) {
            let class_name = class_node.$.name;
            body += '\n\n' + GIR2TS.renderClassAsInterface(class_node, ns_name, exclude ? exclude.exclude.class[class_name] : undefined) + '\n\n';
        }
        if (ns_node.record)
            for (let rec_node of ns_node.record) {
                body += '\n\n' + GIR2TS.renderRecordAsClass(rec_node, ns_name) + '\n\n';
            }
        if (ns_node.interface)
            for (let iface_node of ns_node.interface) {
                body += '\n\n' + GIR2TS.renderClassAsInterface(iface_node, ns_name, exclude ? exclude.exclude.class[iface_node.$.name] : undefined) + '\n\n';
            }
        if (ns_node.enumeration)
            for (let enum_node of ns_node.enumeration) {
                body += '\n\n' + GIR2TS.renderEnumeration(enum_node, ns_name) + '\n\n';
            }
        if (ns_node.bitfield)
            for (let bf_node of ns_node.bitfield) {
                body += '\n\n' + GIR2TS.renderEnumeration(bf_node, ns_name) + '\n\n';
            }
        if (ns_node.callback)
            for (let cb_node of ns_node.callback) {
                body += '\n\n' + GIR2TS.renderCallback(cb_node, ns_name) + '\n\n';
            }
        if (ns_node.union)
            for (let union_node of ns_node.union) {
                body += '\n\n' + GIR2TS.renderNodeAsBlankInterface(union_node, ns_name) + '\n\n';
            }
        if (ns_node.alias)
            for (let alias_node of ns_node.alias) {
                body += '\n\n' + GIR2TS.renderAlias(alias_node, ns_name) + '\n\n';
            }
        if (ns_node.function)
            for (let func_node of ns_node.function) {
                let exc = exclude && exclude.exclude.function ? exclude.exclude.function : undefined;
                body += '\n\n' + renderFreeFunction(func_node, ns_name, exc) + '\n\n';
            }
        return `declare namespace imports.gi.${ns_node.$.name} {${body}}`;
    }
    GIR2TS.renderNamespace = renderNamespace;
    function parseGIR(file_path, cb) {
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
    GIR2TS.parseGIR = parseGIR;
    class Generator {
        constructor(gir_xml_list, exclude_json_map = {}) {
            this.ns_list = [];
            this.exclude_json_map = {};
            this.lib_list = gir_xml_list;
            this.exclude_json_map = exclude_json_map;
        }
        generateTypings(cb) {
            let self = this;
            let count = 0;
            function cb_counter() {
                if (++count === self.lib_list.length)
                    proceed();
            }
            const xml2js = require('xml2js');
            const parser = new xml2js.Parser();
            for (let lib of this.lib_list) {
                parser.parseString(lib.xml_str, (err, res) => {
                    this.ns_list.push({
                        lib_name: lib.lib_name,
                        ns_node: res.repository.namespace[0]
                    });
                    cb_counter();
                });
            }
            function proceed() {
                const res = [];
                for (let ns of self.ns_list) {
                    const ns_name = ns.ns_node.$.name;
                    const typing_str = renderNamespace(ns.ns_node, ns_name, self.exclude_json_map[ns.lib_name]);
                    res.push({
                        gir_name: ns.lib_name,
                        typing_str: typing_str
                    });
                }
                cb(res);
            }
        }
    }
    GIR2TS.Generator = Generator;
})(GIR2TS || (GIR2TS = {}));
const fs = require("fs");
const path = require("path");
function main() {
    console.log(__dirname);
    var argv = require('minimist')(process.argv.slice(2));
    let gir_files = [];
    let outdir = __dirname;
    let exclude_json_map = {};
    if (argv.outdir) {
        console.log("Output typings directory: " + argv.outdir);
        outdir = path.join(__dirname, argv.outdir);
        if (fs.statSync(outdir).isDirectory()) {
        }
        else {
            throw new Error("out dir specified is not a directory.");
        }
    }
    else {
        throw new Error("No out dir specified.");
    }
    if (argv.overridesdir) {
        console.log("Excludes directory: " + argv.overridesdir);
        let dir = path.join(__dirname, argv.overridesdir);
        let json_files = [];
        if (fs.statSync(dir).isDirectory()) {
            json_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
        for (let json_file of json_files) {
            let lib_name = path.basename(json_file, '.json');
            let data = fs.readFileSync(json_file, 'utf8');
            exclude_json_map[lib_name] = JSON.parse(data);
        }
    }
    if (argv.girdir) {
        console.log("GIR directory: " + argv.girdir);
        let dir = path.join(__dirname, argv.girdir);
        if (fs.statSync(dir).isDirectory()) {
            gir_files = fs.readdirSync(dir).map((file) => path.join(dir, file));
        }
    }
    else {
        gir_files = gir_files.concat(argv._.map((arg) => path.join(__dirname, arg)));
    }
    const gir_xml_list = [];
    for (let file of gir_files) {
        const gir_name = path.basename(file, '.gir');
        let data = '';
        try {
            data = fs.readFileSync(file, 'utf8');
        }
        catch (e) {
            if (e instanceof Error)
                console.log(e.message);
            return;
        }
        gir_xml_list.push({
            lib_name: gir_name,
            xml_str: data
        });
    }
    const gen = new GIR2TS.Generator(gir_xml_list, exclude_json_map);
    gen.generateTypings((res) => {
        for (let lib of res) {
            let outfile = path.join(outdir, lib.gir_name + '.d.ts');
            try {
                fs.writeFileSync(outfile, lib.typing_str);
            }
            catch (err) {
                if (err instanceof Error)
                    console.log(err.message);
                return;
            }
            console.log("wrote to " + outfile);
        }
    });
}
main();
