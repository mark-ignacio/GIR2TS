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
    `;
    function NeedNewLine(text) {
        if (text != null && text.trim() != "" && !text.endsWith("\n"))
            return "\n";
        return "";
    }
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
        var _a, _b, _c, _d;
        let type = null;
        let is_primitive = false;
        let doc = "";
        if ((_a = param_node === null || param_node === void 0 ? void 0 : param_node.type) === null || _a === void 0 ? void 0 : _a[0]) {
            type = convertToJSType(param_node.type[0].$.name);
            is_primitive = (type !== param_node.type[0].$.name);
            doc = (_d = (_c = (_b = param_node.doc) === null || _b === void 0 ? void 0 : _b[0]) === null || _c === void 0 ? void 0 : _c._) !== null && _d !== void 0 ? _d : null;
        }
        else if (param_node.array && param_node.array[0].type) {
            type = convertToJSType(param_node.array[0].type[0].$.name) + '[]';
            is_primitive = (type !== (param_node.array[0].type[0].$.name + '[]'));
            doc = "";
        }
        else if (param_node.array && param_node.array[0].array) {
            [type, is_primitive, doc] = getTypeFromParameterNode(param_node.array[0]);
            type += "[]";
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
                if (param_node.$.name === '...' || param_node.$.name === 'user_data')
                    continue;
                let param_name = param_node.$.name;
                if (js_reserved_words.indexOf(param_name) !== -1) {
                    param_name = '_' + param_name;
                }
                let [type, is_primitive] = getTypeFromParameterNode(param_node);
                params.push({
                    name: param_name,
                    type: type,
                    docString: (_f = (_e = (_d = param_node === null || param_node === void 0 ? void 0 : param_node.doc) === null || _d === void 0 ? void 0 : _d[0]) === null || _e === void 0 ? void 0 : _e._) !== null && _f !== void 0 ? _f : null,
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
        };
    }
    function renderFreeFunction(func_node, ns_name, exclude_list = null) {
        let { name, return_type, params, doc } = getFunctionInfo(func_node);
        let str = `${renderDocString(doc, params, return_type, 0, ns_name)}`;
        if (exclude_list && exclude_list.indexOf(name) !== -1) {
            str += '// ';
        }
        str += `function ${name}(${params.map((p) => `${p.name}: ${p.type}`).join(', ')}): ${return_type.type};`;
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
    function renderNewParam(paramInfo) {
        return `${paramInfo.name}:${(paramInfo === null || paramInfo === void 0 ? void 0 : paramInfo.optional) ? "?" : ""} ${paramInfo === null || paramInfo === void 0 ? void 0 : paramInfo.type}`;
    }
    function renderMethod(method_node, include_access_modifier = true, include_name = true, forExternalInterfaceInNamespace = null, indentNum, ns_name, exclude = false, staticFunc = false, funcModifier, constructor) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7;
        var method_name = method_node.$.name;
        let return_type = "any", primitive = false, docString = null;
        if (!constructor) {
            [return_type, primitive, docString] = getTypeFromParameterNode((_a = method_node['return-value']) === null || _a === void 0 ? void 0 : _a[0]);
            return_type = (_c = (_b = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.return_type) === null || _b === void 0 ? void 0 : _b.type) !== null && _c !== void 0 ? _c : return_type;
            docString = (_e = (_d = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.return_type) === null || _d === void 0 ? void 0 : _d.doc) !== null && _e !== void 0 ? _e : docString;
        }
        var params = [];
        if ((method_node === null || method_node === void 0 ? void 0 : method_node.parameters) && "parameter" in ((_f = method_node === null || method_node === void 0 ? void 0 : method_node.parameters) === null || _f === void 0 ? void 0 : _f[0])) {
            for (const param_node of method_node.parameters[0].parameter) {
                if (param_node.$.name === '...' || param_node.$.name === "user_data")
                    continue;
                let param_name = param_node.$.name;
                if ((_h = (_g = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.param) === null || _g === void 0 ? void 0 : _g[param_name]) === null || _h === void 0 ? void 0 : _h.skip)
                    continue;
                if (js_reserved_words.indexOf(param_name) !== -1) {
                    param_name = '_' + param_name;
                }
                let [type, is_primitive, doc] = getTypeFromParameterNode(param_node);
                if (!is_primitive && forExternalInterfaceInNamespace) {
                    type = forExternalInterfaceInNamespace + '.' + type;
                }
                let finalType = (_l = (_k = (_j = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.param) === null || _j === void 0 ? void 0 : _j[param_name]) === null || _k === void 0 ? void 0 : _k.type) !== null && _l !== void 0 ? _l : (((_q = (_p = (_o = (_m = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.param) === null || _m === void 0 ? void 0 : _m[param_name]) === null || _o === void 0 ? void 0 : _o.type_extension) === null || _p === void 0 ? void 0 : _p.length) !== null && _q !== void 0 ? _q : 0 > 1) ? `${type} | ${(_t = (_s = (_r = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.param) === null || _r === void 0 ? void 0 : _r[param_name]) === null || _s === void 0 ? void 0 : _s.type_extension) === null || _t === void 0 ? void 0 : _t.join(" | ")}` : type);
                params.push({
                    name: (_w = (_v = (_u = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.param) === null || _u === void 0 ? void 0 : _u[param_name]) === null || _v === void 0 ? void 0 : _v.newName) !== null && _w !== void 0 ? _w : param_name,
                    type: finalType,
                    docString: (_z = (_y = (_x = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.param) === null || _x === void 0 ? void 0 : _x[param_name]) === null || _y === void 0 ? void 0 : _y.doc) !== null && _z !== void 0 ? _z : (doc !== null && doc !== void 0 ? doc : null),
                    optional: (_2 = (_1 = (_0 = funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.param) === null || _0 === void 0 ? void 0 : _0[param_name]) === null || _1 === void 0 ? void 0 : _1.optional) !== null && _2 !== void 0 ? _2 : false
                });
            }
        }
        if ((funcModifier === null || funcModifier === void 0 ? void 0 : funcModifier.newParam) != null) {
            for (const param of funcModifier.newParam) {
                params.push({
                    docString: (_3 = param === null || param === void 0 ? void 0 : param.doc) !== null && _3 !== void 0 ? _3 : null,
                    type: param.type,
                    name: param.name,
                    optional: (_4 = param.optional) !== null && _4 !== void 0 ? _4 : false
                });
            }
        }
        const ind = "\t".repeat(indentNum);
        let indentAdded = false;
        let str = '';
        str += renderDocString((_7 = (_6 = (_5 = method_node.doc) === null || _5 === void 0 ? void 0 : _5[0]) === null || _6 === void 0 ? void 0 : _6._) !== null && _7 !== void 0 ? _7 : null, params, { type: return_type, is_primitive: primitive, docString: docString }, indentNum, ns_name);
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
        str += ')';
        if (!constructor)
            str += ': ' + return_type;
        str += ";";
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
    function renderCallbackField(cb_node, ns_name, indent, exclude) {
        let cb_name = cb_node.$.name;
        if (cb_name === 'constructor') {
            cb_name += '_';
        }
        let result = `${"\t".repeat(indent)}`;
        if (exclude)
            result += "// ";
        result += `${cb_name}: {${renderMethod(cb_node, false, false, undefined, 0, ns_name)}};`;
        return result;
    }
    function renderConstructorField(constructor_node, ns_name, indent, exclude, modifier) {
        return `${renderMethod(constructor_node, false, true, undefined, indent, ns_name, exclude, true, modifier)}`;
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
    function renderRecordAsClass(rec_node, ns_name, exclude, modifier) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
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
        if (JSON.stringify(rec_node.constructor) != undefined && rec_node.constructor != null) {
            for (let construct of rec_node.constructor) {
                if (JSON.stringify(construct) == undefined || construct == null)
                    continue;
                const func_name = construct.$.name;
                const excluded = (_b = (_a = exclude === null || exclude === void 0 ? void 0 : exclude.static) === null || _a === void 0 ? void 0 : _a.includes(func_name)) !== null && _b !== void 0 ? _b : false;
                const modifierFunc = (_c = modifier === null || modifier === void 0 ? void 0 : modifier.function) === null || _c === void 0 ? void 0 : _c[func_name];
                body += renderConstructorField(construct, ns_name, 1, excluded, modifierFunc) + "\n";
            }
        }
        for (let f of props) {
            body += renderDocString((_e = (_d = f.doc) === null || _d === void 0 ? void 0 : _d[0]._) !== null && _e !== void 0 ? _e : null, undefined, undefined, 1, ns_name);
            const excluded = (_g = (_f = exclude === null || exclude === void 0 ? void 0 : exclude.prop) === null || _f === void 0 ? void 0 : _f.includes(f.$.name)) !== null && _g !== void 0 ? _g : false;
            body += '\t';
            if (excluded)
                body += "// ";
            body += renderProperty(f) + '\n';
        }
        for (let c of callback_fields) {
            const func_name = c.$.name;
            const excluded = (_j = (_h = exclude === null || exclude === void 0 ? void 0 : exclude.callback) === null || _h === void 0 ? void 0 : _h.includes(func_name)) !== null && _j !== void 0 ? _j : false;
            body += renderCallbackField(c, ns_name, 1, excluded) + '\n';
        }
        for (let m of methods) {
            const func_name = m.$.name;
            const excluded = (_l = (_k = exclude === null || exclude === void 0 ? void 0 : exclude.method) === null || _k === void 0 ? void 0 : _k.includes(func_name)) !== null && _l !== void 0 ? _l : false;
            const modifierFunc = (_m = modifier === null || modifier === void 0 ? void 0 : modifier.function) === null || _m === void 0 ? void 0 : _m[func_name];
            body += renderMethod(m, undefined, undefined, undefined, 1, ns_name, excluded, undefined, modifierFunc) + '\n';
        }
        let result = renderDocString((_q = (_p = (_o = rec_node === null || rec_node === void 0 ? void 0 : rec_node.doc) === null || _o === void 0 ? void 0 : _o[0]) === null || _p === void 0 ? void 0 : _p._) !== null && _q !== void 0 ? _q : null, undefined, undefined, 0, ns_name);
        const genericModifier = (_r = modifier === null || modifier === void 0 ? void 0 : modifier.generic) !== null && _r !== void 0 ? _r : "";
        const constructor_modifier = (_s = modifier === null || modifier === void 0 ? void 0 : modifier.function) === null || _s === void 0 ? void 0 : _s["constructor"];
        result += `interface ${rec_node.$.name} {}\n`;
        result += `class ${rec_node.$.name}${genericModifier} {\n`;
        result += `${renderMethod(BuildConstructorNode(rec_node.$.name), false, undefined, undefined, 1, ns_name, false, false, constructor_modifier, true)}\n`;
        result += `${body}}`;
        return result;
    }
    GIR2TS.renderRecordAsClass = renderRecordAsClass;
    function BuildConstructorNode(class_name) {
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
                    "parameter": []
                }
            ]
        };
    }
    function renderClassAsInterface(class_node, ns_name, exclude, modifier) {
        var _a, _b, _c, _d, _e, _f, _g;
        const class_name = class_node.$.name;
        const ifaces = [];
        const methods = [];
        const ctors = [];
        const static_funcs = [];
        let exclude_method_list = [];
        let exclude_self = false;
        let exclude_all_members = false;
        function transformExtension(className) {
            const parts = className.split(".");
            parts[parts.length - 1] = `I${parts[parts.length - 1]}`;
            return parts.join(".");
        }
        exclude_method_list = exclude_method_list.concat((_a = exclude === null || exclude === void 0 ? void 0 : exclude.method) !== null && _a !== void 0 ? _a : []);
        exclude_all_members = (_b = exclude === null || exclude === void 0 ? void 0 : exclude.members) !== null && _b !== void 0 ? _b : false;
        if (exclude === null || exclude === void 0 ? void 0 : exclude.self) {
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
        let mixinDocstring = "";
        mixinDocstring += `/** This construct is only for enabling class multi-inheritance,\n`;
        mixinDocstring += ` * use {@link ${class_name}} instead.\n`;
        mixinDocstring += ` */\n`;
        let header = '';
        header += mixinDocstring;
        header += `interface I${class_name}`;
        const method_str_list = methods.map((m) => {
            var _a;
            const excluded = (exclude_method_list.includes(m.$.name) || exclude_all_members);
            const funcModifier = (_a = modifier === null || modifier === void 0 ? void 0 : modifier.function) === null || _a === void 0 ? void 0 : _a[m.$.name];
            let method_str = renderMethod(m, false, undefined, undefined, 1, ns_name, excluded, undefined, funcModifier);
            return method_str;
        });
        let mixin = "";
        mixin += mixinDocstring;
        mixin += `type ${class_name}Mixin = I${class_name}`;
        if (ifaces.length > 0) {
            mixin += " &";
            mixin += ` ${ifaces.join(' & ')}`;
        }
        mixin += ";\n\n";
        let extension = "";
        extension += renderDocString((_e = (_d = (_c = class_node === null || class_node === void 0 ? void 0 : class_node.doc) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d._) !== null && _e !== void 0 ? _e : null, undefined, undefined, 0, ns_name);
        extension += `${exclude_self ? '// ' : ''}interface ${class_name} extends ${class_name}Mixin {}\n`;
        let body = method_str_list.join('\n');
        body = ` {\n` +
            `${body}\n` +
            `}\n\n`;
        let iface_str = header + body;
        const ctor_str_list = ctors.map((c) => {
            var _a;
            const funcModifier = (_a = modifier === null || modifier === void 0 ? void 0 : modifier.function) === null || _a === void 0 ? void 0 : _a[c.$.name];
            return renderMethod(c, false, undefined, undefined, 1, ns_name, false, true, funcModifier);
        });
        const ctors_body = ctor_str_list.join('\n');
        const static_func_str_list = static_funcs.map((sf) => {
            var _a;
            const funcModifier = (_a = modifier === null || modifier === void 0 ? void 0 : modifier.function) === null || _a === void 0 ? void 0 : _a[sf.$.name];
            return renderMethod(sf, false, undefined, undefined, 1, ns_name, false, true, funcModifier);
        });
        const static_func_body = static_func_str_list.join('\n');
        const constructor_modifier = (_f = modifier === null || modifier === void 0 ? void 0 : modifier.function) === null || _f === void 0 ? void 0 : _f["constructor"];
        const classGenericModifier = (_g = modifier === null || modifier === void 0 ? void 0 : modifier.generic) !== null && _g !== void 0 ? _g : "";
        const static_side = '\n' +
            `class ${class_name}${classGenericModifier} {\n` +
            `${renderMethod(BuildConstructorNode(class_name), false, undefined, undefined, 1, ns_name, false, false, constructor_modifier, true)}\n` +
            `${ctors_body}` + NeedNewLine(ctors_body) +
            `${static_func_body + NeedNewLine(static_func_body)}` +
            `}\n`;
        return iface_str + mixin + extension + static_side;
    }
    GIR2TS.renderClassAsInterface = renderClassAsInterface;
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
    function renderNamespace(ns_node, ns_name, exclude, modifiers) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        let body = '';
        let class_nodes = [];
        if (ns_node.class)
            class_nodes = class_nodes.concat(ns_node.class);
        for (let class_node of class_nodes) {
            let class_name = class_node.$.name;
            body += '\n\t' + (GIR2TS.renderClassAsInterface(class_node, ns_name, (_b = (_a = exclude === null || exclude === void 0 ? void 0 : exclude.exclude) === null || _a === void 0 ? void 0 : _a.class) === null || _b === void 0 ? void 0 : _b[class_name], (_d = (_c = modifiers === null || modifiers === void 0 ? void 0 : modifiers.amend) === null || _c === void 0 ? void 0 : _c.class) === null || _d === void 0 ? void 0 : _d[class_name])).replace(/\n/gm, "\n\t");
        }
        if (ns_node.record)
            for (let rec_node of ns_node.record) {
                body += '\n\t' + (GIR2TS.renderRecordAsClass(rec_node, ns_name, exclude ? exclude.exclude.class[rec_node.$.name] : undefined, (_f = (_e = modifiers === null || modifiers === void 0 ? void 0 : modifiers.amend) === null || _e === void 0 ? void 0 : _e.class) === null || _f === void 0 ? void 0 : _f[rec_node.$.name]) + '\n').replace(/\n/gm, "\n\t");
            }
        if (ns_node.interface)
            for (let iface_node of ns_node.interface) {
                body += '\n\t' + (GIR2TS.renderClassAsInterface(iface_node, ns_name, (_h = (_g = exclude === null || exclude === void 0 ? void 0 : exclude.exclude) === null || _g === void 0 ? void 0 : _g.class) === null || _h === void 0 ? void 0 : _h[iface_node.$.name], (_k = (_j = modifiers === null || modifiers === void 0 ? void 0 : modifiers.amend) === null || _j === void 0 ? void 0 : _j.class) === null || _k === void 0 ? void 0 : _k[iface_node.$.name]) + '\n\n').replace(/\n/gm, "\n\t");
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
        body = body.split("\n").reduce((p, c) => p += (c.trim() == "" ? "\n" : `${c}\n`));
        return `declare namespace imports.gi.${ns_node.$.name} {\n${body}}`;
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
        constructor(gir_xml_list, exclude_json_map = {}, modifier_json_map) {
            this.ns_list = [];
            this.exclude_json_map = {};
            this.modifier_json_map = {};
            this.lib_list = gir_xml_list;
            this.exclude_json_map = exclude_json_map;
            this.modifier_json_map = modifier_json_map;
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
    let modifier_json_map = {};
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
    if (argv.modifiersdir) {
        console.log("Modifiers directory: " + argv.modifiersdir);
        let dir = path.join(__dirname, argv.modifiersdir);
        let json_files = [];
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
    const gen = new GIR2TS.Generator(gir_xml_list, exclude_json_map, modifier_json_map);
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
