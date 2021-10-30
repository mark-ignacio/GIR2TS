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