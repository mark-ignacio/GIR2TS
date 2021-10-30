export interface NodeAttributes {
    name: string;
}


export interface ParameterAttributes extends NodeAttributes {
    direction?: string;
}

export interface MemberAttributes extends NodeAttributes {
    value: number;
}

export interface ClassAttributes extends NodeAttributes {
    parent?: string;
}

export interface Node {
    "$": NodeAttributes
    "_": string;
    // doc can't have another doc inside
    doc?: Omit<Node, "doc">[];
}

export interface ParameterNode extends Node {
    $: ParameterAttributes;
    type?: Node[];
    array?: NodeWithType[];
    doc?: Node[];
}

export interface NodeWithType extends Node {
    type?: Node[];
    array?: NodeWithType[];
}

export interface ParametersNode extends Node {
    parameter: ParameterNode[];
}

export interface FunctionNode extends Node {
    "return-value": ParameterNode[];
    parameters: ParametersNode[];
    doc?: Node[];
}

export interface MemberNode extends Node {
    $: MemberAttributes;
    doc?: Node[];
}

export interface EnumNode extends Node {
    member: MemberNode[];
    doc?: Node[];
}

export interface FieldNode extends ParameterNode {
    "callback"?: FunctionNode[];
}

export interface RecordNode extends Node {
    "field": FieldNode[];
    "method": FunctionNode[];
    "constructor"?: FunctionNode[]
    doc?: Node[];
}

export interface ClassNode extends Node {
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

export interface InterfaceNode extends Node {
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