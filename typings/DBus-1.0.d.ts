/** Generated with https://github.com/Gr3q/GIR2TS - If possible do not modify. */
declare namespace imports.gi.DBus {
	export interface ConnectionInitOptions {}
	interface Connection {}
	class Connection {
		public constructor(options?: Partial<ConnectionInitOptions>);
	}

	export interface ErrorInitOptions {}
	interface Error {}
	class Error {
		public constructor(options?: Partial<ErrorInitOptions>);
	}

	export interface MessageInitOptions {}
	interface Message {}
	class Message {
		public constructor(options?: Partial<MessageInitOptions>);
	}

	export interface MessageIterInitOptions {}
	interface MessageIter {}
	class MessageIter {
		public constructor(options?: Partial<MessageIterInitOptions>);
	}

	export interface PendingCallInitOptions {}
	interface PendingCall {}
	class PendingCall {
		public constructor(options?: Partial<PendingCallInitOptions>);
	}

	enum BusType {
		SESSION = 0,
		SYSTEM = 1,
		STARTER = 2
	}

}