declare namespace imports.gi.xlib {
	interface Display {}
	class Display {
		public constructor();
	}

	interface Screen {}
	class Screen {
		public constructor();
	}

	interface Visual {}
	class Visual {
		public constructor();
	}

	interface XConfigureEvent {}
	class XConfigureEvent {
		public constructor();
	}

	interface XImage {}
	class XImage {
		public constructor();
	}

	interface XFontStruct {}
	class XFontStruct {
		public constructor();
	}

	interface XTrapezoid {}
	class XTrapezoid {
		public constructor();
	}

	interface XVisualInfo {}
	class XVisualInfo {
		public constructor();
	}

	interface XWindowAttributes {}
	class XWindowAttributes {
		public constructor();
	}

	interface XEvent {}

	type Atom = number;

	type Colormap = number;

	type Cursor = number;

	type Drawable = number;

	type GC = any;

	type KeyCode = number;

	type KeySym = number;

	type Picture = number;

	type Time = number;

	type VisualID = number;

	type Window = number;

	type XID = number;

	type Pixmap = number;

	function open_display(): void;

}