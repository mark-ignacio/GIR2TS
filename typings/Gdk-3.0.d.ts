declare namespace imports.gi.Gdk {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AppLaunchContext} instead.
	 */
	interface IAppLaunchContext {
		/**
		 * Sets the workspace on which applications will be launched when
		 * using this context when running under a window manager that
		 * supports multiple workspaces, as described in the
		 * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
		 * 
		 * When the workspace is not specified or #desktop is set to -1,
		 * it is up to the window manager to pick one, typically it will
		 * be the current workspace.
		 * @param desktop the number of a workspace, or -1
		 */
		set_desktop(desktop: number): void;
		/**
		 * Sets the display on which applications will be launched when
		 * using this context. See also gdk_app_launch_context_set_screen().
		 * @param display a {@link Display}
		 */
		set_display(display: Display): void;
		/**
		 * Sets the icon for applications that are launched with this
		 * context.
		 * 
		 * Window Managers can use this information when displaying startup
		 * notification.
		 * 
		 * See also gdk_app_launch_context_set_icon_name().
		 * @param icon a #GIcon, or %NULL
		 */
		set_icon(icon: Gio.Icon): void;
		/**
		 * Sets the icon for applications that are launched with this context.
		 * The #icon_name will be interpreted in the same way as the Icon field
		 * in desktop files. See also gdk_app_launch_context_set_icon().
		 * 
		 * If both #icon and #icon_name are set, the #icon_name takes priority.
		 * If neither #icon or #icon_name is set, the icon is taken from either
		 * the file that is passed to launched application or from the #GAppInfo
		 * for the launched application itself.
		 * @param icon_name an icon name, or %NULL
		 */
		set_icon_name(icon_name: string): void;
		/**
		 * Sets the screen on which applications will be launched when
		 * using this context. See also gdk_app_launch_context_set_display().
		 * 
		 * If both #screen and #display are set, the #screen takes priority.
		 * If neither #screen or #display are set, the default screen and
		 * display are used.
		 * @param screen a {@link Screen}
		 */
		set_screen(screen: Screen): void;
		/**
		 * Sets the timestamp of #context. The timestamp should ideally
		 * be taken from the event that triggered the launch.
		 * 
		 * Window managers can use this information to avoid moving the
		 * focus to the newly launched application when the user is busy
		 * typing in another window. This is also known as 'focus stealing
		 * prevention'.
		 * @param timestamp a timestamp
		 */
		set_timestamp(timestamp: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AppLaunchContext} instead.
	 */
	type AppLaunchContextMixin = IAppLaunchContext & Gio.IAppLaunchContext;

	/**
	 * GdkAppLaunchContext is an implementation of #GAppLaunchContext that
	 * handles launching an application in a graphical context. It provides
	 * startup notification and allows to launch applications on a specific
	 * screen or workspace.
	 * 
	 * ## Launching an application
	 * 
	 * |[<!-- language="C" -->
	 * GdkAppLaunchContext *context;
	 * 
	 * context = gdk_display_get_app_launch_context (display);
	 * 
	 * gdk_app_launch_context_set_screen (screen);
	 * gdk_app_launch_context_set_timestamp (event->time);
	 * 
	 * if (!g_app_info_launch_default_for_uri ("http://www.gtk.org", context, &error))
	 *   g_warning ("Launching failed: %s\n", error->message);
	 * 
	 * g_object_unref (context);
	 * ]|
	 */
	interface AppLaunchContext extends AppLaunchContextMixin {}

	class AppLaunchContext {
		public constructor();
		/**
		 * Creates a new {@link AppLaunchContext}.
		 * @returns a new {@link AppLaunchContext}
		 */
		public static new(): AppLaunchContext;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Cursor} instead.
	 */
	interface ICursor {
		/**
		 * Returns the cursor type for this cursor.
		 * @returns a {@link CursorType}
		 */
		get_cursor_type(): CursorType;
		/**
		 * Returns the display on which the {@link Cursor} is defined.
		 * @returns the {@link Display} associated to #cursor
		 */
		get_display(): Display;
		/**
		 * Returns a {@link Pixbuf} with the image used to display the cursor.
		 * 
		 * Note that depending on the capabilities of the windowing system and
		 * on the cursor, GDK may not be able to obtain the image data. In this
		 * case, %NULL is returned.
		 * @returns a {@link Pixbuf} representing
		 *   #cursor, or %NULL
		 */
		get_image(): GdkPixbuf.Pixbuf;
		/**
		 * Returns a cairo image surface with the image used to display the cursor.
		 * 
		 * Note that depending on the capabilities of the windowing system and
		 * on the cursor, GDK may not be able to obtain the image data. In this
		 * case, %NULL is returned.
		 * @param x_hot Location to store the hotspot x position,
		 *   or %NULL
		 * @param y_hot Location to store the hotspot y position,
		 *   or %NULL
		 * @returns a #cairo_surface_t
		 *   representing #cursor, or %NULL
		 */
		get_surface(x_hot: number, y_hot: number): cairo.Surface;
		/**
		 * Adds a reference to #cursor.
		 * @returns Same #cursor that was passed in
		 */
		ref(): Cursor;
		/**
		 * Removes a reference from #cursor, deallocating the cursor
		 * if no references remain.
		 */
		unref(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Cursor} instead.
	 */
	type CursorMixin = ICursor & GObject.IObject;

	/**
	 * A {@link Cursor} represents a cursor. Its contents are private.
	 */
	interface Cursor extends CursorMixin {}

	class Cursor {
		public constructor();
		/**
		 * Creates a new cursor from the set of builtin cursors for the default display.
		 * See gdk_cursor_new_for_display().
		 * 
		 * To make the cursor invisible, use %GDK_BLANK_CURSOR.
		 * @param cursor_type cursor to create
		 * @returns a new {@link Cursor}
		 */
		public static new(cursor_type: CursorType): Cursor;
		/**
		 * Creates a new cursor from the set of builtin cursors.
		 * @param display the {@link Display} for which the cursor will be created
		 * @param cursor_type cursor to create
		 * @returns a new {@link Cursor}, or %NULL on failure
		 */
		public static new_for_display(display: Display, cursor_type: CursorType): Cursor;
		/**
		 * Creates a new cursor by looking up #name in the current cursor
		 * theme.
		 * 
		 * A recommended set of cursor names that will work across different
		 * platforms can be found in the CSS specification:
		 * - "none"
		 * - ![](default_cursor.png) "default"
		 * - ![](help_cursor.png) "help"
		 * - ![](pointer_cursor.png) "pointer"
		 * - ![](context_menu_cursor.png) "context-menu"
		 * - ![](progress_cursor.png) "progress"
		 * - ![](wait_cursor.png) "wait"
		 * - ![](cell_cursor.png) "cell"
		 * - ![](crosshair_cursor.png) "crosshair"
		 * - ![](text_cursor.png) "text"
		 * - ![](vertical_text_cursor.png) "vertical-text"
		 * - ![](alias_cursor.png) "alias"
		 * - ![](copy_cursor.png) "copy"
		 * - ![](no_drop_cursor.png) "no-drop"
		 * - ![](move_cursor.png) "move"
		 * - ![](not_allowed_cursor.png) "not-allowed"
		 * - ![](grab_cursor.png) "grab"
		 * - ![](grabbing_cursor.png) "grabbing"
		 * - ![](all_scroll_cursor.png) "all-scroll"
		 * - ![](col_resize_cursor.png) "col-resize"
		 * - ![](row_resize_cursor.png) "row-resize"
		 * - ![](n_resize_cursor.png) "n-resize"
		 * - ![](e_resize_cursor.png) "e-resize"
		 * - ![](s_resize_cursor.png) "s-resize"
		 * - ![](w_resize_cursor.png) "w-resize"
		 * - ![](ne_resize_cursor.png) "ne-resize"
		 * - ![](nw_resize_cursor.png) "nw-resize"
		 * - ![](sw_resize_cursor.png) "sw-resize"
		 * - ![](se_resize_cursor.png) "se-resize"
		 * - ![](ew_resize_cursor.png) "ew-resize"
		 * - ![](ns_resize_cursor.png) "ns-resize"
		 * - ![](nesw_resize_cursor.png) "nesw-resize"
		 * - ![](nwse_resize_cursor.png) "nwse-resize"
		 * - ![](zoom_in_cursor.png) "zoom-in"
		 * - ![](zoom_out_cursor.png) "zoom-out"
		 * @param display the {@link Display} for which the cursor will be created
		 * @param name the name of the cursor
		 * @returns a new {@link Cursor}, or %NULL if there is no
		 *   cursor with the given name
		 */
		public static new_from_name(display: Display, name: string): Cursor;
		/**
		 * Creates a new cursor from a pixbuf.
		 * 
		 * Not all GDK backends support RGBA cursors. If they are not
		 * supported, a monochrome approximation will be displayed.
		 * The functions gdk_display_supports_cursor_alpha() and
		 * gdk_display_supports_cursor_color() can be used to determine
		 * whether RGBA cursors are supported;
		 * gdk_display_get_default_cursor_size() and
		 * gdk_display_get_maximal_cursor_size() give information about
		 * cursor sizes.
		 * 
		 * If #x or #y are `-1`, the pixbuf must have
		 * options named “x_hot” and “y_hot”, resp., containing
		 * integer values between `0` and the width resp. height of
		 * the pixbuf. (Since: 3.0)
		 * 
		 * On the X backend, support for RGBA cursors requires a
		 * sufficently new version of the X Render extension.
		 * @param display the {@link Display} for which the cursor will be created
		 * @param pixbuf the {@link Pixbuf} containing the cursor image
		 * @param _x the horizontal offset of the “hotspot” of the cursor.
		 * @param _y the vertical offset of the “hotspot” of the cursor.
		 * @returns a new {@link Cursor}.
		 */
		public static new_from_pixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, _x: number, _y: number): Cursor;
		/**
		 * Creates a new cursor from a cairo image surface.
		 * 
		 * Not all GDK backends support RGBA cursors. If they are not
		 * supported, a monochrome approximation will be displayed.
		 * The functions gdk_display_supports_cursor_alpha() and
		 * gdk_display_supports_cursor_color() can be used to determine
		 * whether RGBA cursors are supported;
		 * gdk_display_get_default_cursor_size() and
		 * gdk_display_get_maximal_cursor_size() give information about
		 * cursor sizes.
		 * 
		 * On the X backend, support for RGBA cursors requires a
		 * sufficently new version of the X Render extension.
		 * @param display the {@link Display} for which the cursor will be created
		 * @param surface the cairo image surface containing the cursor pixel data
		 * @param _x the horizontal offset of the “hotspot” of the cursor
		 * @param _y the vertical offset of the “hotspot” of the cursor
		 * @returns a new {@link Cursor}.
		 */
		public static new_from_surface(display: Display, surface: cairo.Surface, _x: number, _y: number): Cursor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Device} instead.
	 */
	interface IDevice {
		/**
		 * Returns the associated device to #device, if #device is of type
		 * %GDK_DEVICE_TYPE_MASTER, it will return the paired pointer or
		 * keyboard.
		 * 
		 * If #device is of type %GDK_DEVICE_TYPE_SLAVE, it will return
		 * the master device to which #device is attached to.
		 * 
		 * If #device is of type %GDK_DEVICE_TYPE_FLOATING, %NULL will be
		 * returned, as there is no associated device.
		 * @returns The associated device, or
		 *   %NULL
		 */
		get_associated_device(): Device;
		/**
		 * Returns the axes currently available on the device.
		 * @returns 
		 */
		get_axes(): AxisFlags;
		/**
		 * Interprets an array of double as axis values for a given device,
		 * and locates the value in the array for a given axis use.
		 * @param axes pointer to an array of axes
		 * @param use the use to look for
		 * @param value location to store the found value.
		 * @returns %TRUE if the given axis use was found, otherwise %FALSE
		 */
		get_axis(axes: number[], use: AxisUse, value: number): boolean;
		/**
		 * Returns the axis use for #index_.
		 * @param index_ the index of the axis.
		 * @returns a {@link AxisUse} specifying how the axis is used.
		 */
		get_axis_use(index_: number): AxisUse;
		/**
		 * Interprets an array of double as axis values for a given device,
		 * and locates the value in the array for a given axis label, as returned
		 * by gdk_device_list_axes()
		 * @param axes pointer to an array of axes
		 * @param axis_label {@link Atom} with the axis label.
		 * @param value location to store the found value.
		 * @returns %TRUE if the given axis use was found, otherwise %FALSE.
		 */
		get_axis_value(axes: number[], axis_label: Atom, value: number): boolean;
		/**
		 * Returns the device type for #device.
		 * @returns the {@link DeviceType} for #device.
		 */
		get_device_type(): DeviceType;
		/**
		 * Returns the {@link Display} to which #device pertains.
		 * @returns a {@link Display}. This memory is owned
		 *          by GTK+, and must not be freed or unreffed.
		 */
		get_display(): Display;
		/**
		 * Determines whether the pointer follows device motion.
		 * This is not meaningful for keyboard devices, which don't have a pointer.
		 * @returns %TRUE if the pointer follows device motion
		 */
		get_has_cursor(): boolean;
		/**
		 * Obtains the motion history for a pointer device; given a starting and
		 * ending timestamp, return all events in the motion history for
		 * the device in the given range of time. Some windowing systems
		 * do not support motion history, in which case, %FALSE will
		 * be returned. (This is not distinguishable from the case where
		 * motion history is supported and no events were found.)
		 * 
		 * Note that there is also gdk_window_set_event_compression() to get
		 * more motion events delivered directly, independent of the windowing
		 * system.
		 * @param window the window with respect to which which the event coordinates will be reported
		 * @param start starting timestamp for range of events to return
		 * @param stop ending timestamp for the range of events to return
		 * @param events 
		 *   location to store a newly-allocated array of {@link TimeCoord}, or
		 *   %NULL
		 * @param n_events location to store the length of
		 *   #events, or %NULL
		 * @returns %TRUE if the windowing system supports motion history and
		 *  at least one event was found.
		 */
		get_history(window: Window, start: number, stop: number, events: TimeCoord[], n_events: number): boolean;
		/**
		 * If #index_ has a valid keyval, this function will return %TRUE
		 * and fill in #keyval and #modifiers with the keyval settings.
		 * @param index_ the index of the macro button to get.
		 * @param keyval return value for the keyval.
		 * @param modifiers return value for modifiers.
		 * @returns %TRUE if keyval is set for #index.
		 */
		get_key(index_: number, keyval: number, modifiers: ModifierType): boolean;
		/**
		 * Gets information about which window the given pointer device is in, based on events
		 * that have been received so far from the display server. If another application
		 * has a pointer grab, or this application has a grab with owner_events = %FALSE,
		 * %NULL may be returned even if the pointer is physically over one of this
		 * application's windows.
		 * @returns the last window the device
		 */
		get_last_event_window(): Window;
		/**
		 * Determines the mode of the device.
		 * @returns a {@link InputSource}
		 */
		get_mode(): InputMode;
		/**
		 * Returns the number of axes the device currently has.
		 * @returns the number of axes.
		 */
		get_n_axes(): number;
		/**
		 * Returns the number of keys the device currently has.
		 * @returns the number of keys.
		 */
		get_n_keys(): number;
		/**
		 * Determines the name of the device.
		 * @returns a name
		 */
		get_name(): string;
		/**
		 * Gets the current location of #device. As a slave device
		 * coordinates are those of its master pointer, This function
		 * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
		 * unless there is an ongoing grab on them, see gdk_device_grab().
		 * @param screen location to store the {@link Screen}
		 *          the #device is on, or %NULL.
		 * @param _x location to store root window X coordinate of #device, or %NULL.
		 * @param _y location to store root window Y coordinate of #device, or %NULL.
		 */
		get_position(screen: Screen, _x: number, _y: number): void;
		/**
		 * Gets the current location of #device in double precision. As a slave device's
		 * coordinates are those of its master pointer, this function
		 * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
		 * unless there is an ongoing grab on them. See gdk_device_grab().
		 * @param screen location to store the {@link Screen}
		 *          the #device is on, or %NULL.
		 * @param _x location to store root window X coordinate of #device, or %NULL.
		 * @param _y location to store root window Y coordinate of #device, or %NULL.
		 */
		get_position_double(screen: Screen, _x: number, _y: number): void;
		/**
		 * Returns the product ID of this device, or %NULL if this information couldn't
		 * be obtained. This ID is retrieved from the device, and is thus constant for
		 * it. See gdk_device_get_vendor_id() for more information.
		 * @returns the product ID, or %NULL
		 */
		get_product_id(): string;
		/**
		 * Returns the {@link Seat} the device belongs to.
		 * @returns A {@link Seat}. This memory is owned by GTK+ and
		 *          must not be freed.
		 */
		get_seat(): Seat;
		/**
		 * Determines the type of the device.
		 * @returns a {@link InputSource}
		 */
		get_source(): InputSource;
		/**
		 * Gets the current state of a pointer device relative to #window. As a slave
		 * device’s coordinates are those of its master pointer, this
		 * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
		 * unless there is an ongoing grab on them. See gdk_device_grab().
		 * @param window a {@link Window}.
		 * @param axes an array of doubles to store the values of
		 * the axes of #device in, or %NULL.
		 * @param mask location to store the modifiers, or %NULL.
		 */
		get_state(window: Window, axes: number[], mask: ModifierType): void;
		/**
		 * Returns the vendor ID of this device, or %NULL if this information couldn't
		 * be obtained. This ID is retrieved from the device, and is thus constant for
		 * it.
		 * 
		 * This function, together with gdk_device_get_product_id(), can be used to eg.
		 * compose #GSettings paths to store settings for this device.
		 * 
		 * |[<!-- language="C" -->
		 *  static GSettings *
		 *  get_device_settings (GdkDevice *device)
		 *  {
		 *    const gchar *vendor, *product;
		 *    GSettings *settings;
		 *    GdkDevice *device;
		 *    gchar *path;
		 * 
		 *    vendor = gdk_device_get_vendor_id (device);
		 *    product = gdk_device_get_product_id (device);
		 * 
		 *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
		 *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
		 *    g_free (path);
		 * 
		 *    return settings;
		 *  }
		 * ]|
		 * @returns the vendor ID, or %NULL
		 */
		get_vendor_id(): string;
		/**
		 * Obtains the window underneath #device, returning the location of the device in #win_x and #win_y. Returns
		 * %NULL if the window tree under #device is not known to GDK (for example, belongs to another application).
		 * 
		 * As a slave device coordinates are those of its master pointer, This
		 * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
		 * unless there is an ongoing grab on them, see gdk_device_grab().
		 * @param win_x return location for the X coordinate of the device location,
		 *         relative to the window origin, or %NULL.
		 * @param win_y return location for the Y coordinate of the device location,
		 *         relative to the window origin, or %NULL.
		 * @returns the {@link Window} under the
		 * device position, or %NULL.
		 */
		get_window_at_position(win_x: number, win_y: number): Window;
		/**
		 * Obtains the window underneath #device, returning the location of the device in #win_x and #win_y in
		 * double precision. Returns %NULL if the window tree under #device is not known to GDK (for example,
		 * belongs to another application).
		 * 
		 * As a slave device coordinates are those of its master pointer, This
		 * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
		 * unless there is an ongoing grab on them, see gdk_device_grab().
		 * @param win_x return location for the X coordinate of the device location,
		 *         relative to the window origin, or %NULL.
		 * @param win_y return location for the Y coordinate of the device location,
		 *         relative to the window origin, or %NULL.
		 * @returns the {@link Window} under the
		 *   device position, or %NULL.
		 */
		get_window_at_position_double(win_x: number, win_y: number): Window;
		/**
		 * Grabs the device so that all events coming from this device are passed to
		 * this application until the device is ungrabbed with gdk_device_ungrab(),
		 * or the window becomes unviewable. This overrides any previous grab on the device
		 * by this client.
		 * 
		 * Note that #device and #window need to be on the same display.
		 * 
		 * Device grabs are used for operations which need complete control over the
		 * given device events (either pointer or keyboard). For example in GTK+ this
		 * is used for Drag and Drop operations, popup menus and such.
		 * 
		 * Note that if the event mask of an X window has selected both button press
		 * and button release events, then a button press event will cause an automatic
		 * pointer grab until the button is released. X does this automatically since
		 * most applications expect to receive button press and release events in pairs.
		 * It is equivalent to a pointer grab on the window with #owner_events set to
		 * %TRUE.
		 * 
		 * If you set up anything at the time you take the grab that needs to be
		 * cleaned up when the grab ends, you should handle the {@link EventGrabBroken}
		 * events that are emitted when the grab ends unvoluntarily.
		 * @param window the {@link Window} which will own the grab (the grab window)
		 * @param grab_ownership specifies the grab ownership.
		 * @param owner_events if %FALSE then all device events are reported with respect to
		 *                #window and are only reported if selected by #event_mask. If
		 *                %TRUE then pointer events for this application are reported
		 *                as normal, but pointer events outside this application are
		 *                reported with respect to #window and only if selected by
		 *                #event_mask. In either mode, unreported events are discarded.
		 * @param event_mask specifies the event mask, which is used in accordance with
		 *              #owner_events.
		 * @param cursor the cursor to display while the grab is active if the device is
		 *          a pointer. If this is %NULL then the normal cursors are used for
		 *          #window and its descendants, and the cursor for #window is used
		 *          elsewhere.
		 * @param time_ the timestamp of the event which led to this pointer grab. This
		 *         usually comes from the {@link Event} struct, though %GDK_CURRENT_TIME
		 *         can be used if the time isn’t known.
		 * @returns %GDK_GRAB_SUCCESS if the grab was successful.
		 */
		grab(window: Window, grab_ownership: GrabOwnership, owner_events: boolean, event_mask: EventMask, cursor: Cursor, time_: number): GrabStatus;
		/**
		 * Returns a #GList of {@link Atoms}, containing the labels for
		 * the axes that #device currently has.
		 * @returns 
		 *     A #GList of {@link Atoms}, free with g_list_free().
		 */
		list_axes(): GLib.List;
		/**
		 * If the device if of type %GDK_DEVICE_TYPE_MASTER, it will return
		 * the list of slave devices attached to it, otherwise it will return
		 * %NULL
		 * @returns 
		 *          the list of slave devices, or %NULL. The list must be
		 *          freed with g_list_free(), the contents of the list are
		 *          owned by GTK+ and should not be freed.
		 */
		list_slave_devices(): GLib.List;
		/**
		 * Specifies how an axis of a device is used.
		 * @param index_ the index of the axis
		 * @param use specifies how the axis is used
		 */
		set_axis_use(index_: number, use: AxisUse): void;
		/**
		 * Specifies the X key event to generate when a macro button of a device
		 * is pressed.
		 * @param index_ the index of the macro button to set
		 * @param keyval the keyval to generate
		 * @param modifiers the modifiers to set
		 */
		set_key(index_: number, keyval: number, modifiers: ModifierType): void;
		/**
		 * Sets a the mode of an input device. The mode controls if the
		 * device is active and whether the device’s range is mapped to the
		 * entire screen or to a single window.
		 * 
		 * Note: This is only meaningful for floating devices, master devices (and
		 * slaves connected to these) drive the pointer cursor, which is not limited
		 * by the input mode.
		 * @param mode the input mode.
		 * @returns %TRUE if the mode was successfully changed.
		 */
		set_mode(mode: InputMode): boolean;
		/**
		 * Release any grab on #device.
		 * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
		 */
		ungrab(time_: number): void;
		/**
		 * Warps #device in #display to the point #x,#y on
		 * the screen #screen, unless the device is confined
		 * to a window by a grab, in which case it will be moved
		 * as far as allowed by the grab. Warping the pointer
		 * creates events as if the user had moved the mouse
		 * instantaneously to the destination.
		 * 
		 * Note that the pointer should normally be under the
		 * control of the user. This function was added to cover
		 * some rare use cases like keyboard navigation support
		 * for the color picker in the #GtkColorSelectionDialog.
		 * @param screen the screen to warp #device to.
		 * @param _x the X coordinate of the destination.
		 * @param _y the Y coordinate of the destination.
		 */
		warp(screen: Screen, _x: number, _y: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Device} instead.
	 */
	type DeviceMixin = IDevice & GObject.IObject;

	/**
	 * The {@link Device} object represents a single input device, such
	 * as a keyboard, a mouse, a touchpad, etc.
	 * 
	 * See the #GdkDeviceManager documentation for more information
	 * about the various kinds of master and slave devices, and their
	 * relationships.
	 */
	interface Device extends DeviceMixin {}

	class Device {
		public constructor();
		/**
		 * Frees an array of {@link TimeCoord} that was returned by gdk_device_get_history().
		 * @param events an array of {@link TimeCoord}.
		 * @param n_events the length of the array.
		 */
		public static free_history(events: TimeCoord[], n_events: number): void;
		/**
		 * Determines information about the current keyboard grab.
		 * This is not public API and must not be used by applications.
		 * @param display the display for which to get the grab information
		 * @param device device to get the grab information from
		 * @param grab_window location to store current grab window
		 * @param owner_events location to store boolean indicating whether
		 *   the #owner_events flag to gdk_keyboard_grab() or
		 *   gdk_pointer_grab() was %TRUE.
		 * @returns %TRUE if this application currently has the
		 *  keyboard grabbed.
		 */
		public static grab_info_libgtk_only(display: Display, device: Device, grab_window: Window, owner_events: boolean): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeviceManager} instead.
	 */
	interface IDeviceManager {
		/**
		 * Returns the client pointer, that is, the master pointer that acts as the core pointer
		 * for this application. In X11, window managers may change this depending on the interaction
		 * pattern under the presence of several pointers.
		 * 
		 * You should use this function seldomly, only in code that isn’t triggered by a {@link Event}
		 * and there aren’t other means to get a meaningful #GdkDevice to operate on.
		 * @returns The client pointer. This memory is
		 *          owned by GDK and must not be freed or unreferenced.
		 */
		get_client_pointer(): Device;
		/**
		 * Gets the {@link Display} associated to #device_manager.
		 * @returns the {@link Display} to which
		 *          #device_manager is associated to, or %NULL. This memory is
		 *          owned by GDK and must not be freed or unreferenced.
		 */
		get_display(): Display;
		/**
		 * Returns the list of devices of type #type currently attached to
		 * #device_manager.
		 * @param _type device type to get.
		 * @returns a list of
		 *          {@link Devices}. The returned list must be
		 *          freed with g_list_free (). The list elements are owned by
		 *          GTK+ and must not be freed or unreffed.
		 */
		list_devices(_type: DeviceType): GLib.List;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeviceManager} instead.
	 */
	type DeviceManagerMixin = IDeviceManager & GObject.IObject;

	/**
	 * In addition to a single pointer and keyboard for user interface input,
	 * GDK contains support for a variety of input devices, including graphics
	 * tablets, touchscreens and multiple pointers/keyboards interacting
	 * simultaneously with the user interface. Such input devices often have
	 * additional features, such as sub-pixel positioning information and
	 * additional device-dependent information.
	 * 
	 * In order to query the device hierarchy and be aware of changes in the
	 * device hierarchy (such as virtual devices being created or removed, or
	 * physical devices being plugged or unplugged), GDK provides
	 * {@link DeviceManager}.
	 * 
	 * By default, and if the platform supports it, GDK is aware of multiple
	 * keyboard/pointer pairs and multitouch devices. This behavior can be
	 * changed by calling gdk_disable_multidevice() before gdk_display_open().
	 * There should rarely be a need to do that though, since GDK defaults
	 * to a compatibility mode in which it will emit just one enter/leave
	 * event pair for all devices on a window. To enable per-device
	 * enter/leave events and other multi-pointer interaction features,
	 * gdk_window_set_support_multidevice() must be called on
	 * #GdkWindows (or gtk_widget_set_support_multidevice() on widgets).
	 * window. See the gdk_window_set_support_multidevice() documentation
	 * for more information.
	 * 
	 * On X11, multi-device support is implemented through XInput 2.
	 * Unless gdk_disable_multidevice() is called, the XInput 2
	 * #GdkDeviceManager implementation will be used as the input source.
	 * Otherwise either the core or XInput 1 implementations will be used.
	 * 
	 * For simple applications that don’t have any special interest in
	 * input devices, the so-called “client pointer”
	 * provides a reasonable approximation to a simple setup with a single
	 * pointer and keyboard. The device that has been set as the client
	 * pointer can be accessed via gdk_device_manager_get_client_pointer().
	 * 
	 * Conceptually, in multidevice mode there are 2 device types. Virtual
	 * devices (or master devices) are represented by the pointer cursors
	 * and keyboard foci that are seen on the screen. Physical devices (or
	 * slave devices) represent the hardware that is controlling the virtual
	 * devices, and thus have no visible cursor on the screen.
	 * 
	 * Virtual devices are always paired, so there is a keyboard device for every
	 * pointer device. Associations between devices may be inspected through
	 * gdk_device_get_associated_device().
	 * 
	 * There may be several virtual devices, and several physical devices could
	 * be controlling each of these virtual devices. Physical devices may also
	 * be “floating”, which means they are not attached to any virtual device.
	 * 
	 * # Master and slave devices
	 * 
	 * |[
	 * carlos#sacarino:~$ xinput list
	 * ⎡ Virtual core pointer                          id=2    [master pointer  (3)]
	 * ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
	 * ⎜   ↳ Wacom ISDv4 E6 Pen stylus                 id=10   [slave  pointer  (2)]
	 * ⎜   ↳ Wacom ISDv4 E6 Finger touch               id=11   [slave  pointer  (2)]
	 * ⎜   ↳ SynPS/2 Synaptics TouchPad                id=13   [slave  pointer  (2)]
	 * ⎜   ↳ TPPS/2 IBM TrackPoint                     id=14   [slave  pointer  (2)]
	 * ⎜   ↳ Wacom ISDv4 E6 Pen eraser                 id=16   [slave  pointer  (2)]
	 * ⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
	 *     ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
	 *     ↳ Power Button                              id=6    [slave  keyboard (3)]
	 *     ↳ Video Bus                                 id=7    [slave  keyboard (3)]
	 *     ↳ Sleep Button                              id=8    [slave  keyboard (3)]
	 *     ↳ Integrated Camera                         id=9    [slave  keyboard (3)]
	 *     ↳ AT Translated Set 2 keyboard              id=12   [slave  keyboard (3)]
	 *     ↳ ThinkPad Extra Buttons                    id=15   [slave  keyboard (3)]
	 * ]|
	 * 
	 * By default, GDK will automatically listen for events coming from all
	 * master devices, setting the #GdkDevice for all events coming from input
	 * devices. Events containing device information are #GDK_MOTION_NOTIFY,
	 * #GDK_BUTTON_PRESS, #GDK_2BUTTON_PRESS, #GDK_3BUTTON_PRESS,
	 * #GDK_BUTTON_RELEASE, #GDK_SCROLL, #GDK_KEY_PRESS, #GDK_KEY_RELEASE,
	 * #GDK_ENTER_NOTIFY, #GDK_LEAVE_NOTIFY, #GDK_FOCUS_CHANGE,
	 * #GDK_PROXIMITY_IN, #GDK_PROXIMITY_OUT, #GDK_DRAG_ENTER, #GDK_DRAG_LEAVE,
	 * #GDK_DRAG_MOTION, #GDK_DRAG_STATUS, #GDK_DROP_START, #GDK_DROP_FINISHED
	 * and #GDK_GRAB_BROKEN. When dealing with an event on a master device,
	 * it is possible to get the source (slave) device that the event originated
	 * from via gdk_event_get_source_device().
	 * 
	 * On a standard session, all physical devices are connected by default to
	 * the "Virtual Core Pointer/Keyboard" master devices, hence routing all events
	 * through these. This behavior is only modified by device grabs, where the
	 * slave device is temporarily detached for as long as the grab is held, and
	 * more permanently by user modifications to the device hierarchy.
	 * 
	 * On certain application specific setups, it may make sense
	 * to detach a physical device from its master pointer, and mapping it to
	 * an specific window. This can be achieved by the combination of
	 * gdk_device_grab() and gdk_device_set_mode().
	 * 
	 * In order to listen for events coming from devices
	 * other than a virtual device, gdk_window_set_device_events() must be
	 * called. Generally, this function can be used to modify the event mask
	 * for any given device.
	 * 
	 * Input devices may also provide additional information besides X/Y.
	 * For example, graphics tablets may also provide pressure and X/Y tilt
	 * information. This information is device-dependent, and may be
	 * queried through gdk_device_get_axis(). In multidevice mode, virtual
	 * devices will change axes in order to always represent the physical
	 * device that is routing events through it. Whenever the physical device
	 * changes, the #GdkDevice:n-axes property will be notified, and
	 * gdk_device_list_axes() will return the new device axes.
	 * 
	 * Devices may also have associated “keys” or
	 * macro buttons. Such keys can be globally set to map into normal X
	 * keyboard events. The mapping is set using gdk_device_set_key().
	 * 
	 * In GTK+ 3.20, a new #GdkSeat object has been introduced that
	 * supersedes #GdkDeviceManager and should be preferred in newly
	 * written code.
	 */
	interface DeviceManager extends DeviceManagerMixin {}

	class DeviceManager {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeviceTool} instead.
	 */
	interface IDeviceTool {
		/**
		 * Gets the hardware ID of this tool, or 0 if it's not known. When
		 * non-zero, the identificator is unique for the given tool model,
		 * meaning that two identical tools will share the same #hardware_id,
		 * but will have different serial numbers (see gdk_device_tool_get_serial()).
		 * 
		 * This is a more concrete (and device specific) method to identify
		 * a {@link DeviceTool} than gdk_device_tool_get_tool_type(), as a tablet
		 * may support multiple devices with the same #GdkDeviceToolType,
		 * but having different hardware identificators.
		 * @returns The hardware identificator of this tool.
		 */
		get_hardware_id(): number;
		/**
		 * Gets the serial of this tool, this value can be used to identify a
		 * physical tool (eg. a tablet pen) across program executions.
		 * @returns The serial ID for this tool
		 */
		get_serial(): number;
		/**
		 * Gets the {@link DeviceToolType} of the tool.
		 * @returns The physical type for this tool. This can be used to figure out what
		 * sort of pen is being used, such as an airbrush or a pencil.
		 */
		get_tool_type(): DeviceToolType;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeviceTool} instead.
	 */
	type DeviceToolMixin = IDeviceTool & GObject.IObject;

	interface DeviceTool extends DeviceToolMixin {}

	class DeviceTool {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Display} instead.
	 */
	interface IDisplay {
		/**
		 * Emits a short beep on #display
		 */
		beep(): void;
		/**
		 * Closes the connection to the windowing system for the given display,
		 * and cleans up associated resources.
		 */
		close(): void;
		/**
		 * Returns %TRUE if there is an ongoing grab on #device for #display.
		 * @param device a {@link Device}
		 * @returns %TRUE if there is a grab in effect for #device.
		 */
		device_is_grabbed(device: Device): boolean;
		/**
		 * Flushes any requests queued for the windowing system; this happens automatically
		 * when the main loop blocks waiting for new events, but if your application
		 * is drawing without returning control to the main loop, you may need
		 * to call this function explicitly. A common case where this function
		 * needs to be called is when an application is executing drawing commands
		 * from a thread other than the thread where the main loop is running.
		 * 
		 * This is most useful for X11. On windowing systems where requests are
		 * handled synchronously, this function will do nothing.
		 */
		flush(): void;
		/**
		 * Returns a {@link AppLaunchContext} suitable for launching
		 * applications on the given display.
		 * @returns a new {@link AppLaunchContext} for #display.
		 *     Free with g_object_unref() when done
		 */
		get_app_launch_context(): AppLaunchContext;
		/**
		 * Returns the default size to use for cursors on #display.
		 * @returns the default cursor size.
		 */
		get_default_cursor_size(): number;
		/**
		 * Returns the default group leader window for all toplevel windows
		 * on #display. This window is implicitly created by GDK.
		 * See gdk_window_set_group().
		 * @returns The default group leader window
		 * for #display
		 */
		get_default_group(): Window;
		/**
		 * Get the default {@link Screen} for #display.
		 * @returns the default {@link Screen} object for #display
		 */
		get_default_screen(): Screen;
		/**
		 * Returns the default {@link Seat} for this display.
		 * @returns the default seat.
		 */
		get_default_seat(): Seat;
		/**
		 * Returns the {@link DeviceManager} associated to #display.
		 * @returns A {@link DeviceManager}, or
		 *          %NULL. This memory is owned by GDK and must not be freed
		 *          or unreferenced.
		 */
		get_device_manager(): DeviceManager;
		/**
		 * Gets the next {@link Event} to be processed for #display, fetching events from the
		 * windowing system if necessary.
		 * @returns the next {@link Event} to be processed, or %NULL
		 * if no events are pending. The returned #GdkEvent should be freed
		 * with gdk_event_free().
		 */
		get_event(): Event;
		/**
		 * Gets the maximal size to use for cursors on #display.
		 * @param width the return location for the maximal cursor width
		 * @param height the return location for the maximal cursor height
		 */
		get_maximal_cursor_size(width: number, height: number): void;
		/**
		 * Gets a monitor associated with this display.
		 * @param monitor_num number of the monitor
		 * @returns the {@link Monitor}, or %NULL if
		 *    #monitor_num is not a valid monitor number
		 */
		get_monitor(monitor_num: number): Monitor;
		/**
		 * Gets the monitor in which the point (#x, #y) is located,
		 * or a nearby monitor if the point is not in any monitor.
		 * @param _x the x coordinate of the point
		 * @param _y the y coordinate of the point
		 * @returns the monitor containing the point
		 */
		get_monitor_at_point(_x: number, _y: number): Monitor;
		/**
		 * Gets the monitor in which the largest area of #window
		 * resides, or a monitor close to #window if it is outside
		 * of all monitors.
		 * @param window a {@link Window}
		 * @returns the monitor with the largest overlap with #window
		 */
		get_monitor_at_window(window: Window): Monitor;
		/**
		 * Gets the number of monitors that belong to #display.
		 * 
		 * The returned number is valid until the next emission of the
		 * {@link Display}::monitor-added or #GdkDisplay::monitor-removed signal.
		 * @returns the number of monitors
		 */
		get_n_monitors(): number;
		/**
		 * Gets the number of screen managed by the #display.
		 * @returns number of screens.
		 */
		get_n_screens(): number;
		/**
		 * Gets the name of the display.
		 * @returns a string representing the display name. This string is owned
		 * by GDK and should not be modified or freed.
		 */
		get_name(): string;
		/**
		 * Gets the current location of the pointer and the current modifier
		 * mask for a given display.
		 * @param screen location to store the screen that the
		 *          cursor is on, or %NULL.
		 * @param _x location to store root window X coordinate of pointer, or %NULL.
		 * @param _y location to store root window Y coordinate of pointer, or %NULL.
		 * @param mask location to store current modifier mask, or %NULL
		 */
		get_pointer(screen: Screen, _x: number, _y: number, mask: ModifierType): void;
		/**
		 * Gets the primary monitor for the display.
		 * 
		 * The primary monitor is considered the monitor where the “main desktop”
		 * lives. While normal application windows typically allow the window
		 * manager to place the windows, specialized desktop applications
		 * such as panels should place themselves on the primary monitor.
		 * @returns the primary monitor, or %NULL if no primary
		 *     monitor is configured by the user
		 */
		get_primary_monitor(): Monitor;
		/**
		 * Returns a screen object for one of the screens of the display.
		 * @param screen_num the screen number
		 * @returns the {@link Screen} object
		 */
		get_screen(screen_num: number): Screen;
		/**
		 * Obtains the window underneath the mouse pointer, returning the location
		 * of the pointer in that window in #win_x, #win_y for #screen. Returns %NULL
		 * if the window under the mouse pointer is not known to GDK (for example,
		 * belongs to another application).
		 * @param win_x return location for x coordinate of the pointer location relative
		 *    to the window origin, or %NULL
		 * @param win_y return location for y coordinate of the pointer location relative
		 *  &    to the window origin, or %NULL
		 * @returns the window under the mouse
		 *   pointer, or %NULL
		 */
		get_window_at_pointer(win_x: number, win_y: number): Window;
		/**
		 * Returns whether the display has events that are waiting
		 * to be processed.
		 * @returns %TRUE if there are events ready to be processed.
		 */
		has_pending(): boolean;
		/**
		 * Finds out if the display has been closed.
		 * @returns %TRUE if the display is closed.
		 */
		is_closed(): boolean;
		/**
		 * Release any keyboard grab
		 * @param time_ a timestap (e.g #GDK_CURRENT_TIME).
		 */
		keyboard_ungrab(time_: number): void;
		/**
		 * Returns the list of available input devices attached to #display.
		 * The list is statically allocated and should not be freed.
		 * @returns 
		 *     a list of {@link Device}
		 */
		list_devices(): GLib.List;
		/**
		 * Returns the list of seats known to #display.
		 * @returns the
		 *          list of seats known to the {@link Display}
		 */
		list_seats(): GLib.List;
		/**
		 * Indicates to the GUI environment that the application has
		 * finished loading, using a given identifier.
		 * 
		 * GTK+ will call this function automatically for #GtkWindow
		 * with custom startup-notification identifier unless
		 * gtk_window_set_auto_startup_notification() is called to
		 * disable that feature.
		 * @param startup_id a startup-notification identifier, for which
		 *     notification process should be completed
		 */
		notify_startup_complete(startup_id: string): void;
		/**
		 * Gets a copy of the first {@link Event} in the #display’s event queue, without
		 * removing the event from the queue.  (Note that this function will
		 * not get more events from the windowing system.  It only checks the events
		 * that have already been moved to the GDK event queue.)
		 * @returns a copy of the first {@link Event} on the event
		 * queue, or %NULL if no events are in the queue. The returned
		 * #GdkEvent should be freed with gdk_event_free().
		 */
		peek_event(): Event;
		/**
		 * Test if the pointer is grabbed.
		 * @returns %TRUE if an active X pointer grab is in effect
		 */
		pointer_is_grabbed(): boolean;
		/**
		 * Release any pointer grab.
		 * @param time_ a timestap (e.g. %GDK_CURRENT_TIME).
		 */
		pointer_ungrab(time_: number): void;
		/**
		 * Appends a copy of the given event onto the front of the event
		 * queue for #display.
		 * @param event a {@link Event}.
		 */
		put_event(event: Event): void;
		/**
		 * Request {@link EventOwnerChange} events for ownership changes
		 * of the selection named by the given atom.
		 * @param selection the {@link Atom} naming the selection for which
		 *             ownership change notification is requested
		 * @returns whether {@link EventOwnerChange} events will
		 *               be sent.
		 */
		request_selection_notification(selection: Atom): boolean;
		/**
		 * Sets the double click distance (two clicks within this distance
		 * count as a double click and result in a #GDK_2BUTTON_PRESS event).
		 * See also gdk_display_set_double_click_time().
		 * Applications should not set this, it is a global
		 * user-configured setting.
		 * @param distance distance in pixels
		 */
		set_double_click_distance(distance: number): void;
		/**
		 * Sets the double click time (two clicks within this time interval
		 * count as a double click and result in a #GDK_2BUTTON_PRESS event).
		 * Applications should not set this, it is a global
		 * user-configured setting.
		 * @param msec double click time in milliseconds (thousandths of a second)
		 */
		set_double_click_time(msec: number): void;
		/**
		 * Issues a request to the clipboard manager to store the
		 * clipboard data. On X11, this is a special program that works
		 * according to the
		 * [FreeDesktop Clipboard Specification](http://www.freedesktop.org/Standards/clipboard-manager-spec).
		 * @param clipboard_window a {@link Window} belonging to the clipboard owner
		 * @param time_ a timestamp
		 * @param targets an array of targets
		 *                    that should be saved, or %NULL
		 *                    if all available targets should be saved.
		 * @param n_targets length of the #targets array
		 */
		store_clipboard(clipboard_window: Window, time_: number, targets: Atom[], n_targets: number): void;
		/**
		 * Returns whether the speicifed display supports clipboard
		 * persistance; i.e. if it’s possible to store the clipboard data after an
		 * application has quit. On X11 this checks if a clipboard daemon is
		 * running.
		 * @returns %TRUE if the display supports clipboard persistance.
		 */
		supports_clipboard_persistence(): boolean;
		/**
		 * Returns %TRUE if gdk_window_set_composited() can be used
		 * to redirect drawing on the window using compositing.
		 * 
		 * Currently this only works on X11 with XComposite and
		 * XDamage extensions available.
		 * @returns %TRUE if windows may be composited.
		 */
		supports_composite(): boolean;
		/**
		 * Returns %TRUE if cursors can use an 8bit alpha channel
		 * on #display. Otherwise, cursors are restricted to bilevel
		 * alpha (i.e. a mask).
		 * @returns whether cursors can have alpha channels.
		 */
		supports_cursor_alpha(): boolean;
		/**
		 * Returns %TRUE if multicolored cursors are supported
		 * on #display. Otherwise, cursors have only a forground
		 * and a background color.
		 * @returns whether cursors can have multiple colors.
		 */
		supports_cursor_color(): boolean;
		/**
		 * Returns %TRUE if gdk_window_input_shape_combine_mask() can
		 * be used to modify the input shape of windows on #display.
		 * @returns %TRUE if windows with modified input shape are supported
		 */
		supports_input_shapes(): boolean;
		/**
		 * Returns whether {@link EventOwnerChange} events will be
		 * sent when the owner of a selection changes.
		 * @returns whether {@link EventOwnerChange} events will
		 *               be sent.
		 */
		supports_selection_notification(): boolean;
		/**
		 * Returns %TRUE if gdk_window_shape_combine_mask() can
		 * be used to create shaped windows on #display.
		 * @returns %TRUE if shaped windows are supported
		 */
		supports_shapes(): boolean;
		/**
		 * Flushes any requests queued for the windowing system and waits until all
		 * requests have been handled. This is often used for making sure that the
		 * display is synchronized with the current state of the program. Calling
		 * gdk_display_sync() before gdk_error_trap_pop() makes sure that any errors
		 * generated from earlier requests are handled before the error trap is
		 * removed.
		 * 
		 * This is most useful for X11. On windowing systems where requests are
		 * handled synchronously, this function will do nothing.
		 */
		sync(): void;
		/**
		 * Warps the pointer of #display to the point #x,#y on
		 * the screen #screen, unless the pointer is confined
		 * to a window by a grab, in which case it will be moved
		 * as far as allowed by the grab. Warping the pointer
		 * creates events as if the user had moved the mouse
		 * instantaneously to the destination.
		 * 
		 * Note that the pointer should normally be under the
		 * control of the user. This function was added to cover
		 * some rare use cases like keyboard navigation support
		 * for the color picker in the #GtkColorSelectionDialog.
		 * @param screen the screen of #display to warp the pointer to
		 * @param _x the x coordinate of the destination
		 * @param _y the y coordinate of the destination
		 */
		warp_pointer(screen: Screen, _x: number, _y: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Display} instead.
	 */
	type DisplayMixin = IDisplay & GObject.IObject;

	/**
	 * {@link Display} objects purpose are two fold:
	 * 
	 * - To manage and provide information about input devices (pointers and keyboards)
	 * 
	 * - To manage and provide information about the available #GdkScreens
	 * 
	 * GdkDisplay objects are the GDK representation of an X Display,
	 * which can be described as a workstation consisting of
	 * a keyboard, a pointing device (such as a mouse) and one or more
	 * screens.
	 * It is used to open and keep track of various GdkScreen objects
	 * currently instantiated by the application. It is also used to
	 * access the keyboard(s) and mouse pointer(s) of the display.
	 * 
	 * Most of the input device handling has been factored out into
	 * the separate #GdkDeviceManager object. Every display has a
	 * device manager, which you can obtain using
	 * gdk_display_get_device_manager().
	 */
	interface Display extends DisplayMixin {}

	class Display {
		public constructor();
		/**
		 * Gets the default {@link Display}. This is a convenience
		 * function for:
		 * `gdk_display_manager_get_default_display (gdk_display_manager_get ())`.
		 * @returns a {@link Display}, or %NULL if
		 *   there is no default display.
		 */
		public static get_default(): Display;
		/**
		 * Opens a display.
		 * @param display_name the name of the display to open
		 * @returns a {@link Display}, or %NULL if the
		 *     display could not be opened
		 */
		public static open(display_name: string): Display;
		/**
		 * Opens the default display specified by command line arguments or
		 * environment variables, sets it as the default display, and returns
		 * it. gdk_parse_args() must have been called first. If the default
		 * display has previously been set, simply returns that. An internal
		 * function that should not be used by applications.
		 * @returns the default display, if it
		 *   could be opened, otherwise %NULL.
		 */
		public static open_default_libgtk_only(): Display;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DisplayManager} instead.
	 */
	interface IDisplayManager {
		/**
		 * Gets the default {@link Display}.
		 * @returns a {@link Display}, or %NULL if
		 *     there is no default display.
		 */
		get_default_display(): Display;
		/**
		 * List all currently open displays.
		 * @returns a newly
		 *     allocated #GSList of {@link Display} objects. Free with g_slist_free()
		 *     when you are done with it.
		 */
		list_displays(): GLib.SList;
		/**
		 * Opens a display.
		 * @param name the name of the display to open
		 * @returns a {@link Display}, or %NULL if the
		 *     display could not be opened
		 */
		open_display(name: string): Display;
		/**
		 * Sets #display as the default display.
		 * @param display a {@link Display}
		 */
		set_default_display(display: Display): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DisplayManager} instead.
	 */
	type DisplayManagerMixin = IDisplayManager & GObject.IObject;

	/**
	 * The purpose of the {@link DisplayManager} singleton object is to offer
	 * notification when displays appear or disappear or the default display
	 * changes.
	 * 
	 * You can use gdk_display_manager_get() to obtain the #GdkDisplayManager
	 * singleton, but that should be rarely necessary. Typically, initializing
	 * GTK+ opens a display that you can work with without ever accessing the
	 * #GdkDisplayManager.
	 * 
	 * The GDK library can be built with support for multiple backends.
	 * The #GdkDisplayManager object determines which backend is used
	 * at runtime.
	 * 
	 * When writing backend-specific code that is supposed to work with
	 * multiple GDK backends, you have to consider both compile time and
	 * runtime. At compile time, use the #GDK_WINDOWING_X11, #GDK_WINDOWING_WIN32
	 * macros, etc. to find out which backends are present in the GDK library
	 * you are building your application against. At runtime, use type-check
	 * macros like GDK_IS_X11_DISPLAY() to find out which backend is in use:
	 * 
	 * ## Backend-specific code ## {#backend-specific}
	 * 
	 * |[<!-- language="C" -->
	 * #ifdef GDK_WINDOWING_X11
	 *   if (GDK_IS_X11_DISPLAY (display))
	 *     {
	 *       // make X11-specific calls here
	 *     }
	 *   else
	 * #endif
	 * #ifdef GDK_WINDOWING_QUARTZ
	 *   if (GDK_IS_QUARTZ_DISPLAY (display))
	 *     {
	 *       // make Quartz-specific calls here
	 *     }
	 *   else
	 * #endif
	 *   g_error ("Unsupported GDK backend");
	 * ]|
	 */
	interface DisplayManager extends DisplayManagerMixin {}

	class DisplayManager {
		public constructor();
		/**
		 * Gets the singleton {@link DisplayManager} object.
		 * 
		 * When called for the first time, this function consults the
		 * `GDK_BACKEND` environment variable to find out which
		 * of the supported GDK backends to use (in case GDK has been compiled
		 * with multiple backends). Applications can use gdk_set_allowed_backends()
		 * to limit what backends can be used.
		 * @returns The global {@link DisplayManager} singleton;
		 *     gdk_parse_args(), gdk_init(), or gdk_init_check() must have
		 *     been called first.
		 */
		public static get(): DisplayManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DragContext} instead.
	 */
	interface IDragContext {
		/**
		 * Determines the bitmask of actions proposed by the source if
		 * gdk_drag_context_get_suggested_action() returns %GDK_ACTION_ASK.
		 * @returns the {@link DragAction} flags
		 */
		get_actions(): DragAction;
		/**
		 * Returns the destination window for the DND operation.
		 * @returns a {@link Window}
		 */
		get_dest_window(): Window;
		/**
		 * Returns the {@link Device} associated to the drag context.
		 * @returns The {@link Device} associated to #context.
		 */
		get_device(): Device;
		/**
		 * Returns the window on which the drag icon should be rendered
		 * during the drag operation. Note that the window may not be
		 * available until the drag operation has begun. GDK will move
		 * the window in accordance with the ongoing drag operation.
		 * The window is owned by #context and will be destroyed when
		 * the drag operation is over.
		 * @returns the drag window, or %NULL
		 */
		get_drag_window(): Window;
		/**
		 * Returns the drag protocol that is used by this context.
		 * @returns the drag protocol
		 */
		get_protocol(): DragProtocol;
		/**
		 * Determines the action chosen by the drag destination.
		 * @returns a {@link DragAction} value
		 */
		get_selected_action(): DragAction;
		/**
		 * Returns the {@link Window} where the DND operation started.
		 * @returns a {@link Window}
		 */
		get_source_window(): Window;
		/**
		 * Determines the suggested drag action of the context.
		 * @returns a {@link DragAction} value
		 */
		get_suggested_action(): DragAction;
		/**
		 * Retrieves the list of targets of the context.
		 * @returns a #GList of targets
		 */
		list_targets(): GLib.List;
		/**
		 * Requests the drag and drop operation to be managed by #context.
		 * When a drag and drop operation becomes managed, the {@link DragContext}
		 * will internally handle all input and source-side #GdkEventDND events
		 * as required by the windowing system.
		 * 
		 * Once the drag and drop operation is managed, the drag context will
		 * emit the following signals:
		 * - The #GdkDragContext::action-changed signal whenever the final action
		 *   to be performed by the drag and drop operation changes.
		 * - The #GdkDragContext::drop-performed signal after the user performs
		 *   the drag and drop gesture (typically by releasing the mouse button).
		 * - The #GdkDragContext::dnd-finished signal after the drag and drop
		 *   operation concludes (after all #GdkSelection transfers happen).
		 * - The #GdkDragContext::cancel signal if the drag and drop operation is
		 *   finished but doesn't happen over an accepting destination, or is
		 *   cancelled through other means.
		 * @param ipc_window Window to use for IPC messaging/events
		 * @param actions the actions supported by the drag source
		 * @returns #TRUE if the drag and drop operation is managed.
		 */
		manage_dnd(ipc_window: Window, actions: DragAction): boolean;
		/**
		 * Associates a {@link Device} to #context, so all Drag and Drop events
		 * for #context are emitted as if they came from this device.
		 * @param device a {@link Device}
		 */
		set_device(device: Device): void;
		/**
		 * Sets the position of the drag window that will be kept
		 * under the cursor hotspot. Initially, the hotspot is at the
		 * top left corner of the drag window.
		 * @param hot_x x coordinate of the drag window hotspot
		 * @param hot_y y coordinate of the drag window hotspot
		 */
		set_hotspot(hot_x: number, hot_y: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DragContext} instead.
	 */
	type DragContextMixin = IDragContext & GObject.IObject;

	interface DragContext extends DragContextMixin {}

	class DragContext {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DrawingContext} instead.
	 */
	interface IDrawingContext {
		/**
		 * Retrieves a Cairo context to be used to draw on the {@link Window}
		 * that created the #GdkDrawingContext.
		 * 
		 * The returned context is guaranteed to be valid as long as the
		 * #GdkDrawingContext is valid, that is between a call to
		 * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame().
		 * @returns a Cairo context to be used to draw
		 *   the contents of the {@link Window}. The context is owned by the
		 *   #GdkDrawingContext and should not be destroyed
		 */
		get_cairo_context(): cairo.Context;
		/**
		 * Retrieves a copy of the clip region used when creating the #context.
		 * @returns a Cairo region
		 */
		get_clip(): cairo.Region;
		/**
		 * Retrieves the window that created the drawing #context.
		 * @returns a {@link Window}
		 */
		get_window(): Window;
		/**
		 * Checks whether the given {@link DrawingContext} is valid.
		 * @returns %TRUE if the context is valid
		 */
		is_valid(): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DrawingContext} instead.
	 */
	type DrawingContextMixin = IDrawingContext & GObject.IObject;

	/**
	 * {@link DrawingContext} is an object that represents the current drawing
	 * state of a #GdkWindow.
	 * 
	 * It's possible to use a #GdkDrawingContext to draw on a #GdkWindow
	 * via rendering API like Cairo or OpenGL.
	 * 
	 * A #GdkDrawingContext can only be created by calling gdk_window_begin_draw_frame()
	 * and will be valid until a call to gdk_window_end_draw_frame().
	 * 
	 * #GdkDrawingContext is available since GDK 3.22
	 */
	interface DrawingContext extends DrawingContextMixin {}

	class DrawingContext {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FrameClock} instead.
	 */
	interface IFrameClock {
		/**
		 * Starts updates for an animation. Until a matching call to
		 * gdk_frame_clock_end_updating() is made, the frame clock will continually
		 * request a new frame with the %GDK_FRAME_CLOCK_PHASE_UPDATE phase.
		 * This function may be called multiple times and frames will be
		 * requested until gdk_frame_clock_end_updating() is called the same
		 * number of times.
		 */
		begin_updating(): void;
		/**
		 * Stops updates for an animation. See the documentation for
		 * gdk_frame_clock_begin_updating().
		 */
		end_updating(): void;
		/**
		 * Gets the frame timings for the current frame.
		 * @returns the {@link FrameTimings} for the
		 *  frame currently being processed, or even no frame is being
		 *  processed, for the previous frame. Before any frames have been
		 *  processed, returns %NULL.
		 */
		get_current_timings(): FrameTimings;
		/**
		 * A {@link FrameClock} maintains a 64-bit counter that increments for
		 * each frame drawn.
		 * @returns inside frame processing, the value of the frame counter
		 *  for the current frame. Outside of frame processing, the frame
		 *   counter for the last frame.
		 */
		get_frame_counter(): number;
		/**
		 * Gets the time that should currently be used for animations.  Inside
		 * the processing of a frame, it’s the time used to compute the
		 * animation position of everything in a frame. Outside of a frame, it's
		 * the time of the conceptual “previous frame,” which may be either
		 * the actual previous frame time, or if that’s too old, an updated
		 * time.
		 * @returns a timestamp in microseconds, in the timescale of
		 *  of g_get_monotonic_time().
		 */
		get_frame_time(): number;
		/**
		 * {@link FrameClock} internally keeps a history of #GdkFrameTimings
		 * objects for recent frames that can be retrieved with
		 * gdk_frame_clock_get_timings(). The set of stored frames
		 * is the set from the counter values given by
		 * gdk_frame_clock_get_history_start() and
		 * gdk_frame_clock_get_frame_counter(), inclusive.
		 * @returns the frame counter value for the oldest frame
		 *  that is available in the internal frame history of the
		 *  {@link FrameClock}.
		 */
		get_history_start(): number;
		/**
		 * Using the frame history stored in the frame clock, finds the last
		 * known presentation time and refresh interval, and assuming that
		 * presentation times are separated by the refresh interval,
		 * predicts a presentation time that is a multiple of the refresh
		 * interval after the last presentation time, and later than #base_time.
		 * @param base_time base time for determining a presentaton time
		 * @param refresh_interval_return a location to store the
		 * determined refresh interval, or %NULL. A default refresh interval of
		 * 1/60th of a second will be stored if no history is present.
		 * @param presentation_time_return a location to store the next
		 *  candidate presentation time after the given base time.
		 *  0 will be will be stored if no history is present.
		 */
		get_refresh_info(base_time: number, refresh_interval_return: number, presentation_time_return: number): void;
		/**
		 * Retrieves a {@link FrameTimings} object holding timing information
		 * for the current frame or a recent frame. The #GdkFrameTimings
		 * object may not yet be complete: see gdk_frame_timings_get_complete().
		 * @param frame_counter the frame counter value identifying the frame to
		 *  be received.
		 * @returns the {@link FrameTimings} object for
		 *  the specified frame, or %NULL if it is not available. See
		 *  gdk_frame_clock_get_history_start().
		 */
		get_timings(frame_counter: number): FrameTimings;
		/**
		 * Asks the frame clock to run a particular phase. The signal
		 * corresponding the requested phase will be emitted the next
		 * time the frame clock processes. Multiple calls to
		 * gdk_frame_clock_request_phase() will be combined together
		 * and only one frame processed. If you are displaying animated
		 * content and want to continually request the
		 * %GDK_FRAME_CLOCK_PHASE_UPDATE phase for a period of time,
		 * you should use gdk_frame_clock_begin_updating() instead, since
		 * this allows GTK+ to adjust system parameters to get maximally
		 * smooth animations.
		 * @param phase the phase that is requested
		 */
		request_phase(phase: FrameClockPhase): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FrameClock} instead.
	 */
	type FrameClockMixin = IFrameClock & GObject.IObject;

	/**
	 * A {@link FrameClock} tells the application when to update and repaint a
	 * window. This may be synced to the vertical refresh rate of the
	 * monitor, for example. Even when the frame clock uses a simple timer
	 * rather than a hardware-based vertical sync, the frame clock helps
	 * because it ensures everything paints at the same time (reducing the
	 * total number of frames). The frame clock can also automatically
	 * stop painting when it knows the frames will not be visible, or
	 * scale back animation framerates.
	 * 
	 * #GdkFrameClock is designed to be compatible with an OpenGL-based
	 * implementation or with mozRequestAnimationFrame in Firefox,
	 * for example.
	 * 
	 * A frame clock is idle until someone requests a frame with
	 * gdk_frame_clock_request_phase(). At some later point that makes
	 * sense for the synchronization being implemented, the clock will
	 * process a frame and emit signals for each phase that has been
	 * requested. (See the signals of the #GdkFrameClock class for
	 * documentation of the phases. %GDK_FRAME_CLOCK_PHASE_UPDATE and the
	 * #GdkFrameClock::update signal are most interesting for application
	 * writers, and are used to update the animations, using the frame time
	 * given by gdk_frame_clock_get_frame_time().
	 * 
	 * The frame time is reported in microseconds and generally in the same
	 * timescale as g_get_monotonic_time(), however, it is not the same
	 * as g_get_monotonic_time(). The frame time does not advance during
	 * the time a frame is being painted, and outside of a frame, an attempt
	 * is made so that all calls to gdk_frame_clock_get_frame_time() that
	 * are called at a “similar” time get the same value. This means that
	 * if different animations are timed by looking at the difference in
	 * time between an initial value from gdk_frame_clock_get_frame_time()
	 * and the value inside the #GdkFrameClock::update signal of the clock,
	 * they will stay exactly synchronized.
	 */
	interface FrameClock extends FrameClockMixin {}

	class FrameClock {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GLContext} instead.
	 */
	interface IGLContext {
		/**
		 * Retrieves the value set using gdk_gl_context_set_debug_enabled().
		 * @returns %TRUE if debugging is enabled
		 */
		get_debug_enabled(): boolean;
		/**
		 * Retrieves the {@link Display} the #context is created for
		 * @returns a {@link Display} or %NULL
		 */
		get_display(): Display;
		/**
		 * Retrieves the value set using gdk_gl_context_set_forward_compatible().
		 * @returns %TRUE if the context should be forward compatible
		 */
		get_forward_compatible(): boolean;
		/**
		 * Retrieves the major and minor version requested by calling
		 * gdk_gl_context_set_required_version().
		 * @param major return location for the major version to request
		 * @param minor return location for the minor version to request
		 */
		get_required_version(major: number, minor: number): void;
		/**
		 * Retrieves the {@link GLContext} that this #context share data with.
		 * @returns a {@link GLContext} or %NULL
		 */
		get_shared_context(): GLContext;
		/**
		 * Checks whether the #context is using an OpenGL or OpenGL ES profile.
		 * @returns %TRUE if the {@link GLContext} is using an OpenGL ES profile
		 */
		get_use_es(): boolean;
		/**
		 * Retrieves the OpenGL version of the #context.
		 * 
		 * The #context must be realized prior to calling this function.
		 * @param major return location for the major version
		 * @param minor return location for the minor version
		 */
		get_version(major: number, minor: number): void;
		/**
		 * Retrieves the {@link Window} used by the #context.
		 * @returns a {@link Window} or %NULL
		 */
		get_window(): Window;
		/**
		 * Whether the {@link GLContext} is in legacy mode or not.
		 * 
		 * The #GdkGLContext must be realized before calling this function.
		 * 
		 * When realizing a GL context, GDK will try to use the OpenGL 3.2 core
		 * profile; this profile removes all the OpenGL API that was deprecated
		 * prior to the 3.2 version of the specification. If the realization is
		 * successful, this function will return %FALSE.
		 * 
		 * If the underlying OpenGL implementation does not support core profiles,
		 * GDK will fall back to a pre-3.2 compatibility profile, and this function
		 * will return %TRUE.
		 * 
		 * You can use the value returned by this function to decide which kind
		 * of OpenGL API to use, or whether to do extension discovery, or what
		 * kind of shader programs to load.
		 * @returns %TRUE if the GL context is in legacy mode
		 */
		is_legacy(): boolean;
		/**
		 * Makes the #context the current one.
		 */
		make_current(): void;
		/**
		 * Realizes the given {@link GLContext}.
		 * 
		 * It is safe to call this function on a realized #GdkGLContext.
		 * @returns %TRUE if the context is realized
		 */
		realize(): boolean;
		/**
		 * Sets whether the {@link GLContext} should perform extra validations and
		 * run time checking. This is useful during development, but has
		 * additional overhead.
		 * 
		 * The #GdkGLContext must not be realized or made current prior to
		 * calling this function.
		 * @param enabled whether to enable debugging in the context
		 */
		set_debug_enabled(enabled: boolean): void;
		/**
		 * Sets whether the {@link GLContext} should be forward compatible.
		 * 
		 * Forward compatibile contexts must not support OpenGL functionality that
		 * has been marked as deprecated in the requested version; non-forward
		 * compatible contexts, on the other hand, must support both deprecated and
		 * non deprecated functionality.
		 * 
		 * The #GdkGLContext must not be realized or made current prior to calling
		 * this function.
		 * @param compatible whether the context should be forward compatible
		 */
		set_forward_compatible(compatible: boolean): void;
		/**
		 * Sets the major and minor version of OpenGL to request.
		 * 
		 * Setting #major and #minor to zero will use the default values.
		 * 
		 * The {@link GLContext} must not be realized or made current prior to calling
		 * this function.
		 * @param major the major version to request
		 * @param minor the minor version to request
		 */
		set_required_version(major: number, minor: number): void;
		/**
		 * Requests that GDK create a OpenGL ES context instead of an OpenGL one,
		 * if the platform and windowing system allows it.
		 * 
		 * The #context must not have been realized.
		 * 
		 * By default, GDK will attempt to automatically detect whether the
		 * underlying GL implementation is OpenGL or OpenGL ES once the #context
		 * is realized.
		 * 
		 * You should check the return value of gdk_gl_context_get_use_es() after
		 * calling gdk_gl_context_realize() to decide whether to use the OpenGL or
		 * OpenGL ES API, extensions, or shaders.
		 * @param use_es whether the context should use OpenGL ES instead of OpenGL,
		 *   or -1 to allow auto-detection
		 */
		set_use_es(use_es: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GLContext} instead.
	 */
	type GLContextMixin = IGLContext & GObject.IObject;

	/**
	 * {@link GLContext} is an object representing the platform-specific
	 * OpenGL drawing context.
	 * 
	 * #GdkGLContexts are created for a #GdkWindow using
	 * gdk_window_create_gl_context(), and the context will match
	 * the #GdkVisual of the window.
	 * 
	 * A #GdkGLContext is not tied to any particular normal framebuffer.
	 * For instance, it cannot draw to the #GdkWindow back buffer. The GDK
	 * repaint system is in full control of the painting to that. Instead,
	 * you can create render buffers or textures and use gdk_cairo_draw_from_gl()
	 * in the draw function of your widget to draw them. Then GDK will handle
	 * the integration of your rendering with that of other widgets.
	 * 
	 * Support for #GdkGLContext is platform-specific, context creation
	 * can fail, returning %NULL context.
	 * 
	 * A #GdkGLContext has to be made "current" in order to start using
	 * it, otherwise any OpenGL call will be ignored.
	 * 
	 * ## Creating a new OpenGL context ##
	 * 
	 * In order to create a new #GdkGLContext instance you need a
	 * #GdkWindow, which you typically get during the realize call
	 * of a widget.
	 * 
	 * A #GdkGLContext is not realized until either gdk_gl_context_make_current(),
	 * or until it is realized using gdk_gl_context_realize(). It is possible to
	 * specify details of the GL context like the OpenGL version to be used, or
	 * whether the GL context should have extra state validation enabled after
	 * calling gdk_window_create_gl_context() by calling gdk_gl_context_realize().
	 * If the realization fails you have the option to change the settings of the
	 * #GdkGLContext and try again.
	 * 
	 * ## Using a GdkGLContext ##
	 * 
	 * You will need to make the #GdkGLContext the current context
	 * before issuing OpenGL calls; the system sends OpenGL commands to
	 * whichever context is current. It is possible to have multiple
	 * contexts, so you always need to ensure that the one which you
	 * want to draw with is the current one before issuing commands:
	 * 
	 * |[<!-- language="C" -->
	 *   gdk_gl_context_make_current (context);
	 * ]|
	 * 
	 * You can now perform your drawing using OpenGL commands.
	 * 
	 * You can check which #GdkGLContext is the current one by using
	 * gdk_gl_context_get_current(); you can also unset any #GdkGLContext
	 * that is currently set by calling gdk_gl_context_clear_current().
	 */
	interface GLContext extends GLContextMixin {}

	class GLContext {
		public constructor();
		/**
		 * Clears the current {@link GLContext}.
		 * 
		 * Any OpenGL call after this function returns will be ignored
		 * until gdk_gl_context_make_current() is called.
		 */
		public static clear_current(): void;
		/**
		 * Retrieves the current {@link GLContext}.
		 * @returns the current {@link GLContext}, or %NULL
		 */
		public static get_current(): GLContext;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Keymap} instead.
	 */
	interface IKeymap {
		/**
		 * Maps the non-virtual modifiers (i.e Mod2, Mod3, ...) which are set
		 * in #state to the virtual modifiers (i.e. Super, Hyper and Meta) and
		 * set the corresponding bits in #state.
		 * 
		 * GDK already does this before delivering key events, but for
		 * compatibility reasons, it only sets the first virtual modifier
		 * it finds, whereas this function sets all matching virtual modifiers.
		 * 
		 * This function is useful when matching key events against
		 * accelerators.
		 * @param state pointer to the modifier mask to change
		 */
		add_virtual_modifiers(state: ModifierType): void;
		/**
		 * Returns whether the Caps Lock modifer is locked.
		 * @returns %TRUE if Caps Lock is on
		 */
		get_caps_lock_state(): boolean;
		/**
		 * Returns the direction of effective layout of the keymap.
		 * @returns %PANGO_DIRECTION_LTR or %PANGO_DIRECTION_RTL
		 *   if it can determine the direction. %PANGO_DIRECTION_NEUTRAL
		 *   otherwise.
		 */
		get_direction(): Pango.Direction;
		/**
		 * Returns the keyvals bound to #hardware_keycode.
		 * The Nth {@link KeymapKey} in #keys is bound to the Nth
		 * keyval in #keyvals. Free the returned arrays with g_free().
		 * When a keycode is pressed by the user, the keyval from
		 * this list of entries is selected by considering the effective
		 * keyboard group and level. See gdk_keymap_translate_keyboard_state().
		 * @param hardware_keycode a keycode
		 * @param keys return
		 *     location for array of {@link KeymapKey}, or %NULL
		 * @param keyvals return
		 *     location for array of keyvals, or %NULL
		 * @param n_entries length of #keys and #keyvals
		 * @returns %TRUE if there were any entries
		 */
		get_entries_for_keycode(hardware_keycode: number, keys: KeymapKey[], keyvals: number[], n_entries: number): boolean;
		/**
		 * Obtains a list of keycode/group/level combinations that will
		 * generate #keyval. Groups and levels are two kinds of keyboard mode;
		 * in general, the level determines whether the top or bottom symbol
		 * on a key is used, and the group determines whether the left or
		 * right symbol is used. On US keyboards, the shift key changes the
		 * keyboard level, and there are no groups. A group switch key might
		 * convert a keyboard between Hebrew to English modes, for example.
		 * {@link EventKey} contains a %group field that indicates the active
		 * keyboard group. The level is computed from the modifier mask.
		 * The returned array should be freed
		 * with g_free().
		 * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
		 * @param keys return location
		 *     for an array of {@link KeymapKey}
		 * @param n_keys return location for number of elements in returned array
		 * @returns %TRUE if keys were found and returned
		 */
		get_entries_for_keyval(keyval: number, keys: KeymapKey[], n_keys: number): boolean;
		/**
		 * Returns the modifier mask the #keymap’s windowing system backend
		 * uses for a particular purpose.
		 * 
		 * Note that this function always returns real hardware modifiers, not
		 * virtual ones (e.g. it will return #GDK_MOD1_MASK rather than
		 * #GDK_META_MASK if the backend maps MOD1 to META), so there are use
		 * cases where the return value of this function has to be transformed
		 * by gdk_keymap_add_virtual_modifiers() in order to contain the
		 * expected result.
		 * @param intent the use case for the modifier mask
		 * @returns the modifier mask used for #intent.
		 */
		get_modifier_mask(intent: ModifierIntent): ModifierType;
		/**
		 * Returns the current modifier state.
		 * @returns the current modifier state.
		 */
		get_modifier_state(): number;
		/**
		 * Returns whether the Num Lock modifer is locked.
		 * @returns %TRUE if Num Lock is on
		 */
		get_num_lock_state(): boolean;
		/**
		 * Returns whether the Scroll Lock modifer is locked.
		 * @returns %TRUE if Scroll Lock is on
		 */
		get_scroll_lock_state(): boolean;
		/**
		 * Determines if keyboard layouts for both right-to-left and left-to-right
		 * languages are in use.
		 * @returns %TRUE if there are layouts in both directions, %FALSE otherwise
		 */
		have_bidi_layouts(): boolean;
		/**
		 * Looks up the keyval mapped to a keycode/group/level triplet.
		 * If no keyval is bound to #key, returns 0. For normal user input,
		 * you want to use gdk_keymap_translate_keyboard_state() instead of
		 * this function, since the effective group/level may not be
		 * the same as the current keyboard state.
		 * @param key a {@link KeymapKey} with keycode, group, and level initialized
		 * @returns a keyval, or 0 if none was mapped to the given #key
		 */
		lookup_key(key: KeymapKey): number;
		/**
		 * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which
		 * are set in #state to their non-virtual counterparts (i.e. Mod2,
		 * Mod3,...) and set the corresponding bits in #state.
		 * 
		 * This function is useful when matching key events against
		 * accelerators.
		 * @param state pointer to the modifier state to map
		 * @returns %FALSE if two virtual modifiers were mapped to the
		 *     same non-virtual modifier. Note that %FALSE is also returned
		 *     if a virtual modifier is mapped to a non-virtual modifier that
		 *     was already set in #state.
		 */
		map_virtual_modifiers(state: ModifierType): boolean;
		/**
		 * Translates the contents of a {@link EventKey} into a keyval, effective
		 * group, and level. Modifiers that affected the translation and
		 * are thus unavailable for application use are returned in
		 * #consumed_modifiers.
		 * See [Groups][key-group-explanation] for an explanation of
		 * groups and levels. The #effective_group is the group that was
		 * actually used for the translation; some keys such as Enter are not
		 * affected by the active keyboard group. The #level is derived from
		 * #state. For convenience, #GdkEventKey already contains the translated
		 * keyval, so this function isn’t as useful as you might think.
		 * 
		 * #consumed_modifiers gives modifiers that should be masked outfrom #state
		 * when comparing this key press to a hot key. For instance, on a US keyboard,
		 * the `plus` symbol is shifted, so when comparing a key press to a
		 * `<Control>plus` accelerator `<Shift>` should be masked out.
		 * 
		 * |[<!-- language="C" -->
		 * // We want to ignore irrelevant modifiers like ScrollLock
		 * #define ALL_ACCELS_MASK (GDK_CONTROL_MASK | GDK_SHIFT_MASK | GDK_MOD1_MASK)
		 * gdk_keymap_translate_keyboard_state (keymap, event->hardware_keycode,
		 *                                      event->state, event->group,
		 *                                      &keyval, NULL, NULL, &consumed);
		 * if (keyval == GDK_PLUS &&
		 *     (event->state & ~consumed & ALL_ACCELS_MASK) == GDK_CONTROL_MASK)
		 *   // Control was pressed
		 * ]|
		 * 
		 * An older interpretation #consumed_modifiers was that it contained
		 * all modifiers that might affect the translation of the key;
		 * this allowed accelerators to be stored with irrelevant consumed
		 * modifiers, by doing:
		 * |[<!-- language="C" -->
		 * // XXX Don’t do this XXX
		 * if (keyval == accel_keyval &&
		 *     (event->state & ~consumed & ALL_ACCELS_MASK) == (accel_mods & ~consumed))
		 *   // Accelerator was pressed
		 * ]|
		 * 
		 * However, this did not work if multi-modifier combinations were
		 * used in the keymap, since, for instance, `<Control>` would be
		 * masked out even if only `<Control><Alt>` was used in the keymap.
		 * To support this usage as well as well as possible, all single
		 * modifier combinations that could affect the key for any combination
		 * of modifiers will be returned in #consumed_modifiers; multi-modifier
		 * combinations are returned only when actually found in #state. When
		 * you store accelerators, you should always store them with consumed
		 * modifiers removed. Store `<Control>plus`, not `<Control><Shift>plus`,
		 * @param hardware_keycode a keycode
		 * @param state a modifier state
		 * @param group active keyboard group
		 * @param keyval return location for keyval, or %NULL
		 * @param effective_group return location for effective
		 *     group, or %NULL
		 * @param level return location for level, or %NULL
		 * @param consumed_modifiers return location for modifiers
		 *     that were used to determine the group or level, or %NULL
		 * @returns %TRUE if there was a keyval bound to the keycode/state/group
		 */
		translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number, keyval: number, effective_group: number, level: number, consumed_modifiers: ModifierType): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Keymap} instead.
	 */
	type KeymapMixin = IKeymap & GObject.IObject;

	/**
	 * A {@link Keymap} defines the translation from keyboard state
	 * (including a hardware key, a modifier mask, and active keyboard group)
	 * to a keyval. This translation has two phases. The first phase is
	 * to determine the effective keyboard group and level for the keyboard
	 * state; the second phase is to look up the keycode/group/level triplet
	 * in the keymap and see what keyval it corresponds to.
	 */
	interface Keymap extends KeymapMixin {}

	class Keymap {
		public constructor();
		/**
		 * Returns the {@link Keymap} attached to the default display.
		 * @returns the {@link Keymap} attached to the default display.
		 */
		public static get_default(): Keymap;
		/**
		 * Returns the {@link Keymap} attached to #display.
		 * @param display the {@link Display}.
		 * @returns the {@link Keymap} attached to #display.
		 */
		public static get_for_display(display: Display): Keymap;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Monitor} instead.
	 */
	interface IMonitor {
		/**
		 * Gets the display that this monitor belongs to.
		 * @returns the display
		 */
		get_display(): Display;
		/**
		 * Retrieves the size and position of an individual monitor within the
		 * display coordinate space. The returned geometry is in  ”application pixels”,
		 * not in ”device pixels” (see gdk_monitor_get_scale_factor()).
		 * @param geometry a {@link Rectangle} to be filled with the monitor geometry
		 */
		get_geometry(geometry: Rectangle): void;
		/**
		 * Gets the height in millimeters of the monitor.
		 * @returns the physical height of the monitor
		 */
		get_height_mm(): number;
		/**
		 * Gets the name or PNP ID of the monitor's manufacturer, if available.
		 * 
		 * Note that this value might also vary depending on actual
		 * display backend.
		 * 
		 * PNP ID registry is located at https://uefi.org/pnp_id_list
		 * @returns the name of the manufacturer, or %NULL
		 */
		get_manufacturer(): string;
		/**
		 * Gets the a string identifying the monitor model, if available.
		 * @returns the monitor model, or %NULL
		 */
		get_model(): string;
		/**
		 * Gets the refresh rate of the monitor, if available.
		 * 
		 * The value is in milli-Hertz, so a refresh rate of 60Hz
		 * is returned as 60000.
		 * @returns the refresh rate in milli-Hertz, or 0
		 */
		get_refresh_rate(): number;
		/**
		 * Gets the internal scale factor that maps from monitor coordinates
		 * to the actual device pixels. On traditional systems this is 1, but
		 * on very high density outputs this can be a higher value (often 2).
		 * 
		 * This can be used if you want to create pixel based data for a
		 * particular monitor, but most of the time you’re drawing to a window
		 * where it is better to use gdk_window_get_scale_factor() instead.
		 * @returns the scale factor
		 */
		get_scale_factor(): number;
		/**
		 * Gets information about the layout of red, green and blue
		 * primaries for each pixel in this monitor, if available.
		 * @returns the subpixel layout
		 */
		get_subpixel_layout(): SubpixelLayout;
		/**
		 * Gets the width in millimeters of the monitor.
		 * @returns the physical width of the monitor
		 */
		get_width_mm(): number;
		/**
		 * Retrieves the size and position of the “work area” on a monitor
		 * within the display coordinate space. The returned geometry is in
		 * ”application pixels”, not in ”device pixels” (see
		 * gdk_monitor_get_scale_factor()).
		 * 
		 * The work area should be considered when positioning menus and
		 * similar popups, to avoid placing them below panels, docks or other
		 * desktop components.
		 * 
		 * Note that not all backends may have a concept of workarea. This
		 * function will return the monitor geometry if a workarea is not
		 * available, or does not apply.
		 * @param workarea a {@link Rectangle} to be filled with
		 *     the monitor workarea
		 */
		get_workarea(workarea: Rectangle): void;
		/**
		 * Gets whether this monitor should be considered primary
		 * (see gdk_display_get_primary_monitor()).
		 * @returns %TRUE if #monitor is primary
		 */
		is_primary(): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Monitor} instead.
	 */
	type MonitorMixin = IMonitor & GObject.IObject;

	/**
	 * GdkMonitor objects represent the individual outputs that are
	 * associated with a {@link Display}. GdkDisplay has APIs to enumerate
	 * monitors with gdk_display_get_n_monitors() and gdk_display_get_monitor(), and
	 * to find particular monitors with gdk_display_get_primary_monitor() or
	 * gdk_display_get_monitor_at_window().
	 * 
	 * GdkMonitor was introduced in GTK+ 3.22 and supersedes earlier
	 * APIs in GdkScreen to obtain monitor-related information.
	 */
	interface Monitor extends MonitorMixin {}

	class Monitor {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Screen} instead.
	 */
	interface IScreen {
		/**
		 * Returns the screen’s currently active window.
		 * 
		 * On X11, this is done by inspecting the _NET_ACTIVE_WINDOW property
		 * on the root window, as described in the
		 * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
		 * If there is no currently currently active
		 * window, or the window manager does not support the
		 * _NET_ACTIVE_WINDOW hint, this function returns %NULL.
		 * 
		 * On other platforms, this function may return %NULL, depending on whether
		 * it is implementable on that platform.
		 * 
		 * The returned window should be unrefed using g_object_unref() when
		 * no longer needed.
		 * @returns the currently active window,
		 *   or %NULL.
		 */
		get_active_window(): Window;
		/**
		 * Gets the display to which the #screen belongs.
		 * @returns the display to which #screen belongs
		 */
		get_display(): Display;
		/**
		 * Gets any options previously set with gdk_screen_set_font_options().
		 * @returns the current font options, or %NULL if no
		 *  default font options have been set.
		 */
		get_font_options(): cairo.FontOptions;
		/**
		 * Gets the height of #screen in pixels. The returned size is in
		 * ”application pixels”, not in ”device pixels” (see
		 * gdk_screen_get_monitor_scale_factor()).
		 * @returns the height of #screen in pixels.
		 */
		get_height(): number;
		/**
		 * Returns the height of #screen in millimeters.
		 * 
		 * Note that this value is somewhat ill-defined when the screen
		 * has multiple monitors of different resolution. It is recommended
		 * to use the monitor dimensions instead.
		 * @returns the heigth of #screen in millimeters.
		 */
		get_height_mm(): number;
		/**
		 * Returns the monitor number in which the point (#x,#y) is located.
		 * @param _x the x coordinate in the virtual screen.
		 * @param _y the y coordinate in the virtual screen.
		 * @returns the monitor number in which the point (#x,#y) lies, or
		 *   a monitor close to (#x,#y) if the point is not in any monitor.
		 */
		get_monitor_at_point(_x: number, _y: number): number;
		/**
		 * Returns the number of the monitor in which the largest area of the
		 * bounding rectangle of #window resides.
		 * @param window a {@link Window}
		 * @returns the monitor number in which most of #window is located,
		 *     or if #window does not intersect any monitors, a monitor,
		 *     close to #window.
		 */
		get_monitor_at_window(window: Window): number;
		/**
		 * Retrieves the {@link Rectangle} representing the size and position of
		 * the individual monitor within the entire screen area. The returned
		 * geometry is in ”application pixels”, not in ”device pixels” (see
		 * gdk_screen_get_monitor_scale_factor()).
		 * 
		 * Monitor numbers start at 0. To obtain the number of monitors of
		 * #screen, use gdk_screen_get_n_monitors().
		 * 
		 * Note that the size of the entire screen area can be retrieved via
		 * gdk_screen_get_width() and gdk_screen_get_height().
		 * @param monitor_num the monitor number
		 * @param dest a {@link Rectangle} to be filled with
		 *     the monitor geometry
		 */
		get_monitor_geometry(monitor_num: number, dest: Rectangle): void;
		/**
		 * Gets the height in millimeters of the specified monitor.
		 * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
		 * @returns the height of the monitor, or -1 if not available
		 */
		get_monitor_height_mm(monitor_num: number): number;
		/**
		 * Returns the output name of the specified monitor.
		 * Usually something like VGA, DVI, or TV, not the actual
		 * product name of the display device.
		 * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
		 * @returns a newly-allocated string containing the name
		 *   of the monitor, or %NULL if the name cannot be determined
		 */
		get_monitor_plug_name(monitor_num: number): string;
		/**
		 * Returns the internal scale factor that maps from monitor coordinates
		 * to the actual device pixels. On traditional systems this is 1, but
		 * on very high density outputs this can be a higher value (often 2).
		 * 
		 * This can be used if you want to create pixel based data for a
		 * particular monitor, but most of the time you’re drawing to a window
		 * where it is better to use gdk_window_get_scale_factor() instead.
		 * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
		 * @returns the scale factor
		 */
		get_monitor_scale_factor(monitor_num: number): number;
		/**
		 * Gets the width in millimeters of the specified monitor, if available.
		 * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
		 * @returns the width of the monitor, or -1 if not available
		 */
		get_monitor_width_mm(monitor_num: number): number;
		/**
		 * Retrieves the {@link Rectangle} representing the size and position of
		 * the “work area” on a monitor within the entire screen area. The returned
		 * geometry is in ”application pixels”, not in ”device pixels” (see
		 * gdk_screen_get_monitor_scale_factor()).
		 * 
		 * The work area should be considered when positioning menus and
		 * similar popups, to avoid placing them below panels, docks or other
		 * desktop components.
		 * 
		 * Note that not all backends may have a concept of workarea. This
		 * function will return the monitor geometry if a workarea is not
		 * available, or does not apply.
		 * 
		 * Monitor numbers start at 0. To obtain the number of monitors of
		 * #screen, use gdk_screen_get_n_monitors().
		 * @param monitor_num the monitor number
		 * @param dest a {@link Rectangle} to be filled with
		 *     the monitor workarea
		 */
		get_monitor_workarea(monitor_num: number, dest: Rectangle): void;
		/**
		 * Returns the number of monitors which #screen consists of.
		 * @returns number of monitors which #screen consists of
		 */
		get_n_monitors(): number;
		/**
		 * Gets the index of #screen among the screens in the display
		 * to which it belongs. (See gdk_screen_get_display())
		 * @returns the index
		 */
		get_number(): number;
		/**
		 * Gets the primary monitor for #screen.  The primary monitor
		 * is considered the monitor where the “main desktop” lives.
		 * While normal application windows typically allow the window
		 * manager to place the windows, specialized desktop applications
		 * such as panels should place themselves on the primary monitor.
		 * 
		 * If no primary monitor is configured by the user, the return value
		 * will be 0, defaulting to the first monitor.
		 * @returns An integer index for the primary monitor, or 0 if none is configured.
		 */
		get_primary_monitor(): number;
		/**
		 * Gets the resolution for font handling on the screen; see
		 * gdk_screen_set_resolution() for full details.
		 * @returns the current resolution, or -1 if no resolution
		 * has been set.
		 */
		get_resolution(): number;
		/**
		 * Gets a visual to use for creating windows with an alpha channel.
		 * The windowing system on which GTK+ is running
		 * may not support this capability, in which case %NULL will
		 * be returned. Even if a non-%NULL value is returned, its
		 * possible that the window’s alpha channel won’t be honored
		 * when displaying the window on the screen: in particular, for
		 * X an appropriate windowing manager and compositing manager
		 * must be running to provide appropriate display.
		 * 
		 * This functionality is not implemented in the Windows backend.
		 * 
		 * For setting an overall opacity for a top-level window, see
		 * gdk_window_set_opacity().
		 * @returns a visual to use for windows
		 *     with an alpha channel or %NULL if the capability is not
		 *     available.
		 */
		get_rgba_visual(): Visual;
		/**
		 * Gets the root window of #screen.
		 * @returns the root window
		 */
		get_root_window(): Window;
		/**
		 * Retrieves a desktop-wide setting such as double-click time
		 * for the {@link Screen} #screen.
		 * 
		 * FIXME needs a list of valid settings here, or a link to
		 * more information.
		 * @param name the name of the setting
		 * @param value location to store the value of the setting
		 * @returns %TRUE if the setting existed and a value was stored
		 *   in #value, %FALSE otherwise.
		 */
		get_setting(name: string, value: GObject.Value): boolean;
		/**
		 * Get the system’s default visual for #screen.
		 * This is the visual for the root window of the display.
		 * The return value should not be freed.
		 * @returns the system visual
		 */
		get_system_visual(): Visual;
		/**
		 * Obtains a list of all toplevel windows known to GDK on the screen #screen.
		 * A toplevel window is a child of the root window (see
		 * gdk_get_default_root_window()).
		 * 
		 * The returned list should be freed with g_list_free(), but
		 * its elements need not be freed.
		 * @returns 
		 *     list of toplevel windows, free with g_list_free()
		 */
		get_toplevel_windows(): GLib.List;
		/**
		 * Gets the width of #screen in pixels. The returned size is in
		 * ”application pixels”, not in ”device pixels” (see
		 * gdk_screen_get_monitor_scale_factor()).
		 * @returns the width of #screen in pixels.
		 */
		get_width(): number;
		/**
		 * Gets the width of #screen in millimeters.
		 * 
		 * Note that this value is somewhat ill-defined when the screen
		 * has multiple monitors of different resolution. It is recommended
		 * to use the monitor dimensions instead.
		 * @returns the width of #screen in millimeters.
		 */
		get_width_mm(): number;
		/**
		 * Returns a #GList of {@link Windows} representing the current
		 * window stack.
		 * 
		 * On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
		 * property on the root window, as described in the
		 * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
		 * If the window manager does not support the
		 * _NET_CLIENT_LIST_STACKING hint, this function returns %NULL.
		 * 
		 * On other platforms, this function may return %NULL, depending on whether
		 * it is implementable on that platform.
		 * 
		 * The returned list is newly allocated and owns references to the
		 * windows it contains, so it should be freed using g_list_free() and
		 * its windows unrefed using g_object_unref() when no longer needed.
		 * @returns a
		 *     list of {@link Windows} for the current window stack, or %NULL.
		 */
		get_window_stack(): GLib.List;
		/**
		 * Returns whether windows with an RGBA visual can reasonably
		 * be expected to have their alpha channel drawn correctly on
		 * the screen.
		 * 
		 * On X11 this function returns whether a compositing manager is
		 * compositing #screen.
		 * @returns Whether windows with RGBA visuals can reasonably be
		 * expected to have their alpha channels drawn correctly on the screen.
		 */
		is_composited(): boolean;
		/**
		 * Lists the available visuals for the specified #screen.
		 * A visual describes a hardware image data format.
		 * For example, a visual might support 24-bit color, or 8-bit color,
		 * and might expect pixels to be in a certain format.
		 * 
		 * Call g_list_free() on the return value when you’re finished with it.
		 * @returns 
		 *     a list of visuals; the list must be freed, but not its contents
		 */
		list_visuals(): GLib.List;
		/**
		 * Determines the name to pass to gdk_display_open() to get
		 * a {@link Display} with this screen as the default screen.
		 * @returns a newly allocated string, free with g_free()
		 */
		make_display_name(): string;
		/**
		 * Sets the default font options for the screen. These
		 * options will be set on any #PangoContext’s newly created
		 * with gdk_pango_context_get_for_screen(). Changing the
		 * default set of font options does not affect contexts that
		 * have already been created.
		 * @param options a #cairo_font_options_t, or %NULL to unset any
		 *   previously set default font options.
		 */
		set_font_options(options: cairo.FontOptions): void;
		/**
		 * Sets the resolution for font handling on the screen. This is a
		 * scale factor between points specified in a #PangoFontDescription
		 * and cairo units. The default value is 96, meaning that a 10 point
		 * font will be 13 units high. (10 * 96. / 72. = 13.3).
		 * @param dpi the resolution in “dots per inch”. (Physical inches aren’t actually
		 *   involved; the terminology is conventional.)
		 */
		set_resolution(dpi: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Screen} instead.
	 */
	type ScreenMixin = IScreen & GObject.IObject;

	/**
	 * {@link Screen} objects are the GDK representation of the screen on
	 * which windows can be displayed and on which the pointer moves.
	 * X originally identified screens with physical screens, but
	 * nowadays it is more common to have a single #GdkScreen which
	 * combines several physical monitors (see gdk_screen_get_n_monitors()).
	 * 
	 * GdkScreen is used throughout GDK and GTK+ to specify which screen
	 * the top level windows are to be displayed on. it is also used to
	 * query the screen specification and default settings such as
	 * the default visual (gdk_screen_get_system_visual()), the dimensions
	 * of the physical monitors (gdk_screen_get_monitor_geometry()), etc.
	 */
	interface Screen extends ScreenMixin {}

	class Screen {
		public constructor();
		/**
		 * Gets the default screen for the default display. (See
		 * gdk_display_get_default ()).
		 * @returns a {@link Screen}, or %NULL if
		 *     there is no default display.
		 */
		public static get_default(): Screen;
		/**
		 * Gets the height of the default screen in pixels. The returned
		 * size is in ”application pixels”, not in ”device pixels” (see
		 * gdk_screen_get_monitor_scale_factor()).
		 * @returns the height of the default screen in pixels.
		 */
		public static height(): number;
		/**
		 * Returns the height of the default screen in millimeters.
		 * Note that on many X servers this value will not be correct.
		 * @returns the height of the default screen in millimeters,
		 * though it is not always correct.
		 */
		public static height_mm(): number;
		/**
		 * Gets the width of the default screen in pixels. The returned
		 * size is in ”application pixels”, not in ”device pixels” (see
		 * gdk_screen_get_monitor_scale_factor()).
		 * @returns the width of the default screen in pixels.
		 */
		public static width(): number;
		/**
		 * Returns the width of the default screen in millimeters.
		 * Note that on many X servers this value will not be correct.
		 * @returns the width of the default screen in millimeters,
		 * though it is not always correct.
		 */
		public static width_mm(): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Seat} instead.
	 */
	interface ISeat {
		/**
		 * Returns the capabilities this {@link Seat} currently has.
		 * @returns the seat capabilities
		 */
		get_capabilities(): SeatCapabilities;
		/**
		 * Returns the {@link Display} this seat belongs to.
		 * @returns a {@link Display}. This object is owned by GTK+
		 *          and must not be freed.
		 */
		get_display(): Display;
		/**
		 * Returns the master device that routes keyboard events.
		 * @returns a master {@link Device} with keyboard
		 *          capabilities. This object is owned by GTK+ and must not be freed.
		 */
		get_keyboard(): Device;
		/**
		 * Returns the master device that routes pointer events.
		 * @returns a master {@link Device} with pointer
		 *          capabilities. This object is owned by GTK+ and must not be freed.
		 */
		get_pointer(): Device;
		/**
		 * Returns the slave devices that match the given capabilities.
		 * @param capabilities capabilities to get devices for
		 * @returns A list of {@link Devices}.
		 *          The list must be freed with g_list_free(), the elements are owned
		 *          by GDK and must not be freed.
		 */
		get_slaves(capabilities: SeatCapabilities): GLib.List;
		/**
		 * Grabs the seat so that all events corresponding to the given #capabilities
		 * are passed to this application until the seat is ungrabbed with gdk_seat_ungrab(),
		 * or the window becomes hidden. This overrides any previous grab on the
		 * seat by this client.
		 * 
		 * As a rule of thumb, if a grab is desired over %GDK_SEAT_CAPABILITY_POINTER,
		 * all other "pointing" capabilities (eg. %GDK_SEAT_CAPABILITY_TOUCH) should
		 * be grabbed too, so the user is able to interact with all of those while
		 * the grab holds, you should thus use %GDK_SEAT_CAPABILITY_ALL_POINTING most
		 * commonly.
		 * 
		 * Grabs are used for operations which need complete control over the
		 * events corresponding to the given capabilities. For example in GTK+ this
		 * is used for Drag and Drop operations, popup menus and such.
		 * 
		 * Note that if the event mask of a {@link Window} has selected both button press
		 * and button release events, or touch begin and touch end, then a press event
		 * will cause an automatic grab until the button is released, equivalent to a
		 * grab on the window with #owner_events set to %TRUE. This is done because most
		 * applications expect to receive paired press and release events.
		 * 
		 * If you set up anything at the time you take the grab that needs to be
		 * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
		 * events that are emitted when the grab ends unvoluntarily.
		 * @param window the {@link Window} which will own the grab
		 * @param capabilities capabilities that will be grabbed
		 * @param owner_events if %FALSE then all device events are reported with respect to
		 *                #window and are only reported if selected by #event_mask. If
		 *                %TRUE then pointer events for this application are reported
		 *                as normal, but pointer events outside this application are
		 *                reported with respect to #window and only if selected by
		 *                #event_mask. In either mode, unreported events are discarded.
		 * @param cursor the cursor to display while the grab is active. If
		 *          this is %NULL then the normal cursors are used for
		 *          #window and its descendants, and the cursor for #window is used
		 *          elsewhere.
		 * @param event the event that is triggering the grab, or %NULL if none
		 *         is available.
		 * @param prepare_func function to
		 *                prepare the window to be grabbed, it can be %NULL if #window is
		 *                visible before this call.
		 * @param prepare_func_data user data to pass to #prepare_func
		 * @returns %GDK_GRAB_SUCCESS if the grab was successful.
		 */
		grab(window: Window, capabilities: SeatCapabilities, owner_events: boolean, cursor: Cursor, event: Event, prepare_func: SeatGrabPrepareFunc, prepare_func_data: any): GrabStatus;
		/**
		 * Releases a grab added through gdk_seat_grab().
		 */
		ungrab(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Seat} instead.
	 */
	type SeatMixin = ISeat & GObject.IObject;

	/**
	 * The {@link Seat} object represents a collection of input devices
	 * that belong to a user.
	 */
	interface Seat extends SeatMixin {}

	class Seat {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Visual} instead.
	 */
	interface IVisual {
		/**
		 * Returns the number of significant bits per red, green and blue value.
		 * 
		 * Not all GDK backend provide a meaningful value for this function.
		 * @returns The number of significant bits per color value for #visual.
		 */
		get_bits_per_rgb(): number;
		/**
		 * Obtains values that are needed to calculate blue pixel values in TrueColor
		 * and DirectColor. The “mask” is the significant bits within the pixel.
		 * The “shift” is the number of bits left we must shift a primary for it
		 * to be in position (according to the "mask"). Finally, "precision" refers
		 * to how much precision the pixel value contains for a particular primary.
		 * @param mask A pointer to a #guint32 to be filled in, or %NULL
		 * @param shift A pointer to a #gint to be filled in, or %NULL
		 * @param precision A pointer to a #gint to be filled in, or %NULL
		 */
		get_blue_pixel_details(mask: number, shift: number, precision: number): void;
		/**
		 * Returns the byte order of this visual.
		 * 
		 * The information returned by this function is only relevant
		 * when working with XImages, and not all backends return
		 * meaningful information for this.
		 * @returns A {@link ByteOrder} stating the byte order of #visual.
		 */
		get_byte_order(): ByteOrder;
		/**
		 * Returns the size of a colormap for this visual.
		 * 
		 * You have to use platform-specific APIs to manipulate colormaps.
		 * @returns The size of a colormap that is suitable for #visual.
		 */
		get_colormap_size(): number;
		/**
		 * Returns the bit depth of this visual.
		 * @returns The bit depth of this visual.
		 */
		get_depth(): number;
		/**
		 * Obtains values that are needed to calculate green pixel values in TrueColor
		 * and DirectColor. The “mask” is the significant bits within the pixel.
		 * The “shift” is the number of bits left we must shift a primary for it
		 * to be in position (according to the "mask"). Finally, "precision" refers
		 * to how much precision the pixel value contains for a particular primary.
		 * @param mask A pointer to a #guint32 to be filled in, or %NULL
		 * @param shift A pointer to a #gint to be filled in, or %NULL
		 * @param precision A pointer to a #gint to be filled in, or %NULL
		 */
		get_green_pixel_details(mask: number, shift: number, precision: number): void;
		/**
		 * Obtains values that are needed to calculate red pixel values in TrueColor
		 * and DirectColor. The “mask” is the significant bits within the pixel.
		 * The “shift” is the number of bits left we must shift a primary for it
		 * to be in position (according to the "mask"). Finally, "precision" refers
		 * to how much precision the pixel value contains for a particular primary.
		 * @param mask A pointer to a #guint32 to be filled in, or %NULL
		 * @param shift A pointer to a #gint to be filled in, or %NULL
		 * @param precision A pointer to a #gint to be filled in, or %NULL
		 */
		get_red_pixel_details(mask: number, shift: number, precision: number): void;
		/**
		 * Gets the screen to which this visual belongs
		 * @returns the screen to which this visual belongs.
		 */
		get_screen(): Screen;
		/**
		 * Returns the type of visual this is (PseudoColor, TrueColor, etc).
		 * @returns A {@link VisualType} stating the type of #visual.
		 */
		get_visual_type(): VisualType;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Visual} instead.
	 */
	type VisualMixin = IVisual & GObject.IObject;

	/**
	 * A {@link Visual} contains information about
	 * a particular visual.
	 */
	interface Visual extends VisualMixin {}

	class Visual {
		public constructor();
		/**
		 * Get the visual with the most available colors for the default
		 * GDK screen. The return value should not be freed.
		 * @returns best visual
		 */
		public static get_best(): Visual;
		/**
		 * Get the best available depth for the default GDK screen.  “Best”
		 * means “largest,” i.e. 32 preferred over 24 preferred over 8 bits
		 * per pixel.
		 * @returns best available depth
		 */
		public static get_best_depth(): number;
		/**
		 * Return the best available visual type for the default GDK screen.
		 * @returns best visual type
		 */
		public static get_best_type(): VisualType;
		/**
		 * Combines gdk_visual_get_best_with_depth() and
		 * gdk_visual_get_best_with_type().
		 * @param depth a bit depth
		 * @param visual_type a visual type
		 * @returns best visual with both #depth
		 *     and #visual_type, or %NULL if none
		 */
		public static get_best_with_both(depth: number, visual_type: VisualType): Visual;
		/**
		 * Get the best visual with depth #depth for the default GDK screen.
		 * Color visuals and visuals with mutable colormaps are preferred
		 * over grayscale or fixed-colormap visuals. The return value should
		 * not be freed. %NULL may be returned if no visual supports #depth.
		 * @param depth a bit depth
		 * @returns best visual for the given depth
		 */
		public static get_best_with_depth(depth: number): Visual;
		/**
		 * Get the best visual of the given #visual_type for the default GDK screen.
		 * Visuals with higher color depths are considered better. The return value
		 * should not be freed. %NULL may be returned if no visual has type
		 * #visual_type.
		 * @param visual_type a visual type
		 * @returns best visual of the given type
		 */
		public static get_best_with_type(visual_type: VisualType): Visual;
		/**
		 * Get the system’s default visual for the default GDK screen.
		 * This is the visual for the root window of the display.
		 * The return value should not be freed.
		 * @returns system visual
		 */
		public static get_system(): Visual;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Window} instead.
	 */
	interface IWindow {
		/**
		 * Adds an event filter to #window, allowing you to intercept events
		 * before they reach GDK. This is a low-level operation and makes it
		 * easy to break GDK and/or GTK+, so you have to know what you're
		 * doing. Pass %NULL for #window to get all events for all windows,
		 * instead of events for a specific window.
		 * 
		 * If you are interested in X GenericEvents, bear in mind that
		 * XGetEventData() has been already called on the event, and
		 * XFreeEventData() must not be called within #function.
		 * @param _function filter callback
		 * @param data data to pass to filter callback
		 */
		add_filter(_function: FilterFunc, data: any): void;
		/**
		 * Emits a short beep associated to #window in the appropriate
		 * display, if supported. Otherwise, emits a short beep on
		 * the display just as gdk_display_beep().
		 */
		beep(): void;
		/**
		 * Indicates that you are beginning the process of redrawing #region
		 * on #window, and provides you with a {@link DrawingContext}.
		 * 
		 * If #window is a top level #GdkWindow, backed by a native window
		 * implementation, a backing store (offscreen buffer) large enough to
		 * contain #region will be created. The backing store will be initialized
		 * with the background color or background surface for #window. Then, all
		 * drawing operations performed on #window will be diverted to the
		 * backing store. When you call gdk_window_end_frame(), the contents of
		 * the backing store will be copied to #window, making it visible
		 * on screen. Only the part of #window contained in #region will be
		 * modified; that is, drawing operations are clipped to #region.
		 * 
		 * The net result of all this is to remove flicker, because the user
		 * sees the finished product appear all at once when you call
		 * gdk_window_end_draw_frame(). If you draw to #window directly without
		 * calling gdk_window_begin_draw_frame(), the user may see flicker
		 * as individual drawing operations are performed in sequence.
		 * 
		 * When using GTK+, the widget system automatically places calls to
		 * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() around
		 * emissions of the `GtkWidget::draw` signal. That is, if you’re
		 * drawing the contents of the widget yourself, you can assume that the
		 * widget has a cleared background, is already set as the clip region,
		 * and already has a backing store. Therefore in most cases, application
		 * code in GTK does not need to call gdk_window_begin_draw_frame()
		 * explicitly.
		 * @param region a Cairo region
		 * @returns a {@link DrawingContext} context that should be
		 *   used to draw the contents of the window; the returned context is owned
		 *   by GDK.
		 */
		begin_draw_frame(region: cairo.Region): DrawingContext;
		/**
		 * Begins a window move operation (for a toplevel window).
		 * 
		 * This function assumes that the drag is controlled by the
		 * client pointer device, use gdk_window_begin_move_drag_for_device()
		 * to begin a drag with a different device.
		 * @param button the button being used to drag, or 0 for a keyboard-initiated drag
		 * @param root_x root window X coordinate of mouse click that began the drag
		 * @param root_y root window Y coordinate of mouse click that began the drag
		 * @param timestamp timestamp of mouse click that began the drag
		 */
		begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;
		/**
		 * Begins a window move operation (for a toplevel window).
		 * You might use this function to implement a “window move grip,” for
		 * example. The function works best with window managers that support the
		 * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
		 * but has a fallback implementation for other window managers.
		 * @param device the device used for the operation
		 * @param button the button being used to drag, or 0 for a keyboard-initiated drag
		 * @param root_x root window X coordinate of mouse click that began the drag
		 * @param root_y root window Y coordinate of mouse click that began the drag
		 * @param timestamp timestamp of mouse click that began the drag
		 */
		begin_move_drag_for_device(device: Device, button: number, root_x: number, root_y: number, timestamp: number): void;
		/**
		 * A convenience wrapper around gdk_window_begin_paint_region() which
		 * creates a rectangular region for you. See
		 * gdk_window_begin_paint_region() for details.
		 * @param rectangle rectangle you intend to draw to
		 */
		begin_paint_rect(rectangle: Rectangle): void;
		/**
		 * Indicates that you are beginning the process of redrawing #region.
		 * A backing store (offscreen buffer) large enough to contain #region
		 * will be created. The backing store will be initialized with the
		 * background color or background surface for #window. Then, all
		 * drawing operations performed on #window will be diverted to the
		 * backing store.  When you call gdk_window_end_paint(), the backing
		 * store will be copied to #window, making it visible onscreen. Only
		 * the part of #window contained in #region will be modified; that is,
		 * drawing operations are clipped to #region.
		 * 
		 * The net result of all this is to remove flicker, because the user
		 * sees the finished product appear all at once when you call
		 * gdk_window_end_paint(). If you draw to #window directly without
		 * calling gdk_window_begin_paint_region(), the user may see flicker
		 * as individual drawing operations are performed in sequence.  The
		 * clipping and background-initializing features of
		 * gdk_window_begin_paint_region() are conveniences for the
		 * programmer, so you can avoid doing that work yourself.
		 * 
		 * When using GTK+, the widget system automatically places calls to
		 * gdk_window_begin_paint_region() and gdk_window_end_paint() around
		 * emissions of the expose_event signal. That is, if you’re writing an
		 * expose event handler, you can assume that the exposed area in
		 * {@link EventExpose} has already been cleared to the window background,
		 * is already set as the clip region, and already has a backing store.
		 * Therefore in most cases, application code need not call
		 * gdk_window_begin_paint_region(). (You can disable the automatic
		 * calls around expose events on a widget-by-widget basis by calling
		 * gtk_widget_set_double_buffered().)
		 * 
		 * If you call this function multiple times before calling the
		 * matching gdk_window_end_paint(), the backing stores are pushed onto
		 * a stack. gdk_window_end_paint() copies the topmost backing store
		 * onscreen, subtracts the topmost region from all other regions in
		 * the stack, and pops the stack. All drawing operations affect only
		 * the topmost backing store in the stack. One matching call to
		 * gdk_window_end_paint() is required for each call to
		 * gdk_window_begin_paint_region().
		 * @param region region you intend to draw to
		 */
		begin_paint_region(region: cairo.Region): void;
		/**
		 * Begins a window resize operation (for a toplevel window).
		 * 
		 * This function assumes that the drag is controlled by the
		 * client pointer device, use gdk_window_begin_resize_drag_for_device()
		 * to begin a drag with a different device.
		 * @param edge the edge or corner from which the drag is started
		 * @param button the button being used to drag, or 0 for a keyboard-initiated drag
		 * @param root_x root window X coordinate of mouse click that began the drag
		 * @param root_y root window Y coordinate of mouse click that began the drag
		 * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
		 */
		begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void;
		/**
		 * Begins a window resize operation (for a toplevel window).
		 * You might use this function to implement a “window resize grip,” for
		 * example; in fact #GtkStatusbar uses it. The function works best
		 * with window managers that support the
		 * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
		 * but has a fallback implementation for other window managers.
		 * @param edge the edge or corner from which the drag is started
		 * @param device the device used for the operation
		 * @param button the button being used to drag, or 0 for a keyboard-initiated drag
		 * @param root_x root window X coordinate of mouse click that began the drag
		 * @param root_y root window Y coordinate of mouse click that began the drag
		 * @param timestamp timestamp of mouse click that began the drag (use gdk_event_get_time())
		 */
		begin_resize_drag_for_device(edge: WindowEdge, device: Device, button: number, root_x: number, root_y: number, timestamp: number): void;
		/**
		 * Does nothing, present only for compatiblity.
		 */
		configure_finished(): void;
		/**
		 * Transforms window coordinates from a parent window to a child
		 * window, where the parent window is the normal parent as returned by
		 * gdk_window_get_parent() for normal windows, and the window's
		 * embedder as returned by gdk_offscreen_window_get_embedder() for
		 * offscreen windows.
		 * 
		 * For normal windows, calling this function is equivalent to subtracting
		 * the return values of gdk_window_get_position() from the parent coordinates.
		 * For offscreen windows however (which can be arbitrarily transformed),
		 * this function calls the GdkWindow::from-embedder: signal to translate
		 * the coordinates.
		 * 
		 * You should always use this function when writing generic code that
		 * walks down a window hierarchy.
		 * 
		 * See also: gdk_window_coords_to_parent()
		 * @param parent_x X coordinate in parent’s coordinate system
		 * @param parent_y Y coordinate in parent’s coordinate system
		 * @param _x return location for X coordinate in child’s coordinate system
		 * @param _y return location for Y coordinate in child’s coordinate system
		 */
		coords_from_parent(parent_x: number, parent_y: number, _x: number, _y: number): void;
		/**
		 * Transforms window coordinates from a child window to its parent
		 * window, where the parent window is the normal parent as returned by
		 * gdk_window_get_parent() for normal windows, and the window's
		 * embedder as returned by gdk_offscreen_window_get_embedder() for
		 * offscreen windows.
		 * 
		 * For normal windows, calling this function is equivalent to adding
		 * the return values of gdk_window_get_position() to the child coordinates.
		 * For offscreen windows however (which can be arbitrarily transformed),
		 * this function calls the GdkWindow::to-embedder: signal to translate
		 * the coordinates.
		 * 
		 * You should always use this function when writing generic code that
		 * walks up a window hierarchy.
		 * 
		 * See also: gdk_window_coords_from_parent()
		 * @param _x X coordinate in child’s coordinate system
		 * @param _y Y coordinate in child’s coordinate system
		 * @param parent_x return location for X coordinate
		 * in parent’s coordinate system, or %NULL
		 * @param parent_y return location for Y coordinate
		 * in parent’s coordinate system, or %NULL
		 */
		coords_to_parent(_x: number, _y: number, parent_x: number, parent_y: number): void;
		/**
		 * Creates a new {@link GLContext} matching the
		 * framebuffer format to the visual of the #GdkWindow. The context
		 * is disconnected from any particular window or surface.
		 * 
		 * If the creation of the #GdkGLContext failed, #error will be set.
		 * 
		 * Before using the returned #GdkGLContext, you will need to
		 * call gdk_gl_context_make_current() or gdk_gl_context_realize().
		 * @returns the newly created {@link GLContext}, or
		 * %NULL on error
		 */
		create_gl_context(): GLContext;
		/**
		 * Create a new image surface that is efficient to draw on the
		 * given #window.
		 * 
		 * Initially the surface contents are all 0 (transparent if contents
		 * have transparency, black otherwise.)
		 * 
		 * The #width and #height of the new surface are not affected by
		 * the scaling factor of the #window, or by the #scale argument; they
		 * are the size of the surface in device pixels. If you wish to create
		 * an image surface capable of holding the contents of #window you can
		 * use:
		 * 
		 * |[<!-- language="C" -->
		 *   int scale = gdk_window_get_scale_factor (window);
		 *   int width = gdk_window_get_width (window) * scale;
		 *   int height = gdk_window_get_height (window) * scale;
		 * 
		 *   // format is set elsewhere
		 *   cairo_surface_t *surface =
		 *     gdk_window_create_similar_image_surface (window,
		 *                                              format,
		 *                                              width, height,
		 *                                              scale);
		 * ]|
		 * 
		 * Note that unlike cairo_surface_create_similar_image(), the new
		 * surface's device scale is set to #scale, or to the scale factor of
		 * #window if #scale is 0.
		 * @param format the format for the new surface
		 * @param width width of the new surface
		 * @param height height of the new surface
		 * @param scale the scale of the new surface, or 0 to use same as #window
		 * @returns a pointer to the newly allocated surface. The caller
		 * owns the surface and should call cairo_surface_destroy() when done
		 * with it.
		 * 
		 * This function always returns a valid pointer, but it will return a
		 * pointer to a “nil” surface if #other is already in an error state
		 * or any other error occurs.
		 */
		create_similar_image_surface(format: cairo.Format, width: number, height: number, scale: number): cairo.Surface;
		/**
		 * Create a new surface that is as compatible as possible with the
		 * given #window. For example the new surface will have the same
		 * fallback resolution and font options as #window. Generally, the new
		 * surface will also use the same backend as #window, unless that is
		 * not possible for some reason. The type of the returned surface may
		 * be examined with cairo_surface_get_type().
		 * 
		 * Initially the surface contents are all 0 (transparent if contents
		 * have transparency, black otherwise.)
		 * @param content the content for the new surface
		 * @param width width of the new surface
		 * @param height height of the new surface
		 * @returns a pointer to the newly allocated surface. The caller
		 * owns the surface and should call cairo_surface_destroy() when done
		 * with it.
		 * 
		 * This function always returns a valid pointer, but it will return a
		 * pointer to a “nil” surface if #other is already in an error state
		 * or any other error occurs.
		 */
		create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface;
		/**
		 * Attempt to deiconify (unminimize) #window. On X11 the window manager may
		 * choose to ignore the request to deiconify. When using GTK+,
		 * use gtk_window_deiconify() instead of the {@link Window} variant. Or better yet,
		 * you probably want to use gtk_window_present_with_time(), which raises the window, focuses it,
		 * unminimizes it, and puts it on the current desktop.
		 */
		deiconify(): void;
		/**
		 * Destroys the window system resources associated with #window and decrements #window's
		 * reference count. The window system resources for all children of #window are also
		 * destroyed, but the children’s reference counts are not decremented.
		 * 
		 * Note that a window will not be destroyed automatically when its reference count
		 * reaches zero. You must call this function yourself before that happens.
		 */
		destroy(): void;
		destroy_notify(): void;
		/**
		 * Does nothing, present only for compatiblity.
		 */
		enable_synchronized_configure(): void;
		/**
		 * Indicates that the drawing of the contents of #window started with
		 * gdk_window_begin_frame() has been completed.
		 * 
		 * This function will take care of destroying the {@link DrawingContext}.
		 * 
		 * It is an error to call this function without a matching
		 * gdk_window_begin_frame() first.
		 * @param context the {@link DrawingContext} created by gdk_window_begin_draw_frame()
		 */
		end_draw_frame(context: DrawingContext): void;
		/**
		 * Indicates that the backing store created by the most recent call
		 * to gdk_window_begin_paint_region() should be copied onscreen and
		 * deleted, leaving the next-most-recent backing store or no backing
		 * store at all as the active paint region. See
		 * gdk_window_begin_paint_region() for full details.
		 * 
		 * It is an error to call this function without a matching
		 * gdk_window_begin_paint_region() first.
		 */
		end_paint(): void;
		/**
		 * Tries to ensure that there is a window-system native window for this
		 * GdkWindow. This may fail in some situations, returning %FALSE.
		 * 
		 * Offscreen window and children of them can never have native windows.
		 * 
		 * Some backends may not support native child windows.
		 * @returns %TRUE if the window has a native window, %FALSE otherwise
		 */
		ensure_native(): boolean;
		/**
		 * This function does nothing.
		 */
		flush(): void;
		/**
		 * Sets keyboard focus to #window. In most cases, gtk_window_present_with_time()
		 * should be used on a #GtkWindow, rather than calling this function.
		 * @param timestamp timestamp of the event triggering the window focus
		 */
		focus(timestamp: number): void;
		/**
		 * Temporarily freezes a window and all its descendants such that it won't
		 * receive expose events.  The window will begin receiving expose events
		 * again when gdk_window_thaw_toplevel_updates_libgtk_only() is called. If
		 * gdk_window_freeze_toplevel_updates_libgtk_only()
		 * has been called more than once,
		 * gdk_window_thaw_toplevel_updates_libgtk_only() must be called
		 * an equal number of times to begin processing exposes.
		 * 
		 * This function is not part of the GDK public API and is only
		 * for use by GTK+.
		 */
		freeze_toplevel_updates_libgtk_only(): void;
		/**
		 * Temporarily freezes a window such that it won’t receive expose
		 * events.  The window will begin receiving expose events again when
		 * gdk_window_thaw_updates() is called. If gdk_window_freeze_updates()
		 * has been called more than once, gdk_window_thaw_updates() must be called
		 * an equal number of times to begin processing exposes.
		 */
		freeze_updates(): void;
		/**
		 * Moves the window into fullscreen mode. This means the
		 * window covers the entire screen and is above any panels
		 * or task bars.
		 * 
		 * If the window was already fullscreen, then this function does nothing.
		 * 
		 * On X11, asks the window manager to put #window in a fullscreen
		 * state, if the window manager supports this operation. Not all
		 * window managers support this, and some deliberately ignore it or
		 * don’t have a concept of “fullscreen”; so you can’t rely on the
		 * fullscreenification actually happening. But it will happen with
		 * most standard window managers, and GDK makes a best effort to get
		 * it to happen.
		 */
		fullscreen(): void;
		/**
		 * Moves the window into fullscreen mode on the given monitor. This means
		 * the window covers the entire screen and is above any panels or task bars.
		 * 
		 * If the window was already fullscreen, then this function does nothing.
		 * @param monitor Which monitor to display fullscreen on.
		 */
		fullscreen_on_monitor(monitor: number): void;
		/**
		 * This function informs GDK that the geometry of an embedded
		 * offscreen window has changed. This is necessary for GDK to keep
		 * track of which offscreen window the pointer is in.
		 */
		geometry_changed(): void;
		/**
		 * Determines whether or not the desktop environment shuld be hinted that
		 * the window does not want to receive input focus.
		 * @returns whether or not the window should receive input focus.
		 */
		get_accept_focus(): boolean;
		/**
		 * Gets the pattern used to clear the background on #window.
		 * @returns The pattern to use for the
		 * background or %NULL if there is no background.
		 */
		get_background_pattern(): cairo.Pattern;
		/**
		 * Gets the list of children of #window known to GDK.
		 * This function only returns children created via GDK,
		 * so for example it’s useless when used with the root window;
		 * it only returns windows an application created itself.
		 * 
		 * The returned list must be freed, but the elements in the
		 * list need not be.
		 * @returns 
		 *     list of child windows inside #window
		 */
		get_children(): GLib.List;
		/**
		 * Gets the list of children of #window known to GDK with a
		 * particular #user_data set on it.
		 * 
		 * The returned list must be freed, but the elements in the
		 * list need not be.
		 * 
		 * The list is returned in (relative) stacking order, i.e. the
		 * lowest window is first.
		 * @returns 
		 *     list of child windows inside #window
		 */
		get_children_with_user_data(): GLib.List;
		/**
		 * Computes the region of a window that potentially can be written
		 * to by drawing primitives. This region may not take into account
		 * other factors such as if the window is obscured by other windows,
		 * but no area outside of this region will be affected by drawing
		 * primitives.
		 * @returns a #cairo_region_t. This must be freed with cairo_region_destroy()
		 *          when you are done.
		 */
		get_clip_region(): cairo.Region;
		/**
		 * Determines whether #window is composited.
		 * 
		 * See gdk_window_set_composited().
		 * @returns %TRUE if the window is composited.
		 */
		get_composited(): boolean;
		/**
		 * Retrieves a {@link Cursor} pointer for the cursor currently set on the
		 * specified #GdkWindow, or %NULL.  If the return value is %NULL then
		 * there is no custom cursor set on the specified window, and it is
		 * using the cursor for its parent window.
		 * @returns a {@link Cursor}, or %NULL. The
		 *   returned object is owned by the #GdkWindow and should not be
		 *   unreferenced directly. Use gdk_window_set_cursor() to unset the
		 *   cursor of the window
		 */
		get_cursor(): Cursor;
		/**
		 * Returns the decorations set on the GdkWindow with
		 * gdk_window_set_decorations().
		 * @param decorations The window decorations will be written here
		 * @returns %TRUE if the window has decorations set, %FALSE otherwise.
		 */
		get_decorations(decorations: WMDecoration): boolean;
		/**
		 * Retrieves a {@link Cursor} pointer for the #device currently set on the
		 * specified #GdkWindow, or %NULL.  If the return value is %NULL then
		 * there is no custom cursor set on the specified window, and it is
		 * using the cursor for its parent window.
		 * @param device a master, pointer {@link Device}.
		 * @returns a {@link Cursor}, or %NULL. The
		 *   returned object is owned by the #GdkWindow and should not be
		 *   unreferenced directly. Use gdk_window_set_cursor() to unset the
		 *   cursor of the window
		 */
		get_device_cursor(device: Device): Cursor;
		/**
		 * Returns the event mask for #window corresponding to an specific device.
		 * @param device a {@link Device}.
		 * @returns device event mask for #window
		 */
		get_device_events(device: Device): EventMask;
		/**
		 * Obtains the current device position and modifier state.
		 * The position is given in coordinates relative to the upper left
		 * corner of #window.
		 * 
		 * Use gdk_window_get_device_position_double() if you need subpixel precision.
		 * @param device pointer {@link Device} to query to.
		 * @param _x return location for the X coordinate of #device, or %NULL.
		 * @param _y return location for the Y coordinate of #device, or %NULL.
		 * @param mask return location for the modifier mask, or %NULL.
		 * @returns The window underneath #device
		 * (as with gdk_device_get_window_at_position()), or %NULL if the
		 * window is not known to GDK.
		 */
		get_device_position(device: Device, _x: number, _y: number, mask: ModifierType): Window;
		/**
		 * Obtains the current device position in doubles and modifier state.
		 * The position is given in coordinates relative to the upper left
		 * corner of #window.
		 * @param device pointer {@link Device} to query to.
		 * @param _x return location for the X coordinate of #device, or %NULL.
		 * @param _y return location for the Y coordinate of #device, or %NULL.
		 * @param mask return location for the modifier mask, or %NULL.
		 * @returns The window underneath #device
		 * (as with gdk_device_get_window_at_position()), or %NULL if the
		 * window is not known to GDK.
		 */
		get_device_position_double(device: Device, _x: number, _y: number, mask: ModifierType): Window;
		/**
		 * Gets the {@link Display} associated with a #GdkWindow.
		 * @returns the {@link Display} associated with #window
		 */
		get_display(): Display;
		/**
		 * Finds out the DND protocol supported by a window.
		 * @param target location of the window
		 *    where the drop should happen. This may be #window or a proxy window,
		 *    or %NULL if #window does not support Drag and Drop.
		 * @returns the supported DND protocol.
		 */
		get_drag_protocol(target: Window): DragProtocol;
		/**
		 * Obtains the parent of #window, as known to GDK. Works like
		 * gdk_window_get_parent() for normal windows, but returns the
		 * window’s embedder for offscreen windows.
		 * 
		 * See also: gdk_offscreen_window_get_embedder()
		 * @returns effective parent of #window
		 */
		get_effective_parent(): Window;
		/**
		 * Gets the toplevel window that’s an ancestor of #window.
		 * 
		 * Works like gdk_window_get_toplevel(), but treats an offscreen window's
		 * embedder as its parent, using gdk_window_get_effective_parent().
		 * 
		 * See also: gdk_offscreen_window_get_embedder()
		 * @returns the effective toplevel window containing #window
		 */
		get_effective_toplevel(): Window;
		/**
		 * Get the current event compression setting for this window.
		 * @returns %TRUE if motion events will be compressed
		 */
		get_event_compression(): boolean;
		/**
		 * Gets the event mask for #window for all master input devices. See
		 * gdk_window_set_events().
		 * @returns event mask for #window
		 */
		get_events(): EventMask;
		/**
		 * Determines whether or not the desktop environment should be hinted that the
		 * window does not want to receive input focus when it is mapped.
		 * @returns whether or not the window wants to receive input focus when
		 * it is mapped.
		 */
		get_focus_on_map(): boolean;
		/**
		 * Gets the frame clock for the window. The frame clock for a window
		 * never changes unless the window is reparented to a new toplevel
		 * window.
		 * @returns the frame clock
		 */
		get_frame_clock(): FrameClock;
		/**
		 * Obtains the bounding box of the window, including window manager
		 * titlebar/borders if any. The frame position is given in root window
		 * coordinates. To get the position of the window itself (rather than
		 * the frame) in root window coordinates, use gdk_window_get_origin().
		 * @param rect rectangle to fill with bounding box of the window frame
		 */
		get_frame_extents(rect: Rectangle): void;
		/**
		 * Obtains the {@link FullscreenMode} of the #window.
		 * @returns The {@link FullscreenMode} applied to the window when fullscreen.
		 */
		get_fullscreen_mode(): FullscreenMode;
		/**
		 * Any of the return location arguments to this function may be %NULL,
		 * if you aren’t interested in getting the value of that field.
		 * 
		 * The X and Y coordinates returned are relative to the parent window
		 * of #window, which for toplevels usually means relative to the
		 * window decorations (titlebar, etc.) rather than relative to the
		 * root window (screen-size background window).
		 * 
		 * On the X11 platform, the geometry is obtained from the X server,
		 * so reflects the latest position of #window; this may be out-of-sync
		 * with the position of #window delivered in the most-recently-processed
		 * {@link EventConfigure}. gdk_window_get_position() in contrast gets the
		 * position from the most recent configure event.
		 * 
		 * Note: If #window is not a toplevel, it is much better
		 * to call gdk_window_get_position(), gdk_window_get_width() and
		 * gdk_window_get_height() instead, because it avoids the roundtrip to
		 * the X server and because these functions support the full 32-bit
		 * coordinate space, whereas gdk_window_get_geometry() is restricted to
		 * the 16-bit coordinates of X11.
		 * @param _x return location for X coordinate of window (relative to its parent)
		 * @param _y return location for Y coordinate of window (relative to its parent)
		 * @param width return location for width of window
		 * @param height return location for height of window
		 */
		get_geometry(_x: number, _y: number, width: number, height: number): void;
		/**
		 * Returns the group leader window for #window. See gdk_window_set_group().
		 * @returns the group leader window for #window
		 */
		get_group(): Window;
		/**
		 * Returns the height of the given #window.
		 * 
		 * On the X11 platform the returned size is the size reported in the
		 * most-recently-processed configure event, rather than the current
		 * size on the X server.
		 * @returns The height of #window
		 */
		get_height(): number;
		/**
		 * Determines whether or not the window manager is hinted that #window
		 * has modal behaviour.
		 * @returns whether or not the window has the modal hint set.
		 */
		get_modal_hint(): boolean;
		/**
		 * Obtains the position of a window in root window coordinates.
		 * (Compare with gdk_window_get_position() and
		 * gdk_window_get_geometry() which return the position of a window
		 * relative to its parent window.)
		 * @param _x return location for X coordinate
		 * @param _y return location for Y coordinate
		 * @returns not meaningful, ignore
		 */
		get_origin(_x: number, _y: number): number;
		/**
		 * Obtains the parent of #window, as known to GDK. Does not query the
		 * X server; thus this returns the parent as passed to gdk_window_new(),
		 * not the actual parent. This should never matter unless you’re using
		 * Xlib calls mixed with GDK calls on the X11 platform. It may also
		 * matter for toplevel windows, because the window manager may choose
		 * to reparent them.
		 * 
		 * Note that you should use gdk_window_get_effective_parent() when
		 * writing generic code that walks up a window hierarchy, because
		 * gdk_window_get_parent() will most likely not do what you expect if
		 * there are offscreen windows in the hierarchy.
		 * @returns parent of #window
		 */
		get_parent(): Window;
		/**
		 * Returns whether input to the window is passed through to the window
		 * below.
		 * 
		 * See gdk_window_set_pass_through() for details
		 * @returns 
		 */
		get_pass_through(): boolean;
		/**
		 * Obtains the current pointer position and modifier state.
		 * The position is given in coordinates relative to the upper left
		 * corner of #window.
		 * @param _x return location for X coordinate of pointer or %NULL to not
		 *      return the X coordinate
		 * @param _y return location for Y coordinate of pointer or %NULL to not
		 *      return the Y coordinate
		 * @param mask return location for modifier mask or %NULL to not return the
		 *      modifier mask
		 * @returns the window containing the
		 * pointer (as with gdk_window_at_pointer()), or %NULL if the window
		 * containing the pointer isn’t known to GDK
		 */
		get_pointer(_x: number, _y: number, mask: ModifierType): Window;
		/**
		 * Obtains the position of the window as reported in the
		 * most-recently-processed {@link EventConfigure}. Contrast with
		 * gdk_window_get_geometry() which queries the X server for the
		 * current window position, regardless of which events have been
		 * received or processed.
		 * 
		 * The position coordinates are relative to the window’s parent window.
		 * @param _x X coordinate of window
		 * @param _y Y coordinate of window
		 */
		get_position(_x: number, _y: number): void;
		/**
		 * Obtains the position of a window position in root
		 * window coordinates. This is similar to
		 * gdk_window_get_origin() but allows you to pass
		 * in any position in the window, not just the origin.
		 * @param _x X coordinate in window
		 * @param _y Y coordinate in window
		 * @param root_x return location for X coordinate
		 * @param root_y return location for Y coordinate
		 */
		get_root_coords(_x: number, _y: number, root_x: number, root_y: number): void;
		/**
		 * Obtains the top-left corner of the window manager frame in root
		 * window coordinates.
		 * @param _x return location for X position of window frame
		 * @param _y return location for Y position of window frame
		 */
		get_root_origin(_x: number, _y: number): void;
		/**
		 * Returns the internal scale factor that maps from window coordiantes
		 * to the actual device pixels. On traditional systems this is 1, but
		 * on very high density outputs this can be a higher value (often 2).
		 * 
		 * A higher value means that drawing is automatically scaled up to
		 * a higher resolution, so any code doing drawing will automatically look
		 * nicer. However, if you are supplying pixel-based data the scale
		 * value can be used to determine whether to use a pixel resource
		 * with higher resolution data.
		 * 
		 * The scale of a window may change during runtime, if this happens
		 * a configure event will be sent to the toplevel window.
		 * @returns the scale factor
		 */
		get_scale_factor(): number;
		/**
		 * Gets the {@link Screen} associated with a #GdkWindow.
		 * @returns the {@link Screen} associated with #window
		 */
		get_screen(): Screen;
		/**
		 * Returns the event mask for #window corresponding to the device class specified
		 * by #source.
		 * @param source a {@link InputSource} to define the source class.
		 * @returns source event mask for #window
		 */
		get_source_events(source: InputSource): EventMask;
		/**
		 * Gets the bitwise OR of the currently active window state flags,
		 * from the {@link WindowState} enumeration.
		 * @returns window state bitfield
		 */
		get_state(): WindowState;
		/**
		 * Returns %TRUE if the window is aware of the existence of multiple
		 * devices.
		 * @returns %TRUE if the window handles multidevice features.
		 */
		get_support_multidevice(): boolean;
		/**
		 * Gets the toplevel window that’s an ancestor of #window.
		 * 
		 * Any window type but %GDK_WINDOW_CHILD is considered a
		 * toplevel window, as is a %GDK_WINDOW_CHILD window that
		 * has a root window as parent.
		 * 
		 * Note that you should use gdk_window_get_effective_toplevel() when
		 * you want to get to a window’s toplevel as seen on screen, because
		 * gdk_window_get_toplevel() will most likely not do what you expect
		 * if there are offscreen windows in the hierarchy.
		 * @returns the toplevel window containing #window
		 */
		get_toplevel(): Window;
		/**
		 * This function returns the type hint set for a window.
		 * @returns The type hint set for #window
		 */
		get_type_hint(): WindowTypeHint;
		/**
		 * Transfers ownership of the update area from #window to the caller
		 * of the function. That is, after calling this function, #window will
		 * no longer have an invalid/dirty region; the update area is removed
		 * from #window and handed to you. If a window has no update area,
		 * gdk_window_get_update_area() returns %NULL. You are responsible for
		 * calling cairo_region_destroy() on the returned region if it’s non-%NULL.
		 * @returns the update area for #window
		 */
		get_update_area(): cairo.Region;
		/**
		 * Retrieves the user data for #window, which is normally the widget
		 * that #window belongs to. See gdk_window_set_user_data().
		 * @param data return location for user data
		 */
		get_user_data(data: any): void;
		/**
		 * Computes the region of the #window that is potentially visible.
		 * This does not necessarily take into account if the window is
		 * obscured by other windows, but no area outside of this region
		 * is visible.
		 * @returns a #cairo_region_t. This must be freed with cairo_region_destroy()
		 *          when you are done.
		 */
		get_visible_region(): cairo.Region;
		/**
		 * Gets the {@link Visual} describing the pixel format of #window.
		 * @returns a {@link Visual}
		 */
		get_visual(): Visual;
		/**
		 * Returns the width of the given #window.
		 * 
		 * On the X11 platform the returned size is the size reported in the
		 * most-recently-processed configure event, rather than the current
		 * size on the X server.
		 * @returns The width of #window
		 */
		get_width(): number;
		/**
		 * Gets the type of the window. See {@link WindowType}.
		 * @returns type of window
		 */
		get_window_type(): WindowType;
		/**
		 * Checks whether the window has a native window or not. Note that
		 * you can use gdk_window_ensure_native() if a native window is needed.
		 * @returns %TRUE if the #window has a native window, %FALSE otherwise.
		 */
		has_native(): boolean;
		/**
		 * For toplevel windows, withdraws them, so they will no longer be
		 * known to the window manager; for all windows, unmaps them, so
		 * they won’t be displayed. Normally done automatically as
		 * part of gtk_widget_hide().
		 */
		hide(): void;
		/**
		 * Asks to iconify (minimize) #window. The window manager may choose
		 * to ignore the request, but normally will honor it. Using
		 * gtk_window_iconify() is preferred, if you have a #GtkWindow widget.
		 * 
		 * This function only makes sense when #window is a toplevel window.
		 */
		iconify(): void;
		/**
		 * Like gdk_window_shape_combine_region(), but the shape applies
		 * only to event handling. Mouse events which happen while
		 * the pointer position corresponds to an unset bit in the
		 * mask will be passed on the window below #window.
		 * 
		 * An input shape is typically used with RGBA windows.
		 * The alpha channel of the window defines which pixels are
		 * invisible and allows for nicely antialiased borders,
		 * and the input shape controls where the window is
		 * “clickable”.
		 * 
		 * On the X11 platform, this requires version 1.1 of the
		 * shape extension.
		 * 
		 * On the Win32 platform, this functionality is not present and the
		 * function does nothing.
		 * @param shape_region region of window to be non-transparent
		 * @param offset_x X position of #shape_region in #window coordinates
		 * @param offset_y Y position of #shape_region in #window coordinates
		 */
		input_shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number): void;
		/**
		 * Adds #region to the update area for #window. The update area is the
		 * region that needs to be redrawn, or “dirty region.” The call
		 * gdk_window_process_updates() sends one or more expose events to the
		 * window, which together cover the entire update area. An
		 * application would normally redraw the contents of #window in
		 * response to those expose events.
		 * 
		 * GDK will call gdk_window_process_all_updates() on your behalf
		 * whenever your program returns to the main loop and becomes idle, so
		 * normally there’s no need to do that manually, you just need to
		 * invalidate regions that you know should be redrawn.
		 * 
		 * The #child_func parameter controls whether the region of
		 * each child window that intersects #region will also be invalidated.
		 * Only children for which #child_func returns #TRUE will have the area
		 * invalidated.
		 * @param region a #cairo_region_t
		 * @param child_func function to use to decide if to
		 *     recurse to a child, %NULL means never recurse.
		 */
		invalidate_maybe_recurse(region: cairo.Region, child_func: WindowChildFunc): void;
		/**
		 * A convenience wrapper around gdk_window_invalidate_region() which
		 * invalidates a rectangular region. See
		 * gdk_window_invalidate_region() for details.
		 * @param rect rectangle to invalidate or %NULL to invalidate the whole
		 *      window
		 * @param invalidate_children whether to also invalidate child windows
		 */
		invalidate_rect(rect: Rectangle, invalidate_children: boolean): void;
		/**
		 * Adds #region to the update area for #window. The update area is the
		 * region that needs to be redrawn, or “dirty region.” The call
		 * gdk_window_process_updates() sends one or more expose events to the
		 * window, which together cover the entire update area. An
		 * application would normally redraw the contents of #window in
		 * response to those expose events.
		 * 
		 * GDK will call gdk_window_process_all_updates() on your behalf
		 * whenever your program returns to the main loop and becomes idle, so
		 * normally there’s no need to do that manually, you just need to
		 * invalidate regions that you know should be redrawn.
		 * 
		 * The #invalidate_children parameter controls whether the region of
		 * each child window that intersects #region will also be invalidated.
		 * If %FALSE, then the update area for child windows will remain
		 * unaffected. See gdk_window_invalidate_maybe_recurse if you need
		 * fine grained control over which children are invalidated.
		 * @param region a #cairo_region_t
		 * @param invalidate_children %TRUE to also invalidate child windows
		 */
		invalidate_region(region: cairo.Region, invalidate_children: boolean): void;
		/**
		 * Check to see if a window is destroyed..
		 * @returns %TRUE if the window is destroyed
		 */
		is_destroyed(): boolean;
		/**
		 * Determines whether or not the window is an input only window.
		 * @returns %TRUE if #window is input only
		 */
		is_input_only(): boolean;
		/**
		 * Determines whether or not the window is shaped.
		 * @returns %TRUE if #window is shaped
		 */
		is_shaped(): boolean;
		/**
		 * Check if the window and all ancestors of the window are
		 * mapped. (This is not necessarily "viewable" in the X sense, since
		 * we only check as far as we have GDK window parents, not to the root
		 * window.)
		 * @returns %TRUE if the window is viewable
		 */
		is_viewable(): boolean;
		/**
		 * Checks whether the window has been mapped (with gdk_window_show() or
		 * gdk_window_show_unraised()).
		 * @returns %TRUE if the window is mapped
		 */
		is_visible(): boolean;
		/**
		 * Lowers #window to the bottom of the Z-order (stacking order), so that
		 * other windows with the same parent window appear above #window.
		 * This is true whether or not the other windows are visible.
		 * 
		 * If #window is a toplevel, the window manager may choose to deny the
		 * request to move the window in the Z-order, gdk_window_lower() only
		 * requests the restack, does not guarantee it.
		 * 
		 * Note that gdk_window_show() raises the window again, so don’t call this
		 * function before gdk_window_show(). (Try gdk_window_show_unraised().)
		 */
		lower(): void;
		/**
		 * If you call this during a paint (e.g. between gdk_window_begin_paint_region()
		 * and gdk_window_end_paint() then GDK will mark the current clip region of the
		 * window as being drawn. This is required when mixing GL rendering via
		 * gdk_cairo_draw_from_gl() and cairo rendering, as otherwise GDK has no way
		 * of knowing when something paints over the GL-drawn regions.
		 * 
		 * This is typically called automatically by GTK+ and you don't need
		 * to care about this.
		 * @param cr a #cairo_t
		 */
		mark_paint_from_clip(cr: cairo.Context): void;
		/**
		 * Maximizes the window. If the window was already maximized, then
		 * this function does nothing.
		 * 
		 * On X11, asks the window manager to maximize #window, if the window
		 * manager supports this operation. Not all window managers support
		 * this, and some deliberately ignore it or don’t have a concept of
		 * “maximized”; so you can’t rely on the maximization actually
		 * happening. But it will happen with most standard window managers,
		 * and GDK makes a best effort to get it to happen.
		 * 
		 * On Windows, reliably maximizes the window.
		 */
		maximize(): void;
		/**
		 * Merges the input shape masks for any child windows into the
		 * input shape mask for #window. i.e. the union of all input masks
		 * for #window and its children will become the new input mask
		 * for #window. See gdk_window_input_shape_combine_region().
		 * 
		 * This function is distinct from gdk_window_set_child_input_shapes()
		 * because it includes #window’s input shape mask in the set of
		 * shapes to be merged.
		 */
		merge_child_input_shapes(): void;
		/**
		 * Merges the shape masks for any child windows into the
		 * shape mask for #window. i.e. the union of all masks
		 * for #window and its children will become the new mask
		 * for #window. See gdk_window_shape_combine_region().
		 * 
		 * This function is distinct from gdk_window_set_child_shapes()
		 * because it includes #window’s shape mask in the set of shapes to
		 * be merged.
		 */
		merge_child_shapes(): void;
		/**
		 * Repositions a window relative to its parent window.
		 * For toplevel windows, window managers may ignore or modify the move;
		 * you should probably use gtk_window_move() on a #GtkWindow widget
		 * anyway, instead of using GDK functions. For child windows,
		 * the move will reliably succeed.
		 * 
		 * If you’re also planning to resize the window, use gdk_window_move_resize()
		 * to both move and resize simultaneously, for a nicer visual effect.
		 * @param _x X coordinate relative to window’s parent
		 * @param _y Y coordinate relative to window’s parent
		 */
		move(_x: number, _y: number): void;
		/**
		 * Move the part of #window indicated by #region by #dy pixels in the Y
		 * direction and #dx pixels in the X direction. The portions of #region
		 * that not covered by the new position of #region are invalidated.
		 * 
		 * Child windows are not moved.
		 * @param region The #cairo_region_t to move
		 * @param dx Amount to move in the X direction
		 * @param dy Amount to move in the Y direction
		 */
		move_region(region: cairo.Region, dx: number, dy: number): void;
		/**
		 * Equivalent to calling gdk_window_move() and gdk_window_resize(),
		 * except that both operations are performed at once, avoiding strange
		 * visual effects. (i.e. the user may be able to see the window first
		 * move, then resize, if you don’t use gdk_window_move_resize().)
		 * @param _x new X position relative to window’s parent
		 * @param _y new Y position relative to window’s parent
		 * @param width new width
		 * @param height new height
		 */
		move_resize(_x: number, _y: number, width: number, height: number): void;
		/**
		 * Moves #window to #rect, aligning their anchor points.
		 * 
		 * #rect is relative to the top-left corner of the window that #window is
		 * transient for. #rect_anchor and #window_anchor determine anchor points on
		 * #rect and #window to pin together. #rect's anchor point can optionally be
		 * offset by #rect_anchor_dx and #rect_anchor_dy, which is equivalent to
		 * offsetting the position of #window.
		 * 
		 * #anchor_hints determines how #window will be moved if the anchor points cause
		 * it to move off-screen. For example, %GDK_ANCHOR_FLIP_X will replace
		 * %GDK_GRAVITY_NORTH_WEST with %GDK_GRAVITY_NORTH_EAST and vice versa if
		 * #window extends beyond the left or right edges of the monitor.
		 * 
		 * Connect to the {@link Window}::moved-to-rect signal to find out how it was
		 * actually positioned.
		 * @param rect the destination {@link Rectangle} to align #window with
		 * @param rect_anchor the point on #rect to align with #window's anchor point
		 * @param window_anchor the point on #window to align with #rect's anchor point
		 * @param anchor_hints positioning hints to use when limited on space
		 * @param rect_anchor_dx horizontal offset to shift #window, i.e. #rect's anchor
		 *                  point
		 * @param rect_anchor_dy vertical offset to shift #window, i.e. #rect's anchor point
		 */
		move_to_rect(rect: Rectangle, rect_anchor: Gravity, window_anchor: Gravity, anchor_hints: AnchorHints, rect_anchor_dx: number, rect_anchor_dy: number): void;
		/**
		 * Like gdk_window_get_children(), but does not copy the list of
		 * children, so the list does not need to be freed.
		 * @returns 
		 *     a reference to the list of child windows in #window
		 */
		peek_children(): GLib.List;
		/**
		 * Sends one or more expose events to #window. The areas in each
		 * expose event will cover the entire update area for the window (see
		 * gdk_window_invalidate_region() for details). Normally GDK calls
		 * gdk_window_process_all_updates() on your behalf, so there’s no
		 * need to call this function unless you want to force expose events
		 * to be delivered immediately and synchronously (vs. the usual
		 * case, where GDK delivers them in an idle handler). Occasionally
		 * this is useful to produce nicer scrolling behavior, for example.
		 * @param update_children whether to also process updates for child windows
		 */
		process_updates(update_children: boolean): void;
		/**
		 * Raises #window to the top of the Z-order (stacking order), so that
		 * other windows with the same parent window appear below #window.
		 * This is true whether or not the windows are visible.
		 * 
		 * If #window is a toplevel, the window manager may choose to deny the
		 * request to move the window in the Z-order, gdk_window_raise() only
		 * requests the restack, does not guarantee it.
		 */
		raise(): void;
		/**
		 * Registers a window as a potential drop destination.
		 */
		register_dnd(): void;
		/**
		 * Remove a filter previously added with gdk_window_add_filter().
		 * @param _function previously-added filter function
		 * @param data user data for previously-added filter function
		 */
		remove_filter(_function: FilterFunc, data: any): void;
		/**
		 * Reparents #window into the given #new_parent. The window being
		 * reparented will be unmapped as a side effect.
		 * @param new_parent new parent to move #window into
		 * @param _x X location inside the new parent
		 * @param _y Y location inside the new parent
		 */
		reparent(new_parent: Window, _x: number, _y: number): void;
		/**
		 * Resizes #window; for toplevel windows, asks the window manager to resize
		 * the window. The window manager may not allow the resize. When using GTK+,
		 * use gtk_window_resize() instead of this low-level GDK function.
		 * 
		 * Windows may not be resized below 1x1.
		 * 
		 * If you’re also planning to move the window, use gdk_window_move_resize()
		 * to both move and resize simultaneously, for a nicer visual effect.
		 * @param width new width of the window
		 * @param height new height of the window
		 */
		resize(width: number, height: number): void;
		/**
		 * Changes the position of  #window in the Z-order (stacking order), so that
		 * it is above #sibling (if #above is %TRUE) or below #sibling (if #above is
		 * %FALSE).
		 * 
		 * If #sibling is %NULL, then this either raises (if #above is %TRUE) or
		 * lowers the window.
		 * 
		 * If #window is a toplevel, the window manager may choose to deny the
		 * request to move the window in the Z-order, gdk_window_restack() only
		 * requests the restack, does not guarantee it.
		 * @param sibling a {@link Window} that is a sibling of #window, or %NULL
		 * @param above a boolean
		 */
		restack(sibling: Window, above: boolean): void;
		/**
		 * Scroll the contents of #window, both pixels and children, by the
		 * given amount. #window itself does not move. Portions of the window
		 * that the scroll operation brings in from offscreen areas are
		 * invalidated. The invalidated region may be bigger than what would
		 * strictly be necessary.
		 * 
		 * For X11, a minimum area will be invalidated if the window has no
		 * subwindows, or if the edges of the window’s parent do not extend
		 * beyond the edges of the window. In other cases, a multi-step process
		 * is used to scroll the window which may produce temporary visual
		 * artifacts and unnecessary invalidations.
		 * @param dx Amount to scroll in the X direction
		 * @param dy Amount to scroll in the Y direction
		 */
		scroll(dx: number, dy: number): void;
		/**
		 * Setting #accept_focus to %FALSE hints the desktop environment that the
		 * window doesn’t want to receive input focus.
		 * 
		 * On X, it is the responsibility of the window manager to interpret this
		 * hint. ICCCM-compliant window manager usually respect it.
		 * @param accept_focus %TRUE if the window should receive input focus
		 */
		set_accept_focus(accept_focus: boolean): void;
		/**
		 * Sets the background color of #window.
		 * 
		 * However, when using GTK+, influence the background of a widget
		 * using a style class or CSS — if you’re an application — or with
		 * gtk_style_context_set_background() — if you're implementing a
		 * custom widget.
		 * @param color a {@link Color}
		 */
		set_background(color: Color): void;
		/**
		 * Sets the background of #window.
		 * 
		 * A background of %NULL means that the window won't have any background. On the
		 * X11 backend it's also possible to inherit the background from the parent
		 * window using gdk_x11_get_parent_relative_pattern().
		 * 
		 * The windowing system will normally fill a window with its background
		 * when the window is obscured then exposed.
		 * @param pattern a pattern to use, or %NULL
		 */
		set_background_pattern(pattern: cairo.Pattern): void;
		/**
		 * Sets the background color of #window.
		 * 
		 * See also gdk_window_set_background_pattern().
		 * @param rgba a {@link RGBA} color
		 */
		set_background_rgba(rgba: RGBA): void;
		/**
		 * Sets the input shape mask of #window to the union of input shape masks
		 * for all children of #window, ignoring the input shape mask of #window
		 * itself. Contrast with gdk_window_merge_child_input_shapes() which includes
		 * the input shape mask of #window in the masks to be merged.
		 */
		set_child_input_shapes(): void;
		/**
		 * Sets the shape mask of #window to the union of shape masks
		 * for all children of #window, ignoring the shape mask of #window
		 * itself. Contrast with gdk_window_merge_child_shapes() which includes
		 * the shape mask of #window in the masks to be merged.
		 */
		set_child_shapes(): void;
		/**
		 * Sets a {@link Window} as composited, or unsets it. Composited
		 * windows do not automatically have their contents drawn to
		 * the screen. Drawing is redirected to an offscreen buffer
		 * and an expose event is emitted on the parent of the composited
		 * window. It is the responsibility of the parent’s expose handler
		 * to manually merge the off-screen content onto the screen in
		 * whatever way it sees fit.
		 * 
		 * It only makes sense for child windows to be composited; see
		 * gdk_window_set_opacity() if you need translucent toplevel
		 * windows.
		 * 
		 * An additional effect of this call is that the area of this
		 * window is no longer clipped from regions marked for
		 * invalidation on its parent. Draws done on the parent
		 * window are also no longer clipped by the child.
		 * 
		 * This call is only supported on some systems (currently,
		 * only X11 with new enough Xcomposite and Xdamage extensions).
		 * You must call gdk_display_supports_composite() to check if
		 * setting a window as composited is supported before
		 * attempting to do so.
		 * @param composited %TRUE to set the window as composited
		 */
		set_composited(composited: boolean): void;
		/**
		 * Sets the default mouse pointer for a {@link Window}.
		 * 
		 * Note that #cursor must be for the same display as #window.
		 * 
		 * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to
		 * create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
		 * Passing %NULL for the #cursor argument to gdk_window_set_cursor() means
		 * that #window will use the cursor of its parent window. Most windows
		 * should use this default.
		 * @param cursor a cursor
		 */
		set_cursor(cursor: Cursor): void;
		/**
		 * “Decorations” are the features the window manager adds to a toplevel {@link Window}.
		 * This function sets the traditional Motif window manager hints that tell the
		 * window manager which decorations you would like your window to have.
		 * Usually you should use gtk_window_set_decorated() on a #GtkWindow instead of
		 * using the GDK function directly.
		 * 
		 * The #decorations argument is the logical OR of the fields in
		 * the #GdkWMDecoration enumeration. If #GDK_DECOR_ALL is included in the
		 * mask, the other bits indicate which decorations should be turned off.
		 * If #GDK_DECOR_ALL is not included, then the other bits indicate
		 * which decorations should be turned on.
		 * 
		 * Most window managers honor a decorations hint of 0 to disable all decorations,
		 * but very few honor all possible combinations of bits.
		 * @param decorations decoration hint mask
		 */
		set_decorations(decorations: WMDecoration): void;
		/**
		 * Sets a specific {@link Cursor} for a given device when it gets inside #window.
		 * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to create
		 * the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR. Passing
		 * %NULL for the #cursor argument to gdk_window_set_cursor() means that
		 * #window will use the cursor of its parent window. Most windows should
		 * use this default.
		 * @param device a master, pointer {@link Device}
		 * @param cursor a {@link Cursor}
		 */
		set_device_cursor(device: Device, cursor: Cursor): void;
		/**
		 * Sets the event mask for a given device (Normally a floating device, not
		 * attached to any visible pointer) to #window. For example, an event mask
		 * including #GDK_BUTTON_PRESS_MASK means the window should report button
		 * press events. The event mask is the bitwise OR of values from the
		 * {@link EventMask} enumeration.
		 * 
		 * See the [input handling overview][event-masks] for details.
		 * @param device {@link Device} to enable events for.
		 * @param event_mask event mask for #window
		 */
		set_device_events(device: Device, event_mask: EventMask): void;
		/**
		 * Determines whether or not extra unprocessed motion events in
		 * the event queue can be discarded. If %TRUE only the most recent
		 * event will be delivered.
		 * 
		 * Some types of applications, e.g. paint programs, need to see all
		 * motion events and will benefit from turning off event compression.
		 * 
		 * By default, event compression is enabled.
		 * @param event_compression %TRUE if motion events should be compressed
		 */
		set_event_compression(event_compression: boolean): void;
		/**
		 * The event mask for a window determines which events will be reported
		 * for that window from all master input devices. For example, an event mask
		 * including #GDK_BUTTON_PRESS_MASK means the window should report button
		 * press events. The event mask is the bitwise OR of values from the
		 * {@link EventMask} enumeration.
		 * 
		 * See the [input handling overview][event-masks] for details.
		 * @param event_mask event mask for #window
		 */
		set_events(event_mask: EventMask): void;
		/**
		 * Setting #focus_on_map to %FALSE hints the desktop environment that the
		 * window doesn’t want to receive input focus when it is mapped.
		 * focus_on_map should be turned off for windows that aren’t triggered
		 * interactively (such as popups from network activity).
		 * 
		 * On X, it is the responsibility of the window manager to interpret
		 * this hint. Window managers following the freedesktop.org window
		 * manager extension specification should respect it.
		 * @param focus_on_map %TRUE if the window should receive input focus when mapped
		 */
		set_focus_on_map(focus_on_map: boolean): void;
		/**
		 * Specifies whether the #window should span over all monitors (in a multi-head
		 * setup) or only the current monitor when in fullscreen mode.
		 * 
		 * The #mode argument is from the {@link FullscreenMode} enumeration.
		 * If #GDK_FULLSCREEN_ON_ALL_MONITORS is specified, the fullscreen #window will
		 * span over all monitors from the #GdkScreen.
		 * 
		 * On X11, searches through the list of monitors from the #GdkScreen the ones
		 * which delimit the 4 edges of the entire #GdkScreen and will ask the window
		 * manager to span the #window over these monitors.
		 * 
		 * If the XINERAMA extension is not available or not usable, this function
		 * has no effect.
		 * 
		 * Not all window managers support this, so you can’t rely on the fullscreen
		 * window to span over the multiple monitors when #GDK_FULLSCREEN_ON_ALL_MONITORS
		 * is specified.
		 * @param mode fullscreen mode
		 */
		set_fullscreen_mode(mode: FullscreenMode): void;
		/**
		 * Sets hints about the window management functions to make available
		 * via buttons on the window frame.
		 * 
		 * On the X backend, this function sets the traditional Motif window
		 * manager hint for this purpose. However, few window managers do
		 * anything reliable or interesting with this hint. Many ignore it
		 * entirely.
		 * 
		 * The #functions argument is the logical OR of values from the
		 * {@link WMFunction} enumeration. If the bitmask includes #GDK_FUNC_ALL,
		 * then the other bits indicate which functions to disable; if
		 * it doesn’t include #GDK_FUNC_ALL, it indicates which functions to
		 * enable.
		 * @param functions bitmask of operations to allow on #window
		 */
		set_functions(functions: WMFunction): void;
		/**
		 * Sets the geometry hints for #window. Hints flagged in #geom_mask
		 * are set, hints not flagged in #geom_mask are unset.
		 * To unset all hints, use a #geom_mask of 0 and a #geometry of %NULL.
		 * 
		 * This function provides hints to the windowing system about
		 * acceptable sizes for a toplevel window. The purpose of
		 * this is to constrain user resizing, but the windowing system
		 * will typically  (but is not required to) also constrain the
		 * current size of the window to the provided values and
		 * constrain programatic resizing via gdk_window_resize() or
		 * gdk_window_move_resize().
		 * 
		 * Note that on X11, this effect has no effect on windows
		 * of type %GDK_WINDOW_TEMP or windows where override redirect
		 * has been turned on via gdk_window_set_override_redirect()
		 * since these windows are not resizable by the user.
		 * 
		 * Since you can’t count on the windowing system doing the
		 * constraints for programmatic resizes, you should generally
		 * call gdk_window_constrain_size() yourself to determine
		 * appropriate sizes.
		 * @param geometry geometry hints
		 * @param geom_mask bitmask indicating fields of #geometry to pay attention to
		 */
		set_geometry_hints(geometry: Geometry, geom_mask: WindowHints): void;
		/**
		 * Sets the group leader window for #window. By default,
		 * GDK sets the group leader for all toplevel windows
		 * to a global window implicitly created by GDK. With this function
		 * you can override this default.
		 * 
		 * The group leader window allows the window manager to distinguish
		 * all windows that belong to a single application. It may for example
		 * allow users to minimize/unminimize all windows belonging to an
		 * application at once. You should only set a non-default group window
		 * if your application pretends to be multiple applications.
		 * @param leader group leader window, or %NULL to restore the default group leader window
		 */
		set_group(leader: Window): void;
		/**
		 * Sets a list of icons for the window. One of these will be used
		 * to represent the window when it has been iconified. The icon is
		 * usually shown in an icon box or some sort of task bar. Which icon
		 * size is shown depends on the window manager. The window manager
		 * can scale the icon  but setting several size icons can give better
		 * image quality since the window manager may only need to scale the
		 * icon by a small amount or not at all.
		 * 
		 * Note that some platforms don't support window icons.
		 * @param pixbufs 
		 *     A list of pixbufs, of different sizes.
		 */
		set_icon_list(pixbufs: GLib.List): void;
		/**
		 * Windows may have a name used while minimized, distinct from the
		 * name they display in their titlebar. Most of the time this is a bad
		 * idea from a user interface standpoint. But you can set such a name
		 * with this function, if you like.
		 * 
		 * After calling this with a non-%NULL #name, calls to gdk_window_set_title()
		 * will not update the icon title.
		 * 
		 * Using %NULL for #name unsets the icon title; further calls to
		 * gdk_window_set_title() will again update the icon title as well.
		 * 
		 * Note that some platforms don't support window icons.
		 * @param name name of window while iconified (minimized)
		 */
		set_icon_name(name: string): void;
		/**
		 * Registers an invalidate handler for a specific window. This
		 * will get called whenever a region in the window or its children
		 * is invalidated.
		 * 
		 * This can be used to record the invalidated region, which is
		 * useful if you are keeping an offscreen copy of some region
		 * and want to keep it up to date. You can also modify the
		 * invalidated region in case you’re doing some effect where
		 * e.g. a child widget appears in multiple places.
		 * @param handler a {@link WindowInvalidateHandlerFunc} callback function
		 */
		set_invalidate_handler(handler: WindowInvalidateHandlerFunc): void;
		/**
		 * Set if #window must be kept above other windows. If the
		 * window was already above, then this function does nothing.
		 * 
		 * On X11, asks the window manager to keep #window above, if the window
		 * manager supports this operation. Not all window managers support
		 * this, and some deliberately ignore it or don’t have a concept of
		 * “keep above”; so you can’t rely on the window being kept above.
		 * But it will happen with most standard window managers,
		 * and GDK makes a best effort to get it to happen.
		 * @param setting whether to keep #window above other windows
		 */
		set_keep_above(setting: boolean): void;
		/**
		 * Set if #window must be kept below other windows. If the
		 * window was already below, then this function does nothing.
		 * 
		 * On X11, asks the window manager to keep #window below, if the window
		 * manager supports this operation. Not all window managers support
		 * this, and some deliberately ignore it or don’t have a concept of
		 * “keep below”; so you can’t rely on the window being kept below.
		 * But it will happen with most standard window managers,
		 * and GDK makes a best effort to get it to happen.
		 * @param setting whether to keep #window below other windows
		 */
		set_keep_below(setting: boolean): void;
		/**
		 * The application can use this hint to tell the window manager
		 * that a certain window has modal behaviour. The window manager
		 * can use this information to handle modal windows in a special
		 * way.
		 * 
		 * You should only use this on windows for which you have
		 * previously called gdk_window_set_transient_for()
		 * @param modal %TRUE if the window is modal, %FALSE otherwise.
		 */
		set_modal_hint(modal: boolean): void;
		/**
		 * Set #window to render as partially transparent,
		 * with opacity 0 being fully transparent and 1 fully opaque. (Values
		 * of the opacity parameter are clamped to the [0,1] range.)
		 * 
		 * For toplevel windows this depends on support from the windowing system
		 * that may not always be there. For instance, On X11, this works only on
		 * X screens with a compositing manager running. On Wayland, there is no
		 * per-window opacity value that the compositor would apply. Instead, use
		 * `gdk_window_set_opaque_region (window, NULL)` to tell the compositor
		 * that the entire window is (potentially) non-opaque, and draw your content
		 * with alpha, or use gtk_widget_set_opacity() to set an overall opacity
		 * for your widgets.
		 * 
		 * For child windows this function only works for non-native windows.
		 * 
		 * For setting up per-pixel alpha topelevels, see gdk_screen_get_rgba_visual(),
		 * and for non-toplevels, see gdk_window_set_composited().
		 * 
		 * Support for non-toplevel windows was added in 3.8.
		 * @param opacity opacity
		 */
		set_opacity(opacity: number): void;
		/**
		 * For optimisation purposes, compositing window managers may
		 * like to not draw obscured regions of windows, or turn off blending
		 * during for these regions. With RGB windows with no transparency,
		 * this is just the shape of the window, but with ARGB32 windows, the
		 * compositor does not know what regions of the window are transparent
		 * or not.
		 * 
		 * This function only works for toplevel windows.
		 * 
		 * GTK+ will update this property automatically if
		 * the #window background is opaque, as we know where the opaque regions
		 * are. If your window background is not opaque, please update this
		 * property in your #GtkWidget::style-updated handler.
		 * @param region a region, or %NULL
		 */
		set_opaque_region(region: cairo.Region): void;
		/**
		 * An override redirect window is not under the control of the window manager.
		 * This means it won’t have a titlebar, won’t be minimizable, etc. - it will
		 * be entirely under the control of the application. The window manager
		 * can’t see the override redirect window at all.
		 * 
		 * Override redirect should only be used for short-lived temporary
		 * windows, such as popup menus. #GtkMenu uses an override redirect
		 * window in its implementation, for example.
		 * @param override_redirect %TRUE if window should be override redirect
		 */
		set_override_redirect(override_redirect: boolean): void;
		/**
		 * Sets whether input to the window is passed through to the window
		 * below.
		 * 
		 * The default value of this is %FALSE, which means that pointer
		 * events that happen inside the window are send first to the window,
		 * but if the event is not selected by the event mask then the event
		 * is sent to the parent window, and so on up the hierarchy.
		 * 
		 * If #pass_through is %TRUE then such pointer events happen as if the
		 * window wasn't there at all, and thus will be sent first to any
		 * windows below #window. This is useful if the window is used in a
		 * transparent fashion. In the terminology of the web this would be called
		 * "pointer-events: none".
		 * 
		 * Note that a window with #pass_through %TRUE can still have a subwindow
		 * without pass through, so you can get events on a subset of a window. And in
		 * that cases you would get the in-between related events such as the pointer
		 * enter/leave events on its way to the destination window.
		 * @param pass_through a boolean
		 */
		set_pass_through(pass_through: boolean): void;
		/**
		 * When using GTK+, typically you should use gtk_window_set_role() instead
		 * of this low-level function.
		 * 
		 * The window manager and session manager use a window’s role to
		 * distinguish it from other kinds of window in the same application.
		 * When an application is restarted after being saved in a previous
		 * session, all windows with the same title and role are treated as
		 * interchangeable.  So if you have two windows with the same title
		 * that should be distinguished for session management purposes, you
		 * should set the role on those windows. It doesn’t matter what string
		 * you use for the role, as long as you have a different role for each
		 * non-interchangeable kind of window.
		 * @param role a string indicating its role
		 */
		set_role(role: string): void;
		/**
		 * Newer GTK+ windows using client-side decorations use extra geometry
		 * around their frames for effects like shadows and invisible borders.
		 * Window managers that want to maximize windows or snap to edges need
		 * to know where the extents of the actual frame lie, so that users
		 * don’t feel like windows are snapping against random invisible edges.
		 * 
		 * Note that this property is automatically updated by GTK+, so this
		 * function should only be used by applications which do not use GTK+
		 * to create toplevel windows.
		 * @param left The left extent
		 * @param right The right extent
		 * @param top The top extent
		 * @param bottom The bottom extent
		 */
		set_shadow_width(left: number, right: number, top: number, bottom: number): void;
		/**
		 * Toggles whether a window should appear in a pager (workspace
		 * switcher, or other desktop utility program that displays a small
		 * thumbnail representation of the windows on the desktop). If a
		 * window’s semantic type as specified with gdk_window_set_type_hint()
		 * already fully describes the window, this function should
		 * not be called in addition, instead you should
		 * allow the window to be treated according to standard policy for
		 * its semantic type.
		 * @param skips_pager %TRUE to skip the pager
		 */
		set_skip_pager_hint(skips_pager: boolean): void;
		/**
		 * Toggles whether a window should appear in a task list or window
		 * list. If a window’s semantic type as specified with
		 * gdk_window_set_type_hint() already fully describes the window, this
		 * function should not be called in addition,
		 * instead you should allow the window to be treated according to
		 * standard policy for its semantic type.
		 * @param skips_taskbar %TRUE to skip the taskbar
		 */
		set_skip_taskbar_hint(skips_taskbar: boolean): void;
		/**
		 * Sets the event mask for any floating device (i.e. not attached to any
		 * visible pointer) that has the source defined as #source. This event
		 * mask will be applied both to currently existing, newly added devices
		 * after this call, and devices being attached/detached.
		 * @param source a {@link InputSource} to define the source class.
		 * @param event_mask event mask for #window
		 */
		set_source_events(source: InputSource, event_mask: EventMask): void;
		/**
		 * When using GTK+, typically you should use gtk_window_set_startup_id()
		 * instead of this low-level function.
		 * @param startup_id a string with startup-notification identifier
		 */
		set_startup_id(startup_id: string): void;
		/**
		 * Used to set the bit gravity of the given window to static, and flag
		 * it so all children get static subwindow gravity. This is used if you
		 * are implementing scary features that involve deep knowledge of the
		 * windowing system. Don’t worry about it.
		 * @param use_static %TRUE to turn on static gravity
		 * @returns %FALSE
		 */
		set_static_gravities(use_static: boolean): boolean;
		/**
		 * This function will enable multidevice features in #window.
		 * 
		 * Multidevice aware windows will need to handle properly multiple,
		 * per device enter/leave events, device grabs and grab ownerships.
		 * @param support_multidevice %TRUE to enable multidevice support in #window.
		 */
		set_support_multidevice(support_multidevice: boolean): void;
		/**
		 * Sets the title of a toplevel window, to be displayed in the titlebar.
		 * If you haven’t explicitly set the icon name for the window
		 * (using gdk_window_set_icon_name()), the icon name will be set to
		 * #title as well. #title must be in UTF-8 encoding (as with all
		 * user-readable strings in GDK/GTK+). #title may not be %NULL.
		 * @param title title of #window
		 */
		set_title(title: string): void;
		/**
		 * Indicates to the window manager that #window is a transient dialog
		 * associated with the application window #parent. This allows the
		 * window manager to do things like center #window on #parent and
		 * keep #window above #parent.
		 * 
		 * See gtk_window_set_transient_for() if you’re using #GtkWindow or
		 * #GtkDialog.
		 * @param parent another toplevel {@link Window}
		 */
		set_transient_for(parent: Window): void;
		/**
		 * The application can use this call to provide a hint to the window
		 * manager about the functionality of a window. The window manager
		 * can use this information when determining the decoration and behaviour
		 * of the window.
		 * 
		 * The hint must be set before the window is mapped.
		 * @param hint A hint of the function this window will have
		 */
		set_type_hint(hint: WindowTypeHint): void;
		/**
		 * Toggles whether a window needs the user's
		 * urgent attention.
		 * @param urgent %TRUE if the window is urgent
		 */
		set_urgency_hint(urgent: boolean): void;
		/**
		 * For most purposes this function is deprecated in favor of
		 * g_object_set_data(). However, for historical reasons GTK+ stores
		 * the #GtkWidget that owns a {@link Window} as user data on the
		 * #GdkWindow. So, custom widget implementations should use
		 * this function for that. If GTK+ receives an event for a #GdkWindow,
		 * and the user data for the window is non-%NULL, GTK+ will assume the
		 * user data is a #GtkWidget, and forward the event to that widget.
		 */
		set_user_data(): void;
		/**
		 * Makes pixels in #window outside #shape_region be transparent,
		 * so that the window may be nonrectangular.
		 * 
		 * If #shape_region is %NULL, the shape will be unset, so the whole
		 * window will be opaque again. #offset_x and #offset_y are ignored
		 * if #shape_region is %NULL.
		 * 
		 * On the X11 platform, this uses an X server extension which is
		 * widely available on most common platforms, but not available on
		 * very old X servers, and occasionally the implementation will be
		 * buggy. On servers without the shape extension, this function
		 * will do nothing.
		 * 
		 * This function works on both toplevel and child windows.
		 * @param shape_region region of window to be non-transparent
		 * @param offset_x X position of #shape_region in #window coordinates
		 * @param offset_y Y position of #shape_region in #window coordinates
		 */
		shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number): void;
		/**
		 * Like gdk_window_show_unraised(), but also raises the window to the
		 * top of the window stack (moves the window to the front of the
		 * Z-order).
		 * 
		 * This function maps a window so it’s visible onscreen. Its opposite
		 * is gdk_window_hide().
		 * 
		 * When implementing a #GtkWidget, you should call this function on the widget's
		 * {@link Window} as part of the “map” method.
		 */
		show(): void;
		/**
		 * Shows a {@link Window} onscreen, but does not modify its stacking
		 * order. In contrast, gdk_window_show() will raise the window
		 * to the top of the window stack.
		 * 
		 * On the X11 platform, in Xlib terms, this function calls
		 * XMapWindow() (it also updates some internal GDK state, which means
		 * that you can’t really use XMapWindow() directly on a GDK window).
		 */
		show_unraised(): void;
		/**
		 * Asks the windowing system to show the window menu. The window menu
		 * is the menu shown when right-clicking the titlebar on traditional
		 * windows managed by the window manager. This is useful for windows
		 * using client-side decorations, activating it with a right-click
		 * on the window decorations.
		 * @param event a {@link Event} to show the menu for
		 * @returns %TRUE if the window menu was shown and %FALSE otherwise.
		 */
		show_window_menu(event: Event): boolean;
		/**
		 * “Pins” a window such that it’s on all workspaces and does not scroll
		 * with viewports, for window managers that have scrollable viewports.
		 * (When using #GtkWindow, gtk_window_stick() may be more useful.)
		 * 
		 * On the X11 platform, this function depends on window manager
		 * support, so may have no effect with many window managers. However,
		 * GDK will do the best it can to convince the window manager to stick
		 * the window. For window managers that don’t support this operation,
		 * there’s nothing you can do to force it to happen.
		 */
		stick(): void;
		/**
		 * Thaws a window frozen with
		 * gdk_window_freeze_toplevel_updates_libgtk_only().
		 * 
		 * This function is not part of the GDK public API and is only
		 * for use by GTK+.
		 */
		thaw_toplevel_updates_libgtk_only(): void;
		/**
		 * Thaws a window frozen with gdk_window_freeze_updates().
		 */
		thaw_updates(): void;
		/**
		 * Moves the window out of fullscreen mode. If the window was not
		 * fullscreen, does nothing.
		 * 
		 * On X11, asks the window manager to move #window out of the fullscreen
		 * state, if the window manager supports this operation. Not all
		 * window managers support this, and some deliberately ignore it or
		 * don’t have a concept of “fullscreen”; so you can’t rely on the
		 * unfullscreenification actually happening. But it will happen with
		 * most standard window managers, and GDK makes a best effort to get
		 * it to happen.
		 */
		unfullscreen(): void;
		/**
		 * Unmaximizes the window. If the window wasn’t maximized, then this
		 * function does nothing.
		 * 
		 * On X11, asks the window manager to unmaximize #window, if the
		 * window manager supports this operation. Not all window managers
		 * support this, and some deliberately ignore it or don’t have a
		 * concept of “maximized”; so you can’t rely on the unmaximization
		 * actually happening. But it will happen with most standard window
		 * managers, and GDK makes a best effort to get it to happen.
		 * 
		 * On Windows, reliably unmaximizes the window.
		 */
		unmaximize(): void;
		/**
		 * Reverse operation for gdk_window_stick(); see gdk_window_stick(),
		 * and gtk_window_unstick().
		 */
		unstick(): void;
		/**
		 * Withdraws a window (unmaps it and asks the window manager to forget about it).
		 * This function is not really useful as gdk_window_hide() automatically
		 * withdraws toplevel windows before hiding them.
		 */
		withdraw(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Window} instead.
	 */
	type WindowMixin = IWindow & GObject.IObject;

	interface Window extends WindowMixin {}

	class Window {
		public constructor();
		/**
		 * Creates a new {@link Window} using the attributes from
		 * #attributes. See #GdkWindowAttr and #GdkWindowAttributesType for
		 * more details.  Note: to use this on displays other than the default
		 * display, #parent must be specified.
		 * @param parent a {@link Window}, or %NULL to create the window as a child of
		 *   the default root window for the default display.
		 * @param attributes attributes of the new window
		 * @param attributes_mask mask indicating which
		 *   fields in #attributes are valid
		 * @returns the new {@link Window}
		 */
		public static new(parent: Window, attributes: WindowAttr, attributes_mask: WindowAttributesType): Window;
		/**
		 * Obtains the window underneath the mouse pointer, returning the
		 * location of that window in #win_x, #win_y. Returns %NULL if the
		 * window under the mouse pointer is not known to GDK (if the window
		 * belongs to another application and a {@link Window} hasn’t been created
		 * for it with gdk_window_foreign_new())
		 * 
		 * NOTE: For multihead-aware widgets or applications use
		 * gdk_display_get_window_at_pointer() instead.
		 * @param win_x return location for origin of the window under the pointer
		 * @param win_y return location for origin of the window under the pointer
		 * @returns window under the mouse pointer
		 */
		public static at_pointer(win_x: number, win_y: number): Window;
		/**
		 * Constrains a desired width and height according to a
		 * set of geometry hints (such as minimum and maximum size).
		 * @param geometry a {@link Geometry} structure
		 * @param flags a mask indicating what portions of #geometry are set
		 * @param width desired width of window
		 * @param height desired height of the window
		 * @param new_width location to store resulting width
		 * @param new_height location to store resulting height
		 */
		public static constrain_size(geometry: Geometry, flags: WindowHints, width: number, height: number, new_width: number, new_height: number): void;
		/**
		 * Calls gdk_window_process_updates() for all windows (see {@link Window})
		 * in the application.
		 */
		public static process_all_updates(): void;
		/**
		 * With update debugging enabled, calls to
		 * gdk_window_invalidate_region() clear the invalidated region of the
		 * screen to a noticeable color, and GDK pauses for a short time
		 * before sending exposes to windows during
		 * gdk_window_process_updates().  The net effect is that you can see
		 * the invalid region for each window and watch redraws as they
		 * occur. This allows you to diagnose inefficiencies in your application.
		 * 
		 * In essence, because the GDK rendering model prevents all flicker,
		 * if you are redrawing the same region 400 times you may never
		 * notice, aside from noticing a speed problem. Enabling update
		 * debugging causes GTK to flicker slowly and noticeably, so you can
		 * see exactly what’s being redrawn when, in what order.
		 * 
		 * The --gtk-debug=updates command line option passed to GTK+ programs
		 * enables this debug option at application startup time. That's
		 * usually more useful than calling gdk_window_set_debug_updates()
		 * yourself, though you might want to use this function to enable
		 * updates sometime after application startup time.
		 * @param setting %TRUE to turn on update debugging
		 */
		public static set_debug_updates(setting: boolean): void;
	}

	/**
	 * An opaque type representing a string as an index into a table
	 * of strings on the X server.
	 */
	interface Atom {}
	class Atom {
		public constructor();
		/**
		 * Determines the string corresponding to an atom.
		 * @returns a newly-allocated string containing the string
		 *   corresponding to #atom. When you are done with the
		 *   return value, you should free it using g_free().
		 */
		public name(): string;
	}

	/**
	 * A {@link Color} is used to describe a color,
	 * similar to the XColor struct used in the X11 drawing API.
	 */
	interface Color {}
	class Color {
		public constructor();
		/**
		 * For allocated colors, the pixel value used to
		 *     draw this color on the screen. Not used anymore.
		 */
		public pixel: number;
		/**
		 * The red component of the color. This is
		 *     a value between 0 and 65535, with 65535 indicating
		 *     full intensity
		 */
		public red: number;
		/**
		 * The green component of the color
		 */
		public green: number;
		/**
		 * The blue component of the color
		 */
		public blue: number;
		/**
		 * Makes a copy of a {@link Color}.
		 * 
		 * The result must be freed using gdk_color_free().
		 * @returns a copy of #color
		 */
		public copy(): Color;
		/**
		 * Compares two colors.
		 * @param colorb another {@link Color}
		 * @returns %TRUE if the two colors compare equal
		 */
		public equal(colorb: Color): boolean;
		/**
		 * Frees a {@link Color} created with gdk_color_copy().
		 */
		public free(): void;
		/**
		 * A hash function suitable for using for a hash
		 * table that stores {@link Colors}.
		 * @returns The hash function applied to #color
		 */
		public hash(): number;
		/**
		 * Returns a textual specification of #color in the hexadecimal
		 * form “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits
		 * representing the red, green and blue components respectively.
		 * 
		 * The returned string can be parsed by gdk_color_parse().
		 * @returns a newly-allocated text string
		 */
		public to_string(): string;
	}

	interface DevicePadInterface {}
	class DevicePadInterface {
		public constructor();
	}

	interface DrawingContextClass {}
	class DrawingContextClass {
		public constructor();
	}

	/**
	 * Contains the fields which are common to all event structs.
	 * Any event pointer can safely be cast to a pointer to a {@link EventAny} to
	 * access these fields.
	 */
	interface EventAny {}
	class EventAny {
		public constructor();
		/**
		 * the type of the event.
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
	}

	/**
	 * Used for button press and button release events. The
	 * #type field will be one of %GDK_BUTTON_PRESS,
	 * %GDK_2BUTTON_PRESS, %GDK_3BUTTON_PRESS or %GDK_BUTTON_RELEASE,
	 * 
	 * Double and triple-clicks result in a sequence of events being received.
	 * For double-clicks the order of events will be:
	 * 
	 * - %GDK_BUTTON_PRESS
	 * - %GDK_BUTTON_RELEASE
	 * - %GDK_BUTTON_PRESS
	 * - %GDK_2BUTTON_PRESS
	 * - %GDK_BUTTON_RELEASE
	 * 
	 * Note that the first click is received just like a normal
	 * button press, while the second click results in a %GDK_2BUTTON_PRESS
	 * being received just after the %GDK_BUTTON_PRESS.
	 * 
	 * Triple-clicks are very similar to double-clicks, except that
	 * %GDK_3BUTTON_PRESS is inserted after the third click. The order of the
	 * events is:
	 * 
	 * - %GDK_BUTTON_PRESS
	 * - %GDK_BUTTON_RELEASE
	 * - %GDK_BUTTON_PRESS
	 * - %GDK_2BUTTON_PRESS
	 * - %GDK_BUTTON_RELEASE
	 * - %GDK_BUTTON_PRESS
	 * - %GDK_3BUTTON_PRESS
	 * - %GDK_BUTTON_RELEASE
	 * 
	 * For a double click to occur, the second button press must occur within
	 * 1/4 of a second of the first. For a triple click to occur, the third
	 * button press must also occur within 1/2 second of the first button press.
	 */
	interface EventButton {}
	class EventButton {
		public constructor();
		/**
		 * the type of the event (%GDK_BUTTON_PRESS, %GDK_2BUTTON_PRESS,
		 *   %GDK_3BUTTON_PRESS or %GDK_BUTTON_RELEASE).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the x coordinate of the pointer relative to the window.
		 */
		public x: number;
		/**
		 * the y coordinate of the pointer relative to the window.
		 */
		public y: number;
		/**
		 * #x, #y translated to the axes of #device, or %NULL if #device is
		 *   the mouse.
		 */
		public axes: number;
		/**
		 * a bit-mask representing the state of
		 *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
		 *   buttons. See {@link ModifierType}.
		 */
		public state: ModifierType;
		/**
		 * the button which was pressed or released, numbered from 1 to 5.
		 *   Normally button 1 is the left mouse button, 2 is the middle button,
		 *   and 3 is the right button. On 2-button mice, the middle button can
		 *   often be simulated by pressing both mouse buttons together.
		 */
		public button: number;
		/**
		 * the master device that the event originated from. Use
		 * gdk_event_get_source_device() to get the slave device.
		 */
		public device: Device;
		/**
		 * the x coordinate of the pointer relative to the root of the
		 *   screen.
		 */
		public x_root: number;
		/**
		 * the y coordinate of the pointer relative to the root of the
		 *   screen.
		 */
		public y_root: number;
	}

	/**
	 * Generated when a window size or position has changed.
	 */
	interface EventConfigure {}
	class EventConfigure {
		public constructor();
		/**
		 * the type of the event (%GDK_CONFIGURE).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the new x coordinate of the window, relative to its parent.
		 */
		public x: number;
		/**
		 * the new y coordinate of the window, relative to its parent.
		 */
		public y: number;
		/**
		 * the new width of the window.
		 */
		public width: number;
		/**
		 * the new height of the window.
		 */
		public height: number;
	}

	/**
	 * Generated when the pointer enters or leaves a window.
	 */
	interface EventCrossing {}
	class EventCrossing {
		public constructor();
		/**
		 * the type of the event (%GDK_ENTER_NOTIFY or %GDK_LEAVE_NOTIFY).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the window that was entered or left.
		 */
		public subwindow: Window;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the x coordinate of the pointer relative to the window.
		 */
		public x: number;
		/**
		 * the y coordinate of the pointer relative to the window.
		 */
		public y: number;
		/**
		 * the x coordinate of the pointer relative to the root of the screen.
		 */
		public x_root: number;
		/**
		 * the y coordinate of the pointer relative to the root of the screen.
		 */
		public y_root: number;
		/**
		 * the crossing mode (%GDK_CROSSING_NORMAL, %GDK_CROSSING_GRAB,
		 *  %GDK_CROSSING_UNGRAB, %GDK_CROSSING_GTK_GRAB, %GDK_CROSSING_GTK_UNGRAB or
		 *  %GDK_CROSSING_STATE_CHANGED).  %GDK_CROSSING_GTK_GRAB, %GDK_CROSSING_GTK_UNGRAB,
		 *  and %GDK_CROSSING_STATE_CHANGED were added in 2.14 and are always synthesized,
		 *  never native.
		 */
		public mode: CrossingMode;
		/**
		 * the kind of crossing that happened (%GDK_NOTIFY_INFERIOR,
		 *  %GDK_NOTIFY_ANCESTOR, %GDK_NOTIFY_VIRTUAL, %GDK_NOTIFY_NONLINEAR or
		 *  %GDK_NOTIFY_NONLINEAR_VIRTUAL).
		 */
		public detail: NotifyType;
		/**
		 * %TRUE if #window is the focus window or an inferior.
		 */
		public focus: boolean;
		/**
		 * a bit-mask representing the state of
		 *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
		 *   buttons. See {@link ModifierType}.
		 */
		public state: ModifierType;
	}

	/**
	 * Generated during DND operations.
	 */
	interface EventDND {}
	class EventDND {
		public constructor();
		/**
		 * the type of the event (%GDK_DRAG_ENTER, %GDK_DRAG_LEAVE,
		 *   %GDK_DRAG_MOTION, %GDK_DRAG_STATUS, %GDK_DROP_START or
		 *   %GDK_DROP_FINISHED).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the {@link DragContext} for the current DND operation.
		 */
		public context: DragContext;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the x coordinate of the pointer relative to the root of the
		 *   screen, only set for %GDK_DRAG_MOTION and %GDK_DROP_START.
		 */
		public x_root: number;
		/**
		 * the y coordinate of the pointer relative to the root of the
		 *   screen, only set for %GDK_DRAG_MOTION and %GDK_DROP_START.
		 */
		public y_root: number;
	}

	/**
	 * Generated when all or part of a window becomes visible and needs to be
	 * redrawn.
	 */
	interface EventExpose {}
	class EventExpose {
		public constructor();
		/**
		 * the type of the event (%GDK_EXPOSE or %GDK_DAMAGE).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * bounding box of #region.
		 */
		public area: Rectangle;
		/**
		 * the region that needs to be redrawn.
		 */
		public region: cairo.Region;
		/**
		 * the number of contiguous %GDK_EXPOSE events following this one.
		 *   The only use for this is “exposure compression”, i.e. handling all
		 *   contiguous %GDK_EXPOSE events in one go, though GDK performs some
		 *   exposure compression so this is not normally needed.
		 */
		public count: number;
	}

	/**
	 * Describes a change of keyboard focus.
	 */
	interface EventFocus {}
	class EventFocus {
		public constructor();
		/**
		 * the type of the event (%GDK_FOCUS_CHANGE).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * %TRUE if the window has gained the keyboard focus, %FALSE if
		 *   it has lost the focus.
		 */
		public in: number;
	}

	/**
	 * Generated when a pointer or keyboard grab is broken. On X11, this happens
	 * when the grab window becomes unviewable (i.e. it or one of its ancestors
	 * is unmapped), or if the same application grabs the pointer or keyboard
	 * again. Note that implicit grabs (which are initiated by button presses)
	 * can also cause {@link EventGrabBroken} events.
	 */
	interface EventGrabBroken {}
	class EventGrabBroken {
		public constructor();
		/**
		 * the type of the event (%GDK_GRAB_BROKEN)
		 */
		public type: EventType;
		/**
		 * the window which received the event, i.e. the window
		 *   that previously owned the grab
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * %TRUE if a keyboard grab was broken, %FALSE if a pointer
		 *   grab was broken
		 */
		public keyboard: boolean;
		/**
		 * %TRUE if the broken grab was implicit
		 */
		public implicit: boolean;
		/**
		 * If this event is caused by another grab in the same
		 *   application, #grab_window contains the new grab window. Otherwise
		 *   #grab_window is %NULL.
		 */
		public grab_window: Window;
	}

	/**
	 * Describes a key press or key release event.
	 */
	interface EventKey {}
	class EventKey {
		public constructor();
		/**
		 * the type of the event (%GDK_KEY_PRESS or %GDK_KEY_RELEASE).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * a bit-mask representing the state of
		 *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
		 *   buttons. See {@link ModifierType}.
		 */
		public state: ModifierType;
		/**
		 * the key that was pressed or released. See the
		 *   `gdk/gdkkeysyms.h` header file for a
		 *   complete list of GDK key codes.
		 */
		public keyval: number;
		/**
		 * the length of #string.
		 */
		public length: number;
		/**
		 * a string containing an approximation of the text that
		 *   would result from this keypress. The only correct way to handle text
		 *   input of text is using input methods (see #GtkIMContext), so this
		 *   field is deprecated and should never be used.
		 *   (gdk_unicode_to_keyval() provides a non-deprecated way of getting
		 *   an approximate translation for a key.) The string is encoded in the
		 *   encoding of the current locale (Note: this for backwards compatibility:
		 *   strings in GTK+ and GDK are typically in UTF-8.) and NUL-terminated.
		 *   In some cases, the translation of the key code will be a single
		 *   NUL byte, in which case looking at #length is necessary to distinguish
		 *   it from the an empty translation.
		 */
		public string: string;
		/**
		 * the raw code of the key that was pressed or released.
		 */
		public hardware_keycode: number;
		/**
		 * the keyboard group.
		 */
		public group: number;
		/**
		 * a flag that indicates if #hardware_keycode is mapped to a
		 *   modifier. Since 2.10
		 */
		public is_modifier: number;
	}

	/**
	 * Generated when the pointer moves.
	 */
	interface EventMotion {}
	class EventMotion {
		public constructor();
		/**
		 * the type of the event.
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the x coordinate of the pointer relative to the window.
		 */
		public x: number;
		/**
		 * the y coordinate of the pointer relative to the window.
		 */
		public y: number;
		/**
		 * #x, #y translated to the axes of #device, or %NULL if #device is
		 *   the mouse.
		 */
		public axes: number;
		/**
		 * a bit-mask representing the state of
		 *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
		 *   buttons. See {@link ModifierType}.
		 */
		public state: ModifierType;
		/**
		 * set to 1 if this event is just a hint, see the
		 *   %GDK_POINTER_MOTION_HINT_MASK value of {@link EventMask}.
		 */
		public is_hint: number;
		/**
		 * the master device that the event originated from. Use
		 * gdk_event_get_source_device() to get the slave device.
		 */
		public device: Device;
		/**
		 * the x coordinate of the pointer relative to the root of the
		 *   screen.
		 */
		public x_root: number;
		/**
		 * the y coordinate of the pointer relative to the root of the
		 *   screen.
		 */
		public y_root: number;
	}

	/**
	 * Generated when the owner of a selection changes. On X11, this
	 * information is only available if the X server supports the XFIXES
	 * extension.
	 */
	interface EventOwnerChange {}
	class EventOwnerChange {
		public constructor();
		/**
		 * the type of the event (%GDK_OWNER_CHANGE).
		 */
		public type: EventType;
		/**
		 * the window which received the event
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the new owner of the selection, or %NULL if there is none
		 */
		public owner: Window;
		/**
		 * the reason for the ownership change as a {@link OwnerChange} value
		 */
		public reason: OwnerChange;
		/**
		 * the atom identifying the selection
		 */
		public selection: Atom;
		/**
		 * the timestamp of the event
		 */
		public time: number;
		/**
		 * the time at which the selection ownership was taken
		 *   over
		 */
		public selection_time: number;
	}

	/**
	 * Generated during %GDK_SOURCE_TABLET_PAD interaction with tactile sensors.
	 */
	interface EventPadAxis {}
	class EventPadAxis {
		public constructor();
		/**
		 * the type of the event (%GDK_PAD_RING or %GDK_PAD_STRIP).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the pad group the ring/strip belongs to. A %GDK_SOURCE_TABLET_PAD
		 *   device may have one or more groups containing a set of buttons/rings/strips
		 *   each.
		 */
		public group: number;
		/**
		 * number of strip/ring that was interacted. This number is 0-indexed.
		 */
		public index: number;
		/**
		 * The current mode of #group. Different groups in a %GDK_SOURCE_TABLET_PAD
		 *   device may have different current modes.
		 */
		public mode: number;
		/**
		 * The current value for the given axis.
		 */
		public value: number;
	}

	/**
	 * Generated during %GDK_SOURCE_TABLET_PAD button presses and releases.
	 */
	interface EventPadButton {}
	class EventPadButton {
		public constructor();
		/**
		 * the type of the event (%GDK_PAD_BUTTON_PRESS or %GDK_PAD_BUTTON_RELEASE).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the pad group the button belongs to. A %GDK_SOURCE_TABLET_PAD device
		 *   may have one or more groups containing a set of buttons/rings/strips each.
		 */
		public group: number;
		/**
		 * The pad button that was pressed.
		 */
		public button: number;
		/**
		 * The current mode of #group. Different groups in a %GDK_SOURCE_TABLET_PAD
		 *   device may have different current modes.
		 */
		public mode: number;
	}

	/**
	 * Generated during %GDK_SOURCE_TABLET_PAD mode switches in a group.
	 */
	interface EventPadGroupMode {}
	class EventPadGroupMode {
		public constructor();
		/**
		 * the type of the event (%GDK_PAD_GROUP_MODE).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the pad group that is switching mode. A %GDK_SOURCE_TABLET_PAD
		 *   device may have one or more groups containing a set of buttons/rings/strips
		 *   each.
		 */
		public group: number;
		/**
		 * The new mode of #group. Different groups in a %GDK_SOURCE_TABLET_PAD
		 *   device may have different current modes.
		 */
		public mode: number;
	}

	/**
	 * Describes a property change on a window.
	 */
	interface EventProperty {}
	class EventProperty {
		public constructor();
		/**
		 * the type of the event (%GDK_PROPERTY_NOTIFY).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the property that was changed.
		 */
		public atom: Atom;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * whether the property was changed
		 *   (%GDK_PROPERTY_NEW_VALUE) or deleted (%GDK_PROPERTY_DELETE).
		 */
		public state: PropertyState;
	}

	/**
	 * Proximity events are generated when using GDK’s wrapper for the
	 * XInput extension. The XInput extension is an add-on for standard X
	 * that allows you to use nonstandard devices such as graphics tablets.
	 * A proximity event indicates that the stylus has moved in or out of
	 * contact with the tablet, or perhaps that the user’s finger has moved
	 * in or out of contact with a touch screen.
	 * 
	 * This event type will be used pretty rarely. It only is important for
	 * XInput aware programs that are drawing their own cursor.
	 */
	interface EventProximity {}
	class EventProximity {
		public constructor();
		/**
		 * the type of the event (%GDK_PROXIMITY_IN or %GDK_PROXIMITY_OUT).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the master device that the event originated from. Use
		 * gdk_event_get_source_device() to get the slave device.
		 */
		public device: Device;
	}

	/**
	 * Generated from button presses for the buttons 4 to 7. Wheel mice are
	 * usually configured to generate button press events for buttons 4 and 5
	 * when the wheel is turned.
	 * 
	 * Some GDK backends can also generate “smooth” scroll events, which
	 * can be recognized by the %GDK_SCROLL_SMOOTH scroll direction. For
	 * these, the scroll deltas can be obtained with
	 * gdk_event_get_scroll_deltas().
	 */
	interface EventScroll {}
	class EventScroll {
		public constructor();
		/**
		 * the type of the event (%GDK_SCROLL).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the x coordinate of the pointer relative to the window.
		 */
		public x: number;
		/**
		 * the y coordinate of the pointer relative to the window.
		 */
		public y: number;
		/**
		 * a bit-mask representing the state of
		 *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
		 *   buttons. See {@link ModifierType}.
		 */
		public state: ModifierType;
		/**
		 * the direction to scroll to (one of %GDK_SCROLL_UP,
		 *   %GDK_SCROLL_DOWN, %GDK_SCROLL_LEFT, %GDK_SCROLL_RIGHT or
		 *   %GDK_SCROLL_SMOOTH).
		 */
		public direction: ScrollDirection;
		/**
		 * the master device that the event originated from. Use
		 * gdk_event_get_source_device() to get the slave device.
		 */
		public device: Device;
		/**
		 * the x coordinate of the pointer relative to the root of the
		 *   screen.
		 */
		public x_root: number;
		/**
		 * the y coordinate of the pointer relative to the root of the
		 *   screen.
		 */
		public y_root: number;
		/**
		 * the x coordinate of the scroll delta
		 */
		public delta_x: number;
		/**
		 * the y coordinate of the scroll delta
		 */
		public delta_y: number;
		public is_stop: number;
	}

	/**
	 * Generated when a selection is requested or ownership of a selection
	 * is taken over by another client application.
	 */
	interface EventSelection {}
	class EventSelection {
		public constructor();
		/**
		 * the type of the event (%GDK_SELECTION_CLEAR,
		 *   %GDK_SELECTION_NOTIFY or %GDK_SELECTION_REQUEST).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the selection.
		 */
		public selection: Atom;
		/**
		 * the target to which the selection should be converted.
		 */
		public target: Atom;
		/**
		 * the property in which to place the result of the conversion.
		 */
		public property: Atom;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the window on which to place #property or %NULL if none.
		 */
		public requestor: Window;
	}

	interface EventSequence {}
	class EventSequence {
		public constructor();
	}

	/**
	 * Generated when a setting is modified.
	 */
	interface EventSetting {}
	class EventSetting {
		public constructor();
		/**
		 * the type of the event (%GDK_SETTING).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * what happened to the setting (%GDK_SETTING_ACTION_NEW,
		 *   %GDK_SETTING_ACTION_CHANGED or %GDK_SETTING_ACTION_DELETED).
		 */
		public action: SettingAction;
		/**
		 * the name of the setting.
		 */
		public name: string;
	}

	/**
	 * Used for touch events.
	 * #type field will be one of %GDK_TOUCH_BEGIN, %GDK_TOUCH_UPDATE,
	 * %GDK_TOUCH_END or %GDK_TOUCH_CANCEL.
	 * 
	 * Touch events are grouped into sequences by means of the #sequence
	 * field, which can also be obtained with gdk_event_get_event_sequence().
	 * Each sequence begins with a %GDK_TOUCH_BEGIN event, followed by
	 * any number of %GDK_TOUCH_UPDATE events, and ends with a %GDK_TOUCH_END
	 * (or %GDK_TOUCH_CANCEL) event. With multitouch devices, there may be
	 * several active sequences at the same time.
	 */
	interface EventTouch {}
	class EventTouch {
		public constructor();
		/**
		 * the type of the event (%GDK_TOUCH_BEGIN, %GDK_TOUCH_UPDATE,
		 *   %GDK_TOUCH_END, %GDK_TOUCH_CANCEL)
		 */
		public type: EventType;
		/**
		 * the window which received the event
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the time of the event in milliseconds.
		 */
		public time: number;
		/**
		 * the x coordinate of the pointer relative to the window
		 */
		public x: number;
		/**
		 * the y coordinate of the pointer relative to the window
		 */
		public y: number;
		/**
		 * #x, #y translated to the axes of #device, or %NULL if #device is
		 *   the mouse
		 */
		public axes: number;
		/**
		 * a bit-mask representing the state of
		 *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
		 *   buttons. See {@link ModifierType}
		 */
		public state: ModifierType;
		/**
		 * the event sequence that the event belongs to
		 */
		public sequence: EventSequence;
		/**
		 * whether the event should be used for emulating
		 *   pointer event
		 */
		public emulating_pointer: boolean;
		/**
		 * the master device that the event originated from. Use
		 * gdk_event_get_source_device() to get the slave device.
		 */
		public device: Device;
		/**
		 * the x coordinate of the pointer relative to the root of the
		 *   screen
		 */
		public x_root: number;
		/**
		 * the y coordinate of the pointer relative to the root of the
		 *   screen
		 */
		public y_root: number;
	}

	/**
	 * Generated during touchpad swipe gestures.
	 */
	interface EventTouchpadPinch {}
	class EventTouchpadPinch {
		public constructor();
		/**
		 * the type of the event (%GDK_TOUCHPAD_PINCH)
		 */
		public type: EventType;
		/**
		 * the window which received the event
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly
		 */
		public send_event: number;
		/**
		 * the current phase of the gesture
		 */
		public phase: number;
		/**
		 * The number of fingers triggering the pinch
		 */
		public n_fingers: number;
		/**
		 * the time of the event in milliseconds
		 */
		public time: number;
		/**
		 * The X coordinate of the pointer
		 */
		public x: number;
		/**
		 * The Y coordinate of the pointer
		 */
		public y: number;
		/**
		 * Movement delta in the X axis of the swipe focal point
		 */
		public dx: number;
		/**
		 * Movement delta in the Y axis of the swipe focal point
		 */
		public dy: number;
		/**
		 * The angle change in radians, negative angles
		 *   denote counter-clockwise movements
		 */
		public angle_delta: number;
		/**
		 * The current scale, relative to that at the time of
		 *   the corresponding %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN event
		 */
		public scale: number;
		/**
		 * The X coordinate of the pointer, relative to the
		 *   root of the screen.
		 */
		public x_root: number;
		/**
		 * The Y coordinate of the pointer, relative to the
		 *   root of the screen.
		 */
		public y_root: number;
		/**
		 * a bit-mask representing the state of
		 *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
		 *   buttons. See {@link ModifierType}.
		 */
		public state: ModifierType;
	}

	/**
	 * Generated during touchpad swipe gestures.
	 */
	interface EventTouchpadSwipe {}
	class EventTouchpadSwipe {
		public constructor();
		/**
		 * the type of the event (%GDK_TOUCHPAD_SWIPE)
		 */
		public type: EventType;
		/**
		 * the window which received the event
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly
		 */
		public send_event: number;
		/**
		 * the current phase of the gesture
		 */
		public phase: number;
		/**
		 * The number of fingers triggering the swipe
		 */
		public n_fingers: number;
		/**
		 * the time of the event in milliseconds
		 */
		public time: number;
		/**
		 * The X coordinate of the pointer
		 */
		public x: number;
		/**
		 * The Y coordinate of the pointer
		 */
		public y: number;
		/**
		 * Movement delta in the X axis of the swipe focal point
		 */
		public dx: number;
		/**
		 * Movement delta in the Y axis of the swipe focal point
		 */
		public dy: number;
		/**
		 * The X coordinate of the pointer, relative to the
		 *   root of the screen.
		 */
		public x_root: number;
		/**
		 * The Y coordinate of the pointer, relative to the
		 *   root of the screen.
		 */
		public y_root: number;
		/**
		 * a bit-mask representing the state of
		 *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
		 *   buttons. See {@link ModifierType}.
		 */
		public state: ModifierType;
	}

	/**
	 * Generated when the window visibility status has changed.
	 */
	interface EventVisibility {}
	class EventVisibility {
		public constructor();
		/**
		 * the type of the event (%GDK_VISIBILITY_NOTIFY).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * the new visibility state (%GDK_VISIBILITY_FULLY_OBSCURED,
		 *   %GDK_VISIBILITY_PARTIAL or %GDK_VISIBILITY_UNOBSCURED).
		 */
		public state: VisibilityState;
	}

	/**
	 * Generated when the state of a toplevel window changes.
	 */
	interface EventWindowState {}
	class EventWindowState {
		public constructor();
		/**
		 * the type of the event (%GDK_WINDOW_STATE).
		 */
		public type: EventType;
		/**
		 * the window which received the event.
		 */
		public window: Window;
		/**
		 * %TRUE if the event was sent explicitly.
		 */
		public send_event: number;
		/**
		 * mask specifying what flags have changed.
		 */
		public changed_mask: WindowState;
		/**
		 * the new window state, a combination of
		 *   {@link WindowState} bits.
		 */
		public new_window_state: WindowState;
	}

	interface FrameClockClass {}
	class FrameClockClass {
		public constructor();
	}

	interface FrameClockPrivate {}
	class FrameClockPrivate {
		public constructor();
	}

	/**
	 * A {@link FrameTimings} object holds timing information for a single frame
	 * of the application’s displays. To retrieve #GdkFrameTimings objects,
	 * use gdk_frame_clock_get_timings() or gdk_frame_clock_get_current_timings().
	 * The information in #GdkFrameTimings is useful for precise synchronization
	 * of video with the event or audio streams, and for measuring
	 * quality metrics for the application’s display, such as latency and jitter.
	 */
	interface FrameTimings {}
	class FrameTimings {
		public constructor();
		/**
		 * The timing information in a {@link FrameTimings} is filled in
		 * incrementally as the frame as drawn and passed off to the
		 * window system for processing and display to the user. The
		 * accessor functions for #GdkFrameTimings can return 0 to
		 * indicate an unavailable value for two reasons: either because
		 * the information is not yet available, or because it isn't
		 * available at all. Once gdk_frame_timings_get_complete() returns
		 * %TRUE for a frame, you can be certain that no further values
		 * will become available and be stored in the #GdkFrameTimings.
		 * @returns %TRUE if all information that will be available
		 *  for the frame has been filled in.
		 */
		public get_complete(): boolean;
		/**
		 * Gets the frame counter value of the {@link FrameClock} when this
		 * this frame was drawn.
		 * @returns the frame counter value for this frame
		 */
		public get_frame_counter(): number;
		/**
		 * Returns the frame time for the frame. This is the time value
		 * that is typically used to time animations for the frame. See
		 * gdk_frame_clock_get_frame_time().
		 * @returns the frame time for the frame, in the timescale
		 *  of g_get_monotonic_time()
		 */
		public get_frame_time(): number;
		/**
		 * Gets the predicted time at which this frame will be displayed. Although
		 * no predicted time may be available, if one is available, it will
		 * be available while the frame is being generated, in contrast to
		 * gdk_frame_timings_get_presentation_time(), which is only available
		 * after the frame has been presented. In general, if you are simply
		 * animating, you should use gdk_frame_clock_get_frame_time() rather
		 * than this function, but this function is useful for applications
		 * that want exact control over latency. For example, a movie player
		 * may want this information for Audio/Video synchronization.
		 * @returns The predicted time at which the frame will be presented,
		 *  in the timescale of g_get_monotonic_time(), or 0 if no predicted
		 *  presentation time is available.
		 */
		public get_predicted_presentation_time(): number;
		/**
		 * Reurns the presentation time. This is the time at which the frame
		 * became visible to the user.
		 * @returns the time the frame was displayed to the user, in the
		 *  timescale of g_get_monotonic_time(), or 0 if no presentation
		 *  time is available. See gdk_frame_timings_get_complete()
		 */
		public get_presentation_time(): number;
		/**
		 * Gets the natural interval between presentation times for
		 * the display that this frame was displayed on. Frame presentation
		 * usually happens during the “vertical blanking interval”.
		 * @returns the refresh interval of the display, in microseconds,
		 *  or 0 if the refresh interval is not available.
		 *  See gdk_frame_timings_get_complete().
		 */
		public get_refresh_interval(): number;
		/**
		 * Increases the reference count of #timings.
		 * @returns #timings
		 */
		public ref(): FrameTimings;
		/**
		 * Decreases the reference count of #timings. If #timings
		 * is no longer referenced, it will be freed.
		 */
		public unref(): void;
	}

	/**
	 * The {@link Geometry} struct gives the window manager information about
	 * a window’s geometry constraints. Normally you would set these on
	 * the GTK+ level using gtk_window_set_geometry_hints(). #GtkWindow
	 * then sets the hints on the #GdkWindow it creates.
	 * 
	 * gdk_window_set_geometry_hints() expects the hints to be fully valid already
	 * and simply passes them to the window manager; in contrast,
	 * gtk_window_set_geometry_hints() performs some interpretation. For example,
	 * #GtkWindow will apply the hints to the geometry widget instead of the
	 * toplevel window, if you set a geometry widget. Also, the
	 * #min_width/#min_height/#max_width/#max_height fields may be set to -1, and
	 * #GtkWindow will substitute the size request of the window or geometry widget.
	 * If the minimum size hint is not provided, #GtkWindow will use its requisition
	 * as the minimum size. If the minimum size is provided and a geometry widget is
	 * set, #GtkWindow will take the minimum size as the minimum size of the
	 * geometry widget rather than the entire window. The base size is treated
	 * similarly.
	 * 
	 * The canonical use-case for gtk_window_set_geometry_hints() is to get a
	 * terminal widget to resize properly. Here, the terminal text area should be
	 * the geometry widget; #GtkWindow will then automatically set the base size to
	 * the size of other widgets in the terminal window, such as the menubar and
	 * scrollbar. Then, the #width_inc and #height_inc fields should be set to the
	 * size of one character in the terminal. Finally, the base size should be set
	 * to the size of one character. The net effect is that the minimum size of the
	 * terminal will have a 1x1 character terminal area, and only terminal sizes on
	 * the “character grid” will be allowed.
	 * 
	 * Here’s an example of how the terminal example would be implemented, assuming
	 * a terminal area widget called “terminal” and a toplevel window “toplevel”:
	 * 
	 * |[<!-- language="C" -->
	 * 	GdkGeometry hints;
	 * 
	 * 	hints.base_width = terminal->char_width;
	 *         hints.base_height = terminal->char_height;
	 *         hints.min_width = terminal->char_width;
	 *         hints.min_height = terminal->char_height;
	 *         hints.width_inc = terminal->char_width;
	 *         hints.height_inc = terminal->char_height;
	 * 
	 *  gtk_window_set_geometry_hints (GTK_WINDOW (toplevel),
	 *                                 GTK_WIDGET (terminal),
	 *                                 &hints,
	 *                                 GDK_HINT_RESIZE_INC |
	 *                                 GDK_HINT_MIN_SIZE |
	 *                                 GDK_HINT_BASE_SIZE);
	 * ]|
	 * 
	 * The other useful fields are the #min_aspect and #max_aspect fields; these
	 * contain a width/height ratio as a floating point number. If a geometry widget
	 * is set, the aspect applies to the geometry widget rather than the entire
	 * window. The most common use of these hints is probably to set #min_aspect and
	 * #max_aspect to the same value, thus forcing the window to keep a constant
	 * aspect ratio.
	 */
	interface Geometry {}
	class Geometry {
		public constructor();
		/**
		 * minimum width of window (or -1 to use requisition, with
		 *  #GtkWindow only)
		 */
		public min_width: number;
		/**
		 * minimum height of window (or -1 to use requisition, with
		 *  #GtkWindow only)
		 */
		public min_height: number;
		/**
		 * maximum width of window (or -1 to use requisition, with
		 *  #GtkWindow only)
		 */
		public max_width: number;
		/**
		 * maximum height of window (or -1 to use requisition, with
		 *  #GtkWindow only)
		 */
		public max_height: number;
		/**
		 * allowed window widths are #base_width + #width_inc * N where N
		 *  is any integer (-1 allowed with #GtkWindow)
		 */
		public base_width: number;
		/**
		 * allowed window widths are #base_height + #height_inc * N where
		 *  N is any integer (-1 allowed with #GtkWindow)
		 */
		public base_height: number;
		/**
		 * width resize increment
		 */
		public width_inc: number;
		/**
		 * height resize increment
		 */
		public height_inc: number;
		/**
		 * minimum width/height ratio
		 */
		public min_aspect: number;
		/**
		 * maximum width/height ratio
		 */
		public max_aspect: number;
		/**
		 * window gravity, see gtk_window_set_gravity()
		 */
		public win_gravity: Gravity;
	}

	/**
	 * A {@link KeymapKey} is a hardware key that can be mapped to a keyval.
	 */
	interface KeymapKey {}
	class KeymapKey {
		public constructor();
		/**
		 * the hardware keycode. This is an identifying number for a
		 *   physical key.
		 */
		public keycode: number;
		/**
		 * indicates movement in a horizontal direction. Usually groups are used
		 *   for two different languages. In group 0, a key might have two English
		 *   characters, and in group 1 it might have two Hebrew characters. The Hebrew
		 *   characters will be printed on the key next to the English characters.
		 */
		public group: number;
		/**
		 * indicates which symbol on the key will be used, in a vertical direction.
		 *   So on a standard US keyboard, the key with the number “1” on it also has the
		 *   exclamation point ("!") character on it. The level indicates whether to use
		 *   the “1” or the “!” symbol. The letter keys are considered to have a lowercase
		 *   letter at level 0, and an uppercase letter at level 1, though only the
		 *   uppercase letter is printed.
		 */
		public level: number;
	}

	interface MonitorClass {}
	class MonitorClass {
		public constructor();
	}

	/**
	 * Defines the x and y coordinates of a point.
	 */
	interface Point {}
	class Point {
		public constructor();
		/**
		 * the x coordinate of the point.
		 */
		public x: number;
		/**
		 * the y coordinate of the point.
		 */
		public y: number;
	}

	/**
	 * A {@link RGBA} is used to represent a (possibly translucent)
	 * color, in a way that is compatible with cairo’s notion of color.
	 */
	interface RGBA {}
	class RGBA {
		public constructor();
		/**
		 * The intensity of the red channel from 0.0 to 1.0 inclusive
		 */
		public red: number;
		/**
		 * The intensity of the green channel from 0.0 to 1.0 inclusive
		 */
		public green: number;
		/**
		 * The intensity of the blue channel from 0.0 to 1.0 inclusive
		 */
		public blue: number;
		/**
		 * The opacity of the color from 0.0 for completely translucent to
		 *   1.0 for opaque
		 */
		public alpha: number;
		/**
		 * Makes a copy of a {@link RGBA}.
		 * 
		 * The result must be freed through gdk_rgba_free().
		 * @returns A newly allocated {@link RGBA}, with the same contents as #rgba
		 */
		public copy(): RGBA;
		/**
		 * Compares two RGBA colors.
		 * @param p2 another {@link RGBA} pointer
		 * @returns %TRUE if the two colors compare equal
		 */
		public equal(p2: RGBA): boolean;
		/**
		 * Frees a {@link RGBA} created with gdk_rgba_copy()
		 */
		public free(): void;
		/**
		 * A hash function suitable for using for a hash
		 * table that stores {@link RGBAs}.
		 * @returns The hash value for #p
		 */
		public hash(): number;
		/**
		 * Parses a textual representation of a color, filling in
		 * the #red, #green, #blue and #alpha fields of the #rgba {@link RGBA}.
		 * 
		 * The string can be either one of:
		 * - A standard name (Taken from the X11 rgb.txt file).
		 * - A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
		 *   “\#rrrgggbbb” or ”\#rrrrggggbbbb”
		 * - A RGB color in the form “rgb(r,g,b)” (In this case the color will
		 *   have full opacity)
		 * - A RGBA color in the form “rgba(r,g,b,a)”
		 * 
		 * Where “r”, “g”, “b” and “a” are respectively the red, green, blue and
		 * alpha color values. In the last two cases, “r”, “g”, and “b” are either integers
		 * in the range 0 to 255 or percentage values in the range 0% to 100%, and
		 * a is a floating point value in the range 0 to 1.
		 * @param spec the string specifying the color
		 * @returns %TRUE if the parsing succeeded
		 */
		public parse(spec: string): boolean;
		/**
		 * Returns a textual specification of #rgba in the form
		 * `rgb(r,g,b)` or
		 * `rgba(r g,b,a)`,
		 * where “r”, “g”, “b” and “a” represent the red, green,
		 * blue and alpha values respectively. “r”, “g”, and “b” are
		 * represented as integers in the range 0 to 255, and “a”
		 * is represented as a floating point value in the range 0 to 1.
		 * 
		 * These string forms are string forms that are supported by
		 * the CSS3 colors module, and can be parsed by gdk_rgba_parse().
		 * 
		 * Note that this string representation may lose some
		 * precision, since “r”, “g” and “b” are represented as 8-bit
		 * integers. If this is a concern, you should use a
		 * different representation.
		 * @returns A newly allocated text string
		 */
		public to_string(): string;
	}

	/**
	 * Defines the position and size of a rectangle. It is identical to
	 * #cairo_rectangle_int_t.
	 */
	interface Rectangle {}
	class Rectangle {
		public constructor();
		public x: number;
		public y: number;
		public width: number;
		public height: number;
		/**
		 * Checks if the two given rectangles are equal.
		 * @param rect2 a {@link Rectangle}
		 * @returns %TRUE if the rectangles are equal.
		 */
		public equal(rect2: Rectangle): boolean;
		/**
		 * Calculates the intersection of two rectangles. It is allowed for
		 * #dest to be the same as either #src1 or #src2. If the rectangles
		 * do not intersect, #dest’s width and height is set to 0 and its x
		 * and y values are undefined. If you are only interested in whether
		 * the rectangles intersect, but not in the intersecting area itself,
		 * pass %NULL for #dest.
		 * @param src2 a {@link Rectangle}
		 * @param dest return location for the
		 * intersection of #src1 and #src2, or %NULL
		 * @returns %TRUE if the rectangles intersect.
		 */
		public intersect(src2: Rectangle, dest: Rectangle): boolean;
		/**
		 * Calculates the union of two rectangles.
		 * The union of rectangles #src1 and #src2 is the smallest rectangle which
		 * includes both #src1 and #src2 within it.
		 * It is allowed for #dest to be the same as either #src1 or #src2.
		 * 
		 * Note that this function does not ignore 'empty' rectangles (ie. with
		 * zero width or height).
		 * @param src2 a {@link Rectangle}
		 * @param dest return location for the union of #src1 and #src2
		 */
		public union(src2: Rectangle, dest: Rectangle): void;
	}

	/**
	 * A {@link TimeCoord} stores a single event in a motion history.
	 */
	interface TimeCoord {}
	class TimeCoord {
		public constructor();
		/**
		 * The timestamp for this event.
		 */
		public time: number;
		/**
		 * the values of the device’s axes.
		 */
		public axes: number[];
	}

	/**
	 * Attributes to use for a newly-created window.
	 */
	interface WindowAttr {}
	class WindowAttr {
		public constructor();
		/**
		 * title of the window (for toplevel windows)
		 */
		public title: string;
		/**
		 * event mask (see gdk_window_set_events())
		 */
		public event_mask: number;
		/**
		 * X coordinate relative to parent window (see gdk_window_move())
		 */
		public x: number;
		/**
		 * Y coordinate relative to parent window (see gdk_window_move())
		 */
		public y: number;
		/**
		 * width of window
		 */
		public width: number;
		/**
		 * height of window
		 */
		public height: number;
		/**
		 * #GDK_INPUT_OUTPUT (normal window) or #GDK_INPUT_ONLY (invisible
		 *  window that receives events)
		 */
		public wclass: WindowWindowClass;
		/**
		 * {@link Visual} for window
		 */
		public visual: Visual;
		/**
		 * type of window
		 */
		public window_type: WindowType;
		/**
		 * cursor for the window (see gdk_window_set_cursor())
		 */
		public cursor: Cursor;
		/**
		 * don’t use (see gtk_window_set_wmclass())
		 */
		public wmclass_name: string;
		/**
		 * don’t use (see gtk_window_set_wmclass())
		 */
		public wmclass_class: string;
		/**
		 * %TRUE to bypass the window manager
		 */
		public override_redirect: boolean;
		/**
		 * a hint of the function of the window
		 */
		public type_hint: WindowTypeHint;
	}

	interface WindowClass {}
	class WindowClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public pick_embedded_child: {(window: Window, _x: number, _y: number): Window;};
		public to_embedder: {(window: Window, offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number): void;};
		public from_embedder: {(window: Window, embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number): void;};
		public create_surface: {(window: Window, width: number, height: number): cairo.Surface;};
		public _gdk_reserved1: {(): void;};
		public _gdk_reserved2: {(): void;};
		public _gdk_reserved3: {(): void;};
		public _gdk_reserved4: {(): void;};
		public _gdk_reserved5: {(): void;};
		public _gdk_reserved6: {(): void;};
		public _gdk_reserved7: {(): void;};
		public _gdk_reserved8: {(): void;};
	}

	interface WindowRedirect {}
	class WindowRedirect {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DevicePad} instead.
	 */
	interface IDevicePad {
		/**
		 * Returns the group the given #feature and #idx belong to,
		 * or -1 if feature/index do not exist in #pad.
		 * @param feature the feature type to get the group from
		 * @param feature_idx the index of the feature to get the group from
		 * @returns The group number of the queried pad feature.
		 */
		get_feature_group(feature: DevicePadFeature, feature_idx: number): number;
		/**
		 * Returns the number of modes that #group may have.
		 * @param group_idx group to get the number of available modes from
		 * @returns The number of modes available in #group.
		 */
		get_group_n_modes(group_idx: number): number;
		/**
		 * Returns the number of features a tablet pad has.
		 * @param feature a pad feature
		 * @returns The amount of elements of type #feature that this pad has.
		 */
		get_n_features(feature: DevicePadFeature): number;
		/**
		 * Returns the number of groups this pad device has. Pads have
		 * at least one group. A pad group is a subcollection of
		 * buttons/strip/rings that is affected collectively by a same
		 * current mode.
		 * @returns The number of button/ring/strip groups in the pad.
		 */
		get_n_groups(): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DevicePad} instead.
	 */
	type DevicePadMixin = IDevicePad;

	/**
	 * {@link DevicePad} is an interface implemented by devices of type
	 * %GDK_SOURCE_TABLET_PAD, it allows querying the features provided
	 * by the pad device.
	 * 
	 * Tablet pads may contain one or more groups, each containing a subset
	 * of the buttons/rings/strips available. gdk_device_pad_get_n_groups()
	 * can be used to obtain the number of groups, gdk_device_pad_get_n_features()
	 * and gdk_device_pad_get_feature_group() can be combined to find out the
	 * number of buttons/rings/strips the device has, and how are they grouped.
	 * 
	 * Each of those groups have different modes, which may be used to map
	 * each individual pad feature to multiple actions. Only one mode is
	 * effective (current) for each given group, different groups may have
	 * different current modes. The number of available modes in a group can
	 * be found out through gdk_device_pad_get_group_n_modes(), and the current
	 * mode for a given group will be notified through the #GdkEventPadGroupMode
	 * event.
	 */
	interface DevicePad extends DevicePadMixin {}

	class DevicePad {
		public constructor();
	}



	/**
	 * An enumeration describing the way in which a device
	 * axis (valuator) maps onto the predefined valuator
	 * types that GTK+ understands.
	 * 
	 * Note that the X and Y axes are not really needed; pointer devices
	 * report their location via the x/y members of events regardless. Whether
	 * X and Y are present as axes depends on the GDK backend.
	 */
	enum AxisUse {
		/**
		 * the axis is ignored.
		 */
		IGNORE = 0,
		/**
		 * the axis is used as the x axis.
		 */
		X = 1,
		/**
		 * the axis is used as the y axis.
		 */
		Y = 2,
		/**
		 * the axis is used for pressure information.
		 */
		PRESSURE = 3,
		/**
		 * the axis is used for x tilt information.
		 */
		XTILT = 4,
		/**
		 * the axis is used for y tilt information.
		 */
		YTILT = 5,
		/**
		 * the axis is used for wheel information.
		 */
		WHEEL = 6,
		/**
		 * the axis is used for pen/tablet distance information. (Since: 3.22)
		 */
		DISTANCE = 7,
		/**
		 * the axis is used for pen rotation information. (Since: 3.22)
		 */
		ROTATION = 8,
		/**
		 * the axis is used for pen slider information. (Since: 3.22)
		 */
		SLIDER = 9,
		/**
		 * a constant equal to the numerically highest axis value.
		 */
		LAST = 10
	}

	/**
	 * A set of values describing the possible byte-orders
	 * for storing pixel values in memory.
	 */
	enum ByteOrder {
		/**
		 * The values are stored with the least-significant byte
		 *   first. For instance, the 32-bit value 0xffeecc would be stored
		 *   in memory as 0xcc, 0xee, 0xff, 0x00.
		 */
		LSB_FIRST = 0,
		/**
		 * The values are stored with the most-significant byte
		 *   first. For instance, the 32-bit value 0xffeecc would be stored
		 *   in memory as 0x00, 0xff, 0xee, 0xcc.
		 */
		MSB_FIRST = 1
	}

	/**
	 * Specifies the crossing mode for {@link EventCrossing}.
	 */
	enum CrossingMode {
		/**
		 * crossing because of pointer motion.
		 */
		NORMAL = 0,
		/**
		 * crossing because a grab is activated.
		 */
		GRAB = 1,
		/**
		 * crossing because a grab is deactivated.
		 */
		UNGRAB = 2,
		/**
		 * crossing because a GTK+ grab is activated.
		 */
		GTK_GRAB = 3,
		/**
		 * crossing because a GTK+ grab is deactivated.
		 */
		GTK_UNGRAB = 4,
		/**
		 * crossing because a GTK+ widget changed
		 *   state (e.g. sensitivity).
		 */
		STATE_CHANGED = 5,
		/**
		 * crossing because a touch sequence has begun,
		 *   this event is synthetic as the pointer might have not left the window.
		 */
		TOUCH_BEGIN = 6,
		/**
		 * crossing because a touch sequence has ended,
		 *   this event is synthetic as the pointer might have not left the window.
		 */
		TOUCH_END = 7,
		/**
		 * crossing because of a device switch (i.e.
		 *   a mouse taking control of the pointer after a touch device), this event
		 *   is synthetic as the pointer didn’t leave the window.
		 */
		DEVICE_SWITCH = 8
	}

	/**
	 * Predefined cursors.
	 * 
	 * Note that these IDs are directly taken from the X cursor font, and many
	 * of these cursors are either not useful, or are not available on other platforms.
	 * 
	 * The recommended way to create cursors is to use gdk_cursor_new_from_name().
	 */
	enum CursorType {
		/**
		 * ![](X_cursor.png)
		 */
		X_CURSOR = 0,
		/**
		 * ![](arrow.png)
		 */
		ARROW = 2,
		/**
		 * ![](based_arrow_down.png)
		 */
		BASED_ARROW_DOWN = 4,
		/**
		 * ![](based_arrow_up.png)
		 */
		BASED_ARROW_UP = 6,
		/**
		 * ![](boat.png)
		 */
		BOAT = 8,
		/**
		 * ![](bogosity.png)
		 */
		BOGOSITY = 10,
		/**
		 * ![](bottom_left_corner.png)
		 */
		BOTTOM_LEFT_CORNER = 12,
		/**
		 * ![](bottom_right_corner.png)
		 */
		BOTTOM_RIGHT_CORNER = 14,
		/**
		 * ![](bottom_side.png)
		 */
		BOTTOM_SIDE = 16,
		/**
		 * ![](bottom_tee.png)
		 */
		BOTTOM_TEE = 18,
		/**
		 * ![](box_spiral.png)
		 */
		BOX_SPIRAL = 20,
		/**
		 * ![](center_ptr.png)
		 */
		CENTER_PTR = 22,
		/**
		 * ![](circle.png)
		 */
		CIRCLE = 24,
		/**
		 * ![](clock.png)
		 */
		CLOCK = 26,
		/**
		 * ![](coffee_mug.png)
		 */
		COFFEE_MUG = 28,
		/**
		 * ![](cross.png)
		 */
		CROSS = 30,
		/**
		 * ![](cross_reverse.png)
		 */
		CROSS_REVERSE = 32,
		/**
		 * ![](crosshair.png)
		 */
		CROSSHAIR = 34,
		/**
		 * ![](diamond_cross.png)
		 */
		DIAMOND_CROSS = 36,
		/**
		 * ![](dot.png)
		 */
		DOT = 38,
		/**
		 * ![](dotbox.png)
		 */
		DOTBOX = 40,
		/**
		 * ![](double_arrow.png)
		 */
		DOUBLE_ARROW = 42,
		/**
		 * ![](draft_large.png)
		 */
		DRAFT_LARGE = 44,
		/**
		 * ![](draft_small.png)
		 */
		DRAFT_SMALL = 46,
		/**
		 * ![](draped_box.png)
		 */
		DRAPED_BOX = 48,
		/**
		 * ![](exchange.png)
		 */
		EXCHANGE = 50,
		/**
		 * ![](fleur.png)
		 */
		FLEUR = 52,
		/**
		 * ![](gobbler.png)
		 */
		GOBBLER = 54,
		/**
		 * ![](gumby.png)
		 */
		GUMBY = 56,
		/**
		 * ![](hand1.png)
		 */
		HAND1 = 58,
		/**
		 * ![](hand2.png)
		 */
		HAND2 = 60,
		/**
		 * ![](heart.png)
		 */
		HEART = 62,
		/**
		 * ![](icon.png)
		 */
		ICON = 64,
		/**
		 * ![](iron_cross.png)
		 */
		IRON_CROSS = 66,
		/**
		 * ![](left_ptr.png)
		 */
		LEFT_PTR = 68,
		/**
		 * ![](left_side.png)
		 */
		LEFT_SIDE = 70,
		/**
		 * ![](left_tee.png)
		 */
		LEFT_TEE = 72,
		/**
		 * ![](leftbutton.png)
		 */
		LEFTBUTTON = 74,
		/**
		 * ![](ll_angle.png)
		 */
		LL_ANGLE = 76,
		/**
		 * ![](lr_angle.png)
		 */
		LR_ANGLE = 78,
		/**
		 * ![](man.png)
		 */
		MAN = 80,
		/**
		 * ![](middlebutton.png)
		 */
		MIDDLEBUTTON = 82,
		/**
		 * ![](mouse.png)
		 */
		MOUSE = 84,
		/**
		 * ![](pencil.png)
		 */
		PENCIL = 86,
		/**
		 * ![](pirate.png)
		 */
		PIRATE = 88,
		/**
		 * ![](plus.png)
		 */
		PLUS = 90,
		/**
		 * ![](question_arrow.png)
		 */
		QUESTION_ARROW = 92,
		/**
		 * ![](right_ptr.png)
		 */
		RIGHT_PTR = 94,
		/**
		 * ![](right_side.png)
		 */
		RIGHT_SIDE = 96,
		/**
		 * ![](right_tee.png)
		 */
		RIGHT_TEE = 98,
		/**
		 * ![](rightbutton.png)
		 */
		RIGHTBUTTON = 100,
		/**
		 * ![](rtl_logo.png)
		 */
		RTL_LOGO = 102,
		/**
		 * ![](sailboat.png)
		 */
		SAILBOAT = 104,
		/**
		 * ![](sb_down_arrow.png)
		 */
		SB_DOWN_ARROW = 106,
		/**
		 * ![](sb_h_double_arrow.png)
		 */
		SB_H_DOUBLE_ARROW = 108,
		/**
		 * ![](sb_left_arrow.png)
		 */
		SB_LEFT_ARROW = 110,
		/**
		 * ![](sb_right_arrow.png)
		 */
		SB_RIGHT_ARROW = 112,
		/**
		 * ![](sb_up_arrow.png)
		 */
		SB_UP_ARROW = 114,
		/**
		 * ![](sb_v_double_arrow.png)
		 */
		SB_V_DOUBLE_ARROW = 116,
		/**
		 * ![](shuttle.png)
		 */
		SHUTTLE = 118,
		/**
		 * ![](sizing.png)
		 */
		SIZING = 120,
		/**
		 * ![](spider.png)
		 */
		SPIDER = 122,
		/**
		 * ![](spraycan.png)
		 */
		SPRAYCAN = 124,
		/**
		 * ![](star.png)
		 */
		STAR = 126,
		/**
		 * ![](target.png)
		 */
		TARGET = 128,
		/**
		 * ![](tcross.png)
		 */
		TCROSS = 130,
		/**
		 * ![](top_left_arrow.png)
		 */
		TOP_LEFT_ARROW = 132,
		/**
		 * ![](top_left_corner.png)
		 */
		TOP_LEFT_CORNER = 134,
		/**
		 * ![](top_right_corner.png)
		 */
		TOP_RIGHT_CORNER = 136,
		/**
		 * ![](top_side.png)
		 */
		TOP_SIDE = 138,
		/**
		 * ![](top_tee.png)
		 */
		TOP_TEE = 140,
		/**
		 * ![](trek.png)
		 */
		TREK = 142,
		/**
		 * ![](ul_angle.png)
		 */
		UL_ANGLE = 144,
		/**
		 * ![](umbrella.png)
		 */
		UMBRELLA = 146,
		/**
		 * ![](ur_angle.png)
		 */
		UR_ANGLE = 148,
		/**
		 * ![](watch.png)
		 */
		WATCH = 150,
		/**
		 * ![](xterm.png)
		 */
		XTERM = 152,
		/**
		 * last cursor type
		 */
		LAST_CURSOR = 153,
		/**
		 * Blank cursor. Since 2.16
		 */
		BLANK_CURSOR = -2,
		/**
		 * type of cursors constructed with
		 *   gdk_cursor_new_from_pixbuf()
		 */
		CURSOR_IS_PIXMAP = -1
	}

	/**
	 * A pad feature.
	 */
	enum DevicePadFeature {
		/**
		 * a button
		 */
		BUTTON = 0,
		/**
		 * a ring-shaped interactive area
		 */
		RING = 1,
		/**
		 * a straight interactive area
		 */
		STRIP = 2
	}

	/**
	 * Indicates the specific type of tool being used being a tablet. Such as an
	 * airbrush, pencil, etc.
	 */
	enum DeviceToolType {
		/**
		 * Tool is of an unknown type.
		 */
		UNKNOWN = 0,
		/**
		 * Tool is a standard tablet stylus.
		 */
		PEN = 1,
		/**
		 * Tool is standard tablet eraser.
		 */
		ERASER = 2,
		/**
		 * Tool is a brush stylus.
		 */
		BRUSH = 3,
		/**
		 * Tool is a pencil stylus.
		 */
		PENCIL = 4,
		/**
		 * Tool is an airbrush stylus.
		 */
		AIRBRUSH = 5,
		/**
		 * Tool is a mouse.
		 */
		MOUSE = 6,
		/**
		 * Tool is a lens cursor.
		 */
		LENS = 7
	}

	/**
	 * Indicates the device type. See [above][GdkDeviceManager.description]
	 * for more information about the meaning of these device types.
	 */
	enum DeviceType {
		/**
		 * Device is a master (or virtual) device. There will
		 *                          be an associated focus indicator on the screen.
		 */
		MASTER = 0,
		/**
		 * Device is a slave (or physical) device.
		 */
		SLAVE = 1,
		/**
		 * Device is a physical device, currently not attached to
		 *                            any virtual device.
		 */
		FLOATING = 2
	}

	/**
	 * Used in {@link DragContext} to the reason of a cancelled DND operation.
	 */
	enum DragCancelReason {
		/**
		 * There is no suitable drop target.
		 */
		NO_TARGET = 0,
		/**
		 * Drag cancelled by the user
		 */
		USER_CANCELLED = 1,
		/**
		 * Unspecified error.
		 */
		ERROR = 2
	}

	/**
	 * Used in {@link DragContext} to indicate the protocol according to
	 * which DND is done.
	 */
	enum DragProtocol {
		/**
		 * no protocol.
		 */
		NONE = 0,
		/**
		 * The Motif DND protocol. No longer supported
		 */
		MOTIF = 1,
		/**
		 * The Xdnd protocol.
		 */
		XDND = 2,
		/**
		 * An extension to the Xdnd protocol for
		 *  unclaimed root window drops.
		 */
		ROOTWIN = 3,
		/**
		 * The simple WM_DROPFILES protocol.
		 */
		WIN32_DROPFILES = 4,
		/**
		 * The complex OLE2 DND protocol (not implemented).
		 */
		OLE2 = 5,
		/**
		 * Intra-application DND.
		 */
		LOCAL = 6,
		/**
		 * Wayland DND protocol.
		 */
		WAYLAND = 7
	}

	/**
	 * Specifies the type of the event.
	 * 
	 * Do not confuse these events with the signals that GTK+ widgets emit.
	 * Although many of these events result in corresponding signals being emitted,
	 * the events are often transformed or filtered along the way.
	 * 
	 * In some language bindings, the values %GDK_2BUTTON_PRESS and
	 * %GDK_3BUTTON_PRESS would translate into something syntactically
	 * invalid (eg `Gdk.EventType.2ButtonPress`, where a
	 * symbol is not allowed to start with a number). In that case, the
	 * aliases %GDK_DOUBLE_BUTTON_PRESS and %GDK_TRIPLE_BUTTON_PRESS can
	 * be used instead.
	 */
	enum EventType {
		/**
		 * a special code to indicate a null event.
		 */
		NOTHING = -1,
		/**
		 * the window manager has requested that the toplevel window be
		 *   hidden or destroyed, usually when the user clicks on a special icon in the
		 *   title bar.
		 */
		DELETE = 0,
		/**
		 * the window has been destroyed.
		 */
		DESTROY = 1,
		/**
		 * all or part of the window has become visible and needs to be
		 *   redrawn.
		 */
		EXPOSE = 2,
		/**
		 * the pointer (usually a mouse) has moved.
		 */
		MOTION_NOTIFY = 3,
		/**
		 * a mouse button has been pressed.
		 */
		BUTTON_PRESS = 4,
		/**
		 * a mouse button has been double-clicked (clicked twice
		 *   within a short period of time). Note that each click also generates a
		 *   %GDK_BUTTON_PRESS event.
		 */
		_2BUTTON_PRESS = 5,
		/**
		 * alias for %GDK_2BUTTON_PRESS, added in 3.6.
		 */
		DOUBLE_BUTTON_PRESS = 5,
		/**
		 * a mouse button has been clicked 3 times in a short period
		 *   of time. Note that each click also generates a %GDK_BUTTON_PRESS event.
		 */
		_3BUTTON_PRESS = 6,
		/**
		 * alias for %GDK_3BUTTON_PRESS, added in 3.6.
		 */
		TRIPLE_BUTTON_PRESS = 6,
		/**
		 * a mouse button has been released.
		 */
		BUTTON_RELEASE = 7,
		/**
		 * a key has been pressed.
		 */
		KEY_PRESS = 8,
		/**
		 * a key has been released.
		 */
		KEY_RELEASE = 9,
		/**
		 * the pointer has entered the window.
		 */
		ENTER_NOTIFY = 10,
		/**
		 * the pointer has left the window.
		 */
		LEAVE_NOTIFY = 11,
		/**
		 * the keyboard focus has entered or left the window.
		 */
		FOCUS_CHANGE = 12,
		/**
		 * the size, position or stacking order of the window has changed.
		 *   Note that GTK+ discards these events for %GDK_WINDOW_CHILD windows.
		 */
		CONFIGURE = 13,
		/**
		 * the window has been mapped.
		 */
		MAP = 14,
		/**
		 * the window has been unmapped.
		 */
		UNMAP = 15,
		/**
		 * a property on the window has been changed or deleted.
		 */
		PROPERTY_NOTIFY = 16,
		/**
		 * the application has lost ownership of a selection.
		 */
		SELECTION_CLEAR = 17,
		/**
		 * another application has requested a selection.
		 */
		SELECTION_REQUEST = 18,
		/**
		 * a selection has been received.
		 */
		SELECTION_NOTIFY = 19,
		/**
		 * an input device has moved into contact with a sensing
		 *   surface (e.g. a touchscreen or graphics tablet).
		 */
		PROXIMITY_IN = 20,
		/**
		 * an input device has moved out of contact with a sensing
		 *   surface.
		 */
		PROXIMITY_OUT = 21,
		/**
		 * the mouse has entered the window while a drag is in progress.
		 */
		DRAG_ENTER = 22,
		/**
		 * the mouse has left the window while a drag is in progress.
		 */
		DRAG_LEAVE = 23,
		/**
		 * the mouse has moved in the window while a drag is in
		 *   progress.
		 */
		DRAG_MOTION = 24,
		/**
		 * the status of the drag operation initiated by the window
		 *   has changed.
		 */
		DRAG_STATUS = 25,
		/**
		 * a drop operation onto the window has started.
		 */
		DROP_START = 26,
		/**
		 * the drop operation initiated by the window has completed.
		 */
		DROP_FINISHED = 27,
		/**
		 * a message has been received from another application.
		 */
		CLIENT_EVENT = 28,
		/**
		 * the window visibility status has changed.
		 */
		VISIBILITY_NOTIFY = 29,
		/**
		 * the scroll wheel was turned
		 */
		SCROLL = 31,
		/**
		 * the state of a window has changed. See {@link WindowState}
		 *   for the possible window states
		 */
		WINDOW_STATE = 32,
		/**
		 * a setting has been modified.
		 */
		SETTING = 33,
		/**
		 * the owner of a selection has changed. This event type
		 *   was added in 2.6
		 */
		OWNER_CHANGE = 34,
		/**
		 * a pointer or keyboard grab was broken. This event type
		 *   was added in 2.8.
		 */
		GRAB_BROKEN = 35,
		/**
		 * the content of the window has been changed. This event type
		 *   was added in 2.14.
		 */
		DAMAGE = 36,
		/**
		 * A new touch event sequence has just started. This event
		 *   type was added in 3.4.
		 */
		TOUCH_BEGIN = 37,
		/**
		 * A touch event sequence has been updated. This event type
		 *   was added in 3.4.
		 */
		TOUCH_UPDATE = 38,
		/**
		 * A touch event sequence has finished. This event type
		 *   was added in 3.4.
		 */
		TOUCH_END = 39,
		/**
		 * A touch event sequence has been canceled. This event type
		 *   was added in 3.4.
		 */
		TOUCH_CANCEL = 40,
		/**
		 * A touchpad swipe gesture event, the current state
		 *   is determined by its phase field. This event type was added in 3.18.
		 */
		TOUCHPAD_SWIPE = 41,
		/**
		 * A touchpad pinch gesture event, the current state
		 *   is determined by its phase field. This event type was added in 3.18.
		 */
		TOUCHPAD_PINCH = 42,
		/**
		 * A tablet pad button press event. This event type
		 *   was added in 3.22.
		 */
		PAD_BUTTON_PRESS = 43,
		/**
		 * A tablet pad button release event. This event type
		 *   was added in 3.22.
		 */
		PAD_BUTTON_RELEASE = 44,
		/**
		 * A tablet pad axis event from a "ring". This event type was
		 *   added in 3.22.
		 */
		PAD_RING = 45,
		/**
		 * A tablet pad axis event from a "strip". This event type was
		 *   added in 3.22.
		 */
		PAD_STRIP = 46,
		/**
		 * A tablet pad group mode change. This event type was
		 *   added in 3.22.
		 */
		PAD_GROUP_MODE = 47,
		/**
		 * marks the end of the GdkEventType enumeration. Added in 2.18
		 */
		EVENT_LAST = 48
	}

	/**
	 * Specifies the result of applying a {@link FilterFunc} to a native event.
	 */
	enum FilterReturn {
		/**
		 * event not handled, continue processing.
		 */
		CONTINUE = 0,
		/**
		 * native event translated into a GDK event and stored
		 *  in the `event` structure that was passed in.
		 */
		TRANSLATE = 1,
		/**
		 * event handled, terminate processing.
		 */
		REMOVE = 2
	}

	/**
	 * Indicates which monitor (in a multi-head setup) a window should span over
	 * when in fullscreen mode.
	 */
	enum FullscreenMode {
		/**
		 * Fullscreen on current monitor only.
		 */
		CURRENT_MONITOR = 0,
		/**
		 * Span across all monitors when fullscreen.
		 */
		ALL_MONITORS = 1
	}

	/**
	 * Error enumeration for {@link GLContext}.
	 */
	enum GLError {
		/**
		 * OpenGL support is not available
		 */
		NOT_AVAILABLE = 0,
		/**
		 * The requested visual format is not supported
		 */
		UNSUPPORTED_FORMAT = 1,
		/**
		 * The requested profile is not supported
		 */
		UNSUPPORTED_PROFILE = 2
	}

	/**
	 * Defines how device grabs interact with other devices.
	 */
	enum GrabOwnership {
		/**
		 * All other devices’ events are allowed.
		 */
		NONE = 0,
		/**
		 * Other devices’ events are blocked for the grab window.
		 */
		WINDOW = 1,
		/**
		 * Other devices’ events are blocked for the whole application.
		 */
		APPLICATION = 2
	}

	/**
	 * Returned by gdk_device_grab(), gdk_pointer_grab() and gdk_keyboard_grab() to
	 * indicate success or the reason for the failure of the grab attempt.
	 */
	enum GrabStatus {
		/**
		 * the resource was successfully grabbed.
		 */
		SUCCESS = 0,
		/**
		 * the resource is actively grabbed by another client.
		 */
		ALREADY_GRABBED = 1,
		/**
		 * the resource was grabbed more recently than the
		 *  specified time.
		 */
		INVALID_TIME = 2,
		/**
		 * the grab window or the #confine_to window are not
		 *  viewable.
		 */
		NOT_VIEWABLE = 3,
		/**
		 * the resource is frozen by an active grab of another client.
		 */
		FROZEN = 4,
		/**
		 * the grab failed for some other reason. Since 3.16
		 */
		FAILED = 5
	}

	/**
	 * Defines the reference point of a window and the meaning of coordinates
	 * passed to gtk_window_move(). See gtk_window_move() and the "implementation
	 * notes" section of the
	 * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
	 * specification for more details.
	 */
	enum Gravity {
		/**
		 * the reference point is at the top left corner.
		 */
		NORTH_WEST = 1,
		/**
		 * the reference point is in the middle of the top edge.
		 */
		NORTH = 2,
		/**
		 * the reference point is at the top right corner.
		 */
		NORTH_EAST = 3,
		/**
		 * the reference point is at the middle of the left edge.
		 */
		WEST = 4,
		/**
		 * the reference point is at the center of the window.
		 */
		CENTER = 5,
		/**
		 * the reference point is at the middle of the right edge.
		 */
		EAST = 6,
		/**
		 * the reference point is at the lower left corner.
		 */
		SOUTH_WEST = 7,
		/**
		 * the reference point is at the middle of the lower edge.
		 */
		SOUTH = 8,
		/**
		 * the reference point is at the lower right corner.
		 */
		SOUTH_EAST = 9,
		/**
		 * the reference point is at the top left corner of the
		 *  window itself, ignoring window manager decorations.
		 */
		STATIC = 10
	}

	/**
	 * An enumeration that describes the mode of an input device.
	 */
	enum InputMode {
		/**
		 * the device is disabled and will not report any events.
		 */
		DISABLED = 0,
		/**
		 * the device is enabled. The device’s coordinate space
		 *                   maps to the entire screen.
		 */
		SCREEN = 1,
		/**
		 * the device is enabled. The device’s coordinate space
		 *                   is mapped to a single window. The manner in which this window
		 *                   is chosen is undefined, but it will typically be the same
		 *                   way in which the focus window for key events is determined.
		 */
		WINDOW = 2
	}

	/**
	 * An enumeration describing the type of an input device in general terms.
	 */
	enum InputSource {
		/**
		 * the device is a mouse. (This will be reported for the core
		 *                    pointer, even if it is something else, such as a trackball.)
		 */
		MOUSE = 0,
		/**
		 * the device is a stylus of a graphics tablet or similar device.
		 */
		PEN = 1,
		/**
		 * the device is an eraser. Typically, this would be the other end
		 *                     of a stylus on a graphics tablet.
		 */
		ERASER = 2,
		/**
		 * the device is a graphics tablet “puck” or similar device.
		 */
		CURSOR = 3,
		/**
		 * the device is a keyboard.
		 */
		KEYBOARD = 4,
		/**
		 * the device is a direct-input touch device, such
		 *     as a touchscreen or tablet. This device type has been added in 3.4.
		 */
		TOUCHSCREEN = 5,
		/**
		 * the device is an indirect touch device, such
		 *     as a touchpad. This device type has been added in 3.4.
		 */
		TOUCHPAD = 6,
		/**
		 * the device is a trackpoint. This device type has been
		 *     added in 3.22
		 */
		TRACKPOINT = 7,
		/**
		 * the device is a "pad", a collection of buttons,
		 *     rings and strips found in drawing tablets. This device type has been
		 *     added in 3.22.
		 */
		TABLET_PAD = 8
	}

	/**
	 * This enum is used with gdk_keymap_get_modifier_mask()
	 * in order to determine what modifiers the
	 * currently used windowing system backend uses for particular
	 * purposes. For example, on X11/Windows, the Control key is used for
	 * invoking menu shortcuts (accelerators), whereas on Apple computers
	 * it’s the Command key (which correspond to %GDK_CONTROL_MASK and
	 * %GDK_MOD2_MASK, respectively).
	 */
	enum ModifierIntent {
		/**
		 * the primary modifier used to invoke
		 *  menu accelerators.
		 */
		PRIMARY_ACCELERATOR = 0,
		/**
		 * the modifier used to invoke context menus.
		 *  Note that mouse button 3 always triggers context menus. When this modifier
		 *  is not 0, it additionally triggers context menus when used with mouse button 1.
		 */
		CONTEXT_MENU = 1,
		/**
		 * the modifier used to extend selections
		 *  using `modifier`-click or `modifier`-cursor-key
		 */
		EXTEND_SELECTION = 2,
		/**
		 * the modifier used to modify selections,
		 *  which in most cases means toggling the clicked item into or out of the selection.
		 */
		MODIFY_SELECTION = 3,
		/**
		 * when any of these modifiers is pressed, the
		 *  key event cannot produce a symbol directly. This is meant to be used for
		 *  input methods, and for use cases like typeahead search.
		 */
		NO_TEXT_INPUT = 4,
		/**
		 * the modifier that switches between keyboard
		 *  groups (AltGr on X11/Windows and Option/Alt on OS X).
		 */
		SHIFT_GROUP = 5,
		/**
		 * The set of modifier masks accepted
		 * as modifiers in accelerators. Needed because Command is mapped to MOD2 on
		 * OSX, which is widely used, but on X11 MOD2 is NumLock and using that for a
		 * mod key is problematic at best.
		 * Ref: https://bugzilla.gnome.org/show_bug.cgi?id=736125.
		 */
		DEFAULT_MOD_MASK = 6
	}

	/**
	 * Specifies the kind of crossing for {@link EventCrossing}.
	 * 
	 * See the X11 protocol specification of LeaveNotify for
	 * full details of crossing event generation.
	 */
	enum NotifyType {
		/**
		 * the window is entered from an ancestor or
		 *   left towards an ancestor.
		 */
		ANCESTOR = 0,
		/**
		 * the pointer moves between an ancestor and an
		 *   inferior of the window.
		 */
		VIRTUAL = 1,
		/**
		 * the window is entered from an inferior or
		 *   left towards an inferior.
		 */
		INFERIOR = 2,
		/**
		 * the window is entered from or left towards
		 *   a window which is neither an ancestor nor an inferior.
		 */
		NONLINEAR = 3,
		/**
		 * the pointer moves between two windows
		 *   which are not ancestors of each other and the window is part of
		 *   the ancestor chain between one of these windows and their least
		 *   common ancestor.
		 */
		NONLINEAR_VIRTUAL = 4,
		/**
		 * an unknown type of enter/leave event occurred.
		 */
		UNKNOWN = 5
	}

	/**
	 * Specifies why a selection ownership was changed.
	 */
	enum OwnerChange {
		/**
		 * some other app claimed the ownership
		 */
		NEW_OWNER = 0,
		/**
		 * the window was destroyed
		 */
		DESTROY = 1,
		/**
		 * the client was closed
		 */
		CLOSE = 2
	}

	/**
	 * Describes how existing data is combined with new data when
	 * using gdk_property_change().
	 */
	enum PropMode {
		/**
		 * the new data replaces the existing data.
		 */
		REPLACE = 0,
		/**
		 * the new data is prepended to the existing data.
		 */
		PREPEND = 1,
		/**
		 * the new data is appended to the existing data.
		 */
		APPEND = 2
	}

	/**
	 * Specifies the type of a property change for a {@link EventProperty}.
	 */
	enum PropertyState {
		/**
		 * the property value was changed.
		 */
		NEW_VALUE = 0,
		/**
		 * the property was deleted.
		 */
		DELETE = 1
	}

	/**
	 * Specifies the direction for {@link EventScroll}.
	 */
	enum ScrollDirection {
		/**
		 * the window is scrolled up.
		 */
		UP = 0,
		/**
		 * the window is scrolled down.
		 */
		DOWN = 1,
		/**
		 * the window is scrolled to the left.
		 */
		LEFT = 2,
		/**
		 * the window is scrolled to the right.
		 */
		RIGHT = 3,
		/**
		 * the scrolling is determined by the delta values
		 *   in {@link EventScroll}. See gdk_event_get_scroll_deltas(). Since: 3.4
		 */
		SMOOTH = 4
	}

	/**
	 * Specifies the kind of modification applied to a setting in a
	 * {@link EventSetting}.
	 */
	enum SettingAction {
		/**
		 * a setting was added.
		 */
		NEW = 0,
		/**
		 * a setting was changed.
		 */
		CHANGED = 1,
		/**
		 * a setting was deleted.
		 */
		DELETED = 2
	}

	enum Status {
		OK = 0,
		ERROR = -1,
		ERROR_PARAM = -2,
		ERROR_FILE = -3,
		ERROR_MEM = -4
	}

	/**
	 * This enumeration describes how the red, green and blue components
	 * of physical pixels on an output device are laid out.
	 */
	enum SubpixelLayout {
		/**
		 * The layout is not known
		 */
		UNKNOWN = 0,
		/**
		 * Not organized in this way
		 */
		NONE = 1,
		/**
		 * The layout is horizontal, the order is RGB
		 */
		HORIZONTAL_RGB = 2,
		/**
		 * The layout is horizontal, the order is BGR
		 */
		HORIZONTAL_BGR = 3,
		/**
		 * The layout is vertical, the order is RGB
		 */
		VERTICAL_RGB = 4,
		/**
		 * The layout is vertical, the order is BGR
		 */
		VERTICAL_BGR = 5
	}

	/**
	 * Specifies the current state of a touchpad gesture. All gestures are
	 * guaranteed to begin with an event with phase %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN,
	 * followed by 0 or several events with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
	 * 
	 * A finished gesture may have 2 possible outcomes, an event with phase
	 * %GDK_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
	 * considered successful, this should be used as the hint to perform any
	 * permanent changes.
	 * 
	 * Cancelled gestures may be so for a variety of reasons, due to hardware
	 * or the compositor, or due to the gesture recognition layers hinting the
	 * gesture did not finish resolutely (eg. a 3rd finger being added during
	 * a pinch gesture). In these cases, the last event will report the phase
	 * %GDK_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
	 * to undo any visible/permanent changes that were done throughout the
	 * progress of the gesture.
	 * 
	 * See also {@link EventTouchpadSwipe} and #GdkEventTouchpadPinch.
	 */
	enum TouchpadGesturePhase {
		/**
		 * The gesture has begun.
		 */
		BEGIN = 0,
		/**
		 * The gesture has been updated.
		 */
		UPDATE = 1,
		/**
		 * The gesture was finished, changes
		 *   should be permanently applied.
		 */
		END = 2,
		/**
		 * The gesture was cancelled, all
		 *   changes should be undone.
		 */
		CANCEL = 3
	}

	/**
	 * Specifies the visiblity status of a window for a {@link EventVisibility}.
	 */
	enum VisibilityState {
		/**
		 * the window is completely visible.
		 */
		UNOBSCURED = 0,
		/**
		 * the window is partially visible.
		 */
		PARTIAL = 1,
		/**
		 * the window is not visible at all.
		 */
		FULLY_OBSCURED = 2
	}

	/**
	 * A set of values that describe the manner in which the pixel values
	 * for a visual are converted into RGB values for display.
	 */
	enum VisualType {
		/**
		 * Each pixel value indexes a grayscale value
		 *     directly.
		 */
		STATIC_GRAY = 0,
		/**
		 * Each pixel is an index into a color map that
		 *     maps pixel values into grayscale values. The color map can be
		 *     changed by an application.
		 */
		GRAYSCALE = 1,
		/**
		 * Each pixel value is an index into a predefined,
		 *     unmodifiable color map that maps pixel values into RGB values.
		 */
		STATIC_COLOR = 2,
		/**
		 * Each pixel is an index into a color map that
		 *     maps pixel values into rgb values. The color map can be changed by
		 *     an application.
		 */
		PSEUDO_COLOR = 3,
		/**
		 * Each pixel value directly contains red, green,
		 *     and blue components. Use gdk_visual_get_red_pixel_details(), etc,
		 *     to obtain information about how the components are assembled into
		 *     a pixel value.
		 */
		TRUE_COLOR = 4,
		/**
		 * Each pixel value contains red, green, and blue
		 *     components as for %GDK_VISUAL_TRUE_COLOR, but the components are
		 *     mapped via a color table into the final output table instead of
		 *     being converted directly.
		 */
		DIRECT_COLOR = 5
	}

	/**
	 * Determines a window edge or corner.
	 */
	enum WindowEdge {
		/**
		 * the top left corner.
		 */
		NORTH_WEST = 0,
		/**
		 * the top edge.
		 */
		NORTH = 1,
		/**
		 * the top right corner.
		 */
		NORTH_EAST = 2,
		/**
		 * the left edge.
		 */
		WEST = 3,
		/**
		 * the right edge.
		 */
		EAST = 4,
		/**
		 * the lower left corner.
		 */
		SOUTH_WEST = 5,
		/**
		 * the lower edge.
		 */
		SOUTH = 6,
		/**
		 * the lower right corner.
		 */
		SOUTH_EAST = 7
	}

	/**
	 * Describes the kind of window.
	 */
	enum WindowType {
		/**
		 * root window; this window has no parent, covers the entire
		 *  screen, and is created by the window system
		 */
		ROOT = 0,
		/**
		 * toplevel window (used to implement #GtkWindow)
		 */
		TOPLEVEL = 1,
		/**
		 * child window (used to implement e.g. #GtkEntry)
		 */
		CHILD = 2,
		/**
		 * override redirect temporary window (used to implement
		 *  #GtkMenu)
		 */
		TEMP = 3,
		/**
		 * foreign window (see gdk_window_foreign_new())
		 */
		FOREIGN = 4,
		/**
		 * offscreen window (see
		 *  [Offscreen Windows][OFFSCREEN-WINDOWS]). Since 2.18
		 */
		OFFSCREEN = 5,
		/**
		 * subsurface-based window; This window is visually
		 *  tied to a toplevel, and is moved/stacked with it. Currently this window
		 *  type is only implemented in Wayland. Since 3.14
		 */
		SUBSURFACE = 6
	}

	/**
	 * These are hints for the window manager that indicate what type of function
	 * the window has. The window manager can use this when determining decoration
	 * and behaviour of the window. The hint must be set before mapping the window.
	 * 
	 * See the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
	 * specification for more details about window types.
	 */
	enum WindowTypeHint {
		/**
		 * Normal toplevel window.
		 */
		NORMAL = 0,
		/**
		 * Dialog window.
		 */
		DIALOG = 1,
		/**
		 * Window used to implement a menu; GTK+ uses
		 *  this hint only for torn-off menus, see #GtkTearoffMenuItem.
		 */
		MENU = 2,
		/**
		 * Window used to implement toolbars.
		 */
		TOOLBAR = 3,
		/**
		 * Window used to display a splash
		 *  screen during application startup.
		 */
		SPLASHSCREEN = 4,
		/**
		 * Utility windows which are not detached
		 *  toolbars or dialogs.
		 */
		UTILITY = 5,
		/**
		 * Used for creating dock or panel windows.
		 */
		DOCK = 6,
		/**
		 * Used for creating the desktop background
		 *  window.
		 */
		DESKTOP = 7,
		/**
		 * A menu that belongs to a menubar.
		 */
		DROPDOWN_MENU = 8,
		/**
		 * A menu that does not belong to a menubar,
		 *  e.g. a context menu.
		 */
		POPUP_MENU = 9,
		/**
		 * A tooltip.
		 */
		TOOLTIP = 10,
		/**
		 * A notification - typically a “bubble”
		 *  that belongs to a status icon.
		 */
		NOTIFICATION = 11,
		/**
		 * A popup from a combo box.
		 */
		COMBO = 12,
		/**
		 * A window that is used to implement a DND cursor.
		 */
		DND = 13
	}

	/**
	 * #GDK_INPUT_OUTPUT windows are the standard kind of window you might expect.
	 * Such windows receive events and are also displayed on screen.
	 * #GDK_INPUT_ONLY windows are invisible; they are usually placed above other
	 * windows in order to trap or filter the events. You can’t draw on
	 * #GDK_INPUT_ONLY windows.
	 */
	enum WindowWindowClass {
		/**
		 * window for graphics and events
		 */
		INPUT_OUTPUT = 0,
		/**
		 * window for events only
		 */
		INPUT_ONLY = 1
	}

	/**
	 * Positioning hints for aligning a window relative to a rectangle.
	 * 
	 * These hints determine how the window should be positioned in the case that
	 * the window would fall off-screen if placed in its ideal position.
	 * 
	 * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
	 * %GDK_GRAVITY_NORTH_EAST and vice versa if the window extends beyond the left
	 * or right edges of the monitor.
	 * 
	 * If %GDK_ANCHOR_SLIDE_X is set, the window can be shifted horizontally to fit
	 * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the window can be shrunken
	 * horizontally to fit.
	 * 
	 * In general, when multiple flags are set, flipping should take precedence over
	 * sliding, which should take precedence over resizing.
	 */
	enum AnchorHints {
		/**
		 * allow flipping anchors horizontally
		 */
		FLIP_X = 1,
		/**
		 * allow flipping anchors vertically
		 */
		FLIP_Y = 2,
		/**
		 * allow sliding window horizontally
		 */
		SLIDE_X = 4,
		/**
		 * allow sliding window vertically
		 */
		SLIDE_Y = 8,
		/**
		 * allow resizing window horizontally
		 */
		RESIZE_X = 16,
		/**
		 * allow resizing window vertically
		 */
		RESIZE_Y = 32,
		/**
		 * allow flipping anchors on both axes
		 */
		FLIP = 3,
		/**
		 * allow sliding window on both axes
		 */
		SLIDE = 12,
		/**
		 * allow resizing window on both axes
		 */
		RESIZE = 48
	}

	/**
	 * Flags describing the current capabilities of a device/tool.
	 */
	enum AxisFlags {
		/**
		 * X axis is present
		 */
		X = 2,
		/**
		 * Y axis is present
		 */
		Y = 4,
		/**
		 * Pressure axis is present
		 */
		PRESSURE = 8,
		/**
		 * X tilt axis is present
		 */
		XTILT = 16,
		/**
		 * Y tilt axis is present
		 */
		YTILT = 32,
		/**
		 * Wheel axis is present
		 */
		WHEEL = 64,
		/**
		 * Distance axis is present
		 */
		DISTANCE = 128,
		/**
		 * Z-axis rotation is present
		 */
		ROTATION = 256,
		/**
		 * Slider axis is present
		 */
		SLIDER = 512
	}

	/**
	 * Used in {@link DragContext} to indicate what the destination
	 * should do with the dropped data.
	 */
	enum DragAction {
		/**
		 * Means nothing, and should not be used.
		 */
		DEFAULT = 1,
		/**
		 * Copy the data.
		 */
		COPY = 2,
		/**
		 * Move the data, i.e. first copy it, then delete
		 *  it from the source using the DELETE target of the X selection protocol.
		 */
		MOVE = 4,
		/**
		 * Add a link to the data. Note that this is only
		 *  useful if source and destination agree on what it means.
		 */
		LINK = 8,
		/**
		 * Special action which tells the source that the
		 *  destination will do something that the source doesn’t understand.
		 */
		PRIVATE = 16,
		/**
		 * Ask the user what to do with the data.
		 */
		ASK = 32
	}

	/**
	 * A set of bit-flags to indicate which events a window is to receive.
	 * Most of these masks map onto one or more of the {@link EventType} event types
	 * above.
	 * 
	 * See the [input handling overview][chap-input-handling] for details of
	 * [event masks][event-masks] and [event propagation][event-propagation].
	 * 
	 * %GDK_POINTER_MOTION_HINT_MASK is deprecated. It is a special mask
	 * to reduce the number of %GDK_MOTION_NOTIFY events received. When using
	 * %GDK_POINTER_MOTION_HINT_MASK, fewer %GDK_MOTION_NOTIFY events will
	 * be sent, some of which are marked as a hint (the is_hint member is
	 * %TRUE). To receive more motion events after a motion hint event,
	 * the application needs to asks for more, by calling
	 * gdk_event_request_motions().
	 * 
	 * Since GTK 3.8, motion events are already compressed by default, independent
	 * of this mechanism. This compression can be disabled with
	 * gdk_window_set_event_compression(). See the documentation of that function
	 * for details.
	 * 
	 * If %GDK_TOUCH_MASK is enabled, the window will receive touch events
	 * from touch-enabled devices. Those will come as sequences of #GdkEventTouch
	 * with type %GDK_TOUCH_UPDATE, enclosed by two events with
	 * type %GDK_TOUCH_BEGIN and %GDK_TOUCH_END (or %GDK_TOUCH_CANCEL).
	 * gdk_event_get_event_sequence() returns the event sequence for these
	 * events, so different sequences may be distinguished.
	 */
	enum EventMask {
		/**
		 * receive expose events
		 */
		EXPOSURE_MASK = 2,
		/**
		 * receive all pointer motion events
		 */
		POINTER_MOTION_MASK = 4,
		/**
		 * deprecated. see the explanation above
		 */
		POINTER_MOTION_HINT_MASK = 8,
		/**
		 * receive pointer motion events while any button is pressed
		 */
		BUTTON_MOTION_MASK = 16,
		/**
		 * receive pointer motion events while 1 button is pressed
		 */
		BUTTON1_MOTION_MASK = 32,
		/**
		 * receive pointer motion events while 2 button is pressed
		 */
		BUTTON2_MOTION_MASK = 64,
		/**
		 * receive pointer motion events while 3 button is pressed
		 */
		BUTTON3_MOTION_MASK = 128,
		/**
		 * receive button press events
		 */
		BUTTON_PRESS_MASK = 256,
		/**
		 * receive button release events
		 */
		BUTTON_RELEASE_MASK = 512,
		/**
		 * receive key press events
		 */
		KEY_PRESS_MASK = 1024,
		/**
		 * receive key release events
		 */
		KEY_RELEASE_MASK = 2048,
		/**
		 * receive window enter events
		 */
		ENTER_NOTIFY_MASK = 4096,
		/**
		 * receive window leave events
		 */
		LEAVE_NOTIFY_MASK = 8192,
		/**
		 * receive focus change events
		 */
		FOCUS_CHANGE_MASK = 16384,
		/**
		 * receive events about window configuration change
		 */
		STRUCTURE_MASK = 32768,
		/**
		 * receive property change events
		 */
		PROPERTY_CHANGE_MASK = 65536,
		/**
		 * receive visibility change events
		 */
		VISIBILITY_NOTIFY_MASK = 131072,
		/**
		 * receive proximity in events
		 */
		PROXIMITY_IN_MASK = 262144,
		/**
		 * receive proximity out events
		 */
		PROXIMITY_OUT_MASK = 524288,
		/**
		 * receive events about window configuration changes of
		 *   child windows
		 */
		SUBSTRUCTURE_MASK = 1048576,
		/**
		 * receive scroll events
		 */
		SCROLL_MASK = 2097152,
		/**
		 * receive touch events. Since 3.4
		 */
		TOUCH_MASK = 4194304,
		/**
		 * receive smooth scrolling events. Since 3.4
		 */
		SMOOTH_SCROLL_MASK = 8388608,
		/**
		 * receive touchpad gesture events. Since 3.18
		 */
		TOUCHPAD_GESTURE_MASK = 16777216,
		/**
		 * receive tablet pad events. Since 3.22
		 */
		TABLET_PAD_MASK = 33554432,
		/**
		 * the combination of all the above event masks.
		 */
		ALL_EVENTS_MASK = 67108862
	}

	/**
	 * {@link FrameClockPhase} is used to represent the different paint clock
	 * phases that can be requested. The elements of the enumeration
	 * correspond to the signals of #GdkFrameClock.
	 */
	enum FrameClockPhase {
		/**
		 * no phase
		 */
		NONE = 0,
		/**
		 * corresponds to GdkFrameClock::flush-events. Should not be handled by applications.
		 */
		FLUSH_EVENTS = 1,
		/**
		 * corresponds to GdkFrameClock::before-paint. Should not be handled by applications.
		 */
		BEFORE_PAINT = 2,
		/**
		 * corresponds to GdkFrameClock::update.
		 */
		UPDATE = 4,
		/**
		 * corresponds to GdkFrameClock::layout.
		 */
		LAYOUT = 8,
		/**
		 * corresponds to GdkFrameClock::paint.
		 */
		PAINT = 16,
		/**
		 * corresponds to GdkFrameClock::resume-events. Should not be handled by applications.
		 */
		RESUME_EVENTS = 32,
		/**
		 * corresponds to GdkFrameClock::after-paint. Should not be handled by applications.
		 */
		AFTER_PAINT = 64
	}

	/**
	 * A set of bit-flags to indicate the state of modifier keys and mouse buttons
	 * in various event types. Typical modifier keys are Shift, Control, Meta,
	 * Super, Hyper, Alt, Compose, Apple, CapsLock or ShiftLock.
	 * 
	 * Like the X Window System, GDK supports 8 modifier keys and 5 mouse buttons.
	 * 
	 * Since 2.10, GDK recognizes which of the Meta, Super or Hyper keys are mapped
	 * to Mod2 - Mod5, and indicates this by setting %GDK_SUPER_MASK,
	 * %GDK_HYPER_MASK or %GDK_META_MASK in the state field of key events.
	 * 
	 * Note that GDK may add internal values to events which include
	 * reserved values such as %GDK_MODIFIER_RESERVED_13_MASK.  Your code
	 * should preserve and ignore them.  You can use %GDK_MODIFIER_MASK to
	 * remove all reserved values.
	 * 
	 * Also note that the GDK X backend interprets button press events for button
	 * 4-7 as scroll events, so %GDK_BUTTON4_MASK and %GDK_BUTTON5_MASK will never
	 * be set.
	 */
	enum ModifierType {
		/**
		 * the Shift key.
		 */
		SHIFT_MASK = 1,
		/**
		 * a Lock key (depending on the modifier mapping of the
		 *  X server this may either be CapsLock or ShiftLock).
		 */
		LOCK_MASK = 2,
		/**
		 * the Control key.
		 */
		CONTROL_MASK = 4,
		/**
		 * the fourth modifier key (it depends on the modifier
		 *  mapping of the X server which key is interpreted as this modifier, but
		 *  normally it is the Alt key).
		 */
		MOD1_MASK = 8,
		/**
		 * the fifth modifier key (it depends on the modifier
		 *  mapping of the X server which key is interpreted as this modifier).
		 */
		MOD2_MASK = 16,
		/**
		 * the sixth modifier key (it depends on the modifier
		 *  mapping of the X server which key is interpreted as this modifier).
		 */
		MOD3_MASK = 32,
		/**
		 * the seventh modifier key (it depends on the modifier
		 *  mapping of the X server which key is interpreted as this modifier).
		 */
		MOD4_MASK = 64,
		/**
		 * the eighth modifier key (it depends on the modifier
		 *  mapping of the X server which key is interpreted as this modifier).
		 */
		MOD5_MASK = 128,
		/**
		 * the first mouse button.
		 */
		BUTTON1_MASK = 256,
		/**
		 * the second mouse button.
		 */
		BUTTON2_MASK = 512,
		/**
		 * the third mouse button.
		 */
		BUTTON3_MASK = 1024,
		/**
		 * the fourth mouse button.
		 */
		BUTTON4_MASK = 2048,
		/**
		 * the fifth mouse button.
		 */
		BUTTON5_MASK = 4096,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_13_MASK = 8192,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_14_MASK = 16384,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_15_MASK = 32768,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_16_MASK = 65536,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_17_MASK = 131072,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_18_MASK = 262144,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_19_MASK = 524288,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_20_MASK = 1048576,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_21_MASK = 2097152,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_22_MASK = 4194304,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_23_MASK = 8388608,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_24_MASK = 16777216,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_25_MASK = 33554432,
		/**
		 * the Super modifier. Since 2.10
		 */
		SUPER_MASK = 67108864,
		/**
		 * the Hyper modifier. Since 2.10
		 */
		HYPER_MASK = 134217728,
		/**
		 * the Meta modifier. Since 2.10
		 */
		META_MASK = 268435456,
		/**
		 * A reserved bit flag; do not use in your own code
		 */
		MODIFIER_RESERVED_29_MASK = 536870912,
		/**
		 * not used in GDK itself. GTK+ uses it to differentiate
		 *  between (keyval, modifiers) pairs from key press and release events.
		 */
		RELEASE_MASK = 1073741824,
		/**
		 * a mask covering all modifier types.
		 */
		MODIFIER_MASK = 1543512063
	}

	/**
	 * Flags describing the seat capabilities.
	 */
	enum SeatCapabilities {
		/**
		 * No input capabilities
		 */
		NONE = 0,
		/**
		 * The seat has a pointer (e.g. mouse)
		 */
		POINTER = 1,
		/**
		 * The seat has touchscreen(s) attached
		 */
		TOUCH = 2,
		/**
		 * The seat has drawing tablet(s) attached
		 */
		TABLET_STYLUS = 4,
		/**
		 * The seat has keyboard(s) attached
		 */
		KEYBOARD = 8,
		/**
		 * The union of all pointing capabilities
		 */
		ALL_POINTING = 7,
		/**
		 * The union of all capabilities
		 */
		ALL = 15
	}

	/**
	 * These are hints originally defined by the Motif toolkit.
	 * The window manager can use them when determining how to decorate
	 * the window. The hint must be set before mapping the window.
	 */
	enum WMDecoration {
		/**
		 * all decorations should be applied.
		 */
		ALL = 1,
		/**
		 * a frame should be drawn around the window.
		 */
		BORDER = 2,
		/**
		 * the frame should have resize handles.
		 */
		RESIZEH = 4,
		/**
		 * a titlebar should be placed above the window.
		 */
		TITLE = 8,
		/**
		 * a button for opening a menu should be included.
		 */
		MENU = 16,
		/**
		 * a minimize button should be included.
		 */
		MINIMIZE = 32,
		/**
		 * a maximize button should be included.
		 */
		MAXIMIZE = 64
	}

	/**
	 * These are hints originally defined by the Motif toolkit. The window manager
	 * can use them when determining the functions to offer for the window. The
	 * hint must be set before mapping the window.
	 */
	enum WMFunction {
		/**
		 * all functions should be offered.
		 */
		ALL = 1,
		/**
		 * the window should be resizable.
		 */
		RESIZE = 2,
		/**
		 * the window should be movable.
		 */
		MOVE = 4,
		/**
		 * the window should be minimizable.
		 */
		MINIMIZE = 8,
		/**
		 * the window should be maximizable.
		 */
		MAXIMIZE = 16,
		/**
		 * the window should be closable.
		 */
		CLOSE = 32
	}

	/**
	 * Used to indicate which fields in the {@link WindowAttr} struct should be honored.
	 * For example, if you filled in the “cursor” and “x” fields of #GdkWindowAttr,
	 * pass “#GDK_WA_X | #GDK_WA_CURSOR” to gdk_window_new(). Fields in
	 * #GdkWindowAttr not covered by a bit in this enum are required; for example,
	 * the #width/#height, #wclass, and #window_type fields are required, they have
	 * no corresponding flag in #GdkWindowAttributesType.
	 */
	enum WindowAttributesType {
		/**
		 * Honor the title field
		 */
		TITLE = 2,
		/**
		 * Honor the X coordinate field
		 */
		X = 4,
		/**
		 * Honor the Y coordinate field
		 */
		Y = 8,
		/**
		 * Honor the cursor field
		 */
		CURSOR = 16,
		/**
		 * Honor the visual field
		 */
		VISUAL = 32,
		/**
		 * Honor the wmclass_class and wmclass_name fields
		 */
		WMCLASS = 64,
		/**
		 * Honor the override_redirect field
		 */
		NOREDIR = 128,
		/**
		 * Honor the type_hint field
		 */
		TYPE_HINT = 256
	}

	/**
	 * Used to indicate which fields of a {@link Geometry} struct should be paid
	 * attention to. Also, the presence/absence of #GDK_HINT_POS,
	 * #GDK_HINT_USER_POS, and #GDK_HINT_USER_SIZE is significant, though they don't
	 * directly refer to #GdkGeometry fields. #GDK_HINT_USER_POS will be set
	 * automatically by #GtkWindow if you call gtk_window_move().
	 * #GDK_HINT_USER_POS and #GDK_HINT_USER_SIZE should be set if the user
	 * specified a size/position using a --geometry command-line argument;
	 * gtk_window_parse_geometry() automatically sets these flags.
	 */
	enum WindowHints {
		/**
		 * indicates that the program has positioned the window
		 */
		POS = 1,
		/**
		 * min size fields are set
		 */
		MIN_SIZE = 2,
		/**
		 * max size fields are set
		 */
		MAX_SIZE = 4,
		/**
		 * base size fields are set
		 */
		BASE_SIZE = 8,
		/**
		 * aspect ratio fields are set
		 */
		ASPECT = 16,
		/**
		 * resize increment fields are set
		 */
		RESIZE_INC = 32,
		/**
		 * window gravity field is set
		 */
		WIN_GRAVITY = 64,
		/**
		 * indicates that the window’s position was explicitly set
		 *  by the user
		 */
		USER_POS = 128,
		/**
		 * indicates that the window’s size was explicitly set by
		 *  the user
		 */
		USER_SIZE = 256
	}

	/**
	 * Specifies the state of a toplevel window.
	 */
	enum WindowState {
		/**
		 * the window is not shown.
		 */
		WITHDRAWN = 1,
		/**
		 * the window is minimized.
		 */
		ICONIFIED = 2,
		/**
		 * the window is maximized.
		 */
		MAXIMIZED = 4,
		/**
		 * the window is sticky.
		 */
		STICKY = 8,
		/**
		 * the window is maximized without
		 *   decorations.
		 */
		FULLSCREEN = 16,
		/**
		 * the window is kept above other windows.
		 */
		ABOVE = 32,
		/**
		 * the window is kept below other windows.
		 */
		BELOW = 64,
		/**
		 * the window is presented as focused (with active decorations).
		 */
		FOCUSED = 128,
		/**
		 * the window is in a tiled state, Since 3.10. Since 3.22.23, this
		 *                          is deprecated in favor of per-edge information.
		 */
		TILED = 256,
		/**
		 * whether the top edge is tiled, Since 3.22.23
		 */
		TOP_TILED = 512,
		/**
		 * whether the top edge is resizable, Since 3.22.23
		 */
		TOP_RESIZABLE = 1024,
		/**
		 * whether the right edge is tiled, Since 3.22.23
		 */
		RIGHT_TILED = 2048,
		/**
		 * whether the right edge is resizable, Since 3.22.23
		 */
		RIGHT_RESIZABLE = 4096,
		/**
		 * whether the bottom edge is tiled, Since 3.22.23
		 */
		BOTTOM_TILED = 8192,
		/**
		 * whether the bottom edge is resizable, Since 3.22.23
		 */
		BOTTOM_RESIZABLE = 16384,
		/**
		 * whether the left edge is tiled, Since 3.22.23
		 */
		LEFT_TILED = 32768,
		/**
		 * whether the left edge is resizable, Since 3.22.23
		 */
		LEFT_RESIZABLE = 65536
	}

	/**
	 * Specifies the type of function passed to gdk_event_handler_set() to
	 * handle all GDK events.
	 */
	interface EventFunc {
		/**
		 * Specifies the type of function passed to gdk_event_handler_set() to
		 * handle all GDK events.
		 * @param event the {@link Event} to process.
		 * @param data user data set when the event handler was installed with
		 *   gdk_event_handler_set().
		 */
		(event: Event, data: any): void;
	}

	/**
	 * Specifies the type of function used to filter native events before they are
	 * converted to GDK events.
	 * 
	 * When a filter is called, #event is unpopulated, except for
	 * `event->window`. The filter may translate the native
	 * event to a GDK event and store the result in #event, or handle it without
	 * translation. If the filter translates the event and processing should
	 * continue, it should return %GDK_FILTER_TRANSLATE.
	 */
	interface FilterFunc {
		/**
		 * Specifies the type of function used to filter native events before they are
		 * converted to GDK events.
		 * 
		 * When a filter is called, #event is unpopulated, except for
		 * `event->window`. The filter may translate the native
		 * event to a GDK event and store the result in #event, or handle it without
		 * translation. If the filter translates the event and processing should
		 * continue, it should return %GDK_FILTER_TRANSLATE.
		 * @param xevent the native event to filter.
		 * @param event the GDK event to which the X event will be translated.
		 * @param data user data set when the filter was installed.
		 * @returns a {@link FilterReturn} value.
		 */
		(xevent: XEvent, event: Event, data: any): FilterReturn;
	}

	/**
	 * Type of the callback used to set up #window so it can be
	 * grabbed. A typical action would be ensuring the window is
	 * visible, although there's room for other initialization
	 * actions.
	 */
	interface SeatGrabPrepareFunc {
		/**
		 * Type of the callback used to set up #window so it can be
		 * grabbed. A typical action would be ensuring the window is
		 * visible, although there's room for other initialization
		 * actions.
		 * @param seat the {@link Seat} being grabbed
		 * @param window the {@link Window} being grabbed
		 */
		(seat: Seat, window: Window): void;
	}

	/**
	 * A function of this type is passed to gdk_window_invalidate_maybe_recurse().
	 * It gets called for each child of the window to determine whether to
	 * recursively invalidate it or now.
	 */
	interface WindowChildFunc {
		/**
		 * A function of this type is passed to gdk_window_invalidate_maybe_recurse().
		 * It gets called for each child of the window to determine whether to
		 * recursively invalidate it or now.
		 * @param window a {@link Window}
		 * @returns %TRUE to invalidate #window recursively
		 */
		(window: Window): boolean;
	}

	/**
	 * Whenever some area of the window is invalidated (directly in the
	 * window or in a child window) this gets called with #region in
	 * the coordinate space of #window. You can use #region to just
	 * keep track of the dirty region, or you can actually change
	 * #region in case you are doing display tricks like showing
	 * a child in multiple places.
	 */
	interface WindowInvalidateHandlerFunc {
		/**
		 * Whenever some area of the window is invalidated (directly in the
		 * window or in a child window) this gets called with #region in
		 * the coordinate space of #window. You can use #region to just
		 * keep track of the dirty region, or you can actually change
		 * #region in case you are doing display tricks like showing
		 * a child in multiple places.
		 * @param window a {@link Window}
		 * @param region a #cairo_region_t
		 */
		(window: Window, region: cairo.Region): void;
	}

	/**
	 * A {@link Event} contains a union of all of the event types,
	 * and allows access to the data fields in a number of ways.
	 * 
	 * The event type is always the first field in all of the event types, and
	 * can always be accessed with the following code, no matter what type of
	 * event it is:
	 * |[<!-- language="C" -->
	 *   GdkEvent *event;
	 *   GdkEventType type;
	 * 
	 *   type = event->type;
	 * ]|
	 * 
	 * To access other fields of the event, the pointer to the event
	 * can be cast to the appropriate event type, or the union member
	 * name can be used. For example if the event type is %GDK_BUTTON_PRESS
	 * then the x coordinate of the button press can be accessed with:
	 * |[<!-- language="C" -->
	 *   GdkEvent *event;
	 *   gdouble x;
	 * 
	 *   x = ((GdkEventButton*)event)->x;
	 * ]|
	 * or:
	 * |[<!-- language="C" -->
	 *   GdkEvent *event;
	 *   gdouble x;
	 * 
	 *   x = event->button.x;
	 * ]|
	 */
	interface Event {}

	/**
	 * Used to represent native events (XEvents for the X11
	 * backend, MSGs for Win32).
	 */
	type XEvent = void;

	/**
	 * Appends gdk option entries to the passed in option group. This is
	 * not public API and must not be used by applications.
	 * @param group An option group.
	 */
	function add_option_entries_libgtk_only(group: GLib.OptionGroup): void;

	/**
	 * Finds or creates an atom corresponding to a given string.
	 * @param atom_name a string.
	 * @param only_if_exists if %TRUE, GDK is allowed to not create a new atom, but
	 *   just return %GDK_NONE if the requested atom doesn’t already
	 *   exists. Currently, the flag is ignored, since checking the
	 *   existance of an atom is as expensive as creating it.
	 * @returns the atom corresponding to #atom_name.
	 */
	function atom_intern(atom_name: string, only_if_exists: boolean): Atom;

	/**
	 * Finds or creates an atom corresponding to a given string.
	 * 
	 * Note that this function is identical to gdk_atom_intern() except
	 * that if a new {@link Atom} is created the string itself is used rather
	 * than a copy. This saves memory, but can only be used if the string
	 * will always exist. It can be used with statically
	 * allocated strings in the main program, but not with statically
	 * allocated memory in dynamically loaded modules, if you expect to
	 * ever unload the module again (e.g. do not use this function in
	 * GTK+ theme engines).
	 * @param atom_name a static string
	 * @returns the atom corresponding to #atom_name
	 */
	function atom_intern_static_string(atom_name: string): Atom;

	/**
	 * Emits a short beep on the default display.
	 */
	function beep(): void;

	/**
	 * Creates a Cairo context for drawing to #window.
	 * 
	 * Note that calling cairo_reset_clip() on the resulting #cairo_t will
	 * produce undefined results, so avoid it at all costs.
	 * 
	 * Typically, this function is used to draw on a {@link Window} out of the paint
	 * cycle of the toolkit; this should be avoided, as it breaks various assumptions
	 * and optimizations.
	 * 
	 * If you are drawing on a native #GdkWindow in response to a %GDK_EXPOSE event
	 * you should use gdk_window_begin_draw_frame() and gdk_drawing_context_get_cairo_context()
	 * instead. GTK will automatically do this for you when drawing a widget.
	 * @param window a {@link Window}
	 * @returns A newly created Cairo context. Free with
	 *  cairo_destroy() when you are done drawing.
	 */
	function cairo_create(window: Window): cairo.Context;

	/**
	 * This is the main way to draw GL content in GTK+. It takes a render buffer ID
	 * (#source_type == #GL_RENDERBUFFER) or a texture id (#source_type == #GL_TEXTURE)
	 * and draws it onto #cr with an OVER operation, respecting the current clip.
	 * The top left corner of the rectangle specified by #x, #y, #width and #height
	 * will be drawn at the current (0,0) position of the cairo_t.
	 * 
	 * This will work for *all* cairo_t, as long as #window is realized, but the
	 * fallback implementation that reads back the pixels from the buffer may be
	 * used in the general case. In the case of direct drawing to a window with
	 * no special effects applied to #cr it will however use a more efficient
	 * approach.
	 * 
	 * For #GL_RENDERBUFFER the code will always fall back to software for buffers
	 * with alpha components, so make sure you use #GL_TEXTURE if using alpha.
	 * 
	 * Calling this may change the current GL context.
	 * @param cr a cairo context
	 * @param window The window we're rendering for (not necessarily into)
	 * @param source The GL ID of the source buffer
	 * @param source_type The type of the #source
	 * @param buffer_scale The scale-factor that the #source buffer is allocated for
	 * @param _x The source x position in #source to start copying from in GL coordinates
	 * @param _y The source y position in #source to start copying from in GL coordinates
	 * @param width The width of the region to draw
	 * @param height The height of the region to draw
	 */
	function cairo_draw_from_gl(cr: cairo.Context, window: Window, source: number, source_type: number, buffer_scale: number, _x: number, _y: number, width: number, height: number): void;

	/**
	 * This is a convenience function around cairo_clip_extents().
	 * It rounds the clip extents to integer coordinates and returns
	 * a boolean indicating if a clip area exists.
	 * @param cr a cairo context
	 * @param rect return location for the clip, or %NULL
	 * @returns %TRUE if a clip rectangle exists, %FALSE if all of #cr is
	 *     clipped and all drawing can be skipped
	 */
	function cairo_get_clip_rectangle(cr: cairo.Context, rect: Rectangle): boolean;

	/**
	 * Retrieves the {@link DrawingContext} that created the Cairo
	 * context #cr.
	 * @param cr a Cairo context
	 * @returns a {@link DrawingContext}, if any is set
	 */
	function cairo_get_drawing_context(cr: cairo.Context): DrawingContext;

	/**
	 * Adds the given rectangle to the current path of #cr.
	 * @param cr a cairo context
	 * @param rectangle a {@link Rectangle}
	 */
	function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;

	/**
	 * Adds the given region to the current path of #cr.
	 * @param cr a cairo context
	 * @param region a #cairo_region_t
	 */
	function cairo_region(cr: cairo.Context, region: cairo.Region): void;

	/**
	 * Creates region that describes covers the area where the given
	 * #surface is more than 50% opaque.
	 * 
	 * This function takes into account device offsets that might be
	 * set with cairo_surface_set_device_offset().
	 * @param surface a cairo surface
	 * @returns A #cairo_region_t; must be freed with cairo_region_destroy()
	 */
	function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region;

	/**
	 * Sets the specified {@link Color} as the source color of #cr.
	 * @param cr a cairo context
	 * @param color a {@link Color}
	 */
	function cairo_set_source_color(cr: cairo.Context, color: Color): void;

	/**
	 * Sets the given pixbuf as the source pattern for #cr.
	 * 
	 * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
	 * so that the origin of #pixbuf is #pixbuf_x, #pixbuf_y.
	 * @param cr a cairo context
	 * @param pixbuf a {@link Pixbuf}
	 * @param pixbuf_x X coordinate of location to place upper left corner of #pixbuf
	 * @param pixbuf_y Y coordinate of location to place upper left corner of #pixbuf
	 */
	function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void;

	/**
	 * Sets the specified {@link RGBA} as the source color of #cr.
	 * @param cr a cairo context
	 * @param rgba a {@link RGBA}
	 */
	function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void;

	/**
	 * Sets the given window as the source pattern for #cr.
	 * 
	 * The pattern has an extend mode of %CAIRO_EXTEND_NONE and is aligned
	 * so that the origin of #window is #x, #y. The window contains all its
	 * subwindows when rendering.
	 * 
	 * Note that the contents of #window are undefined outside of the
	 * visible part of #window, so use this function with care.
	 * @param cr a cairo context
	 * @param window a {@link Window}
	 * @param _x X coordinate of location to place upper left corner of #window
	 * @param _y Y coordinate of location to place upper left corner of #window
	 */
	function cairo_set_source_window(cr: cairo.Context, window: Window, _x: number, _y: number): void;

	/**
	 * Creates an image surface with the same contents as
	 * the pixbuf.
	 * @param pixbuf a {@link Pixbuf}
	 * @param scale the scale of the new surface, or 0 to use same as #window
	 * @param for_window The window this will be drawn to, or %NULL
	 * @returns a new cairo surface, must be freed with cairo_surface_destroy()
	 */
	function cairo_surface_create_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf, scale: number, for_window: Window): cairo.Surface;

	/**
	 * Parses a textual specification of a color and fill in the
	 * #red, #green, and #blue fields of a {@link Color}.
	 * 
	 * The string can either one of a large set of standard names
	 * (taken from the X11 `rgb.txt` file), or it can be a hexadecimal
	 * value in the form “\#rgb” “\#rrggbb”, “\#rrrgggbbb” or
	 * “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits of
	 * the red, green, and blue components of the color, respectively.
	 * (White in the four forms is “\#fff”, “\#ffffff”, “\#fffffffff”
	 * and “\#ffffffffffff”).
	 * @param spec the string specifying the color
	 * @param color the {@link Color} to fill in
	 * @returns %TRUE if the parsing succeeded
	 */
	function color_parse(spec: string, color: Color): boolean;

	/**
	 * Disables multidevice support in GDK. This call must happen prior
	 * to gdk_display_open(), gtk_init(), gtk_init_with_args() or
	 * gtk_init_check() in order to take effect.
	 * 
	 * Most common GTK+ applications won’t ever need to call this. Only
	 * applications that do mixed GDK/Xlib calls could want to disable
	 * multidevice support if such Xlib code deals with input devices in
	 * any way and doesn’t observe the presence of XInput 2.
	 */
	function disable_multidevice(): void;

	/**
	 * Aborts a drag without dropping.
	 * 
	 * This function is called by the drag source.
	 * 
	 * This function does not need to be called in managed drag and drop
	 * operations. See gdk_drag_context_manage_dnd() for more information.
	 * @param context a {@link DragContext}
	 * @param time_ the timestamp for this operation
	 */
	function drag_abort(context: DragContext, time_: number): void;

	/**
	 * Starts a drag and creates a new drag context for it.
	 * This function assumes that the drag is controlled by the
	 * client pointer device, use gdk_drag_begin_for_device() to
	 * begin a drag with a different device.
	 * 
	 * This function is called by the drag source.
	 * @param window the source window for this drag.
	 * @param targets the offered targets,
	 *     as list of {@link Atoms}
	 * @returns a newly created {@link DragContext}
	 */
	function drag_begin(window: Window, targets: GLib.List): DragContext;

	/**
	 * Starts a drag and creates a new drag context for it.
	 * 
	 * This function is called by the drag source.
	 * @param window the source window for this drag
	 * @param device the device that controls this drag
	 * @param targets the offered targets,
	 *     as list of {@link Atoms}
	 * @returns a newly created {@link DragContext}
	 */
	function drag_begin_for_device(window: Window, device: Device, targets: GLib.List): DragContext;

	/**
	 * Starts a drag and creates a new drag context for it.
	 * 
	 * This function is called by the drag source.
	 * @param window the source window for this drag
	 * @param device the device that controls this drag
	 * @param targets the offered targets,
	 *     as list of {@link Atoms}
	 * @param x_root the x coordinate where the drag nominally started
	 * @param y_root the y coordinate where the drag nominally started
	 * @returns a newly created {@link DragContext}
	 */
	function drag_begin_from_point(window: Window, device: Device, targets: GLib.List, x_root: number, y_root: number): DragContext;

	/**
	 * Drops on the current destination.
	 * 
	 * This function is called by the drag source.
	 * 
	 * This function does not need to be called in managed drag and drop
	 * operations. See gdk_drag_context_manage_dnd() for more information.
	 * @param context a {@link DragContext}
	 * @param time_ the timestamp for this operation
	 */
	function drag_drop(context: DragContext, time_: number): void;

	/**
	 * Inform GDK if the drop ended successfully. Passing %FALSE
	 * for #success may trigger a drag cancellation animation.
	 * 
	 * This function is called by the drag source, and should
	 * be the last call before dropping the reference to the
	 * #context.
	 * 
	 * The {@link DragContext} will only take the first gdk_drag_drop_done()
	 * call as effective, if this function is called multiple times,
	 * all subsequent calls will be ignored.
	 * @param context a {@link DragContext}
	 * @param success whether the drag was ultimatively successful
	 */
	function drag_drop_done(context: DragContext, success: boolean): void;

	/**
	 * Returns whether the dropped data has been successfully
	 * transferred. This function is intended to be used while
	 * handling a %GDK_DROP_FINISHED event, its return value is
	 * meaningless at other times.
	 * @param context a {@link DragContext}
	 * @returns %TRUE if the drop was successful.
	 */
	function drag_drop_succeeded(context: DragContext): boolean;

	/**
	 * Finds the destination window and DND protocol to use at the
	 * given pointer position.
	 * 
	 * This function is called by the drag source to obtain the
	 * #dest_window and #protocol parameters for gdk_drag_motion().
	 * @param context a {@link DragContext}
	 * @param drag_window a window which may be at the pointer position, but
	 *     should be ignored, since it is put up by the drag source as an icon
	 * @param screen the screen where the destination window is sought
	 * @param x_root the x position of the pointer in root coordinates
	 * @param y_root the y position of the pointer in root coordinates
	 * @param dest_window location to store the destination window in
	 * @param protocol location to store the DND protocol in
	 */
	function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number, dest_window: Window, protocol: DragProtocol): void;

	/**
	 * Returns the selection atom for the current source window.
	 * @param context a {@link DragContext}.
	 * @returns the selection atom, or %GDK_NONE
	 */
	function drag_get_selection(context: DragContext): Atom;

	/**
	 * Updates the drag context when the pointer moves or the
	 * set of actions changes.
	 * 
	 * This function is called by the drag source.
	 * 
	 * This function does not need to be called in managed drag and drop
	 * operations. See gdk_drag_context_manage_dnd() for more information.
	 * @param context a {@link DragContext}
	 * @param dest_window the new destination window, obtained by
	 *     gdk_drag_find_window()
	 * @param protocol the DND protocol in use, obtained by gdk_drag_find_window()
	 * @param x_root the x position of the pointer in root coordinates
	 * @param y_root the y position of the pointer in root coordinates
	 * @param suggested_action the suggested action
	 * @param possible_actions the possible actions
	 * @param time_ the timestamp for this operation
	 * @returns 
	 */
	function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number): boolean;

	/**
	 * Selects one of the actions offered by the drag source.
	 * 
	 * This function is called by the drag destination in response to
	 * gdk_drag_motion() called by the drag source.
	 * @param context a {@link DragContext}
	 * @param action the selected action which will be taken when a drop happens,
	 *    or 0 to indicate that a drop will not be accepted
	 * @param time_ the timestamp for this operation
	 */
	function drag_status(context: DragContext, action: DragAction, time_: number): void;

	/**
	 * Ends the drag operation after a drop.
	 * 
	 * This function is called by the drag destination.
	 * @param context a {@link DragContext}
	 * @param success %TRUE if the data was successfully received
	 * @param time_ the timestamp for this operation
	 */
	function drop_finish(context: DragContext, success: boolean, time_: number): void;

	/**
	 * Accepts or rejects a drop.
	 * 
	 * This function is called by the drag destination in response
	 * to a drop initiated by the drag source.
	 * @param context a {@link DragContext}
	 * @param accepted %TRUE if the drop is accepted
	 * @param time_ the timestamp for this operation
	 */
	function drop_reply(context: DragContext, accepted: boolean, time_: number): void;

	/**
	 * Removes an error trap pushed with gdk_error_trap_push().
	 * May block until an error has been definitively received
	 * or not received from the X server. gdk_error_trap_pop_ignored()
	 * is preferred if you don’t need to know whether an error
	 * occurred, because it never has to block. If you don't
	 * need the return value of gdk_error_trap_pop(), use
	 * gdk_error_trap_pop_ignored().
	 * 
	 * Prior to GDK 3.0, this function would not automatically
	 * sync for you, so you had to gdk_flush() if your last
	 * call to Xlib was not a blocking round trip.
	 * @returns X error code or 0 on success
	 */
	function error_trap_pop(): number;

	/**
	 * Removes an error trap pushed with gdk_error_trap_push(), but
	 * without bothering to wait and see whether an error occurred.  If an
	 * error arrives later asynchronously that was triggered while the
	 * trap was pushed, that error will be ignored.
	 */
	function error_trap_pop_ignored(): void;

	/**
	 * This function allows X errors to be trapped instead of the normal
	 * behavior of exiting the application. It should only be used if it
	 * is not possible to avoid the X error in any other way. Errors are
	 * ignored on all {@link Display} currently known to the
	 * #GdkDisplayManager. If you don’t care which error happens and just
	 * want to ignore everything, pop with gdk_error_trap_pop_ignored().
	 * If you need the error code, use gdk_error_trap_pop() which may have
	 * to block and wait for the error to arrive from the X server.
	 * 
	 * This API exists on all platforms but only does anything on X.
	 * 
	 * You can use gdk_x11_display_error_trap_push() to ignore errors
	 * on only a single display.
	 * 
	 * ## Trapping an X error
	 * 
	 * |[<!-- language="C" -->
	 * gdk_error_trap_push ();
	 * 
	 *  // ... Call the X function which may cause an error here ...
	 * 
	 * 
	 * if (gdk_error_trap_pop ())
	 *  {
	 *    // ... Handle the error here ...
	 *  }
	 * ]|
	 */
	function error_trap_push(): void;

	/**
	 * Checks all open displays for a {@link Event} to process,to be processed
	 * on, fetching events from the windowing system if necessary.
	 * See gdk_display_get_event().
	 * @returns the next {@link Event} to be processed, or %NULL
	 * if no events are pending. The returned #GdkEvent should be freed
	 * with gdk_event_free().
	 */
	function event_get(): Event;

	/**
	 * Sets the function to call to handle all events from GDK.
	 * 
	 * Note that GTK+ uses this to install its own event handler, so it is
	 * usually not useful for GTK+ applications. (Although an application
	 * can call this function then call gtk_main_do_event() to pass
	 * events to GTK+.)
	 * @param _func the function to call to handle events from GDK.
	 * @param data user data to pass to the function.
	 * @param notify the function to call when the handler function is removed, i.e. when
	 *          gdk_event_handler_set() is called with another event handler.
	 */
	function event_handler_set(_func: EventFunc, data: any, notify: GLib.DestroyNotify): void;

	/**
	 * If there is an event waiting in the event queue of some open
	 * display, returns a copy of it. See gdk_display_peek_event().
	 * @returns a copy of the first {@link Event} on some event
	 * queue, or %NULL if no events are in any queues. The returned
	 * #GdkEvent should be freed with gdk_event_free().
	 */
	function event_peek(): Event;

	/**
	 * Request more motion notifies if #event is a motion notify hint event.
	 * 
	 * This function should be used instead of gdk_window_get_pointer() to
	 * request further motion notifies, because it also works for extension
	 * events where motion notifies are provided for devices other than the
	 * core pointer. Coordinate extraction, processing and requesting more
	 * motion events from a %GDK_MOTION_NOTIFY event usually works like this:
	 * 
	 * |[<!-- language="C" -->
	 * {
	 *   // motion_event handler
	 *   x = motion_event->x;
	 *   y = motion_event->y;
	 *   // handle (x,y) motion
	 *   gdk_event_request_motions (motion_event); // handles is_hint events
	 * }
	 * ]|
	 * @param event a valid {@link Event}
	 */
	function event_request_motions(event: EventMotion): void;

	/**
	 * If both events contain X/Y information, this function will return %TRUE
	 * and return in #angle the relative angle from #event1 to #event2. The rotation
	 * direction for positive angles is from the positive X axis towards the positive
	 * Y axis.
	 * @param event1 first {@link Event}
	 * @param event2 second {@link Event}
	 * @param angle return location for the relative angle between both events
	 * @returns %TRUE if the angle could be calculated.
	 */
	function events_get_angle(event1: Event, event2: Event, angle: number): boolean;

	/**
	 * If both events contain X/Y information, the center of both coordinates
	 * will be returned in #x and #y.
	 * @param event1 first {@link Event}
	 * @param event2 second {@link Event}
	 * @param _x return location for the X coordinate of the center
	 * @param _y return location for the Y coordinate of the center
	 * @returns %TRUE if the center could be calculated.
	 */
	function events_get_center(event1: Event, event2: Event, _x: number, _y: number): boolean;

	/**
	 * If both events have X/Y information, the distance between both coordinates
	 * (as in a straight line going from #event1 to #event2) will be returned.
	 * @param event1 first {@link Event}
	 * @param event2 second {@link Event}
	 * @param distance return location for the distance
	 * @returns %TRUE if the distance could be calculated.
	 */
	function events_get_distance(event1: Event, event2: Event, distance: number): boolean;

	/**
	 * Checks if any events are ready to be processed for any display.
	 * @returns %TRUE if any events are pending.
	 */
	function events_pending(): boolean;

	/**
	 * Flushes the output buffers of all display connections and waits
	 * until all requests have been processed.
	 * This is rarely needed by applications.
	 */
	function flush(): void;

	/**
	 * Obtains the root window (parent all other windows are inside)
	 * for the default display and screen.
	 * @returns the default root window
	 */
	function get_default_root_window(): Window;

	/**
	 * Gets the name of the display, which usually comes from the
	 * `DISPLAY` environment variable or the
	 * `--display` command line option.
	 * @returns the name of the display.
	 */
	function get_display(): string;

	/**
	 * Gets the display name specified in the command line arguments passed
	 * to gdk_init() or gdk_parse_args(), if any.
	 * @returns the display name, if specified explicitly,
	 *   otherwise %NULL this string is owned by GTK+ and must not be
	 *   modified or freed.
	 */
	function get_display_arg_name(): string;

	/**
	 * Gets the program class. Unless the program class has explicitly
	 * been set with gdk_set_program_class() or with the `--class`
	 * commandline option, the default value is the program name (determined
	 * with g_get_prgname()) with the first character converted to uppercase.
	 * @returns the program class.
	 */
	function get_program_class(): string;

	/**
	 * Gets whether event debugging output is enabled.
	 * @returns %TRUE if event debugging output is enabled.
	 */
	function get_show_events(): boolean;

	function gl_error_quark(): GLib.Quark;

	/**
	 * Initializes the GDK library and connects to the windowing system.
	 * If initialization fails, a warning message is output and the application
	 * terminates with a call to `exit(1)`.
	 * 
	 * Any arguments used by GDK are removed from the array and #argc and #argv
	 * are updated accordingly.
	 * 
	 * GTK+ initializes GDK in gtk_init() and so this function is not usually
	 * needed by GTK+ applications.
	 * @param argc the number of command line arguments.
	 * @param argv the array of command line arguments.
	 */
	function init(argc: number, argv: string[]): void;

	/**
	 * Initializes the GDK library and connects to the windowing system,
	 * returning %TRUE on success.
	 * 
	 * Any arguments used by GDK are removed from the array and #argc and #argv
	 * are updated accordingly.
	 * 
	 * GTK+ initializes GDK in gtk_init() and so this function is not usually
	 * needed by GTK+ applications.
	 * @param argc the number of command line arguments.
	 * @param argv the array of command line arguments.
	 * @returns %TRUE if initialization succeeded.
	 */
	function init_check(argc: number, argv: string[]): boolean;

	/**
	 * Grabs the keyboard so that all events are passed to this
	 * application until the keyboard is ungrabbed with gdk_keyboard_ungrab().
	 * This overrides any previous keyboard grab by this client.
	 * 
	 * If you set up anything at the time you take the grab that needs to be cleaned
	 * up when the grab ends, you should handle the {@link EventGrabBroken} events that
	 * are emitted when the grab ends unvoluntarily.
	 * @param window the {@link Window} which will own the grab (the grab window).
	 * @param owner_events if %FALSE then all keyboard events are reported with respect to
	 *   #window. If %TRUE then keyboard events for this application are
	 *   reported as normal, but keyboard events outside this application
	 *   are reported with respect to #window. Both key press and key
	 *   release events are always reported, independant of the event mask
	 *   set by the application.
	 * @param time_ a timestamp from a {@link Event}, or %GDK_CURRENT_TIME if no timestamp is
	 *   available.
	 * @returns %GDK_GRAB_SUCCESS if the grab was successful.
	 */
	function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus;

	/**
	 * Ungrabs the keyboard on the default display, if it is grabbed by this
	 * application.
	 * @param time_ a timestamp from a {@link Event}, or %GDK_CURRENT_TIME if no
	 *        timestamp is available.
	 */
	function keyboard_ungrab(time_: number): void;

	/**
	 * Obtains the upper- and lower-case versions of the keyval #symbol.
	 * Examples of keyvals are #GDK_KEY_a, #GDK_KEY_Enter, #GDK_KEY_F1, etc.
	 * @param symbol a keyval
	 * @param lower return location for lowercase version of #symbol
	 * @param upper return location for uppercase version of #symbol
	 */
	function keyval_convert_case(symbol: number, lower: number, upper: number): void;

	/**
	 * Converts a key name to a key value.
	 * 
	 * The names are the same as those in the
	 * `gdk/gdkkeysyms.h` header file
	 * but without the leading “GDK_KEY_”.
	 * @param keyval_name a key name
	 * @returns the corresponding key value, or %GDK_KEY_VoidSymbol
	 *     if the key name is not a valid key
	 */
	function keyval_from_name(keyval_name: string): number;

	/**
	 * Returns %TRUE if the given key value is in lower case.
	 * @param keyval a key value.
	 * @returns %TRUE if #keyval is in lower case, or if #keyval is not
	 *   subject to case conversion.
	 */
	function keyval_is_lower(keyval: number): boolean;

	/**
	 * Returns %TRUE if the given key value is in upper case.
	 * @param keyval a key value.
	 * @returns %TRUE if #keyval is in upper case, or if #keyval is not subject to
	 *  case conversion.
	 */
	function keyval_is_upper(keyval: number): boolean;

	/**
	 * Converts a key value into a symbolic name.
	 * 
	 * The names are the same as those in the
	 * `gdk/gdkkeysyms.h` header file
	 * but without the leading “GDK_KEY_”.
	 * @param keyval a key value
	 * @returns a string containing the name
	 *     of the key, or %NULL if #keyval is not a valid key. The string
	 *     should not be modified.
	 */
	function keyval_name(keyval: number): string;

	/**
	 * Converts a key value to lower case, if applicable.
	 * @param keyval a key value.
	 * @returns the lower case form of #keyval, or #keyval itself if it is already
	 *  in lower case or it is not subject to case conversion.
	 */
	function keyval_to_lower(keyval: number): number;

	/**
	 * Convert from a GDK key symbol to the corresponding ISO10646 (Unicode)
	 * character.
	 * @param keyval a GDK key symbol
	 * @returns the corresponding unicode character, or 0 if there
	 *               is no corresponding character.
	 */
	function keyval_to_unicode(keyval: number): number;

	/**
	 * Converts a key value to upper case, if applicable.
	 * @param keyval a key value.
	 * @returns the upper case form of #keyval, or #keyval itself if it is already
	 *   in upper case or it is not subject to case conversion.
	 */
	function keyval_to_upper(keyval: number): number;

	/**
	 * Lists the available visuals for the default screen.
	 * (See gdk_screen_list_visuals())
	 * A visual describes a hardware image data format.
	 * For example, a visual might support 24-bit color, or 8-bit color,
	 * and might expect pixels to be in a certain format.
	 * 
	 * Call g_list_free() on the return value when you’re finished with it.
	 * @returns 
	 *     a list of visuals; the list must be freed, but not its contents
	 */
	function list_visuals(): GLib.List;

	/**
	 * Indicates to the GUI environment that the application has finished
	 * loading. If the applications opens windows, this function is
	 * normally called after opening the application’s initial set of
	 * windows.
	 * 
	 * GTK+ will call this function automatically after opening the first
	 * #GtkWindow unless gtk_window_set_auto_startup_notification() is called
	 * to disable that feature.
	 */
	function notify_startup_complete(): void;

	/**
	 * Indicates to the GUI environment that the application has
	 * finished loading, using a given identifier.
	 * 
	 * GTK+ will call this function automatically for #GtkWindow
	 * with custom startup-notification identifier unless
	 * gtk_window_set_auto_startup_notification() is called to
	 * disable that feature.
	 * @param startup_id a startup-notification identifier, for which
	 *     notification process should be completed
	 */
	function notify_startup_complete_with_id(startup_id: string): void;

	/**
	 * Gets the window that #window is embedded in.
	 * @param window a {@link Window}
	 * @returns the embedding {@link Window}, or
	 *     %NULL if #window is not an mbedded offscreen window
	 */
	function offscreen_window_get_embedder(window: Window): Window;

	/**
	 * Gets the offscreen surface that an offscreen window renders into.
	 * If you need to keep this around over window resizes, you need to
	 * add a reference to it.
	 * @param window a {@link Window}
	 * @returns The offscreen surface, or
	 *   %NULL if not offscreen
	 */
	function offscreen_window_get_surface(window: Window): cairo.Surface;

	/**
	 * Sets #window to be embedded in #embedder.
	 * 
	 * To fully embed an offscreen window, in addition to calling this
	 * function, it is also necessary to handle the {@link Window}::pick-embedded-child
	 * signal on the #embedder and the #GdkWindow::to-embedder and
	 * #GdkWindow::from-embedder signals on #window.
	 * @param window a {@link Window}
	 * @param embedder the {@link Window} that #window gets embedded in
	 */
	function offscreen_window_set_embedder(window: Window, embedder: Window): void;

	/**
	 * Creates a #PangoContext for the default GDK screen.
	 * 
	 * The context must be freed when you’re finished with it.
	 * 
	 * When using GTK+, normally you should use gtk_widget_get_pango_context()
	 * instead of this function, to get the appropriate context for
	 * the widget you intend to render text onto.
	 * 
	 * The newly created context will have the default font options (see
	 * #cairo_font_options_t) for the default screen; if these options
	 * change it will not be updated. Using gtk_widget_get_pango_context()
	 * is more convenient if you want to keep a context around and track
	 * changes to the screen’s font rendering settings.
	 * @returns a new #PangoContext for the default display
	 */
	function pango_context_get(): Pango.Context;

	/**
	 * Creates a #PangoContext for #display.
	 * 
	 * The context must be freed when you’re finished with it.
	 * 
	 * When using GTK+, normally you should use gtk_widget_get_pango_context()
	 * instead of this function, to get the appropriate context for
	 * the widget you intend to render text onto.
	 * 
	 * The newly created context will have the default font options
	 * (see #cairo_font_options_t) for the display; if these options
	 * change it will not be updated. Using gtk_widget_get_pango_context()
	 * is more convenient if you want to keep a context around and track
	 * changes to the font rendering settings.
	 * @param display the {@link Display} for which the context is to be created
	 * @returns a new #PangoContext for #display
	 */
	function pango_context_get_for_display(display: Display): Pango.Context;

	/**
	 * Creates a #PangoContext for #screen.
	 * 
	 * The context must be freed when you’re finished with it.
	 * 
	 * When using GTK+, normally you should use gtk_widget_get_pango_context()
	 * instead of this function, to get the appropriate context for
	 * the widget you intend to render text onto.
	 * 
	 * The newly created context will have the default font options
	 * (see #cairo_font_options_t) for the screen; if these options
	 * change it will not be updated. Using gtk_widget_get_pango_context()
	 * is more convenient if you want to keep a context around and track
	 * changes to the screen’s font rendering settings.
	 * @param screen the {@link Screen} for which the context is to be created.
	 * @returns a new #PangoContext for #screen
	 */
	function pango_context_get_for_screen(screen: Screen): Pango.Context;

	/**
	 * Obtains a clip region which contains the areas where the given ranges
	 * of text would be drawn. #x_origin and #y_origin are the top left point
	 * to center the layout. #index_ranges should contain
	 * ranges of bytes in the layout’s text.
	 * 
	 * Note that the regions returned correspond to logical extents of the text
	 * ranges, not ink extents. So the drawn layout may in fact touch areas out of
	 * the clip region.  The clip region is mainly useful for highlightling parts
	 * of text, such as when text is selected.
	 * @param layout a #PangoLayout
	 * @param x_origin X pixel where you intend to draw the layout with this clip
	 * @param y_origin Y pixel where you intend to draw the layout with this clip
	 * @param index_ranges array of byte indexes into the layout, where even members of array are start indexes and odd elements are end indexes
	 * @param n_ranges number of ranges in #index_ranges, i.e. half the size of #index_ranges
	 * @returns a clip region containing the given ranges
	 */
	function pango_layout_get_clip_region(layout: Pango.Layout, x_origin: number, y_origin: number, index_ranges: number, n_ranges: number): cairo.Region;

	/**
	 * Obtains a clip region which contains the areas where the given
	 * ranges of text would be drawn. #x_origin and #y_origin are the top left
	 * position of the layout. #index_ranges
	 * should contain ranges of bytes in the layout’s text. The clip
	 * region will include space to the left or right of the line (to the
	 * layout bounding box) if you have indexes above or below the indexes
	 * contained inside the line. This is to draw the selection all the way
	 * to the side of the layout. However, the clip region is in line coordinates,
	 * not layout coordinates.
	 * 
	 * Note that the regions returned correspond to logical extents of the text
	 * ranges, not ink extents. So the drawn line may in fact touch areas out of
	 * the clip region.  The clip region is mainly useful for highlightling parts
	 * of text, such as when text is selected.
	 * @param line a #PangoLayoutLine
	 * @param x_origin X pixel where you intend to draw the layout line with this clip
	 * @param y_origin baseline pixel where you intend to draw the layout line with this clip
	 * @param index_ranges array of byte indexes into the layout,
	 *     where even members of array are start indexes and odd elements
	 *     are end indexes
	 * @param n_ranges number of ranges in #index_ranges, i.e. half the size of #index_ranges
	 * @returns a clip region containing the given ranges
	 */
	function pango_layout_line_get_clip_region(line: Pango.LayoutLine, x_origin: number, y_origin: number, index_ranges: number[], n_ranges: number): cairo.Region;

	/**
	 * Parse command line arguments, and store for future
	 * use by calls to gdk_display_open().
	 * 
	 * Any arguments used by GDK are removed from the array and #argc and #argv are
	 * updated accordingly.
	 * 
	 * You shouldn’t call this function explicitly if you are using
	 * gtk_init(), gtk_init_check(), gdk_init(), or gdk_init_check().
	 * @param argc the number of command line arguments.
	 * @param argv the array of command line arguments.
	 */
	function parse_args(argc: number, argv: string[]): void;

	/**
	 * Transfers image data from a #cairo_surface_t and converts it to an RGB(A)
	 * representation inside a {@link Pixbuf}. This allows you to efficiently read
	 * individual pixels from cairo surfaces. For #GdkWindows, use
	 * gdk_pixbuf_get_from_window() instead.
	 * 
	 * This function will create an RGB pixbuf with 8 bits per channel.
	 * The pixbuf will contain an alpha channel if the #surface contains one.
	 * @param surface surface to copy from
	 * @param src_x Source X coordinate within #surface
	 * @param src_y Source Y coordinate within #surface
	 * @param width Width in pixels of region to get
	 * @param height Height in pixels of region to get
	 * @returns A newly-created pixbuf with a
	 *     reference count of 1, or %NULL on error
	 */
	function pixbuf_get_from_surface(surface: cairo.Surface, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf;

	/**
	 * Transfers image data from a {@link Window} and converts it to an RGB(A)
	 * representation inside a #GdkPixbuf. In other words, copies
	 * image data from a server-side drawable to a client-side RGB(A) buffer.
	 * This allows you to efficiently read individual pixels on the client side.
	 * 
	 * This function will create an RGB pixbuf with 8 bits per channel with
	 * the size specified by the #width and #height arguments scaled by the
	 * scale factor of #window. The pixbuf will contain an alpha channel if
	 * the #window contains one.
	 * 
	 * If the window is off the screen, then there is no image data in the
	 * obscured/offscreen regions to be placed in the pixbuf. The contents of
	 * portions of the pixbuf corresponding to the offscreen region are undefined.
	 * 
	 * If the window you’re obtaining data from is partially obscured by
	 * other windows, then the contents of the pixbuf areas corresponding
	 * to the obscured regions are undefined.
	 * 
	 * If the window is not mapped (typically because it’s iconified/minimized
	 * or not on the current workspace), then %NULL will be returned.
	 * 
	 * If memory can’t be allocated for the return value, %NULL will be returned
	 * instead.
	 * 
	 * (In short, there are several ways this function can fail, and if it fails
	 *  it returns %NULL; so check the return value.)
	 * @param window Source window
	 * @param src_x Source X coordinate within #window
	 * @param src_y Source Y coordinate within #window
	 * @param width Width in pixels of region to get
	 * @param height Height in pixels of region to get
	 * @returns A newly-created pixbuf with a
	 *     reference count of 1, or %NULL on error
	 */
	function pixbuf_get_from_window(window: Window, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf;

	/**
	 * Grabs the pointer (usually a mouse) so that all events are passed to this
	 * application until the pointer is ungrabbed with gdk_pointer_ungrab(), or
	 * the grab window becomes unviewable.
	 * This overrides any previous pointer grab by this client.
	 * 
	 * Pointer grabs are used for operations which need complete control over mouse
	 * events, even if the mouse leaves the application.
	 * For example in GTK+ it is used for Drag and Drop, for dragging the handle in
	 * the #GtkHPaned and #GtkVPaned widgets.
	 * 
	 * Note that if the event mask of an X window has selected both button press and
	 * button release events, then a button press event will cause an automatic
	 * pointer grab until the button is released.
	 * X does this automatically since most applications expect to receive button
	 * press and release events in pairs.
	 * It is equivalent to a pointer grab on the window with #owner_events set to
	 * %TRUE.
	 * 
	 * If you set up anything at the time you take the grab that needs to be cleaned
	 * up when the grab ends, you should handle the {@link EventGrabBroken} events that
	 * are emitted when the grab ends unvoluntarily.
	 * @param window the {@link Window} which will own the grab (the grab window).
	 * @param owner_events if %FALSE then all pointer events are reported with respect to
	 *                #window and are only reported if selected by #event_mask. If %TRUE then pointer
	 *                events for this application are reported as normal, but pointer events outside
	 *                this application are reported with respect to #window and only if selected by
	 *                #event_mask. In either mode, unreported events are discarded.
	 * @param event_mask specifies the event mask, which is used in accordance with
	 *              #owner_events. Note that only pointer events (i.e. button and motion events)
	 *              may be selected.
	 * @param confine_to If non-%NULL, the pointer will be confined to this
	 *              window during the grab. If the pointer is outside #confine_to, it will
	 *              automatically be moved to the closest edge of #confine_to and enter
	 *              and leave events will be generated as necessary.
	 * @param cursor the cursor to display while the grab is active. If this is %NULL then
	 *          the normal cursors are used for #window and its descendants, and the cursor
	 *          for #window is used for all other windows.
	 * @param time_ the timestamp of the event which led to this pointer grab. This usually
	 *         comes from a {@link EventButton} struct, though %GDK_CURRENT_TIME can be used if
	 *         the time isn’t known.
	 * @returns %GDK_GRAB_SUCCESS if the grab was successful.
	 */
	function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window, cursor: Cursor, time_: number): GrabStatus;

	/**
	 * Returns %TRUE if the pointer on the default display is currently
	 * grabbed by this application.
	 * 
	 * Note that this does not take the inmplicit pointer grab on button
	 * presses into account.
	 * @returns %TRUE if the pointer is currently grabbed by this application.
	 */
	function pointer_is_grabbed(): boolean;

	/**
	 * Ungrabs the pointer on the default display, if it is grabbed by this
	 * application.
	 * @param time_ a timestamp from a {@link Event}, or %GDK_CURRENT_TIME if no
	 *  timestamp is available.
	 */
	function pointer_ungrab(time_: number): void;

	/**
	 * Prepare for parsing command line arguments for GDK. This is not
	 * public API and should not be used in application code.
	 */
	function pre_parse_libgtk_only(): void;

	/**
	 * Changes the contents of a property on a window.
	 * @param window a {@link Window}
	 * @param property the property to change
	 * @param _type the new type for the property. If #mode is
	 *   %GDK_PROP_MODE_PREPEND or %GDK_PROP_MODE_APPEND, then this
	 *   must match the existing type or an error will occur.
	 * @param format the new format for the property. If #mode is
	 *   %GDK_PROP_MODE_PREPEND or %GDK_PROP_MODE_APPEND, then this
	 *   must match the existing format or an error will occur.
	 * @param mode a value describing how the new data is to be combined
	 *   with the current data.
	 * @param data the data (a `guchar *`
	 *   `gushort *`, or `gulong *`,
	 *   depending on #format), cast to a `guchar *`.
	 * @param nelements the number of elements of size determined by the format,
	 *   contained in #data.
	 */
	function property_change(window: Window, property: Atom, _type: Atom, format: number, mode: PropMode, data: number, nelements: number): void;

	/**
	 * Deletes a property from a window.
	 * @param window a {@link Window}
	 * @param property the property to delete
	 */
	function property_delete(window: Window, property: Atom): void;

	/**
	 * Retrieves a portion of the contents of a property. If the
	 * property does not exist, then the function returns %FALSE,
	 * and %GDK_NONE will be stored in #actual_property_type.
	 * 
	 * The XGetWindowProperty() function that gdk_property_get()
	 * uses has a very confusing and complicated set of semantics.
	 * Unfortunately, gdk_property_get() makes the situation
	 * worse instead of better (the semantics should be considered
	 * undefined), and also prints warnings to stderr in cases where it
	 * should return a useful error to the program. You are advised to use
	 * XGetWindowProperty() directly until a replacement function for
	 * gdk_property_get() is provided.
	 * @param window a {@link Window}
	 * @param property the property to retrieve
	 * @param _type the desired property type, or %GDK_NONE, if any type of data
	 *   is acceptable. If this does not match the actual
	 *   type, then #actual_format and #actual_length will
	 *   be filled in, a warning will be printed to stderr
	 *   and no data will be returned.
	 * @param offset the offset into the property at which to begin
	 *   retrieving data, in 4 byte units.
	 * @param length the length of the data to retrieve in bytes.  Data is
	 *   considered to be retrieved in 4 byte chunks, so #length
	 *   will be rounded up to the next highest 4 byte boundary
	 *   (so be careful not to pass a value that might overflow
	 *   when rounded up).
	 * @param pdelete if %TRUE, delete the property after retrieving the
	 *   data.
	 * @param actual_property_type location to store the
	 *   actual type of the property.
	 * @param actual_format location to store the actual return format of the
	 *   data; either 8, 16 or 32 bits.
	 * @param actual_length location to store the length of the retrieved data, in
	 *   bytes.  Data returned in the 32 bit format is stored
	 *   in a long variable, so the actual number of 32 bit
	 *   elements should be be calculated via
	 *   #actual_length / sizeof(glong) to ensure portability to
	 *   64 bit systems.
	 * @param data location
	 *   to store a pointer to the data. The retrieved data should be
	 *   freed with g_free() when you are finished using it.
	 * @returns %TRUE if data was successfully received and stored
	 *   in #data, otherwise %FALSE.
	 */
	function property_get(window: Window, property: Atom, _type: Atom, offset: number, length: number, pdelete: number, actual_property_type: Atom, actual_format: number, actual_length: number, data: number[]): boolean;

	/**
	 * This function returns the available bit depths for the default
	 * screen. It’s equivalent to listing the visuals
	 * (gdk_list_visuals()) and then looking at the depth field in each
	 * visual, removing duplicates.
	 * 
	 * The array returned by this function should not be freed.
	 * @param depths return
	 *     location for available depths
	 * @param count return location for number of available depths
	 */
	function query_depths(depths: number[], count: number): void;

	/**
	 * This function returns the available visual types for the default
	 * screen. It’s equivalent to listing the visuals
	 * (gdk_list_visuals()) and then looking at the type field in each
	 * visual, removing duplicates.
	 * 
	 * The array returned by this function should not be freed.
	 * @param visual_types return
	 *     location for the available visual types
	 * @param count return location for the number of available visual types
	 */
	function query_visual_types(visual_types: VisualType[], count: number): void;

	/**
	 * Retrieves the contents of a selection in a given
	 * form.
	 * @param requestor a {@link Window}.
	 * @param selection an atom identifying the selection to get the
	 *   contents of.
	 * @param target the form in which to retrieve the selection.
	 * @param time_ the timestamp to use when retrieving the
	 *   selection. The selection owner may refuse the
	 *   request if it did not own the selection at
	 *   the time indicated by the timestamp.
	 */
	function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void;

	/**
	 * Determines the owner of the given selection.
	 * @param selection an atom indentifying a selection.
	 * @returns if there is a selection owner
	 *   for this window, and it is a window known to the current process,
	 *   the {@link Window} that owns the selection, otherwise %NULL. Note
	 *   that the return value may be owned by a different process if a
	 *   foreign window was previously created for that window, but a new
	 *   foreign window will never be created by this call.
	 */
	function selection_owner_get(selection: Atom): Window;

	/**
	 * Determine the owner of the given selection.
	 * 
	 * Note that the return value may be owned by a different
	 * process if a foreign window was previously created for that
	 * window, but a new foreign window will never be created by this call.
	 * @param display a {@link Display}
	 * @param selection an atom indentifying a selection
	 * @returns if there is a selection owner
	 *    for this window, and it is a window known to the current
	 *    process, the {@link Window} that owns the selection, otherwise
	 *    %NULL.
	 */
	function selection_owner_get_for_display(display: Display, selection: Atom): Window;

	/**
	 * Sets the owner of the given selection.
	 * @param owner a {@link Window} or %NULL to indicate that the
	 *   the owner for the given should be unset.
	 * @param selection an atom identifying a selection.
	 * @param time_ timestamp to use when setting the selection.
	 *   If this is older than the timestamp given last
	 *   time the owner was set for the given selection, the
	 *   request will be ignored.
	 * @param send_event if %TRUE, and the new owner is different
	 *   from the current owner, the current owner
	 *   will be sent a SelectionClear event.
	 * @returns %TRUE if the selection owner was successfully
	 *   changed to #owner, otherwise %FALSE.
	 */
	function selection_owner_set(owner: Window, selection: Atom, time_: number, send_event: boolean): boolean;

	/**
	 * Sets the {@link Window} #owner as the current owner of the selection #selection.
	 * @param display the {@link Display}
	 * @param owner a {@link Window} or %NULL to indicate that the owner for
	 *         the given should be unset
	 * @param selection an atom identifying a selection
	 * @param time_ timestamp to use when setting the selection
	 *         If this is older than the timestamp given last time the owner was
	 *         set for the given selection, the request will be ignored
	 * @param send_event if %TRUE, and the new owner is different from the current
	 *              owner, the current owner will be sent a SelectionClear event
	 * @returns %TRUE if the selection owner was successfully changed to owner,
	 *    otherwise %FALSE.
	 */
	function selection_owner_set_for_display(display: Display, owner: Window, selection: Atom, time_: number, send_event: boolean): boolean;

	/**
	 * Retrieves selection data that was stored by the selection
	 * data in response to a call to gdk_selection_convert(). This function
	 * will not be used by applications, who should use the #GtkClipboard
	 * API instead.
	 * @param requestor the window on which the data is stored
	 * @param data location to store a pointer to the retrieved data.
	 *        If the retrieval failed, %NULL we be stored here, otherwise, it
	 *        will be non-%NULL and the returned data should be freed with g_free()
	 *        when you are finished using it. The length of the
	 *        allocated memory is one more than the length
	 *        of the returned data, and the final byte will always
	 *        be zero, to ensure nul-termination of strings
	 * @param prop_type location to store the type of the property
	 * @param prop_format location to store the format of the property
	 * @returns the length of the retrieved data.
	 */
	function selection_property_get(requestor: Window, data: number, prop_type: Atom, prop_format: number): number;

	/**
	 * Sends a response to SelectionRequest event.
	 * @param requestor window to which to deliver response.
	 * @param selection selection that was requested.
	 * @param target target that was selected.
	 * @param property property in which the selection owner stored the
	 *   data, or %GDK_NONE to indicate that the request
	 *   was rejected.
	 * @param time_ timestamp.
	 */
	function selection_send_notify(requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void;

	/**
	 * Send a response to SelectionRequest event.
	 * @param display the {@link Display} where #requestor is realized
	 * @param requestor window to which to deliver response
	 * @param selection selection that was requested
	 * @param target target that was selected
	 * @param property property in which the selection owner stored the data,
	 *            or %GDK_NONE to indicate that the request was rejected
	 * @param time_ timestamp
	 */
	function selection_send_notify_for_display(display: Display, requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void;

	/**
	 * Sets a list of backends that GDK should try to use.
	 * 
	 * This can be be useful if your application does not
	 * work with certain GDK backends.
	 * 
	 * By default, GDK tries all included backends.
	 * 
	 * For example,
	 * |[<!-- language="C" -->
	 * gdk_set_allowed_backends ("wayland,quartz,*");
	 * ]|
	 * instructs GDK to try the Wayland backend first,
	 * followed by the Quartz backend, and then all
	 * others.
	 * 
	 * If the `GDK_BACKEND` environment variable
	 * is set, it determines what backends are tried in what
	 * order, while still respecting the set of allowed backends
	 * that are specified by this function.
	 * 
	 * The possible backend names are x11, win32, quartz,
	 * broadway, wayland. You can also include a * in the
	 * list to try all remaining backends.
	 * 
	 * This call must happen prior to gdk_display_open(),
	 * gtk_init(), gtk_init_with_args() or gtk_init_check()
	 * in order to take effect.
	 * @param backends a comma-separated list of backends
	 */
	function set_allowed_backends(backends: string): void;

	/**
	 * Set the double click time for the default display. See
	 * gdk_display_set_double_click_time().
	 * See also gdk_display_set_double_click_distance().
	 * Applications should not set this, it is a
	 * global user-configured setting.
	 * @param msec double click time in milliseconds (thousandths of a second)
	 */
	function set_double_click_time(msec: number): void;

	/**
	 * Sets the program class. The X11 backend uses the program class to set
	 * the class name part of the `WM_CLASS` property on
	 * toplevel windows; see the ICCCM.
	 * 
	 * The program class can still be overridden with the --class command
	 * line option.
	 * @param program_class a string.
	 */
	function set_program_class(program_class: string): void;

	/**
	 * Sets whether a trace of received events is output.
	 * Note that GTK+ must be compiled with debugging (that is,
	 * configured using the `--enable-debug` option)
	 * to use this option.
	 * @param show_events %TRUE to output event debugging information.
	 */
	function set_show_events(show_events: boolean): void;

	/**
	 * Obtains a desktop-wide setting, such as the double-click time,
	 * for the default screen. See gdk_screen_get_setting().
	 * @param name the name of the setting.
	 * @param value location to store the value of the setting.
	 * @returns %TRUE if the setting existed and a value was stored
	 *   in #value, %FALSE otherwise.
	 */
	function setting_get(name: string, value: GObject.Value): boolean;

	function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState): void;

	/**
	 * Retrieves a pixel from #window to force the windowing
	 * system to carry out any pending rendering commands.
	 * 
	 * This function is intended to be used to synchronize with rendering
	 * pipelines, to benchmark windowing system rendering operations.
	 * @param window a mapped {@link Window}
	 */
	function test_render_sync(window: Window): void;

	/**
	 * This function is intended to be used in GTK+ test programs.
	 * It will warp the mouse pointer to the given (#x,#y) coordinates
	 * within #window and simulate a button press or release event.
	 * Because the mouse pointer needs to be warped to the target
	 * location, use of this function outside of test programs that
	 * run in their own virtual windowing system (e.g. Xvfb) is not
	 * recommended.
	 * 
	 * Also, gdk_test_simulate_button() is a fairly low level function,
	 * for most testing purposes, gtk_test_widget_click() is the right
	 * function to call which will generate a button press event followed
	 * by its accompanying button release event.
	 * @param window a {@link Window} to simulate a button event for
	 * @param _x x coordinate within #window for the button event
	 * @param _y y coordinate within #window for the button event
	 * @param button Number of the pointer button for the event, usually 1, 2 or 3
	 * @param modifiers Keyboard modifiers the event is setup with
	 * @param button_pressrelease either %GDK_BUTTON_PRESS or %GDK_BUTTON_RELEASE
	 * @returns whether all actions necessary for a button event simulation
	 *     were carried out successfully
	 */
	function test_simulate_button(window: Window, _x: number, _y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType): boolean;

	/**
	 * This function is intended to be used in GTK+ test programs.
	 * If (#x,#y) are > (-1,-1), it will warp the mouse pointer to
	 * the given (#x,#y) coordinates within #window and simulate a
	 * key press or release event.
	 * 
	 * When the mouse pointer is warped to the target location, use
	 * of this function outside of test programs that run in their
	 * own virtual windowing system (e.g. Xvfb) is not recommended.
	 * If (#x,#y) are passed as (-1,-1), the mouse pointer will not
	 * be warped and #window origin will be used as mouse pointer
	 * location for the event.
	 * 
	 * Also, gdk_test_simulate_key() is a fairly low level function,
	 * for most testing purposes, gtk_test_widget_send_key() is the
	 * right function to call which will generate a key press event
	 * followed by its accompanying key release event.
	 * @param window a {@link Window} to simulate a key event for
	 * @param _x x coordinate within #window for the key event
	 * @param _y y coordinate within #window for the key event
	 * @param keyval A GDK keyboard value
	 * @param modifiers Keyboard modifiers the event is setup with
	 * @param key_pressrelease either %GDK_KEY_PRESS or %GDK_KEY_RELEASE
	 * @returns whether all actions necessary for a key event simulation
	 *     were carried out successfully
	 */
	function test_simulate_key(window: Window, _x: number, _y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType): boolean;

	/**
	 * Converts a text property in the given encoding to
	 * a list of UTF-8 strings.
	 * @param display a {@link Display}
	 * @param encoding an atom representing the encoding of the text
	 * @param format the format of the property
	 * @param text the text to convert
	 * @param length the length of #text, in bytes
	 * @param list location to store the list
	 *            of strings or %NULL. The list should be freed with
	 *            g_strfreev().
	 * @returns the number of strings in the resulting list
	 */
	function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: number[], length: number, list: string[]): number;

	/**
	 * A wrapper for the common usage of gdk_threads_add_idle_full()
	 * assigning the default priority, #G_PRIORITY_DEFAULT_IDLE.
	 * 
	 * See gdk_threads_add_idle_full().
	 * @param _function function to call
	 * @param data data to pass to #function
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_idle(_function: GLib.SourceFunc, data: any): number;

	/**
	 * Adds a function to be called whenever there are no higher priority
	 * events pending.  If the function returns %FALSE it is automatically
	 * removed from the list of event sources and will not be called again.
	 * 
	 * This variant of g_idle_add_full() calls #function with the GDK lock
	 * held. It can be thought of a MT-safe version for GTK+ widgets for the
	 * following use case, where you have to worry about idle_callback()
	 * running in thread A and accessing #self after it has been finalized
	 * in thread B:
	 * 
	 * |[<!-- language="C" -->
	 * static gboolean
	 * idle_callback (gpointer data)
	 * {
	 *    // gdk_threads_enter(); would be needed for g_idle_add()
	 * 
	 *    SomeWidget *self = data;
	 *    // do stuff with self
	 * 
	 *    self->idle_id = 0;
	 * 
	 *    // gdk_threads_leave(); would be needed for g_idle_add()
	 *    return FALSE;
	 * }
	 * 
	 * static void
	 * some_widget_do_stuff_later (SomeWidget *self)
	 * {
	 *    self->idle_id = gdk_threads_add_idle (idle_callback, self)
	 *    // using g_idle_add() here would require thread protection in the callback
	 * }
	 * 
	 * static void
	 * some_widget_finalize (GObject *object)
	 * {
	 *    SomeWidget *self = SOME_WIDGET (object);
	 *    if (self->idle_id)
	 *      g_source_remove (self->idle_id);
	 *    G_OBJECT_CLASS (parent_class)->finalize (object);
	 * }
	 * ]|
	 * @param priority the priority of the idle source. Typically this will be in the
	 *            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE
	 * @param _function function to call
	 * @param data data to pass to #function
	 * @param notify function to call when the idle is removed, or %NULL
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_idle_full(priority: number, _function: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * A wrapper for the common usage of gdk_threads_add_timeout_full()
	 * assigning the default priority, #G_PRIORITY_DEFAULT.
	 * 
	 * See gdk_threads_add_timeout_full().
	 * @param interval the time between calls to the function, in milliseconds
	 *             (1/1000ths of a second)
	 * @param _function function to call
	 * @param data data to pass to #function
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_timeout(interval: number, _function: GLib.SourceFunc, data: any): number;

	/**
	 * Sets a function to be called at regular intervals holding the GDK lock,
	 * with the given priority.  The function is called repeatedly until it
	 * returns %FALSE, at which point the timeout is automatically destroyed
	 * and the function will not be called again.  The #notify function is
	 * called when the timeout is destroyed.  The first call to the
	 * function will be at the end of the first #interval.
	 * 
	 * Note that timeout functions may be delayed, due to the processing of other
	 * event sources. Thus they should not be relied on for precise timing.
	 * After each call to the timeout function, the time of the next
	 * timeout is recalculated based on the current time and the given interval
	 * (it does not try to “catch up” time lost in delays).
	 * 
	 * This variant of g_timeout_add_full() can be thought of a MT-safe version
	 * for GTK+ widgets for the following use case:
	 * 
	 * |[<!-- language="C" -->
	 * static gboolean timeout_callback (gpointer data)
	 * {
	 *    SomeWidget *self = data;
	 *    
	 *    // do stuff with self
	 *    
	 *    self->timeout_id = 0;
	 *    
	 *    return G_SOURCE_REMOVE;
	 * }
	 *  
	 * static void some_widget_do_stuff_later (SomeWidget *self)
	 * {
	 *    self->timeout_id = g_timeout_add (timeout_callback, self)
	 * }
	 *  
	 * static void some_widget_finalize (GObject *object)
	 * {
	 *    SomeWidget *self = SOME_WIDGET (object);
	 *    
	 *    if (self->timeout_id)
	 *      g_source_remove (self->timeout_id);
	 *    
	 *    G_OBJECT_CLASS (parent_class)->finalize (object);
	 * }
	 * ]|
	 * @param priority the priority of the timeout source. Typically this will be in the
	 *            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
	 * @param interval the time between calls to the function, in milliseconds
	 *             (1/1000ths of a second)
	 * @param _function function to call
	 * @param data data to pass to #function
	 * @param notify function to call when the timeout is removed, or %NULL
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_timeout_full(priority: number, interval: number, _function: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * A wrapper for the common usage of gdk_threads_add_timeout_seconds_full()
	 * assigning the default priority, #G_PRIORITY_DEFAULT.
	 * 
	 * For details, see gdk_threads_add_timeout_full().
	 * @param interval the time between calls to the function, in seconds
	 * @param _function function to call
	 * @param data data to pass to #function
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_timeout_seconds(interval: number, _function: GLib.SourceFunc, data: any): number;

	/**
	 * A variant of gdk_threads_add_timeout_full() with second-granularity.
	 * See g_timeout_add_seconds_full() for a discussion of why it is
	 * a good idea to use this function if you don’t need finer granularity.
	 * @param priority the priority of the timeout source. Typically this will be in the
	 *            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
	 * @param interval the time between calls to the function, in seconds
	 * @param _function function to call
	 * @param data data to pass to #function
	 * @param notify function to call when the timeout is removed, or %NULL
	 * @returns the ID (greater than 0) of the event source.
	 */
	function threads_add_timeout_seconds_full(priority: number, interval: number, _function: GLib.SourceFunc, data: any, notify: GLib.DestroyNotify): number;

	/**
	 * This function marks the beginning of a critical section in which
	 * GDK and GTK+ functions can be called safely and without causing race
	 * conditions. Only one thread at a time can be in such a critial
	 * section.
	 */
	function threads_enter(): void;

	/**
	 * Initializes GDK so that it can be used from multiple threads
	 * in conjunction with gdk_threads_enter() and gdk_threads_leave().
	 * 
	 * This call must be made before any use of the main loop from
	 * GTK+; to be safe, call it before gtk_init().
	 */
	function threads_init(): void;

	/**
	 * Leaves a critical region begun with gdk_threads_enter().
	 */
	function threads_leave(): void;

	/**
	 * Allows the application to replace the standard method that
	 * GDK uses to protect its data structures. Normally, GDK
	 * creates a single #GMutex that is locked by gdk_threads_enter(),
	 * and released by gdk_threads_leave(); using this function an
	 * application provides, instead, a function #enter_fn that is
	 * called by gdk_threads_enter() and a function #leave_fn that is
	 * called by gdk_threads_leave().
	 * 
	 * The functions must provide at least same locking functionality
	 * as the default implementation, but can also do extra application
	 * specific processing.
	 * 
	 * As an example, consider an application that has its own recursive
	 * lock that when held, holds the GTK+ lock as well. When GTK+ unlocks
	 * the GTK+ lock when entering a recursive main loop, the application
	 * must temporarily release its lock as well.
	 * 
	 * Most threaded GTK+ apps won’t need to use this method.
	 * 
	 * This method must be called before gdk_threads_init(), and cannot
	 * be called multiple times.
	 * @param enter_fn function called to guard GDK
	 * @param leave_fn function called to release the guard
	 */
	function threads_set_lock_functions(enter_fn: GObject.Callback, leave_fn: GObject.Callback): void;

	/**
	 * Convert from a ISO10646 character to a key symbol.
	 * @param wc a ISO10646 encoded character
	 * @returns the corresponding GDK key symbol, if one exists.
	 *               or, if there is no corresponding symbol,
	 *               wc | 0x01000000
	 */
	function unicode_to_keyval(wc: number): number;

	/**
	 * Converts an UTF-8 string into the best possible representation
	 * as a STRING. The representation of characters not in STRING
	 * is not specified; it may be as pseudo-escape sequences
	 * \x{ABCD}, or it may be in some other form of approximation.
	 * @param _str a UTF-8 string
	 * @returns the newly-allocated string, or %NULL if the
	 *          conversion failed. (It should not fail for any properly
	 *          formed UTF-8 string unless system limits like memory or
	 *          file descriptors are exceeded.)
	 */
	function utf8_to_string_target(_str: string): string;

}