/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.Shew {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ExternalWindow} instead.
	 */
	interface IExternalWindow {
		display: Gdk.Display;
		get_display(): Gdk.Display;
		set_parent_of(child_surface: Gdk.Surface): void;
		connect(signal: "notify::display", callback: (owner: this, ...args: any) => void): number;

	}

	type ExternalWindowInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IExternalWindow,
		"display">;

	export interface ExternalWindowInitOptions extends ExternalWindowInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ExternalWindow} instead.
	 */
	type ExternalWindowMixin = IExternalWindow & GObject.Object;

	interface ExternalWindow extends ExternalWindowMixin {}

	class ExternalWindow {
		public constructor(options?: Partial<ExternalWindowInitOptions>);
		public static new_from_handle(handle_str: string): ExternalWindow;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowExporter} instead.
	 */
	interface IWindowExporter {
		window: Gtk.Window;
		export(callback: Gio.AsyncReadyCallback | null): void;
		export_finish(result: Gio.AsyncResult): string;
		unexport(): void;
		connect(signal: "notify::window", callback: (owner: this, ...args: any) => void): number;

	}

	type WindowExporterInitOptionsMixin = GObject.ObjectInitOptions & 
	Pick<IWindowExporter,
		"window">;

	export interface WindowExporterInitOptions extends WindowExporterInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowExporter} instead.
	 */
	type WindowExporterMixin = IWindowExporter & GObject.Object;

	interface WindowExporter extends WindowExporterMixin {}

	class WindowExporter {
		public constructor(options?: Partial<WindowExporterInitOptions>);
		public static new(window: Gtk.Window): WindowExporter;
	}

}