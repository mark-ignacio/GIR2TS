/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.Shell {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link App} instead.
	 */
	interface IApp {
		/**
		 * The #GDBusActionGroup associated with this ShellApp, if any. See the
		 * documentation of #GApplication and #GActionGroup for details.
		 */
		readonly action_group: Gio.ActionGroup;
		/**
		 * The #GDesktopAppInfo associated with this ShellApp, if any.
		 */
		app_info: Gio.DesktopAppInfo;
		/**
		 * Whether the application has marked itself as busy.
		 */
		readonly busy: boolean;
		/**
		 * The #GIcon representing this ShellApp
		 */
		readonly icon: Gio.Icon;
		/**
		 * The id of this application (a desktop filename, or a special string
		 * like window:0xabcd1234)
		 */
		readonly id: string;
		/**
		 * The high-level state of the application, effectively whether it's
		 * running or not, or transitioning between those states.
		 */
		readonly state: AppState;
		/**
		 * Like {@link Shell.App.activate_full}, but using the default workspace and
		 * event timestamp.
		 */
		activate(): void;
		/**
		 * Perform an appropriate default action for operating on this application,
		 * dependent on its current state.  For example, if the application is not
		 * currently running, launch it.  If it is running, activate the most
		 * recently used NORMAL window (or if that window has a transient, the most
		 * recently used transient for that window).
		 * @param workspace launch on this workspace, or -1 for default. Ignored if
		 *   activating an existing window
		 * @param timestamp Event timestamp
		 */
		activate_full(workspace: number, timestamp: number): void;
		/**
		 * Bring all windows for the given app to the foreground,
		 * but ensure that #window is on top.  If #window is %NULL,
		 * the window with the most recent user time for the app
		 * will be used.
		 * 
		 * This function has no effect if #app is not currently running.
		 * @param window Window to be focused
		 * @param timestamp Event timestamp
		 */
		activate_window(window: Meta.Window | null, timestamp: number): void;
		/**
		 * Returns %TRUE if the app supports opening a new window through
		 * {@link Shell.App.open_new_window} (ie, if calling that function will
		 * result in actually opening a new window and not something else,
		 * like presenting the most recently active one)
		 * @returns 
		 */
		can_open_new_window(): boolean;
		/**
		 * Compare one {@link App} instance to another, in the following way:
		 *   - Running applications sort before not-running applications.
		 *   - If one of them has non-minimized windows and the other does not,
		 *     the one with visible windows is first.
		 *   - Finally, the application which the user interacted with most recently
		 *     compares earlier.
		 * @param other A {@link App}
		 * @returns 
		 */
		compare(other: App): number;
		/**
		 * Order two applications by name.
		 * @param other The other app
		 * @returns -1, 0, or 1; suitable for use as a comparison function
		 * for e.g. {@link G.slist_sort}
		 */
		compare_by_name(other: App): number;
		/**
		 * Look up the icon for this application, and create a #ClutterActor
		 * for it at the given size.
		 * @param size
		 * @returns A floating #ClutterActor
		 */
		create_icon_texture(size: number): Clutter.Actor;
		get_app_info(): Gio.DesktopAppInfo;
		get_busy(): boolean;
		get_description(): string;
		/**
		 * Look up the icon for this application
		 * @returns A #GIcon
		 */
		get_icon(): Gio.Icon;
		get_id(): string;
		get_n_windows(): number;
		get_name(): string;
		get_pids(): GLib.SList;
		get_state(): AppState;
		/**
		 * Get the windows which are associated with this application. The
		 * returned list will be sorted first by whether they're on the
		 * active workspace, then by whether they're visible, and finally
		 * by the time the user last interacted with them.
		 * @returns List of windows
		 */
		get_windows(): GLib.SList;
		is_on_workspace(workspace: Meta.Workspace): boolean;
		/**
		 * A window backed application is one which represents just an open
		 * window, i.e. there's no .desktop file association, so we don't know
		 * how to launch it again.
		 * @returns 
		 */
		is_window_backed(): boolean;
		launch(timestamp: number, workspace: number, gpu_pref: AppLaunchGpu): boolean;
		launch_action(action_name: string, timestamp: number, workspace: number): void;
		/**
		 * Request that the application create a new window.
		 * @param workspace open on this workspace, or -1 for default
		 */
		open_new_window(workspace: number): void;
		/**
		 * Initiate an asynchronous request to quit this application.
		 * The application may interact with the user, and the user
		 * might cancel the quit request from the application UI.
		 * 
		 * This operation may not be supported for all applications.
		 * @returns %TRUE if a quit request is supported for this application
		 */
		request_quit(): boolean;
		update_app_actions(window: Meta.Window): void;
		update_window_actions(window: Meta.Window): void;
		connect(signal: "windows-changed", callback: (owner: this) => void): number;

		connect(signal: "notify::action-group", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::app-info", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::busy", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::icon", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::id", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::state", callback: (owner: this, ...args: any) => void): number;

	}

	type AppInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IApp,
		"action_group" |
		"app_info" |
		"busy" |
		"icon" |
		"id" |
		"state">;

	export interface AppInitOptions extends AppInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link App} instead.
	 */
	type AppMixin = IApp & GObject.Object;

	interface App extends AppMixin {}

	class App {
		public constructor(options?: Partial<AppInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AppSystem} instead.
	 */
	interface IAppSystem {
		/**
		 * Returns all installed apps, as a list of #GAppInfo
		 * @returns a list of #GAppInfo
		 *   describing all known applications. This memory is owned by the
		 *   {@link AppSystem} and should not be freed.
		 */
		get_installed(): GLib.List;
		/**
		 * Returns the set of applications which currently have at least one
		 * open window.  The returned list will be sorted by {@link Shell.App.compare}.
		 * @returns Active applications
		 */
		get_running(): GLib.SList;
		/**
		 * Find a {@link App} corresponding to an id.
		 * @param id
		 * @returns The {@link App} for id, or %NULL if none
		 */
		lookup_app(id: string): App;
		/**
		 * Find a valid application whose .desktop file, without the extension
		 * and properly canonicalized, matches #wmclass.
		 * @param wmclass A WM_CLASS value
		 * @returns A {@link App} for #wmclass
		 */
		lookup_desktop_wmclass(wmclass: string | null): App;
		/**
		 * Find a valid application corresponding to a given
		 * heuristically determined application identifier
		 * string, or %NULL if none.
		 * @param id Probable application identifier
		 * @returns A {@link App} for #name
		 */
		lookup_heuristic_basename(id: string): App;
		/**
		 * Find a valid application whose .desktop file contains a
		 * StartupWMClass entry matching #wmclass.
		 * @param wmclass A WM_CLASS value
		 * @returns A {@link App} for #wmclass
		 */
		lookup_startup_wmclass(wmclass: string | null): App;
		connect(signal: "app-state-changed", callback: (owner: this, object: App) => void): number;
		connect(signal: "installed-changed", callback: (owner: this) => void): number;

	}

	type AppSystemInitOptionsMixin = GObject.ObjectInitOptions
	export interface AppSystemInitOptions extends AppSystemInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AppSystem} instead.
	 */
	type AppSystemMixin = IAppSystem & GObject.Object;

	interface AppSystem extends AppSystemMixin {}

	class AppSystem {
		public constructor(options?: Partial<AppSystemInitOptions>);
		public static get_default(): AppSystem;
		/**
		 * Wrapper around {@link G.desktop_app_info_search} that replaces results that
		 * don't validate as UTF-8 with the empty string.
		 * @param search_string the search string to use
		 * @returns 
		 */
		public static search(search_string: string): string[][];
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AppUsage} instead.
	 */
	interface IAppUsage {
		/**
		 * Compare #id_a and #id_b based on frequency of use.
		 * @param id_a ID of first app
		 * @param id_b ID of second app
		 * @returns -1 if #id_a ranks higher than #id_b, 1 if #id_b ranks higher
		 *          than #id_a, and 0 if both rank equally.
		 */
		compare(id_a: string, id_b: string): number;
		get_most_used(): GLib.SList;
	}

	type AppUsageInitOptionsMixin = GObject.ObjectInitOptions
	export interface AppUsageInitOptions extends AppUsageInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AppUsage} instead.
	 */
	type AppUsageMixin = IAppUsage & GObject.Object;

	interface AppUsage extends AppUsageMixin {}

	class AppUsage {
		public constructor(options?: Partial<AppUsageInitOptions>);
		public static get_default(): AppUsage;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BlurEffect} instead.
	 */
	interface IBlurEffect {
		brightness: number;
		mode: BlurMode;
		sigma: number;
		get_brightness(): number;
		get_mode(): BlurMode;
		get_sigma(): number;
		set_brightness(brightness: number): void;
		set_mode(mode: BlurMode): void;
		set_sigma(sigma: number): void;
		connect(signal: "notify::brightness", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::sigma", callback: (owner: this, ...args: any) => void): number;

	}

	type BlurEffectInitOptionsMixin = Clutter.EffectInitOptions & 
	Pick<IBlurEffect,
		"brightness" |
		"mode" |
		"sigma">;

	export interface BlurEffectInitOptions extends BlurEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BlurEffect} instead.
	 */
	type BlurEffectMixin = IBlurEffect & Clutter.Effect;

	interface BlurEffect extends BlurEffectMixin {}

	class BlurEffect {
		public constructor(options?: Partial<BlurEffectInitOptions>);
		public static new(): BlurEffect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link EmbeddedWindow} instead.
	 */
	interface IEmbeddedWindow {

	}

	type EmbeddedWindowInitOptionsMixin = Gtk.WindowInitOptions & Atk.ImplementorIfaceInitOptions & Gtk.BuildableInitOptions
	export interface EmbeddedWindowInitOptions extends EmbeddedWindowInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link EmbeddedWindow} instead.
	 */
	type EmbeddedWindowMixin = IEmbeddedWindow & Gtk.Window & Atk.ImplementorIface & Gtk.Buildable;

	interface EmbeddedWindow extends EmbeddedWindowMixin {}

	class EmbeddedWindow {
		public constructor(options?: Partial<EmbeddedWindowInitOptions>);
		public static new(): Gtk.Widget;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GLSLEffect} instead.
	 */
	interface IGLSLEffect {
		/**
		 * Adds a GLSL snippet to the pipeline used for drawing the effect texture.
		 * See #CoglSnippet for details.
		 * 
		 * This is only valid inside the a call to the {@link Build.pipeline} virtual
		 * function.
		 * @param hook where to insert the code
		 * @param declarations GLSL declarations
		 * @param code GLSL code
		 * @param is_replace whether Cogl code should be replaced by the custom shader
		 */
		add_glsl_snippet(hook: SnippetHook, declarations: string, code: string, is_replace: boolean): void;
		get_uniform_location(name: string): number;
		set_uniform_float(uniform: number, n_components: number, total_count: number, value: number[]): void;
	}

	type GLSLEffectInitOptionsMixin = Clutter.OffscreenEffectInitOptions
	export interface GLSLEffectInitOptions extends GLSLEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GLSLEffect} instead.
	 */
	type GLSLEffectMixin = IGLSLEffect & Clutter.OffscreenEffect;

	interface GLSLEffect extends GLSLEffectMixin {}

	class GLSLEffect {
		public constructor(options?: Partial<GLSLEffectInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Global} instead.
	 */
	interface IGlobal {
		readonly backend: Meta.Backend;
		readonly context: Meta.Context;
		readonly datadir: string;
		readonly display: Meta.Display;
		readonly focus_manager: St.FocusManager;
		frame_finish_timestamp: boolean;
		frame_timestamps: boolean;
		readonly imagedir: string;
		readonly screen_height: number;
		readonly screen_width: number;
		session_mode: string;
		readonly settings: Gio.Settings;
		readonly stage: Clutter.Actor;
		readonly switcheroo_control: Gio.DBusProxy;
		readonly top_window_group: Clutter.Actor;
		readonly userdatadir: string;
		readonly window_group: Clutter.Actor;
		readonly window_manager: WM;
		readonly workspace_manager: Meta.WorkspaceManager;
		/**
		 * Grabs the keyboard and mouse to the stage window. The stage will
		 * receive all keyboard and mouse events until {@link Shell.Global.end_modal}
		 * is called. This is used to implement "modes" for the shell, such as the
		 * overview mode or the "looking glass" debug overlay, that block
		 * application and normal key shortcuts.
		 * @param timestamp
		 * @param options
		 * @returns %TRUE if we successfully entered the mode. %FALSE if we couldn't
		 *  enter the mode. Failure may occur because an application has the pointer
		 *  or keyboard grabbed, because Mutter is in a mode itself like moving a
		 *  window or alt-Tab window selection, or because {@link Shell.Global.begin_modal}
		 *  was previously called.
		 */
		begin_modal(timestamp: number, options: Meta.ModalOptions): boolean;
		/**
		 * Marks that we are currently doing work. This is used to to track
		 * whether we are busy for the purposes of {@link Shell.Global.run_at_leisure}.
		 * A count is kept and shell_global_end_work() must be called exactly
		 * as many times as shell_global_begin_work().
		 */
		begin_work(): void;
		/**
		 * Create a #GAppLaunchContext set up with the correct timestamp, and
		 * targeted to activate on the current workspace.
		 * @param timestamp the timestamp for the launch (or 0 for current time)
		 * @param workspace a workspace index, or -1 to indicate the current one
		 * @returns A new #GAppLaunchContext
		 */
		create_app_launch_context(timestamp: number, workspace: number): Gio.AppLaunchContext;
		/**
		 * Undoes the effect of {@link Shell.Global.begin_modal}.
		 * @param timestamp
		 */
		end_modal(timestamp: number): void;
		/**
		 * Marks the end of work that we started with {@link Shell.Global.begin_work}.
		 * If no other work is ongoing and functions have been added with
		 * shell_global_run_at_leisure(), they will be run at the next
		 * opportunity.
		 */
		end_work(): void;
		get_current_time(): number;
		get_display(): Meta.Display;
		/**
		 * The shell maintains "persistent" state which will persist after
		 * logout or reboot.
		 * @param property_type Expected data type
		 * @param property_name Name of the property
		 * @returns The value of a serialized property, or %NULL if none stored
		 */
		get_persistent_state(property_type: string, property_name: string): GLib.Variant;
		/**
		 * Gets the pointer coordinates and current modifier key state.
		 * @returns the X coordinate of the pointer, in global coordinates
		 * 
		 * the Y coordinate of the pointer, in global coordinates
		 * 
		 * the current set of modifier keys that are pressed down
		 */
		get_pointer(): [ x: number, y: number, mods: Clutter.ModifierType ];
		/**
		 * The shell maintains "runtime" state which does not persist across
		 * logout or reboot.
		 * @param property_type Expected data type
		 * @param property_name Name of the property
		 * @returns The value of a serialized property, or %NULL if none stored
		 */
		get_runtime_state(property_type: string, property_name: string): GLib.Variant;
		get_session_mode(): string;
		/**
		 * Get the global GSettings instance.
		 * @returns The GSettings object
		 */
		get_settings(): Gio.Settings;
		get_stage(): Clutter.Stage;
		/**
		 * Get the global #GDBusProxy instance for the switcheroo-control
		 * daemon.
		 * @returns the #GDBusProxy for the daemon,
		 *   or %NULL on error.
		 */
		get_switcheroo_control(): Gio.DBusProxy;
		/**
		 * Gets the list of #MetaWindowActor for the plugin's screen
		 * @returns the list of windows
		 */
		get_window_actors(): GLib.List;
		/**
		 * Show a system error notification.  Use this function
		 * when a user-initiated action results in a non-fatal problem
		 * from causes that may not be under system control.  For
		 * example, an application crash.
		 * @param msg Error message
		 * @param details Error details
		 */
		notify_error(msg: string, details: string): void;
		/**
		 * Restart the current process.  Only intended for development purposes.
		 */
		reexec_self(): void;
		/**
		 * Schedules a function to be called the next time the shell is idle.
		 * Idle means here no animations, no redrawing, and no ongoing background
		 * work. Since there is currently no way to hook into the Clutter master
		 * clock and know when is running, the implementation here is somewhat
		 * approximation. Animations may be detected as terminating early if they
		 * can be drawn fast enough so that the event loop goes idle between frames.
		 * 
		 * The intent of this function is for performance measurement runs
		 * where a number of actions should be run serially and each action is
		 * timed individually. Using this function for other purposes will
		 * interfere with the ability to use it for performance measurement so
		 * should be avoided.
		 * @param func function to call at leisure
		 * @param notify function to call to free #user_data
		 */
		run_at_leisure(func: LeisureFunction, notify: GLib.DestroyNotify): void;
		/**
		 * Change the value of serialized persistent state.
		 * @param property_name Name of the property
		 * @param variant A #GVariant, or %NULL to unset
		 */
		set_persistent_state(property_name: string, variant: GLib.Variant | null): void;
		/**
		 * Change the value of serialized runtime state.
		 * @param property_name Name of the property
		 * @param variant A #GVariant, or %NULL to unset
		 */
		set_runtime_state(property_name: string, variant: GLib.Variant | null): void;
		/**
		 * Sets the area of the stage that is responsive to mouse clicks when
		 * we don't have a modal or grab.
		 * @param rectangles a list of #MetaRectangle
		 * describing the input region.
		 */
		set_stage_input_region(rectangles: GLib.SList): void;
		connect(signal: "locate-pointer", callback: (owner: this) => void): number;
		connect(signal: "notify-error", callback: (owner: this, object: string, p0: string) => void): number;

		connect(signal: "notify::backend", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::context", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::datadir", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::display", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::focus-manager", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::frame-finish-timestamp", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::frame-timestamps", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::imagedir", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::screen-height", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::screen-width", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::session-mode", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::settings", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::stage", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::switcheroo-control", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::top-window-group", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::userdatadir", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::window-group", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::window-manager", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::workspace-manager", callback: (owner: this, ...args: any) => void): number;

	}

	type GlobalInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IGlobal,
		"backend" |
		"context" |
		"datadir" |
		"display" |
		"focus_manager" |
		"frame_finish_timestamp" |
		"frame_timestamps" |
		"imagedir" |
		"screen_height" |
		"screen_width" |
		"session_mode" |
		"settings" |
		"stage" |
		"switcheroo_control" |
		"top_window_group" |
		"userdatadir" |
		"window_group" |
		"window_manager" |
		"workspace_manager">;

	export interface GlobalInitOptions extends GlobalInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Global} instead.
	 */
	type GlobalMixin = IGlobal & GObject.Object;

	interface Global extends GlobalMixin {}

	class Global {
		public constructor(options?: Partial<GlobalInitOptions>);
		/**
		 * Gets the singleton global object that represents the desktop.
		 * @returns the singleton global object
		 */
		public static get(): Global;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GtkEmbed} instead.
	 */
	interface IGtkEmbed {
		window: EmbeddedWindow;

		connect(signal: "notify::window", callback: (owner: this, ...args: any) => void): number;

	}

	type GtkEmbedInitOptionsMixin = Clutter.CloneInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions & 
	Pick<IGtkEmbed,
		"window">;

	export interface GtkEmbedInitOptions extends GtkEmbedInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GtkEmbed} instead.
	 */
	type GtkEmbedMixin = IGtkEmbed & Clutter.Clone & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface GtkEmbed extends GtkEmbedMixin {}

	class GtkEmbed {
		public constructor(options?: Partial<GtkEmbedInitOptions>);
		public static new(window: EmbeddedWindow): Clutter.Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InvertLightnessEffect} instead.
	 */
	interface IInvertLightnessEffect {

	}

	type InvertLightnessEffectInitOptionsMixin = Clutter.OffscreenEffectInitOptions
	export interface InvertLightnessEffectInitOptions extends InvertLightnessEffectInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InvertLightnessEffect} instead.
	 */
	type InvertLightnessEffectMixin = IInvertLightnessEffect & Clutter.OffscreenEffect;

	interface InvertLightnessEffect extends InvertLightnessEffectMixin {}

	class InvertLightnessEffect {
		public constructor(options?: Partial<InvertLightnessEffectInitOptions>);
		/**
		 * Creates a new {@link InvertLightnessEffect} to be used with
		 * {@link Clutter.Actor.add_effect}
		 * @returns the newly created
		 * {@link InvertLightnessEffect} or %NULL.  Use {@link GObject.unref} when done.
		 */
		public static new(): Clutter.Effect;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyringPrompt} instead.
	 */
	interface IKeyringPrompt {
		/**
		 * Whether the choice check box is visible or not.
		 */
		readonly choice_visible: boolean;
		/**
		 * Text field for confirmation password
		 */
		confirm_actor: Clutter.Text;
		/**
		 * Whether the password confirm entry is visible or not.
		 */
		readonly confirm_visible: boolean;
		/**
		 * Text field for password
		 */
		password_actor: Clutter.Text;
		/**
		 * Whether the password entry is visible or not.
		 */
		readonly password_visible: boolean;
		/**
		 * Whether the warning label is visible or not.
		 */
		readonly warning_visible: boolean;
		/**
		 * Called by implementation when the prompt is cancelled.
		 */
		cancel(): void;
		/**
		 * Called by the implementation when the prompt completes. There are various
		 * checks done. %TRUE is returned if the prompt actually should complete.
		 * @returns whether the prompt completed
		 */
		complete(): boolean;
		/**
		 * Get the prompt password text actor
		 * @returns the password actor
		 */
		get_confirm_actor(): Clutter.Text | null;
		/**
		 * Get the prompt password text actor
		 * @returns the password actor
		 */
		get_password_actor(): Clutter.Text | null;
		/**
		 * Set the prompt password confirmation text actor
		 * @param confirm_actor the confirm password actor
		 */
		set_confirm_actor(confirm_actor: Clutter.Text | null): void;
		/**
		 * Set the prompt password text actor
		 * @param password_actor the password actor
		 */
		set_password_actor(password_actor: Clutter.Text | null): void;
		connect(signal: "show-confirm", callback: (owner: this) => void): number;
		connect(signal: "show-password", callback: (owner: this) => void): number;

		connect(signal: "notify::choice-visible", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::confirm-actor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::confirm-visible", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::password-actor", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::password-visible", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::warning-visible", callback: (owner: this, ...args: any) => void): number;

	}

	type KeyringPromptInitOptionsMixin = GObject.ObjectInitOptions & Gcr.PromptInitOptions & 
	Pick<IKeyringPrompt,
		"choice_visible" |
		"confirm_actor" |
		"confirm_visible" |
		"password_actor" |
		"password_visible" |
		"warning_visible">;

	export interface KeyringPromptInitOptions extends KeyringPromptInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyringPrompt} instead.
	 */
	type KeyringPromptMixin = IKeyringPrompt & GObject.Object & Gcr.Prompt;

	interface KeyringPrompt extends KeyringPromptMixin {}

	class KeyringPrompt {
		public constructor(options?: Partial<KeyringPromptInitOptions>);
		/**
		 * Create new internal prompt base
		 * @returns new internal prompt
		 */
		public static new(): KeyringPrompt;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MountOperation} instead.
	 */
	interface IMountOperation {
		get_show_processes_choices(): string[];
		get_show_processes_message(): string;
		get_show_processes_pids(): GLib.Pid[];
		connect(signal: "show-processes-2", callback: (owner: this) => void): number;

	}

	type MountOperationInitOptionsMixin = Gio.MountOperationInitOptions
	export interface MountOperationInitOptions extends MountOperationInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MountOperation} instead.
	 */
	type MountOperationMixin = IMountOperation & Gio.MountOperation;

	interface MountOperation extends MountOperationMixin {}

	class MountOperation {
		public constructor(options?: Partial<MountOperationInitOptions>);
		public static new(): Gio.MountOperation;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link NetworkAgent} instead.
	 */
	interface INetworkAgent {
		add_vpn_secret(request_id: string, setting_key: string, setting_value: string): void;
		respond(request_id: string, response: NetworkAgentResponse): void;
		search_vpn_plugin(service: string, callback: Gio.AsyncReadyCallback | null): void;
		search_vpn_plugin_finish(result: Gio.AsyncResult): NM.VpnPluginInfo | null;
		set_password(request_id: string, setting_key: string, setting_value: string): void;
		connect(signal: "cancel-request", callback: (owner: this, object: string) => void): number;
		connect(signal: "new-request", callback: (owner: this, object: string, p0: NM.Connection, p1: string, p2: string[], p3: number) => void): number;

	}

	type NetworkAgentInitOptionsMixin = NM.SecretAgentOldInitOptions & Gio.AsyncInitableInitOptions & Gio.InitableInitOptions
	export interface NetworkAgentInitOptions extends NetworkAgentInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link NetworkAgent} instead.
	 */
	type NetworkAgentMixin = INetworkAgent & NM.SecretAgentOld & Gio.AsyncInitable & Gio.Initable;

	interface NetworkAgent extends NetworkAgentMixin {}

	class NetworkAgent {
		public constructor(options?: Partial<NetworkAgentInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PerfLog} instead.
	 */
	interface IPerfLog {
		/**
		 * Adds a function that will be called before statistics are recorded.
		 * The function would typically compute one or more statistics values
		 * and call a function such as {@link Shell.PerfLog.update_statistic_i}
		 * to update the value that will be recorded.
		 * @param callback function to call before recording statistics
		 * @param notify function to call when #user_data is no longer needed
		 */
		add_statistics_callback(callback: PerfStatisticsCallback, notify: GLib.DestroyNotify): void;
		/**
		 * Calls all the update functions added with
		 * {@link Shell.PerfLog.add_statistics_callback} and then records events
		 * for all statistics, followed by a perf.statisticsCollected event.
		 */
		collect_statistics(): void;
		/**
		 * Defines a performance event for later recording.
		 * @param name name of the event. This should of the form
		 *   '<namespace>.<specific eventf'>, for example
		 *   'clutter.stagePaintDone'.
		 * @param description human readable description of the event.
		 * @param signature signature defining the arguments that event takes.
		 *   This is a string of type characters, using the same characters
		 *   as D-Bus or GVariant. Only a very limited number of signatures
		 *   are supported: , '', 's', 'i', and 'x'. This mean respectively:
		 *   no arguments, one string, one 32-bit integer, and one 64-bit
		 *   integer.
		 */
		define_event(name: string, description: string, signature: string): void;
		/**
		 * Defines a statistic. A statistic is a numeric value that is stored
		 * by the performance log and recorded periodically or when
		 * {@link Shell.PerfLog.collect_statistics} is called explicitly.
		 * 
		 * Code that defines a statistic should update it by calling
		 * the update function for the particular data type of the statistic,
		 * such as shell_perf_log_update_statistic_i(). This can be done
		 * at any time, but would normally done inside a function registered
		 * with shell_perf_log_add_statistics_callback(). These functions
		 * are called immediately before statistics are recorded.
		 * @param name name of the statistic and of the corresponding event.
		 *  This should follow the same guidelines as for {@link Shell.PerfLog.define_event}
		 * @param description human readable description of the statistic.
		 * @param signature The type of the data stored for statistic. Must
		 *  currently be 'i' or 'x'.
		 */
		define_statistic(name: string, description: string, signature: string): void;
		/**
		 * Dump the definition of currently defined events and statistics, formatted
		 * as JSON, to the specified output stream. The JSON output is an array,
		 * with each element being a dictionary of the form:
		 * 
		 * { name: <name of event>,
		 *   description: <description of string,
		 *   statistic: true } (only for statistics)
		 * @param out output stream into which to write the event definitions
		 * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
		 */
		dump_events(out: Gio.OutputStream): boolean;
		/**
		 * Writes the performance event log, formatted as JSON, to the specified
		 * output stream. For performance reasons, the output stream passed
		 * in should generally be a buffered (or memory) output stream, since
		 * it will be written to in small pieces. The JSON output is an array
		 * with the elements of the array also being arrays, of the form
		 * '[' <time>, <event name> [, <event_arg>... ] ']'.
		 * @param out output stream into which to write the event log
		 * @returns %TRUE if the dump succeeded. %FALSE if an IO error occurred
		 */
		dump_log(out: Gio.OutputStream): boolean;
		/**
		 * Records a performance event with no arguments.
		 * @param name name of the event
		 */
		event(name: string): void;
		/**
		 * Records a performance event with one 32-bit integer argument.
		 * @param name name of the event
		 * @param arg the argument
		 */
		event_i(name: string, arg: number): void;
		/**
		 * Records a performance event with one string argument.
		 * @param name name of the event
		 * @param arg the argument
		 */
		event_s(name: string, arg: string): void;
		/**
		 * Records a performance event with one 64-bit integer argument.
		 * @param name name of the event
		 * @param arg the argument
		 */
		event_x(name: string, arg: number): void;
		/**
		 * Replays the log by calling the given function for each event
		 * in the log.
		 * @param replay_function function to call for each event in the log
		 */
		replay(replay_function: PerfReplayFunction): void;
		/**
		 * Sets whether events are currently being recorded.
		 * @param enabled whether to record events
		 */
		set_enabled(enabled: boolean): void;
		/**
		 * Updates the current value of an 32-bit integer statistic.
		 * @param name name of the statistic
		 * @param value new value for the statistic
		 */
		update_statistic_i(name: string, value: number): void;
		/**
		 * Updates the current value of an 64-bit integer statistic.
		 * @param name name of the statistic
		 * @param value new value for the statistic
		 */
		update_statistic_x(name: string, value: number): void;
	}

	type PerfLogInitOptionsMixin = GObject.ObjectInitOptions
	export interface PerfLogInitOptions extends PerfLogInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PerfLog} instead.
	 */
	type PerfLogMixin = IPerfLog & GObject.Object;

	interface PerfLog extends PerfLogMixin {}

	class PerfLog {
		public constructor(options?: Partial<PerfLogInitOptions>);
		/**
		 * Gets the global singleton performance log. This is initially disabled
		 * and must be explicitly enabled with {@link Shell.PerfLog.set_enabled}.
		 * @returns the global singleton performance log
		 */
		public static get_default(): PerfLog;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PolkitAuthenticationAgent} instead.
	 */
	interface IPolkitAuthenticationAgent {
		complete(dismissed: boolean): void;
		register(): void;
		unregister(): void;
		connect(signal: "cancel", callback: (owner: this) => void): number;
		connect(signal: "initiate", callback: (owner: this, object: string, p0: string, p1: string, p2: string, p3: string[]) => void): number;

	}

	type PolkitAuthenticationAgentInitOptionsMixin = PolkitAgent.ListenerInitOptions
	export interface PolkitAuthenticationAgentInitOptions extends PolkitAuthenticationAgentInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PolkitAuthenticationAgent} instead.
	 */
	type PolkitAuthenticationAgentMixin = IPolkitAuthenticationAgent & PolkitAgent.Listener;

	interface PolkitAuthenticationAgent extends PolkitAuthenticationAgentMixin {}

	class PolkitAuthenticationAgent {
		public constructor(options?: Partial<PolkitAuthenticationAgentInitOptions>);
		public static new(): PolkitAuthenticationAgent;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Screenshot} instead.
	 */
	interface IScreenshot {
		/**
		 * Picks the pixel at #x, #y and returns its color as #ClutterColor.
		 * @param x The X coordinate to pick
		 * @param y The Y coordinate to pick
		 * @param callback function to call returning success or failure
		 * of the async grabbing
		 */
		pick_color(x: number, y: number, callback: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finish the asynchronous operation started by {@link Shell.Screenshot.pick_color}
		 * and obtain its result.
		 * @param result the #GAsyncResult that was provided to the callback
		 * @returns whether the operation was successful
		 * 
		 * the picked color
		 */
		pick_color_finish(result: Gio.AsyncResult): [ boolean, Clutter.Color ];
		/**
		 * Takes a screenshot of the whole screen
		 * in #stream as png image.
		 * @param include_cursor Whether to include the cursor or not
		 * @param stream The stream for the screenshot
		 * @param callback function to call returning success or failure
		 * of the async grabbing
		 */
		screenshot(include_cursor: boolean, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void;
		/**
		 * Takes a screenshot of the passed in area and saves it
		 * in #stream as png image.
		 * @param x The X coordinate of the area
		 * @param y The Y coordinate of the area
		 * @param width The width of the area
		 * @param height The height of the area
		 * @param stream The stream for the screenshot
		 * @param callback function to call returning success or failure
		 * of the async grabbing
		 */
		screenshot_area(x: number, y: number, width: number, height: number, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finish the asynchronous operation started by {@link Shell.Screenshot.screenshot_area}
		 * and obtain its result.
		 * @param result the #GAsyncResult that was provided to the callback
		 * @returns whether the operation was successful
		 * 
		 * the area that was grabbed in screen coordinates
		 */
		screenshot_area_finish(result: Gio.AsyncResult): [ boolean, cairo.RectangleInt ];
		/**
		 * Finish the asynchronous operation started by {@link Shell.Screenshot.screenshot}
		 * and obtain its result.
		 * @param result the #GAsyncResult that was provided to the callback
		 * @returns whether the operation was successful
		 * 
		 * the area that was grabbed in screen coordinates
		 */
		screenshot_finish(result: Gio.AsyncResult): [ boolean, cairo.RectangleInt ];
		/**
		 * Takes a screenshot of the focused window (optionally omitting the frame)
		 * in #stream as png image.
		 * @param include_frame Whether to include the frame or not
		 * @param include_cursor Whether to include the cursor or not
		 * @param stream The stream for the screenshot
		 * @param callback function to call returning success or failure
		 * of the async grabbing
		 */
		screenshot_window(include_frame: boolean, include_cursor: boolean, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void;
		/**
		 * Finish the asynchronous operation started by {@link Shell.Screenshot.screenshot_window}
		 * and obtain its result.
		 * @param result the #GAsyncResult that was provided to the callback
		 * @returns whether the operation was successful
		 * 
		 * the area that was grabbed in screen coordinates
		 */
		screenshot_window_finish(result: Gio.AsyncResult): [ boolean, cairo.RectangleInt ];
		connect(signal: "screenshot-taken", callback: (owner: this, object: Meta.Rectangle) => void): number;

	}

	type ScreenshotInitOptionsMixin = GObject.ObjectInitOptions
	export interface ScreenshotInitOptions extends ScreenshotInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Screenshot} instead.
	 */
	type ScreenshotMixin = IScreenshot & GObject.Object;

	interface Screenshot extends ScreenshotMixin {}

	class Screenshot {
		public constructor(options?: Partial<ScreenshotInitOptions>);
		public static new(): Screenshot;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SecureTextBuffer} instead.
	 */
	interface ISecureTextBuffer {

	}

	type SecureTextBufferInitOptionsMixin = Clutter.TextBufferInitOptions
	export interface SecureTextBufferInitOptions extends SecureTextBufferInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SecureTextBuffer} instead.
	 */
	type SecureTextBufferMixin = ISecureTextBuffer & Clutter.TextBuffer;

	interface SecureTextBuffer extends SecureTextBufferMixin {}

	class SecureTextBuffer {
		public constructor(options?: Partial<SecureTextBufferInitOptions>);
		public static new(): Clutter.TextBuffer;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SquareBin} instead.
	 */
	interface ISquareBin {

	}

	type SquareBinInitOptionsMixin = St.BinInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions
	export interface SquareBinInitOptions extends SquareBinInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SquareBin} instead.
	 */
	type SquareBinMixin = ISquareBin & St.Bin & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface SquareBin extends SquareBinMixin {}

	class SquareBin {
		public constructor(options?: Partial<SquareBinInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Stack} instead.
	 */
	interface IStack {

	}

	type StackInitOptionsMixin = St.WidgetInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions
	export interface StackInitOptions extends StackInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Stack} instead.
	 */
	type StackMixin = IStack & St.Widget & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface Stack extends StackMixin {}

	class Stack {
		public constructor(options?: Partial<StackInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TrayIcon} instead.
	 */
	interface ITrayIcon {
		readonly pid: number;
		readonly title: string;
		readonly wm_class: string;
		/**
		 * Fakes a press and release on #icon. #event must be a
		 * %CLUTTER_BUTTON_RELEASE, %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE event.
		 * Its relevant details will be passed on to the icon, but its
		 * coordinates will be ignored; the click is
		 * always made on the center of #icon.
		 * @param event the #ClutterEvent triggering the fake click
		 */
		click(event: Clutter.Event): void;
		connect(signal: "notify::pid", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::title", callback: (owner: this, ...args: any) => void): number;
		connect(signal: "notify::wm-class", callback: (owner: this, ...args: any) => void): number;

	}

	type TrayIconInitOptionsMixin = GtkEmbedInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions & 
	Pick<ITrayIcon,
		"pid" |
		"title" |
		"wm_class">;

	export interface TrayIconInitOptions extends TrayIconInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TrayIcon} instead.
	 */
	type TrayIconMixin = ITrayIcon & GtkEmbed & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface TrayIcon extends TrayIconMixin {}

	class TrayIcon {
		public constructor(options?: Partial<TrayIconInitOptions>);
		public static new(window: EmbeddedWindow): Clutter.Actor;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TrayManager} instead.
	 */
	interface ITrayManager {
		bg_color: Clutter.Color;
		manage_screen(theme_widget: St.Widget): void;
		unmanage_screen(): void;
		connect(signal: "tray-icon-added", callback: (owner: this, object: Clutter.Actor) => void): number;
		connect(signal: "tray-icon-removed", callback: (owner: this, object: Clutter.Actor) => void): number;

		connect(signal: "notify::bg-color", callback: (owner: this, ...args: any) => void): number;

	}

	type TrayManagerInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<ITrayManager,
		"bg_color">;

	export interface TrayManagerInitOptions extends TrayManagerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link TrayManager} instead.
	 */
	type TrayManagerMixin = ITrayManager & GObject.Object;

	interface TrayManager extends TrayManagerMixin {}

	class TrayManager {
		public constructor(options?: Partial<TrayManagerInitOptions>);
		public static new(): TrayManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WM} instead.
	 */
	interface IWM {
		/**
		 * The plugin must call this after the user responded to the confirmation dialog.
		 * @param ok if the new configuration was OK
		 */
		complete_display_change(ok: boolean): void;
		/**
		 * The plugin must call this when it has completed a window destroy effect.
		 * @param actor the MetaWindowActor actor
		 */
		completed_destroy(actor: Meta.WindowActor): void;
		/**
		 * The plugin must call this when it has completed a window map effect.
		 * @param actor the MetaWindowActor actor
		 */
		completed_map(actor: Meta.WindowActor): void;
		/**
		 * The plugin must call this when it has completed a window minimize effect.
		 * @param actor the MetaWindowActor actor
		 */
		completed_minimize(actor: Meta.WindowActor): void;
		completed_size_change(actor: Meta.WindowActor): void;
		/**
		 * The plugin must call this when it has finished switching the
		 * workspace.
		 */
		completed_switch_workspace(): void;
		/**
		 * The plugin must call this when it has completed a window unminimize effect.
		 * @param actor the MetaWindowActor actor
		 */
		completed_unminimize(actor: Meta.WindowActor): void;
		connect(signal: "confirm-display-change", callback: (owner: this) => void): number;
		/**
		 * Creates a close dialog for the given window.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - window: The window to create the dialog for 
		 *  - returns The close dialog instance. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "create-close-dialog", callback: (owner: this, window: Meta.Window) => Meta.CloseDialog): number;
		/**
		 * Creates an inhibit shortcuts dialog for the given window.
		 * @param signal 
		 * @param callback Callback function
		 *  - owner: owner of the emitted event 
		 *  - window: The window to create the dialog for 
		 *  - returns The inhibit shortcuts dialog instance. 
		 * 
		 * @returns Callback ID
		 */
		connect(signal: "create-inhibit-shortcuts-dialog", callback: (owner: this, window: Meta.Window) => Meta.InhibitShortcutsDialog): number;
		connect(signal: "destroy", callback: (owner: this, object: Meta.WindowActor) => void): number;
		connect(signal: "filter-keybinding", callback: (owner: this, object: Meta.KeyBinding) => boolean): number;
		connect(signal: "hide-tile-preview", callback: (owner: this) => void): number;
		connect(signal: "kill-switch-workspace", callback: (owner: this) => void): number;
		connect(signal: "kill-window-effects", callback: (owner: this, object: Meta.WindowActor) => void): number;
		connect(signal: "map", callback: (owner: this, object: Meta.WindowActor) => void): number;
		connect(signal: "minimize", callback: (owner: this, object: Meta.WindowActor) => void): number;
		connect(signal: "show-tile-preview", callback: (owner: this, object: Meta.Window, p0: Meta.Rectangle, p1: number) => void): number;
		connect(signal: "show-window-menu", callback: (owner: this, object: Meta.Window, p0: number, p1: Meta.Rectangle) => void): number;
		connect(signal: "size-change", callback: (owner: this, object: Meta.WindowActor, p0: Meta.SizeChange, p1: Meta.Rectangle, p2: Meta.Rectangle) => void): number;
		connect(signal: "size-changed", callback: (owner: this, object: Meta.WindowActor) => void): number;
		connect(signal: "switch-workspace", callback: (owner: this, object: number, p0: number, p1: number) => void): number;
		connect(signal: "unminimize", callback: (owner: this, object: Meta.WindowActor) => void): number;

	}

	type WMInitOptionsMixin = GObject.ObjectInitOptions
	export interface WMInitOptions extends WMInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WM} instead.
	 */
	type WMMixin = IWM & GObject.Object;

	interface WM extends WMMixin {}

	class WM {
		public constructor(options?: Partial<WMInitOptions>);
		/**
		 * Creates a new window management interface by hooking into #plugin.
		 * @param plugin the #MetaPlugin
		 * @returns the new window-management interface
		 */
		public static new(plugin: Meta.Plugin): WM;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowPreview} instead.
	 */
	interface IWindowPreview {
		window_container: Clutter.Actor;

		connect(signal: "notify::window-container", callback: (owner: this, ...args: any) => void): number;

	}

	type WindowPreviewInitOptionsMixin = St.WidgetInitOptions & Atk.ImplementorIfaceInitOptions & Clutter.AnimatableInitOptions & Clutter.ContainerInitOptions & Clutter.ScriptableInitOptions & 
	Pick<IWindowPreview,
		"window_container">;

	export interface WindowPreviewInitOptions extends WindowPreviewInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowPreview} instead.
	 */
	type WindowPreviewMixin = IWindowPreview & St.Widget & Atk.ImplementorIface & Clutter.Animatable & Clutter.Container & Clutter.Scriptable;

	interface WindowPreview extends WindowPreviewMixin {}

	class WindowPreview {
		public constructor(options?: Partial<WindowPreviewInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowPreviewLayout} instead.
	 */
	interface IWindowPreviewLayout {
		readonly bounding_box: Clutter.ActorBox;
		/**
		 * Creates a ClutterActor drawing the texture of #window and adds it
		 * to the container. If #window is already part of the preview, this
		 * function will do nothing.
		 * @param window the #MetaWindow
		 * @returns The newly created actor drawing #window
		 */
		add_window(window: Meta.Window): Clutter.Actor;
		/**
		 * Gets an array of all MetaWindows that were added to the layout
		 * using {@link Shell.WindowPreviewLayout.add_window}, ordered by the
		 * insertion order.
		 * @returns The list of windows
		 */
		get_windows(): GLib.List;
		/**
		 * Removes a MetaWindow #window from the preview which has been added
		 * previously using {@link Shell.WindowPreviewLayout.add_window}.
		 * If #window is not part of preview, this function will do nothing.
		 * @param window the #MetaWindow
		 */
		remove_window(window: Meta.Window): void;
		connect(signal: "notify::bounding-box", callback: (owner: this, ...args: any) => void): number;

	}

	type WindowPreviewLayoutInitOptionsMixin = Clutter.LayoutManagerInitOptions & 
	Pick<IWindowPreviewLayout,
		"bounding_box">;

	export interface WindowPreviewLayoutInitOptions extends WindowPreviewLayoutInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowPreviewLayout} instead.
	 */
	type WindowPreviewLayoutMixin = IWindowPreviewLayout & Clutter.LayoutManager;

	interface WindowPreviewLayout extends WindowPreviewLayoutMixin {}

	class WindowPreviewLayout {
		public constructor(options?: Partial<WindowPreviewLayoutInitOptions>);
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowTracker} instead.
	 */
	interface IWindowTracker {
		readonly focus_app: App;
		/**
		 * Look up the application corresponding to a process.
		 * @param pid A Unix process identifier
		 * @returns A {@link App}, or %NULL if none
		 */
		get_app_from_pid(pid: number): App;
		get_startup_sequences(): GLib.SList;
		get_window_app(metawin: Meta.Window): App;
		connect(signal: "startup-sequence-changed", callback: (owner: this, object: Meta.StartupSequence) => void): number;
		connect(signal: "tracked-windows-changed", callback: (owner: this) => void): number;

		connect(signal: "notify::focus-app", callback: (owner: this, ...args: any) => void): number;

	}

	type WindowTrackerInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IWindowTracker,
		"focus_app">;

	export interface WindowTrackerInitOptions extends WindowTrackerInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowTracker} instead.
	 */
	type WindowTrackerMixin = IWindowTracker & GObject.Object;

	interface WindowTracker extends WindowTrackerMixin {}

	class WindowTracker {
		public constructor(options?: Partial<WindowTrackerInitOptions>);
		public static get_default(): WindowTracker;
	}

	export interface MemoryInfoInitOptions {}
	interface MemoryInfo {}
	class MemoryInfo {
		public constructor(options?: Partial<MemoryInfoInitOptions>);
		public glibc_uordblks: number;
		public js_bytes: number;
		public gjs_boxed: number;
		public gjs_gobject: number;
		public gjs_function: number;
		public gjs_closure: number;
		public last_gc_seconds_ago: number;
	}

	enum AppLaunchGpu {
		APP_PREF = 0,
		DISCRETE = 1,
		DEFAULT = 2
	}

	enum AppState {
		STOPPED = 0,
		STARTING = 1,
		RUNNING = 2
	}

	/**
	 * The mode of blurring of the effect.
	 */
	enum BlurMode {
		/**
		 * blur the actor contents, and its children
		 */
		ACTOR = 0,
		/**
		 * blur what's beneath the actor
		 */
		BACKGROUND = 1
	}

	enum NetworkAgentResponse {
		CONFIRMED = 0,
		USER_CANCELED = 1,
		INTERNAL_ERROR = 2
	}

	/**
	 * Temporary hack to work around Cogl not exporting CoglSnippetHook in
	 * the 1.0 API. Don't use.
	 */
	enum SnippetHook {
		VERTEX = 0,
		VERTEX_TRANSFORM = 1,
		FRAGMENT = 2048,
		TEXTURE_COORD_TRANSFORM = 4096,
		LAYER_FRAGMENT = 6144,
		TEXTURE_LOOKUP = 6145
	}

	/**
	 * Controls in which GNOME Shell states an action (like keybindings and gestures)
	 * should be handled.
	 */
	enum ActionMode {
		/**
		 * block action
		 */
		NONE = 0,
		/**
		 * allow action when in window mode,
		 *     e.g. when the focus is in an application window
		 */
		NORMAL = 1,
		/**
		 * allow action while the overview
		 *     is active
		 */
		OVERVIEW = 2,
		/**
		 * allow action when the screen
		 *     is locked, e.g. when the screen shield is shown
		 */
		LOCK_SCREEN = 4,
		/**
		 * allow action in the unlock
		 *     dialog
		 */
		UNLOCK_SCREEN = 8,
		/**
		 * allow action in the login screen
		 */
		LOGIN_SCREEN = 16,
		/**
		 * allow action when a system modal
		 *     dialog (e.g. authentication or session dialogs) is open
		 */
		SYSTEM_MODAL = 32,
		/**
		 * allow action in looking glass
		 */
		LOOKING_GLASS = 64,
		/**
		 * allow action while a shell menu is open
		 */
		POPUP = 128,
		/**
		 * always allow action
		 */
		ALL = -1
	}

	interface LeisureFunction {
		(data: any | null): void;
	}

	interface PerfReplayFunction {
		(time: number, name: string, signature: string, arg: GObject.Value): void;
	}

	interface PerfStatisticsCallback {
		(perf_log: PerfLog, data: any | null): void;
	}

	/**
	 * Synchronously load the contents of a file as a NUL terminated
	 * string, validating it as UTF-8.  Embedded NUL characters count as
	 * invalid content.
	 * @param path UTF-8 encoded filename path
	 * @returns File contents
	 */
	function get_file_contents_utf8_sync(path: string): string;

	/**
	 * Walk over all open file descriptors. Check them for the FD_CLOEXEC flag.
	 * If this flag is not set, log the offending file descriptor number.
	 * 
	 * It is important that gnome-shell's file descriptors are all marked CLOEXEC,
	 * so that the shell's open file descriptors are not passed to child processes
	 * that we launch.
	 */
	function util_check_cloexec_fds(): void;

	function util_composite_capture_images(captures: Clutter.Capture, n_captures: number, x: number, y: number, target_width: number, target_height: number, target_scale: number): cairo.Surface;

	/**
	 * Workaround for non-introspectability of {@link Gdk.pixbuf_from_data}.
	 * @param data
	 * @param len
	 * @param colorspace
	 * @param has_alpha
	 * @param bits_per_sample
	 * @param width
	 * @param height
	 * @param rowstride
	 * @returns 
	 */
	function util_create_pixbuf_from_data(data: number[], len: number, colorspace: GdkPixbuf.Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number, rowstride: number): GdkPixbuf.Pixbuf;

	/**
	 * Attempts to translate the folder #name using translations provided
	 * by .directory files.
	 * @param name the untranslated folder name
	 * @returns a translated string or %NULL
	 */
	function util_get_translated_folder_name(name: string): string | null;

	/**
	 * A wrapper around getuid() so that it can be used from JavaScript. This
	 * function will always succeed.
	 * @returns the real user ID of the calling process
	 */
	function util_get_uid(): number;

	/**
	 * Gets the first week day for the current locale, expressed as a
	 * number in the range 0..6, representing week days from Sunday to
	 * Saturday.
	 * @returns A number representing the first week day for the current
	 *          locale
	 */
	function util_get_week_start(): number;

	/**
	 * If the corresponding X11 display provides the passed extension, return %TRUE,
	 * otherwise %FALSE. If there is no X11 display, %FALSE is passed.
	 * @param display A #MetaDisplay
	 * @param extension An X11 extension
	 * @returns 
	 */
	function util_has_x11_display_extension(display: Meta.Display, extension: string): boolean;

	/**
	 * A wrapper around {@link G.regex_escape_string} that takes its argument as
	 * \0-terminated string rather than a byte-array that confuses gjs.
	 * @param str a UTF-8 string to escape
	 * @returns #str with all regex-special characters escaped
	 */
	function util_regex_escape(str: string): string;

	function util_sd_notify(): void;

	/**
	 * If #hidden is %TRUE, hide #actor from pick even with a mode of
	 * %CLUTTER_PICK_ALL; if #hidden is %FALSE, unhide #actor.
	 * @param actor A #ClutterActor
	 * @param hidden Whether #actor should be hidden from pick
	 */
	function util_set_hidden_from_pick(actor: Clutter.Actor, hidden: boolean): void;

	function util_start_systemd_unit(unit: string, mode: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;

	function util_start_systemd_unit_finish(res: Gio.AsyncResult): boolean;

	function util_stop_systemd_unit(unit: string, mode: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void;

	function util_stop_systemd_unit_finish(res: Gio.AsyncResult): boolean;

	function util_touch_file_async(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void;

	function util_touch_file_finish(file: Gio.File, res: Gio.AsyncResult): boolean;

	/**
	 * Translate #str according to the locale defined by LC_TIME; unlike
	 * dcgettext(), the translations is still taken from the LC_MESSAGES
	 * catalogue and not the LC_TIME one.
	 * @param str String to translate
	 * @returns the translated string
	 */
	function util_translate_time_string(str: string): string;

	/**
	 * Implements libc standard WIFEXITED, that cannot be used JS
	 * code.
	 * @param status the status returned by wait() or waitpid()
	 * @returns TRUE if the process exited normally, FALSE otherwise
	 * 
	 * the actual exit status of the process
	 */
	function util_wifexited(status: number): [ boolean, number ];

	/**
	 * Write a string to a GOutputStream as UTF-8. This is a workaround
	 * for not having binary buffers in GJS.
	 * @param stream a #GOutputStream
	 * @param str a UTF-8 string to write to #stream
	 * @returns %TRUE if write succeeded
	 */
	function write_string_to_stream(stream: Gio.OutputStream, str: string): boolean;

	const KEYRING_SK_TAG: string;

	const KEYRING_SN_TAG: string;

	const KEYRING_UUID_TAG: string;

}