/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.DBusGLib {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Proxy} instead.
	 */
	interface IProxy {

	}

	type ProxyInitOptionsMixin = GObject.ObjectInitOptions
	export interface ProxyInitOptions extends ProxyInitOptionsMixin {}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Proxy} instead.
	 */
	type ProxyMixin = IProxy & GObject.Object;

	interface Proxy extends ProxyMixin {}

	class Proxy {
		public constructor(options?: Partial<ProxyInitOptions>);
	}

	export interface ConnectionInitOptions {}
	interface Connection {}
	class Connection {
		public constructor(options?: Partial<ConnectionInitOptions>);
	}

	export interface MethodInvocationInitOptions {}
	interface MethodInvocation {}
	class MethodInvocation {
		public constructor(options?: Partial<MethodInvocationInitOptions>);
	}

}