declare namespace imports.gi.Caribou {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DisplayAdapter} instead.
	 */
	interface IDisplayAdapter {
		keyval_press(keyval: number): void;
		keyval_release(keyval: number): void;
		mod_lock(mask: number): void;
		mod_unlock(mask: number): void;
		mod_latch(mask: number): void;
		mod_unlatch(mask: number): void;
		get_current_group(group_name: string, variant_name: string): number;
		get_groups(group_names: string[], group_names_length1: number, variant_names: string[], variant_names_length1: number): void;
		register_key_func(keyval: number, _func: Caribou.KeyButtonCallback, func_target: any): void;
		register_button_func(button: number, _func: Caribou.KeyButtonCallback, func_target: any): void;
		get_display(): Gdk.Display;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DisplayAdapter} instead.
	 */
	type DisplayAdapterMixin = IDisplayAdapter & GObject.IObject;

	interface DisplayAdapter extends DisplayAdapterMixin {}

	class DisplayAdapter {
		public constructor();
		public static set_default(adapter: Caribou.DisplayAdapter): boolean;
		public static get_default(): Caribou.DisplayAdapter;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link NullAdapter} instead.
	 */
	interface INullAdapter {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link NullAdapter} instead.
	 */
	type NullAdapterMixin = INullAdapter & Caribou.IDisplayAdapter;

	interface NullAdapter extends NullAdapterMixin {}

	class NullAdapter {
		public constructor();
		public static new(): Caribou.NullAdapter;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link XAdapter} instead.
	 */
	interface IXAdapter {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link XAdapter} instead.
	 */
	type XAdapterMixin = IXAdapter & Caribou.IDisplayAdapter;

	interface XAdapter extends XAdapterMixin {}

	class XAdapter {
		public constructor();
		public static new(): Caribou.XAdapter;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyboardModel} instead.
	 */
	interface IKeyboardModel {
		get_groups(result_length1: number): string[];
		get_group(group_name: string): Caribou.GroupModel;
		get_active_group(): string;
		get_keyboard_type(): string;
		get_keyboard_file(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyboardModel} instead.
	 */
	type KeyboardModelMixin = IKeyboardModel & GObject.IObject & Caribou.IIKeyboardObject;

	interface KeyboardModel extends KeyboardModelMixin {}

	class KeyboardModel {
		public constructor(options?: Partial<KeyboardModelOptions>);
		public static new(): Caribou.KeyboardModel;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyboardService} instead.
	 */
	interface IKeyboardService {
		set_cursor_location(_x: number, _y: number, _w: number, _h: number): void;
		set_entry_location(_x: number, _y: number, _w: number, _h: number): void;
		show(timestamp: number): void;
		hide(timestamp: number): void;
		register_keyboard(name: string): void;
		name_lost(name: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyboardService} instead.
	 */
	type KeyboardServiceMixin = IKeyboardService & GObject.IObject;

	interface KeyboardService extends KeyboardServiceMixin {}

	class KeyboardService {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GroupModel} instead.
	 */
	interface IGroupModel {
		get_levels(result_length1: number): string[];
		get_level(level_name: string): Caribou.LevelModel;
		get_active_level(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GroupModel} instead.
	 */
	type GroupModelMixin = IGroupModel & GObject.IObject & Caribou.IIKeyboardObject;

	interface GroupModel extends GroupModelMixin {}

	class GroupModel {
		public constructor();
		public static new(group: string, variant: string): Caribou.GroupModel;
		public static create_group_name(group: string, variant: string): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LevelModel} instead.
	 */
	interface ILevelModel {
		get_rows(result_length1: number): Caribou.RowModel[];
		get_mode(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link LevelModel} instead.
	 */
	type LevelModelMixin = ILevelModel & Caribou.IScannableGroup & Caribou.IIKeyboardObject;

	interface LevelModel extends LevelModelMixin {}

	class LevelModel {
		public constructor();
		public static new(mode: string): Caribou.LevelModel;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RowModel} instead.
	 */
	interface IRowModel {
		get_columns(result_length1: number): Caribou.ColumnModel[];
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link RowModel} instead.
	 */
	type RowModelMixin = IRowModel & Caribou.IScannableGroup & Caribou.IIScannableItem & Caribou.IIKeyboardObject;

	interface RowModel extends RowModelMixin {}

	class RowModel {
		public constructor();
		public static new(): Caribou.RowModel;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyModel} instead.
	 */
	interface IKeyModel {
		press(): void;
		release(): void;
		get_extended_keys(result_length1: number): Caribou.KeyModel[];
		activate(): void;
		get_align(): string;
		set_align(value: string): void;
		get_width(): number;
		set_width(value: number): void;
		get_toggle(): string;
		set_toggle(value: string): void;
		get_repeatable(): boolean;
		set_repeatable(value: boolean): void;
		get_is_modifier(): boolean;
		set_is_modifier(value: boolean): void;
		get_show_subkeys(): boolean;
		get_name(): string;
		get_keyval(): number;
		get_text(): string;
		get_label(): string;
		set_label(value: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link KeyModel} instead.
	 */
	type KeyModelMixin = IKeyModel & GObject.IObject & Caribou.IIScannableItem & Caribou.IIKeyboardObject;

	interface KeyModel extends KeyModelMixin {}

	class KeyModel {
		public constructor();
		public static new(name: string, text: string): Caribou.KeyModel;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColumnModel} instead.
	 */
	interface IColumnModel {
		get_key(index: number): Caribou.KeyModel;
		first_key(): Caribou.KeyModel;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColumnModel} instead.
	 */
	type ColumnModelMixin = IColumnModel & Caribou.IScannableGroup & Caribou.IIScannableItem & Caribou.IIKeyboardObject;

	interface ColumnModel extends ColumnModelMixin {}

	class ColumnModel {
		public constructor();
		public static new(): Caribou.ColumnModel;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Scanner} instead.
	 */
	interface IScanner {
		set_keyboard(keyboard: Caribou.KeyboardModel): void;
		reset(): void;
		get_bind_settings(): boolean;
		get_scan_grouping(): number;
		set_scan_grouping(value: number): void;
		get_scan_enabled(): boolean;
		set_scan_enabled(value: boolean): void;
		get_step_time(): number;
		set_step_time(value: number): void;
		get_switch_device(): string;
		set_switch_device(value: string): void;
		get_keyboard_key(): string;
		set_keyboard_key(value: string): void;
		get_mouse_button(): number;
		set_mouse_button(value: number): void;
		get_scan_cycles(): number;
		set_scan_cycles(value: number): void;
		get_autorestart(): boolean;
		set_autorestart(value: boolean): void;
		get_inverse_scanning(): boolean;
		set_inverse_scanning(value: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Scanner} instead.
	 */
	type ScannerMixin = IScanner & GObject.IObject;

	interface Scanner extends ScannerMixin {}

	class Scanner {
		public constructor();
		public static new(): Caribou.Scanner;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ScannableGroup} instead.
	 */
	interface IScannableGroup {
		get_scan_children(result_length1: number): Caribou.IScannableItem[];
		child_select(): Caribou.IScannableItem;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ScannableGroup} instead.
	 */
	type ScannableGroupMixin = IScannableGroup & GObject.IObject & Caribou.IIScannableGroup;

	interface ScannableGroup extends ScannableGroupMixin {}

	class ScannableGroup {
		public constructor();
	}

	interface DisplayAdapterClass {}
	class DisplayAdapterClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public keyval_press: {(self: Caribou.DisplayAdapter, keyval: number): void;};
		public keyval_release: {(self: Caribou.DisplayAdapter, keyval: number): void;};
		public mod_lock: {(self: Caribou.DisplayAdapter, mask: number): void;};
		public mod_unlock: {(self: Caribou.DisplayAdapter, mask: number): void;};
		public mod_latch: {(self: Caribou.DisplayAdapter, mask: number): void;};
		public mod_unlatch: {(self: Caribou.DisplayAdapter, mask: number): void;};
		public get_current_group: {(self: Caribou.DisplayAdapter, group_name: string, variant_name: string): number;};
		public get_groups: {(self: Caribou.DisplayAdapter, group_names: string[], group_names_length1: number, variant_names: string[], variant_names_length1: number): void;};
		public register_key_func: {(self: Caribou.DisplayAdapter, keyval: number, _func: Caribou.KeyButtonCallback, func_target: any): void;};
		public register_button_func: {(self: Caribou.DisplayAdapter, button: number, _func: Caribou.KeyButtonCallback, func_target: any): void;};
	}

	interface DisplayAdapterPrivate {}
	class DisplayAdapterPrivate {
		public constructor();
	}

	interface NullAdapterClass {}
	class NullAdapterClass {
		public constructor();
		public parent_class: Caribou.DisplayAdapterClass;
	}

	interface NullAdapterPrivate {}
	class NullAdapterPrivate {
		public constructor();
	}

	interface XAdapterClass {}
	class XAdapterClass {
		public constructor();
		public parent_class: Caribou.DisplayAdapterClass;
	}

	interface XAdapterPrivate {}
	class XAdapterPrivate {
		public constructor();
	}

	interface KeyboardModelClass {}
	class KeyboardModelClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
	}

	interface KeyboardModelPrivate {}
	class KeyboardModelPrivate {
		public constructor();
	}

	interface KeyboardServiceClass {}
	class KeyboardServiceClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public set_cursor_location: {(self: Caribou.KeyboardService, _x: number, _y: number, _w: number, _h: number): void;};
		public set_entry_location: {(self: Caribou.KeyboardService, _x: number, _y: number, _w: number, _h: number): void;};
		public show: {(self: Caribou.KeyboardService, timestamp: number): void;};
		public hide: {(self: Caribou.KeyboardService, timestamp: number): void;};
		public name_lost: {(self: Caribou.KeyboardService, name: string): void;};
	}

	interface KeyboardServicePrivate {}
	class KeyboardServicePrivate {
		public constructor();
	}

	interface GroupModelClass {}
	class GroupModelClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
	}

	interface GroupModelPrivate {}
	class GroupModelPrivate {
		public constructor();
	}

	interface LevelModelClass {}
	class LevelModelClass {
		public constructor();
		public parent_class: Caribou.ScannableGroupClass;
	}

	interface LevelModelPrivate {}
	class LevelModelPrivate {
		public constructor();
	}

	interface RowModelClass {}
	class RowModelClass {
		public constructor();
		public parent_class: Caribou.ScannableGroupClass;
	}

	interface RowModelPrivate {}
	class RowModelPrivate {
		public constructor();
	}

	interface KeyModelClass {}
	class KeyModelClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
	}

	interface KeyModelPrivate {}
	class KeyModelPrivate {
		public constructor();
	}

	interface ColumnModelClass {}
	class ColumnModelClass {
		public constructor();
		public parent_class: Caribou.ScannableGroupClass;
	}

	interface ColumnModelPrivate {}
	class ColumnModelPrivate {
		public constructor();
	}

	interface ScannerClass {}
	class ScannerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
	}

	interface ScannerPrivate {}
	class ScannerPrivate {
		public constructor();
	}

	interface ScannableGroupClass {}
	class ScannableGroupClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public get_scan_children: {(self: Caribou.ScannableGroup, result_length1: number): Caribou.IScannableItem[];};
		public child_select: {(self: Caribou.ScannableGroup): Caribou.IScannableItem;};
	}

	interface ScannableGroupPrivate {}
	class ScannableGroupPrivate {
		public constructor();
	}

	interface IScannableItemIface {}
	class IScannableItemIface {
		public constructor();
		public parent_iface: GObject.TypeInterface;
		public get_scan_stepping: {(self: Caribou.IScannableItem): boolean;};
		public set_scan_stepping: {(self: Caribou.IScannableItem, value: boolean): void;};
		public get_scan_selected: {(self: Caribou.IScannableItem): boolean;};
		public set_scan_selected: {(self: Caribou.IScannableItem, value: boolean): void;};
	}

	interface IScannableGroupIface {}
	class IScannableGroupIface {
		public constructor();
		public parent_iface: GObject.TypeInterface;
		public child_select: {(self: Caribou.IScannableGroup): Caribou.IScannableItem;};
		public scan_reset: {(self: Caribou.IScannableGroup): void;};
		public get_scan_children: {(self: Caribou.IScannableGroup, result_length1: number): Caribou.IScannableItem[];};
		public child_step: {(self: Caribou.IScannableGroup, cycles: number): Caribou.IScannableItem;};
		public get_step_path: {(self: Caribou.IScannableGroup, result_length1: number): Caribou.IScannableItem[];};
		public get_selected_path: {(self: Caribou.IScannableGroup, result_length1: number): Caribou.IScannableItem[];};
		public get_scan_grouping: {(self: Caribou.IScannableGroup): Caribou.ScanGrouping;};
		public set_scan_grouping: {(self: Caribou.IScannableGroup, value: Caribou.ScanGrouping): void;};
	}

	interface IKeyboardObjectIface {}
	class IKeyboardObjectIface {
		public constructor();
		public parent_iface: GObject.TypeInterface;
		public get_children: {(self: Caribou.IKeyboardObject, result_length1: number): Caribou.IKeyboardObject[];};
		public get_keys: {(self: Caribou.IKeyboardObject, result_length1: number): Caribou.KeyModel[];};
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IScannableItem} instead.
	 */
	interface IIScannableItem {
		get_scan_stepping(): boolean;
		set_scan_stepping(value: boolean): void;
		get_scan_selected(): boolean;
		set_scan_selected(value: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IScannableItem} instead.
	 */
	type IScannableItemMixin = IIScannableItem;

	interface IScannableItem extends IScannableItemMixin {}

	class IScannableItem {
		public constructor();
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IScannableGroup} instead.
	 */
	interface IIScannableGroup {
		child_select(): Caribou.IScannableItem;
		scan_reset(): void;
		get_scan_children(result_length1: number): Caribou.IScannableItem[];
		child_step(cycles: number): Caribou.IScannableItem;
		get_step_path(result_length1: number): Caribou.IScannableItem[];
		get_selected_path(result_length1: number): Caribou.IScannableItem[];
		get_scan_grouping(): Caribou.ScanGrouping;
		set_scan_grouping(value: Caribou.ScanGrouping): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IScannableGroup} instead.
	 */
	type IScannableGroupMixin = IIScannableGroup;

	interface IScannableGroup extends IScannableGroupMixin {}

	class IScannableGroup {
		public constructor();
	}



	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IKeyboardObject} instead.
	 */
	interface IIKeyboardObject {
		get_children(result_length1: number): Caribou.IKeyboardObject[];
		get_keys(result_length1: number): Caribou.KeyModel[];
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link IKeyboardObject} instead.
	 */
	type IKeyboardObjectMixin = IIKeyboardObject;

	interface IKeyboardObject extends IKeyboardObjectMixin {}

	class IKeyboardObject {
		public constructor();
	}



	enum ModifierState {
		NONE = 0,
		LATCHED = 1,
		LOCKED = 2
	}

	enum ScanGrouping {
		NONE = 0,
		SUBGROUPS = 1,
		ROWS = 2,
		LINEAR = 3
	}

	interface KeyButtonCallback {
		(keybuttoncode: number, pressed: boolean): void;
	}

}