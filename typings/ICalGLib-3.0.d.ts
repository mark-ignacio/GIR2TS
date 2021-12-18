/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.ICalGLib {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Array} instead.
	 */
	interface IArray {
		/**
		 * Creates a deep copy of #ICalArray with the same properties as the #array.
		 * @returns The newly cloned #ICalArray with the same value as the #array
		 */
		copy(): Array;
		/**
		 * Gets the element located in the #position in the #array. NULL if position if out of bound.
		 * @param position The position the target element is located
		 * @returns The element located at the #position in the #array
		 */
		element_at(position: number): GObject.Object | null;
		/**
		 * Frees the #ICalArray.
		 */
		free(): void;
		/**
		 * Removes the element at the #position from the array.
		 * @param position The position in which the element will be removed from the array
		 */
		remove_element_at(position: number): void;
		/**
		 * Gets the size of the array.
		 * @returns The size of current array.
		 */
		size(): number;
		/**
		 * Does not work right now. Sorts the #array using the sort function #compare.
		 * @param compare The compare function
		 */
		sort(compare: any | null): void;
	}

	type ArrayInitOptionsMixin = ObjectInitOptions
	export interface ArrayInitOptions extends ArrayInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Array} instead.
	 */
	type ArrayMixin = IArray & Object;

	/**
	 * This is the ICalArray instance.
	 */
	interface Array extends ArrayMixin {}

	class Array {
		public constructor(options?: Partial<ArrayInitOptions>);
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @param is_global_memory Whether it is allocated in the global memory.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object, is_global_memory: boolean): Array;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Attach} instead.
	 */
	interface IAttach {
		/**
		 * Gets the data, if the #ICalAttach is built from the data.
		 * @returns The data component of the #attach. %NULL if it is built from url or there is an error.
		 */
		get_data(): string | null;
		/**
		 * Checks whether the #ICalAttach is built from url.
		 * @returns Whether the #attach is built from url
		 */
		get_is_url(): boolean;
		/**
		 * Gets the url, if the #ICalAttach is built from the url.
		 * @returns The url component of the #attach. %NULL if it is built from data or there is an error.
		 */
		get_url(): string | null;
		/**
		 * Increases the reference counter by 1 for the #attach.
		 */
		ref(): void;
		/**
		 * Decreases the reference counter by 1 for the #attach.
		 */
		unref(): void;
	}

	type AttachInitOptionsMixin = ObjectInitOptions
	export interface AttachInitOptions extends AttachInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Attach} instead.
	 */
	type AttachMixin = IAttach & Object;

	/**
	 * This is the ICalAttach instance.
	 */
	interface Attach extends AttachMixin {}

	class Attach {
		public constructor(options?: Partial<AttachInitOptions>);
		/**
		 * Creates a new #ICalAttach from the data in bytes. Takes a reference of #bytes, increase the reference
		 * before calling this function if you with to use it afterward. The stored bytes should be already encoded
		 * with used encoding (like base64).
		 * @param bytes The #GBytes holding the data used to create the #ICalAttach
		 * @returns The newly created #ICalAttach
		 */
		public static new_from_bytes(bytes: GLib.Bytes): Attach;
		/**
		 * Creates a new #ICalAttach from the data.
		 * @param data The data used to create the #ICalAttach
		 * @param free_fn The function used to free the data when the create #ICalAttach is destroyed
		 * @param free_fn_data The userdata used for the free function #free_fn
		 * @returns The newly created #ICalAttach
		 */
		public static new_from_data(data: string, free_fn: GLib.Func | null, free_fn_data: any | null): Attach;
		/**
		 * Creates a new #ICalAttach from the url.
		 * @param url The url from which the object is created
		 * @returns The newly created #ICalAttach from the #url
		 */
		public static new_from_url(url: string): Attach;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object): Attach;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CompIter} instead.
	 */
	interface ICompIter {
		/**
		 * Gets the current #ICalComponent pointed by #ICalCompIter.
		 * @returns A #ICalComponent
		 */
		deref(): Component;
		/**
		 * Gets the next #ICalComponent pointed by #ICalCompIter.
		 * @returns A #ICalCompIter
		 */
		next(): Component;
		/**
		 * Gets the prior #ICalComponent pointed by #ICalCompIter.
		 * @returns A #ICalCompIter
		 */
		prior(): Component;
	}

	type CompIterInitOptionsMixin = ObjectInitOptions
	export interface CompIterInitOptions extends CompIterInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CompIter} instead.
	 */
	type CompIterMixin = ICompIter & Object;

	/**
	 * This is the ICalCompIter instance.
	 */
	interface CompIter extends CompIterMixin {}

	class CompIter {
		public constructor(options?: Partial<CompIterInitOptions>);
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): CompIter;
		public static new_default(): any | null;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Component} instead.
	 */
	interface IComponent {
		/**
		 * Adds a #ICalComponent into another #ICalComponent as a child component.
		 * @param child A child #ICalComponent
		 */
		add_component(child: Component): void;
		/**
		 * Adds an #ICalProperty into #ICalComponent.
		 * @param property An #ICalProperty
		 */
		add_property(property: Property): void;
		/**
		 * Converts a #ICalComponent to a string.
		 * @returns The string representation of #ICalComponent.
		 */
		as_ical_string(): string;
		/**
		 * Gets the #ICalCompIter pointing to the first child #ICalComponent.
		 * @param kind A #ICalComponentKind
		 * @returns A #ICalCompIter
		 */
		begin_component(kind: ComponentKind): CompIter;
		/**
		 * Checks the number of restrictions in #ICalComponent.
		 * @returns The number of restrictions in #comp
		 */
		check_restrictions(): number;
		/**
		 * Deeply clone a #ICalComponent.
		 * @returns The newly deeply cloned #ICalComponent.
		 */
		clone(): Component;
		/**
		 * Converts some X-LIC-ERROR properties into RETURN-STATUS properties.
		 */
		convert_errors(): void;
		/**
		 * Counts the child #ICalComponent with the target kind in the parent one.
		 * @param kind The target #ICalComponentKind
		 * @returns The count of child #ICalComponent in the parent one.
		 */
		count_components(kind: ComponentKind): number;
		/**
		 * Counts the number of errors in #ICalComponent.
		 * @returns The count of errors.
		 */
		count_errors(): number;
		/**
		 * Counts the number of #ICalProperty in #ICalComponent.
		 * @param kind A #ICalPropertyKind
		 * @returns The number of #ICalProperty.
		 */
		count_properties(kind: PropertyKind): number;
		/**
		 * Gets the #ICalCompIter pointing to the end child #ICalComponent.
		 * @param kind A #ICalComponentKind
		 * @returns A #ICalCompIter
		 */
		end_component(kind: ComponentKind): CompIter;
		/**
		 * Cycles through all recurrences of an event. This function will call the specified callback function for
		 * once for the base value of DTSTART, and foreach recurring date/time value. It will filter out events
		 * that are specified as an EXDATE or an EXRULE.
		 * @param start Ignore timespans before this
		 * @param end Ignore timespans after this
		 * @param callback Function called for each timespan within the range
		 */
		foreach_recurrence(start: Time, end: Time, callback: ComponentForeachRecurrenceFunc | null): void;
		/**
		 * Applies the same manipulation on every tzid in #ICalComponent.
		 * @param callback The callback function
		 */
		foreach_tzid(callback: ComponentForeachTZIDFunc | null): void;
		/**
		 * Frees a #ICalComponent.
		 */
		free(): void;
		/**
		 * Gets the comment of the #ICalComponent.
		 * @returns The comment of #comp.
		 */
		get_comment(): string;
		/**
		 * Gets the current #ICalComponent in #ICalComponent.
		 * @returns The current #ICalComponent.
		 */
		get_current_component(): Component;
		/**
		 * Gets the current #ICalProperty in #ICalComponent.
		 * @returns The current #ICalProperty.
		 */
		get_current_property(): Property;
		/**
		 * Gets the description of the #ICalComponent.
		 * @returns The description of #comp.
		 */
		get_description(): string;
		/**
		 * Gets the dtend of the #ICalComponent.
		 * @returns A #ICalTime.
		 */
		get_dtend(): Time;
		/**
		 * Gets the dtstamp of the #ICalComponent.
		 * @returns A #ICalTime.
		 */
		get_dtstamp(): Time;
		/**
		 * Gets the dtstart of the #ICalComponent.
		 * @returns A #ICalTime.
		 */
		get_dtstart(): Time;
		/**
		 * Gets the due of the #ICalComponent.
		 * @returns A #ICalTime.
		 */
		get_due(): Time;
		/**
		 * Gets the duration of the #ICalComponent.
		 * @returns An #ICalDuration.
		 */
		get_duration(): Duration;
		/**
		 * Gets the first #ICalComponent with specific kind in #ICalComponent.
		 * @param kind A #ICalComponentKind
		 * @returns The first #ICalComponent.
		 */
		get_first_component(kind: ComponentKind): Component | null;
		/**
		 * Gets the first #ICalProperty with specific kind in #ICalComponent.
		 * @param kind A #ICalPropertyKind
		 * @returns The first #ICalProperty.
		 */
		get_first_property(kind: PropertyKind): Property | null;
		/**
		 * For VCOMPONENT: Returns a reference to the first VEVENT, VTODO or VJOURNAL.
		 * @returns A reference to the first VEVENT, VTODO or VJOURNAL
		 */
		get_first_real_component(): Component;
		/**
		 * Returns the first VEVENT, VTODO or VJOURNAL sub-component of cop, or comp if it is one of those types.
		 * @returns The first VEVENT, VTODO or VJOURNAL sub-component.
		 */
		get_inner(): Component | null;
		/**
		 * Gets the location of the #ICalComponent.
		 * @returns The location of #comp.
		 */
		get_location(): string;
		/**
		 * Gets the method of the #ICalComponent.
		 * @returns A #ICalPropertyMethod.
		 */
		get_method(): PropertyMethod;
		/**
		 * Gets the next #ICalComponent with specific kind in #ICalComponent.
		 * @param kind A #ICalComponentKind
		 * @returns The next #ICalComponent.
		 */
		get_next_component(kind: ComponentKind): Component | null;
		/**
		 * Gets the next #ICalProperty with specific kind in #ICalComponent.
		 * @param kind A #ICalPropertyKind
		 * @returns The next #ICalProperty.
		 */
		get_next_property(kind: PropertyKind): Property | null;
		/**
		 * Gets the parent component of the #component.
		 * @returns The parent #ICalComponent of the #component.
		 */
		get_parent(): Component | null;
		/**
		 * Gets the recurrenceid of the #ICalComponent.
		 * @returns A #ICalTime.
		 */
		get_recurrenceid(): Time;
		/**
		 * Gets the relcalid of the #ICalComponent.
		 * @returns The relcalid of #comp.
		 */
		get_relcalid(): string;
		/**
		 * Gets the sequence of the #ICalComponent.
		 * @returns The sequence of #comp.
		 */
		get_sequence(): number;
		/**
		 * For VEVENT, VTODO, VJOURNAL and VTIMEZONE: reports the start and end times of an event in UTC.
		 * @returns A #ICalTimeSpan.
		 */
		get_span(): TimeSpan;
		/**
		 * Gets the status of the #ICalComponent.
		 * @returns A #ICalPropertyStatus.
		 */
		get_status(): PropertyStatus;
		/**
		 * Gets the summary of the #ICalComponent.
		 * @returns The summary of #comp.
		 */
		get_summary(): string;
		/**
		 * Returns the icaltimezone in the component corresponding to the TZID, or NULL if it can't be found.
		 * @param tzid A string representing timezone
		 * @returns A #ICalTimezone.
		 */
		get_timezone(tzid: string): Timezone | null;
		/**
		 * Gets the uid of the #ICalComponent.
		 * @returns The uid of #comp.
		 */
		get_uid(): string;
		/**
		 * Checks whether #ICalComponent is valid.
		 * @returns 1 if yes, 0 if not.
		 */
		is_valid(): boolean;
		/**
		 * Gets the type of #ICalComponent.
		 * @returns A #ICalComponentKind.
		 */
		isa(): ComponentKind;
		/**
		 * Checks whether the native part of #ICalComponent is icalcomponent.
		 * @returns 1 if yes, 0 if not.
		 */
		isa_component(): number;
		/**
		 * Takes 2 VCALENDAR components and merges the second one into the first, resolving any problems with conflicting
		 * TZIDs. comp_to_merge will no longer exist after calling this function.
		 * @param comp_to_merge A #ICalComponent. After merged it will not exist any more.
		 */
		merge_component(comp_to_merge: Component): void;
		/**
		 * Removes a child #ICalComponent from another #ICalComponent.
		 * @param child A child #ICalComponent
		 */
		remove_component(child: Component): void;
		/**
		 * Removes #ICalProperty from #ICalComponent. Caution: The compare is based on address. So you must use
		 * the original #ICalProperty as the target.
		 * @param property A #ICalProperty
		 */
		remove_property(property: Property): void;
		/**
		 * Sets the comment of the #ICalComponent.
		 * @param v A string representing comment
		 */
		set_comment(v: string): void;
		/**
		 * Sets the description of the #ICalComponent.
		 * @param v A string representing description
		 */
		set_description(v: string): void;
		/**
		 * Sets the dtend of the #ICalComponent.
		 * @param v A #ICalTime
		 */
		set_dtend(v: Time): void;
		/**
		 * Sets the dtstamp of the #ICalComponent.
		 * @param v A #ICalTime
		 */
		set_dtstamp(v: Time): void;
		/**
		 * Sets the dtstart of the #ICalComponent.
		 * @param v A #ICalTime
		 */
		set_dtstart(v: Time): void;
		/**
		 * Sets the due of the #ICalComponent.
		 * @param v A #ICalTime
		 */
		set_due(v: Time): void;
		/**
		 * Sets the duration of the #ICalComponent.
		 * @param v A #ICalDuration
		 */
		set_duration(v: Duration): void;
		/**
		 * Sets the location of the #ICalComponent.
		 * @param v A string representing location
		 */
		set_location(v: string): void;
		/**
		 * Sets the method of the #ICalComponent.
		 * @param method A #ICalPropertyMethod
		 */
		set_method(method: PropertyMethod): void;
		/**
		 * Sets the #parent #ICalComponent of the specified #component.
		 * @param parent An #ICalComponent, a new parent
		 */
		set_parent(parent: Component | null): void;
		/**
		 * Sets the recurrenceid of the #ICalComponent.
		 * @param v A #ICalTime
		 */
		set_recurrenceid(v: Time): void;
		/**
		 * Sets the relcalid of the #ICalComponent.
		 * @param v A string representing relcalid
		 */
		set_relcalid(v: string): void;
		/**
		 * Sets the sequence of the #ICalComponent.
		 * @param v The sequence number
		 */
		set_sequence(v: number): void;
		/**
		 * Sets the status of the #ICalComponent.
		 * @param status A #ICalPropertyStatus
		 */
		set_status(status: PropertyStatus): void;
		/**
		 * Sets the summary of the #ICalComponent.
		 * @param v A string representing summary
		 */
		set_summary(v: string): void;
		/**
		 * Sets the uid of the #ICalComponent.
		 * @param v A string representing uid
		 */
		set_uid(v: string): void;
		/**
		 * Removes all X-LIC-ERROR properties.
		 */
		strip_errors(): void;
		/**
		 * Adds the #child into the #parent as a child component and unrefs the #child.
		 * @param child A child #ICalComponent
		 */
		take_component(child: Component): void;
		/**
		 * Adds the #property into the #component and unrefs the #property.
		 * @param property An #ICalProperty
		 */
		take_property(property: Property): void;
	}

	type ComponentInitOptionsMixin = ObjectInitOptions
	export interface ComponentInitOptions extends ComponentInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Component} instead.
	 */
	type ComponentMixin = IComponent & Object;

	/**
	 * This is the ICalComponent instance.
	 */
	interface Component extends ComponentMixin {}

	class Component {
		public constructor(options?: Partial<ComponentInitOptions>);
		/**
		 * Creates a new #ICalComponent with specific type.
		 * @param kind The #ICalComponentKind
		 * @returns The newly created #ICalComponent.
		 */
		public static new(kind: ComponentKind): Component;
		/**
		 * Creates a new #ICalComponent based on a string.
		 * @param str The string used to create #ICalComponent
		 * @returns The newly created #ICalComponent based on #str.
		 */
		public static new_from_string(str: string): Component;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object): Component;
		/**
		 * Creates a #ICalComponent with the type to be vagenda.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vagenda(): Component;
		/**
		 * Creates a #ICalComponent with the type to be valarm.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_valarm(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vavailability.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vavailability(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vcalendar.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vcalendar(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vevent.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vevent(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vfreebusy.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vfreebusy(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vjournal.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vjournal(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vpoll.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vpoll(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vquery.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vquery(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vtimezone.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vtimezone(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vtodo.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vtodo(): Component;
		/**
		 * Creates a #ICalComponent with the type to be vvoter.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_vvoter(): Component;
		/**
		 * Creates a new #ICalComponent based on name of x property.
		 * @param x_name The name of x property
		 * @returns The newly created #ICalComponent.
		 */
		public static new_x(x_name: string): Component;
		/**
		 * Creates a #ICalComponent with the type to be xavailable.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_xavailable(): Component;
		/**
		 * Creates a #ICalComponent with the type to be xdaylight.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_xdaylight(): Component;
		/**
		 * Creates a #ICalComponent with the type to be xstandard.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_xstandard(): Component;
		/**
		 * Creates a #ICalComponent with the type to be xvote.
		 * @returns The newly created #ICalComponent.
		 */
		public static new_xvote(): Component;
		/**
		 * Converts a string to a #ICalComponentKind.
		 * @param string A string
		 * @returns A #ICalComponentKind
		 */
		public static kind_from_string(string: string): ComponentKind;
		/**
		 * Checks if a #ICalComponentKind is valid.
		 * @param kind A #ICalComponentKind
		 * @returns 1 if #kind id a #ICalComponent but not the I_CAL_NO_COMPONENT, 0 if not.
		 */
		public static kind_is_valid(kind: ComponentKind): boolean;
		/**
		 * Converts a #ICalComponentKind to a string.
		 * @param kind A #ICalComponentKind
		 * @returns The string representation of #kind.
		 */
		public static kind_to_string(kind: ComponentKind): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Datetimeperiod} instead.
	 */
	interface IDatetimeperiod {
		/**
		 * Gets the period attribute of #ICalDatetimeperiod.
		 * @returns The period attribute of #dtp.
		 */
		get_period(): Period;
		/**
		 * Gets the time attribute of #ICalDatetimeperiod.
		 * @returns The time attribute of #dtp.
		 */
		get_time(): Time;
		/**
		 * Sets the period attribute of #ICalDatetimeperiod.
		 * @param period The period attribute of #dtp
		 */
		set_period(period: Period): void;
		/**
		 * Sets the time attribute of #ICalDatetimeperiod.
		 * @param time The time attribute of #dtp
		 */
		set_time(time: Time): void;
	}

	type DatetimeperiodInitOptionsMixin = ObjectInitOptions
	export interface DatetimeperiodInitOptions extends DatetimeperiodInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Datetimeperiod} instead.
	 */
	type DatetimeperiodMixin = IDatetimeperiod & Object;

	/**
	 * This is the ICalDatetimeperiod instance.
	 */
	interface Datetimeperiod extends DatetimeperiodMixin {}

	class Datetimeperiod {
		public constructor(options?: Partial<DatetimeperiodInitOptions>);
		/**
		 * Creates a new #ICalDatetimeperiod.
		 * @returns The newly created #ICalDatetimeperiod.
		 */
		public static new(): Datetimeperiod;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): Datetimeperiod;
		/**
		 * Creates a new default #ICalDatetimeperiod.
		 * @returns The newly created #ICalDatetimeperiod
		 */
		public static new_default(): any | null;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Duration} instead.
	 */
	interface IDuration {
		/**
		 * Converts the #ICalDuration to the representation in string.
		 * @returns The duration in string
		 */
		as_ical_string(): string;
		/**
		 * Converts the #ICalDuration to the representation in second.
		 * @returns The duration in second
		 */
		as_int(): number;
		/**
		 * Gets the days of #ICalDuration.
		 * @returns The days.
		 */
		get_days(): number;
		/**
		 * Gets the hours of #ICalDuration.
		 * @returns The hours.
		 */
		get_hours(): number;
		/**
		 * Gets the minutes of #ICalDuration.
		 * @returns The minutes.
		 */
		get_minutes(): number;
		/**
		 * Gets the seconds of #ICalDuration.
		 * @returns The seconds.
		 */
		get_seconds(): number;
		/**
		 * Gets the weeks of #ICalDuration.
		 * @returns The weeks.
		 */
		get_weeks(): number;
		/**
		 * Checks whether the #ICalDuration is the bad_duration.
		 * @returns 1 if #duration is the bad_duration, 0 if not.
		 */
		is_bad_duration(): boolean;
		/**
		 * Gets the is_neg of #ICalDuration.
		 * @returns The is_neg.
		 */
		is_neg(): boolean;
		/**
		 * Checks whether the #ICalDuration is the null_duration.
		 * @returns 1 if #duration is the null_duration, 0 if not.
		 */
		is_null_duration(): boolean;
		/**
		 * Sets the days of #ICalDuration.
		 * @param days The days
		 */
		set_days(days: number): void;
		/**
		 * Sets the hours of #ICalDuration.
		 * @param hours The hours
		 */
		set_hours(hours: number): void;
		/**
		 * Sets the is_neg of #ICalDuration.
		 * @param is_neg The is_neg
		 */
		set_is_neg(is_neg: boolean): void;
		/**
		 * Sets the minutes of #ICalDuration.
		 * @param minutes The minutes
		 */
		set_minutes(minutes: number): void;
		/**
		 * Sets the seconds of #ICalDuration.
		 * @param seconds The seconds
		 */
		set_seconds(seconds: number): void;
		/**
		 * Sets the weeks of #ICalDuration.
		 * @param weeks The weeks
		 */
		set_weeks(weeks: number): void;
	}

	type DurationInitOptionsMixin = ObjectInitOptions
	export interface DurationInitOptions extends DurationInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Duration} instead.
	 */
	type DurationMixin = IDuration & Object;

	/**
	 * This is the ICalDuration instance.
	 */
	interface Duration extends DurationMixin {}

	class Duration {
		public constructor(options?: Partial<DurationInitOptions>);
		/**
		 * Creates a bad #ICalDuration.
		 * @returns The newly created #ICalDuration
		 */
		public static new_bad_duration(): Duration;
		/**
		 * Creates a #ICalDuration from the duration in second.
		 * @param t The duration in second
		 * @returns The newly created #ICalDuration
		 */
		public static new_from_int(t: number): Duration;
		/**
		 * Creates a #ICalDuration from the duration in string.
		 * @param str The string representation of the duration
		 * @returns The newly created #ICalDuration
		 */
		public static new_from_string(str: string): Duration;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): Duration;
		/**
		 * Creates a #ICalDuration with all the fields to be zero.
		 * @returns The newly created #ICalDuration
		 */
		public static new_null_duration(): Duration;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Geo} instead.
	 */
	interface IGeo {
		/**
		 * Creates a new #ICalGeo, copy of #geo.
		 * @returns The newly created #ICalGeo, copy of #geo.
		 */
		clone(): Geo;
		/**
		 * Gets the latitude of #ICalGeo.
		 * @returns The latitude.
		 */
		get_lat(): number;
		/**
		 * Gets the longitude of #ICalGeo.
		 * @returns The longitude.
		 */
		get_lon(): number;
		/**
		 * Sets the latitude of #ICalGeo.
		 * @param lat The latitude
		 */
		set_lat(lat: number): void;
		/**
		 * Sets the longitude of #ICalGeo.
		 * @param lon The longitude
		 */
		set_lon(lon: number): void;
	}

	type GeoInitOptionsMixin = ObjectInitOptions
	export interface GeoInitOptions extends GeoInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Geo} instead.
	 */
	type GeoMixin = IGeo & Object;

	/**
	 * This is the ICalGeo instance.
	 */
	interface Geo extends GeoMixin {}

	class Geo {
		public constructor(options?: Partial<GeoInitOptions>);
		/**
		 * Creates a new #ICalGeo.
		 * @param lat Latitude
		 * @param lon Longitude
		 * @returns The newly created #ICalGeo.
		 */
		public static new(lat: number, lon: number): Geo;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): Geo;
		/**
		 * Creates a new default #ICalGeo.
		 * @returns The newly created #ICalGeo
		 */
		public static new_default(): any | null;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Object} instead.
	 */
	interface IObject {
		/**
		 * Whether free the native libical structure on #ICalObject's finalize even
		 * if the object has set an owner.
		 */
		always_destroy: boolean;
		/**
		 * Whether the native libical structure is from a global shared memory.
		 * If TRUE, then it is not freed on #ICalObject's finalize.
		 */
		is_global_memory: boolean;
		/**
		 * The native libical structure for this ICalObject.
		 */
		native: any;
		/**
		 * GDestroyNotify function to use to destroy the native libical pointer.
		 */
		native_destroy_func: any;
		/**
		 * Owner of the native libical structure. If set, then it is
		 * responsible for a free of the native libical structure.
		 */
		owner: GObject.Object;
		/**
		 * Adds a #depender into the list of objects which should not be destroyed before
		 * this #iobject. It's usually used for cases where the #iobject uses native libical
		 * structure from the #depender. The #depender is referenced. It's illegal to try
		 * to add one #depender multiple times.
		 * @param depender a #GObject depender
		 */
		add_depender(depender: GObject.Object): void;
		/**
		 * Obtain the #ICalObject::always-destroy property value.
		 * @returns Whether the native libical structure is freed even when an owner is set.
		 */
		get_always_destroy(): boolean;
		/**
		 * Obtains whether the native libical structure is a global shared memory,
		 * thus should not be destroyed. This can be set only during construction time.
		 * @returns Whether the native libical structure is a global shared memory.
		 */
		get_is_global_memory(): boolean;
		/**
		 * Obtain native libical structure pointer associated with this #iobject.
		 * @returns Native libical structure pointer associated with this #iobject.
		 */
		get_native(): any | null;
		/**
		 * Obtain a pointer to a function responsible to free the libical native structure.
		 * @returns Pointer to a function responsible to free
		 * the libical native structure.
		 */
		get_native_destroy_func(): GLib.DestroyNotify;
		/**
		 * Obtain current owner of the native libical structure. The returned pointer,
		 * if not NULL, is referenced for thread safety. Unref it with g_object_unref
		 * when done with it.
		 * @returns Current owner of the libical
		 *    native structure. Returns %NULL when there is no owner.
		 */
		ref_owner(): GObject.Object | null;
		/**
		 * Removes a #depender from the list of objects which should not be destroyed before
		 * this #iobject, previously added with {@link ICal.object_add_depender}. It's illegal to try
		 * to remove the #depender which is not in the internal list.
		 * @param depender a #GObject depender
		 */
		remove_depender(depender: GObject.Object): void;
		/**
		 * Unref and remove the owner.
		 */
		remove_owner(): void;
		/**
		 * Sets the #ICalObject::always-destroy property value. When %TRUE, the native
		 * libical structure is always freed, even when an owner of the #iobject is set.
		 * @param value value to set
		 */
		set_always_destroy(value: boolean): void;
		/**
		 * Sets a function to be used to destroy the native libical structure.
		 * @param native_destroy_func Function to be used to destroy the native libical structure
		 */
		set_native_destroy_func(native_destroy_func: GLib.DestroyNotify): void;
		/**
		 * Sets an owner of the native libical structure, that is an object responsible
		 * for a destroy of the native libical structure.
		 * @param owner Owner of the native libical structure
		 */
		set_owner(owner: GObject.Object): void;
		/**
		 * Obtain native libical structure pointer associated with this #iobject and sets the one
		 * at #iobject to NULL, thus it's invalid since now on.
		 * @returns Native libical structure pointer associated with this #iobject.
		 */
		steal_native(): any | null;
		connect(signal: "notify::always-destroy", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::is-global-memory", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::native", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::native-destroy-func", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::owner", callback: (owner: this, ...args: any) => void): number;

	}

	type ObjectInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IObject,
		"always_destroy" |
		"is_global_memory" |
		"native" |
		"native_destroy_func" |
		"owner">;

	export interface ObjectInitOptions extends ObjectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Object} instead.
	 */
	type ObjectMixin = IObject & GObject.Object;

	/**
	 * This is an ICalObject instance struct.
	 */
	interface Object extends ObjectMixin {}

	class Object {
		public constructor(options?: Partial<ObjectInitOptions>);
		/**
		 * Creates an #ICalObject descendant of type #type and initialize private members
		 * of it. The descendants should call this function in their {@link .new} function, or use
		 * corresponding properties during the construction time. This should not be mixed,
		 * either use properties or this function.
		 * 
		 * The #is_global_memory defines whether the returned object is a singleton,
		 * in which case the object is owned by the libical-glib and should not be freed,
		 * or, when %FALSE, the returned object is a newly created object and the caller
		 * is responsible to free it with g_object_unref().
		 * @param object_type a GType of an #ICalObject descendat to construct
		 * @param _native a native libical structure
		 * @param native_destroy_func a function to be called on #native when it should be freed
		 * @param is_global_memory whether #native is a global shared memory structure
		 * @param owner an owner of #native
		 * @returns an #ICalObject descendant of type #type
		 */
		public static construct(object_type: GObject.Type, _native: any | null, native_destroy_func: GLib.DestroyNotify, is_global_memory: boolean, owner: GObject.Object | null): any | null;
		/**
		 * Frees all global objects. Any references to them are invalidated
		 * by this call, unless they had been {@link GObject.ref}-ed manually.
		 */
		public static free_global_objects(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Parameter} instead.
	 */
	interface IParameter {
		/**
		 * Converts an #ICalParameter to the string representation.
		 * @returns The string representation of the #parameter.
		 */
		as_ical_string(): string;
		/**
		 * Deep clone a #ICalParameter.
		 * @returns The newly created #ICalParameter with the same properties as the #p.
		 */
		clone(): Parameter;
		/**
		 * Frees the native part of the ICalParameter.
		 */
		free(): void;
		get_actionparam(): ParameterAction;
		get_altrep(): string | null;
		get_charset(): string | null;
		get_cn(): string | null;
		get_cutype(): ParameterCutype | null;
		get_delegatedfrom(): string | null;
		get_delegatedto(): string | null;
		get_dir(): string | null;
		get_enable(): ParameterEnable;
		get_encoding(): ParameterEncoding;
		get_fbtype(): ParameterFbtype;
		get_filename(): string | null;
		get_fmttype(): string | null;
		get_iana(): string | null;
		/**
		 * Gets the iana_name property of the native part of the #ICalParameter.
		 * @returns The property of the #value
		 */
		get_iana_name(): string | null;
		/**
		 * Gets the iana_value property of the native part of the #ICalParameter.
		 * @returns The property of the #value
		 */
		get_iana_value(): string | null;
		get_id(): string | null;
		get_language(): string | null;
		get_latency(): string | null;
		get_local(): ParameterLocal;
		get_localize(): string | null;
		get_managedid(): string | null;
		get_member(): string | null;
		get_modified(): string | null;
		get_options(): string | null;
		/**
		 * Gets the parent #ICalProperty of the specified #ICalParameter.
		 * @returns The parent #ICalProperty
		 */
		get_parent(): Property | null;
		get_partstat(): ParameterPartstat;
		get_publiccomment(): string | null;
		get_range(): ParameterRange;
		get_reason(): string | null;
		get_related(): ParameterRelated;
		get_reltype(): ParameterReltype;
		get_required(): ParameterRequired;
		get_response(): number;
		get_role(): ParameterRole;
		get_rsvp(): ParameterRsvp;
		get_scheduleagent(): ParameterScheduleagent;
		get_scheduleforcesend(): ParameterScheduleforcesend;
		get_schedulestatus(): string | null;
		get_sentby(): string | null;
		get_size(): string | null;
		get_stayinformed(): ParameterStayinformed;
		get_substate(): ParameterSubstate;
		get_tzid(): string | null;
		get_value(): ParameterValue;
		get_x(): string | null;
		get_xliccomparetype(): ParameterXliccomparetype;
		get_xlicerrortype(): ParameterXlicerrortype;
		/**
		 * Gets the xname property of the native part of the #ICalParameter.
		 * @returns The property of the #value
		 */
		get_xname(): string | null;
		/**
		 * Gets the xvalue property of the native part of the #ICalParameter.
		 * @returns The property of the #value
		 */
		get_xvalue(): string | null;
		/**
		 * Checks whether native parts of two #ICalParameters have the same name.
		 * @param param2 The #ICalParameter to be checked
		 * @returns 1 if the parameters have the same name, 0 or not.
		 */
		has_same_name(param2: Parameter): number;
		/**
		 * Checks the type of a #ICalParameter.
		 * @returns The type of the #parameter.
		 */
		isa(): ParameterKind;
		/**
		 * Checks whether the native part of the #ICalParameter is of type icalparameter.
		 * @returns 1 if the native part is of type icalparameter, 0 if not.
		 */
		isa_parameter(): number;
		set_actionparam(v: ParameterAction): void;
		set_altrep(v: string): void;
		set_charset(v: string): void;
		set_cn(v: string): void;
		set_cutype(v: ParameterCutype): void;
		set_delegatedfrom(v: string): void;
		set_delegatedto(v: string): void;
		set_dir(v: string): void;
		set_enable(v: ParameterEnable): void;
		set_encoding(v: ParameterEncoding): void;
		set_fbtype(v: ParameterFbtype): void;
		set_filename(v: string): void;
		set_fmttype(v: string): void;
		set_iana(v: string): void;
		/**
		 * Sets the iana_name property of the native part of the #ICalParameter.
		 * @param v The name to be set into the #param
		 */
		set_iana_name(v: string): void;
		/**
		 * Sets the iana_value property of the native part of the #ICalParameter.
		 * @param v The value to be set into the #param
		 */
		set_iana_value(v: string): void;
		set_id(v: string): void;
		set_language(v: string): void;
		set_latency(v: string): void;
		set_local(v: ParameterLocal): void;
		set_localize(v: string): void;
		set_managedid(v: string): void;
		set_member(v: string): void;
		set_modified(v: string): void;
		set_options(v: string): void;
		/**
		 * Sets the parent #ICalProperty of an #ICalParameter.
		 * @param property The parent #ICalProperty
		 */
		set_parent(property: Property | null): void;
		set_partstat(v: ParameterPartstat): void;
		set_publiccomment(v: string): void;
		set_range(v: ParameterRange): void;
		set_reason(v: string): void;
		set_related(v: ParameterRelated): void;
		set_reltype(v: ParameterReltype): void;
		set_required(v: ParameterRequired): void;
		set_response(v: number): void;
		set_role(v: ParameterRole): void;
		set_rsvp(v: ParameterRsvp): void;
		set_scheduleagent(v: ParameterScheduleagent): void;
		set_scheduleforcesend(v: ParameterScheduleforcesend): void;
		set_schedulestatus(v: string): void;
		set_sentby(v: string): void;
		set_size(v: string): void;
		set_stayinformed(v: ParameterStayinformed): void;
		set_substate(v: ParameterSubstate): void;
		set_tzid(v: string): void;
		set_value(v: ParameterValue): void;
		set_x(v: string): void;
		set_xliccomparetype(v: ParameterXliccomparetype): void;
		set_xlicerrortype(v: ParameterXlicerrortype): void;
		/**
		 * Sets the xname property of the native part of the #ICalParameter.
		 * @param v The name to be set into the #param
		 */
		set_xname(v: string): void;
		/**
		 * Sets the xvalue property of the native part of the #ICalParameter.
		 * @param v The value to be set into the #param
		 */
		set_xvalue(v: string): void;
	}

	type ParameterInitOptionsMixin = ObjectInitOptions
	export interface ParameterInitOptions extends ParameterInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Parameter} instead.
	 */
	type ParameterMixin = IParameter & Object;

	/**
	 * This is the ICalParameter instance.
	 */
	interface Parameter extends ParameterMixin {}

	class Parameter {
		public constructor(options?: Partial<ParameterInitOptions>);
		/**
		 * Creates a new #ICalParameter according to the kind type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new(v: ParameterKind): Parameter;
		/**
		 * Creates a new #ICalParameter according to the action type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_actionparam(v: ParameterAction): Parameter;
		public static new_altrep(v: string): Parameter;
		public static new_charset(v: string): Parameter;
		public static new_cn(v: string): Parameter;
		public static new_cutype(v: ParameterCutype): Parameter;
		public static new_delegatedfrom(v: string): Parameter;
		public static new_delegatedto(v: string): Parameter;
		public static new_dir(v: string): Parameter;
		/**
		 * Creates a new #ICalParameter according to the enable type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_enable(v: ParameterEnable): Parameter;
		/**
		 * Creates a new #ICalParameter according to the encoding type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_encoding(v: ParameterEncoding): Parameter;
		/**
		 * Creates a new #ICalParameter according to the fbtype type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_fbtype(v: ParameterFbtype): Parameter;
		public static new_filename(v: string): Parameter;
		public static new_fmttype(v: string): Parameter;
		/**
		 * Creates a #ICalParameter from a string of form "PARAMNAME=VALUE".
		 * @param value The string from which the #ICalParameter is created
		 * @returns The newly created $ICalParameter with the properties specified in the #value.
		 */
		public static new_from_string(value: string): Parameter;
		/**
		 * Creates a new #ICalParameter from just the value, the part after the "="
		 * @param kind The kind of #ICalParameter to be created
		 * @param value The string from which #ICalParameter to be created
		 * @returns The newly created #ICalParameter
		 */
		public static new_from_value_string(kind: ParameterKind, value: string): Parameter;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object): Parameter;
		public static new_iana(v: string): Parameter;
		public static new_id(v: string): Parameter;
		public static new_language(v: string): Parameter;
		public static new_latency(v: string): Parameter;
		/**
		 * Creates a new #ICalParameter according to the local type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_local(v: ParameterLocal): Parameter;
		public static new_localize(v: string): Parameter;
		public static new_managedid(v: string): Parameter;
		public static new_member(v: string): Parameter;
		public static new_modified(v: string): Parameter;
		public static new_options(v: string): Parameter;
		/**
		 * Creates a new #ICalParameter according to the partstat type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_partstat(v: ParameterPartstat): Parameter;
		public static new_publiccomment(v: string): Parameter;
		/**
		 * Creates a new #ICalParameter according to the range type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_range(v: ParameterRange): Parameter;
		public static new_reason(v: string): Parameter;
		/**
		 * Creates a new #ICalParameter according to the related type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_related(v: ParameterRelated): Parameter;
		/**
		 * Creates a new #ICalParameter according to the reltype type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_reltype(v: ParameterReltype): Parameter;
		/**
		 * Creates a new #ICalParameter according to the required type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_required(v: ParameterRequired): Parameter;
		/**
		 * Creates a new #ICalParameter according to the response type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_response(v: number): Parameter;
		/**
		 * Creates a new #ICalParameter according to the role type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_role(v: ParameterRole): Parameter;
		/**
		 * Creates a new #ICalParameter according to the rsvp type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_rsvp(v: ParameterRsvp): Parameter;
		/**
		 * Creates a new #ICalParameter according to the scheduleagent type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_scheduleagent(v: ParameterScheduleagent): Parameter;
		/**
		 * Creates a new #ICalParameter according to the scheduleforcesend type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_scheduleforcesend(v: ParameterScheduleforcesend): Parameter;
		public static new_schedulestatus(v: string): Parameter;
		public static new_sentby(v: string): Parameter;
		public static new_size(v: string): Parameter;
		/**
		 * Creates a new #ICalParameter according to the stayinformed type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_stayinformed(v: ParameterStayinformed): Parameter;
		/**
		 * Creates a new #ICalParameter according to the substate type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_substate(v: ParameterSubstate): Parameter;
		public static new_tzid(v: string): Parameter;
		/**
		 * Creates a new #ICalParameter according to the value type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_value(v: ParameterValue): Parameter;
		public static new_x(v: string): Parameter;
		/**
		 * Creates a new #ICalParameter according to the xliccomparetype type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_xliccomparetype(v: ParameterXliccomparetype): Parameter;
		/**
		 * Creates a new #ICalParameter according to the xlicerrortype type.
		 * @param v The type of #ICalParameter to be created
		 * @returns The newly created #ICalParameter.
		 */
		public static new_xlicerrortype(v: ParameterXlicerrortype): Parameter;
		/**
		 * Converts a string to the #ICalParameterKind.
		 * @param string The string representation of the #ICalParameter
		 * @returns The #ICalParameterKind converted from #string
		 */
		public static kind_from_string(string: string): ParameterKind;
		/**
		 * Checks whether #ICalParameterKind is valid.
		 * @param kind The #ICalPropertyKind
		 * @returns 1 if valid, 0 if not.
		 */
		public static kind_is_valid(kind: ParameterKind): boolean;
		/**
		 * Converts the #ICalParameter to the string representation.
		 * @param kind The #ICalParameterKind to be converted
		 * @returns The string representation of #kind.
		 */
		public static kind_to_string(kind: ParameterKind): string;
		/**
		 * Converts the #ICalParameterValue to #ICalValueKind.
		 * @param value A #ICalParameterValue
		 * @returns #ICalValueKind
		 */
		public static value_to_value_kind(value: ParameterValue): ValueKind;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Parser} instead.
	 */
	interface IParser {
		/**
		 * Add a line at one time into the #ICalParser until the parsing is complete and #ICalComponent will be
		 * returned.
		 * @param str A line of string representation of the #ICalComponent
		 * @returns The complete #ICalComponent.
		 */
		add_line(str: string | null): Component | null;
		/**
		 * We won't get a clean exit if some components did not have an "END" tag. Clear off any component that
		 * may be left in the list.
		 * @returns The root #ICalComponent in #parser.
		 */
		clean(): Component | null;
		/**
		 * Frees a #ICalParser.
		 */
		free(): void;
		/**
		 * Given a line generator function, returns a single iCal content line.
		 * @param func A line generator function
		 * @returns A single iCal content line.
		 */
		get_line(func: ParserLineGenFunc): string;
		/**
		 * Gets the state of the target parser.
		 * @returns The parser state stored in the #ICalParser.
		 */
		get_state(): ParserState;
		/**
		 * icalparser_parse takes a string that holds the text ( in RFC 2445 format ) and returns a pointer to an
		 * #ICalComponent. The caller owns the memory. #func is a pointer to a function that returns one content
		 * line per invocation.
		 * @param func The function used to parse
		 * @returns The component output by the parser.
		 */
		parse(func: ParserLineGenFunc): Component;
	}

	type ParserInitOptionsMixin = ObjectInitOptions
	export interface ParserInitOptions extends ParserInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Parser} instead.
	 */
	type ParserMixin = IParser & Object;

	/**
	 * This is the ICalParser instance.
	 */
	interface Parser extends ParserMixin {}

	class Parser {
		public constructor(options?: Partial<ParserInitOptions>);
		/**
		 * Creates a default #ICalParser.
		 * @returns The newly created #ICalParser.
		 */
		public static new(): Parser;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object): Parser;
		/**
		 * Parses the string into a #ICalComponent.
		 * @param str The string to be parsed
		 * @returns The #ICalComponent parsed from str.
		 */
		public static parse_string(str: string): Component;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Period} instead.
	 */
	interface IPeriod {
		/**
		 * Translates #ICalPeriod to string.
		 * @returns The string representation of #ICalPeriod.
		 */
		as_ical_string(): string;
		/**
		 * Gets the duration from an #ICalPeriod.
		 * @returns The duration of #period.
		 */
		get_duration(): Duration;
		/**
		 * Gets the end time from an #ICalPeriod.
		 * @returns The end of #period.
		 */
		get_end(): Time;
		/**
		 * Gets the start time from an #ICalPeriod.
		 * @returns The start of #period.
		 */
		get_start(): Time;
		/**
		 * Checks the #ICalPeriod is null_period.
		 * @returns 1 if yes, 0 if not.
		 */
		is_null_period(): boolean;
		/**
		 * Checks the #ICalPeriod is valid_period.
		 * @returns 1 if yes, 0 if not.
		 */
		is_valid_period(): boolean;
		/**
		 * Sets the duration of an #ICalPeriod.
		 * @param duration The duration of #period
		 */
		set_duration(duration: Duration): void;
		/**
		 * Sets the end time of an #ICalPeriod.
		 * @param end The end of #period
		 */
		set_end(end: Time): void;
		/**
		 * Sets the start time of an #ICalPeriod.
		 * @param start The start of #period
		 */
		set_start(start: Time): void;
	}

	type PeriodInitOptionsMixin = ObjectInitOptions
	export interface PeriodInitOptions extends PeriodInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Period} instead.
	 */
	type PeriodMixin = IPeriod & Object;

	/**
	 * This is the ICalPeriod instance.
	 */
	interface Period extends PeriodMixin {}

	class Period {
		public constructor(options?: Partial<PeriodInitOptions>);
		/**
		 * Creates a #ICalPeriod from a string.
		 * @param str The string used to create the #ICalPeriod
		 * @returns The newly created #ICalPeriod
		 */
		public static new_from_string(str: string): Period;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): Period;
		/**
		 * Creates a default #ICalPeriod.
		 * @returns The newly created default #ICalPeriod
		 */
		public static new_null_period(): Period;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Property} instead.
	 */
	interface IProperty {
		/**
		 * Adds a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
		 * completion the native part of #ICalParameter will be set to NULL.
		 * @param parameter The parameter to be added into #prop
		 */
		add_parameter(parameter: Parameter): void;
		/**
		 * Converts a #ICalProperty to a string representation.
		 * @returns The string representation of #prop.
		 */
		as_ical_string(): string;
		/**
		 * Deeply clone a #ICalProperty.
		 * @returns The newly created #ICalProperty deeply cloned from #prop.
		 */
		clone(): Property;
		/**
		 * Counts the parameters in the #ICalProperty.
		 * @returns The count of the parameters in the #ICalProperty.
		 */
		count_parameters(): number;
		/**
		 * Frees a #ICalProperty.
		 */
		free(): void;
		/**
		 * Gets the acceptresponse of #ICalProperty.
		 * @returns Get the acceptresponse of #ICalProperty.
		 */
		get_acceptresponse(): string;
		/**
		 * Gets the acknowledged time of #ICalProperty.
		 * @returns Get the acknowledged time of #ICalProperty.
		 */
		get_acknowledged(): Time;
		/**
		 * Gets the action of #ICalProperty.
		 * @returns Get the action of #ICalProperty.
		 */
		get_action(): PropertyAction;
		/**
		 * Gets the allowconflict of #ICalProperty.
		 * @returns Get the allowconflict of #ICalProperty.
		 */
		get_allowconflict(): string;
		/**
		 * Gets the attach of #ICalProperty.
		 * @returns Get the attach of #ICalProperty.
		 */
		get_attach(): Attach;
		/**
		 * Gets the attendee of #ICalProperty.
		 * @returns Get the attendee of #ICalProperty.
		 */
		get_attendee(): string;
		/**
		 * Gets the busytype of #ICalProperty.
		 * @returns Get the busytype of #ICalProperty.
		 */
		get_busytype(): PropertyBusytype;
		/**
		 * Gets the calid of #ICalProperty.
		 * @returns Get the calid of #ICalProperty.
		 */
		get_calid(): string;
		/**
		 * Gets the calmaster of #ICalProperty.
		 * @returns Get the calmaster of #ICalProperty.
		 */
		get_calmaster(): string;
		/**
		 * Gets the calscale of #ICalProperty.
		 * @returns Get the calscale of #ICalProperty.
		 */
		get_calscale(): string;
		/**
		 * Gets the capversion of #ICalProperty.
		 * @returns Get the capversion of #ICalProperty.
		 */
		get_capversion(): string;
		/**
		 * Gets the carid of #ICalProperty.
		 * @returns Get the carid of #ICalProperty.
		 */
		get_carid(): string;
		/**
		 * Gets the carlevel of #ICalProperty.
		 * @returns Get the carlevel of #ICalProperty.
		 */
		get_carlevel(): PropertyCarlevel;
		/**
		 * Gets the categories of #ICalProperty.
		 * @returns Get the categories of #ICalProperty.
		 */
		get_categories(): string;
		/**
		 * Gets the class of #ICalProperty.
		 * @returns Get the class of #ICalProperty.
		 */
		get_class(): Property_Class;
		/**
		 * Gets the cmd of #ICalProperty.
		 * @returns Get the cmd of #ICalProperty.
		 */
		get_cmd(): PropertyCmd;
		/**
		 * Gets the color property of the #prop.
		 * @returns Get the color property.
		 */
		get_color(): string;
		/**
		 * Gets the comment of #ICalProperty.
		 * @returns Get the comment of #ICalProperty.
		 */
		get_comment(): string;
		/**
		 * Gets the completed time of #ICalProperty.
		 * @returns Get the completed time of #ICalProperty.
		 */
		get_completed(): Time;
		/**
		 * Gets the components of #ICalProperty.
		 * @returns Get the components of #ICalProperty.
		 */
		get_components(): string;
		/**
		 * Gets the contact of #ICalProperty.
		 * @returns Get the contact of #ICalProperty.
		 */
		get_contact(): string;
		/**
		 * Gets the created time of #ICalProperty.
		 * @returns Get the created time of #ICalProperty.
		 */
		get_created(): Time;
		/**
		 * Gets the csid of #ICalProperty.
		 * @returns Get the csid of #ICalProperty.
		 */
		get_csid(): string;
		/**
		 * Gets the datemax time of #ICalProperty.
		 * @returns Get the datemax time of #ICalProperty.
		 */
		get_datemax(): Time;
		/**
		 * Gets the datemin time of #ICalProperty.
		 * @returns Get the datemin time of #ICalProperty.
		 */
		get_datemin(): Time;
		/**
		 * If the property is a DATE-TIME with a TZID parameter and a corresponding VTIMEZONE is present in the
		 * component, the returned component will already be in the correct timezone; otherwise the caller is responsible
		 * for converting it.
		 * 
		 * The #comp can be NULL, in which case the parent of the #prop is used to find
		 * the corresponding time zone.
		 * @param comp An #ICalComponent
		 * @returns Get a DATE or DATE-TIME property as an #ICalTime.
		 */
		get_datetime_with_component(comp: Component | null): Time;
		/**
		 * Gets the decreed of #ICalProperty.
		 * @returns Get the decreed of #ICalProperty.
		 */
		get_decreed(): string;
		/**
		 * Gets the defaultcharset of #ICalProperty.
		 * @returns Get the defaultcharset of #ICalProperty.
		 */
		get_defaultcharset(): string;
		/**
		 * Gets the defaultlocale of #ICalProperty.
		 * @returns Get the defaultlocale of #ICalProperty.
		 */
		get_defaultlocale(): string;
		/**
		 * Gets the defaulttzid of #ICalProperty.
		 * @returns Get the defaulttzid of #ICalProperty.
		 */
		get_defaulttzid(): string;
		/**
		 * Gets the defaultvcars of #ICalProperty.
		 * @returns Get the defaultvcars of #ICalProperty.
		 */
		get_defaultvcars(): string;
		/**
		 * Gets the deny of #ICalProperty.
		 * @returns Get the deny of #ICalProperty.
		 */
		get_deny(): string;
		/**
		 * Gets the description of #ICalProperty.
		 * @returns Get the description of #ICalProperty.
		 */
		get_description(): string;
		/**
		 * Gets the dtend time of #ICalProperty.
		 * @returns Get the dtend time of #ICalProperty.
		 */
		get_dtend(): Time;
		/**
		 * Gets the dtstamp time of #ICalProperty.
		 * @returns Get the dtstamp time of #ICalProperty.
		 */
		get_dtstamp(): Time;
		/**
		 * Gets the dtstart time of #ICalProperty.
		 * @returns Get the dtstart time of #ICalProperty.
		 */
		get_dtstart(): Time;
		/**
		 * Gets the due time of #ICalProperty.
		 * @returns Get the due time of #ICalProperty.
		 */
		get_due(): Time;
		/**
		 * Gets the duration of #ICalProperty.
		 * @returns Get the duration of #ICalProperty.
		 */
		get_duration(): Duration;
		/**
		 * Gets the estimatedduration of #ICalProperty.
		 * @returns Get the estimatedduration of #ICalProperty.
		 */
		get_estimatedduration(): Duration;
		/**
		 * Gets the exdate time of #ICalProperty.
		 * @returns Get the exdate time of #ICalProperty.
		 */
		get_exdate(): Time;
		/**
		 * Gets the expand of #ICalProperty.
		 * @returns Get the expand of #ICalProperty.
		 */
		get_expand(): number;
		/**
		 * Gets the exrule recurrence type of #ICalProperty.
		 * @returns Get the exrule recurrence type of #ICalProperty.
		 */
		get_exrule(): Recurrence;
		/**
		 * Gets the first #ICalParameter from the parent #ICalProperty.
		 * @param kind The target kind of #ICalParameter to be retrieved
		 * @returns The first #ICalParameter of #prop.
		 */
		get_first_parameter(kind: ParameterKind): Parameter;
		/**
		 * Gets the freebusy period type of #ICalProperty.
		 * @returns Get the freebusy period type of #ICalProperty.
		 */
		get_freebusy(): Period;
		/**
		 * Gets the geo type of #ICalProperty.
		 * @returns Get the geo type of #ICalProperty.
		 */
		get_geo(): Geo;
		/**
		 * Gets the grant of #ICalProperty.
		 * @returns Get the grant of #ICalProperty.
		 */
		get_grant(): string;
		/**
		 * Gets the itipversion of #ICalProperty.
		 * @returns Get the itipversion of #ICalProperty.
		 */
		get_itipversion(): string;
		/**
		 * Gets the lastmodified time of #ICalProperty.
		 * @returns Get the lastmodified time of #ICalProperty.
		 */
		get_lastmodified(): Time;
		/**
		 * Gets the location of #ICalProperty.
		 * @returns Get the location of #ICalProperty.
		 */
		get_location(): string;
		/**
		 * Gets the maxcomponentsize of #ICalProperty.
		 * @returns Get the maxcomponentsize of #ICalProperty.
		 */
		get_maxcomponentsize(): number;
		/**
		 * Gets the maxdate time of #ICalProperty.
		 * @returns Get the maxdate time of #ICalProperty.
		 */
		get_maxdate(): Time;
		/**
		 * Gets the maxresults of #ICalProperty.
		 * @returns Get the maxresults of #ICalProperty.
		 */
		get_maxresults(): number;
		/**
		 * Gets the maxresultssize of #ICalProperty.
		 * @returns Get the maxresultssize of #ICalProperty.
		 */
		get_maxresultssize(): number;
		/**
		 * Gets the method of #ICalProperty.
		 * @returns Get the method of #ICalProperty.
		 */
		get_method(): PropertyMethod;
		/**
		 * Gets the mindate time of #ICalProperty.
		 * @returns Get the mindate time of #ICalProperty.
		 */
		get_mindate(): Time;
		/**
		 * Gets the multipart of #ICalProperty.
		 * @returns Get the multipart of #ICalProperty.
		 */
		get_multipart(): string;
		/**
		 * Gets the name of #ICalProperty.
		 * @returns Get the name of #ICalProperty.
		 */
		get_name(): string;
		/**
		 * Gets the next #ICalParameter from the parent #ICalProperty.
		 * @param kind The target kind of #ICalParameter to be retrieved
		 * @returns The next #ICalParameter of #prop.
		 */
		get_next_parameter(kind: ParameterKind): Parameter;
		/**
		 * Gets the organizer of #ICalProperty.
		 * @returns Get the organizer of #ICalProperty.
		 */
		get_organizer(): string;
		/**
		 * Gets the owner of #ICalProperty.
		 * @returns Get the owner of #ICalProperty.
		 */
		get_owner(): string;
		/**
		 * Gets the string representation of the target parameter in the #ICalProperty.
		 * @param name The name of the target parameter
		 * @returns The string representation of the parameter.
		 */
		get_parameter_as_string(name: string): string;
		/**
		 * Gets the parent component of the property. Use with caution. When icalproperty is deallocated, it won't
		 * deallocate its parent. However the #ICalComponent object created using this method will be deallocated
		 * (if no reference in other places). So You need to make sure there is another reference except the one
		 * in #ICalProperty.
		 * @returns The parent #ICalComponent of #ICalProperty.
		 */
		get_parent(): Component | null;
		/**
		 * Gets the percentcomplete of #ICalProperty.
		 * @returns Get the percentcomplete of #ICalProperty.
		 */
		get_percentcomplete(): number;
		/**
		 * Gets the permission of #ICalProperty.
		 * @returns Get the permission of #ICalProperty.
		 */
		get_permission(): string;
		/**
		 * Gets the pollcompletion of #ICalProperty.
		 * @returns Get the pollcompletion of #ICalProperty.
		 */
		get_pollcompletion(): PropertyPollcompletion;
		/**
		 * Gets the pollitemid of #ICalProperty.
		 * @returns Get the pollitemid of #ICalProperty.
		 */
		get_pollitemid(): number;
		/**
		 * Gets the pollmode of #ICalProperty.
		 * @returns Get the pollmode of #ICalProperty.
		 */
		get_pollmode(): PropertyPollmode;
		/**
		 * Gets the pollproperties of #ICalProperty.
		 * @returns Get the pollproperties of #ICalProperty.
		 */
		get_pollproperties(): string;
		/**
		 * Gets the pollwinner of #ICalProperty.
		 * @returns Get the pollwinner of #ICalProperty.
		 */
		get_pollwinner(): number;
		/**
		 * Gets the priority of #ICalProperty.
		 * @returns Get the priority of #ICalProperty.
		 */
		get_priority(): number;
		/**
		 * Gets the prodid of #ICalProperty.
		 * @returns Get the prodid of #ICalProperty.
		 */
		get_prodid(): string;
		/**
		 * Gets the property name of #ICalProperty.
		 * @returns Property name of #ICalProperty.
		 */
		get_property_name(): string;
		/**
		 * Gets the query of #ICalProperty.
		 * @returns Get the query of #ICalProperty.
		 */
		get_query(): string;
		/**
		 * Gets the queryid of #ICalProperty.
		 * @returns Get the queryid of #ICalProperty.
		 */
		get_queryid(): string;
		/**
		 * Gets the querylevel of #ICalProperty.
		 * @returns Get the querylevel of #ICalProperty.
		 */
		get_querylevel(): PropertyQuerylevel;
		/**
		 * Gets the queryname of #ICalProperty.
		 * @returns Get the queryname of #ICalProperty.
		 */
		get_queryname(): string;
		/**
		 * Gets the rdate  of #ICalProperty.
		 * @returns Get the rdate  of #ICalProperty.
		 */
		get_rdate(): Datetimeperiod;
		/**
		 * Gets the recuraccepted of #ICalProperty.
		 * @returns Get the recuraccepted of #ICalProperty.
		 */
		get_recuraccepted(): string;
		/**
		 * Gets the recurexpand of #ICalProperty.
		 * @returns Get the recurexpand of #ICalProperty.
		 */
		get_recurexpand(): string;
		/**
		 * Gets the recurlimit of #ICalProperty.
		 * @returns Get the recurlimit of #ICalProperty.
		 */
		get_recurlimit(): string;
		/**
		 * Gets the recurrenceid time of #ICalProperty.
		 * @returns Get the recurrenceid time of #ICalProperty.
		 */
		get_recurrenceid(): Time;
		/**
		 * Gets the relatedto of #ICalProperty.
		 * @returns Get the relatedto of #ICalProperty.
		 */
		get_relatedto(): string;
		/**
		 * Gets the relcalid of #ICalProperty.
		 * @returns Get the relcalid of #ICalProperty.
		 */
		get_relcalid(): string;
		/**
		 * Gets the repeat of #ICalProperty.
		 * @returns Get the repeat of #ICalProperty.
		 */
		get_repeat(): number;
		/**
		 * Gets the replyurl of #ICalProperty.
		 * @returns Get the replyurl of #ICalProperty.
		 */
		get_replyurl(): string;
		/**
		 * Gets the requeststatus of #ICalProperty.
		 * @returns Get the requeststatus of #ICalProperty.
		 */
		get_requeststatus(): Reqstat;
		/**
		 * Gets the resources of #ICalProperty.
		 * @returns Get the resources of #ICalProperty.
		 */
		get_resources(): string;
		/**
		 * Gets the response of #ICalProperty.
		 * @returns Get the response of #ICalProperty.
		 */
		get_response(): number;
		/**
		 * Gets the restriction of #ICalProperty.
		 * @returns Get the restriction of #ICalProperty.
		 */
		get_restriction(): string;
		/**
		 * Gets the rrule recurrence type of #ICalProperty.
		 * @returns Get the rrule recurrence type of #ICalProperty.
		 */
		get_rrule(): Recurrence;
		/**
		 * Gets the scope of #ICalProperty.
		 * @returns Get the scope of #ICalProperty.
		 */
		get_scope(): string;
		/**
		 * Gets the sequence of #ICalProperty.
		 * @returns Get the sequence of #ICalProperty.
		 */
		get_sequence(): number;
		/**
		 * Gets the status of #ICalProperty.
		 * @returns Get the status of #ICalProperty.
		 */
		get_status(): PropertyStatus;
		/**
		 * Gets the storesexpanded of #ICalProperty.
		 * @returns Get the storesexpanded of #ICalProperty.
		 */
		get_storesexpanded(): string;
		/**
		 * Gets the summary of #ICalProperty.
		 * @returns Get the summary of #ICalProperty.
		 */
		get_summary(): string;
		/**
		 * Gets the target of #ICalProperty.
		 * @returns Get the target of #ICalProperty.
		 */
		get_target(): string;
		/**
		 * Gets the taskmode of #ICalProperty.
		 * @returns Get the taskmode of #ICalProperty.
		 */
		get_taskmode(): PropertyTaskmode;
		/**
		 * Gets the transp of #ICalProperty.
		 * @returns Get the transp of #ICalProperty.
		 */
		get_transp(): PropertyTransp;
		/**
		 * Gets the trigger period type of #ICalProperty.
		 * @returns Get the trigger period type of #ICalProperty.
		 */
		get_trigger(): Trigger;
		/**
		 * Gets the tzid of #ICalProperty.
		 * @returns Get the tzid of #ICalProperty.
		 */
		get_tzid(): string;
		/**
		 * Gets the tzidaliasof of #ICalProperty.
		 * @returns Get the tzidaliasof of #ICalProperty.
		 */
		get_tzidaliasof(): string;
		/**
		 * Gets the tzname of #ICalProperty.
		 * @returns Get the tzname of #ICalProperty.
		 */
		get_tzname(): string;
		/**
		 * Gets the tzoffsetfrom of #ICalProperty.
		 * @returns Get the tzoffsetfrom of #ICalProperty.
		 */
		get_tzoffsetfrom(): number;
		/**
		 * Gets the tzoffsetto of #ICalProperty.
		 * @returns Get the tzoffsetto of #ICalProperty.
		 */
		get_tzoffsetto(): number;
		/**
		 * Gets the tzuntil time of #ICalProperty.
		 * @returns Get the tzuntil time of #ICalProperty.
		 */
		get_tzuntil(): Time;
		/**
		 * Gets the tzurl of #ICalProperty.
		 * @returns Get the tzurl of #ICalProperty.
		 */
		get_tzurl(): string;
		/**
		 * Gets the uid of #ICalProperty.
		 * @returns Get the uid of #ICalProperty.
		 */
		get_uid(): string;
		/**
		 * Gets the url of #ICalProperty.
		 * @returns Get the url of #ICalProperty.
		 */
		get_url(): string;
		/**
		 * Gets the #ICalValue of #ICalProperty.
		 * @returns The #ICalValue of #prop.
		 */
		get_value(): Value;
		/**
		 * Gets the string representation of the value in #ICalProperty.
		 * @returns The string representation of the value of the #ICalProperty.
		 */
		get_value_as_string(): string;
		/**
		 * Gets the version of #ICalProperty.
		 * @returns Get the version of #ICalProperty.
		 */
		get_version(): string;
		/**
		 * Gets the voter of #ICalProperty.
		 * @returns Get the voter of #ICalProperty.
		 */
		get_voter(): string;
		/**
		 * Gets the x of #ICalProperty.
		 * @returns Get the x of #ICalProperty.
		 */
		get_x(): string;
		/**
		 * Gets the name of x property.
		 * @returns The name of x property.
		 */
		get_x_name(): string | null;
		/**
		 * Gets the xlicclass of #ICalProperty.
		 * @returns Get the xlicclass of #ICalProperty.
		 */
		get_xlicclass(): PropertyXlicclass;
		/**
		 * Gets the xlicclustercount of #ICalProperty.
		 * @returns Get the xlicclustercount of #ICalProperty.
		 */
		get_xlicclustercount(): string;
		/**
		 * Gets the xlicerror of #ICalProperty.
		 * @returns Get the xlicerror of #ICalProperty.
		 */
		get_xlicerror(): string;
		/**
		 * Gets the xlicmimecharset of #ICalProperty.
		 * @returns Get the xlicmimecharset of #ICalProperty.
		 */
		get_xlicmimecharset(): string;
		/**
		 * Gets the xlicmimecid of #ICalProperty.
		 * @returns Get the xlicmimecid of #ICalProperty.
		 */
		get_xlicmimecid(): string;
		/**
		 * Gets the xlicmimecontenttype of #ICalProperty.
		 * @returns Get the xlicmimecontenttype of #ICalProperty.
		 */
		get_xlicmimecontenttype(): string;
		/**
		 * Gets the xlicmimeencoding of #ICalProperty.
		 * @returns Get the xlicmimeencoding of #ICalProperty.
		 */
		get_xlicmimeencoding(): string;
		/**
		 * Gets the xlicmimefilename of #ICalProperty.
		 * @returns Get the xlicmimefilename of #ICalProperty.
		 */
		get_xlicmimefilename(): string;
		/**
		 * Gets the xlicmimeoptinfo of #ICalProperty.
		 * @returns Get the xlicmimeoptinfo of #ICalProperty.
		 */
		get_xlicmimeoptinfo(): string;
		/**
		 * Gets the kind of #ICalProperty.
		 * @returns The type of #ICalProperty.
		 */
		isa(): PropertyKind;
		/**
		 * Checks whether the native part of #ICalProperty is of the type icalproperty.
		 * @returns 1 if the native part of #property is of the type icalproperty, 0 if not.
		 */
		isa_property(): number;
		/**
		 * Removes the target kind of the parameters in the #ICalProperty.
		 * @param kind The #ICalParameterKind to be removed
		 */
		remove_parameter_by_kind(kind: ParameterKind): void;
		/**
		 * Removes parameter in the #ICalProperty by name.
		 * @param name The name of the parameter to be removed
		 */
		remove_parameter_by_name(name: string): void;
		/**
		 * Removes the parameter in the #ICalProperty by ref.
		 * @param param The #ICalParameter to be removed
		 */
		remove_parameter_by_ref(param: Parameter): void;
		/**
		 * Sets the acceptresponse for the #ICalProperty.
		 * @param v The acceptresponse
		 */
		set_acceptresponse(v: string): void;
		/**
		 * Sets the acknowledged time for the #ICalProperty.
		 * @param v The acknowledgement time
		 */
		set_acknowledged(v: Time): void;
		/**
		 * Sets the action for the #ICalProperty.
		 * @param v The action
		 */
		set_action(v: PropertyAction): void;
		/**
		 * Sets the allowconflict for the #ICalProperty.
		 * @param v The allowconflict
		 */
		set_allowconflict(v: string): void;
		/**
		 * Sets the attach for the #ICalProperty.
		 * @param v The attach
		 */
		set_attach(v: Attach): void;
		/**
		 * Sets the attendee for the #ICalProperty.
		 * @param v The attendee
		 */
		set_attendee(v: string): void;
		/**
		 * Sets the busytype for the #ICalProperty.
		 * @param v The busytype
		 */
		set_busytype(v: PropertyBusytype): void;
		/**
		 * Sets the calid for the #ICalProperty.
		 * @param v The calid
		 */
		set_calid(v: string): void;
		/**
		 * Sets the calmaster for the #ICalProperty.
		 * @param v The calmaster
		 */
		set_calmaster(v: string): void;
		/**
		 * Sets the calscale for the #ICalProperty.
		 * @param v The calscale
		 */
		set_calscale(v: string): void;
		/**
		 * Sets the capversion for the #ICalProperty.
		 * @param v The capversion
		 */
		set_capversion(v: string): void;
		/**
		 * Sets the carid for the #ICalProperty.
		 * @param v The carid
		 */
		set_carid(v: string): void;
		/**
		 * Sets the carlevel for the #ICalProperty.
		 * @param v The carlevel
		 */
		set_carlevel(v: PropertyCarlevel): void;
		/**
		 * Sets the categories for the #ICalProperty.
		 * @param v The categories
		 */
		set_categories(v: string): void;
		/**
		 * Sets the class for the #ICalProperty.
		 * @param v The class
		 */
		set_class(v: Property_Class): void;
		/**
		 * Sets the cmd for the #ICalProperty.
		 * @param v The cmd
		 */
		set_cmd(v: PropertyCmd): void;
		/**
		 * Sets the color for the #prop.
		 * @param v The color
		 */
		set_color(v: string): void;
		/**
		 * Sets the comment for the #ICalProperty.
		 * @param v The comment
		 */
		set_comment(v: string): void;
		/**
		 * Sets the completed time for the #ICalProperty.
		 * @param v The completed time
		 */
		set_completed(v: Time): void;
		/**
		 * Sets the components for the #ICalProperty.
		 * @param v The components
		 */
		set_components(v: string): void;
		/**
		 * Sets the contact for the #ICalProperty.
		 * @param v The contact
		 */
		set_contact(v: string): void;
		/**
		 * Sets the created time for the #ICalProperty.
		 * @param v The created time
		 */
		set_created(v: Time): void;
		/**
		 * Sets the csid for the #ICalProperty.
		 * @param v The csid
		 */
		set_csid(v: string): void;
		/**
		 * Sets the datemax time for the #ICalProperty.
		 * @param v The datemax time
		 */
		set_datemax(v: Time): void;
		/**
		 * Sets the datemin time for the #ICalProperty.
		 * @param v The datemin time
		 */
		set_datemin(v: Time): void;
		/**
		 * Sets the decreed for the #ICalProperty.
		 * @param v The decreed
		 */
		set_decreed(v: string): void;
		/**
		 * Sets the defaultcharset for the #ICalProperty.
		 * @param v The defaultcharset
		 */
		set_defaultcharset(v: string): void;
		/**
		 * Sets the defaultlocale for the #ICalProperty.
		 * @param v The defaultlocale
		 */
		set_defaultlocale(v: string): void;
		/**
		 * Sets the defaulttzid for the #ICalProperty.
		 * @param v The defaulttzid
		 */
		set_defaulttzid(v: string): void;
		/**
		 * Sets the defaultvcars for the #ICalProperty.
		 * @param v The defaultvcars
		 */
		set_defaultvcars(v: string): void;
		/**
		 * Sets the deny for the #ICalProperty.
		 * @param v The deny
		 */
		set_deny(v: string): void;
		/**
		 * Sets the description for the #ICalProperty.
		 * @param v The description
		 */
		set_description(v: string): void;
		/**
		 * Sets the dtend time for the #ICalProperty.
		 * @param v The dtend time
		 */
		set_dtend(v: Time): void;
		/**
		 * Sets the dtstamp time for the #ICalProperty.
		 * @param v The dtstamp time
		 */
		set_dtstamp(v: Time): void;
		/**
		 * Sets the dtstart time for the #ICalProperty.
		 * @param v The dtstart time
		 */
		set_dtstart(v: Time): void;
		/**
		 * Sets the due time for the #ICalProperty.
		 * @param v The due time
		 */
		set_due(v: Time): void;
		/**
		 * Sets the duration for the #ICalProperty.
		 * @param v The duration
		 */
		set_duration(v: Duration): void;
		/**
		 * Sets the estimatedduration for the #ICalProperty.
		 * @param v The estimatedduration
		 */
		set_estimatedduration(v: Duration): void;
		/**
		 * Sets the exdate time for the #ICalProperty.
		 * @param v The exdate time
		 */
		set_exdate(v: Time): void;
		/**
		 * Sets the expand for the #ICalProperty.
		 * @param v The expand
		 */
		set_expand(v: number): void;
		/**
		 * Sets the exrule time for the #ICalProperty.
		 * @param v The exrule recurrence type
		 */
		set_exrule(v: Recurrence): void;
		/**
		 * Sets the freebusy time for the #ICalProperty.
		 * @param v The freebusy period type
		 */
		set_freebusy(v: Period): void;
		/**
		 * Sets the geo for the #ICalProperty.
		 * @param v The geo type
		 */
		set_geo(v: Geo): void;
		/**
		 * Sets the grant for the #ICalProperty.
		 * @param v The grant
		 */
		set_grant(v: string): void;
		/**
		 * Sets the itipversion for the #ICalProperty.
		 * @param v The itipversion
		 */
		set_itipversion(v: string): void;
		/**
		 * Sets the lastmodified time for the #ICalProperty.
		 * @param v The lastmodified time
		 */
		set_lastmodified(v: Time): void;
		/**
		 * Sets the location for the #ICalProperty.
		 * @param v The location
		 */
		set_location(v: string): void;
		/**
		 * Sets the maxcomponentsize for the #ICalProperty.
		 * @param v The maxcomponentsize
		 */
		set_maxcomponentsize(v: number): void;
		/**
		 * Sets the maxdate time for the #ICalProperty.
		 * @param v The maxdate time
		 */
		set_maxdate(v: Time): void;
		/**
		 * Sets the maxresults for the #ICalProperty.
		 * @param v The maxresults
		 */
		set_maxresults(v: number): void;
		/**
		 * Sets the maxresultssize for the #ICalProperty.
		 * @param v The maxresultssize
		 */
		set_maxresultssize(v: number): void;
		/**
		 * Sets the method for the #ICalProperty.
		 * @param v The method
		 */
		set_method(v: PropertyMethod): void;
		/**
		 * Sets the mindate time for the #ICalProperty.
		 * @param v The mindate time
		 */
		set_mindate(v: Time): void;
		/**
		 * Sets the multipart for the #ICalProperty.
		 * @param v The multipart
		 */
		set_multipart(v: string): void;
		/**
		 * Sets the name for the #ICalProperty.
		 * @param v The name
		 */
		set_name(v: string): void;
		/**
		 * Sets the organizer for the #ICalProperty.
		 * @param v The organizer
		 */
		set_organizer(v: string): void;
		/**
		 * Sets the owner for the #ICalProperty.
		 * @param v The owner
		 */
		set_owner(v: string): void;
		/**
		 * Sets a #ICalParameter into the #ICalProperty. It behaves like set the copy of the #ICalParameter. Upon
		 * completion the native part of #ICalParameter will be set to NULL.
		 * @param parameter The parameter to be set into #prop
		 */
		set_parameter(parameter: Parameter): void;
		/**
		 * Sets the #ICalProperty with the parameter defined by the name and value.
		 * @param name The name of the parameter
		 * @param value The value of the parameter
		 */
		set_parameter_from_string(name: string, value: string): void;
		/**
		 * Sets the parent #ICalComponent of the specified #ICalProperty.
		 * @param component An #ICalComponent
		 */
		set_parent(component: Component | null): void;
		/**
		 * Sets the percentcomplete for the #ICalProperty.
		 * @param v The percentcomplete
		 */
		set_percentcomplete(v: number): void;
		/**
		 * Sets the permission for the #ICalProperty.
		 * @param v The permission
		 */
		set_permission(v: string): void;
		/**
		 * Sets the pollcompletion for the #ICalProperty.
		 * @param v The pollcompletion
		 */
		set_pollcompletion(v: PropertyPollcompletion): void;
		/**
		 * Sets the pollitemid for the #ICalProperty.
		 * @param v The pollitemid
		 */
		set_pollitemid(v: number): void;
		/**
		 * Sets the pollmode for the #ICalProperty.
		 * @param v The pollmode
		 */
		set_pollmode(v: PropertyPollmode): void;
		/**
		 * Sets the pollproperties for the #ICalProperty.
		 * @param v The pollproperties
		 */
		set_pollproperties(v: string): void;
		/**
		 * Sets the pollwinner for the #ICalProperty.
		 * @param v The pollwinner
		 */
		set_pollwinner(v: number): void;
		/**
		 * Sets the priority for the #ICalProperty.
		 * @param v The priority
		 */
		set_priority(v: number): void;
		/**
		 * Sets the prodid for the #ICalProperty.
		 * @param v The prodid
		 */
		set_prodid(v: string): void;
		/**
		 * Sets the query for the #ICalProperty.
		 * @param v The query
		 */
		set_query(v: string): void;
		/**
		 * Sets the queryid for the #ICalProperty.
		 * @param v The queryid
		 */
		set_queryid(v: string): void;
		/**
		 * Sets the querylevel for the #ICalProperty.
		 * @param v The querylevel
		 */
		set_querylevel(v: PropertyQuerylevel): void;
		/**
		 * Sets the queryname for the #ICalProperty.
		 * @param v The queryname
		 */
		set_queryname(v: string): void;
		/**
		 * Sets the rdate for the #ICalProperty.
		 * @param v The rdate
		 */
		set_rdate(v: Datetimeperiod): void;
		/**
		 * Sets the recuraccepted for the #ICalProperty.
		 * @param v The recuraccepted
		 */
		set_recuraccepted(v: string): void;
		/**
		 * Sets the recurexpand for the #ICalProperty.
		 * @param v The recurexpand
		 */
		set_recurexpand(v: string): void;
		/**
		 * Sets the recurlimit for the #ICalProperty.
		 * @param v The recurlimit
		 */
		set_recurlimit(v: string): void;
		/**
		 * Sets the recurrenceid time for the #ICalProperty.
		 * @param v The recurrenceid time
		 */
		set_recurrenceid(v: Time): void;
		/**
		 * Sets the relatedto for the #ICalProperty.
		 * @param v The relatedto
		 */
		set_relatedto(v: string): void;
		/**
		 * Sets the relcalid for the #ICalProperty.
		 * @param v The relcalid
		 */
		set_relcalid(v: string): void;
		/**
		 * Sets the repeat for the #ICalProperty.
		 * @param v The repeat
		 */
		set_repeat(v: number): void;
		/**
		 * Sets the replyurl for the #ICalProperty.
		 * @param v The replyurl
		 */
		set_replyurl(v: string): void;
		/**
		 * Sets the requeststatus for the #ICalProperty.
		 * @param v The requeststatus
		 */
		set_requeststatus(v: Reqstat): void;
		/**
		 * Sets the resources for the #ICalProperty.
		 * @param v The resources
		 */
		set_resources(v: string): void;
		/**
		 * Sets the response for the #ICalProperty.
		 * @param v The response
		 */
		set_response(v: number): void;
		/**
		 * Sets the restriction for the #ICalProperty.
		 * @param v The restriction
		 */
		set_restriction(v: string): void;
		/**
		 * Sets the rrule for the #ICalProperty.
		 * @param v The rrule recurrence type
		 */
		set_rrule(v: Recurrence): void;
		/**
		 * Sets the scope for the #ICalProperty.
		 * @param v The scope
		 */
		set_scope(v: string): void;
		/**
		 * Sets the sequence for the #ICalProperty.
		 * @param v The sequence
		 */
		set_sequence(v: number): void;
		/**
		 * Sets the status for the #ICalProperty.
		 * @param v The status
		 */
		set_status(v: PropertyStatus): void;
		/**
		 * Sets the storesexpanded for the #ICalProperty.
		 * @param v The storesexpanded
		 */
		set_storesexpanded(v: string): void;
		/**
		 * Sets the summary for the #ICalProperty.
		 * @param v The summary
		 */
		set_summary(v: string): void;
		/**
		 * Sets the target for the #ICalProperty.
		 * @param v The target
		 */
		set_target(v: string): void;
		/**
		 * Sets the taskmode for the #ICalProperty.
		 * @param v The taskmode
		 */
		set_taskmode(v: PropertyTaskmode): void;
		/**
		 * Sets the transp for the #ICalProperty.
		 * @param v The transp
		 */
		set_transp(v: PropertyTransp): void;
		/**
		 * Sets the trigger time for the #ICalProperty.
		 * @param v The trigger period type
		 */
		set_trigger(v: Trigger): void;
		/**
		 * Sets the tzid for the #ICalProperty.
		 * @param v The tzid
		 */
		set_tzid(v: string): void;
		/**
		 * Sets the tzidaliasof for the #ICalProperty.
		 * @param v The tzidaliasof
		 */
		set_tzidaliasof(v: string): void;
		/**
		 * Sets the tzname for the #ICalProperty.
		 * @param v The tzname
		 */
		set_tzname(v: string): void;
		/**
		 * Sets the tzoffsetfrom for the #ICalProperty.
		 * @param v The tzoffsetfrom
		 */
		set_tzoffsetfrom(v: number): void;
		/**
		 * Sets the tzoffsetto for the #ICalProperty.
		 * @param v The tzoffsetto
		 */
		set_tzoffsetto(v: number): void;
		/**
		 * Sets the tzuntil time for the #ICalProperty.
		 * @param v The acknowledgement time
		 */
		set_tzuntil(v: Time): void;
		/**
		 * Sets the tzurl for the #ICalProperty.
		 * @param v The tzurl
		 */
		set_tzurl(v: string): void;
		/**
		 * Sets the uid for the #ICalProperty.
		 * @param v The uid
		 */
		set_uid(v: string): void;
		/**
		 * Sets the url for the #ICalProperty.
		 * @param v The url
		 */
		set_url(v: string): void;
		/**
		 * Sets the #ICalProperty with the #ICalValue.
		 * @param value The #ICalValue will be set as the property of #prop
		 */
		set_value(value: Value): void;
		/**
		 * Sets the #ICalProperty with the #ICalValue constructed from string.
		 * @param value The value used to construct the #ICalValue
		 * @param kind The kind used to construct the #ICalValue
		 */
		set_value_from_string(value: string, kind: string): void;
		/**
		 * Sets the version for the #ICalProperty.
		 * @param v The version
		 */
		set_version(v: string): void;
		/**
		 * Sets the voter for the #ICalProperty.
		 * @param v The voter
		 */
		set_voter(v: string): void;
		/**
		 * Sets the x for the #ICalProperty.
		 * @param v The x
		 */
		set_x(v: string): void;
		/**
		 * Sets the name of x property for the #ICalProperty.
		 * @param name The name string
		 */
		set_x_name(name: string): void;
		/**
		 * Sets the xlicclass for the #ICalProperty.
		 * @param v The xlicclass
		 */
		set_xlicclass(v: PropertyXlicclass): void;
		/**
		 * Sets the xlicclustercount for the #ICalProperty.
		 * @param v The xlicclustercount
		 */
		set_xlicclustercount(v: string): void;
		/**
		 * Sets the xlicerror for the #ICalProperty.
		 * @param v The xlicerror
		 */
		set_xlicerror(v: string): void;
		/**
		 * Sets the xlicmimecharset for the #ICalProperty.
		 * @param v The xlicmimecharset
		 */
		set_xlicmimecharset(v: string): void;
		/**
		 * Sets the xlicmimecid for the #ICalProperty.
		 * @param v The xlicmimecid
		 */
		set_xlicmimecid(v: string): void;
		/**
		 * Sets the xlicmimecontenttype for the #ICalProperty.
		 * @param v The xlicmimecontenttype
		 */
		set_xlicmimecontenttype(v: string): void;
		/**
		 * Sets the xlicmimeencoding for the #ICalProperty.
		 * @param v The xlicmimeencoding
		 */
		set_xlicmimeencoding(v: string): void;
		/**
		 * Sets the xlicmimefilename for the #ICalProperty.
		 * @param v The xlicmimefilename
		 */
		set_xlicmimefilename(v: string): void;
		/**
		 * Sets the xlicmimeoptinfo for the #ICalProperty.
		 * @param v The xlicmimeoptinfo
		 */
		set_xlicmimeoptinfo(v: string): void;
		/**
		 * Adds the #parameter into the #prop and free the #parameter.
		 * @param parameter The parameter to be added into #prop
		 */
		take_parameter(parameter: Parameter): void;
		/**
		 * Sets the #prop with the #value and unrefs the #value.
		 * @param value The #ICalValue will be set as the property of #prop
		 */
		take_value(value: Value): void;
	}

	type PropertyInitOptionsMixin = ObjectInitOptions
	export interface PropertyInitOptions extends PropertyInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Property} instead.
	 */
	type PropertyMixin = IProperty & Object;

	/**
	 * This is the ICalProperty instance.
	 */
	interface Property extends PropertyMixin {}

	class Property {
		public constructor(options?: Partial<PropertyInitOptions>);
		/**
		 * Creates a #ICalProperty of the target type.
		 * @param kind The kind of #ICalProperty to be created
		 * @returns The newly created #ICalProperty with the type #kind.
		 */
		public static new(kind: PropertyKind): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The acceptresponse
		 * @returns The newly created #ICalProperty
		 */
		public static new_acceptresponse(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of acknowledgement
		 * @returns The newly created #ICalProperty
		 */
		public static new_acknowledged(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The action
		 * @returns The newly created #ICalProperty
		 */
		public static new_action(v: PropertyAction): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The allowconflict
		 * @returns The newly created #ICalProperty
		 */
		public static new_allowconflict(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The #ICalAttach
		 * @returns The newly created #ICalProperty
		 */
		public static new_attach(v: Attach): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The attendee
		 * @returns The newly created #ICalProperty
		 */
		public static new_attendee(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The busytype
		 * @returns The newly created #ICalProperty
		 */
		public static new_busytype(v: PropertyBusytype): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The calid
		 * @returns The newly created #ICalProperty
		 */
		public static new_calid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The calmaster
		 * @returns The newly created #ICalProperty
		 */
		public static new_calmaster(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The calscale
		 * @returns The newly created #ICalProperty
		 */
		public static new_calscale(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The capversion
		 * @returns The newly created #ICalProperty
		 */
		public static new_capversion(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The carid
		 * @returns The newly created #ICalProperty
		 */
		public static new_carid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The carlevel
		 * @returns The newly created #ICalProperty
		 */
		public static new_carlevel(v: PropertyCarlevel): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The categories
		 * @returns The newly created #ICalProperty
		 */
		public static new_categories(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The class
		 * @returns The newly created #ICalProperty
		 */
		public static new_class(v: Property_Class): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The cmd
		 * @returns The newly created #ICalProperty
		 */
		public static new_cmd(v: PropertyCmd): Property;
		/**
		 * Creates a new color #ICalProperty.
		 * @param v The color
		 * @returns The newly created #ICalProperty
		 */
		public static new_color(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The comment
		 * @returns The newly created #ICalProperty
		 */
		public static new_comment(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of completed
		 * @returns The newly created #ICalProperty
		 */
		public static new_completed(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The components
		 * @returns The newly created #ICalProperty
		 */
		public static new_components(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The contact
		 * @returns The newly created #ICalProperty
		 */
		public static new_contact(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of created
		 * @returns The newly created #ICalProperty
		 */
		public static new_created(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The csid
		 * @returns The newly created #ICalProperty
		 */
		public static new_csid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of datemax
		 * @returns The newly created #ICalProperty
		 */
		public static new_datemax(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of datemin
		 * @returns The newly created #ICalProperty
		 */
		public static new_datemin(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The decreed
		 * @returns The newly created #ICalProperty
		 */
		public static new_decreed(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The defaultcharset
		 * @returns The newly created #ICalProperty
		 */
		public static new_defaultcharset(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The defaultlocale
		 * @returns The newly created #ICalProperty
		 */
		public static new_defaultlocale(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The defaulttzid
		 * @returns The newly created #ICalProperty
		 */
		public static new_defaulttzid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The defaultvcars
		 * @returns The newly created #ICalProperty
		 */
		public static new_defaultvcars(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The deny
		 * @returns The newly created #ICalProperty
		 */
		public static new_deny(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The description
		 * @returns The newly created #ICalProperty
		 */
		public static new_description(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of dtend
		 * @returns The newly created #ICalProperty
		 */
		public static new_dtend(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of dtstamp
		 * @returns The newly created #ICalProperty
		 */
		public static new_dtstamp(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of dtstart
		 * @returns The newly created #ICalProperty
		 */
		public static new_dtstart(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of due
		 * @returns The newly created #ICalProperty
		 */
		public static new_due(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The duration
		 * @returns The newly created #ICalProperty
		 */
		public static new_duration(v: Duration): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The estimatedduration
		 * @returns The newly created #ICalProperty
		 */
		public static new_estimatedduration(v: Duration): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of exdate
		 * @returns The newly created #ICalProperty
		 */
		public static new_exdate(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The expand
		 * @returns The newly created #ICalProperty
		 */
		public static new_expand(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The exrule recurrence type
		 * @returns The newly created #ICalProperty
		 */
		public static new_exrule(v: Recurrence): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The freebusy period type
		 * @returns The newly created #ICalProperty
		 */
		public static new_freebusy(v: Period): Property;
		/**
		 * Creates a #ICalProperty from a string.
		 * @param str The string used to construct a #ICalProperty
		 * @returns The newly created #ICalProperty from #str.
		 */
		public static new_from_string(str: string): Property;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The geo type
		 * @returns The newly created #ICalProperty
		 */
		public static new_geo(v: Geo): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The grant
		 * @returns The newly created #ICalProperty
		 */
		public static new_grant(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The itipversion
		 * @returns The newly created #ICalProperty
		 */
		public static new_itipversion(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of lastmodified
		 * @returns The newly created #ICalProperty
		 */
		public static new_lastmodified(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The location
		 * @returns The newly created #ICalProperty
		 */
		public static new_location(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The maxcomponentsize
		 * @returns The newly created #ICalProperty
		 */
		public static new_maxcomponentsize(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of maxdate
		 * @returns The newly created #ICalProperty
		 */
		public static new_maxdate(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The maxresults
		 * @returns The newly created #ICalProperty
		 */
		public static new_maxresults(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The maxresultssize
		 * @returns The newly created #ICalProperty
		 */
		public static new_maxresultssize(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The method
		 * @returns The newly created #ICalProperty
		 */
		public static new_method(v: PropertyMethod): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of mindate
		 * @returns The newly created #ICalProperty
		 */
		public static new_mindate(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The multipart
		 * @returns The newly created #ICalProperty
		 */
		public static new_multipart(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The name
		 * @returns The newly created #ICalProperty
		 */
		public static new_name(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The organizer
		 * @returns The newly created #ICalProperty
		 */
		public static new_organizer(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The owner
		 * @returns The newly created #ICalProperty
		 */
		public static new_owner(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The percentcomplete
		 * @returns The newly created #ICalProperty
		 */
		public static new_percentcomplete(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The permission
		 * @returns The newly created #ICalProperty
		 */
		public static new_permission(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The pollcompletion
		 * @returns The newly created #ICalProperty
		 */
		public static new_pollcompletion(v: PropertyPollcompletion): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The pollitemid
		 * @returns The newly created #ICalProperty
		 */
		public static new_pollitemid(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The pollmode
		 * @returns The newly created #ICalProperty
		 */
		public static new_pollmode(v: PropertyPollmode): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The pollproperties
		 * @returns The newly created #ICalProperty
		 */
		public static new_pollproperties(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The pollwinner
		 * @returns The newly created #ICalProperty
		 */
		public static new_pollwinner(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The priority
		 * @returns The newly created #ICalProperty
		 */
		public static new_priority(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The prodid
		 * @returns The newly created #ICalProperty
		 */
		public static new_prodid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The query
		 * @returns The newly created #ICalProperty
		 */
		public static new_query(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The queryid
		 * @returns The newly created #ICalProperty
		 */
		public static new_queryid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The querylevel
		 * @returns The newly created #ICalProperty
		 */
		public static new_querylevel(v: PropertyQuerylevel): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The queryname
		 * @returns The newly created #ICalProperty
		 */
		public static new_queryname(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The rdate
		 * @returns The newly created #ICalProperty
		 */
		public static new_rdate(v: Datetimeperiod): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The recuraccepted
		 * @returns The newly created #ICalProperty
		 */
		public static new_recuraccepted(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The recurexpand
		 * @returns The newly created #ICalProperty
		 */
		public static new_recurexpand(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The recurlimit
		 * @returns The newly created #ICalProperty
		 */
		public static new_recurlimit(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of recurrenceid
		 * @returns The newly created #ICalProperty
		 */
		public static new_recurrenceid(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The relatedto
		 * @returns The newly created #ICalProperty
		 */
		public static new_relatedto(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The relcalid
		 * @returns The newly created #ICalProperty
		 */
		public static new_relcalid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The repeat
		 * @returns The newly created #ICalProperty
		 */
		public static new_repeat(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The replyurl
		 * @returns The newly created #ICalProperty
		 */
		public static new_replyurl(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The requeststatus
		 * @returns The newly created #ICalProperty
		 */
		public static new_requeststatus(v: Reqstat): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The resources
		 * @returns The newly created #ICalProperty
		 */
		public static new_resources(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The response
		 * @returns The newly created #ICalProperty
		 */
		public static new_response(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The restriction
		 * @returns The newly created #ICalProperty
		 */
		public static new_restriction(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The rrule recurrence type
		 * @returns The newly created #ICalProperty
		 */
		public static new_rrule(v: Recurrence): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The scope
		 * @returns The newly created #ICalProperty
		 */
		public static new_scope(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The sequence
		 * @returns The newly created #ICalProperty
		 */
		public static new_sequence(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The status
		 * @returns The newly created #ICalProperty
		 */
		public static new_status(v: PropertyStatus): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The storesexpanded
		 * @returns The newly created #ICalProperty
		 */
		public static new_storesexpanded(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The summary
		 * @returns The newly created #ICalProperty
		 */
		public static new_summary(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The target
		 * @returns The newly created #ICalProperty
		 */
		public static new_target(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The taskmode
		 * @returns The newly created #ICalProperty
		 */
		public static new_taskmode(v: PropertyTaskmode): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The transp
		 * @returns The newly created #ICalProperty
		 */
		public static new_transp(v: PropertyTransp): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The trigger period type
		 * @returns The newly created #ICalProperty
		 */
		public static new_trigger(v: Trigger): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The tzid
		 * @returns The newly created #ICalProperty
		 */
		public static new_tzid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The tzidaliasof
		 * @returns The newly created #ICalProperty
		 */
		public static new_tzidaliasof(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The tzname
		 * @returns The newly created #ICalProperty
		 */
		public static new_tzname(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The tzoffsetfrom
		 * @returns The newly created #ICalProperty
		 */
		public static new_tzoffsetfrom(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The tzoffsetto
		 * @returns The newly created #ICalProperty
		 */
		public static new_tzoffsetto(v: number): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The time of acknowledgement
		 * @returns The newly created #ICalProperty
		 */
		public static new_tzuntil(v: Time): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The tzurl
		 * @returns The newly created #ICalProperty
		 */
		public static new_tzurl(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The uid
		 * @returns The newly created #ICalProperty
		 */
		public static new_uid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The url
		 * @returns The newly created #ICalProperty
		 */
		public static new_url(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The version
		 * @returns The newly created #ICalProperty
		 */
		public static new_version(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The voter
		 * @returns The newly created #ICalProperty
		 */
		public static new_voter(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The x
		 * @returns The newly created #ICalProperty
		 */
		public static new_x(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicclass
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicclass(v: PropertyXlicclass): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicclustercount
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicclustercount(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicerror
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicerror(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicmimecharset
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicmimecharset(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicmimecid
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicmimecid(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicmimecontenttype
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicmimecontenttype(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicmimeencoding
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicmimeencoding(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicmimefilename
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicmimefilename(v: string): Property;
		/**
		 * Creates a new #ICalProperty.
		 * @param v The xlicmimeoptinfo
		 * @returns The newly created #ICalProperty
		 */
		public static new_xlicmimeoptinfo(v: string): Property;
		/**
		 * Converts the enum to string.
		 * @param e The enum to be converted
		 * @returns The string representation of #e.
		 */
		public static enum_to_string(e: number): string;
		/**
		 * Converts a integer and string into an enum.
		 * @param kind The kind
		 * @param str A string
		 * @returns The enum.
		 */
		public static kind_and_string_to_enum(kind: number, str: string): number;
		/**
		 * Converts the string to #ICalPropertyKind.
		 * @param string A string representing #ICalPropertyKind
		 * @returns The #ICalPropertyKind.
		 */
		public static kind_from_string(string: string): PropertyKind;
		/**
		 * Checks whether the enum belongs to the #ICalPropertyKind.
		 * @param kind A #ICalPropertyKind
		 * @param e The enum to be checked
		 * @returns 1 if yes, 0 if not.
		 */
		public static kind_has_property(kind: PropertyKind, e: number): number;
		/**
		 * Checks whether #ICalPropertyKind is valid.
		 * @param kind The #ICalPropertyKind
		 * @returns 1 if valid, 0 if not.
		 */
		public static kind_is_valid(kind: PropertyKind): boolean;
		/**
		 * Converts the #ICalPropertyKind to a string.
		 * @param kind A #ICalPropertyKind
		 * @returns The string representation of #kind.
		 */
		public static kind_to_string(kind: PropertyKind): string;
		/**
		 * Converts the #ICalPropertyKind to #ICalValueKind.
		 * @param kind A #ICalPropertyKind
		 * @returns The #ICalValueKind
		 */
		public static kind_to_value_kind(kind: PropertyKind): ValueKind;
		/**
		 * Converts the string to #ICalPropertyKind.
		 * @param str A string
		 * @returns The #ICalPropertyMethod.
		 */
		public static method_from_string(str: string): PropertyMethod;
		/**
		 * Converts the #ICalPropertyMethod to string.
		 * @param method The #ICalPropertyMethod
		 * @returns The string representation of #ICalPropertyMethod.
		 */
		public static method_to_string(method: PropertyMethod): string;
		/**
		 * Decides if this recurrence is acceptable. This function decides if a specific recurrence value is excluded
		 * by EXRULE or EXDATE properties.
		 * @param comp A #ICalComponent
		 * @param dtstart The base dtstart value for this component
		 * @param recurtime The time to test against
		 * @returns 1 if yes, 0 if not.
		 */
		public static recurrence_is_excluded(comp: Component, dtstart: Time, recurtime: Time): boolean;
		/**
		 * Converts the string to #ICalPropertyKind.
		 * @param str A string
		 * @returns The #ICalPropertyStatus.
		 */
		public static status_from_string(str: string): PropertyStatus;
		/**
		 * Converts the #ICalPropertyStatus to string.
		 * @param method The #ICalPropertyStatus
		 * @returns The string representation of #ICalPropertyStatus.
		 */
		public static status_to_string(method: PropertyStatus): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RecurIterator} instead.
	 */
	interface IRecurIterator {
		/**
		 * Frees an iterator.
		 */
		free(): void;
		/**
		 * Gets the next occurrence from an iterator.
		 * @returns The next occurrence according to this recurrence rule.
		 */
		next(): Time;
		/**
		 * Sets the date-time at which the iterator will start, where 'start' is a value between DTSTART and UNTIL.
		 * Note:
		 * CAN NOT be used with RRULEs that contain COUNT.
		 * @param start The date-time to move the iterator to
		 * @returns 1 if succeeded, 0 if failed, like when the recurrence type is unsupported.
		 */
		set_start(start: Time): number;
	}

	type RecurIteratorInitOptionsMixin = ObjectInitOptions
	export interface RecurIteratorInitOptions extends RecurIteratorInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RecurIterator} instead.
	 */
	type RecurIteratorMixin = IRecurIterator & Object;

	/**
	 * This is the ICalRecurIterator instance.
	 */
	interface RecurIterator extends RecurIteratorMixin {}

	class RecurIterator {
		public constructor(options?: Partial<RecurIteratorInitOptions>);
		/**
		 * Creates an #ICalRecurIterator.
		 * @param rule The rule applied on the #ICalRecurIterator
		 * @param dtstart The start time of the recurrence
		 * @returns The newly created #ICalRecurIterator
		 */
		public static new(rule: Recurrence, dtstart: Time): RecurIterator;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object): RecurIterator;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Recurrence} instead.
	 */
	interface IRecurrence {
		/**
		 * Resets an #ICalRecurrence.
		 */
		clear(): void;
		/**
		 * Gets the by_day value at index #index. The index should be less than %I_CAL_BY_DAY_SIZE.
		 * @param index The index in by_day of #ICalRecurrence, less than %I_CAL_BY_DAY_SIZE
		 * @returns The by_day of #ICalRecurrence at index #index.
		 */
		get_by_day(index: number): number;
		/**
		 * Gets the by_day array from #ICalRecurrence. The array size is I_CAL_BY_DAY_SIZE.
		 * @returns The by_day of #ICalRecurrence.
		 */
		get_by_day_array(): number[];
		/**
		 * Gets the by_hour value at index #index. The index should be less than %I_CAL_BY_HOUR_SIZE.
		 * @param index The index in by_hour of #ICalRecurrence, less than %I_CAL_BY_HOUR_SIZE
		 * @returns The by_hour of #ICalRecurrence at index #index.
		 */
		get_by_hour(index: number): number;
		/**
		 * Gets the by_hour array from #ICalRecurrence. The array size is I_CAL_BY_HOUR_SIZE.
		 * @returns The by_hour of #ICalRecurrence.
		 */
		get_by_hour_array(): number[];
		/**
		 * Gets the by_minute value at index #index. The index should be less than %I_CAL_BY_MINUTE_SIZE.
		 * @param index The index in by_minute of #ICalRecurrence, less than %I_CAL_BY_MINUTE_SIZE
		 * @returns The by_minute of #ICalRecurrence at index #index.
		 */
		get_by_minute(index: number): number;
		/**
		 * Gets the by_minute array from #ICalRecurrence. The array size is I_CAL_BY_MINUTE_SIZE.
		 * @returns The by_minute of #ICalRecurrence.
		 */
		get_by_minute_array(): number[];
		/**
		 * Gets the by_month value at index #index. The index should be less than %I_CAL_BY_MONTH_SIZE.
		 * @param index The index in by_month of #ICalRecurrence, less than %I_CAL_BY_MONTH_SIZE
		 * @returns The by_month of #ICalRecurrence at index #index.
		 */
		get_by_month(index: number): number;
		/**
		 * Gets the by_month array from #ICalRecurrence. The array size is I_CAL_BY_MONTH_SIZE.
		 * @returns The by_month of #ICalRecurrence.
		 */
		get_by_month_array(): number[];
		/**
		 * Gets the by_month_day value at index #index. The index should be less than %I_CAL_BY_MONTHDAY_SIZE.
		 * @param index The index in by_month_day of #ICalRecurrence, less than %I_CAL_BY_MONTHDAY_SIZE
		 * @returns The by_month_day of #ICalRecurrence at index #index.
		 */
		get_by_month_day(index: number): number;
		/**
		 * Gets the by_month_day array from #ICalRecurrence. The array size is I_CAL_BY_MONTHDAY_SIZE.
		 * @returns The by_month_day of #ICalRecurrence.
		 */
		get_by_month_day_array(): number[];
		/**
		 * Gets the by_second value at index #index. The index should be less than %I_CAL_BY_SECOND_SIZE.
		 * @param index The index in by_second of #ICalRecurrence, less than %I_CAL_BY_SECOND_SIZE
		 * @returns The by_second of #ICalRecurrence at index #index.
		 */
		get_by_second(index: number): number;
		/**
		 * Gets the by_second array from #ICalRecurrence. The array size if I_CAL_BY_SECOND_SIZE.
		 * @returns The by_second of #ICalRecurrence.
		 */
		get_by_second_array(): number[];
		/**
		 * Gets the by_set_pos value at index #index. The index should be less than %I_CAL_BY_SETPOS_SIZE.
		 * @param index The index in by_set_pos of #ICalRecurrence, less than %I_CAL_BY_SETPOS_SIZE
		 * @returns The by_week_no of #ICalRecurrence at index #index.
		 */
		get_by_set_pos(index: number): number;
		/**
		 * Gets the by_set_pos array from #ICalRecurrence. The array size is I_CAL_BY_SETPOS_SIZE.
		 * @returns The by_set_pos of #ICalRecurrence.
		 */
		get_by_set_pos_array(): number[];
		/**
		 * Gets the by_week_no value at index #index. The index should be less than %I_CAL_BY_WEEKNO_SIZE.
		 * @param index The index in by_week_no of #ICalRecurrence, less than %I_CAL_BY_WEEKNO_SIZE
		 * @returns The by_week_no of #ICalRecurrence at index #index.
		 */
		get_by_week_no(index: number): number;
		/**
		 * Gets the by_week_no array from #ICalRecurrence. The array size is I_CAL_BY_WEEKNO_SIZE.
		 * @returns The by_week_no of #ICalRecurrence.
		 */
		get_by_week_no_array(): number[];
		/**
		 * Gets the by_year_day value at index #index. The index should be less than %I_CAL_BY_YEARDAY_SIZE.
		 * @param index The index in by_year_day of #ICalRecurrence, less than %I_CAL_BY_YEARDAY_SIZE
		 * @returns The by_year_day of #ICalRecurrence at index #index.
		 */
		get_by_year_day(index: number): number;
		/**
		 * Gets the by_year_day array from #ICalRecurrence. The array size is I_CAL_BY_YEARDAY_SIZE.
		 * @returns The by_year_day of #ICalRecurrence.
		 */
		get_by_year_day_array(): number[];
		/**
		 * Gets the count from #ICalRecurrence.
		 * @returns The count of #ICalRecurrence.
		 */
		get_count(): number;
		/**
		 * Gets the freq from #ICalRecurrence.
		 * @returns The freq of #ICalRecurrence.
		 */
		get_freq(): RecurrenceFrequency;
		/**
		 * Gets the interval from #ICalRecurrence.
		 * @returns The interval of #ICalRecurrence.
		 */
		get_interval(): number;
		/**
		 * Gets the until from #ICalRecurrence.
		 * @returns The until of #ICalRecurrence.
		 */
		get_until(): Time;
		/**
		 * Gets the week_start from #ICalRecurrence.
		 * @returns The week_start of #ICalRecurrence.
		 */
		get_week_start(): RecurrenceWeekday;
		/**
		 * Sets the by_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_DAY_SIZE.
		 * @param index The index in by_day of #ICalRecurrence
		 * @param value The value to be set into by_day of #ICalRecurrence
		 */
		set_by_day(index: number, value: number): void;
		/**
		 * Sets the by_day array in #recur at once. The array size can be less than I_CAL_BY_DAY_SIZE. Shorter arrays
		 * are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_day_array(values: number[]): void;
		/**
		 * Sets the by_hour array from #ICalRecurrence at the given index. The array size is I_CAL_BY_HOUR_SIZE.
		 * @param index The index in by_hour of #ICalRecurrence
		 * @param value The value to be set into by_hour of #ICalRecurrence
		 */
		set_by_hour(index: number, value: number): void;
		/**
		 * Sets the by_hour array in #recur at once. The array size can be less than I_CAL_BY_HOUR_SIZE. Shorter
		 * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_hour_array(values: number[]): void;
		/**
		 * Sets the by_minute array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MINUTE_SIZE.
		 * @param index The index in by_minute of #ICalRecurrence
		 * @param value The value to be set into by_minute of #ICalRecurrence
		 */
		set_by_minute(index: number, value: number): void;
		/**
		 * Sets the by_minute array in #recur at once. The array size can be less than I_CAL_BY_MINUTE_SIZE. Shorter
		 * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_minute_array(values: number[]): void;
		/**
		 * Sets the by_month array from #ICalRecurrence at the given index. The array size is I_CAL_BY_MONTH_SIZE.
		 * @param index The index in by_month of #ICalRecurrence
		 * @param value The value to be set into by_month of #ICalRecurrence
		 */
		set_by_month(index: number, value: number): void;
		/**
		 * Sets the by_month array in #recur at once. The array size can be less than I_CAL_BY_MONTH_SIZE. Shorter
		 * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_month_array(values: number[]): void;
		/**
		 * Sets the by_month_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_MONTHDAY_SIZE.
		 * @param index The index in by_month_day of #ICalRecurrence
		 * @param value The value to be set into by_month_day of #ICalRecurrence
		 */
		set_by_month_day(index: number, value: number): void;
		/**
		 * Sets the by_month_day array in #recur at once. The array size can be less than I_CAL_BY_MONTHDAY_SIZE.
		 * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_month_day_array(values: number[]): void;
		/**
		 * Sets the by_second array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SECOND_SIZE.
		 * @param index The index in by_second of #ICalRecurrence, less than I_CAL_BY_SECOND_SIZE
		 * @param value The value to be set into by_second of #ICalRecurrence
		 */
		set_by_second(index: number, value: number): void;
		/**
		 * Sets the by_second array in #recur at once. The array size can be less than I_CAL_BY_SECOND_SIZE. Shorter
		 * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_second_array(values: number[]): void;
		/**
		 * Sets the by_set_pos array from #ICalRecurrence at the given index. The array size is I_CAL_BY_SETPOS_SIZE.
		 * @param index The index in by_set_pos of #ICalRecurrence
		 * @param value The value to be set into by_set_pos of #ICalRecurrence
		 */
		set_by_set_pos(index: number, value: number): void;
		/**
		 * Sets the by_set_pos array in #recur at once. The array size can be less than I_CAL_BY_SETPOS_SIZE. Shorter
		 * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_set_pos_array(values: number[]): void;
		/**
		 * Sets the by_week_no array from #ICalRecurrence at the given index. The array size is I_CAL_BY_WEEKNO_SIZE.
		 * @param index The index in by_week_no of #ICalRecurrence
		 * @param value The value to be set into by_week_no of #ICalRecurrence
		 */
		set_by_week_no(index: number, value: number): void;
		/**
		 * Sets the by_week_no array in #recur at once. The array size can be less than I_CAL_BY_WEEKNO_SIZE. Shorter
		 * arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_week_no_array(values: number[]): void;
		/**
		 * Sets the by_year_day array from #ICalRecurrence at the given index. The array size if I_CAL_BY_YEARDAY_SIZE.
		 * @param index The index in by_year_day of #ICalRecurrence
		 * @param value The value to be set into by_year_day of #ICalRecurrence
		 */
		set_by_year_day(index: number, value: number): void;
		/**
		 * Sets the by_year_day array in #recur at once. The array size can be less than I_CAL_BY_YEARDAY_SIZE.
		 * Shorter arrays are terminated with I_CAL_RECURRENCE_ARRAY_MAX value, longer arrays are truncated.
		 * @param values The array of values
		 */
		set_by_year_day_array(values: number[]): void;
		/**
		 * Sets the count from #ICalRecurrence.
		 * @param count The count of #ICalRecurrence
		 */
		set_count(count: number): void;
		/**
		 * Sets the freq from #ICalRecurrence.
		 * @param freq The freq of #ICalRecurrence
		 */
		set_freq(freq: RecurrenceFrequency): void;
		/**
		 * Sets the interval from #ICalRecurrence.
		 * @param interval The interval of #ICalRecurrence
		 */
		set_interval(interval: number): void;
		/**
		 * Sets the until from #ICalRecurrence.
		 * @param until The until of #ICalRecurrence
		 */
		set_until(until: Time): void;
		/**
		 * Sets the week_start from #ICalRecurrence.
		 * @param week_start The week_start of #ICalRecurrence
		 */
		set_week_start(week_start: RecurrenceWeekday): void;
		/**
		 * Converts a #ICalRecurrence to a string.
		 * @returns The string representation of #recur.
		 */
		to_string(): string;
	}

	type RecurrenceInitOptionsMixin = ObjectInitOptions
	export interface RecurrenceInitOptions extends RecurrenceInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Recurrence} instead.
	 */
	type RecurrenceMixin = IRecurrence & Object;

	/**
	 * This is the ICalRecurrence instance.
	 */
	interface Recurrence extends RecurrenceMixin {}

	class Recurrence {
		public constructor(options?: Partial<RecurrenceInitOptions>);
		/**
		 * Creates a new #ICalRecurrence.
		 * @returns The newly created #ICalRecurrence.
		 */
		public static new(): Recurrence;
		/**
		 * Converts a string to a #ICalRecurrence.
		 * @param str The string representation of the #ICalRecurrence
		 * @returns The #ICalRecurrence converted from #str.
		 */
		public static new_from_string(str: string): Recurrence;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): Recurrence;
		/**
		 * Decodes a day to a weekday in a week.
		 * @param day The encoded day which represents the day of the week and Nth day of the week
		 * @returns The decoded weekday with Monday to be 1.
		 */
		public static day_day_of_week(day: number): RecurrenceWeekday;
		/**
		 * Decodes a day to a position of the weekday.
		 * @param day The encoded day which represents the day of the week and Nth day of the week
		 * @returns The decoded day of the week. 0 == any of day of week. 1 == first, 2 = second, -2 == second to last, etc
		 */
		public static day_position(day: number): number;
		/**
		 * Converts a string representation to an enum representation for the frequency.
		 * @param str The string representation of the frequency
		 * @returns The enum representation of the frequency.
		 */
		public static frequency_from_string(str: string): RecurrenceFrequency;
		/**
		 * Converts a enum representation to a string representation for the frequency.
		 * @param kind The frequency enum
		 * @returns The string representation of frequency
		 */
		public static frequency_to_string(kind: RecurrenceFrequency): string;
		/**
		 * Decodes a month and check whether it is a leap month.
		 * @param month The month to be decoded
		 * @returns Whether this month is a leap month.
		 */
		public static month_is_leap(month: number): boolean;
		public static month_month(month: number): number;
		public static new_default(): any | null;
		/**
		 * Checks whether rscale is supported.
		 * @returns Whether rscale is supported
		 */
		public static rscale_is_supported(): boolean;
		/**
		 * Gets an array of calendars supporting rscale (currently always return NULL).
		 * @returns Array of calendars. Currently always NULL.
		 */
		public static rscale_supported_calendars(): Array;
		/**
		 * Converts a string representation to an enum representation for the skip.
		 * @param str The string representation of the skip
		 * @returns The enum representation of the skip.
		 */
		public static skip_from_string(str: string): RecurrenceSkip;
		/**
		 * Converts a enum representation to a string representation for the skip.
		 * @param kind The frequency enum
		 * @returns The string representation of skip
		 */
		public static skip_to_string(kind: RecurrenceSkip): string;
		/**
		 * Converts a string representation to an enum representation for the weekday.
		 * @param str The string representation of the weekday
		 * @returns The enum representation of the weekday.
		 */
		public static weekday_from_string(str: string): RecurrenceWeekday;
		/**
		 * Converts a enum representation to a string representation for the weekday.
		 * @param kind The frequency enum
		 * @returns The string representation of weekday
		 */
		public static weekday_to_string(kind: RecurrenceWeekday): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Reqstat} instead.
	 */
	interface IReqstat {
		/**
		 * Gets the code of #ICalReqstat.
		 * @returns The code of #reqstat.
		 */
		get_code(): RequestStatus;
		/**
		 * Gets the debug of #ICalReqstat.
		 * @returns The debug of #reqstat.
		 */
		get_debug(): string;
		/**
		 * Gets the desc of #ICalReqstat.
		 * @returns The desc of #reqstat.
		 */
		get_desc(): string;
		/**
		 * Sets the code of #ICalReqstat.
		 * @param code The code of #reqstat
		 */
		set_code(code: RequestStatus): void;
		/**
		 * Converts #ICalReqstat to a string representation.
		 * @returns A string.
		 */
		to_string(): string;
	}

	type ReqstatInitOptionsMixin = ObjectInitOptions
	export interface ReqstatInitOptions extends ReqstatInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Reqstat} instead.
	 */
	type ReqstatMixin = IReqstat & Object;

	/**
	 * This is the ICalReqstat instance.
	 */
	interface Reqstat extends ReqstatMixin {}

	class Reqstat {
		public constructor(options?: Partial<ReqstatInitOptions>);
		/**
		 * Creates a #ICalReqstat from string.
		 * @param str A string
		 * @returns The newly created #ICalReqstat.
		 */
		public static new_from_string(str: string): Reqstat;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): Reqstat;
		/**
		 * Creates a new default #ICalReqstat.
		 * @returns The newly created #ICalReqstat
		 */
		public static new_default(): any | null;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Time} instead.
	 */
	interface ITime {
		/**
		 * Adds a time duration on the time.
		 * @param d A #ICalDuration as the difference
		 * @returns The #ICalTime results. The native object is the same. But since it is a bare object, so it won't cause segmentation.
		 */
		add(d: Duration): Time;
		/**
		 * Adds or subtracts a number of days, hours, minutes and seconds from #tt.
		 * @param days Difference of days adjusted
		 * @param hours Difference of hours adjusted
		 * @param minutes Difference of minutes adjusted
		 * @param seconds Difference of seconds adjusted
		 */
		adjust(days: number, hours: number, minutes: number, seconds: number): void;
		/**
		 * Returns a string represention of the time, in RFC2445 format.
		 * @returns The string representation
		 */
		as_ical_string(): string;
		/**
		 * Returns the time as seconds past the UNIX epoch.
		 * @returns The time as seconds past the UNIX epoch
		 */
		as_timet(): number;
		/**
		 * Returns the time as seconds past the UNIX epoch, using timezones.
		 * @param zone The timezone
		 * @returns The time as seconds past the UNIX epoch
		 */
		as_timet_with_zone(zone: Timezone | null): number;
		/**
		 * Creates a new #ICalTime, copy of #timetype.
		 * @returns The newly created #ICalTime, copy of #timetype.
		 */
		clone(): Time;
		/**
		 * Returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
		 * @param b The #ICalTime to be compared
		 * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
		 */
		compare(b: Time): number;
		/**
		 * Like {@link ICal.time_compare}, but only use the date parts.
		 * @param b The #ICalTime to be compared
		 * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
		 */
		compare_date_only(b: Time): number;
		/**
		 * Like {@link ICal.time_compare_tz}, but only use the date parts; accepts timezone.
		 * @param b The #ICalTime to be compared
		 * @param zone The target timezone
		 * @returns -1, 0, or 1 to indicate that a less than b, a==b or a larger than b.
		 */
		compare_date_only_tz(b: Time, zone: Timezone | null): number;
		/**
		 * Convert time from one timezone to another.
		 * @param from_zone From timezone
		 * @param to_zone To timezone
		 */
		convert_timezone(from_zone: Timezone | null, to_zone: Timezone | null): void;
		/**
		 * Converts #tt to #zone and return new #ICalTime object.
		 * @param zone The target timezone
		 * @returns The converted #ICalTime
		 */
		convert_to_zone(zone: Timezone | null): Time;
		/**
		 * Converts #tt to #zone and store the result into #tt.
		 * @param zone The target timezone
		 */
		convert_to_zone_inplace(zone: Timezone | null): void;
		/**
		 * Returns the day of the week of the given time. Sunday is 1.
		 * @returns The day of the week of the given time. Sunday is 1.
		 */
		day_of_week(): number;
		/**
		 * Returns the day of the year of the given time.
		 * @returns The day of the year of the given time
		 */
		day_of_year(): number;
		/**
		 * Gets the year/month/date parts of the #timetype in one call.
		 * @returns Out parameter for the 'year' part of the date
		 * 
		 * Out parameter for the 'month' part of the date
		 * 
		 * Out parameter for the 'day' part of the date
		 */
		get_date(): [ year: number | null, month: number | null, day: number | null ];
		/**
		 * Gets the day of #ICalTime.
		 * @returns The day.
		 */
		get_day(): number;
		/**
		 * Gets the hour of #ICalTime.
		 * @returns The hour.
		 */
		get_hour(): number;
		/**
		 * Gets the minute of #ICalTime.
		 * @returns The minute.
		 */
		get_minute(): number;
		/**
		 * Gets the month of #ICalTime.
		 * @returns The month.
		 */
		get_month(): number;
		/**
		 * Gets the second of #ICalTime.
		 * @returns The second.
		 */
		get_second(): number;
		/**
		 * Gets the hour/minute/second parts of the #timetype in one call.
		 * @returns Out parameter for the 'hour' part of the time
		 * 
		 * Out parameter for the 'minute' part of the time
		 * 
		 * Out parameter for the 'second' part of the time
		 */
		get_time(): [ hour: number | null, minute: number | null, second: number | null ];
		/**
		 * Returns the timezone, the #ICalTimezone object is cached and can be either unreferenced once the last
		 * instance is used or can be kept until {@link ICal.object_free_global_objects} is called (usually at the very
		 * end of the program).
		 * @returns The timezone information
		 */
		get_timezone(): Timezone;
		/**
		 * Returns the tzid, or NULL for a floating time.
		 * @returns The tzid of #ICalTime, or NULL if floating type
		 */
		get_tzid(): string | null;
		/**
		 * Gets the year of #ICalTime.
		 * @returns The year.
		 */
		get_year(): number;
		/**
		 * Returns true if time is of DATE type, false if DATE-TIME.
		 * @returns True if time is of DATE type, false if DATE-TIME.
		 */
		is_date(): boolean;
		/**
		 * Gets the is_daylight of #ICalTime.
		 * @returns The is_daylight.
		 */
		is_daylight(): boolean;
		/**
		 * Returns true if the time is null.
		 * @returns Whether #tt is null_time. 1 if yes, 0 if not.
		 */
		is_null_time(): boolean;
		/**
		 * Returns true if time is relative to UTC zone.
		 * @returns True if time is relative to UTC zone.
		 */
		is_utc(): boolean;
		/**
		 * Returns true if the time is null.
		 * @returns Whether #tt is null_time. 1 if yes, 0 if not.
		 */
		is_valid_time(): boolean;
		/**
		 * Normalizes the icaltime, so that all fields are within the normal range.
		 * @returns The #ICalTime normalized
		 */
		normalize(): Time;
		/**
		 * Normalizes the #tt, so that all fields are within the normal range.
		 */
		normalize_inplace(): void;
		/**
		 * Sets the year/month/date parts of the #timetype in one call. This doesn't verify validity of the given
		 * date.
		 * @param year The 'year' part of the date
		 * @param month The 'month' part of the date
		 * @param day The 'day' part of the date
		 */
		set_date(year: number, month: number, day: number): void;
		/**
		 * Sets the day of #ICalTime.
		 * @param day The day
		 */
		set_day(day: number): void;
		/**
		 * Sets the hour of #ICalTime.
		 * @param hour The hour
		 */
		set_hour(hour: number): void;
		/**
		 * Sets the is_date of #ICalTime.
		 * @param is_date The is_date
		 */
		set_is_date(is_date: boolean): void;
		/**
		 * Sets the is_daylight of #ICalTime.
		 * @param is_daylight The is_daylight
		 */
		set_is_daylight(is_daylight: boolean): void;
		/**
		 * Sets the minute of #ICalTime.
		 * @param minute The minute
		 */
		set_minute(minute: number): void;
		/**
		 * Sets the month of #ICalTime.
		 * @param month The month
		 */
		set_month(month: number): void;
		/**
		 * Sets the second of #ICalTime.
		 * @param second The second
		 */
		set_second(second: number): void;
		/**
		 * Sets the hour/minute/second parts of the #timetype in one call. This doesn't verify validity of the given
		 * time.
		 * @param hour The 'hour' part of the time
		 * @param minute The 'minute' part of the time
		 * @param second The 'second' part of the time
		 */
		set_time(hour: number, minute: number, second: number): void;
		/**
		 * Sets the timezone of the #tt.
		 * @param zone The timezone
		 */
		set_timezone(zone: Timezone | null): void;
		/**
		 * Sets the year of #ICalTime.
		 * @param year The year
		 */
		set_year(year: number): void;
		/**
		 * Returns the day of the year for the first day of the week that the given time is within.
		 * @param fdow The first day of the week
		 * @returns The day of the year for the Sunday of the week that the given time is within.
		 */
		start_doy_week(fdow: number): number;
		/**
		 * Gets the duration between two time.
		 * @param t2 The subtracting #ICalTime
		 * @returns The #ICalDuration between two #ICalTime.
		 */
		subtract(t2: Time): Duration;
		/**
		 * Returns the week number for the week the given time is within.
		 * @returns The week number for the week the given time is within.
		 */
		week_number(): number;
	}

	type TimeInitOptionsMixin = ObjectInitOptions
	export interface TimeInitOptions extends TimeInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Time} instead.
	 */
	type TimeMixin = ITime & Object;

	/**
	 * This is the ICalTime instance.
	 */
	interface Time extends TimeMixin {}

	class Time {
		public constructor(options?: Partial<TimeInitOptions>);
		/**
		 * Creates a new #ICalTime.
		 * @returns The newly created #ICalTime. It is a null time
		 */
		public static new(): Time;
		/**
		 * Creates a #ICalTime according to the timezone and current time.
		 * @param zone The timezone used to create a #ICalTime according to the current time
		 * @returns The newly created #ICalTime
		 */
		public static new_current_with_zone(zone: Timezone | null): Time;
		/**
		 * Creates a new time, given a day of year and a year.
		 * @param day The day of a year
		 * @param year The year
		 * @returns The newly created #ICalTime
		 */
		public static new_from_day_of_year(day: number, year: number): Time;
		/**
		 * Creates a time from an ISO format string.
		 * @param str The ISO format string
		 * @returns The newly created #ICalTime
		 */
		public static new_from_string(str: string): Time;
		/**
		 * Converts seconds past UNIX epoch to a timetype, using timezones.
		 * @param v The seconds past since epoch time
		 * @param is_date Whether it is a date type, 1 if yes, 0 if not
		 * @param zone The timezone, or %NULL
		 * @returns The newly created #ICalTime
		 */
		public static new_from_timet_with_zone(v: number, is_date: number, zone: Timezone | null): Time;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): Time;
		/**
		 * Creates a null date, which indicates no time has been set.
		 * @returns The newly created #ICalTime
		 */
		public static new_null_date(): Time;
		/**
		 * Creates a default time which is an epoch time.
		 * @returns The newly created #ICalTime
		 */
		public static new_null_time(): Time;
		/**
		 * Creates a #ICalTime representing today.
		 * @returns The newly created #ICalTime
		 */
		public static new_today(): Time;
		/**
		 * Gets the number of days in the target month in the target year.
		 * @param month The target month
		 * @param year The target year
		 * @returns The number of days in the target month in the target year.
		 */
		public static days_in_month(month: number, year: number): number;
		/**
		 * Returns the number of days in this year.
		 * @param year The target year
		 * @returns Days in this year.
		 */
		public static days_in_year(year: number): number;
		/**
		 * Checks whether a year is a leap year.
		 * @param year The target year
		 * @returns Whether the #year is a leap year
		 */
		public static days_is_leap_year(year: number): boolean;
		/**
		 * Applies a list of timezone changes on the array of components until the end year.
		 * @param comp The #ICalComponent
		 * @param end_year The end year
		 * @param changes The changes to be applies
		 */
		public static timezone_expand_vtimezone(comp: Component, end_year: number, changes: Array): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TimeSpan} instead.
	 */
	interface ITimeSpan {
		/**
		 * Creates a new #ICalTimeSpan, clone of #src. Free it with {@link GObject.unref}, when no longer needed.
		 * @returns The newly created #ICalTimeSpan, clone of #src.
		 */
		clone(): TimeSpan;
		/**
		 * Checks whether one #ICalTimeSpan is contained in another #ICalTimeSpan.
		 * @param container The target container of #ICalTimeSpan
		 * @returns Whether one #ICalTimeSpan is contained in another #ICalTimeSpan.
		 */
		contains(container: TimeSpan): number;
		/**
		 * Gets the end of #ICalTimeSpan.
		 * @returns The end.
		 */
		get_end(): number;
		/**
		 * Gets the is_busy of #ICalTimeSpan.
		 * @returns The is_busy.
		 */
		get_is_busy(): boolean;
		/**
		 * Gets the start of #ICalTimeSpan.
		 * @returns The start.
		 */
		get_start(): number;
		/**
		 * Checks whether two spans overlap.
		 * @param s2 The second #ICalTimeSpan
		 * @returns Whether these two span are overlapped.
		 */
		overlaps(s2: TimeSpan): number;
		/**
		 * Sets the end of #ICalTimeSpan.
		 * @param end The end
		 */
		set_end(end: number): void;
		/**
		 * Sets the is_busy of #ICalTimeSpan.
		 * @param is_busy The is_busy
		 */
		set_is_busy(is_busy: boolean): void;
		/**
		 * Sets the start of #ICalTimeSpan.
		 * @param start The start
		 */
		set_start(start: number): void;
	}

	type TimeSpanInitOptionsMixin = ObjectInitOptions
	export interface TimeSpanInitOptions extends TimeSpanInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TimeSpan} instead.
	 */
	type TimeSpanMixin = ITimeSpan & Object;

	/**
	 * This is the ICalTimeSpan instance.
	 */
	interface TimeSpan extends TimeSpanMixin {}

	class TimeSpan {
		public constructor(options?: Partial<TimeSpanInitOptions>);
		/**
		 * Creates a new #ICalTimeSpan.
		 * @param dtstart The start of #ICalTimeSpan
		 * @param dtend The end of #ICalTimeSpan
		 * @param is_busy Whether this span is busy
		 * @returns The newly created #ICalTimeSpan
		 */
		public static new(dtstart: Time, dtend: Time, is_busy: number): TimeSpan;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): TimeSpan;
		/**
		 * Creates a new #ICalTimeSpan. Free it with {@link GObject.unref}, when no longer needed.
		 * @param start Start of the time span
		 * @param end End of the time span
		 * @param is_busy Whether the time span is busy
		 * @returns The newly created #ICalTimeSpan.
		 */
		public static new_timet(start: number, end: number, is_busy: boolean): TimeSpan;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Timezone} instead.
	 */
	interface ITimezone {
		/**
		 * The clone method for #ICalTimezone.
		 * @returns The newly created #ICalTimezone with the same values as #zone
		 */
		copy(): Timezone;
		/**
		 * Outputs a list of timezone changes for the given timezone to the given file, up to the maximum year given.
		 * @param max_year Max year
		 * @param fp The file handle
		 * @returns 1 if success.
		 */
		dump_changes(max_year: number, fp: any | null): number;
		/**
		 * The destructor of #ICalTimezone.
		 * @param free_struct Whether to free it or reset it. 1 to free and 0 to reset
		 */
		free(free_struct: number): void;
		/**
		 * Returns the VTIMEZONE component of a timezone.
		 * @returns The VTIMEZONE component of the #zone.
		 */
		get_component(): Component;
		/**
		 * Gets the display name of the #zone.
		 * @returns The display name of #zone
		 */
		get_display_name(): string;
		/**
		 * Returns the latitude of a builtin timezone.
		 * @returns The latitude of the #ICalTimezone
		 */
		get_latitude(): number;
		/**
		 * Returns the city name of a timezone, or %NULL, when none is set or when #zone is also %NULL.
		 * @returns The location of the #ICalTimezone, or %NULL
		 */
		get_location(): string | null;
		/**
		 * Returns the longitude of a builtin timezone.
		 * @returns The longitude of the #ICalTimezone.
		 */
		get_longitude(): number;
		/**
		 * Returns the TZID of a timezone, or %NULL, when none is set or when #zone is also %NULL.
		 * @returns The timezone id, or %NULL
		 */
		get_tzid(): string | null;
		/**
		 * Returns the TZNAME properties used in the latest STANDARD and DAYLIGHT components. If they are the same
		 * it will return just one, e.g. "LMT". If they are different it will format them like "EST/EDT". Note that
		 * this may also return NULL.
		 * @returns The timezone name
		 */
		get_tznames(): string | null;
		/**
		 * Calculates the UTC offset of a given local time in the given timezone.  It is the number of seconds to
		 * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
		 * @param tt The local time
		 * @returns UTC offset of the #zone
		 * 
		 * Whether it is day light
		 */
		get_utc_offset(tt: Time | null): [ number, number | null ];
		/**
		 * Calculates the UTC offset of a given UTC time in the given timezone.  It is the number of seconds to
		 * add to UTC to get local time.  The is_daylight flag is set to 1 if the time is in daylight-savings time.
		 * @param tt The local time
		 * @returns UTC offset of the #zone
		 * 
		 * Whether it is day light, can be %NULL
		 */
		get_utc_offset_of_utc_time(tt: Time): [ number, number | null ];
		/**
		 * Sets the VTIMEZONE component of #ICalTimezone, initializing the tzid, location and tzname fields. It
		 * returns 1 on success or 0 on failure, i.e. no TZID was found.
		 * 
		 * #note The #zone assumes ownership
		 * of the #comp, thus make sure you pass an unowned #ICalComponent.
		 * @param comp The VTIMEZONE component of an #ICalTimezone, initializing the tzid, location and tzname fields
		 * @returns Whether the action is successful. 1 for success, 0 for failure.
		 */
		set_component(comp: Component): number;
	}

	type TimezoneInitOptionsMixin = ObjectInitOptions
	export interface TimezoneInitOptions extends TimezoneInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Timezone} instead.
	 */
	type TimezoneMixin = ITimezone & Object;

	/**
	 * This is the ICalTimezone instance.
	 */
	interface Timezone extends TimezoneMixin {}

	class Timezone {
		public constructor(options?: Partial<TimezoneInitOptions>);
		/**
		 * Creates a new array of timezones.
		 * @returns Create a new array.
		 */
		public static array_new(): Array;
		/**
		 * The constructor of the type #ICalTimezone.
		 * @returns The newly created object of the type #ICalTimezone.
		 */
		public static new(): Timezone | null;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @param is_global_memory Whether it is allocated in the global memory.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object, is_global_memory: boolean): Timezone;
		/**
		 * Populate the array of timezones with a component.
		 * 
		 * #note The #timezones assumes ownership of the
		 * #child, thus make sure you pass an unowned #ICalComponent.
		 * @param timezones The timezones to be populated
		 * @param child The component to be appended to #timezones
		 */
		public static array_append_from_vtimezone(timezones: Array, child: Component): void;
		/**
		 * The destructor of the icalarray of icaltimezone elements to fully destroy the native object.
		 * @param zones_array The icalarray created by {@link ICal.timezone.array_new} to be freed
		 */
		public static array_destroy(zones_array: any | null): void;
		/**
		 * Gets the #ICalTimezone at specified position in array.
		 * @param timezones The array to be visited
		 * @param index The index
		 * @returns The #ICalTimezone at the position #index in #timezones.
		 */
		public static array_element_at(timezones: Array, index: number): Timezone;
		/**
		 * Frees an array of timezones.
		 * @param timezones Free an array
		 */
		public static array_free(timezones: Array): void;
		/**
		 * The destructor of the type #ICalTimezone to fully destroy the object by providing 1 as the second argument
		 * of i_cal_time_zone_free. The method is used as a default destructor for introspection.
		 * @param zone The #ICalTimezone to be freed
		 */
		public static destroy(zone: any): void;
		/**
		 * Frees any builtin timezone information.
		 */
		public static free_builtin_timezones(): void;
		/**
		 * Frees memory dedicated to the zonefile directory.
		 */
		public static free_zone_directory(): void;
		/**
		 * Returns a single builtin timezone, given its Olson city name.
		 * @param location The location representing the timezone
		 * @returns The builtin #ICalTimezone with the name of #location
		 */
		public static get_builtin_timezone(location: string | null): Timezone | null;
		/**
		 * Returns a single builtin timezone, given its offset.
		 * @param offset The offset used to get the #ICalTimezone
		 * @param tzname The reference #ICalTimezone name
		 * @returns 
		 */
		public static get_builtin_timezone_from_offset(offset: number, tzname: string | null): Timezone;
		/**
		 * Returns a single builtin timezone, given its TZID.
		 * @param tzid The tzid name
		 * @returns 
		 */
		public static get_builtin_timezone_from_tzid(tzid: string | null): Timezone;
		/**
		 * Returns a list of builtin timezones.
		 * @returns An #ICalArray of the builtin #ICalTimezone objects.
		 */
		public static get_builtin_timezones(): Array;
		/**
		 * Gets whether to use builtin timezones files.
		 * @returns Whether to use builtin timezones files.
		 */
		public static get_builtin_tzdata(): boolean;
		/**
		 * Gets the location of the vtimezone in component.
		 * @param component The #ICalComponent to be queried
		 * @returns The location of vtimezone.
		 */
		public static get_location_from_vtimezone(component: Component): string;
		/**
		 * Gets the name of the vtimezone in component.
		 * @param component The #ICalComponent to be queried
		 * @returns The name of vtimezone.
		 */
		public static get_tznames_from_vtimezone(component: Component): string;
		/**
		 * Returns the UTC timezone.
		 * @returns The utc #ICalTimezone
		 */
		public static get_utc_timezone(): Timezone;
		/**
		 * Frees memory dedicated to the zonefile directory.
		 */
		public static release_zone_tab(): void;
		/**
		 * Sets whether to use builtin timezones files.
		 * @param set Whether to use builtin timezones files
		 */
		public static set_builtin_tzdata(set: boolean): void;
		/**
		 * Sets the prefix to be used for tzid's generated from system tzdata. Must be globally unique (such as
		 * a domain name owned by the developer of the calling application), and begin and end with forward slashes.
		 * Do not change or de-allocate the string buffer after calling this.
		 * @param new_prefix The #ICalTimezone to be set
		 */
		public static set_tzid_prefix(new_prefix: string): void;
		/**
		 * Sets the directory to look for the zonefiles.
		 * @param path The path to look for the zonefiles
		 */
		public static set_zone_directory(path: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Trigger} instead.
	 */
	interface ITrigger {
		/**
		 * Gets the duration from #ICalTrigger.
		 * @returns The duration of #ICalTrigger.
		 */
		get_duration(): Duration;
		/**
		 * Gets the time from #ICalTrigger.
		 * @returns The time of #ICalTrigger.
		 */
		get_time(): Time;
		/**
		 * Checks if a #ICalTrigger is a bad trigger.
		 * @returns 1 if yes, 0 if not.
		 */
		is_bad_trigger(): boolean;
		/**
		 * Checks if a #ICalTrigger is a null trigger.
		 * @returns 1 if yes, 0 if not.
		 */
		is_null_trigger(): boolean;
		/**
		 * Sets the duration from #ICalTrigger.
		 * @param duration The duration of #ICalTrigger
		 */
		set_duration(duration: Duration): void;
		/**
		 * Sets the time from #ICalTrigger.
		 * @param time The time of #ICalTrigger
		 */
		set_time(time: Time): void;
	}

	type TriggerInitOptionsMixin = ObjectInitOptions
	export interface TriggerInitOptions extends TriggerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Trigger} instead.
	 */
	type TriggerMixin = ITrigger & Object;

	/**
	 * This is the ICalTrigger instance.
	 */
	interface Trigger extends TriggerMixin {}

	class Trigger {
		public constructor(options?: Partial<TriggerInitOptions>);
		/**
		 * Creates a #ICalTrigger from integer.
		 * @param reltime An integer
		 * @returns The newly created #ICalTrigger.
		 */
		public static new_from_int(reltime: number): Trigger;
		/**
		 * Creates a #ICalTrigger from a string.
		 * @param str A string
		 * @returns The newly created #ICalTrigger.
		 */
		public static new_from_string(str: string): Trigger;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any | null): Trigger;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Value} instead.
	 */
	interface IValue {
		/**
		 * Converts the #ICalValue to a string.
		 * @returns The string representation.
		 */
		as_ical_string(): string;
		/**
		 * Deeply clone a #ICalValue.
		 * @returns The newly created #ICalValue with the same property as #value.
		 */
		clone(): Value;
		/**
		 * Compares two #ICalValue.
		 * @param b A #ICalValue
		 * @returns The compare result.
		 */
		compare(b: Value): ParameterXliccomparetype;
		/**
		 * Frees a #ICalValue.
		 */
		free(): void;
		/**
		 * Gets the action of #ICalValue.
		 * @returns The action within #ICalValue
		 */
		get_action(): PropertyAction;
		/**
		 * Gets the attach of #ICalValue.
		 * @returns The attach within #ICalValue
		 */
		get_attach(): Attach | null;
		/**
		 * Gets the binary of #ICalValue.
		 * @returns The binary within #ICalValue
		 */
		get_binary(): string | null;
		/**
		 * Gets the boolean of #ICalValue.
		 * @returns The boolean within #ICalValue
		 */
		get_boolean(): number;
		/**
		 * Gets the busytype of #ICalValue.
		 * @returns The busytype within #ICalValue
		 */
		get_busytype(): PropertyBusytype;
		/**
		 * Gets the caladdress of #ICalValue.
		 * @returns The caladdress within #ICalValue
		 */
		get_caladdress(): string | null;
		/**
		 * Gets the carlevel of #ICalValue.
		 * @returns The carlevel within #ICalValue
		 */
		get_carlevel(): PropertyCarlevel;
		/**
		 * Gets the class of #ICalValue.
		 * @returns The class within #ICalValue
		 */
		get_class(): Property_Class;
		/**
		 * Gets the cmd of #ICalValue.
		 * @returns The cmd within #ICalValue
		 */
		get_cmd(): PropertyCmd;
		/**
		 * Gets the date of #ICalValue.
		 * @returns The date within #ICalValue
		 */
		get_date(): Time | null;
		/**
		 * Gets the datetime of #ICalValue.
		 * @returns The datetime within #ICalValue
		 */
		get_datetime(): Time | null;
		/**
		 * Gets the datetimedate (DATE-TIME or DATE) of #ICalValue.
		 * @returns The datetimedate within #ICalValue
		 */
		get_datetimedate(): Time | null;
		/**
		 * Gets the datetimeperiod of #ICalValue.
		 * @returns The datetimeperiod within #ICalValue
		 */
		get_datetimeperiod(): Datetimeperiod | null;
		/**
		 * Gets the duration of #ICalValue.
		 * @returns The duration within #ICalValue
		 */
		get_duration(): Duration | null;
		/**
		 * Gets the float of #ICalValue.
		 * @returns The float within #ICalValue
		 */
		get_float(): number;
		/**
		 * Gets the geo of #ICalValue.
		 * @returns The geo within #ICalValue
		 */
		get_geo(): Geo | null;
		/**
		 * Gets the integer of #ICalValue.
		 * @returns The integer within #ICalValue
		 */
		get_integer(): number;
		/**
		 * Gets the method of #ICalValue.
		 * @returns The method within #ICalValue
		 */
		get_method(): PropertyMethod;
		/**
		 * Gets the parent #ICalProperty of the specified #ICalValue.
		 * @returns The parent #ICalProperty
		 */
		get_parent(): Property | null;
		/**
		 * Gets the period of #ICalValue.
		 * @returns The period within #ICalValue
		 */
		get_period(): Period | null;
		/**
		 * Gets the pollcompletion of #ICalValue.
		 * @returns The pollcompletion within #ICalValue
		 */
		get_pollcompletion(): PropertyPollcompletion;
		/**
		 * Gets the pollmode of #ICalValue.
		 * @returns The pollmode within #ICalValue
		 */
		get_pollmode(): PropertyPollmode;
		/**
		 * Gets the query of #ICalValue.
		 * @returns The query within #ICalValue
		 */
		get_query(): string | null;
		/**
		 * Gets the querylevel of #ICalValue.
		 * @returns The querylevel within #ICalValue
		 */
		get_querylevel(): PropertyQuerylevel;
		/**
		 * Gets the recur of #ICalValue.
		 * @returns The recur within #ICalValue
		 */
		get_recur(): Recurrence | null;
		/**
		 * Gets the requeststatus of #ICalValue.
		 * @returns The requeststatus within #ICalValue
		 */
		get_requeststatus(): Reqstat | null;
		/**
		 * Gets the status of #ICalValue.
		 * @returns The status within #ICalValue
		 */
		get_status(): PropertyStatus;
		/**
		 * Gets the string of #ICalValue.
		 * @returns The string within #ICalValue
		 */
		get_string(): string | null;
		/**
		 * Gets the taskmode of #ICalValue.
		 * @returns The taskmode within #ICalValue
		 */
		get_taskmode(): PropertyTaskmode;
		/**
		 * Gets the text of #ICalValue.
		 * @returns The text within #ICalValue
		 */
		get_text(): string | null;
		/**
		 * Gets the transp of #ICalValue.
		 * @returns The transp within #ICalValue
		 */
		get_transp(): PropertyTransp;
		/**
		 * Gets the trigger of #ICalValue.
		 * @returns The trigger within #ICalValue
		 */
		get_trigger(): Trigger | null;
		/**
		 * Gets the uri of #ICalValue.
		 * @returns The uri within #ICalValue
		 */
		get_uri(): string | null;
		/**
		 * Gets the utcoffset of #ICalValue.
		 * @returns The utcoffset within #ICalValue
		 */
		get_utcoffset(): number;
		/**
		 * Gets the x of #ICalValue.
		 * @returns The x within #ICalValue
		 */
		get_x(): string | null;
		/**
		 * Gets the xlicclass of #ICalValue.
		 * @returns The xlicclass within #ICalValue
		 */
		get_xlicclass(): PropertyXlicclass;
		/**
		 * Checks if #ICalValue is valid.
		 * @returns 1 if valid, 0 if not.
		 */
		is_valid(): boolean;
		/**
		 * Gets the kind of #ICalValue.
		 * @returns The kind of #value.
		 */
		isa(): ValueKind;
		/**
		 * Checks whether the native part of #ICalValue is an icalvalue.
		 * @returns 1 if yes, 0 if not.
		 */
		isa_value(): number;
		/**
		 * Resets the kind of #ICalValue.
		 */
		reset_kind(): void;
		/**
		 * Sets the action in the #ICalValue.
		 * @param v The action value
		 */
		set_action(v: PropertyAction): void;
		/**
		 * Sets the attach in the #ICalValue.
		 * @param v The attach value
		 */
		set_attach(v: Attach): void;
		/**
		 * Sets the binary in the #ICalValue.
		 * @param v The binary value
		 */
		set_binary(v: string): void;
		/**
		 * Sets the boolean in the #ICalValue.
		 * @param v The boolean value
		 */
		set_boolean(v: number): void;
		/**
		 * Sets the busytype in the #ICalValue.
		 * @param v The busytype value
		 */
		set_busytype(v: PropertyBusytype): void;
		/**
		 * Sets the caladdress in the #ICalValue.
		 * @param v The caladdress value
		 */
		set_caladdress(v: string): void;
		/**
		 * Sets the carlevel in the #ICalValue.
		 * @param v The carlevel value
		 */
		set_carlevel(v: PropertyCarlevel): void;
		/**
		 * Sets the class in the #ICalValue.
		 * @param v The class value
		 */
		set_class(v: Property_Class): void;
		/**
		 * Sets the cmd in the #ICalValue.
		 * @param v The cmd value
		 */
		set_cmd(v: PropertyCmd): void;
		/**
		 * Sets the date in the #ICalValue.
		 * @param v The date value
		 */
		set_date(v: Time): void;
		/**
		 * Sets the datetime in the #ICalValue.
		 * @param v The datetime value
		 */
		set_datetime(v: Time): void;
		/**
		 * Sets the datetimedate (DATE-TIME or DATE) in the #ICalValue.
		 * @param v The datetimedate (DATE-TIME or DATE) value
		 */
		set_datetimedate(v: Time): void;
		/**
		 * Sets the datetimeperiod in the #ICalValue.
		 * @param v The datetimeperiod value
		 */
		set_datetimeperiod(v: Datetimeperiod): void;
		/**
		 * Sets the duration in the #ICalValue.
		 * @param v The duration value
		 */
		set_duration(v: Duration): void;
		/**
		 * Sets the float in the #ICalValue.
		 * @param v The float value
		 */
		set_float(v: number): void;
		/**
		 * Sets the geo in the #ICalValue.
		 * @param v The geo value
		 */
		set_geo(v: Geo): void;
		/**
		 * Sets the integer in the #ICalValue.
		 * @param v The integer value
		 */
		set_integer(v: number): void;
		/**
		 * Sets the method in the #ICalValue.
		 * @param v The method value
		 */
		set_method(v: PropertyMethod): void;
		/**
		 * Sets the parent property of a value.
		 * @param property The parent #ICalProperty
		 */
		set_parent(property: Property | null): void;
		/**
		 * Sets the period in the #ICalValue.
		 * @param v The period value
		 */
		set_period(v: Period): void;
		/**
		 * Sets the pollcompletion in the #ICalValue.
		 * @param v The pollcompletion value
		 */
		set_pollcompletion(v: PropertyPollcompletion): void;
		/**
		 * Sets the pollmode in the #ICalValue.
		 * @param v The pollmode value
		 */
		set_pollmode(v: PropertyPollmode): void;
		/**
		 * Sets the query in the #ICalValue.
		 * @param v The query value
		 */
		set_query(v: string): void;
		/**
		 * Sets the querylevel in the #ICalValue.
		 * @param v The querylevel value
		 */
		set_querylevel(v: PropertyQuerylevel): void;
		/**
		 * Sets the recur in the #ICalValue.
		 * @param v The recur value
		 */
		set_recur(v: Recurrence): void;
		/**
		 * Sets the requeststatus in the #ICalValue.
		 * @param v The requeststatus value
		 */
		set_requeststatus(v: Reqstat): void;
		/**
		 * Sets the status in the #ICalValue.
		 * @param v The status value
		 */
		set_status(v: PropertyStatus): void;
		/**
		 * Sets the string in the #ICalValue.
		 * @param v The string value
		 */
		set_string(v: string): void;
		/**
		 * Sets the taskmode in the #ICalValue.
		 * @param v The taskmode value
		 */
		set_taskmode(v: PropertyTaskmode): void;
		/**
		 * Sets the text in the #ICalValue.
		 * @param v The text value
		 */
		set_text(v: string): void;
		/**
		 * Sets the transp in the #ICalValue.
		 * @param v The transp value
		 */
		set_transp(v: PropertyTransp): void;
		/**
		 * Sets the trigger in the #ICalValue.
		 * @param v The trigger value
		 */
		set_trigger(v: Trigger): void;
		/**
		 * Sets the uri in the #ICalValue.
		 * @param v The uri value
		 */
		set_uri(v: string): void;
		/**
		 * Sets the utcoffset in the #ICalValue.
		 * @param v The utcoffset value
		 */
		set_utcoffset(v: number): void;
		/**
		 * Sets the x in the #ICalValue.
		 * @param v The x value
		 */
		set_x(v: string): void;
		/**
		 * Sets the xlicclass in the #ICalValue.
		 * @param v The xlicclass value
		 */
		set_xlicclass(v: PropertyXlicclass): void;
	}

	type ValueInitOptionsMixin = ObjectInitOptions
	export interface ValueInitOptions extends ValueInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Value} instead.
	 */
	type ValueMixin = IValue & Object;

	/**
	 * This is the ICalValue instance.
	 */
	interface Value extends ValueMixin {}

	class Value {
		public constructor(options?: Partial<ValueInitOptions>);
		/**
		 * Creates a new #ICalValue with specific kind.
		 * @param kind A #ICalValueKind
		 * @returns The newly created #ICalValue.
		 */
		public static new(kind: ValueKind): Value;
		/**
		 * Creates a new #ICalValue with the type action.
		 * @param v The action value
		 * @returns The newly created #ICalValue.
		 */
		public static new_action(v: PropertyAction): Value;
		/**
		 * Creates a new #ICalValue with the type attach.
		 * @param v The attach value
		 * @returns The newly created #ICalValue.
		 */
		public static new_attach(v: Attach): Value;
		/**
		 * Creates a new #ICalValue with the type binary.
		 * @param v The binary value
		 * @returns The newly created #ICalValue.
		 */
		public static new_binary(v: string): Value;
		/**
		 * Creates a new #ICalValue with the type boolean.
		 * @param v The boolean value
		 * @returns The newly created #ICalValue.
		 */
		public static new_boolean(v: number): Value;
		/**
		 * Creates a new #ICalValue with the type busytype.
		 * @param v The busytype value
		 * @returns The newly created #ICalValue.
		 */
		public static new_busytype(v: PropertyBusytype): Value;
		/**
		 * Creates a new #ICalValue with the type caladdress.
		 * @param v The caladdress value
		 * @returns The newly created #ICalValue.
		 */
		public static new_caladdress(v: string): Value;
		/**
		 * Creates a new #ICalValue with the type carlevel.
		 * @param v The carlevel value
		 * @returns The newly created #ICalValue.
		 */
		public static new_carlevel(v: PropertyCarlevel): Value;
		/**
		 * Creates a new #ICalValue with the type class.
		 * @param v The class value
		 * @returns The newly created #ICalValue.
		 */
		public static new_class(v: Property_Class): Value;
		/**
		 * Creates a new #ICalValue with the type cmd.
		 * @param v The cmd value
		 * @returns The newly created #ICalValue.
		 */
		public static new_cmd(v: PropertyCmd): Value;
		/**
		 * Creates a new #ICalValue with the type date.
		 * @param v The date value
		 * @returns The newly created #ICalValue.
		 */
		public static new_date(v: Time): Value;
		/**
		 * Creates a new #ICalValue with the type datetime.
		 * @param v The datetime value
		 * @returns The newly created #ICalValue.
		 */
		public static new_datetime(v: Time): Value;
		/**
		 * Creates a new #ICalValue with the type datetimedate (DATE-TIME or DATE).
		 * @param v The DATE-TIME or DATE value
		 * @returns The newly created #ICalValue.
		 */
		public static new_datetimedate(v: Time): Value;
		/**
		 * Creates a new #ICalValue with the type datetimeperiod.
		 * @param v The datetimeperiod value
		 * @returns The newly created #ICalValue.
		 */
		public static new_datetimeperiod(v: Datetimeperiod): Value;
		/**
		 * Creates a new #ICalValue with the type duration.
		 * @param v The duration value
		 * @returns The newly created #ICalValue.
		 */
		public static new_duration(v: Duration): Value;
		/**
		 * Creates a new #ICalValue with the type float.
		 * @param v The float value
		 * @returns The newly created #ICalValue.
		 */
		public static new_float(v: number): Value;
		/**
		 * Creates a new #ICalValue based on the #ICalValueKind and a string.
		 * @param kind A #ICalValueKind
		 * @param str A string
		 * @returns The newly created #ICalValue based on the #kind and #str.
		 */
		public static new_from_string(kind: ValueKind, str: string): Value;
		/**
		 * Create a new libical-glib object from the native libical object and the owner.
		 * @param _native The native libical object.
		 * @param owner The parent.
		 * @returns The newly create libical-glib object.
		 */
		public static new_full(_native: any, owner: GObject.Object): Value;
		/**
		 * Creates a new #ICalValue with the type geo.
		 * @param v The geo value
		 * @returns The newly created #ICalValue.
		 */
		public static new_geo(v: Geo): Value;
		/**
		 * Creates a new #ICalValue with the type integer.
		 * @param v The integer value
		 * @returns The newly created #ICalValue.
		 */
		public static new_integer(v: number): Value;
		/**
		 * Creates a new #ICalValue with the type method.
		 * @param v The method value
		 * @returns The newly created #ICalValue.
		 */
		public static new_method(v: PropertyMethod): Value;
		/**
		 * Creates a new #ICalValue with the type period.
		 * @param v The period value
		 * @returns The newly created #ICalValue.
		 */
		public static new_period(v: Period): Value;
		/**
		 * Creates a new #ICalValue with the type pollcompletion.
		 * @param v The pollcompletion value
		 * @returns The newly created #ICalValue.
		 */
		public static new_pollcompletion(v: PropertyPollcompletion): Value;
		/**
		 * Creates a new #ICalValue with the type pollmode.
		 * @param v The pollmode value
		 * @returns The newly created #ICalValue.
		 */
		public static new_pollmode(v: PropertyPollmode): Value;
		/**
		 * Creates a new #ICalValue with the type query.
		 * @param v The query value
		 * @returns The newly created #ICalValue.
		 */
		public static new_query(v: string): Value;
		/**
		 * Creates a new #ICalValue with the type querylevel.
		 * @param v The querylevel value
		 * @returns The newly created #ICalValue.
		 */
		public static new_querylevel(v: PropertyQuerylevel): Value;
		/**
		 * Creates a new #ICalValue with the type recur.
		 * @param v The recur value
		 * @returns The newly created #ICalValue.
		 */
		public static new_recur(v: Recurrence): Value;
		/**
		 * Creates a new #ICalValue with the type requeststatus.
		 * @param v The requeststatus value
		 * @returns The newly created #ICalValue.
		 */
		public static new_requeststatus(v: Reqstat): Value;
		/**
		 * Creates a new #ICalValue with the type status.
		 * @param v The status value
		 * @returns The newly created #ICalValue.
		 */
		public static new_status(v: PropertyStatus): Value;
		/**
		 * Creates a new #ICalValue with the type string.
		 * @param v The string value
		 * @returns The newly created #ICalValue.
		 */
		public static new_string(v: string): Value;
		/**
		 * Creates a new #ICalValue with the type taskmode.
		 * @param v The taskmode value
		 * @returns The newly created #ICalValue.
		 */
		public static new_taskmode(v: PropertyTaskmode): Value;
		/**
		 * Creates a new #ICalValue with the type text.
		 * @param v The text value
		 * @returns The newly created #ICalValue.
		 */
		public static new_text(v: string): Value;
		/**
		 * Creates a new #ICalValue with the type transp.
		 * @param v The transp value
		 * @returns The newly created #ICalValue.
		 */
		public static new_transp(v: PropertyTransp): Value;
		/**
		 * Creates a new #ICalValue with the type trigger.
		 * @param v The trigger value
		 * @returns The newly created #ICalValue.
		 */
		public static new_trigger(v: Trigger): Value;
		/**
		 * Creates a new #ICalValue with the type uri.
		 * @param v The uri value
		 * @returns The newly created #ICalValue.
		 */
		public static new_uri(v: string): Value;
		/**
		 * Creates a new #ICalValue with the type utcoffset.
		 * @param v The utcoffset value
		 * @returns The newly created #ICalValue.
		 */
		public static new_utcoffset(v: number): Value;
		/**
		 * Creates a new #ICalValue with the type x.
		 * @param v The x value
		 * @returns The newly created #ICalValue.
		 */
		public static new_x(v: string): Value;
		/**
		 * Creates a new #ICalValue with the type xlicclass.
		 * @param v The xlicclass value
		 * @returns The newly created #ICalValue.
		 */
		public static new_xlicclass(v: PropertyXlicclass): Value;
		/**
		 * Extracts the original character string encoded by the above function.
		 * @param szText A string
		 * @returns The decoded string. NULL if fail.
		 */
		public static decode_ical_string(szText: string): string | null;
		/**
		 * Encodes a character string in ical format, escape certain characters, etc.
		 * @param szText A string
		 * @returns The encoded string. NULL if fail.
		 */
		public static encode_ical_string(szText: string): string | null;
		/**
		 * Converts a string to #ICalValueKind.
		 * @param str A string
		 * @returns A #ICalValueKind.
		 */
		public static kind_from_string(str: string): ValueKind;
		/**
		 * Checks whether the #ICalValueKind is valid.
		 * @param kind The #ICalValueKind to be checked
		 * @returns 1 if yes, 0 if not.
		 */
		public static kind_is_valid(kind: ValueKind): boolean;
		/**
		 * Converts a #ICalValueKind to a #ICalPropertyKind.
		 * @param kind A #ICalValueKind
		 * @returns The #ICalPropertyKind.
		 */
		public static kind_to_property_kind(kind: ValueKind): PropertyKind;
		/**
		 * Converts the #ICalValueKind to a string.
		 * @param kind A #ICalValueKind
		 * @returns The string representation of #ICalValueKind.
		 */
		public static kind_to_string(kind: ValueKind): string;
	}

	export interface _ArrayInitOptions {}
	interface _Array {}
	class _Array {
		public constructor(options?: Partial<_ArrayInitOptions>);
	}

	export interface _AttachInitOptions {}
	interface _Attach {}
	class _Attach {
		public constructor(options?: Partial<_AttachInitOptions>);
	}

	export interface _CompIterInitOptions {}
	interface _CompIter {}
	class _CompIter {
		public constructor(options?: Partial<_CompIterInitOptions>);
	}

	export interface _ComponentInitOptions {}
	interface _Component {}
	class _Component {
		public constructor(options?: Partial<_ComponentInitOptions>);
	}

	export interface _DatetimeperiodInitOptions {}
	interface _Datetimeperiod {}
	class _Datetimeperiod {
		public constructor(options?: Partial<_DatetimeperiodInitOptions>);
	}

	export interface _DurationInitOptions {}
	interface _Duration {}
	class _Duration {
		public constructor(options?: Partial<_DurationInitOptions>);
	}

	export interface _GeoInitOptions {}
	interface _Geo {}
	class _Geo {
		public constructor(options?: Partial<_GeoInitOptions>);
	}

	export interface _ParameterInitOptions {}
	interface _Parameter {}
	class _Parameter {
		public constructor(options?: Partial<_ParameterInitOptions>);
	}

	export interface _ParserInitOptions {}
	interface _Parser {}
	class _Parser {
		public constructor(options?: Partial<_ParserInitOptions>);
	}

	export interface _PeriodInitOptions {}
	interface _Period {}
	class _Period {
		public constructor(options?: Partial<_PeriodInitOptions>);
	}

	export interface _PropertyInitOptions {}
	interface _Property {}
	class _Property {
		public constructor(options?: Partial<_PropertyInitOptions>);
	}

	export interface _RecurIteratorInitOptions {}
	interface _RecurIterator {}
	class _RecurIterator {
		public constructor(options?: Partial<_RecurIteratorInitOptions>);
	}

	export interface _RecurrenceInitOptions {}
	interface _Recurrence {}
	class _Recurrence {
		public constructor(options?: Partial<_RecurrenceInitOptions>);
	}

	export interface _ReqstatInitOptions {}
	interface _Reqstat {}
	class _Reqstat {
		public constructor(options?: Partial<_ReqstatInitOptions>);
	}

	export interface _TimeInitOptions {}
	interface _Time {}
	class _Time {
		public constructor(options?: Partial<_TimeInitOptions>);
	}

	export interface _TimeSpanInitOptions {}
	interface _TimeSpan {}
	class _TimeSpan {
		public constructor(options?: Partial<_TimeSpanInitOptions>);
	}

	export interface _TimezoneInitOptions {}
	interface _Timezone {}
	class _Timezone {
		public constructor(options?: Partial<_TimezoneInitOptions>);
	}

	export interface _TriggerInitOptions {}
	interface _Trigger {}
	class _Trigger {
		public constructor(options?: Partial<_TriggerInitOptions>);
	}

	export interface _ValueInitOptions {}
	interface _Value {}
	class _Value {
		public constructor(options?: Partial<_ValueInitOptions>);
	}

	enum ComponentKind {
		NO_COMPONENT = 0,
		ANY_COMPONENT = 1,
		XROOT_COMPONENT = 2,
		XATTACH_COMPONENT = 3,
		VEVENT_COMPONENT = 4,
		VTODO_COMPONENT = 5,
		VJOURNAL_COMPONENT = 6,
		VCALENDAR_COMPONENT = 7,
		VAGENDA_COMPONENT = 8,
		VFREEBUSY_COMPONENT = 9,
		VALARM_COMPONENT = 10,
		XAUDIOALARM_COMPONENT = 11,
		XDISPLAYALARM_COMPONENT = 12,
		XEMAILALARM_COMPONENT = 13,
		XPROCEDUREALARM_COMPONENT = 14,
		VTIMEZONE_COMPONENT = 15,
		XSTANDARD_COMPONENT = 16,
		XDAYLIGHT_COMPONENT = 17,
		X_COMPONENT = 18,
		VSCHEDULE_COMPONENT = 19,
		VQUERY_COMPONENT = 20,
		VREPLY_COMPONENT = 21,
		VCAR_COMPONENT = 22,
		VCOMMAND_COMPONENT = 23,
		XLICINVALID_COMPONENT = 24,
		XLICMIMEPART_COMPONENT = 25,
		VAVAILABILITY_COMPONENT = 26,
		XAVAILABLE_COMPONENT = 27,
		VPOLL_COMPONENT = 28,
		VVOTER_COMPONENT = 29,
		XVOTE_COMPONENT = 30
	}

	enum ErrorEnum {
		NO_ERROR = 0,
		BADARG_ERROR = 1,
		NEWFAILED_ERROR = 2,
		ALLOCATION_ERROR = 3,
		MALFORMEDDATA_ERROR = 4,
		PARSE_ERROR = 5,
		INTERNAL_ERROR = 6,
		FILE_ERROR = 7,
		USAGE_ERROR = 8,
		UNIMPLEMENTED_ERROR = 9,
		UNKNOWN_ERROR = 10
	}

	enum ErrorState {
		FATAL = 0,
		NONFATAL = 1,
		DEFAULT = 2,
		UNKNOWN = 3
	}

	enum ParameterAction {
		X = 20000,
		ASK = 20001,
		ABORT = 20002,
		NONE = 20099
	}

	enum ParameterCutype {
		X = 20100,
		INDIVIDUAL = 20101,
		GROUP = 20102,
		RESOURCE = 20103,
		ROOM = 20104,
		UNKNOWN = 20105,
		NONE = 20199
	}

	enum ParameterEnable {
		X = 20200,
		TRUE = 20201,
		FALSE = 20202,
		NONE = 20299
	}

	enum ParameterEncoding {
		X = 20300,
		_8BIT = 20301,
		BASE64 = 20302,
		NONE = 20399
	}

	enum ParameterFbtype {
		X = 20400,
		FREE = 20401,
		BUSY = 20402,
		BUSYUNAVAILABLE = 20403,
		BUSYTENTATIVE = 20404,
		NONE = 20499
	}

	enum ParameterKind {
		ANY_PARAMETER = 0,
		ACTIONPARAM_PARAMETER = 1,
		ALTREP_PARAMETER = 2,
		CHARSET_PARAMETER = 3,
		CN_PARAMETER = 4,
		CUTYPE_PARAMETER = 5,
		DELEGATEDFROM_PARAMETER = 6,
		DELEGATEDTO_PARAMETER = 7,
		DIR_PARAMETER = 8,
		ENABLE_PARAMETER = 9,
		ENCODING_PARAMETER = 10,
		FBTYPE_PARAMETER = 11,
		FILENAME_PARAMETER = 42,
		FMTTYPE_PARAMETER = 12,
		IANA_PARAMETER = 33,
		ID_PARAMETER = 13,
		LANGUAGE_PARAMETER = 14,
		LATENCY_PARAMETER = 15,
		LOCAL_PARAMETER = 16,
		LOCALIZE_PARAMETER = 17,
		MANAGEDID_PARAMETER = 40,
		MEMBER_PARAMETER = 18,
		MODIFIED_PARAMETER = 44,
		OPTIONS_PARAMETER = 19,
		PARTSTAT_PARAMETER = 20,
		PUBLICCOMMENT_PARAMETER = 37,
		RANGE_PARAMETER = 21,
		REASON_PARAMETER = 43,
		RELATED_PARAMETER = 22,
		RELTYPE_PARAMETER = 23,
		REQUIRED_PARAMETER = 43,
		RESPONSE_PARAMETER = 38,
		ROLE_PARAMETER = 24,
		RSVP_PARAMETER = 25,
		SCHEDULEAGENT_PARAMETER = 34,
		SCHEDULEFORCESEND_PARAMETER = 35,
		SCHEDULESTATUS_PARAMETER = 36,
		SENTBY_PARAMETER = 26,
		SIZE_PARAMETER = 41,
		STAYINFORMED_PARAMETER = 39,
		SUBSTATE_PARAMETER = 45,
		TZID_PARAMETER = 27,
		VALUE_PARAMETER = 28,
		X_PARAMETER = 29,
		XLICCOMPARETYPE_PARAMETER = 30,
		XLICERRORTYPE_PARAMETER = 31,
		NO_PARAMETER = 32
	}

	enum ParameterLocal {
		X = 20500,
		TRUE = 20501,
		FALSE = 20502,
		NONE = 20599
	}

	enum ParameterPartstat {
		X = 20600,
		NEEDSACTION = 20601,
		ACCEPTED = 20602,
		DECLINED = 20603,
		TENTATIVE = 20604,
		DELEGATED = 20605,
		COMPLETED = 20606,
		INPROCESS = 20607,
		FAILED = 20608,
		NONE = 20699
	}

	enum ParameterRange {
		X = 20700,
		THISANDPRIOR = 20701,
		THISANDFUTURE = 20702,
		NONE = 20799
	}

	enum ParameterRelated {
		X = 20800,
		START = 20801,
		END = 20802,
		NONE = 20899
	}

	enum ParameterReltype {
		X = 20900,
		PARENT = 20901,
		CHILD = 20902,
		SIBLING = 20903,
		POLL = 20904,
		NONE = 20999
	}

	enum ParameterRequired {
		X = 21000,
		TRUE = 21001,
		FALSE = 21002,
		NONE = 21099
	}

	enum ParameterRole {
		X = 21100,
		CHAIR = 21101,
		REQPARTICIPANT = 21102,
		OPTPARTICIPANT = 21103,
		NONPARTICIPANT = 21104,
		NONE = 21199
	}

	enum ParameterRsvp {
		X = 21200,
		TRUE = 21201,
		FALSE = 21202,
		NONE = 21299
	}

	enum ParameterScheduleagent {
		X = 21300,
		SERVER = 21301,
		CLIENT = 21302,
		NONE = 21399
	}

	enum ParameterScheduleforcesend {
		X = 21400,
		REQUEST = 21401,
		REPLY = 21402,
		NONE = 21499
	}

	enum ParameterStayinformed {
		X = 21500,
		TRUE = 21501,
		FALSE = 21502,
		NONE = 21599
	}

	enum ParameterSubstate {
		X = 21900,
		OK = 21901,
		ERROR = 21902,
		SUSPENDED = 21903,
		NONE = 21999
	}

	enum ParameterValue {
		X = 21600,
		BINARY = 21601,
		BOOLEAN = 21602,
		DATE = 21603,
		DURATION = 21604,
		FLOAT = 21605,
		INTEGER = 21606,
		PERIOD = 21607,
		RECUR = 21608,
		TEXT = 21609,
		URI = 21610,
		ERROR = 21611,
		DATETIME = 21612,
		UTCOFFSET = 21613,
		CALADDRESS = 21614,
		NONE = 21699
	}

	enum ParameterXliccomparetype {
		X = 21700,
		EQUAL = 21701,
		NOTEQUAL = 21702,
		LESS = 21703,
		GREATER = 21704,
		LESSEQUAL = 21705,
		GREATEREQUAL = 21706,
		REGEX = 21707,
		ISNULL = 21708,
		ISNOTNULL = 21709,
		NONE = 21799
	}

	enum ParameterXlicerrortype {
		X = 21800,
		COMPONENTPARSEERROR = 21801,
		PROPERTYPARSEERROR = 21802,
		PARAMETERNAMEPARSEERROR = 21803,
		PARAMETERVALUEPARSEERROR = 21804,
		VALUEPARSEERROR = 21805,
		INVALIDITIP = 21806,
		UNKNOWNVCALPROPERROR = 21807,
		MIMEPARSEERROR = 21808,
		VCALPROPPARSEERROR = 21809,
		NONE = 21899
	}

	enum ParserState {
		ERROR = 0,
		SUCCESS = 1,
		BEGIN_COMP = 2,
		END_COMP = 3,
		IN_PROGRESS = 4
	}

	enum PropertyAction {
		X = 10000,
		AUDIO = 10001,
		DISPLAY = 10002,
		EMAIL = 10003,
		PROCEDURE = 10004,
		NONE = 10099
	}

	enum PropertyBusytype {
		X = 10100,
		BUSY = 10101,
		BUSYUNAVAILABLE = 10102,
		BUSYTENTATIVE = 10103,
		NONE = 10199
	}

	enum PropertyCarlevel {
		X = 10200,
		CARNONE = 10201,
		CARMIN = 10202,
		CARFULL1 = 10203,
		NONE = 10299
	}

	enum PropertyCmd {
		X = 10400,
		ABORT = 10401,
		CONTINUE = 10402,
		CREATE = 10403,
		DELETE = 10404,
		GENERATEUID = 10405,
		GETCAPABILITY = 10406,
		IDENTIFY = 10407,
		MODIFY = 10408,
		MOVE = 10409,
		REPLY = 10410,
		SEARCH = 10411,
		SETLOCALE = 10412,
		NONE = 10499
	}

	enum PropertyKind {
		ANY_PROPERTY = 0,
		ACCEPTRESPONSE_PROPERTY = 102,
		ACKNOWLEDGED_PROPERTY = 1,
		ACTION_PROPERTY = 2,
		ALLOWCONFLICT_PROPERTY = 3,
		ATTACH_PROPERTY = 4,
		ATTENDEE_PROPERTY = 5,
		BUSYTYPE_PROPERTY = 101,
		CALID_PROPERTY = 6,
		CALMASTER_PROPERTY = 7,
		CALSCALE_PROPERTY = 8,
		CAPVERSION_PROPERTY = 9,
		CARLEVEL_PROPERTY = 10,
		CARID_PROPERTY = 11,
		CATEGORIES_PROPERTY = 12,
		CLASS_PROPERTY = 13,
		CMD_PROPERTY = 14,
		COLOR_PROPERTY = 118,
		COMMENT_PROPERTY = 15,
		COMPLETED_PROPERTY = 16,
		COMPONENTS_PROPERTY = 17,
		CONTACT_PROPERTY = 18,
		CREATED_PROPERTY = 19,
		CSID_PROPERTY = 20,
		DATEMAX_PROPERTY = 21,
		DATEMIN_PROPERTY = 22,
		DECREED_PROPERTY = 23,
		DEFAULTCHARSET_PROPERTY = 24,
		DEFAULTLOCALE_PROPERTY = 25,
		DEFAULTTZID_PROPERTY = 26,
		DEFAULTVCARS_PROPERTY = 27,
		DENY_PROPERTY = 28,
		DESCRIPTION_PROPERTY = 29,
		DTEND_PROPERTY = 30,
		DTSTAMP_PROPERTY = 31,
		DTSTART_PROPERTY = 32,
		DUE_PROPERTY = 33,
		DURATION_PROPERTY = 34,
		ESTIMATEDDURATION_PROPERTY = 113,
		EXDATE_PROPERTY = 35,
		EXPAND_PROPERTY = 36,
		EXRULE_PROPERTY = 37,
		FREEBUSY_PROPERTY = 38,
		GEO_PROPERTY = 39,
		GRANT_PROPERTY = 40,
		ITIPVERSION_PROPERTY = 41,
		LASTMODIFIED_PROPERTY = 42,
		LOCATION_PROPERTY = 43,
		MAXCOMPONENTSIZE_PROPERTY = 44,
		MAXDATE_PROPERTY = 45,
		MAXRESULTS_PROPERTY = 46,
		MAXRESULTSSIZE_PROPERTY = 47,
		METHOD_PROPERTY = 48,
		MINDATE_PROPERTY = 49,
		MULTIPART_PROPERTY = 50,
		NAME_PROPERTY = 115,
		ORGANIZER_PROPERTY = 52,
		OWNER_PROPERTY = 53,
		PERCENTCOMPLETE_PROPERTY = 54,
		PERMISSION_PROPERTY = 55,
		POLLCOMPLETION_PROPERTY = 110,
		POLLITEMID_PROPERTY = 103,
		POLLMODE_PROPERTY = 104,
		POLLPROPERTIES_PROPERTY = 105,
		POLLWINNER_PROPERTY = 106,
		PRIORITY_PROPERTY = 56,
		PRODID_PROPERTY = 57,
		QUERY_PROPERTY = 58,
		QUERYLEVEL_PROPERTY = 59,
		QUERYID_PROPERTY = 60,
		QUERYNAME_PROPERTY = 61,
		RDATE_PROPERTY = 62,
		RECURACCEPTED_PROPERTY = 63,
		RECUREXPAND_PROPERTY = 64,
		RECURLIMIT_PROPERTY = 65,
		RECURRENCEID_PROPERTY = 66,
		RELATEDTO_PROPERTY = 67,
		RELCALID_PROPERTY = 68,
		REPEAT_PROPERTY = 69,
		REPLYURL_PROPERTY = 111,
		REQUESTSTATUS_PROPERTY = 70,
		RESOURCES_PROPERTY = 71,
		RESPONSE_PROPERTY = 112,
		RESTRICTION_PROPERTY = 72,
		RRULE_PROPERTY = 73,
		SCOPE_PROPERTY = 74,
		SEQUENCE_PROPERTY = 75,
		STATUS_PROPERTY = 76,
		STORESEXPANDED_PROPERTY = 77,
		SUMMARY_PROPERTY = 78,
		TARGET_PROPERTY = 79,
		TASKMODE_PROPERTY = 114,
		TRANSP_PROPERTY = 80,
		TRIGGER_PROPERTY = 81,
		TZID_PROPERTY = 82,
		TZIDALIASOF_PROPERTY = 108,
		TZNAME_PROPERTY = 83,
		TZOFFSETFROM_PROPERTY = 84,
		TZOFFSETTO_PROPERTY = 85,
		TZUNTIL_PROPERTY = 109,
		TZURL_PROPERTY = 86,
		UID_PROPERTY = 87,
		URL_PROPERTY = 88,
		VERSION_PROPERTY = 89,
		VOTER_PROPERTY = 107,
		X_PROPERTY = 90,
		XLICCLASS_PROPERTY = 91,
		XLICCLUSTERCOUNT_PROPERTY = 92,
		XLICERROR_PROPERTY = 93,
		XLICMIMECHARSET_PROPERTY = 94,
		XLICMIMECID_PROPERTY = 95,
		XLICMIMECONTENTTYPE_PROPERTY = 96,
		XLICMIMEENCODING_PROPERTY = 97,
		XLICMIMEFILENAME_PROPERTY = 98,
		XLICMIMEOPTINFO_PROPERTY = 99,
		NO_PROPERTY = 100
	}

	enum PropertyMethod {
		X = 10500,
		PUBLISH = 10501,
		REQUEST = 10502,
		REPLY = 10503,
		ADD = 10504,
		CANCEL = 10505,
		REFRESH = 10506,
		COUNTER = 10507,
		DECLINECOUNTER = 10508,
		CREATE = 10509,
		READ = 10510,
		RESPONSE = 10511,
		MOVE = 10512,
		MODIFY = 10513,
		GENERATEUID = 10514,
		DELETE = 10515,
		NONE = 10599
	}

	enum PropertyPollcompletion {
		X = 10600,
		SERVER = 10601,
		SERVERSUBMIT = 10602,
		SERVERCHOICE = 10603,
		CLIENT = 10604,
		NONE = 10699
	}

	enum PropertyPollmode {
		X = 10700,
		BASIC = 10701,
		NONE = 10799
	}

	enum PropertyQuerylevel {
		X = 10800,
		CALQL1 = 10801,
		CALQLNONE = 10802,
		NONE = 10899
	}

	enum PropertyStatus {
		X = 10900,
		TENTATIVE = 10901,
		CONFIRMED = 10902,
		COMPLETED = 10903,
		NEEDSACTION = 10904,
		CANCELLED = 10905,
		INPROCESS = 10906,
		DRAFT = 10907,
		FINAL = 10908,
		SUBMITTED = 10909,
		PENDING = 10910,
		FAILED = 10911,
		DELETED = 10912,
		NONE = 10999
	}

	enum PropertyTaskmode {
		X = 11200,
		AUTOMATICCOMPLETION = 11201,
		AUTOMATICFAILURE = 11202,
		AUTOMATICSTATUS = 11203,
		NONE = 11299
	}

	enum PropertyTransp {
		X = 11000,
		OPAQUE = 11001,
		OPAQUENOCONFLICT = 11002,
		TRANSPARENT = 11003,
		TRANSPARENTNOCONFLICT = 11004,
		NONE = 11099
	}

	enum PropertyXlicclass {
		X = 11100,
		PUBLISHNEW = 11101,
		PUBLISHUPDATE = 11102,
		PUBLISHFREEBUSY = 11103,
		REQUESTNEW = 11104,
		REQUESTUPDATE = 11105,
		REQUESTRESCHEDULE = 11106,
		REQUESTDELEGATE = 11107,
		REQUESTNEWORGANIZER = 11108,
		REQUESTFORWARD = 11109,
		REQUESTSTATUS = 11110,
		REQUESTFREEBUSY = 11111,
		REPLYACCEPT = 11112,
		REPLYDECLINE = 11113,
		REPLYDELEGATE = 11114,
		REPLYCRASHERACCEPT = 11115,
		REPLYCRASHERDECLINE = 11116,
		ADDINSTANCE = 11117,
		CANCELEVENT = 11118,
		CANCELINSTANCE = 11119,
		CANCELALL = 11120,
		REFRESH = 11121,
		COUNTER = 11122,
		DECLINECOUNTER = 11123,
		MALFORMED = 11124,
		OBSOLETE = 11125,
		MISSEQUENCED = 11126,
		UNKNOWN = 11127,
		NONE = 11199
	}

	enum Property_Class {
		X = 10300,
		PUBLIC = 10301,
		PRIVATE = 10302,
		CONFIDENTIAL = 10303,
		NONE = 10399
	}

	enum RecurrenceArrayMaxValues {
		RECURRENCE_ARRAY_MAX = 32639
	}

	enum RecurrenceArraySizes {
		SECOND_SIZE = 62,
		MINUTE_SIZE = 61,
		HOUR_SIZE = 25,
		MONTH_SIZE = 14,
		MONTHDAY_SIZE = 32,
		WEEKNO_SIZE = 56,
		YEARDAY_SIZE = 386,
		SETPOS_SIZE = 386,
		DAY_SIZE = 386
	}

	enum RecurrenceFrequency {
		SECONDLY_RECURRENCE = 0,
		MINUTELY_RECURRENCE = 1,
		HOURLY_RECURRENCE = 2,
		DAILY_RECURRENCE = 3,
		WEEKLY_RECURRENCE = 4,
		MONTHLY_RECURRENCE = 5,
		YEARLY_RECURRENCE = 6,
		NO_RECURRENCE = 7
	}

	enum RecurrenceSkip {
		BACKWARD = 0,
		FORWARD = 1,
		OMIT = 2,
		UNDEFINED = 3
	}

	enum RecurrenceWeekday {
		NO_WEEKDAY = 0,
		SUNDAY_WEEKDAY = 1,
		MONDAY_WEEKDAY = 2,
		TUESDAY_WEEKDAY = 3,
		WEDNESDAY_WEEKDAY = 4,
		THURSDAY_WEEKDAY = 5,
		FRIDAY_WEEKDAY = 6,
		SATURDAY_WEEKDAY = 7
	}

	enum RequestStatus {
		UNKNOWN_STATUS = 0,
		_2_0_SUCCESS_STATUS = 1,
		_2_1_FALLBACK_STATUS = 2,
		_2_2_IGPROP_STATUS = 3,
		_2_3_IGPARAM_STATUS = 4,
		_2_4_IGXPROP_STATUS = 5,
		_2_5_IGXPARAM_STATUS = 6,
		_2_6_IGCOMP_STATUS = 7,
		_2_7_FORWARD_STATUS = 8,
		_2_8_ONEEVENT_STATUS = 9,
		_2_9_TRUNC_STATUS = 10,
		_2_10_ONETODO_STATUS = 11,
		_2_11_TRUNCRRULE_STATUS = 12,
		_3_0_INVPROPNAME_STATUS = 13,
		_3_1_INVPROPVAL_STATUS = 14,
		_3_2_INVPARAM_STATUS = 15,
		_3_3_INVPARAMVAL_STATUS = 16,
		_3_4_INVCOMP_STATUS = 17,
		_3_5_INVTIME_STATUS = 18,
		_3_6_INVRULE_STATUS = 19,
		_3_7_INVCU_STATUS = 20,
		_3_8_NOAUTH_STATUS = 21,
		_3_9_BADVERSION_STATUS = 22,
		_3_10_TOOBIG_STATUS = 23,
		_3_11_MISSREQCOMP_STATUS = 24,
		_3_12_UNKCOMP_STATUS = 25,
		_3_13_BADCOMP_STATUS = 26,
		_3_14_NOCAP_STATUS = 27,
		_3_15_INVCOMMAND = 28,
		_4_0_BUSY_STATUS = 29,
		_4_1_STORE_ACCESS_DENIED = 30,
		_4_2_STORE_FAILED = 31,
		_4_3_STORE_NOT_FOUND = 32,
		_5_0_MAYBE_STATUS = 33,
		_5_1_UNAVAIL_STATUS = 34,
		_5_2_NOSERVICE_STATUS = 35,
		_5_3_NOSCHED_STATUS = 36,
		_6_1_CONTAINER_NOT_FOUND = 37,
		_9_0_UNRECOGNIZED_COMMAND = 38
	}

	enum RestrictionKind {
		NONE = 0,
		ZERO = 1,
		ONE = 2,
		ZEROPLUS = 3,
		ONEPLUS = 4,
		ZEROORONE = 5,
		ONEEXCLUSIVE = 6,
		ONEMUTUAL = 7,
		UNKNOWN = 8
	}

	enum Unknowntokenhandling {
		ASSUME_IANA_TOKEN = 1,
		DISCARD_TOKEN = 2,
		TREAT_AS_ERROR = 3
	}

	enum ValueKind {
		ANY_VALUE = 5000,
		ACTION_VALUE = 5027,
		ATTACH_VALUE = 5003,
		BINARY_VALUE = 5011,
		BOOLEAN_VALUE = 5021,
		BUSYTYPE_VALUE = 5032,
		CALADDRESS_VALUE = 5023,
		CARLEVEL_VALUE = 5016,
		CLASS_VALUE = 5019,
		CMD_VALUE = 5010,
		DATE_VALUE = 5002,
		DATETIME_VALUE = 5028,
		DATETIMEDATE_VALUE = 5036,
		DATETIMEPERIOD_VALUE = 5015,
		DURATION_VALUE = 5020,
		FLOAT_VALUE = 5013,
		GEO_VALUE = 5004,
		INTEGER_VALUE = 5017,
		METHOD_VALUE = 5030,
		PERIOD_VALUE = 5014,
		POLLCOMPLETION_VALUE = 5034,
		POLLMODE_VALUE = 5033,
		QUERY_VALUE = 5001,
		QUERYLEVEL_VALUE = 5012,
		RECUR_VALUE = 5026,
		REQUESTSTATUS_VALUE = 5009,
		STATUS_VALUE = 5005,
		STRING_VALUE = 5007,
		TASKMODE_VALUE = 5035,
		TEXT_VALUE = 5008,
		TRANSP_VALUE = 5006,
		TRIGGER_VALUE = 5024,
		URI_VALUE = 5018,
		UTCOFFSET_VALUE = 5029,
		X_VALUE = 5022,
		XLICCLASS_VALUE = 5025,
		NO_VALUE = 5031
	}

	interface ComponentForeachRecurrenceFunc {
		(comp: Component, span: TimeSpan): void;
	}

	interface ComponentForeachTZIDFunc {
		(param: Parameter): void;
	}

	interface MimeParseFunc {
		(bytes: string[], size: number): string;
	}

	interface ParserLineGenFunc {
		(bytes: string[], size: number): string;
	}

	function bt(): void;

	/**
	 * Returns the error stored in the library. If no error, return I_CAL_NO_ERROR.
	 * @returns Return the error happened
	 */
	function errno_return(): ErrorEnum;

	function error_clear_errno(): void;

	/**
	 * Shout out the errors to the compiler.
	 */
	function error_crash_here(): void;

	/**
	 * Gets the state of an error.
	 * @param error The error to be checked
	 * @returns The state of the #error
	 */
	function error_get_error_state(error: ErrorEnum): ErrorState;

	/**
	 * Gets the #ICalErrorEnum in the string representation. This method called the icalerrorno_return to get
	 * the current error.
	 * @returns The string representation of the current error
	 */
	function error_perror(): string;

	/**
	 * Restores the error to specified state.
	 * @param error The error to be restored
	 * @param es The error state to be restored
	 */
	function error_restore(error: string, es: ErrorState): void;

	/**
	 * Sets the errno.
	 * @param x The error to be set
	 */
	function error_set_errno(x: ErrorEnum): void;

	/**
	 * Sets the state to the corresponding error in the library.
	 * @param error The error enum
	 * @param state The error state
	 */
	function error_set_error_state(error: ErrorEnum, state: ErrorState): void;

	function error_stop_here(): void;

	/**
	 * Translates the #ICalErrorEnum to the string representation.
	 * @param e The #ICalErrorEnum to be translated
	 * @returns The string representation of #e
	 */
	function error_strerror(e: ErrorEnum): string;

	/**
	 * Suppresses the error.
	 * @param error The error to be suppressed
	 * @returns The error state suppressed
	 */
	function error_supress(error: string): ErrorState;

	/**
	 * Gets the setting of #ICalUnknowntokenhandling.
	 * @returns The setting of #ICalUnknowntokenhandling
	 */
	function get_unknown_token_handling_setting(): Unknowntokenhandling;

	/**
	 * Adds an existing buffer to the buffer ring.
	 * @param buf The existing buffer to be added into the ical
	 */
	function memory_add_tmp_buffer(buf: any | null): void;

	/**
	 * Append the character to the buffer. Only use them on normally allocated memory, or on buffers created
	 * from icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
	 * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
	 * @param ch The character to be allocated
	 */
	function memory_append_char(ch: string): void;

	/**
	 * Appends the string to the buffer. Only use them on normally allocated memory, or on buffers created from
	 * icalmemory_new_buffer, never with buffers created by icalmemory_tmp_buffer. If icalmemory_append_string
	 * has to resize a buffer on the ring, the ring will loose track of it an you will have memory problems.
	 * @param str The string to be allocated
	 */
	function memory_append_string(str: string): void;

	/**
	 * Frees the buffer.
	 * @param buf The buffer to be freed
	 */
	function memory_free_buffer(buf: any | null): void;

	/**
	 * Frees all the memory used in the ring.
	 */
	function memory_free_ring(): void;

	/**
	 * Creates a new buffer with target size. The caller should deallocate it when necessary.
	 * @param size The size of the new buffer to be created
	 * @returns The newly created buffer with the target size.
	 */
	function memory_new_buffer(size: number): any | null;

	/**
	 * Resizes the buffer to the target size.
	 * @param buf The buffer needs to be resized
	 * @param size The target size the buffer to be resized to
	 * @returns The buffer after being resized.
	 */
	function memory_resize_buffer(buf: any | null, size: number): any | null;

	/**
	 * A wrapper around strdup. Partly to trap calls to strdup, partly because in -ansi, gcc on Red Hat claims
	 * that strdup is undeclared.
	 * @param s The string to be cloned
	 * @returns The cloned string.
	 */
	function memory_strdup(s: string): string;

	/**
	 * Creates a buffer with target size.
	 * @param size The size of the buffer to be created
	 * @returns The newly created buffer
	 */
	function memory_tmp_buffer(size: number): any | null;

	/**
	 * Like strdup, but the buffer is on the ring.
	 * @param str The string to be copied
	 * @returns The new copy of the #str.
	 */
	function memory_tmp_copy(str: string): string;

	/**
	 * Parses data to #ICalComponent using the given function.
	 * @param func The parsing function
	 * @returns The parsed #ICalComponent
	 */
	function mime_parse(func: MimeParseFunc): Component;

	/**
	 * Fills an array with the 'count' number of occurrences generated by the rrule. Note that the times are
	 * returned in UTC, but the times are calculated in local time. YOu will have to convert the results back
	 * into local time before using them.
	 * @param rule The rule of the recurrence
	 * @param start The start seconds past the POSIX epoch
	 * @param count The number of elements to be filled up in the #array
	 * @returns If successful, return the array. NULL if failed.
	 */
	function recur_expand_recurrence(rule: string, start: number, count: number): number[];

	/**
	 * Returns the code for a request status.
	 * @param stat The #ICalRequestStatus to be queried
	 * @returns The code for a request status
	 */
	function request_status_code(stat: RequestStatus): string;

	/**
	 * Returns the descriptive text for a request status.
	 * @param stat The #ICalRequestStatus to be translated
	 * @returns The description of the #stat
	 */
	function request_status_desc(stat: RequestStatus): string;

	/**
	 * Returns a request status for major/minor status numbers.
	 * @param major The major number
	 * @param minor The minor number
	 * @returns The corresponding #ICalRequestStatus
	 */
	function request_status_from_num(major: number, minor: number): RequestStatus;

	/**
	 * Returns the major number for a request status.
	 * @param stat The #ICalRequestStatus to be queried
	 * @returns The major number for a request status
	 */
	function request_status_major(stat: RequestStatus): number;

	/**
	 * Returns the minor number for a request status.
	 * @param stat The #ICalRequestStatus to be queried
	 * @returns The minor number for a request status
	 */
	function request_status_minor(stat: RequestStatus): number;

	/**
	 * Checks whether the #ICalComponent is valid.
	 * @param comp The component to be checked
	 * @returns Whether the #comp is valid.
	 */
	function restriction_check(comp: Component): number;

	/**
	 * Compares the kind of restriction and the count to determine whether it is valid.
	 * @param restr The restriction kind
	 * @param count The number of restrictions
	 * @returns Whether it is valid or not. -1 indicates invalid or more analysis. 1 indicates pass and 0 or 2+ indicates fail.
	 */
	function restriction_compare(restr: RestrictionKind, count: number): number;

	/**
	 * Sets #ICalUnknowntokenhandling.
	 * @param newSetting A #ICalUnknowntokenhandling
	 */
	function set_unknown_token_handling_setting(newSetting: Unknowntokenhandling): void;

}