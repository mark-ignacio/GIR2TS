export const js_reserved_words = `
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

/** Always private properties */
export const ignored_property_names: string[] = [
    "priv",
    // TODO: Special handling for these?
    "parent",
    "parent_class",
    "parent_instance",
    "g_type_instance"
]

export const ignored_parameter_names: string[] = [
    "user_data"
]