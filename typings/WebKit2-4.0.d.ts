declare namespace imports.gi.WebKit2 {
	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthenticationRequest} instead.
	 */
	interface IAuthenticationRequest {
		/**
		 * Authenticate the #WebKitAuthenticationRequest using the #WebKitCredential
		 * supplied. To continue without credentials, pass %NULL as #credential.
		 * @param credential A #WebKitCredential, or %NULL
		 */
		authenticate(credential: Credential): void;
		/**
		 * Determine whether the authentication method associated with this
		 * #WebKitAuthenticationRequest should allow the storage of credentials.
		 * This will return %FALSE if WebKit doesn't support credential storing,
		 * if private browsing is enabled, or if persistent credential storage has been
		 * disabled in #WebKitWebsiteDataManager, unless credentials saving has been
		 * explicitly enabled with webkit_authentication_request_set_can_save_credentials().
		 * @returns %TRUE if WebKit can store credentials or %FALSE otherwise.
		 */
		can_save_credentials(): boolean;
		/**
		 * Cancel the authentication challenge. This will also cancel the page loading and result in a
		 * #WebKitWebView::load-failed signal with a #WebKitNetworkError of type %WEBKIT_NETWORK_ERROR_CANCELLED being emitted.
		 */
		cancel(): void;
		/**
		 * Get the host that this authentication challenge is applicable to.
		 * @returns The host of #request.
		 */
		get_host(): string;
		/**
		 * Get the port that this authentication challenge is applicable to.
		 * @returns The port of #request.
		 */
		get_port(): number;
		/**
		 * Get the #WebKitCredential of the proposed authentication challenge that was
		 * stored from a previous session. The client can use this directly for
		 * authentication or construct their own #WebKitCredential.
		 * @returns A #WebKitCredential encapsulating credential details
		 * or %NULL if there is no stored credential.
		 */
		get_proposed_credential(): Credential;
		/**
		 * Get the realm that this authentication challenge is applicable to.
		 * @returns The realm of #request.
		 */
		get_realm(): string;
		/**
		 * Get the authentication scheme of the authentication challenge.
		 * @returns The #WebKitAuthenticationScheme of #request.
		 */
		get_scheme(): AuthenticationScheme;
		/**
		 * Get the #WebKitSecurityOrigin that this authentication challenge is applicable to.
		 * @returns a newly created #WebKitSecurityOrigin.
		 */
		get_security_origin(): SecurityOrigin;
		/**
		 * Determine whether the authentication challenge is associated with a proxy server rather than an "origin" server.
		 * @returns %TRUE if authentication is for a proxy or %FALSE otherwise.
		 */
		is_for_proxy(): boolean;
		/**
		 * Determine whether this this is a first attempt or a retry for this authentication challenge.
		 * @returns %TRUE if authentication attempt is a retry or %FALSE otherwise.
		 */
		is_retry(): boolean;
		/**
		 * Set whether the authentication method associated with #request
		 * should allow the storage of credentials.
		 * This should be used by applications handling their own credentials
		 * storage to indicate that it should be supported even when internal
		 * credential storage is disabled or unsupported.
		 * Note that storing of credentials will not be allowed on ephemeral
		 * sessions in any case.
		 * @param enabled value to set
		 */
		set_can_save_credentials(enabled: boolean): void;
		/**
		 * Set the #WebKitCredential of the proposed authentication challenge that was
		 * stored from a previous session. This should only be used by applications handling
		 * their own credential storage. (When using the default WebKit credential storage,
		 * webkit_authentication_request_get_proposed_credential() already contains previously-stored
		 * credentials.)
		 * Passing a %NULL #credential will clear the proposed credential.
		 * @param credential a #WebKitCredential, or %NULL
		 */
		set_proposed_credential(credential: Credential): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AuthenticationRequest} instead.
	 */
	type AuthenticationRequestMixin = IAuthenticationRequest & GObject.IObject;

	interface AuthenticationRequest extends AuthenticationRequestMixin {}

	class AuthenticationRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AutomationSession} instead.
	 */
	interface IAutomationSession {
		/**
		 * Get the #WebKitAutomationSession previously set with webkit_automation_session_set_application_info().
		 * @returns the #WebKitAutomationSession of #session, or %NULL if no one has been set.
		 */
		get_application_info(): ApplicationInfo;
		/**
		 * Get the unique identifier of a #WebKitAutomationSession
		 * @returns the unique identifier of #session
		 */
		get_id(): string;
		/**
		 * Set the application information to #session. This information will be used by the driver service
		 * to match the requested capabilities with the actual application information. If this information
		 * is not provided to the session when a new automation session is requested, the creation might fail
		 * if the client requested a specific browser name or version. This will not have any effect when called
		 * after the automation session has been fully created, so this must be called in the callback of
		 * #WebKitWebContext::automation-started signal.
		 * @param info a #WebKitApplicationInfo
		 */
		set_application_info(info: ApplicationInfo): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link AutomationSession} instead.
	 */
	type AutomationSessionMixin = IAutomationSession & GObject.IObject;

	interface AutomationSession extends AutomationSessionMixin {}

	class AutomationSession {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackForwardList} instead.
	 */
	interface IBackForwardList {
		/**
		 * Returns the item that precedes the current item.
		 * @returns the #WebKitBackForwardListItem
		 *    preceding the current item or %NULL.
		 */
		get_back_item(): BackForwardListItem;
		get_back_list(): GLib.List;
		get_back_list_with_limit(limit: number): GLib.List;
		/**
		 * Returns the current item in #back_forward_list.
		 * @returns a #WebKitBackForwardListItem
		 *    or %NULL if #back_forward_list is empty.
		 */
		get_current_item(): BackForwardListItem;
		/**
		 * Returns the item that follows the current item.
		 * @returns the #WebKitBackForwardListItem
		 *    following the current item or %NULL.
		 */
		get_forward_item(): BackForwardListItem;
		get_forward_list(): GLib.List;
		get_forward_list_with_limit(limit: number): GLib.List;
		get_length(): number;
		/**
		 * Returns the item at a given index relative to the current item.
		 * @param index the index of the item
		 * @returns the #WebKitBackForwardListItem
		 *    located at the specified index relative to the current item or %NULL.
		 */
		get_nth_item(index: number): BackForwardListItem;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackForwardList} instead.
	 */
	type BackForwardListMixin = IBackForwardList & GObject.IObject;

	interface BackForwardList extends BackForwardListMixin {}

	class BackForwardList {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackForwardListItem} instead.
	 */
	interface IBackForwardListItem {
		/**
		 * See also webkit_back_forward_list_item_get_uri().
		 * @returns the original URI of #list_item or %NULL
		 *    when the original URI is empty.
		 */
		get_original_uri(): string;
		get_title(): string;
		/**
		 * This URI may differ from the original URI if the page was,
		 * for example, redirected to a new location.
		 * See also webkit_back_forward_list_item_get_original_uri().
		 * @returns the URI of #list_item or %NULL
		 *    when the URI is empty.
		 */
		get_uri(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link BackForwardListItem} instead.
	 */
	type BackForwardListItemMixin = IBackForwardListItem & GObject.IInitiallyUnowned;

	interface BackForwardListItem extends BackForwardListItemMixin {}

	class BackForwardListItem {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorChooserRequest} instead.
	 */
	interface IColorChooserRequest {
		/**
		 * Cancels #request and the input element changes to use the initial color
		 * it has before the request started.
		 * The signal #WebKitColorChooserRequest::finished
		 * is emitted to notify that the request has finished.
		 */
		cancel(): void;
		/**
		 * Finishes #request and the input element keeps the current value of
		 * #WebKitColorChooserRequest:rgba.
		 * The signal #WebKitColorChooserRequest::finished
		 * is emitted to notify that the request has finished.
		 */
		finish(): void;
		/**
		 * Gets the bounding box of the color input element.
		 * @param rect a #GdkRectangle to fill in with the element area
		 */
		get_element_rectangle(rect: Gdk.Rectangle): void;
		/**
		 * Gets the current #GdkRGBA color of #request
		 * @param rgba a #GdkRGBA to fill in with the current color.
		 */
		get_rgba(rgba: Gdk.RGBA): void;
		/**
		 * Sets the current #GdkRGBA color of #request
		 * @param rgba a pointer #GdkRGBA
		 */
		set_rgba(rgba: Gdk.RGBA): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ColorChooserRequest} instead.
	 */
	type ColorChooserRequestMixin = IColorChooserRequest & GObject.IObject;

	interface ColorChooserRequest extends ColorChooserRequestMixin {}

	class ColorChooserRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ContextMenu} instead.
	 */
	interface IContextMenu {
		/**
		 * Adds #item at the end of the #menu.
		 * @param item the #WebKitContextMenuItem to add
		 */
		append(item: ContextMenuItem): void;
		/**
		 * Gets the first item in the #menu.
		 * @returns the first #WebKitContextMenuItem of #menu,
		 *    or %NULL if the #WebKitContextMenu is empty.
		 */
		first(): ContextMenuItem;
		/**
		 * Gets the item at the given position in the #menu.
		 * @param position the position of the item, counting from 0
		 * @returns the #WebKitContextMenuItem at position #position in #menu,
		 *    or %NULL if the position is off the end of the #menu.
		 */
		get_item_at_position(position: number): ContextMenuItem;
		/**
		 * Returns the item list of #menu.
		 * @returns a #GList of
		 *    #WebKitContextMenuItem<!-- -->s
		 */
		get_items(): GLib.List;
		/**
		 * Gets the length of the #menu.
		 * @returns the number of #WebKitContextMenuItem<!-- -->s in #menu
		 */
		get_n_items(): number;
		/**
		 * Gets the user data of #menu.
		 * This function can be used from the UI Process to get user data previously set
		 * from the Web Process with webkit_context_menu_set_user_data().
		 * @returns the user data of #menu, or %NULL if #menu doesn't have user data
		 */
		get_user_data(): GLib.Variant;
		/**
		 * Inserts #item into the #menu at the given position.
		 * If #position is negative, or is larger than the number of items
		 * in the #WebKitContextMenu, the item is added on to the end of
		 * the #menu. The first position is 0.
		 * @param item the #WebKitContextMenuItem to add
		 * @param position the position to insert the item
		 */
		insert(item: ContextMenuItem, position: number): void;
		/**
		 * Gets the last item in the #menu.
		 * @returns the last #WebKitContextMenuItem of #menu,
		 *    or %NULL if the #WebKitContextMenu is empty.
		 */
		last(): ContextMenuItem;
		/**
		 * Moves #item to the given position in the #menu.
		 * If #position is negative, or is larger than the number of items
		 * in the #WebKitContextMenu, the item is added on to the end of
		 * the #menu.
		 * The first position is 0.
		 * @param item the #WebKitContextMenuItem to add
		 * @param position the new position to move the item
		 */
		move_item(item: ContextMenuItem, position: number): void;
		/**
		 * Adds #item at the beginning of the #menu.
		 * @param item the #WebKitContextMenuItem to add
		 */
		prepend(item: ContextMenuItem): void;
		/**
		 * Removes #item from the #menu.
		 * See also webkit_context_menu_remove_all() to remove all items.
		 * @param item the #WebKitContextMenuItem to remove
		 */
		remove(item: ContextMenuItem): void;
		/**
		 * Removes all items of the #menu.
		 */
		remove_all(): void;
		/**
		 * Sets user data to #menu.
		 * This function can be used from a Web Process extension to set user data
		 * that can be retrieved from the UI Process using webkit_context_menu_get_user_data().
		 * If the #user_data #GVariant is floating, it is consumed.
		 */
		set_user_data(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ContextMenu} instead.
	 */
	type ContextMenuMixin = IContextMenu & GObject.IObject;

	interface ContextMenu extends ContextMenuMixin {}

	class ContextMenu {
		public constructor();
		/**
		 * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
		 * #WebKitContextMenu. The context menu of a #WebKitWebView is created by the view
		 * and passed as an argument of #WebKitWebView::context-menu signal.
		 * To add items to the menu use webkit_context_menu_prepend(),
		 * webkit_context_menu_append() or webkit_context_menu_insert().
		 * See also webkit_context_menu_new_with_items() to create a #WebKitContextMenu with
		 * a list of initial items.
		 * @returns The newly created #WebKitContextMenu object
		 */
		public static new(): ContextMenu;
		/**
		 * Creates a new #WebKitContextMenu object to be used as a submenu of an existing
		 * #WebKitContextMenu with the given initial items.
		 * See also webkit_context_menu_new()
		 * @param items a #GList of #WebKitContextMenuItem
		 * @returns The newly created #WebKitContextMenu object
		 */
		public static new_with_items(items: GLib.List): ContextMenu;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ContextMenuItem} instead.
	 */
	interface IContextMenuItem {
		/**
		 * Gets the action associated to #item as a #GtkAction.
		 * @returns the #GtkAction associated to the #WebKitContextMenuItem,
		 *    or %NULL if #item is a separator.
		 */
		get_action(): Gtk.Action;
		/**
		 * Gets the action associated to #item as a #GAction.
		 * @returns the #GAction associated to the #WebKitContextMenuItem,
		 *    or %NULL if #item is a separator.
		 */
		get_gaction(): Gio.Action;
		/**
		 * Gets the #WebKitContextMenuAction of #item. If the #WebKitContextMenuItem was not
		 * created for a stock action %WEBKIT_CONTEXT_MENU_ACTION_CUSTOM will be
		 * returned. If the #WebKitContextMenuItem is a separator %WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION
		 * will be returned.
		 * @returns the #WebKitContextMenuAction of #item
		 */
		get_stock_action(): ContextMenuAction;
		/**
		 * Gets the submenu of #item.
		 * @returns the #WebKitContextMenu representing the submenu of
		 *    #item or %NULL if #item doesn't have a submenu.
		 */
		get_submenu(): ContextMenu;
		/**
		 * Checks whether #item is a separator.
		 * @returns %TRUE is #item is a separator or %FALSE otherwise
		 */
		is_separator(): boolean;
		/**
		 * Sets or replaces the #item submenu. If #submenu is %NULL the current
		 * submenu of #item is removed.
		 * @param submenu a #WebKitContextMenu
		 */
		set_submenu(submenu: ContextMenu): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ContextMenuItem} instead.
	 */
	type ContextMenuItemMixin = IContextMenuItem & GObject.IInitiallyUnowned;

	interface ContextMenuItem extends ContextMenuItemMixin {}

	class ContextMenuItem {
		public constructor();
		/**
		 * Creates a new #WebKitContextMenuItem for the given #action.
		 * @param action a #GtkAction
		 * @returns the newly created #WebKitContextMenuItem object.
		 */
		public static new(action: Gtk.Action): ContextMenuItem;
		/**
		 * Creates a new #WebKitContextMenuItem for the given #action and #label. On activation
		 * #target will be passed as parameter to the callback.
		 * @param action a #GAction
		 * @param label the menu item label text
		 * @param target a #GVariant to use as the action target
		 * @returns the newly created #WebKitContextMenuItem object.
		 */
		public static new_from_gaction(action: Gio.Action, label: string, target: GLib.Variant): ContextMenuItem;
		/**
		 * Creates a new #WebKitContextMenuItem for the given stock action.
		 * Stock actions are handled automatically by WebKit so that, for example,
		 * when a menu item created with a %WEBKIT_CONTEXT_MENU_ACTION_STOP is
		 * activated the action associated will be handled by WebKit and the current
		 * load operation will be stopped. You can get the #GAction of a
		 * #WebKitContextMenuItem created with a #WebKitContextMenuAction with
		 * webkit_context_menu_item_get_gaction() and connect to the #GSimpleAction::activate signal
		 * to be notified when the item is activated, but you can't prevent the associated
		 * action from being performed.
		 * @param action a #WebKitContextMenuAction stock action
		 * @returns the newly created #WebKitContextMenuItem object.
		 */
		public static new_from_stock_action(action: ContextMenuAction): ContextMenuItem;
		/**
		 * Creates a new #WebKitContextMenuItem for the given stock action using the given #label.
		 * Stock actions have a predefined label, this method can be used to create a
		 * #WebKitContextMenuItem for a #WebKitContextMenuAction but using a custom label.
		 * @param action a #WebKitContextMenuAction stock action
		 * @param label a custom label text to use instead of the predefined one
		 * @returns the newly created #WebKitContextMenuItem object.
		 */
		public static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem;
		/**
		 * Creates a new #WebKitContextMenuItem representing a separator.
		 * @returns the newly created #WebKitContextMenuItem object.
		 */
		public static new_separator(): ContextMenuItem;
		/**
		 * Creates a new #WebKitContextMenuItem using the given #label with a submenu.
		 * @param label the menu item label text
		 * @param submenu a #WebKitContextMenu to set
		 * @returns the newly created #WebKitContextMenuItem object.
		 */
		public static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CookieManager} instead.
	 */
	interface ICookieManager {
		/**
		 * Asynchronously add a #SoupCookie to the underlying storage.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_cookie_manager_add_cookie_finish() to get the result of the operation.
		 * @param cookie the #SoupCookie to be added
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		add_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_cookie_manager_add_cookie().
		 * @param result a #GAsyncResult
		 * @returns %TRUE if the cookie was added or %FALSE in case of error.
		 */
		add_cookie_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Delete all cookies of #cookie_manager
		 */
		delete_all_cookies(): void;
		/**
		 * Asynchronously delete a #SoupCookie from the current session.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_cookie_manager_delete_cookie_finish() to get the result of the operation.
		 * @param cookie the #SoupCookie to be deleted
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		delete_cookie(cookie: Soup.Cookie, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_cookie_manager_delete_cookie().
		 * @param result a #GAsyncResult
		 * @returns %TRUE if the cookie was deleted or %FALSE in case of error.
		 */
		delete_cookie_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Remove all cookies of #cookie_manager for the given #domain.
		 * @param domain a domain name
		 */
		delete_cookies_for_domain(domain: string): void;
		/**
		 * Asynchronously get the cookie acceptance policy of #cookie_manager.
		 * Note that when policy was set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY and
		 * ITP is enabled, this will return %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS.
		 * See also webkit_website_data_manager_set_itp_enabled().
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_cookie_manager_get_accept_policy_finish() to get the result of the operation.
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		get_accept_policy(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_cookie_manager_get_accept_policy().
		 * @param result a #GAsyncResult
		 * @returns the cookie acceptance policy of #cookie_manager as a #WebKitCookieAcceptPolicy.
		 */
		get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy;
		/**
		 * Asynchronously get a list of #SoupCookie from #cookie_manager associated with #uri, which
		 * must be either an HTTP or an HTTPS URL.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_cookie_manager_get_cookies_finish() to get the result of the operation.
		 * @param uri the URI associated to the cookies to be retrieved
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		get_cookies(uri: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_cookie_manager_get_cookies().
		 * The return value is a #GSList of #SoupCookie instances which should be released
		 * with g_list_free_full() and soup_cookie_free().
		 * @param result a #GAsyncResult
		 * @returns A #GList of #SoupCookie instances.
		 */
		get_cookies_finish(result: Gio.AsyncResult): GLib.List;
		/**
		 * Asynchronously get the list of domains for which #cookie_manager contains cookies.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_cookie_manager_get_domains_with_cookies_finish() to get the result of the operation.
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		get_domains_with_cookies(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_cookie_manager_get_domains_with_cookies().
		 * The return value is a %NULL terminated list of strings which should
		 * be released with g_strfreev().
		 * @param result a #GAsyncResult
		 * @returns A %NULL terminated array of domain names
		 *    or %NULL in case of error.
		 */
		get_domains_with_cookies_finish(result: Gio.AsyncResult): string[];
		/**
		 * Set the cookie acceptance policy of #cookie_manager as #policy.
		 * Note that ITP has its own way to handle third-party cookies, so when it's enabled,
		 * and #policy is set to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY, %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS
		 * will be used instead. Once disabled, the policy will be set back to %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY.
		 * See also webkit_website_data_manager_set_itp_enabled().
		 * @param policy a #WebKitCookieAcceptPolicy
		 */
		set_accept_policy(policy: CookieAcceptPolicy): void;
		/**
		 * Set the #filename where non-session cookies are stored persistently using
		 * #storage as the format to read/write the cookies.
		 * Cookies are initially read from #filename to create an initial set of cookies.
		 * Then, non-session cookies will be written to #filename when the WebKitCookieManager::changed
		 * signal is emitted.
		 * By default, #cookie_manager doesn't store the cookies persistently, so you need to call this
		 * method to keep cookies saved across sessions.
		 * 
		 * This method should never be called on a #WebKitCookieManager associated to an ephemeral #WebKitWebsiteDataManager.
		 * @param filename the filename to read to/write from
		 * @param storage a #WebKitCookiePersistentStorage
		 */
		set_persistent_storage(filename: string, storage: CookiePersistentStorage): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link CookieManager} instead.
	 */
	type CookieManagerMixin = ICookieManager & GObject.IObject;

	interface CookieManager extends CookieManagerMixin {}

	class CookieManager {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeviceInfoPermissionRequest} instead.
	 */
	interface IDeviceInfoPermissionRequest {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link DeviceInfoPermissionRequest} instead.
	 */
	type DeviceInfoPermissionRequestMixin = IDeviceInfoPermissionRequest & GObject.IObject & IPermissionRequest;

	interface DeviceInfoPermissionRequest extends DeviceInfoPermissionRequestMixin {}

	class DeviceInfoPermissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Download} instead.
	 */
	interface IDownload {
		/**
		 * Cancels the download. When the ongoing download
		 * operation is effectively cancelled the signal
		 * #WebKitDownload::failed is emitted with
		 * %WEBKIT_DOWNLOAD_ERROR_CANCELLED_BY_USER error.
		 */
		cancel(): void;
		/**
		 * Returns the current value of the #WebKitDownload:allow-overwrite property,
		 * which determines whether the download will overwrite an existing file on
		 * disk, or if it will fail if the destination already exists.
		 * @returns the current value of the #WebKitDownload:allow-overwrite property
		 */
		get_allow_overwrite(): boolean;
		/**
		 * Obtains the URI to which the downloaded file will be written. You
		 * can connect to #WebKitDownload::created-destination to make
		 * sure this method returns a valid destination.
		 * @returns the destination URI or %NULL
		 */
		get_destination(): string;
		/**
		 * Gets the elapsed time in seconds, including any fractional part.
		 * If the download finished, had an error or was cancelled this is
		 * the time between its start and the event.
		 * @returns seconds since the download was started
		 */
		get_elapsed_time(): number;
		/**
		 * Gets the value of the #WebKitDownload:estimated-progress property.
		 * You can monitor the estimated progress of the download operation by
		 * connecting to the notify::estimated-progress signal of #download.
		 * @returns an estimate of the of the percent complete for a download
		 *     as a range from 0.0 to 1.0.
		 */
		get_estimated_progress(): number;
		/**
		 * Gets the length of the data already downloaded for #download
		 * in bytes.
		 * @returns the amount of bytes already downloaded.
		 */
		get_received_data_length(): number;
		/**
		 * Retrieves the #WebKitURIRequest object that backs the download
		 * process.
		 * @returns the #WebKitURIRequest of #download
		 */
		get_request(): URIRequest;
		/**
		 * Retrieves the #WebKitURIResponse object that backs the download
		 * process. This method returns %NULL if called before the response
		 * is received from the server. You can connect to notify::response
		 * signal to be notified when the response is received.
		 * @returns the #WebKitURIResponse, or %NULL if
		 *     the response hasn't been received yet.
		 */
		get_response(): URIResponse;
		/**
		 * Get the #WebKitWebView that initiated the download.
		 * @returns the #WebKitWebView that initiated #download,
		 *    or %NULL if #download was not initiated by a #WebKitWebView.
		 */
		get_web_view(): WebView;
		/**
		 * Sets the #WebKitDownload:allow-overwrite property, which determines whether
		 * the download may overwrite an existing file on disk, or if it will fail if
		 * the destination already exists.
		 * @param allowed the new value for the #WebKitDownload:allow-overwrite property
		 */
		set_allow_overwrite(allowed: boolean): void;
		/**
		 * Sets the URI to which the downloaded file will be written.
		 * This method should be called before the download transfer
		 * starts or it will not have any effect on the ongoing download
		 * operation. To set the destination using the filename suggested
		 * by the server connect to #WebKitDownload::decide-destination
		 * signal and call webkit_download_set_destination(). If you want to
		 * set a fixed destination URI that doesn't depend on the suggested
		 * filename you can connect to notify::response signal and call
		 * webkit_download_set_destination().
		 * If #WebKitDownload::decide-destination signal is not handled
		 * and destination URI is not set when the download transfer starts,
		 * the file will be saved with the filename suggested by the server in
		 * %G_USER_DIRECTORY_DOWNLOAD directory.
		 * @param uri the destination URI
		 */
		set_destination(uri: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Download} instead.
	 */
	type DownloadMixin = IDownload & GObject.IObject;

	interface Download extends DownloadMixin {}

	class Download {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link EditorState} instead.
	 */
	interface IEditorState {
		/**
		 * Gets the typing attributes at the current cursor position.
		 * If there is a selection, this returns the typing attributes
		 * of the selected text. Note that in case of a selection,
		 * typing attributes are considered active only when they are
		 * present throughout the selection.
		 * @returns a bitmask of #WebKitEditorTypingAttributes flags
		 */
		get_typing_attributes(): number;
		/**
		 * Gets whether a copy command can be issued.
		 * @returns %TRUE if copy is currently available
		 */
		is_copy_available(): boolean;
		/**
		 * Gets whether a cut command can be issued.
		 * @returns %TRUE if cut is currently available
		 */
		is_cut_available(): boolean;
		/**
		 * Gets whether a paste command can be issued.
		 * @returns %TRUE if paste is currently available
		 */
		is_paste_available(): boolean;
		/**
		 * Gets whether a redo command can be issued.
		 * @returns %TRUE if redo is currently available
		 */
		is_redo_available(): boolean;
		/**
		 * Gets whether an undo command can be issued.
		 * @returns %TRUE if undo is currently available
		 */
		is_undo_available(): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link EditorState} instead.
	 */
	type EditorStateMixin = IEditorState & GObject.IObject;

	interface EditorState extends EditorStateMixin {}

	class EditorState {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FaviconDatabase} instead.
	 */
	interface IFaviconDatabase {
		/**
		 * Clears all icons from the database.
		 */
		clear(): void;
		/**
		 * Asynchronously obtains a #cairo_surface_t of the favicon for the
		 * given page URI. It returns the cached icon if it's in the database
		 * asynchronously waiting for the icon to be read from the database.
		 * 
		 * This is an asynchronous method. When the operation is finished, callback will
		 * be invoked. You can then call webkit_favicon_database_get_favicon_finish()
		 * to get the result of the operation.
		 * 
		 * You must call webkit_web_context_set_favicon_database_directory() for
		 * the #WebKitWebContext associated with this #WebKitFaviconDatabase
		 * before attempting to use this function; otherwise,
		 * webkit_favicon_database_get_favicon_finish() will return
		 * %WEBKIT_FAVICON_DATABASE_ERROR_NOT_INITIALIZED.
		 * @param page_uri URI of the page for which we want to retrieve the favicon
		 * @param cancellable A #GCancellable or %NULL.
		 * @param callback A #GAsyncReadyCallback to call when the request is
		 *            satisfied or %NULL if you don't care about the result.
		 */
		get_favicon(page_uri: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finishes an operation started with webkit_favicon_database_get_favicon().
		 * @param result A #GAsyncResult obtained from the #GAsyncReadyCallback passed to webkit_favicon_database_get_favicon()
		 * @returns a new reference to a #cairo_surface_t, or
		 * %NULL in case of error.
		 */
		get_favicon_finish(result: Gio.AsyncResult): cairo.Surface;
		/**
		 * Obtains the URI of the favicon for the given #page_uri.
		 * @param page_uri URI of the page containing the icon
		 * @returns a newly allocated URI for the favicon, or %NULL if the
		 * database doesn't have a favicon for #page_uri.
		 */
		get_favicon_uri(page_uri: string): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FaviconDatabase} instead.
	 */
	type FaviconDatabaseMixin = IFaviconDatabase & GObject.IObject;

	interface FaviconDatabase extends FaviconDatabaseMixin {}

	class FaviconDatabase {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FileChooserRequest} instead.
	 */
	interface IFileChooserRequest {
		/**
		 * Ask WebKit to cancel the request. It's important to do this in case
		 * no selection has been made in the client, otherwise the request
		 * won't be properly completed and the browser will keep the request
		 * pending forever, which might cause the browser to hang.
		 */
		cancel(): void;
		/**
		 * Get the list of MIME types the file chooser dialog should handle,
		 * in the format specified in RFC 2046 for "media types". Its contents
		 * depend on the value of the 'accept' attribute for HTML input
		 * elements. This function should normally be called before presenting
		 * the file chooser dialog to the user, to decide whether to allow the
		 * user to select multiple files at once or only one.
		 * @returns a
		 * %NULL-terminated array of strings if a list of accepted MIME types
		 * is defined or %NULL otherwise, meaning that any MIME type should be
		 * accepted. This array and its contents are owned by WebKit and
		 * should not be modified or freed.
		 */
		get_mime_types(): string[];
		/**
		 * Get the filter currently associated with the request, ready to be
		 * used by #GtkFileChooser. This function should normally be called
		 * before presenting the file chooser dialog to the user, to decide
		 * whether to apply a filter so the user would not be allowed to
		 * select files with other MIME types.
		 * 
		 * See webkit_file_chooser_request_get_mime_types() if you are
		 * interested in getting the list of accepted MIME types.
		 * @returns a #GtkFileFilter if a list of accepted
		 * MIME types is defined or %NULL otherwise. The returned object is
		 * owned by WebKit should not be modified or freed.
		 */
		get_mime_types_filter(): Gtk.FileFilter;
		/**
		 * Determine whether the file chooser associated to this
		 * #WebKitFileChooserRequest should allow selecting multiple files,
		 * which depends on the HTML input element having a 'multiple'
		 * attribute defined.
		 * @returns %TRUE if the file chooser should allow selecting multiple files or %FALSE otherwise.
		 */
		get_select_multiple(): boolean;
		/**
		 * Get the list of selected files currently associated to the
		 * request. Initially, the return value of this method contains any
		 * files selected in previous file chooser requests for this HTML
		 * input element. Once webkit_file_chooser_request_select_files, the
		 * value will reflect whatever files are given.
		 * 
		 * This function should normally be called only before presenting the
		 * file chooser dialog to the user, to decide whether to perform some
		 * extra action, like pre-selecting the files from a previous request.
		 * @returns a
		 * %NULL-terminated array of strings if there are selected files
		 * associated with the request or %NULL otherwise. This array and its
		 * contents are owned by WebKit and should not be modified or
		 * freed.
		 */
		get_selected_files(): string[];
		/**
		 * Ask WebKit to select local files for upload and complete the
		 * request.
		 * @param files a
		 * %NULL-terminated array of strings, containing paths to local files.
		 */
		select_files(files: string[]): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FileChooserRequest} instead.
	 */
	type FileChooserRequestMixin = IFileChooserRequest & GObject.IObject;

	interface FileChooserRequest extends FileChooserRequestMixin {}

	class FileChooserRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FindController} instead.
	 */
	interface IFindController {
		/**
		 * Counts the number of matches for #search_text found in the
		 * #WebKitWebView with the provided #find_options. The number of
		 * matches will be provided by the
		 * #WebKitFindController::counted-matches signal.
		 * @param search_text the text to look for
		 * @param find_options a bitmask with the #WebKitFindOptions used in the search
		 * @param max_match_count the maximum number of matches allowed in the search
		 */
		count_matches(search_text: string, find_options: number, max_match_count: number): void;
		/**
		 * Gets the maximum number of matches to report during a text
		 * lookup. This number is passed as the last argument of
		 * webkit_find_controller_search() or
		 * webkit_find_controller_count_matches().
		 * @returns the maximum number of matches to report.
		 */
		get_max_match_count(): number;
		/**
		 * Gets a bitmask containing the #WebKitFindOptions associated with
		 * the current search.
		 * @returns a bitmask containing the #WebKitFindOptions associated
		 * with the current search.
		 */
		get_options(): number;
		/**
		 * Gets the text that #find_controller is currently searching
		 * for. This text is passed to either
		 * webkit_find_controller_search() or
		 * webkit_find_controller_count_matches().
		 * @returns the text to look for in the #WebKitWebView.
		 */
		get_search_text(): string;
		/**
		 * Gets the #WebKitWebView this find controller is associated to. Do
		 * not dereference the returned instance as it belongs to the
		 * #WebKitFindController.
		 * @returns the #WebKitWebView.
		 */
		get_web_view(): WebView;
		/**
		 * Looks for #search_text in the #WebKitWebView associated with
		 * #find_controller since the beginning of the document highlighting
		 * up to #max_match_count matches. The outcome of the search will be
		 * asynchronously provided by the #WebKitFindController::found-text
		 * and #WebKitFindController::failed-to-find-text signals.
		 * 
		 * To look for the next or previous occurrences of the same text
		 * with the same find options use webkit_find_controller_search_next()
		 * and/or webkit_find_controller_search_previous(). The
		 * #WebKitFindController will use the same text and options for the
		 * following searches unless they are modified by another call to this
		 * method.
		 * 
		 * Note that if the number of matches is higher than #max_match_count
		 * then #WebKitFindController::found-text will report %G_MAXUINT matches
		 * instead of the actual number.
		 * 
		 * Callers should call webkit_find_controller_search_finish() to
		 * finish the current search operation.
		 * @param search_text the text to look for
		 * @param find_options a bitmask with the #WebKitFindOptions used in the search
		 * @param max_match_count the maximum number of matches allowed in the search
		 */
		search(search_text: string, find_options: number, max_match_count: number): void;
		/**
		 * Finishes a find operation started by
		 * webkit_find_controller_search(). It will basically unhighlight
		 * every text match found.
		 * 
		 * This method will be typically called when the search UI is
		 * closed/hidden by the client application.
		 */
		search_finish(): void;
		/**
		 * Looks for the next occurrence of the search text.
		 * 
		 * Calling this method before webkit_find_controller_search() or
		 * webkit_find_controller_count_matches() is a programming error.
		 */
		search_next(): void;
		/**
		 * Looks for the previous occurrence of the search text.
		 * 
		 * Calling this method before webkit_find_controller_search() or
		 * webkit_find_controller_count_matches() is a programming error.
		 */
		search_previous(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FindController} instead.
	 */
	type FindControllerMixin = IFindController & GObject.IObject;

	interface FindController extends FindControllerMixin {}

	class FindController {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FormSubmissionRequest} instead.
	 */
	interface IFormSubmissionRequest {
		/**
		 * Get a #GHashTable with the values of the text fields contained in the form
		 * associated to #request. Note that fields will be missing if the form
		 * contains multiple text input elements with the same name, so this
		 * function does not reliably return all text fields.
		 * @returns a #GHashTable with the form
		 *    text fields, or %NULL if the form doesn't contain text fields.
		 */
		get_text_fields(): GLib.HashTable;
		/**
		 * Get lists with the names and values of the text fields contained in
		 * the form associated to #request. Note that names and values may be
		 * %NULL.
		 * 
		 * If this function returns %FALSE, then both #field_names and
		 * #field_values will be empty.
		 * @param field_names 
		 *    names of the text fields in the form
		 * @param field_values 
		 *    values of the text fields in the form
		 * @returns %TRUE if the form contains text fields, or %FALSE otherwise
		 */
		list_text_fields(field_names: string[], field_values: string[]): boolean;
		/**
		 * Continue the form submission.
		 */
		submit(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link FormSubmissionRequest} instead.
	 */
	type FormSubmissionRequestMixin = IFormSubmissionRequest & GObject.IObject;

	interface FormSubmissionRequest extends FormSubmissionRequestMixin {}

	class FormSubmissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GeolocationManager} instead.
	 */
	interface IGeolocationManager {
		/**
		 * Notify #manager that determining the position failed.
		 * @param error_message the error message
		 */
		failed(error_message: string): void;
		/**
		 * Get whether high accuracy is enabled.
		 * @returns 
		 */
		get_enable_high_accuracy(): boolean;
		/**
		 * Notify #manager that position has been updated to #position.
		 * @param position a #WebKitGeolocationPosition
		 */
		update_position(position: GeolocationPosition): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GeolocationManager} instead.
	 */
	type GeolocationManagerMixin = IGeolocationManager & GObject.IObject;

	interface GeolocationManager extends GeolocationManagerMixin {}

	class GeolocationManager {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GeolocationPermissionRequest} instead.
	 */
	interface IGeolocationPermissionRequest {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link GeolocationPermissionRequest} instead.
	 */
	type GeolocationPermissionRequestMixin = IGeolocationPermissionRequest & GObject.IObject & IPermissionRequest;

	interface GeolocationPermissionRequest extends GeolocationPermissionRequestMixin {}

	class GeolocationPermissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link HitTestResult} instead.
	 */
	interface IHitTestResult {
		/**
		 * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE flag is present in
		 * #WebKitHitTestResult:context.
		 * @returns %TRUE if there's an editable element at the coordinates of the #hit_test_result,
		 *    or %FALSE otherwise
		 */
		context_is_editable(): boolean;
		/**
		 * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE flag is present in
		 * #WebKitHitTestResult:context.
		 * @returns %TRUE if there's an image element in the coordinates of the Hit Test,
		 *    or %FALSE otherwise
		 */
		context_is_image(): boolean;
		/**
		 * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK flag is present in
		 * #WebKitHitTestResult:context.
		 * @returns %TRUE if there's a link element in the coordinates of the Hit Test,
		 *    or %FALSE otherwise
		 */
		context_is_link(): boolean;
		/**
		 * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA flag is present in
		 * #WebKitHitTestResult:context.
		 * @returns %TRUE if there's a media element in the coordinates of the Hit Test,
		 *    or %FALSE otherwise
		 */
		context_is_media(): boolean;
		/**
		 * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR flag is present in
		 * #WebKitHitTestResult:context.
		 * @returns %TRUE if there's a scrollbar element at the coordinates of the #hit_test_result,
		 *    or %FALSE otherwise
		 */
		context_is_scrollbar(): boolean;
		/**
		 * Gets whether %WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION flag is present in
		 * #WebKitHitTestResult:context.
		 * @returns %TRUE if there's a selected element at the coordinates of the #hit_test_result,
		 *    or %FALSE otherwise
		 */
		context_is_selection(): boolean;
		/**
		 * Gets the value of the #WebKitHitTestResult:context property.
		 * @returns a bitmask of #WebKitHitTestResultContext flags
		 */
		get_context(): number;
		/**
		 * Gets the value of the #WebKitHitTestResult:image-uri property.
		 * @returns the URI of the image element in the coordinates of the Hit Test,
		 *    or %NULL if there isn't an image element in #hit_test_result context
		 */
		get_image_uri(): string;
		/**
		 * Gets the value of the #WebKitHitTestResult:link-label property.
		 * @returns the label of the link element in the coordinates of the Hit Test,
		 *    or %NULL if there isn't a link element in #hit_test_result context or the
		 *    link element doesn't have a label
		 */
		get_link_label(): string;
		/**
		 * Gets the value of the #WebKitHitTestResult:link-title property.
		 * @returns the title of the link element in the coordinates of the Hit Test,
		 *    or %NULL if there isn't a link element in #hit_test_result context or the
		 *    link element doesn't have a title
		 */
		get_link_title(): string;
		/**
		 * Gets the value of the #WebKitHitTestResult:link-uri property.
		 * @returns the URI of the link element in the coordinates of the Hit Test,
		 *    or %NULL if there isn't a link element in #hit_test_result context
		 */
		get_link_uri(): string;
		/**
		 * Gets the value of the #WebKitHitTestResult:media-uri property.
		 * @returns the URI of the media element in the coordinates of the Hit Test,
		 *    or %NULL if there isn't a media element in #hit_test_result context
		 */
		get_media_uri(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link HitTestResult} instead.
	 */
	type HitTestResultMixin = IHitTestResult & GObject.IObject;

	interface HitTestResult extends HitTestResultMixin {}

	class HitTestResult {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputMethodContext} instead.
	 */
	interface IInputMethodContext {
		/**
		 * Allow #key_event to be handled by the input method. If %TRUE is returned, then no further processing should be
		 * done for the key event.
		 * @param key_event the key event to filter
		 * @returns %TRUE if the key event was handled, or %FALSE otherwise
		 */
		filter_key_event(key_event: Gdk.EventKey): boolean;
		/**
		 * Get the value of the #WebKitInputMethodContext:input-hints property.
		 * @returns the #WebKitInputHints of the input associated with #context
		 */
		get_input_hints(): InputHints;
		/**
		 * Get the value of the #WebKitInputMethodContext:input-purpose property.
		 * @returns the #WebKitInputPurpose of the input associated with #context
		 */
		get_input_purpose(): InputPurpose;
		/**
		 * Get the current preedit string for the #context, and a list of WebKitInputMethodUnderline to apply to the string.
		 * The string will be displayed inserted at #cursor_offset.
		 * @param text location to store the preedit string
		 * @param underlines location to store the underlines as a #GList of #WebKitInputMethodUnderline
		 * @param cursor_offset location to store the position of cursor in preedit string
		 */
		get_preedit(text: string, underlines: GLib.List, cursor_offset: number): void;
		/**
		 * Notify #context that cursor area changed in input associated.
		 * @param _x the x coordinate of cursor location
		 * @param _y the y coordinate of cursor location
		 * @param width the width of cursor area
		 * @param height the height of cursor area
		 */
		notify_cursor_area(_x: number, _y: number, width: number, height: number): void;
		/**
		 * Notify #context that input associated has gained focus.
		 */
		notify_focus_in(): void;
		/**
		 * Notify #context that input associated has lost focus.
		 */
		notify_focus_out(): void;
		/**
		 * Notify #context that the context surrounding the cursor has changed.
		 * If there's no selection #selection_index is the same as #cursor_index.
		 * @param text text surrounding the insertion point
		 * @param length the length of #text, or -1 if #text is nul-terminated
		 * @param cursor_index the byte index of the insertion cursor within #text.
		 * @param selection_index the byte index of the selection cursor within #text.
		 */
		notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void;
		/**
		 * Reset the #context. This will typically cause the input to clear the preedit state.
		 */
		reset(): void;
		/**
		 * Set whether #context should enable preedit to display feedback.
		 * @param enabled whether to enable preedit
		 */
		set_enable_preedit(enabled: boolean): void;
		set_input_hints(hints: InputHints): void;
		/**
		 * Set the value of the #WebKitInputMethodContext:input-purpose property.
		 * @param purpose a #WebKitInputPurpose
		 */
		set_input_purpose(purpose: InputPurpose): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InputMethodContext} instead.
	 */
	type InputMethodContextMixin = IInputMethodContext & GObject.IObject;

	interface InputMethodContext extends InputMethodContextMixin {}

	class InputMethodContext {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InstallMissingMediaPluginsPermissionRequest} instead.
	 */
	interface IInstallMissingMediaPluginsPermissionRequest {
		/**
		 * Gets the description about the missing plugins provided by the media backend when a media couldn't be played.
		 * @returns a string with the description provided by the media backend.
		 */
		get_description(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link InstallMissingMediaPluginsPermissionRequest} instead.
	 */
	type InstallMissingMediaPluginsPermissionRequestMixin = IInstallMissingMediaPluginsPermissionRequest & GObject.IObject & IPermissionRequest;

	interface InstallMissingMediaPluginsPermissionRequest extends InstallMissingMediaPluginsPermissionRequestMixin {}

	class InstallMissingMediaPluginsPermissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MediaKeySystemPermissionRequest} instead.
	 */
	interface IMediaKeySystemPermissionRequest {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link MediaKeySystemPermissionRequest} instead.
	 */
	type MediaKeySystemPermissionRequestMixin = IMediaKeySystemPermissionRequest & GObject.IObject & IPermissionRequest;

	interface MediaKeySystemPermissionRequest extends MediaKeySystemPermissionRequestMixin {}

	class MediaKeySystemPermissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link NavigationPolicyDecision} instead.
	 */
	interface INavigationPolicyDecision {
		/**
		 * Gets the value of the #WebKitNavigationPolicyDecision:frame-name property.
		 * @returns The name of the new frame this navigation action targets or %NULL
		 */
		get_frame_name(): string;
		/**
		 * Gets the value of the #WebKitNavigationPolicyDecision:modifiers property.
		 * @returns The modifiers active if this decision was triggered by a mouse event
		 */
		get_modifiers(): number;
		/**
		 * Gets the value of the #WebKitNavigationPolicyDecision:mouse-button property.
		 * @returns The mouse button used if this decision was triggered by a mouse event or 0 otherwise
		 */
		get_mouse_button(): number;
		/**
		 * Gets the value of the #WebKitNavigationPolicyDecision:navigation-action property.
		 * @returns The #WebKitNavigationAction triggering this policy decision.
		 */
		get_navigation_action(): NavigationAction;
		/**
		 * Gets the value of the #WebKitNavigationPolicyDecision:navigation-type property.
		 * @returns The type of navigation triggering this policy decision.
		 */
		get_navigation_type(): NavigationType;
		/**
		 * Gets the value of the #WebKitNavigationPolicyDecision:request property.
		 * @returns The URI request that is associated with this navigation
		 */
		get_request(): URIRequest;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link NavigationPolicyDecision} instead.
	 */
	type NavigationPolicyDecisionMixin = INavigationPolicyDecision & IPolicyDecision;

	interface NavigationPolicyDecision extends NavigationPolicyDecisionMixin {}

	class NavigationPolicyDecision {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Notification} instead.
	 */
	interface INotification {
		/**
		 * Tells WebKit the notification has been clicked. This will emit the
		 * #WebKitNotification::clicked signal.
		 */
		clicked(): void;
		/**
		 * Closes the notification.
		 */
		close(): void;
		/**
		 * Obtains the body for the notification.
		 * @returns the body for the notification
		 */
		get_body(): string;
		/**
		 * Obtains the unique id for the notification.
		 * @returns the unique id for the notification
		 */
		get_id(): number;
		/**
		 * Obtains the tag identifier for the notification.
		 * @returns the tag for the notification
		 */
		get_tag(): string;
		/**
		 * Obtains the title for the notification.
		 * @returns the title for the notification
		 */
		get_title(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Notification} instead.
	 */
	type NotificationMixin = INotification & GObject.IObject;

	interface Notification extends NotificationMixin {}

	class Notification {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link NotificationPermissionRequest} instead.
	 */
	interface INotificationPermissionRequest {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link NotificationPermissionRequest} instead.
	 */
	type NotificationPermissionRequestMixin = INotificationPermissionRequest & GObject.IObject & IPermissionRequest;

	interface NotificationPermissionRequest extends NotificationPermissionRequestMixin {}

	class NotificationPermissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link OptionMenu} instead.
	 */
	interface IOptionMenu {
		/**
		 * Activates the #WebKitOptionMenuItem at #index in #menu. Activating an item changes the value
		 * of the element making the item the active one. You are expected to close the menu with
		 * webkit_option_menu_close() after activating an item, calling this function again will have no
		 * effect.
		 * @param index the index of the item
		 */
		activate_item(index: number): void;
		/**
		 * Request to close a #WebKitOptionMenu. This emits WebKitOptionMenu::close signal.
		 * This function should always be called to notify WebKit that the associated
		 * menu has been closed. If the menu is closed and neither webkit_option_menu_select_item()
		 * nor webkit_option_menu_activate_item() have been called, the element value remains
		 * unchanged.
		 */
		close(): void;
		/**
		 * Returns the #WebKitOptionMenuItem at #index in #menu.
		 * @param index the index of the item
		 * @returns a #WebKitOptionMenuItem of #menu.
		 */
		get_item(index: number): OptionMenuItem;
		/**
		 * Gets the length of the #menu.
		 * @returns the number of #WebKitOptionMenuItem<!-- -->s in #menu
		 */
		get_n_items(): number;
		/**
		 * Selects the #WebKitOptionMenuItem at #index in #menu. Selecting an item changes the
		 * text shown by the combo button, but it doesn't change the value of the element. You need to
		 * explicitly activate the item with webkit_option_menu_select_item() or close the menu with
		 * webkit_option_menu_close() in which case the currently selected item will be activated.
		 * @param index the index of the item
		 */
		select_item(index: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link OptionMenu} instead.
	 */
	type OptionMenuMixin = IOptionMenu & GObject.IObject;

	interface OptionMenu extends OptionMenuMixin {}

	class OptionMenu {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Plugin} instead.
	 */
	interface IPlugin {
		get_description(): string;
		/**
		 * Get information about MIME types handled by the plugin,
		 * as a list of #WebKitMimeInfo.
		 * @returns a #GList of #WebKitMimeInfo.
		 */
		get_mime_info_list(): GLib.List;
		get_name(): string;
		get_path(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Plugin} instead.
	 */
	type PluginMixin = IPlugin & GObject.IObject;

	interface Plugin extends PluginMixin {}

	class Plugin {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PointerLockPermissionRequest} instead.
	 */
	interface IPointerLockPermissionRequest {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PointerLockPermissionRequest} instead.
	 */
	type PointerLockPermissionRequestMixin = IPointerLockPermissionRequest & GObject.IObject & IPermissionRequest;

	interface PointerLockPermissionRequest extends PointerLockPermissionRequestMixin {}

	class PointerLockPermissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PolicyDecision} instead.
	 */
	interface IPolicyDecision {
		/**
		 * Spawn a download from this decision.
		 */
		download(): void;
		/**
		 * Ignore the action which triggered this decision. For instance, for a
		 * #WebKitResponsePolicyDecision, this would cancel the request.
		 */
		ignore(): void;
		/**
		 * Accept the action which triggered this decision.
		 */
		use(): void;
		/**
		 * Accept the navigation action which triggered this decision, and
		 * continue with #policies affecting all subsequent loads of resources
		 * in the origin associated with the accepted navigation action.
		 * 
		 * For example, a navigation decision to a video sharing website may
		 * be accepted under the priviso no movies are allowed to autoplay. The
		 * autoplay policy in this case would be set in the #policies.
		 * @param policies a #WebKitWebsitePolicies
		 */
		use_with_policies(policies: WebsitePolicies): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PolicyDecision} instead.
	 */
	type PolicyDecisionMixin = IPolicyDecision & GObject.IObject;

	interface PolicyDecision extends PolicyDecisionMixin {}

	class PolicyDecision {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PrintCustomWidget} instead.
	 */
	interface IPrintCustomWidget {
		/**
		 * Return the value of #WebKitPrintCustomWidget:title property for the given
		 * #print_custom_widget object.
		 * @returns Title of the #print_custom_widget.
		 */
		get_title(): string;
		/**
		 * Return the value of #WebKitPrintCustomWidget:widget property for the given
		 * #print_custom_widget object. The returned value will always be valid if called
		 * from #WebKitPrintCustomWidget::apply or #WebKitPrintCustomWidget::update
		 * callbacks, but it will be %NULL if called after the
		 * #WebKitPrintCustomWidget::apply signal is emitted.
		 * @returns a #GtkWidget.
		 */
		get_widget(): Gtk.Widget;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PrintCustomWidget} instead.
	 */
	type PrintCustomWidgetMixin = IPrintCustomWidget & GObject.IObject;

	interface PrintCustomWidget extends PrintCustomWidgetMixin {}

	class PrintCustomWidget {
		public constructor();
		/**
		 * Create a new #WebKitPrintCustomWidget with given #widget and #title. The #widget
		 * ownership is taken and it is destroyed together with the dialog even if this
		 * object could still be alive at that point. You typically want to pass a container
		 * widget with multiple widgets in it.
		 * @param widget a #GtkWidget
		 * @param title a #widget's title
		 * @returns a new #WebKitPrintOperation.
		 */
		public static new(widget: Gtk.Widget, title: string): PrintCustomWidget;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PrintOperation} instead.
	 */
	interface IPrintOperation {
		/**
		 * Return the current page setup of #print_operation. It returns %NULL until
		 * either webkit_print_operation_set_page_setup() or webkit_print_operation_run_dialog()
		 * have been called.
		 * @returns the current #GtkPageSetup of #print_operation.
		 */
		get_page_setup(): Gtk.PageSetup;
		/**
		 * Return the current print settings of #print_operation. It returns %NULL until
		 * either webkit_print_operation_set_print_settings() or webkit_print_operation_run_dialog()
		 * have been called.
		 * @returns the current #GtkPrintSettings of #print_operation.
		 */
		get_print_settings(): Gtk.PrintSettings;
		/**
		 * Start a print operation using current print settings and page setup
		 * without showing the print dialog. If either print settings or page setup
		 * are not set with webkit_print_operation_set_print_settings() and
		 * webkit_print_operation_set_page_setup(), the default options will be used
		 * and the print job will be sent to the default printer.
		 * The #WebKitPrintOperation::finished signal is emitted when the printing
		 * operation finishes. If an error occurs while printing the signal
		 * #WebKitPrintOperation::failed is emitted before #WebKitPrintOperation::finished.
		 */
		print(): void;
		/**
		 * Run the print dialog and start printing using the options selected by
		 * the user. This method returns when the print dialog is closed.
		 * If the print dialog is cancelled %WEBKIT_PRINT_OPERATION_RESPONSE_CANCEL
		 * is returned. If the user clicks on the print button, %WEBKIT_PRINT_OPERATION_RESPONSE_PRINT
		 * is returned and the print operation starts. In this case, the #WebKitPrintOperation::finished
		 * signal is emitted when the operation finishes. If an error occurs while printing, the signal
		 * #WebKitPrintOperation::failed is emitted before #WebKitPrintOperation::finished.
		 * If the print dialog is not cancelled current print settings and page setup of #print_operation
		 * are updated with options selected by the user when Print button is pressed in print dialog.
		 * You can get the updated print settings and page setup by calling
		 * webkit_print_operation_get_print_settings() and webkit_print_operation_get_page_setup()
		 * after this method.
		 * @param parent transient parent of the print dialog
		 * @returns the #WebKitPrintOperationResponse of the print dialog
		 */
		run_dialog(parent: Gtk.Window): PrintOperationResponse;
		/**
		 * Set the current page setup of #print_operation. Current page setup is used for the
		 * initial values of the print dialog when webkit_print_operation_run_dialog() is called.
		 * @param page_setup a #GtkPageSetup to set
		 */
		set_page_setup(page_setup: Gtk.PageSetup): void;
		/**
		 * Set the current print settings of #print_operation. Current print settings are used for
		 * the initial values of the print dialog when webkit_print_operation_run_dialog() is called.
		 * @param print_settings a #GtkPrintSettings to set
		 */
		set_print_settings(print_settings: Gtk.PrintSettings): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PrintOperation} instead.
	 */
	type PrintOperationMixin = IPrintOperation & GObject.IObject;

	interface PrintOperation extends PrintOperationMixin {}

	class PrintOperation {
		public constructor();
		/**
		 * Create a new #WebKitPrintOperation to print #web_view contents.
		 * @param web_view a #WebKitWebView
		 * @returns a new #WebKitPrintOperation.
		 */
		public static new(web_view: WebView): PrintOperation;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ResponsePolicyDecision} instead.
	 */
	interface IResponsePolicyDecision {
		/**
		 * Return the #WebKitURIRequest associated with the response decision.
		 * Modifications to the returned object are <emphasis>not</emphasis> taken
		 * into account when the request is sent over the network, and is intended
		 * only to aid in evaluating whether a response decision should be taken or
		 * not. To modify requests before they are sent over the network the
		 * #WebKitPage::send-request signal can be used instead.
		 * @returns The URI request that is associated with this policy decision.
		 */
		get_request(): URIRequest;
		/**
		 * Gets the value of the #WebKitResponsePolicyDecision:response property.
		 * @returns The URI response that is associated with this policy decision.
		 */
		get_response(): URIResponse;
		/**
		 * Gets whether the MIME type of the response can be displayed in the #WebKitWebView
		 * that triggered this policy decision request. See also webkit_web_view_can_show_mime_type().
		 * @returns %TRUE if the MIME type of the response is supported or %FALSE otherwise
		 */
		is_mime_type_supported(): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link ResponsePolicyDecision} instead.
	 */
	type ResponsePolicyDecisionMixin = IResponsePolicyDecision & IPolicyDecision;

	interface ResponsePolicyDecision extends ResponsePolicyDecisionMixin {}

	class ResponsePolicyDecision {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SecurityManager} instead.
	 */
	interface ISecurityManager {
		/**
		 * Register #scheme as a CORS (Cross-origin resource sharing) enabled scheme.
		 * This means that CORS requests are allowed. See W3C CORS specification
		 * http://www.w3.org/TR/cors/.
		 * @param scheme a URI scheme
		 */
		register_uri_scheme_as_cors_enabled(scheme: string): void;
		/**
		 * Register #scheme as a display isolated scheme. This means that pages cannot
		 * display these URIs unless they are from the same scheme.
		 * @param scheme a URI scheme
		 */
		register_uri_scheme_as_display_isolated(scheme: string): void;
		/**
		 * Register #scheme as an empty document scheme. This means that
		 * they are allowed to commit synchronously.
		 * @param scheme a URI scheme
		 */
		register_uri_scheme_as_empty_document(scheme: string): void;
		/**
		 * Register #scheme as a local scheme. This means that other non-local pages
		 * cannot link to or access URIs of this scheme.
		 * @param scheme a URI scheme
		 */
		register_uri_scheme_as_local(scheme: string): void;
		/**
		 * Register #scheme as a no-access scheme. This means that pages loaded
		 * with this URI scheme cannot access pages loaded with any other URI scheme.
		 * @param scheme a URI scheme
		 */
		register_uri_scheme_as_no_access(scheme: string): void;
		/**
		 * Register #scheme as a secure scheme. This means that mixed
		 * content warnings won't be generated for this scheme when
		 * included by an HTTPS page.
		 * @param scheme a URI scheme
		 */
		register_uri_scheme_as_secure(scheme: string): void;
		/**
		 * Whether #scheme is considered as a CORS enabled scheme.
		 * See also webkit_security_manager_register_uri_scheme_as_cors_enabled().
		 * @param scheme a URI scheme
		 * @returns %TRUE if #scheme is a CORS enabled scheme or %FALSE otherwise.
		 */
		uri_scheme_is_cors_enabled(scheme: string): boolean;
		/**
		 * Whether #scheme is considered as a display isolated scheme.
		 * See also webkit_security_manager_register_uri_scheme_as_display_isolated().
		 * @param scheme a URI scheme
		 * @returns %TRUE if #scheme is a display isolated scheme or %FALSE otherwise.
		 */
		uri_scheme_is_display_isolated(scheme: string): boolean;
		/**
		 * Whether #scheme is considered as an empty document scheme.
		 * See also webkit_security_manager_register_uri_scheme_as_empty_document().
		 * @param scheme a URI scheme
		 * @returns %TRUE if #scheme is an empty document scheme or %FALSE otherwise.
		 */
		uri_scheme_is_empty_document(scheme: string): boolean;
		/**
		 * Whether #scheme is considered as a local scheme.
		 * See also webkit_security_manager_register_uri_scheme_as_local().
		 * @param scheme a URI scheme
		 * @returns %TRUE if #scheme is a local scheme or %FALSE otherwise.
		 */
		uri_scheme_is_local(scheme: string): boolean;
		/**
		 * Whether #scheme is considered as a no-access scheme.
		 * See also webkit_security_manager_register_uri_scheme_as_no_access().
		 * @param scheme a URI scheme
		 * @returns %TRUE if #scheme is a no-access scheme or %FALSE otherwise.
		 */
		uri_scheme_is_no_access(scheme: string): boolean;
		/**
		 * Whether #scheme is considered as a secure scheme.
		 * See also webkit_security_manager_register_uri_scheme_as_secure().
		 * @param scheme a URI scheme
		 * @returns %TRUE if #scheme is a secure scheme or %FALSE otherwise.
		 */
		uri_scheme_is_secure(scheme: string): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link SecurityManager} instead.
	 */
	type SecurityManagerMixin = ISecurityManager & GObject.IObject;

	interface SecurityManager extends SecurityManagerMixin {}

	class SecurityManager {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Settings} instead.
	 */
	interface ISettings {
		/**
		 * Get the #WebKitSettings:allow-file-access-from-file-urls property.
		 * @returns %TRUE If file access from file URLs is allowed or %FALSE otherwise.
		 */
		get_allow_file_access_from_file_urls(): boolean;
		/**
		 * Get the #WebKitSettings:allow-modal-dialogs property.
		 * @returns %TRUE if it's allowed to create and run modal dialogs or %FALSE otherwise.
		 */
		get_allow_modal_dialogs(): boolean;
		/**
		 * Get the #WebKitSettings:allow-top-navigation-to-data-urls property.
		 * @returns %TRUE If navigation to data URLs from the top frame is allowed or %FALSE\
		 * otherwise.
		 */
		get_allow_top_navigation_to_data_urls(): boolean;
		/**
		 * Get the #WebKitSettings:allow-universal-access-from-file-urls property.
		 * @returns %TRUE If universal access from file URLs is allowed or %FALSE otherwise.
		 */
		get_allow_universal_access_from_file_urls(): boolean;
		/**
		 * Get the #WebKitSettings:auto-load-images property.
		 * @returns %TRUE If auto loading of images is enabled or %FALSE otherwise.
		 */
		get_auto_load_images(): boolean;
		/**
		 * Gets the #WebKitSettings:cursive-font-family property.
		 * @returns The default font family used to display content marked with cursive font.
		 */
		get_cursive_font_family(): string;
		/**
		 * Gets the #WebKitSettings:default-charset property.
		 * @returns Default charset.
		 */
		get_default_charset(): string;
		get_default_font_family(): string;
		/**
		 * Gets the #WebKitSettings:default-font-size property.
		 * @returns The default font size, in pixels.
		 */
		get_default_font_size(): number;
		/**
		 * Gets the #WebKitSettings:default-monospace-font-size property.
		 * @returns Default monospace font size, in pixels.
		 */
		get_default_monospace_font_size(): number;
		/**
		 * Get the #WebKitSettings:draw-compositing-indicators property.
		 * @returns %TRUE If compositing borders are drawn or %FALSE otherwise.
		 */
		get_draw_compositing_indicators(): boolean;
		/**
		 * Get the #WebKitSettings:enable-accelerated-2d-canvas property.
		 * @returns %TRUE if accelerated 2D canvas is enabled or %FALSE otherwise.
		 */
		get_enable_accelerated_2d_canvas(): boolean;
		/**
		 * Get the #WebKitSettings:enable-back-forward-navigation-gestures property.
		 * @returns %TRUE if horizontal swipe gesture will trigger back-forward navigaiton or %FALSE otherwise.
		 */
		get_enable_back_forward_navigation_gestures(): boolean;
		/**
		 * Get the #WebKitSettings:enable-caret-browsing property.
		 * @returns %TRUE If caret browsing is enabled or %FALSE otherwise.
		 */
		get_enable_caret_browsing(): boolean;
		/**
		 * Get the #WebKitSettings:enable-developer-extras property.
		 * @returns %TRUE If developer extras is enabled or %FALSE otherwise.
		 */
		get_enable_developer_extras(): boolean;
		/**
		 * Get the #WebKitSettings:enable-dns-prefetching property.
		 * @returns %TRUE If DNS prefetching is enabled or %FALSE otherwise.
		 */
		get_enable_dns_prefetching(): boolean;
		/**
		 * Get the #WebKitSettings:enable-encrypted-media property.
		 * @returns %TRUE if EncryptedMedia support is enabled or %FALSE otherwise.
		 */
		get_enable_encrypted_media(): boolean;
		/**
		 * Get the #WebKitSettings:enable-frame-flattening property.
		 * @returns %TRUE If frame flattening is enabled or %FALSE otherwise.
		 */
		get_enable_frame_flattening(): boolean;
		/**
		 * Get the #WebKitSettings:enable-fullscreen property.
		 * @returns %TRUE If fullscreen support is enabled or %FALSE otherwise.
		 */
		get_enable_fullscreen(): boolean;
		/**
		 * Get the #WebKitSettings:enable-html5-database property.
		 * @returns %TRUE if IndexedDB support is enabled or %FALSE otherwise.
		 */
		get_enable_html5_database(): boolean;
		/**
		 * Get the #WebKitSettings:enable-html5-local-storage property.
		 * @returns %TRUE If HTML5 local storage support is enabled or %FALSE otherwise.
		 */
		get_enable_html5_local_storage(): boolean;
		/**
		 * Get the #WebKitSettings:enable-hyperlink-auditing property.
		 * @returns %TRUE If hyper link auditing is enabled or %FALSE otherwise.
		 */
		get_enable_hyperlink_auditing(): boolean;
		/**
		 * Get the #WebKitSettings:enable-java property.
		 * @returns %TRUE If Java is enabled or %FALSE otherwise.
		 */
		get_enable_java(): boolean;
		/**
		 * Get the #WebKitSettings:enable-javascript property.
		 * @returns %TRUE If JavaScript is enabled or %FALSE otherwise.
		 */
		get_enable_javascript(): boolean;
		/**
		 * Get the #WebKitSettings:enable-javascript-markup property.
		 * @returns %TRUE if JavaScript markup is enabled or %FALSE otherwise.
		 */
		get_enable_javascript_markup(): boolean;
		/**
		 * Get the #WebKitSettings:enable-media property.
		 * @returns %TRUE if media support is enabled or %FALSE otherwise.
		 */
		get_enable_media(): boolean;
		/**
		 * Get the #WebKitSettings:enable-media-capabilities property.
		 * @returns %TRUE if MediaCapabilities support is enabled or %FALSE otherwise.
		 */
		get_enable_media_capabilities(): boolean;
		/**
		 * Get the #WebKitSettings:enable-media-stream property.
		 * @returns %TRUE If mediastream support is enabled or %FALSE otherwise.
		 */
		get_enable_media_stream(): boolean;
		/**
		 * Get the #WebKitSettings:enable-mediasource property.
		 * @returns %TRUE If MediaSource support is enabled or %FALSE otherwise.
		 */
		get_enable_mediasource(): boolean;
		/**
		 * Get the #WebKitSettings:enable-mock-capture-devices property.
		 * @returns %TRUE If mock capture devices is enabled or %FALSE otherwise.
		 */
		get_enable_mock_capture_devices(): boolean;
		/**
		 * Get the #WebKitSettings:enable-offline-web-application-cache property.
		 * @returns %TRUE If HTML5 offline web application cache support is enabled or %FALSE otherwise.
		 */
		get_enable_offline_web_application_cache(): boolean;
		/**
		 * Get the #WebKitSettings:enable-page-cache property.
		 * @returns %TRUE if page cache enabled or %FALSE otherwise.
		 */
		get_enable_page_cache(): boolean;
		/**
		 * Get the #WebKitSettings:enable-plugins property.
		 * @returns %TRUE If plugins are enabled or %FALSE otherwise.
		 */
		get_enable_plugins(): boolean;
		/**
		 * Get the #WebKitSettings:enable-private-browsing property.
		 * @returns %TRUE If private browsing is enabled or %FALSE otherwise.
		 */
		get_enable_private_browsing(): boolean;
		/**
		 * Get the #WebKitSettings:enable-resizable-text-areas property.
		 * @returns %TRUE If text areas can be resized or %FALSE otherwise.
		 */
		get_enable_resizable_text_areas(): boolean;
		/**
		 * Get the #WebKitSettings:enable-site-specific-quirks property.
		 * @returns %TRUE if site specific quirks are enabled or %FALSE otherwise.
		 */
		get_enable_site_specific_quirks(): boolean;
		/**
		 * Get the #WebKitSettings:enable-smooth-scrolling property.
		 * @returns %TRUE if smooth scrolling is enabled or %FALSE otherwise.
		 */
		get_enable_smooth_scrolling(): boolean;
		/**
		 * Get the #WebKitSettings:enable-spatial-navigation property.
		 * @returns %TRUE If HTML5 spatial navigation support is enabled or %FALSE otherwise.
		 */
		get_enable_spatial_navigation(): boolean;
		/**
		 * Get the #WebKitSettings:enable-tabs-to-links property.
		 * @returns %TRUE If tabs to link is enabled or %FALSE otherwise.
		 */
		get_enable_tabs_to_links(): boolean;
		/**
		 * Get the #WebKitSettings:enable-webaudio property.
		 * @returns %TRUE If webaudio support is enabled or %FALSE otherwise.
		 */
		get_enable_webaudio(): boolean;
		/**
		 * Get the #WebKitSettings:enable-webgl property.
		 * @returns %TRUE If WebGL support is enabled or %FALSE otherwise.
		 */
		get_enable_webgl(): boolean;
		/**
		 * Get the #WebKitSettings:enable-write-console-messages-to-stdout property.
		 * @returns %TRUE if writing console messages to stdout is enabled or %FALSE
		 * otherwise.
		 */
		get_enable_write_console_messages_to_stdout(): boolean;
		/**
		 * Get the #WebKitSettings:enable-xss-auditor property.
		 * @returns %TRUE If XSS auditing is enabled or %FALSE otherwise.
		 */
		get_enable_xss_auditor(): boolean;
		/**
		 * Gets the #WebKitSettings:fantasy-font-family property.
		 * @returns The default font family used to display content marked with fantasy font.
		 */
		get_fantasy_font_family(): string;
		/**
		 * Get the #WebKitSettings:hardware-acceleration-policy property.
		 * @returns a #WebKitHardwareAccelerationPolicy
		 */
		get_hardware_acceleration_policy(): HardwareAccelerationPolicy;
		/**
		 * Get the #WebKitSettings:javascript-can-access-clipboard property.
		 * @returns %TRUE If javascript-can-access-clipboard is enabled or %FALSE otherwise.
		 */
		get_javascript_can_access_clipboard(): boolean;
		/**
		 * Get the #WebKitSettings:javascript-can-open-windows-automatically property.
		 * @returns %TRUE If JavaScript can open window automatically or %FALSE otherwise.
		 */
		get_javascript_can_open_windows_automatically(): boolean;
		/**
		 * Get the #WebKitSettings:load-icons-ignoring-image-load-setting property.
		 * @returns %TRUE If site icon can be loaded irrespective of image loading preference or %FALSE otherwise.
		 */
		get_load_icons_ignoring_image_load_setting(): boolean;
		/**
		 * Gets the #WebKitSettings:media-content-types-requiring-hardware-support property.
		 * @returns Media content types requiring hardware support, or %NULL.
		 */
		get_media_content_types_requiring_hardware_support(): string;
		/**
		 * Get the #WebKitSettings:media-playback-allows-inline property.
		 * @returns %TRUE If inline playback is allowed for media
		 *    or %FALSE if only fullscreen playback is allowed.
		 */
		get_media_playback_allows_inline(): boolean;
		/**
		 * Get the #WebKitSettings:media-playback-requires-user-gesture property.
		 * @returns %TRUE If an user gesture is needed to play or load media
		 *    or %FALSE if no user gesture is needed.
		 */
		get_media_playback_requires_user_gesture(): boolean;
		/**
		 * Gets the #WebKitSettings:minimum-font-size property.
		 * @returns Minimum font size, in pixels.
		 */
		get_minimum_font_size(): number;
		/**
		 * Gets the #WebKitSettings:monospace-font-family property.
		 * @returns Default font family used to display content marked with monospace font.
		 */
		get_monospace_font_family(): string;
		/**
		 * Gets the #WebKitSettings:pictograph-font-family property.
		 * @returns The default font family used to display content marked with pictograph font.
		 */
		get_pictograph_font_family(): string;
		/**
		 * Get the #WebKitSettings:print-backgrounds property.
		 * @returns %TRUE If background images should be printed or %FALSE otherwise.
		 */
		get_print_backgrounds(): boolean;
		/**
		 * Gets the #WebKitSettings:sans-serif-font-family property.
		 * @returns The default font family used to display content marked with sans-serif font.
		 */
		get_sans_serif_font_family(): string;
		/**
		 * Gets the #WebKitSettings:serif-font-family property.
		 * @returns The default font family used to display content marked with serif font.
		 */
		get_serif_font_family(): string;
		/**
		 * Get the #WebKitSettings:user-agent property.
		 * @returns The current value of the user-agent property.
		 */
		get_user_agent(): string;
		/**
		 * Get the #WebKitSettings:zoom-text-only property.
		 * @returns %TRUE If zoom level of the view should only affect the text
		 *    or %FALSE if all view contents should be scaled.
		 */
		get_zoom_text_only(): boolean;
		/**
		 * Set the #WebKitSettings:allow-file-access-from-file-urls property.
		 * @param allowed Value to be set
		 */
		set_allow_file_access_from_file_urls(allowed: boolean): void;
		/**
		 * Set the #WebKitSettings:allow-modal-dialogs property.
		 * @param allowed Value to be set
		 */
		set_allow_modal_dialogs(allowed: boolean): void;
		/**
		 * Set the #WebKitSettings:allow-top-navigation-to-data-urls property.
		 * @param allowed Value to be set
		 */
		set_allow_top_navigation_to_data_urls(allowed: boolean): void;
		/**
		 * Set the #WebKitSettings:allow-universal-access-from-file-urls property.
		 * @param allowed Value to be set
		 */
		set_allow_universal_access_from_file_urls(allowed: boolean): void;
		/**
		 * Set the #WebKitSettings:auto-load-images property.
		 * @param enabled Value to be set
		 */
		set_auto_load_images(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:cursive-font-family property.
		 * @param cursive_font_family the new default cursive font family
		 */
		set_cursive_font_family(cursive_font_family: string): void;
		/**
		 * Set the #WebKitSettings:default-charset property.
		 * @param default_charset default charset to be set
		 */
		set_default_charset(default_charset: string): void;
		/**
		 * Set the #WebKitSettings:default-font-family property.
		 * @param default_font_family the new default font family
		 */
		set_default_font_family(default_font_family: string): void;
		/**
		 * Set the #WebKitSettings:default-font-size property.
		 * @param font_size default font size to be set in pixels
		 */
		set_default_font_size(font_size: number): void;
		/**
		 * Set the #WebKitSettings:default-monospace-font-size property.
		 * @param font_size default monospace font size to be set in pixels
		 */
		set_default_monospace_font_size(font_size: number): void;
		/**
		 * Set the #WebKitSettings:draw-compositing-indicators property.
		 * @param enabled Value to be set
		 */
		set_draw_compositing_indicators(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-accelerated-2d-canvas property.
		 * @param enabled Value to be set
		 */
		set_enable_accelerated_2d_canvas(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-back-forward-navigation-gestures property.
		 * @param enabled value to be set
		 */
		set_enable_back_forward_navigation_gestures(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-caret-browsing property.
		 * @param enabled Value to be set
		 */
		set_enable_caret_browsing(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-developer-extras property.
		 * @param enabled Value to be set
		 */
		set_enable_developer_extras(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-dns-prefetching property.
		 * @param enabled Value to be set
		 */
		set_enable_dns_prefetching(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-encrypted-media property.
		 * @param enabled Value to be set
		 */
		set_enable_encrypted_media(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-frame-flattening property.
		 * @param enabled Value to be set
		 */
		set_enable_frame_flattening(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-fullscreen property.
		 * @param enabled Value to be set
		 */
		set_enable_fullscreen(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-html5-database property.
		 * @param enabled Value to be set
		 */
		set_enable_html5_database(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-html5-local-storage property.
		 * @param enabled Value to be set
		 */
		set_enable_html5_local_storage(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-hyperlink-auditing property.
		 * @param enabled Value to be set
		 */
		set_enable_hyperlink_auditing(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-java property.
		 * @param enabled Value to be set
		 */
		set_enable_java(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-javascript property.
		 * @param enabled Value to be set
		 */
		set_enable_javascript(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-javascript-markup property.
		 * @param enabled Value to be set
		 */
		set_enable_javascript_markup(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-media property.
		 * @param enabled Value to be set
		 */
		set_enable_media(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-media-capabilities property.
		 * @param enabled Value to be set
		 */
		set_enable_media_capabilities(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-media-stream property.
		 * @param enabled Value to be set
		 */
		set_enable_media_stream(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-mediasource property.
		 * @param enabled Value to be set
		 */
		set_enable_mediasource(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-mock-capture-devices property.
		 * @param enabled Value to be set
		 */
		set_enable_mock_capture_devices(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-offline-web-application-cache property.
		 * @param enabled Value to be set
		 */
		set_enable_offline_web_application_cache(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-page-cache property.
		 * @param enabled Value to be set
		 */
		set_enable_page_cache(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-plugins property.
		 * @param enabled Value to be set
		 */
		set_enable_plugins(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-private-browsing property.
		 * @param enabled Value to be set
		 */
		set_enable_private_browsing(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-resizable-text-areas property.
		 * @param enabled Value to be set
		 */
		set_enable_resizable_text_areas(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-site-specific-quirks property.
		 * @param enabled Value to be set
		 */
		set_enable_site_specific_quirks(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-smooth-scrolling property.
		 * @param enabled Value to be set
		 */
		set_enable_smooth_scrolling(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-spatial-navigation property.
		 * @param enabled Value to be set
		 */
		set_enable_spatial_navigation(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-tabs-to-links property.
		 * @param enabled Value to be set
		 */
		set_enable_tabs_to_links(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-webaudio property.
		 * @param enabled Value to be set
		 */
		set_enable_webaudio(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-webgl property.
		 * @param enabled Value to be set
		 */
		set_enable_webgl(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-write-console-messages-to-stdout property.
		 * @param enabled Value to be set
		 */
		set_enable_write_console_messages_to_stdout(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:enable-xss-auditor property.
		 * @param enabled Value to be set
		 */
		set_enable_xss_auditor(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:fantasy-font-family property.
		 * @param fantasy_font_family the new default fantasy font family
		 */
		set_fantasy_font_family(fantasy_font_family: string): void;
		/**
		 * Set the #WebKitSettings:hardware-acceleration-policy property.
		 * @param policy a #WebKitHardwareAccelerationPolicy
		 */
		set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy): void;
		/**
		 * Set the #WebKitSettings:javascript-can-access-clipboard property.
		 * @param enabled Value to be set
		 */
		set_javascript_can_access_clipboard(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:javascript-can-open-windows-automatically property.
		 * @param enabled Value to be set
		 */
		set_javascript_can_open_windows_automatically(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:load-icons-ignoring-image-load-setting property.
		 * @param enabled Value to be set
		 */
		set_load_icons_ignoring_image_load_setting(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:media-content-types-requiring-hardware-support property.
		 * @param content_types list of media content types requiring hardware support split by semicolons (:) or %NULL to use the default value.
		 */
		set_media_content_types_requiring_hardware_support(content_types: string): void;
		/**
		 * Set the #WebKitSettings:media-playback-allows-inline property.
		 * @param enabled Value to be set
		 */
		set_media_playback_allows_inline(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:media-playback-requires-user-gesture property.
		 * @param enabled Value to be set
		 */
		set_media_playback_requires_user_gesture(enabled: boolean): void;
		/**
		 * Set the #WebKitSettings:minimum-font-size property.
		 * @param font_size minimum font size to be set in pixels
		 */
		set_minimum_font_size(font_size: number): void;
		/**
		 * Set the #WebKitSettings:monospace-font-family property.
		 * @param monospace_font_family the new default monospace font family
		 */
		set_monospace_font_family(monospace_font_family: string): void;
		/**
		 * Set the #WebKitSettings:pictograph-font-family property.
		 * @param pictograph_font_family the new default pictograph font family
		 */
		set_pictograph_font_family(pictograph_font_family: string): void;
		/**
		 * Set the #WebKitSettings:print-backgrounds property.
		 * @param print_backgrounds Value to be set
		 */
		set_print_backgrounds(print_backgrounds: boolean): void;
		/**
		 * Set the #WebKitSettings:sans-serif-font-family property.
		 * @param sans_serif_font_family the new default sans-serif font family
		 */
		set_sans_serif_font_family(sans_serif_font_family: string): void;
		/**
		 * Set the #WebKitSettings:serif-font-family property.
		 * @param serif_font_family the new default serif font family
		 */
		set_serif_font_family(serif_font_family: string): void;
		/**
		 * Set the #WebKitSettings:user-agent property.
		 * @param user_agent The new custom user agent string or %NULL to use the default user agent
		 */
		set_user_agent(user_agent: string): void;
		/**
		 * Set the #WebKitSettings:user-agent property by appending the application details to the default user
		 * agent. If no application name or version is given, the default user agent used will be used. If only
		 * the version is given, the default engine version is used with the given application name.
		 * @param application_name The application name used for the user agent or %NULL to use the default user agent.
		 * @param application_version The application version for the user agent or %NULL to user the default version.
		 */
		set_user_agent_with_application_details(application_name: string, application_version: string): void;
		/**
		 * Set the #WebKitSettings:zoom-text-only property.
		 * @param zoom_text_only Value to be set
		 */
		set_zoom_text_only(zoom_text_only: boolean): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link Settings} instead.
	 */
	type SettingsMixin = ISettings & GObject.IObject;

	interface Settings extends SettingsMixin {}

	class Settings {
		public constructor();
		/**
		 * Creates a new #WebKitSettings instance with default values. It must
		 * be manually attached to a #WebKitWebView.
		 * See also webkit_settings_new_with_settings().
		 * @returns a new #WebKitSettings instance.
		 */
		public static new(): Settings;
		/**
		 * Creates a new #WebKitSettings instance with the given settings. It must
		 * be manually attached to a #WebKitWebView.
		 * @param first_setting_name name of first setting to set
		 * @returns a new #WebKitSettings instance.
		 */
		public static new_with_settings(first_setting_name: string): Settings;
		/**
		 * Convert #points to the equivalent value in pixels, based on the current
		 * screen DPI. Applications can use this function to convert font size values
		 * in points to font size values in pixels when setting the font size properties
		 * of #WebKitSettings.
		 * @param points the font size in points to convert to pixels
		 * @returns the equivalent font size in pixels.
		 */
		public static font_size_to_pixels(points: number): number;
		/**
		 * Convert #pixels to the equivalent value in points, based on the current
		 * screen DPI. Applications can use this function to convert font size values
		 * in pixels to font size values in points when getting the font size properties
		 * of #WebKitSettings.
		 * @param pixels the font size in pixels to convert to points
		 * @returns the equivalent font size in points.
		 */
		public static font_size_to_points(pixels: number): number;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link URIRequest} instead.
	 */
	interface IURIRequest {
		/**
		 * Get the HTTP headers of a #WebKitURIRequest as a #SoupMessageHeaders.
		 * @returns a #SoupMessageHeaders with the HTTP headers of #request
		 *    or %NULL if #request is not an HTTP request.
		 */
		get_http_headers(): Soup.MessageHeaders;
		/**
		 * Get the HTTP method of the #WebKitURIRequest.
		 * @returns the HTTP method of the #WebKitURIRequest or %NULL if #request is not
		 *    an HTTP request.
		 */
		get_http_method(): string;
		get_uri(): string;
		/**
		 * Set the URI of #request
		 * @param uri an URI
		 */
		set_uri(uri: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link URIRequest} instead.
	 */
	type URIRequestMixin = IURIRequest & GObject.IObject;

	interface URIRequest extends URIRequestMixin {}

	class URIRequest {
		public constructor();
		/**
		 * Creates a new #WebKitURIRequest for the given URI.
		 * @param uri an URI
		 * @returns a new #WebKitURIRequest
		 */
		public static new(uri: string): URIRequest;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link URIResponse} instead.
	 */
	interface IURIResponse {
		/**
		 * Get the expected content length of the #WebKitURIResponse. It can
		 * be 0 if the server provided an incorrect or missing Content-Length.
		 * @returns the expected content length of #response.
		 */
		get_content_length(): number;
		/**
		 * Get the HTTP headers of a #WebKitURIResponse as a #SoupMessageHeaders.
		 * @returns a #SoupMessageHeaders with the HTTP headers of #response
		 *    or %NULL if #response is not an HTTP response.
		 */
		get_http_headers(): Soup.MessageHeaders;
		get_mime_type(): string;
		/**
		 * Get the status code of the #WebKitURIResponse as returned by
		 * the server. It will normally be a #SoupKnownStatusCode, for
		 * example %SOUP_STATUS_OK, though the server can respond with any
		 * unsigned integer.
		 * @returns the status code of #response
		 */
		get_status_code(): number;
		/**
		 * Get the suggested filename for #response, as specified by
		 * the 'Content-Disposition' HTTP header, or %NULL if it's not
		 * present.
		 * @returns the suggested filename or %NULL if
		 *    the 'Content-Disposition' HTTP header is not present.
		 */
		get_suggested_filename(): string;
		get_uri(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link URIResponse} instead.
	 */
	type URIResponseMixin = IURIResponse & GObject.IObject;

	interface URIResponse extends URIResponseMixin {}

	class URIResponse {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link URISchemeRequest} instead.
	 */
	interface IURISchemeRequest {
		/**
		 * Finish a #WebKitURISchemeRequest by setting the contents of the request and its mime type.
		 * @param stream a #GInputStream to read the contents of the request
		 * @param stream_length the length of the stream or -1 if not known
		 * @param content_type the content type of the stream or %NULL if not known
		 */
		finish(stream: Gio.InputStream, stream_length: number, content_type: string): void;
		/**
		 * Finish a #WebKitURISchemeRequest with a #GError.
		 * @param error a #GError that will be passed to the #WebKitWebView
		 */
		finish_error(error: GLib.Error): void;
		/**
		 * Get the URI path of #request
		 * @returns the URI path of #request
		 */
		get_path(): string;
		/**
		 * Get the URI scheme of #request
		 * @returns the URI scheme of #request
		 */
		get_scheme(): string;
		/**
		 * Get the URI of #request
		 * @returns the full URI of #request
		 */
		get_uri(): string;
		/**
		 * Get the #WebKitWebView that initiated the request.
		 * @returns the #WebKitWebView that initiated #request.
		 */
		get_web_view(): WebView;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link URISchemeRequest} instead.
	 */
	type URISchemeRequestMixin = IURISchemeRequest & GObject.IObject;

	interface URISchemeRequest extends URISchemeRequestMixin {}

	class URISchemeRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link UserContentFilterStore} instead.
	 */
	interface IUserContentFilterStore {
		/**
		 * Asynchronously retrieve a list of the identifiers for all the stored filters.
		 * 
		 * When the operation is finished, #callback will be invoked, which then can use
		 * webkit_user_content_filter_store_fetch_identifiers_finish() to obtain the list of
		 * filter identifiers.
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the removal is completed
		 */
		fetch_identifiers(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finishes an asynchronous fetch of the list of identifiers for the stored filters previously
		 * started with webkit_user_content_filter_store_fetch_identifiers().
		 * @param result a #GAsyncResult
		 * @returns a %NULL-terminated list of filter identifiers.
		 */
		fetch_identifiers_finish(result: Gio.AsyncResult): string[];
		get_path(): string;
		/**
		 * Asynchronously load a content filter given its #identifier. The filter must have been
		 * previously stored using webkit_user_content_filter_store_save().
		 * 
		 * When the operation is finished, #callback will be invoked, which then can use
		 * webkit_user_content_filter_store_load_finish() to obtain the resulting filter.
		 * @param identifier a filter identifier
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the load is completed
		 */
		load(identifier: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finishes an asynchronous filter load previously started with
		 * webkit_user_content_filter_store_load().
		 * @param result a #GAsyncResult
		 * @returns a #WebKitUserContentFilter, or %NULL if the load failed
		 */
		load_finish(result: Gio.AsyncResult): UserContentFilter;
		/**
		 * Asynchronously remove a content filter given its #identifier.
		 * 
		 * When the operation is finished, #callback will be invoked, which then can use
		 * webkit_user_content_filter_store_remove_finish() to check whether the removal was
		 * successful.
		 * @param identifier a filter identifier
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the removal is completed
		 */
		remove(identifier: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finishes an asynchronous filter removal previously started with
		 * webkit_user_content_filter_store_remove().
		 * @param result a #GAsyncResult
		 * @returns whether the removal was successful
		 */
		remove_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Asynchronously save a content filter from a source rule set in the
		 * [WebKit content extesions JSON format](https://webkit.org/blog/3476/content-blockers-first-look/).
		 * 
		 * The #identifier can be used afterwards to refer to the filter when using
		 * webkit_user_content_filter_store_remove() and webkit_user_content_filter_store_load().
		 * When the #identifier has been used in the past, the new filter source will replace
		 * the one saved beforehand for the same identifier.
		 * 
		 * When the operation is finished, #callback will be invoked, which then can use
		 * webkit_user_content_filter_store_save_finish() to obtain the resulting filter.
		 * @param identifier a string used to identify the saved filter
		 * @param source #GBytes containing the rule set in JSON format
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when saving is completed
		 */
		save(identifier: string, source: GLib.Bytes, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finishes an asynchronous filter save previously started with
		 * webkit_user_content_filter_store_save().
		 * @param result a #GAsyncResult
		 * @returns a #WebKitUserContentFilter, or %NULL if saving failed
		 */
		save_finish(result: Gio.AsyncResult): UserContentFilter;
		/**
		 * Asynchronously save a content filter from the contents of a file, which must be
		 * native to the platform, as checked by g_file_is_native(). See
		 * webkit_user_content_filter_store_save() for more details.
		 * 
		 * When the operation is finished, #callback will be invoked, which then can use
		 * webkit_user_content_filter_store_save_finish() to obtain the resulting filter.
		 * @param identifier a string used to identify the saved filter
		 * @param file a #GFile containing the rule set in JSON format
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when saving is completed
		 */
		save_from_file(identifier: string, file: Gio.File, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finishes and asynchronous filter save previously started with
		 * webkit_user_content_filter_store_save_from_file().
		 * @param result a #GAsyncResult
		 * @returns a #WebKitUserContentFilter, or %NULL if saving failed.
		 */
		save_from_file_finish(result: Gio.AsyncResult): UserContentFilter;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link UserContentFilterStore} instead.
	 */
	type UserContentFilterStoreMixin = IUserContentFilterStore & GObject.IObject;

	interface UserContentFilterStore extends UserContentFilterStoreMixin {}

	class UserContentFilterStore {
		public constructor();
		/**
		 * Create a new #WebKitUserContentFilterStore to manipulate filters stored at #storage_path.
		 * The path must point to a local filesystem, and will be created if needed.
		 * @param storage_path path where data for filters will be stored on disk
		 * @returns a newly created #WebKitUserContentFilterStore
		 */
		public static new(storage_path: string): UserContentFilterStore;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link UserContentManager} instead.
	 */
	interface IUserContentManager {
		/**
		 * Adds a #WebKitUserContentFilter to the given #WebKitUserContentManager.
		 * The same #WebKitUserContentFilter can be reused with multiple
		 * #WebKitUserContentManager instances.
		 * 
		 * Filters need to be saved and loaded from #WebKitUserContentFilterStore.
		 * @param filter A #WebKitUserContentFilter
		 */
		add_filter(filter: UserContentFilter): void;
		/**
		 * Adds a #WebKitUserScript to the given #WebKitUserContentManager.
		 * The same #WebKitUserScript can be reused with multiple
		 * #WebKitUserContentManager instances.
		 * @param script A #WebKitUserScript
		 */
		add_script(script: UserScript): void;
		/**
		 * Adds a #WebKitUserStyleSheet to the given #WebKitUserContentManager.
		 * The same #WebKitUserStyleSheet can be reused with multiple
		 * #WebKitUserContentManager instances.
		 * @param stylesheet A #WebKitUserStyleSheet
		 */
		add_style_sheet(stylesheet: UserStyleSheet): void;
		/**
		 * Registers a new user script message handler. After it is registered,
		 * scripts can use `window.webkit.messageHandlers.&lt;name&gt;.postMessage(value)`
		 * to send messages. Those messages are received by connecting handlers
		 * to the #WebKitUserContentManager::script-message-received signal. The
		 * handler name is used as the detail of the signal. To avoid race
		 * conditions between registering the handler name, and starting to
		 * receive the signals, it is recommended to connect to the signal
		 * *before* registering the handler name:
		 * 
		 * <informalexample><programlisting>
		 * WebKitWebView *view = webkit_web_view_new ();
		 * WebKitUserContentManager *manager = webkit_web_view_get_user_content_manager ();
		 * g_signal_connect (manager, "script-message-received::foobar",
		 *                   G_CALLBACK (handle_script_message), NULL);
		 * webkit_user_content_manager_register_script_message_handler (manager, "foobar");
		 * </programlisting></informalexample>
		 * 
		 * Registering a script message handler will fail if the requested
		 * name has been already registered before.
		 * @param name Name of the script message channel
		 * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
		 */
		register_script_message_handler(name: string): boolean;
		/**
		 * Registers a new user script message handler in script world with name #world_name.
		 * See webkit_user_content_manager_register_script_message_handler() for full description.
		 * 
		 * Registering a script message handler will fail if the requested
		 * name has been already registered before.
		 * @param name Name of the script message channel
		 * @param world_name the name of a #WebKitScriptWorld
		 * @returns %TRUE if message handler was registered successfully, or %FALSE otherwise.
		 */
		register_script_message_handler_in_world(name: string, world_name: string): boolean;
		/**
		 * Removes all content filters from the given #WebKitUserContentManager.
		 */
		remove_all_filters(): void;
		/**
		 * Removes all user scripts from the given #WebKitUserContentManager
		 * 
		 * See also webkit_user_content_manager_remove_script().
		 */
		remove_all_scripts(): void;
		/**
		 * Removes all user style sheets from the given #WebKitUserContentManager.
		 */
		remove_all_style_sheets(): void;
		/**
		 * Removes a filter from the given #WebKitUserContentManager.
		 * 
		 * Since 2.24
		 * @param filter A #WebKitUserContentFilter
		 */
		remove_filter(filter: UserContentFilter): void;
		/**
		 * Removes a filter from the given #WebKitUserContentManager given the
		 * identifier of a #WebKitUserContentFilter as returned by
		 * webkit_user_content_filter_get_identifier().
		 * @param filter_id Filter identifier
		 */
		remove_filter_by_id(filter_id: string): void;
		/**
		 * Removes a #WebKitUserScript from the given #WebKitUserContentManager.
		 * 
		 * See also webkit_user_content_manager_remove_all_scripts().
		 * @param script A #WebKitUserScript
		 */
		remove_script(script: UserScript): void;
		/**
		 * Removes a #WebKitUserStyleSheet from the given #WebKitUserContentManager.
		 * 
		 * See also webkit_user_content_manager_remove_all_style_sheets().
		 * @param stylesheet A #WebKitUserStyleSheet
		 */
		remove_style_sheet(stylesheet: UserStyleSheet): void;
		/**
		 * Unregisters a previously registered message handler.
		 * 
		 * Note that this does *not* disconnect handlers for the
		 * #WebKitUserContentManager::script-message-received signal;
		 * they will be kept connected, but the signal will not be emitted
		 * unless the handler name is registered again.
		 * 
		 * See also webkit_user_content_manager_register_script_message_handler().
		 * @param name Name of the script message channel
		 */
		unregister_script_message_handler(name: string): void;
		/**
		 * Unregisters a previously registered message handler in script world with name #world_name.
		 * 
		 * Note that this does *not* disconnect handlers for the
		 * #WebKitUserContentManager::script-message-received signal;
		 * they will be kept connected, but the signal will not be emitted
		 * unless the handler name is registered again.
		 * 
		 * See also webkit_user_content_manager_register_script_message_handler_in_world().
		 * @param name Name of the script message channel
		 * @param world_name the name of a #WebKitScriptWorld
		 */
		unregister_script_message_handler_in_world(name: string, world_name: string): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link UserContentManager} instead.
	 */
	type UserContentManagerMixin = IUserContentManager & GObject.IObject;

	interface UserContentManager extends UserContentManagerMixin {}

	class UserContentManager {
		public constructor();
		/**
		 * Creates a new user content manager.
		 * @returns A #WebKitUserContentManager
		 */
		public static new(): UserContentManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link UserMediaPermissionRequest} instead.
	 */
	interface IUserMediaPermissionRequest {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link UserMediaPermissionRequest} instead.
	 */
	type UserMediaPermissionRequestMixin = IUserMediaPermissionRequest & GObject.IObject & IPermissionRequest;

	interface UserMediaPermissionRequest extends UserMediaPermissionRequestMixin {}

	class UserMediaPermissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link UserMessage} instead.
	 */
	interface IUserMessage {
		/**
		 * Get the #message list of file descritpor
		 * @returns the message list of file descriptors
		 */
		get_fd_list(): Gio.UnixFDList;
		/**
		 * Get the #message name
		 * @returns the message name
		 */
		get_name(): string;
		/**
		 * Get the #message parameters
		 * @returns the message parameters
		 */
		get_parameters(): GLib.Variant;
		/**
		 * Send a reply to #message. If #reply is floating, it's consumed.
		 * You can only send a reply to a #WebKitUserMessage that has been
		 * received.
		 * @param reply a #WebKitUserMessage to send as reply
		 */
		send_reply(reply: UserMessage): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link UserMessage} instead.
	 */
	type UserMessageMixin = IUserMessage & GObject.IInitiallyUnowned;

	interface UserMessage extends UserMessageMixin {}

	class UserMessage {
		public constructor();
		/**
		 * Create a new #WebKitUserMessage with #name.
		 * @param name the message name
		 * @param parameters the message parameters as a #GVariant, or %NULL
		 * @returns the newly created #WebKitUserMessage object.
		 */
		public static new(name: string, parameters: GLib.Variant): UserMessage;
		/**
		 * Create a new #WebKitUserMessage including also a list of UNIX file descriptors to be sent.
		 * @param name the message name
		 * @param parameters the message parameters as a #GVariant
		 * @param fd_list the message file descriptors
		 * @returns the newly created #WebKitUserMessage object.
		 */
		public static new_with_fd_list(name: string, parameters: GLib.Variant, fd_list: Gio.UnixFDList): UserMessage;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebContext} instead.
	 */
	interface IWebContext {
		/**
		 * Adds a path to be mounted in the sandbox. #path must exist before any web process
		 * has been created otherwise it will be silently ignored. It is a fatal error to
		 * add paths after a web process has been spawned.
		 * 
		 * Paths in directories such as `/sys`, `/proc`, and `/dev` or all of `/`
		 * are not valid.
		 * 
		 * See also webkit_web_context_set_sandbox_enabled()
		 * @param path an absolute path to mount in the sandbox
		 * @param read_only if %TRUE the path will be read-only
		 */
		add_path_to_sandbox(path: string, read_only: boolean): void;
		/**
		 * Ignore further TLS errors on the #host for the certificate present in #info.
		 * @param certificate a #GTlsCertificate
		 * @param host the host for which a certificate is to be allowed
		 */
		allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string): void;
		/**
		 * Clears all resources currently cached.
		 * See also webkit_web_context_set_cache_model().
		 */
		clear_cache(): void;
		/**
		 * Requests downloading of the specified URI string. The download operation
		 * will not be associated to any #WebKitWebView, if you are interested in
		 * starting a download from a particular #WebKitWebView use
		 * webkit_web_view_download_uri() instead.
		 * @param uri the URI to download
		 * @returns a new #WebKitDownload representing
		 *    the download operation.
		 */
		download_uri(uri: string): Download;
		/**
		 * Returns the current cache model. For more information about this
		 * value check the documentation of the function
		 * webkit_web_context_set_cache_model().
		 * @returns the current #WebKitCacheModel
		 */
		get_cache_model(): CacheModel;
		/**
		 * Get the #WebKitCookieManager of the #context's #WebKitWebsiteDataManager.
		 * @returns the #WebKitCookieManager of #context.
		 */
		get_cookie_manager(): CookieManager;
		/**
		 * Get the #WebKitFaviconDatabase associated with #context.
		 * 
		 * To initialize the database you need to call
		 * webkit_web_context_set_favicon_database_directory().
		 * @returns the #WebKitFaviconDatabase of #context.
		 */
		get_favicon_database(): FaviconDatabase;
		/**
		 * Get the directory path being used to store the favicons database
		 * for #context, or %NULL if
		 * webkit_web_context_set_favicon_database_directory() hasn't been
		 * called yet.
		 * 
		 * This function will always return the same path after having called
		 * webkit_web_context_set_favicon_database_directory() for the first
		 * time.
		 * @returns the path of the directory of the favicons
		 * database associated with #context, or %NULL.
		 */
		get_favicon_database_directory(): string;
		/**
		 * Get the #WebKitGeolocationManager of #context.
		 * @returns the #WebKitGeolocationManager of #context.
		 */
		get_geolocation_manager(): GeolocationManager;
		/**
		 * Asynchronously get the list of installed plugins.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_web_context_get_plugins_finish() to get the result of the operation.
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		get_plugins(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_context_get_plugins.
		 * @param result a #GAsyncResult
		 * @returns a #GList of #WebKitPlugin. You must free the #GList with
		 *    g_list_free() and unref the #WebKitPlugin<!-- -->s with g_object_unref() when you're done with them.
		 */
		get_plugins_finish(result: Gio.AsyncResult): GLib.List;
		/**
		 * Returns the current process model. For more information about this value
		 * see webkit_web_context_set_process_model().
		 * @returns the current #WebKitProcessModel
		 */
		get_process_model(): ProcessModel;
		/**
		 * Get whether sandboxing is currently enabled.
		 * @returns %TRUE if sandboxing is enabled, or %FALSE otherwise.
		 */
		get_sandbox_enabled(): boolean;
		/**
		 * Get the #WebKitSecurityManager of #context.
		 * @returns the #WebKitSecurityManager of #context.
		 */
		get_security_manager(): SecurityManager;
		/**
		 * Get whether spell checking feature is currently enabled.
		 * @returns %TRUE If spell checking is enabled, or %FALSE otherwise.
		 */
		get_spell_checking_enabled(): boolean;
		/**
		 * Get the the list of spell checking languages associated with
		 * #context, or %NULL if no languages have been previously set.
		 * 
		 * See webkit_web_context_set_spell_checking_languages() for more
		 * details on the format of the languages in the list.
		 * @returns A %NULL-terminated
		 *    array of languages if available, or %NULL otherwise.
		 */
		get_spell_checking_languages(): string[];
		/**
		 * Get the TLS errors policy of #context
		 * @returns a #WebKitTLSErrorsPolicy
		 */
		get_tls_errors_policy(): TLSErrorsPolicy;
		/**
		 * Get the #WebKitWebContext:use-system-appearance-for-scrollbars property.
		 * @returns %TRUE if scrollbars are rendering using the system appearance, or %FALSE otherwise
		 */
		get_use_system_appearance_for_scrollbars(): boolean;
		/**
		 * Gets the maximum number of web processes that can be created at the same time for the #context.
		 * 
		 * This function is now deprecated and always returns 0 (no limit). See also webkit_web_context_set_web_process_count_limit().
		 * @returns the maximum limit of web processes, or 0 if there isn't a limit.
		 */
		get_web_process_count_limit(): number;
		/**
		 * Get the #WebKitWebsiteDataManager of #context.
		 * @returns a #WebKitWebsiteDataManager
		 */
		get_website_data_manager(): WebsiteDataManager;
		/**
		 * Sets initial desktop notification permissions for the #context.
		 * #allowed_origins and #disallowed_origins must each be #GList of
		 * #WebKitSecurityOrigin objects representing origins that will,
		 * respectively, either always or never have permission to show desktop
		 * notifications. No #WebKitNotificationPermissionRequest will ever be
		 * generated for any of the security origins represented in
		 * #allowed_origins or #disallowed_origins. This function is necessary
		 * because some webpages proactively check whether they have permission
		 * to display notifications without ever creating a permission request.
		 * 
		 * This function only affects web processes that have not already been
		 * created. The best time to call it is when handling
		 * #WebKitWebContext::initialize-notification-permissions so as to
		 * ensure that new web processes receive the most recent set of
		 * permissions.
		 * @param allowed_origins a #GList of security origins
		 * @param disallowed_origins a #GList of security origins
		 */
		initialize_notification_permissions(allowed_origins: GLib.List, disallowed_origins: GLib.List): void;
		/**
		 * Get whether automation is allowed in #context.
		 * See also webkit_web_context_set_automation_allowed().
		 * @returns %TRUE if automation is allowed or %FALSE otherwise.
		 */
		is_automation_allowed(): boolean;
		/**
		 * Get whether a #WebKitWebContext is ephemeral.
		 * @returns %TRUE if #context is ephemeral or %FALSE otherwise.
		 */
		is_ephemeral(): boolean;
		/**
		 * Resolve the domain name of the given #hostname in advance, so that if a URI
		 * of #hostname is requested the load will be performed more quickly.
		 * @param hostname a hostname to be resolved
		 */
		prefetch_dns(hostname: string): void;
		/**
		 * Register #scheme in #context, so that when an URI request with #scheme is made in the
		 * #WebKitWebContext, the #WebKitURISchemeRequestCallback registered will be called with a
		 * #WebKitURISchemeRequest.
		 * It is possible to handle URI scheme requests asynchronously, by calling g_object_ref() on the
		 * #WebKitURISchemeRequest and calling webkit_uri_scheme_request_finish() later
		 * when the data of the request is available or
		 * webkit_uri_scheme_request_finish_error() in case of error.
		 * 
		 * <informalexample><programlisting>
		 * static void
		 * about_uri_scheme_request_cb (WebKitURISchemeRequest *request,
		 *                              gpointer                user_data)
		 * {
		 *     GInputStream *stream;
		 *     gsize         stream_length;
		 *     const gchar  *path;
		 * 
		 *     path = webkit_uri_scheme_request_get_path (request);
		 *     if (!g_strcmp0 (path, "memory")) {
		 *         /<!-- -->* Create a GInputStream with the contents of memory about page, and set its length to stream_length *<!-- -->/
		 *     } else if (!g_strcmp0 (path, "applications")) {
		 *         /<!-- -->* Create a GInputStream with the contents of applications about page, and set its length to stream_length *<!-- -->/
		 *     } else if (!g_strcmp0 (path, "example")) {
		 *         gchar *contents;
		 * 
		 *         contents = g_strdup_printf ("&lt;html&gt;&lt;body&gt;&lt;p&gt;Example about page&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;");
		 *         stream_length = strlen (contents);
		 *         stream = g_memory_input_stream_new_from_data (contents, stream_length, g_free);
		 *     } else {
		 *         GError *error;
		 * 
		 *         error = g_error_new (ABOUT_HANDLER_ERROR, ABOUT_HANDLER_ERROR_INVALID, "Invalid about:%s page.", path);
		 *         webkit_uri_scheme_request_finish_error (request, error);
		 *         g_error_free (error);
		 *         return;
		 *     }
		 *     webkit_uri_scheme_request_finish (request, stream, stream_length, "text/html");
		 *     g_object_unref (stream);
		 * }
		 * </programlisting></informalexample>
		 * @param scheme the network scheme to register
		 * @param callback a #WebKitURISchemeRequestCallback
		 * @param user_data_destroy_func destroy notify for #user_data
		 */
		register_uri_scheme(scheme: string, callback: URISchemeRequestCallback, user_data_destroy_func: GLib.DestroyNotify): void;
		/**
		 * Send #message to all #WebKitWebExtension<!-- -->s associated to #context.
		 * If #message is floating, it's consumed.
		 * @param message a #WebKitUserMessage
		 */
		send_message_to_all_extensions(message: UserMessage): void;
		/**
		 * Set an additional directory where WebKit will look for plugins.
		 * @param directory the directory to add
		 */
		set_additional_plugins_directory(directory: string): void;
		/**
		 * Set whether automation is allowed in #context. When automation is enabled the browser could
		 * be controlled by another process by requesting an automation session. When a new automation
		 * session is requested the signal #WebKitWebContext::automation-started is emitted.
		 * Automation is disabled by default, so you need to explicitly call this method passing %TRUE
		 * to enable it.
		 * 
		 * Note that only one #WebKitWebContext can have automation enabled, so this will do nothing
		 * if there's another #WebKitWebContext with automation already enabled.
		 * @param allowed value to set
		 */
		set_automation_allowed(allowed: boolean): void;
		/**
		 * Specifies a usage model for WebViews, which WebKit will use to
		 * determine its caching behavior. All web views follow the cache
		 * model. This cache model determines the RAM and disk space to use
		 * for caching previously viewed content .
		 * 
		 * Research indicates that users tend to browse within clusters of
		 * documents that hold resources in common, and to revisit previously
		 * visited documents. WebKit and the frameworks below it include
		 * built-in caches that take advantage of these patterns,
		 * substantially improving document load speed in browsing
		 * situations. The WebKit cache model controls the behaviors of all of
		 * these caches, including various WebCore caches.
		 * 
		 * Browsers can improve document load speed substantially by
		 * specifying %WEBKIT_CACHE_MODEL_WEB_BROWSER. Applications without a
		 * browsing interface can reduce memory usage substantially by
		 * specifying %WEBKIT_CACHE_MODEL_DOCUMENT_VIEWER. The default value is
		 * %WEBKIT_CACHE_MODEL_WEB_BROWSER.
		 * @param cache_model a #WebKitCacheModel
		 */
		set_cache_model(cache_model: CacheModel): void;
		/**
		 * Set the directory where disk cache files will be stored
		 * This method must be called before loading anything in this context, otherwise
		 * it will not have any effect.
		 * 
		 * Note that this method overrides the directory set in the #WebKitWebsiteDataManager,
		 * but it doesn't change the value returned by webkit_website_data_manager_get_disk_cache_directory()
		 * since the #WebKitWebsiteDataManager is immutable.
		 * @param directory the directory to set
		 */
		set_disk_cache_directory(directory: string): void;
		/**
		 * Set the directory path to be used to store the favicons database
		 * for #context on disk. Passing %NULL as #path means using the
		 * default directory for the platform (see g_get_user_cache_dir()).
		 * 
		 * Calling this method also means enabling the favicons database for
		 * its use from the applications, so that's why it's expected to be
		 * called only once. Further calls for the same instance of
		 * #WebKitWebContext won't cause any effect.
		 * @param path an absolute path to the icon database
		 * directory or %NULL to use the defaults
		 */
		set_favicon_database_directory(path: string): void;
		/**
		 * Set the network proxy settings to be used by connections started in #context.
		 * By default %WEBKIT_NETWORK_PROXY_MODE_DEFAULT is used, which means that the
		 * system settings will be used (g_proxy_resolver_get_default()).
		 * If you want to override the system default settings, you can either use
		 * %WEBKIT_NETWORK_PROXY_MODE_NO_PROXY to make sure no proxies are used at all,
		 * or %WEBKIT_NETWORK_PROXY_MODE_CUSTOM to provide your own proxy settings.
		 * When #proxy_mode is %WEBKIT_NETWORK_PROXY_MODE_CUSTOM #proxy_settings must be
		 * a valid #WebKitNetworkProxySettings; otherwise, #proxy_settings must be %NULL.
		 * @param proxy_mode a #WebKitNetworkProxyMode
		 * @param proxy_settings a #WebKitNetworkProxySettings, or %NULL
		 */
		set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings: NetworkProxySettings): void;
		/**
		 * Set the list of preferred languages, sorted from most desirable
		 * to least desirable. The list will be used to build the "Accept-Language"
		 * header that will be included in the network requests started by
		 * the #WebKitWebContext.
		 * @param languages a %NULL-terminated list of language identifiers
		 */
		set_preferred_languages(languages: string[]): void;
		/**
		 * Specifies a process model for WebViews, which WebKit will use to
		 * determine how auxiliary processes are handled.
		 * 
		 * %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES will use
		 * one process per view most of the time, while still allowing for web
		 * views to share a process when needed (for example when different
		 * views interact with each other). Using this model, when a process
		 * hangs or crashes, only the WebViews using it stop working, while
		 * the rest of the WebViews in the application will still function
		 * normally.
		 * 
		 * %WEBKIT_PROCESS_MODEL_SHARED_SECONDARY_PROCESS is deprecated since 2.26,
		 * using it has no effect for security reasons.
		 * 
		 * This method **must be called before any web process has been created**,
		 * as early as possible in your application. Calling it later will make
		 * your application crash.
		 * @param process_model a #WebKitProcessModel
		 */
		set_process_model(process_model: ProcessModel): void;
		/**
		 * Set whether WebKit subprocesses will be sandboxed, limiting access to the system.
		 * 
		 * This method **must be called before any web process has been created**,
		 * as early as possible in your application. Calling it later is a fatal error.
		 * 
		 * This is only implemented on Linux and is a no-op otherwise.
		 * @param enabled if %TRUE enable sandboxing
		 */
		set_sandbox_enabled(enabled: boolean): void;
		/**
		 * Enable or disable the spell checking feature.
		 * @param enabled Value to be set
		 */
		set_spell_checking_enabled(enabled: boolean): void;
		/**
		 * Set the list of spell checking languages to be used for spell
		 * checking.
		 * 
		 * The locale string typically is in the form lang_COUNTRY, where lang
		 * is an ISO-639 language code, and COUNTRY is an ISO-3166 country code.
		 * For instance, sv_FI for Swedish as written in Finland or pt_BR
		 * for Portuguese as written in Brazil.
		 * 
		 * You need to call this function with a valid list of languages at
		 * least once in order to properly enable the spell checking feature
		 * in WebKit.
		 * @param languages a %NULL-terminated list of spell checking languages
		 */
		set_spell_checking_languages(languages: string[]): void;
		/**
		 * Set the TLS errors policy of #context as #policy
		 * @param policy a #WebKitTLSErrorsPolicy
		 */
		set_tls_errors_policy(policy: TLSErrorsPolicy): void;
		/**
		 * Set the #WebKitWebContext:use-system-appearance-for-scrollbars property.
		 * @param enabled value to set
		 */
		set_use_system_appearance_for_scrollbars(enabled: boolean): void;
		/**
		 * Set the directory where WebKit will look for Web Extensions.
		 * This method must be called before loading anything in this context,
		 * otherwise it will not have any effect. You can connect to
		 * #WebKitWebContext::initialize-web-extensions to call this method
		 * before anything is loaded.
		 * @param directory the directory to add
		 */
		set_web_extensions_directory(directory: string): void;
		/**
		 * Set user data to be passed to Web Extensions on initialization.
		 * The data will be passed to the
		 * #WebKitWebExtensionInitializeWithUserDataFunction.
		 * This method must be called before loading anything in this context,
		 * otherwise it will not have any effect. You can connect to
		 * #WebKitWebContext::initialize-web-extensions to call this method
		 * before anything is loaded.
		 */
		set_web_extensions_initialization_user_data(): void;
		/**
		 * Sets the maximum number of web processes that can be created at the same time for the #context.
		 * The default value is 0 and means no limit.
		 * 
		 * This function is now deprecated and does nothing for security reasons.
		 * @param limit the maximum number of web processes
		 */
		set_web_process_count_limit(limit: number): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebContext} instead.
	 */
	type WebContextMixin = IWebContext & GObject.IObject;

	interface WebContext extends WebContextMixin {}

	class WebContext {
		public constructor();
		/**
		 * Create a new #WebKitWebContext
		 * @returns a newly created #WebKitWebContext
		 */
		public static new(): WebContext;
		/**
		 * Create a new ephemeral #WebKitWebContext. An ephemeral #WebKitWebContext is a context
		 * created with an ephemeral #WebKitWebsiteDataManager. This is just a convenient method
		 * to create ephemeral contexts without having to create your own #WebKitWebsiteDataManager.
		 * All #WebKitWebView<!-- -->s associated with this context will also be ephemeral. Websites will
		 * not store any data in the client storage.
		 * This is normally used to implement private instances.
		 * @returns a new ephemeral #WebKitWebContext.
		 */
		public static new_ephemeral(): WebContext;
		/**
		 * Create a new #WebKitWebContext with a #WebKitWebsiteDataManager.
		 * @param manager a #WebKitWebsiteDataManager
		 * @returns a newly created #WebKitWebContext
		 */
		public static new_with_website_data_manager(manager: WebsiteDataManager): WebContext;
		/**
		 * Gets the default web context
		 * @returns a #WebKitWebContext
		 */
		public static get_default(): WebContext;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebInspector} instead.
	 */
	interface IWebInspector {
		/**
		 * Request #inspector to be attached. The signal #WebKitWebInspector::attach
		 * will be emitted. If the inspector is already attached it does nothing.
		 */
		attach(): void;
		/**
		 * Request #inspector to be closed.
		 */
		close(): void;
		/**
		 * Request #inspector to be detached. The signal #WebKitWebInspector::detach
		 * will be emitted. If the inspector is already detached it does nothing.
		 */
		detach(): void;
		/**
		 * Get the height that the inspector view should have when
		 * it's attached. If the inspector view is not attached this
		 * returns 0.
		 * @returns the height of the inspector view when attached
		 */
		get_attached_height(): number;
		/**
		 * Whether the #inspector can be attached to the same window that contains
		 * the inspected view.
		 * @returns %TRUE if there is enough room for the inspector view inside the
		 *     window that contains the inspected view, or %FALSE otherwise.
		 */
		get_can_attach(): boolean;
		/**
		 * Get the URI that is currently being inspected. This can be %NULL if
		 * nothing has been loaded yet in the inspected view, if the inspector
		 * has been closed or when inspected view was loaded from a HTML string
		 * instead of a URI.
		 * @returns the URI that is currently being inspected or %NULL
		 */
		get_inspected_uri(): string;
		/**
		 * Get the #WebKitWebViewBase used to display the inspector.
		 * This might be %NULL if the inspector hasn't been loaded yet,
		 * or it has been closed.
		 * @returns the #WebKitWebViewBase used to display the inspector or %NULL
		 */
		get_web_view(): WebViewBase;
		/**
		 * Whether the #inspector view is currently attached to the same window that contains
		 * the inspected view.
		 * @returns %TRUE if #inspector is currently attached or %FALSE otherwise
		 */
		is_attached(): boolean;
		/**
		 * Request #inspector to be shown.
		 */
		show(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebInspector} instead.
	 */
	type WebInspectorMixin = IWebInspector & GObject.IObject;

	interface WebInspector extends WebInspectorMixin {}

	class WebInspector {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebResource} instead.
	 */
	interface IWebResource {
		/**
		 * Asynchronously get the raw data for #resource.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_web_resource_get_data_finish() to get the result of the operation.
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		get_data(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_resource_get_data().
		 * @param result a #GAsyncResult
		 * @param length return location for the length of the resource data
		 * @returns a
		 *    string with the data of #resource, or %NULL in case of error. if #length
		 *    is not %NULL, the size of the data will be assigned to it.
		 */
		get_data_finish(result: Gio.AsyncResult, length: number): number[];
		/**
		 * Retrieves the #WebKitURIResponse of the resource load operation.
		 * This method returns %NULL if called before the response
		 * is received from the server. You can connect to notify::response
		 * signal to be notified when the response is received.
		 * @returns the #WebKitURIResponse, or %NULL if
		 *     the response hasn't been received yet.
		 */
		get_response(): URIResponse;
		/**
		 * Returns the current active URI of #resource. The active URI might change during
		 * a load operation:
		 * 
		 * <orderedlist>
		 * <listitem><para>
		 *   When the resource load starts, the active URI is the requested URI
		 * </para></listitem>
		 * <listitem><para>
		 *   When the initial request is sent to the server, #WebKitWebResource::sent-request
		 *   signal is emitted without a redirected response, the active URI is the URI of
		 *   the request sent to the server.
		 * </para></listitem>
		 * <listitem><para>
		 *   In case of a server redirection, #WebKitWebResource::sent-request signal
		 *   is emitted again with a redirected response, the active URI is the URI the request
		 *   was redirected to.
		 * </para></listitem>
		 * <listitem><para>
		 *   When the response is received from the server, the active URI is the final
		 *   one and it will not change again.
		 * </para></listitem>
		 * </orderedlist>
		 * 
		 * You can monitor the active URI by connecting to the notify::uri
		 * signal of #resource.
		 * @returns the current active URI of #resource
		 */
		get_uri(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebResource} instead.
	 */
	type WebResourceMixin = IWebResource & GObject.IObject;

	interface WebResource extends WebResourceMixin {}

	class WebResource {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebView} instead.
	 */
	interface IWebView {
		/**
		 * Asynchronously check if it is possible to execute the given editing command.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_web_view_can_execute_editing_command_finish() to get the result of the operation.
		 * @param command the command to check
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		can_execute_editing_command(command: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_view_can_execute_editing_command().
		 * @param result a #GAsyncResult
		 * @returns %TRUE if the editing command can be executed or %FALSE otherwise
		 */
		can_execute_editing_command_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Determines whether #web_view has a previous history item.
		 * @returns %TRUE if able to move back or %FALSE otherwise.
		 */
		can_go_back(): boolean;
		/**
		 * Determines whether #web_view has a next history item.
		 * @returns %TRUE if able to move forward or %FALSE otherwise.
		 */
		can_go_forward(): boolean;
		/**
		 * Whether or not a MIME type can be displayed in #web_view.
		 * @param mime_type a MIME type
		 * @returns %TRUE if the MIME type #mime_type can be displayed or %FALSE otherwise
		 */
		can_show_mime_type(mime_type: string): boolean;
		/**
		 * Requests downloading of the specified URI string for #web_view.
		 * @param uri the URI to download
		 * @returns a new #WebKitDownload representing
		 *    the download operation.
		 */
		download_uri(uri: string): Download;
		/**
		 * Request to execute the given #command for #web_view. You can use
		 * webkit_web_view_can_execute_editing_command() to check whether
		 * it's possible to execute the command.
		 * @param command the command to execute
		 */
		execute_editing_command(command: string): void;
		/**
		 * Request to execute the given #command with #argument for #web_view. You can use
		 * webkit_web_view_can_execute_editing_command() to check whether
		 * it's possible to execute the command.
		 * @param command the command to execute
		 * @param _argument the command argument
		 */
		execute_editing_command_with_argument(command: string, _argument: string): void;
		/**
		 * Get the presentation type of #WebKitWebView when created for automation.
		 * @returns a #WebKitAutomationBrowsingContextPresentation.
		 */
		get_automation_presentation_type(): AutomationBrowsingContextPresentation;
		/**
		 * Obtains the #WebKitBackForwardList associated with the given #WebKitWebView. The
		 * #WebKitBackForwardList is owned by the #WebKitWebView.
		 * @returns the #WebKitBackForwardList
		 */
		get_back_forward_list(): BackForwardList;
		/**
		 * Gets the color that is used to draw the #web_view background before
		 * the actual contents are rendered.
		 * For more information see also webkit_web_view_set_background_color()
		 * @param rgba a #GdkRGBA to fill in with the background color
		 */
		get_background_color(rgba: Gdk.RGBA): void;
		/**
		 * Gets the web context of #web_view.
		 * @returns the #WebKitWebContext of the view
		 */
		get_context(): WebContext;
		/**
		 * Returns the current custom character encoding name of #web_view.
		 * @returns the current custom character encoding name or %NULL if no
		 *    custom character encoding has been set.
		 */
		get_custom_charset(): string;
		/**
		 * Gets the web editor state of #web_view.
		 * @returns the #WebKitEditorState of the view
		 */
		get_editor_state(): EditorState;
		/**
		 * Gets the value of the #WebKitWebView:estimated-load-progress property.
		 * You can monitor the estimated progress of a load operation by
		 * connecting to the notify::estimated-load-progress signal of #web_view.
		 * @returns an estimate of the of the percent complete for a document
		 *     load as a range from 0.0 to 1.0.
		 */
		get_estimated_load_progress(): number;
		/**
		 * Returns favicon currently associated to #web_view, if any. You can
		 * connect to notify::favicon signal of #web_view to be notified when
		 * the favicon is available.
		 * @returns a pointer to a #cairo_surface_t with the
		 *    favicon or %NULL if there's no icon associated with #web_view.
		 */
		get_favicon(): cairo.Surface;
		/**
		 * Gets the #WebKitFindController that will allow the caller to query
		 * the #WebKitWebView for the text to look for.
		 * @returns the #WebKitFindController associated to
		 * this particular #WebKitWebView.
		 */
		get_find_controller(): FindController;
		/**
		 * Get the #WebKitInputMethodContext currently in use by #web_view, or %NULL if no input method is being used.
		 * @returns a #WebKitInputMethodContext, or %NULL
		 */
		get_input_method_context(): InputMethodContext;
		/**
		 * Get the #WebKitWebInspector associated to #web_view
		 * @returns the #WebKitWebInspector of #web_view
		 */
		get_inspector(): WebInspector;
		/**
		 * Gets the mute state of #web_view.
		 * @returns %TRUE if #web_view audio is muted or %FALSE is audio is not muted.
		 */
		get_is_muted(): boolean;
		/**
		 * Get the global JavaScript context used by #web_view to deserialize the
		 * result values of scripts executed with webkit_web_view_run_javascript().
		 * @returns the <function>JSGlobalContextRef</function> used by #web_view to deserialize
		 *    the result values of scripts.
		 */
		get_javascript_global_context(): any;
		/**
		 * Return the main resource of #web_view.
		 * @returns the main #WebKitWebResource of the view
		 *    or %NULL if nothing has been loaded.
		 */
		get_main_resource(): WebResource;
		/**
		 * Get the identifier of the #WebKitWebPage corresponding to
		 * the #WebKitWebView
		 * @returns the page ID of #web_view.
		 */
		get_page_id(): number;
		/**
		 * Gets the current session state of #web_view
		 * @returns a #WebKitWebViewSessionState
		 */
		get_session_state(): WebViewSessionState;
		/**
		 * Gets the #WebKitSettings currently applied to #web_view.
		 * If no other #WebKitSettings have been explicitly applied to
		 * #web_view with webkit_web_view_set_settings(), the default
		 * #WebKitSettings will be returned. This method always returns
		 * a valid #WebKitSettings object.
		 * To modify any of the #web_view settings, you can either create
		 * a new #WebKitSettings object with webkit_settings_new(), setting
		 * the desired preferences, and then replace the existing #web_view
		 * settings with webkit_web_view_set_settings() or get the existing
		 * #web_view settings and update it directly. #WebKitSettings objects
		 * can be shared by multiple #WebKitWebView<!-- -->s, so modifying
		 * the settings of a #WebKitWebView would affect other
		 * #WebKitWebView<!-- -->s using the same #WebKitSettings.
		 * @returns the #WebKitSettings attached to #web_view
		 */
		get_settings(): Settings;
		/**
		 * Asynchronously retrieves a snapshot of #web_view for #region.
		 * #options specifies how the snapshot should be rendered.
		 * 
		 * When the operation is finished, #callback will be called. You must
		 * call webkit_web_view_get_snapshot_finish() to get the result of the
		 * operation.
		 * @param region the #WebKitSnapshotRegion for this snapshot
		 * @param options #WebKitSnapshotOptions for the snapshot
		 * @param cancellable a #GCancellable
		 * @param callback a #GAsyncReadyCallback
		 */
		get_snapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finishes an asynchronous operation started with webkit_web_view_get_snapshot().
		 * @param result a #GAsyncResult
		 * @returns a #cairo_surface_t with the retrieved snapshot or %NULL in error.
		 */
		get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface;
		/**
		 * Gets the value of the #WebKitWebView:title property.
		 * You can connect to notify::title signal of #web_view to
		 * be notified when the title has been received.
		 * @returns The main frame document title of #web_view.
		 */
		get_title(): string;
		/**
		 * Retrieves the #GTlsCertificate associated with the main resource of #web_view,
		 * and the #GTlsCertificateFlags showing what problems, if any, have been found
		 * with that certificate.
		 * If the connection is not HTTPS, this function returns %FALSE.
		 * This function should be called after a response has been received from the
		 * server, so you can connect to #WebKitWebView::load-changed and call this function
		 * when it's emitted with %WEBKIT_LOAD_COMMITTED event.
		 * 
		 * Note that this function provides no information about the security of the web
		 * page if the current #WebKitTLSErrorsPolicy is #WEBKIT_TLS_ERRORS_POLICY_IGNORE,
		 * as subresources of the page may be controlled by an attacker. This function
		 * may safely be used to determine the security status of the current page only
		 * if the current #WebKitTLSErrorsPolicy is #WEBKIT_TLS_ERRORS_POLICY_FAIL, in
		 * which case subresources that fail certificate verification will be blocked.
		 * @param certificate return location for a #GTlsCertificate
		 * @param errors return location for a #GTlsCertificateFlags the verification status of #certificate
		 * @returns %TRUE if the #web_view connection uses HTTPS and a response has been received
		 *    from the server, or %FALSE otherwise.
		 */
		get_tls_info(certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;
		/**
		 * Returns the current active URI of #web_view. The active URI might change during
		 * a load operation:
		 * 
		 * <orderedlist>
		 * <listitem><para>
		 *   When nothing has been loaded yet on #web_view the active URI is %NULL.
		 * </para></listitem>
		 * <listitem><para>
		 *   When a new load operation starts the active URI is the requested URI:
		 *   <itemizedlist>
		 *   <listitem><para>
		 *     If the load operation was started by webkit_web_view_load_uri(),
		 *     the requested URI is the given one.
		 *   </para></listitem>
		 *   <listitem><para>
		 *     If the load operation was started by webkit_web_view_load_html(),
		 *     the requested URI is "about:blank".
		 *   </para></listitem>
		 *   <listitem><para>
		 *     If the load operation was started by webkit_web_view_load_alternate_html(),
		 *     the requested URI is content URI provided.
		 *   </para></listitem>
		 *   <listitem><para>
		 *     If the load operation was started by webkit_web_view_go_back() or
		 *     webkit_web_view_go_forward(), the requested URI is the original URI
		 *     of the previous/next item in the #WebKitBackForwardList of #web_view.
		 *   </para></listitem>
		 *   <listitem><para>
		 *     If the load operation was started by
		 *     webkit_web_view_go_to_back_forward_list_item(), the requested URI
		 *     is the opriginal URI of the given #WebKitBackForwardListItem.
		 *   </para></listitem>
		 *   </itemizedlist>
		 * </para></listitem>
		 * <listitem><para>
		 *   If there is a server redirection during the load operation,
		 *   the active URI is the redirected URI. When the signal
		 *   #WebKitWebView::load-changed is emitted with %WEBKIT_LOAD_REDIRECTED
		 *   event, the active URI is already updated to the redirected URI.
		 * </para></listitem>
		 * <listitem><para>
		 *   When the signal #WebKitWebView::load-changed is emitted
		 *   with %WEBKIT_LOAD_COMMITTED event, the active URI is the final
		 *   one and it will not change unless a new load operation is started
		 *   or a navigation action within the same page is performed.
		 * </para></listitem>
		 * </orderedlist>
		 * 
		 * You can monitor the active URI by connecting to the notify::uri
		 * signal of #web_view.
		 * @returns the current active URI of #web_view or %NULL
		 *    if nothing has been loaded yet.
		 */
		get_uri(): string;
		/**
		 * Gets the user content manager associated to #web_view.
		 * @returns the #WebKitUserContentManager associated with the view
		 */
		get_user_content_manager(): UserContentManager;
		/**
		 * Get the #WebKitWebsiteDataManager associated to #web_view. If #web_view is not ephemeral,
		 * the returned #WebKitWebsiteDataManager will be the same as the #WebKitWebsiteDataManager
		 * of #web_view's #WebKitWebContext.
		 * @returns a #WebKitWebsiteDataManager
		 */
		get_website_data_manager(): WebsiteDataManager;
		/**
		 * Gets the default website policies set on construction in the
		 * #web_view. These can be overridden on a per-origin basis via the
		 * #WebKitWebView::decide-policy signal handler.
		 * 
		 * See also webkit_policy_decision_use_with_policies().
		 * @returns the default #WebKitWebsitePolicies
		 *     associated with the view.
		 */
		get_website_policies(): WebsitePolicies;
		/**
		 * Get the #WebKitWindowProperties object containing the properties
		 * that the window containing #web_view should have.
		 * @returns the #WebKitWindowProperties of #web_view
		 */
		get_window_properties(): WindowProperties;
		/**
		 * Get the zoom level of #web_view, i.e. the factor by which the
		 * view contents are scaled with respect to their original size.
		 * @returns the current zoom level of #web_view
		 */
		get_zoom_level(): number;
		/**
		 * Loads the previous history item.
		 * You can monitor the load operation by connecting to
		 * #WebKitWebView::load-changed signal.
		 */
		go_back(): void;
		/**
		 * Loads the next history item.
		 * You can monitor the load operation by connecting to
		 * #WebKitWebView::load-changed signal.
		 */
		go_forward(): void;
		/**
		 * Loads the specific history item #list_item.
		 * You can monitor the load operation by connecting to
		 * #WebKitWebView::load-changed signal.
		 * @param list_item a #WebKitBackForwardListItem
		 */
		go_to_back_forward_list_item(list_item: BackForwardListItem): void;
		/**
		 * Get whether a #WebKitWebView was created with #WebKitWebView:is-controlled-by-automation
		 * property enabled. Only #WebKitWebView<!-- -->s controlled by automation can be used in an
		 * automation session.
		 * @returns %TRUE if #web_view is controlled by automation, or %FALSE otherwise.
		 */
		is_controlled_by_automation(): boolean;
		is_editable(): boolean;
		/**
		 * Get whether a #WebKitWebView is ephemeral. To create an ephemeral #WebKitWebView you need to
		 * use g_object_new() and pass is-ephemeral property with %TRUE value. See
		 * #WebKitWebView:is-ephemeral for more details.
		 * If #web_view was created with a ephemeral #WebKitWebView:related-view or an
		 * ephemeral #WebKitWebView:web-context it will also be ephemeral.
		 * @returns %TRUE if #web_view is ephemeral or %FALSE otherwise.
		 */
		is_ephemeral(): boolean;
		/**
		 * Gets the value of the #WebKitWebView:is-loading property.
		 * You can monitor when a #WebKitWebView is loading a page by connecting to
		 * notify::is-loading signal of #web_view. This is useful when you are
		 * interesting in knowing when the view is loading something but not in the
		 * details about the status of the load operation, for example to start a spinner
		 * when the view is loading a page and stop it when it finishes.
		 * @returns %TRUE if #web_view is loading a page or %FALSE otherwise.
		 */
		is_loading(): boolean;
		/**
		 * Gets the value of the #WebKitWebView:is-playing-audio property.
		 * You can monitor when a page in a #WebKitWebView is playing audio by
		 * connecting to the notify::is-playing-audio signal of #web_view. This
		 * is useful when the application wants to provide visual feedback when a
		 * page is producing sound.
		 * @returns %TRUE if a page in #web_view is playing audio or %FALSE otherwise.
		 */
		is_playing_audio(): boolean;
		/**
		 * Load the given #content string for the URI #content_uri.
		 * This allows clients to display page-loading errors in the #WebKitWebView itself.
		 * When this method is called from #WebKitWebView::load-failed signal to show an
		 * error page, then the back-forward list is maintained appropriately.
		 * For everything else this method works the same way as webkit_web_view_load_html().
		 * @param content the new content to display as the main page of the #web_view
		 * @param content_uri the URI for the alternate page content
		 * @param base_uri the base URI for relative locations or %NULL
		 */
		load_alternate_html(content: string, content_uri: string, base_uri: string): void;
		/**
		 * Load the specified #bytes into #web_view using the given #mime_type and #encoding.
		 * When #mime_type is %NULL, it defaults to "text/html".
		 * When #encoding is %NULL, it defaults to "UTF-8".
		 * When #base_uri is %NULL, it defaults to "about:blank".
		 * You can monitor the load operation by connecting to #WebKitWebView::load-changed signal.
		 * @param bytes input data to load
		 * @param mime_type the MIME type of #bytes, or %NULL
		 * @param encoding the character encoding of #bytes, or %NULL
		 * @param base_uri the base URI for relative locations or %NULL
		 */
		load_bytes(bytes: GLib.Bytes, mime_type: string, encoding: string, base_uri: string): void;
		/**
		 * Load the given #content string with the specified #base_uri.
		 * If #base_uri is not %NULL, relative URLs in the #content will be
		 * resolved against #base_uri and absolute local paths must be children of the #base_uri.
		 * For security reasons absolute local paths that are not children of #base_uri
		 * will cause the web process to terminate.
		 * If you need to include URLs in #content that are local paths in a different
		 * directory than #base_uri you can build a data URI for them. When #base_uri is %NULL,
		 * it defaults to "about:blank". The mime type of the document will be "text/html".
		 * You can monitor the load operation by connecting to #WebKitWebView::load-changed signal.
		 * @param content The HTML string to load
		 * @param base_uri The base URI for relative locations or %NULL
		 */
		load_html(content: string, base_uri: string): void;
		/**
		 * Load the specified #plain_text string into #web_view. The mime type of
		 * document will be "text/plain". You can monitor the load
		 * operation by connecting to #WebKitWebView::load-changed signal.
		 * @param plain_text The plain text to load
		 */
		load_plain_text(plain_text: string): void;
		/**
		 * Requests loading of the specified #WebKitURIRequest.
		 * You can monitor the load operation by connecting to
		 * #WebKitWebView::load-changed signal.
		 * @param request a #WebKitURIRequest to load
		 */
		load_request(request: URIRequest): void;
		/**
		 * Requests loading of the specified URI string.
		 * You can monitor the load operation by connecting to
		 * #WebKitWebView::load-changed signal.
		 * @param uri an URI string
		 */
		load_uri(uri: string): void;
		/**
		 * Reloads the current contents of #web_view.
		 * See also webkit_web_view_reload_bypass_cache().
		 */
		reload(): void;
		/**
		 * Reloads the current contents of #web_view without
		 * using any cached data.
		 */
		reload_bypass_cache(): void;
		/**
		 * Restore the #web_view session state from #state
		 * @param state a #WebKitWebViewSessionState
		 */
		restore_session_state(state: WebViewSessionState): void;
		/**
		 * Asynchronously run #script in the context of the current page in #web_view. If
		 * WebKitSettings:enable-javascript is FALSE, this method will do nothing.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_web_view_run_javascript_finish() to get the result of the operation.
		 * @param script the script to run
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the script finished
		 */
		run_javascript(script: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_view_run_javascript().
		 * 
		 * This is an example of using webkit_web_view_run_javascript() with a script returning
		 * a string:
		 * 
		 * <informalexample><programlisting>
		 * static void
		 * web_view_javascript_finished (GObject      *object,
		 *                               GAsyncResult *result,
		 *                               gpointer      user_data)
		 * {
		 *     WebKitJavascriptResult *js_result;
		 *     JSCValue               *value;
		 *     GError                 *error = NULL;
		 * 
		 *     js_result = webkit_web_view_run_javascript_finish (WEBKIT_WEB_VIEW (object), result, &error);
		 *     if (!js_result) {
		 *         g_warning ("Error running javascript: %s", error->message);
		 *         g_error_free (error);
		 *         return;
		 *     }
		 * 
		 *     value = webkit_javascript_result_get_js_value (js_result);
		 *     if (jsc_value_is_string (value)) {
		 *         JSCException *exception;
		 *         gchar        *str_value;
		 * 
		 *         str_value = jsc_value_to_string (value);
		 *         exception = jsc_context_get_exception (jsc_value_get_context (value));
		 *         if (exception)
		 *             g_warning ("Error running javascript: %s", jsc_exception_get_message (exception));
		 *         else
		 *             g_print ("Script result: %s\n", str_value);
		 *         g_free (str_value);
		 *     } else {
		 *         g_warning ("Error running javascript: unexpected return value");
		 *     }
		 *     webkit_javascript_result_unref (js_result);
		 * }
		 * 
		 * static void
		 * web_view_get_link_url (WebKitWebView *web_view,
		 *                        const gchar   *link_id)
		 * {
		 *     gchar *script;
		 * 
		 *     script = g_strdup_printf ("window.document.getElementById('%s').href;", link_id);
		 *     webkit_web_view_run_javascript (web_view, script, NULL, web_view_javascript_finished, NULL);
		 *     g_free (script);
		 * }
		 * </programlisting></informalexample>
		 * @param result a #GAsyncResult
		 * @returns a #WebKitJavascriptResult with the result of the last executed statement in #script
		 *    or %NULL in case of error
		 */
		run_javascript_finish(result: Gio.AsyncResult): JavascriptResult;
		/**
		 * Asynchronously run the script from #resource in the context of the
		 * current page in #web_view.
		 * 
		 * When the operation is finished, #callback will be called. You can
		 * then call webkit_web_view_run_javascript_from_gresource_finish() to get the result
		 * of the operation.
		 * @param resource the location of the resource to load
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the script finished
		 */
		run_javascript_from_gresource(resource: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_view_run_javascript_from_gresource().
		 * 
		 * Check webkit_web_view_run_javascript_finish() for a usage example.
		 * @param result a #GAsyncResult
		 * @returns a #WebKitJavascriptResult with the result of the last executed statement in #script
		 *    or %NULL in case of error
		 */
		run_javascript_from_gresource_finish(result: Gio.AsyncResult): JavascriptResult;
		/**
		 * Asynchronously run #script in the script world with name #world_name of the current page context in #web_view.
		 * If WebKitSettings:enable-javascript is FALSE, this method will do nothing.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_web_view_run_javascript_in_world_finish() to get the result of the operation.
		 * @param script the script to run
		 * @param world_name the name of a #WebKitScriptWorld
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the script finished
		 */
		run_javascript_in_world(script: string, world_name: string, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_view_run_javascript_in_world().
		 * @param result a #GAsyncResult
		 * @returns a #WebKitJavascriptResult with the result of the last executed statement in #script
		 *    or %NULL in case of error
		 */
		run_javascript_in_world_finish(result: Gio.AsyncResult): JavascriptResult;
		/**
		 * Asynchronously save the current web page associated to the
		 * #WebKitWebView into a self-contained format using the mode
		 * specified in #save_mode.
		 * 
		 * When the operation is finished, #callback will be called. You can
		 * then call webkit_web_view_save_finish() to get the result of the
		 * operation.
		 * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		save(save_mode: SaveMode, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_view_save().
		 * @param result a #GAsyncResult
		 * @returns a #GInputStream with the result of saving
		 *    the current web page or %NULL in case of error.
		 */
		save_finish(result: Gio.AsyncResult): Gio.InputStream;
		/**
		 * Asynchronously save the current web page associated to the
		 * #WebKitWebView into a self-contained format using the mode
		 * specified in #save_mode and writing it to #file.
		 * 
		 * When the operation is finished, #callback will be called. You can
		 * then call webkit_web_view_save_to_file_finish() to get the result of the
		 * operation.
		 * @param file the #GFile where the current web page should be saved to.
		 * @param save_mode the #WebKitSaveMode specifying how the web page should be saved.
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		save_to_file(file: Gio.File, save_mode: SaveMode, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_view_save_to_file().
		 * @param result a #GAsyncResult
		 * @returns %TRUE if the web page was successfully saved to a file or %FALSE otherwise.
		 */
		save_to_file_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Send #message to the #WebKitWebPage corresponding to #web_view. If #message is floating, it's consumed.
		 * 
		 * If you don't expect any reply, or you simply want to ignore it, you can pass %NULL as #callback.
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_web_view_send_message_to_page_finish() to get the message reply.
		 * @param message a #WebKitUserMessage
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback (nullable): A #GAsyncReadyCallback to call when the request is satisfied or %NULL
		 */
		send_message_to_page(message: UserMessage, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_web_view_send_message_to_page().
		 * @param result a #GAsyncResult
		 * @returns a #WebKitUserMessage with the reply or %NULL in case of error.
		 */
		send_message_to_page_finish(result: Gio.AsyncResult): UserMessage;
		/**
		 * Sets the color that will be used to draw the #web_view background before
		 * the actual contents are rendered. Note that if the web page loaded in #web_view
		 * specifies a background color, it will take precedence over the #rgba color.
		 * By default the #web_view background color is opaque white.
		 * Note that the parent window must have a RGBA visual and
		 * #GtkWidget:app-paintable property set to %TRUE for backgrounds colors to work.
		 * 
		 * <informalexample><programlisting>
		 * static void browser_window_set_background_color (BrowserWindow *window,
		 *                                                  const GdkRGBA *rgba)
		 * {
		 *     WebKitWebView *web_view;
		 *     GdkScreen *screen = gtk_window_get_screen (GTK_WINDOW (window));
		 *     GdkVisual *rgba_visual = gdk_screen_get_rgba_visual (screen);
		 * 
		 *     if (!rgba_visual)
		 *          return;
		 * 
		 *     gtk_widget_set_visual (GTK_WIDGET (window), rgba_visual);
		 *     gtk_widget_set_app_paintable (GTK_WIDGET (window), TRUE);
		 * 
		 *     web_view = browser_window_get_web_view (window);
		 *     webkit_web_view_set_background_color (web_view, rgba);
		 * }
		 * </programlisting></informalexample>
		 * @param rgba a #GdkRGBA
		 */
		set_background_color(rgba: Gdk.RGBA): void;
		/**
		 * Sets the current custom character encoding override of #web_view. The custom
		 * character encoding will override any text encoding detected via HTTP headers or
		 * META tags. Calling this method will stop any current load operation and reload the
		 * current page. Setting the custom character encoding to %NULL removes the character
		 * encoding override.
		 * @param charset a character encoding name or %NULL
		 */
		set_custom_charset(charset: string): void;
		/**
		 * Sets whether the user is allowed to edit the HTML document.
		 * 
		 * If #editable is %TRUE, #web_view allows the user to edit the HTML document. If
		 * #editable is %FALSE, an element in #web_view's document can only be edited if the
		 * CONTENTEDITABLE attribute has been set on the element or one of its parent
		 * elements. By default a #WebKitWebView is not editable.
		 * 
		 * Normally, a HTML document is not editable unless the elements within the
		 * document are editable. This function provides a way to make the contents
		 * of a #WebKitWebView editable without altering the document or DOM structure.
		 * @param editable a #gboolean indicating the editable state
		 */
		set_editable(editable: boolean): void;
		/**
		 * Set the #WebKitInputMethodContext to be used by #web_view, or %NULL to not use any input method.
		 * Note that the same #WebKitInputMethodContext can't be set on more than one #WebKitWebView at the same time.
		 * @param context the #WebKitInputMethodContext to set, or %NULL
		 */
		set_input_method_context(context: InputMethodContext): void;
		/**
		 * Sets the mute state of #web_view.
		 * @param muted mute flag
		 */
		set_is_muted(muted: boolean): void;
		/**
		 * Sets the #WebKitSettings to be applied to #web_view. The
		 * existing #WebKitSettings of #web_view will be replaced by
		 * #settings. New settings are applied immediately on #web_view.
		 * The same #WebKitSettings object can be shared
		 * by multiple #WebKitWebView<!-- -->s.
		 * @param settings a #WebKitSettings
		 */
		set_settings(settings: Settings): void;
		/**
		 * Set the zoom level of #web_view, i.e. the factor by which the
		 * view contents are scaled with respect to their original size.
		 * @param zoom_level the zoom level
		 */
		set_zoom_level(zoom_level: number): void;
		/**
		 * Stops any ongoing loading operation in #web_view.
		 * This method does nothing if no content is being loaded.
		 * If there is a loading operation in progress, it will be cancelled and
		 * #WebKitWebView::load-failed signal will be emitted with
		 * %WEBKIT_NETWORK_ERROR_CANCELLED error.
		 */
		stop_loading(): void;
		/**
		 * Tries to close the #web_view. This will fire the onbeforeunload event
		 * to ask the user for confirmation to close the page. If there isn't an
		 * onbeforeunload event handler or the user confirms to close the page,
		 * the #WebKitWebView::close signal is emitted, otherwise nothing happens.
		 */
		try_close(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebView} instead.
	 */
	type WebViewMixin = IWebView & IWebViewBase & Atk.IImplementorIface & Gtk.IBuildable;

	interface WebView extends WebViewMixin {}

	class WebView {
		public constructor();
		/**
		 * Creates a new #WebKitWebView with the default #WebKitWebContext and
		 * no #WebKitUserContentManager associated with it.
		 * See also webkit_web_view_new_with_context(),
		 * webkit_web_view_new_with_user_content_manager(), and
		 * webkit_web_view_new_with_settings().
		 * @returns The newly created #WebKitWebView widget
		 */
		public static new(): Gtk.Widget;
		/**
		 * Creates a new #WebKitWebView with the given #WebKitWebContext and
		 * no #WebKitUserContentManager associated with it.
		 * See also webkit_web_view_new_with_user_content_manager() and
		 * webkit_web_view_new_with_settings().
		 * @param context the #WebKitWebContext to be used by the #WebKitWebView
		 * @returns The newly created #WebKitWebView widget
		 */
		public static new_with_context(context: WebContext): Gtk.Widget;
		/**
		 * Creates a new #WebKitWebView sharing the same web process with #web_view.
		 * This method doesn't have any effect when %WEBKIT_PROCESS_MODEL_SHARED_SECONDARY_PROCESS
		 * process model is used, because a single web process is shared for all the web views in the
		 * same #WebKitWebContext. When using %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES process model,
		 * this method should always be used when creating the #WebKitWebView in the #WebKitWebView::create signal.
		 * You can also use this method to implement other process models based on %WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES,
		 * like for example, sharing the same web process for all the views in the same security domain.
		 * 
		 * The newly created #WebKitWebView will also have the same #WebKitUserContentManager,
		 * #WebKitSettings, and #WebKitWebsitePolicies as #web_view.
		 * @param web_view the related #WebKitWebView
		 * @returns The newly created #WebKitWebView widget
		 */
		public static new_with_related_view(web_view: WebView): Gtk.Widget;
		/**
		 * Creates a new #WebKitWebView with the given #WebKitSettings.
		 * See also webkit_web_view_new_with_context(), and
		 * webkit_web_view_new_with_user_content_manager().
		 * @param settings a #WebKitSettings
		 * @returns The newly created #WebKitWebView widget
		 */
		public static new_with_settings(settings: Settings): Gtk.Widget;
		/**
		 * Creates a new #WebKitWebView with the given #WebKitUserContentManager.
		 * The content loaded in the view may be affected by the content injected
		 * in the view by the user content manager.
		 * @param user_content_manager a #WebKitUserContentManager.
		 * @returns The newly created #WebKitWebView widget
		 */
		public static new_with_user_content_manager(user_content_manager: UserContentManager): Gtk.Widget;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebViewBase} instead.
	 */
	interface IWebViewBase {

	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebViewBase} instead.
	 */
	type WebViewBaseMixin = IWebViewBase & Gtk.IContainer & Atk.IImplementorIface & Gtk.IBuildable;

	interface WebViewBase extends WebViewBaseMixin {}

	class WebViewBase {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsiteDataAccessPermissionRequest} instead.
	 */
	interface IWebsiteDataAccessPermissionRequest {
		/**
		 * Get the current domain being browsed.
		 * @returns the current domain name
		 */
		get_current_domain(): string;
		/**
		 * Get the domain requesting permission to access its cookies while browsing the current domain.
		 * @returns the requesting domain name
		 */
		get_requesting_domain(): string;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsiteDataAccessPermissionRequest} instead.
	 */
	type WebsiteDataAccessPermissionRequestMixin = IWebsiteDataAccessPermissionRequest & GObject.IObject & IPermissionRequest;

	interface WebsiteDataAccessPermissionRequest extends WebsiteDataAccessPermissionRequestMixin {}

	class WebsiteDataAccessPermissionRequest {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsiteDataManager} instead.
	 */
	interface IWebsiteDataManager {
		/**
		 * Asynchronously clear the website data of the given #types modified in the past #timespan.
		 * If #timespan is 0, all website data will be removed.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_website_data_manager_clear_finish() to get the result of the operation.
		 * 
		 * Due to implementation limitations, this function does not currently delete
		 * any stored cookies if #timespan is nonzero. This behavior may change in the
		 * future.
		 * @param types #WebKitWebsiteDataTypes
		 * @param timespan a #GTimeSpan
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_website_data_manager_clear()
		 * @param result a #GAsyncResult
		 * @returns %TRUE if website data was successfully cleared, or %FALSE otherwise.
		 */
		clear_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Asynchronously get the list of #WebKitWebsiteData for the given #types.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_website_data_manager_fetch_finish() to get the result of the operation.
		 * @param types #WebKitWebsiteDataTypes
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		fetch(types: WebsiteDataTypes, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_website_data_manager_fetch().
		 * @param result a #GAsyncResult
		 * @returns a #GList of #WebKitWebsiteData. You must free the #GList with
		 *    g_list_free() and unref the #WebKitWebsiteData<!-- -->s with webkit_website_data_unref() when you're done with them.
		 */
		fetch_finish(result: Gio.AsyncResult): GLib.List;
		/**
		 * Get the #WebKitWebsiteDataManager:base-cache-directory property.
		 * @returns the base directory for Website cache, or %NULL if
		 *    #WebKitWebsiteDataManager:base-cache-directory was not provided or #manager is ephemeral.
		 */
		get_base_cache_directory(): string;
		/**
		 * Get the #WebKitWebsiteDataManager:base-data-directory property.
		 * @returns the base directory for Website data, or %NULL if
		 *    #WebKitWebsiteDataManager:base-data-directory was not provided or #manager is ephemeral.
		 */
		get_base_data_directory(): string;
		/**
		 * Get the #WebKitCookieManager of #manager.
		 * @returns a #WebKitCookieManager
		 */
		get_cookie_manager(): CookieManager;
		/**
		 * Get the #WebKitWebsiteDataManager:disk-cache-directory property.
		 * @returns the directory where HTTP disk cache is stored or %NULL if #manager is ephemeral.
		 */
		get_disk_cache_directory(): string;
		/**
		 * Get the #WebKitWebsiteDataManager:dom-cache-directory property.
		 * @returns the directory where DOM cache is stored or %NULL if #manager is ephemeral.
		 */
		get_dom_cache_directory(): string;
		/**
		 * Get the #WebKitWebsiteDataManager:hsts-cache-directory property.
		 * @returns the directory where the HSTS cache is stored or %NULL if #manager is ephemeral.
		 */
		get_hsts_cache_directory(): string;
		/**
		 * Get the #WebKitWebsiteDataManager:indexeddb-directory property.
		 * @returns the directory where IndexedDB databases are stored or %NULL if #manager is ephemeral.
		 */
		get_indexeddb_directory(): string;
		/**
		 * Get the #WebKitWebsiteDataManager:itp-directory property.
		 * @returns the directory where Intelligent Tracking Prevention data is stored or %NULL if #manager is ephemeral.
		 */
		get_itp_directory(): string;
		/**
		 * Get whether Intelligent Tracking Prevention (ITP) is enabled or not.
		 * @returns %TRUE if ITP is enabled, or %FALSE otherwise.
		 */
		get_itp_enabled(): boolean;
		/**
		 * Asynchronously get the list of #WebKitITPThirdParty seen for #manager. Every #WebKitITPThirdParty
		 * contains the list of #WebKitITPFirstParty under which it has been seen.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_website_data_manager_get_itp_summary_finish() to get the result of the operation.
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		get_itp_summary(cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_website_data_manager_get_itp_summary().
		 * @param result a #GAsyncResult
		 * @returns a #GList of #WebKitITPThirdParty.
		 *    You must free the #GList with g_list_free() and unref the #WebKitITPThirdParty<!-- -->s with
		 *    webkit_itp_third_party_unref() when you're done with them.
		 */
		get_itp_summary_finish(result: Gio.AsyncResult): GLib.List;
		/**
		 * Get the #WebKitWebsiteDataManager:local-storage-directory property.
		 * @returns the directory where local storage data is stored or %NULL if #manager is ephemeral.
		 */
		get_local_storage_directory(): string;
		/**
		 * Get the #WebKitWebsiteDataManager:offline-application-cache-directory property.
		 * @returns the directory where offline web application cache is stored or %NULL if #manager is ephemeral.
		 */
		get_offline_application_cache_directory(): string;
		/**
		 * Get whether persistent credential storage is enabled or not.
		 * See also webkit_website_data_manager_set_persistent_credential_storage_enabled().
		 * @returns %TRUE if persistent credential storage is enabled, or %FALSE otherwise.
		 */
		get_persistent_credential_storage_enabled(): boolean;
		/**
		 * Get the #WebKitWebsiteDataManager:service-worker-registrations-directory property.
		 * @returns the directory where service worker registrations are stored or %NULL if #manager is ephemeral.
		 */
		get_service_worker_registrations_directory(): string;
		/**
		 * Get the TLS errors policy of #manager
		 * @returns a #WebKitTLSErrorsPolicy
		 */
		get_tls_errors_policy(): TLSErrorsPolicy;
		/**
		 * Get the #WebKitWebsiteDataManager:websql-directory property.
		 * @returns the directory where WebSQL databases are stored or %NULL if #manager is ephemeral.
		 */
		get_websql_directory(): string;
		/**
		 * Get whether a #WebKitWebsiteDataManager is ephemeral. See #WebKitWebsiteDataManager:is-ephemeral for more details.
		 * @returns %TRUE if #manager is ephemeral or %FALSE otherwise.
		 */
		is_ephemeral(): boolean;
		/**
		 * Asynchronously removes the website data of the for the given #types for websites in the given #website_data list.
		 * Use webkit_website_data_manager_clear() if you want to remove the website data for all sites.
		 * 
		 * When the operation is finished, #callback will be called. You can then call
		 * webkit_website_data_manager_remove_finish() to get the result of the operation.
		 * @param types #WebKitWebsiteDataTypes
		 * @param website_data a #GList of #WebKitWebsiteData
		 * @param cancellable a #GCancellable or %NULL to ignore
		 * @param callback a #GAsyncReadyCallback to call when the request is satisfied
		 */
		remove(types: WebsiteDataTypes, website_data: GLib.List, cancellable: Gio.Cancellable, callback: Gio.AsyncReadyCallback): void;
		/**
		 * Finish an asynchronous operation started with webkit_website_data_manager_remove().
		 * @param result a #GAsyncResult
		 * @returns %TRUE if website data resources were successfully removed, or %FALSE otherwise.
		 */
		remove_finish(result: Gio.AsyncResult): boolean;
		/**
		 * Enable or disable Intelligent Tracking Prevention (ITP). When ITP is enabled resource load statistics
		 * are collected and used to decide whether to allow or block third-party cookies and prevent user tracking.
		 * Note that while ITP is enabled the accept policy %WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY is ignored and
		 * %WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS is used instead. See also webkit_cookie_manager_set_accept_policy().
		 * @param enabled value to set
		 */
		set_itp_enabled(enabled: boolean): void;
		/**
		 * Set the network proxy settings to be used by connections started in #manager session.
		 * By default %WEBKIT_NETWORK_PROXY_MODE_DEFAULT is used, which means that the
		 * system settings will be used (g_proxy_resolver_get_default()).
		 * If you want to override the system default settings, you can either use
		 * %WEBKIT_NETWORK_PROXY_MODE_NO_PROXY to make sure no proxies are used at all,
		 * or %WEBKIT_NETWORK_PROXY_MODE_CUSTOM to provide your own proxy settings.
		 * When #proxy_mode is %WEBKIT_NETWORK_PROXY_MODE_CUSTOM #proxy_settings must be
		 * a valid #WebKitNetworkProxySettings; otherwise, #proxy_settings must be %NULL.
		 * @param proxy_mode a #WebKitNetworkProxyMode
		 * @param proxy_settings a #WebKitNetworkProxySettings, or %NULL
		 */
		set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings: NetworkProxySettings): void;
		/**
		 * Enable or disable persistent credential storage. When enabled, which is the default for
		 * non-ephemeral sessions, the network process will try to read and write HTTP authentiacation
		 * credentials from persistent storage.
		 * @param enabled value to set
		 */
		set_persistent_credential_storage_enabled(enabled: boolean): void;
		/**
		 * Set the TLS errors policy of #manager as #policy
		 * @param policy a #WebKitTLSErrorsPolicy
		 */
		set_tls_errors_policy(policy: TLSErrorsPolicy): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsiteDataManager} instead.
	 */
	type WebsiteDataManagerMixin = IWebsiteDataManager & GObject.IObject;

	interface WebsiteDataManager extends WebsiteDataManagerMixin {}

	class WebsiteDataManager {
		public constructor();
		/**
		 * Creates a new #WebKitWebsiteDataManager with the given options. It must
		 * be passed as construction parameter of a #WebKitWebContext.
		 * @param first_option_name name of the first option to set
		 * @returns the newly created #WebKitWebsiteDataManager
		 */
		public static new(first_option_name: string): WebsiteDataManager;
		/**
		 * Creates an ephemeral #WebKitWebsiteDataManager. See #WebKitWebsiteDataManager:is-ephemeral for more details.
		 * @returns a new ephemeral #WebKitWebsiteDataManager.
		 */
		public static new_ephemeral(): WebsiteDataManager;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsitePolicies} instead.
	 */
	interface IWebsitePolicies {
		/**
		 * Get the #WebKitWebsitePolicies:autoplay property.
		 * @returns #WebKitAutoplayPolicy
		 */
		get_autoplay_policy(): AutoplayPolicy;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WebsitePolicies} instead.
	 */
	type WebsitePoliciesMixin = IWebsitePolicies & GObject.IObject;

	interface WebsitePolicies extends WebsitePoliciesMixin {}

	class WebsitePolicies {
		public constructor();
		/**
		 * Create a new #WebKitWebsitePolicies
		 * @returns the newly created #WebKitWebsitePolicies
		 */
		public static new(): WebsitePolicies;
		/**
		 * Create a new #WebKitWebsitePolicies with policies given as variadic
		 * arguments.
		 * @param first_policy_name name of the first policy to set
		 * @returns the newly created #WebKitWebsitePolicies
		 * 
		 * <informalexample><programlisting>
		 * WebKitWebsitePolicies *default_website_policies = webkit_website_policies_new_with_policies(
		 *     "autoplay", WEBKIT_AUTOPLAY_DENY,
		 *     NULL);
		 * ...
		 * WebKitWebView *view = WEBKIT_WEB_VIEW(g_object_new(WEBKIT_TYPE_WEB_VIEW,
		 *     "web-context", ctx,
		 *     "settings", settings,
		 *     "user-content-manager", content_manager,
		 *     "website-policies", default_website_policies,
		 *     NULL));
		 * ...
		 * </programlisting></informalexample>
		 */
		public static new_with_policies(first_policy_name: string): WebsitePolicies;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowProperties} instead.
	 */
	interface IWindowProperties {
		/**
		 * Get whether the window should be shown in fullscreen state or not.
		 * @returns %TRUE if the window should be fullscreen or %FALSE otherwise.
		 */
		get_fullscreen(): boolean;
		/**
		 * Get the geometry the window should have on the screen when shown.
		 * @param geometry return location for the window geometry
		 */
		get_geometry(geometry: Gdk.Rectangle): void;
		/**
		 * Get whether the window should have the locationbar visible or not.
		 * @returns %TRUE if locationbar should be visible or %FALSE otherwise.
		 */
		get_locationbar_visible(): boolean;
		/**
		 * Get whether the window should have the menubar visible or not.
		 * @returns %TRUE if menubar should be visible or %FALSE otherwise.
		 */
		get_menubar_visible(): boolean;
		/**
		 * Get whether the window should be resizable by the user or not.
		 * @returns %TRUE if the window should be resizable or %FALSE otherwise.
		 */
		get_resizable(): boolean;
		/**
		 * Get whether the window should have the scrollbars visible or not.
		 * @returns %TRUE if scrollbars should be visible or %FALSE otherwise.
		 */
		get_scrollbars_visible(): boolean;
		/**
		 * Get whether the window should have the statusbar visible or not.
		 * @returns %TRUE if statusbar should be visible or %FALSE otherwise.
		 */
		get_statusbar_visible(): boolean;
		/**
		 * Get whether the window should have the toolbar visible or not.
		 * @returns %TRUE if toolbar should be visible or %FALSE otherwise.
		 */
		get_toolbar_visible(): boolean;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link WindowProperties} instead.
	 */
	type WindowPropertiesMixin = IWindowProperties & GObject.IObject;

	interface WindowProperties extends WindowPropertiesMixin {}

	class WindowProperties {
		public constructor();
	}

	interface ApplicationInfo {}
	class ApplicationInfo {
		public constructor();
		/**
		 * Creates a new #WebKitApplicationInfo
		 * @returns the newly created #WebKitApplicationInfo.
		 */
		public static new(): ApplicationInfo;
		/**
		 * Get the name of the application. If webkit_application_info_set_name() hasn't been
		 * called with a valid name, this returns g_get_prgname().
		 * @returns the application name
		 */
		public get_name(): string;
		/**
		 * Get the application version previously set with webkit_application_info_set_version().
		 * @param major return location for the major version number
		 * @param minor return location for the minor version number
		 * @param micro return location for the micro version number
		 */
		public get_version(major: number, minor: number, micro: number): void;
		/**
		 * Atomically increments the reference count of #info by one. This
		 * function is MT-safe and may be called from any thread.
		 * @returns The passed in #WebKitApplicationInfo
		 */
		public ref(): ApplicationInfo;
		/**
		 * Set the name of the application. If not provided, or %NULL is passed,
		 * g_get_prgname() will be used.
		 * @param name the application name
		 */
		public set_name(name: string): void;
		/**
		 * Set the application version. If the application doesn't use the format
		 * major.minor.micro you can pass 0 as the micro to use major.minor, or pass
		 * 0 as both micro and minor to use only major number. Any other format must
		 * be converted to major.minor.micro so that it can be used in version comparisons.
		 * @param major the major version number
		 * @param minor the minor version number
		 * @param micro the micro version number
		 */
		public set_version(major: number, minor: number, micro: number): void;
		/**
		 * Atomically decrements the reference count of #info by one. If the
		 * reference count drops to 0, all memory allocated by the #WebKitApplicationInfo is
		 * released. This function is MT-safe and may be called from any
		 * thread.
		 */
		public unref(): void;
	}

	interface AuthenticationRequestClass {}
	class AuthenticationRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface AuthenticationRequestPrivate {}
	class AuthenticationRequestPrivate {
		public constructor();
	}

	interface AutomationSessionClass {}
	class AutomationSessionClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface AutomationSessionPrivate {}
	class AutomationSessionPrivate {
		public constructor();
	}

	interface BackForwardListClass {}
	class BackForwardListClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface BackForwardListItemClass {}
	class BackForwardListItemClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface BackForwardListItemPrivate {}
	class BackForwardListItemPrivate {
		public constructor();
	}

	interface BackForwardListPrivate {}
	class BackForwardListPrivate {
		public constructor();
	}

	interface ColorChooserRequestClass {}
	class ColorChooserRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
	}

	interface ColorChooserRequestPrivate {}
	class ColorChooserRequestPrivate {
		public constructor();
	}

	interface ContextMenuClass {}
	class ContextMenuClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface ContextMenuItemClass {}
	class ContextMenuItemClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface ContextMenuItemPrivate {}
	class ContextMenuItemPrivate {
		public constructor();
	}

	interface ContextMenuPrivate {}
	class ContextMenuPrivate {
		public constructor();
	}

	interface CookieManagerClass {}
	class CookieManagerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface CookieManagerPrivate {}
	class CookieManagerPrivate {
		public constructor();
	}

	interface Credential {}
	class Credential {
		public constructor();
		/**
		 * Create a new credential from the provided username, password and persistence mode.
		 * @param username The username for the new credential
		 * @param password The password for the new credential
		 * @param persistence The #WebKitCredentialPersistence of the new credential
		 * @returns A #WebKitCredential.
		 */
		public static new(username: string, password: string, persistence: CredentialPersistence): Credential;
		/**
		 * Make a copy of the #WebKitCredential.
		 * @returns A copy of passed in #WebKitCredential
		 */
		public copy(): Credential;
		/**
		 * Free the #WebKitCredential.
		 */
		public free(): void;
		/**
		 * Get the password currently held by this #WebKitCredential.
		 * @returns The password stored in the #WebKitCredential.
		 */
		public get_password(): string;
		/**
		 * Get the persistence mode currently held by this #WebKitCredential.
		 * @returns The #WebKitCredentialPersistence stored in the #WebKitCredential.
		 */
		public get_persistence(): CredentialPersistence;
		/**
		 * Get the username currently held by this #WebKitCredential.
		 * @returns The username stored in the #WebKitCredential.
		 */
		public get_username(): string;
		/**
		 * Determine whether this credential has a password stored.
		 * @returns %TRUE if the credential has a password or %FALSE otherwise.
		 */
		public has_password(): boolean;
	}

	interface DeviceInfoPermissionRequestClass {}
	class DeviceInfoPermissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface DeviceInfoPermissionRequestPrivate {}
	class DeviceInfoPermissionRequestPrivate {
		public constructor();
	}

	interface DownloadClass {}
	class DownloadClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public decide_destination: {(download: Download, suggested_filename: string): boolean;};
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface DownloadPrivate {}
	class DownloadPrivate {
		public constructor();
	}

	interface EditorStateClass {}
	class EditorStateClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface EditorStatePrivate {}
	class EditorStatePrivate {
		public constructor();
	}

	interface FaviconDatabaseClass {}
	class FaviconDatabaseClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface FaviconDatabasePrivate {}
	class FaviconDatabasePrivate {
		public constructor();
	}

	interface FileChooserRequestClass {}
	class FileChooserRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface FileChooserRequestPrivate {}
	class FileChooserRequestPrivate {
		public constructor();
	}

	interface FindControllerClass {}
	class FindControllerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface FindControllerPrivate {}
	class FindControllerPrivate {
		public constructor();
	}

	interface FormSubmissionRequestClass {}
	class FormSubmissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface FormSubmissionRequestPrivate {}
	class FormSubmissionRequestPrivate {
		public constructor();
	}

	interface GeolocationManagerClass {}
	class GeolocationManagerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface GeolocationManagerPrivate {}
	class GeolocationManagerPrivate {
		public constructor();
	}

	interface GeolocationPermissionRequestClass {}
	class GeolocationPermissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface GeolocationPermissionRequestPrivate {}
	class GeolocationPermissionRequestPrivate {
		public constructor();
	}

	/**
	 * WebKitGeolocationPosition is an opaque struct used to provide position updates to a
	 * #WebKitGeolocationManager using webkit_geolocation_manager_update_position().
	 */
	interface GeolocationPosition {}
	class GeolocationPosition {
		public constructor();
		/**
		 * Create a new #WebKitGeolocationPosition
		 * @param latitude a valid latitude in degrees
		 * @param longitude a valid longitude in degrees
		 * @param accuracy accuracy of location in meters
		 * @returns a newly created #WebKitGeolocationPosition
		 */
		public static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition;
		/**
		 * Make a copy of the #WebKitGeolocationPosition
		 * @returns a copy of #position
		 */
		public copy(): GeolocationPosition;
		/**
		 * Free the #WebKitGeolocationPosition
		 */
		public free(): void;
		/**
		 * Set the #position altitude
		 * @param altitude altitude in meters
		 */
		public set_altitude(altitude: number): void;
		/**
		 * Set the accuracy of #position altitude
		 * @param altitude_accuracy accuracy of position altitude in meters
		 */
		public set_altitude_accuracy(altitude_accuracy: number): void;
		/**
		 * Set the #position heading, as a positive angle between the direction of movement and the North
		 * direction, in clockwise direction.
		 * @param heading heading in degrees
		 */
		public set_heading(heading: number): void;
		/**
		 * Set the #position speed
		 * @param speed speed in meters per second
		 */
		public set_speed(speed: number): void;
		/**
		 * Set the #position timestamp. By default it's the time when the #position was created.
		 * @param timestamp timestamp in seconds since the epoch, or 0 to use current time
		 */
		public set_timestamp(timestamp: number): void;
	}

	interface HitTestResultClass {}
	class HitTestResultClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface HitTestResultPrivate {}
	class HitTestResultPrivate {
		public constructor();
	}

	interface ITPFirstParty {}
	class ITPFirstParty {
		public constructor();
		/**
		 * Get the domain name of #itp_first_party
		 * @returns the domain name
		 */
		public get_domain(): string;
		/**
		 * Get the last time a #WebKitITPThirdParty has been seen under #itp_first_party.
		 * Each #WebKitITPFirstParty is created by webkit_itp_third_party_get_first_parties() and
		 * therefore corresponds to exactly one #WebKitITPThirdParty.
		 * @returns the last update time as a #GDateTime
		 */
		public get_last_update_time(): GLib.DateTime;
		/**
		 * Get whether #itp_first_party has granted website data access to its #WebKitITPThirdParty.
		 * Each #WebKitITPFirstParty is created by webkit_itp_third_party_get_first_parties() and
		 * therefore corresponds to exactly one #WebKitITPThirdParty.
		 * @returns %TRUE if website data access has been granted, or %FALSE otherwise
		 */
		public get_website_data_access_allowed(): boolean;
		/**
		 * Atomically increments the reference count of #itp_first_party by one.
		 * This function is MT-safe and may be called from any thread.
		 * @returns The passed #WebKitITPFirstParty
		 */
		public ref(): ITPFirstParty;
		/**
		 * Atomically decrements the reference count of #itp_first_party by one.
		 * If the reference count drops to 0, all memory allocated by
		 * #WebKitITPFirstParty is released. This function is MT-safe and may be
		 * called from any thread.
		 */
		public unref(): void;
	}

	interface ITPThirdParty {}
	class ITPThirdParty {
		public constructor();
		/**
		 * Get the domain name of #itp_third_party
		 * @returns the domain name
		 */
		public get_domain(): string;
		/**
		 * Get the list of #WebKitITPFirstParty under which #itp_third_party has been seen.
		 * @returns a #GList of #WebKitITPFirstParty
		 */
		public get_first_parties(): GLib.List;
		/**
		 * Atomically increments the reference count of #itp_third_party by one.
		 * This function is MT-safe and may be called from any thread.
		 * @returns The passed #WebKitITPThirdParty
		 */
		public ref(): ITPThirdParty;
		/**
		 * Atomically decrements the reference count of #itp_third_party by one.
		 * If the reference count drops to 0, all memory allocated by
		 * #WebKitITPThirdParty is released. This function is MT-safe and may be
		 * called from any thread.
		 */
		public unref(): void;
	}

	interface InputMethodContextClass {}
	class InputMethodContextClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public preedit_started: {(context: InputMethodContext): void;};
		public preedit_changed: {(context: InputMethodContext): void;};
		public preedit_finished: {(context: InputMethodContext): void;};
		public committed: {(context: InputMethodContext, text: string): void;};
		public delete_surrounding: {(context: InputMethodContext, offset: number, n_chars: number): void;};
		public set_enable_preedit: {(context: InputMethodContext, enabled: boolean): void;};
		public get_preedit: {(context: InputMethodContext, text: string, underlines: GLib.List, cursor_offset: number): void;};
		public filter_key_event: {(context: InputMethodContext, key_event: Gdk.EventKey): boolean;};
		public notify_focus_in: {(context: InputMethodContext): void;};
		public notify_focus_out: {(context: InputMethodContext): void;};
		public notify_cursor_area: {(context: InputMethodContext, _x: number, _y: number, width: number, height: number): void;};
		public notify_surrounding: {(context: InputMethodContext, text: string, length: number, cursor_index: number, selection_index: number): void;};
		public reset: {(context: InputMethodContext): void;};
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
		public _webkit_reserved4: {(): void;};
		public _webkit_reserved5: {(): void;};
		public _webkit_reserved6: {(): void;};
		public _webkit_reserved7: {(): void;};
	}

	interface InputMethodContextPrivate {}
	class InputMethodContextPrivate {
		public constructor();
	}

	interface InputMethodUnderline {}
	class InputMethodUnderline {
		public constructor();
		/**
		 * Create a new #WebKitInputMethodUnderline for the given range in preedit string
		 * @param start_offset the start offset in preedit string
		 * @param end_offset the end offset in preedit string
		 * @returns A newly created #WebKitInputMethodUnderline
		 */
		public static new(start_offset: number, end_offset: number): InputMethodUnderline;
		/**
		 * Make a copy of the #WebKitInputMethodUnderline.
		 * @returns A copy of passed in #WebKitInputMethodUnderline
		 */
		public copy(): InputMethodUnderline;
		/**
		 * Free the #WebKitInputMethodUnderline.
		 */
		public free(): void;
		/**
		 * Set the color of the underline. If #rgba is %NULL the foreground text color will be used
		 * for the underline too.
		 * @param rgba a #GdkRGBA or %NULL
		 */
		public set_color(rgba: Gdk.RGBA): void;
	}

	interface InstallMissingMediaPluginsPermissionRequestClass {}
	class InstallMissingMediaPluginsPermissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface InstallMissingMediaPluginsPermissionRequestPrivate {}
	class InstallMissingMediaPluginsPermissionRequestPrivate {
		public constructor();
	}

	interface JavascriptResult {}
	class JavascriptResult {
		public constructor();
		/**
		 * Get the global Javascript context that should be used with the
		 * <function>JSValueRef</function> returned by webkit_javascript_result_get_value().
		 * @returns the <function>JSGlobalContextRef</function> for the #WebKitJavascriptResult
		 */
		public get_global_context(): any;
		/**
		 * Get the #JSCValue of #js_result.
		 * @returns the #JSCValue of the #WebKitJavascriptResult
		 */
		// public get_js_value(): JavaScriptCore.Value;
		/**
		 * Get the value of #js_result. You should use the <function>JSGlobalContextRef</function>
		 * returned by webkit_javascript_result_get_global_context() to use the <function>JSValueRef</function>.
		 * @returns the <function>JSValueRef</function> of the #WebKitJavascriptResult
		 */
		public get_value(): any;
		/**
		 * Atomically increments the reference count of #js_result by one. This
		 * function is MT-safe and may be called from any thread.
		 * @returns The passed in #WebKitJavascriptResult
		 */
		public ref(): JavascriptResult;
		/**
		 * Atomically decrements the reference count of #js_result by one. If the
		 * reference count drops to 0, all memory allocated by the #WebKitJavascriptResult is
		 * released. This function is MT-safe and may be called from any
		 * thread.
		 */
		public unref(): void;
	}

	interface MediaKeySystemPermissionRequestClass {}
	class MediaKeySystemPermissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface MediaKeySystemPermissionRequestPrivate {}
	class MediaKeySystemPermissionRequestPrivate {
		public constructor();
	}

	interface MimeInfo {}
	class MimeInfo {
		public constructor();
		public get_description(): string;
		/**
		 * Get the list of file extensions associated to the
		 * MIME type of #info
		 * @returns a
		 *     %NULL-terminated array of strings
		 */
		public get_extensions(): string[];
		public get_mime_type(): string;
		/**
		 * Atomically increments the reference count of #info by one. This
		 * function is MT-safe and may be called from any thread.
		 * @returns The passed in #WebKitMimeInfo
		 */
		public ref(): MimeInfo;
		/**
		 * Atomically decrements the reference count of #info by one. If the
		 * reference count drops to 0, all memory allocated by the #WebKitMimeInfo is
		 * released. This function is MT-safe and may be called from any
		 * thread.
		 */
		public unref(): void;
	}

	interface NavigationAction {}
	class NavigationAction {
		public constructor();
		/**
		 * Make a copy of #navigation.
		 * @returns A copy of passed in #WebKitNavigationAction
		 */
		public copy(): NavigationAction;
		/**
		 * Free the #WebKitNavigationAction
		 */
		public free(): void;
		/**
		 * Return a bitmask of #GdkModifierType values describing the modifier keys that were in effect
		 * when the navigation was requested
		 * @returns the modifier keys
		 */
		public get_modifiers(): number;
		/**
		 * Return the number of the mouse button that triggered the navigation, or 0 if
		 * the navigation was not started by a mouse event.
		 * @returns the mouse button number or 0
		 */
		public get_mouse_button(): number;
		/**
		 * Return the type of action that triggered the navigation.
		 * @returns a #WebKitNavigationType
		 */
		public get_navigation_type(): NavigationType;
		/**
		 * Return the #WebKitURIRequest associated with the navigation action.
		 * Modifications to the returned object are <emphasis>not</emphasis> taken
		 * into account when the request is sent over the network, and is intended
		 * only to aid in evaluating whether a navigation action should be taken or
		 * not. To modify requests before they are sent over the network the
		 * #WebKitPage::send-request signal can be used instead.
		 * @returns a #WebKitURIRequest
		 */
		public get_request(): URIRequest;
		/**
		 * Returns whether the #navigation was redirected.
		 * @returns %TRUE if the original navigation was redirected, %FALSE otherwise.
		 */
		public is_redirect(): boolean;
		/**
		 * Return whether the navigation was triggered by a user gesture like a mouse click.
		 * @returns whether navigation action is a user gesture
		 */
		public is_user_gesture(): boolean;
	}

	interface NavigationPolicyDecisionClass {}
	class NavigationPolicyDecisionClass {
		public constructor();
		public parent_class: PolicyDecisionClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface NavigationPolicyDecisionPrivate {}
	class NavigationPolicyDecisionPrivate {
		public constructor();
	}

	interface NetworkProxySettings {}
	class NetworkProxySettings {
		public constructor();
		/**
		 * Create a new #WebKitNetworkProxySettings with the given #default_proxy_uri and #ignore_hosts.
		 * 
		 * The default proxy URI will be used for any URI that doesn't match #ignore_hosts, and doesn't match any
		 * of the schemes added with webkit_network_proxy_settings_add_proxy_for_scheme().
		 * If #default_proxy_uri starts with "socks://", it will be treated as referring to all three of the
		 * socks5, socks4a, and socks4 proxy types.
		 * 
		 * #ignore_hosts is a list of hostnames and IP addresses that the resolver should allow direct connections to.
		 * Entries can be in one of 4 formats:
		 * <itemizedlist>
		 * <listitem><para>
		 * A hostname, such as "example.com", ".example.com", or "*.example.com", any of which match "example.com" or
		 * any subdomain of it.
		 * </para></listitem>
		 * <listitem><para>
		 * An IPv4 or IPv6 address, such as "192.168.1.1", which matches only that address.
		 * </para></listitem>
		 * <listitem><para>
		 * A hostname or IP address followed by a port, such as "example.com:80", which matches whatever the hostname or IP
		 * address would match, but only for URLs with the (explicitly) indicated port. In the case of an IPv6 address, the address
		 * part must appear in brackets: "[::1]:443"
		 * </para></listitem>
		 * <listitem><para>
		 * An IP address range, given by a base address and prefix length, such as "fe80::/10", which matches any address in that range.
		 * </para></listitem>
		 * </itemizedlist>
		 * 
		 * Note that when dealing with Unicode hostnames, the matching is done against the ASCII form of the name.
		 * Also note that hostname exclusions apply only to connections made to hosts identified by name, and IP address exclusions apply only
		 * to connections made to hosts identified by address. That is, if example.com has an address of 192.168.1.1, and #ignore_hosts
		 * contains only "192.168.1.1", then a connection to "example.com" will use the proxy, and a connection to 192.168.1.1" will not.
		 * @param default_proxy_uri the default proxy URI to use, or %NULL.
		 * @param ignore_hosts an optional list of hosts/IP addresses to not use a proxy for.
		 * @returns A new #WebKitNetworkProxySettings.
		 */
		public static new(default_proxy_uri: string, ignore_hosts: string[]): NetworkProxySettings;
		/**
		 * Adds a URI-scheme-specific proxy. URIs whose scheme matches #uri_scheme will be proxied via #proxy_uri.
		 * As with the default proxy URI, if #proxy_uri starts with "socks://", it will be treated as referring to
		 * all three of the socks5, socks4a, and socks4 proxy types.
		 * @param scheme the URI scheme to add a proxy for
		 * @param proxy_uri the proxy URI to use for #uri_scheme
		 */
		public add_proxy_for_scheme(scheme: string, proxy_uri: string): void;
		/**
		 * Make a copy of the #WebKitNetworkProxySettings.
		 * @returns A copy of passed in #WebKitNetworkProxySettings
		 */
		public copy(): NetworkProxySettings;
		/**
		 * Free the #WebKitNetworkProxySettings.
		 */
		public free(): void;
	}

	interface NotificationClass {}
	class NotificationClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
		public _webkit_reserved4: {(): void;};
		public _webkit_reserved5: {(): void;};
	}

	interface NotificationPermissionRequestClass {}
	class NotificationPermissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
	}

	interface NotificationPermissionRequestPrivate {}
	class NotificationPermissionRequestPrivate {
		public constructor();
	}

	interface NotificationPrivate {}
	class NotificationPrivate {
		public constructor();
	}

	interface OptionMenuClass {}
	class OptionMenuClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface OptionMenuItem {}
	class OptionMenuItem {
		public constructor();
		/**
		 * Make a copy of the #WebKitOptionMenuItem.
		 * @returns A copy of passed in #WebKitOptionMenuItem
		 */
		public copy(): OptionMenuItem;
		/**
		 * Free the #WebKitOptionMenuItem.
		 */
		public free(): void;
		/**
		 * Get the label of a #WebKitOptionMenuItem.
		 * @returns The label of #item.
		 */
		public get_label(): string;
		/**
		 * Get the tooltip of a #WebKitOptionMenuItem.
		 * @returns The tooltip of #item, or %NULL.
		 */
		public get_tooltip(): string;
		/**
		 * Whether a #WebKitOptionMenuItem is enabled.
		 * @returns %TRUE if the #item is enabled or %FALSE otherwise.
		 */
		public is_enabled(): boolean;
		/**
		 * Whether a #WebKitOptionMenuItem is a group child.
		 * @returns %TRUE if the #item is a group child or %FALSE otherwise.
		 */
		public is_group_child(): boolean;
		/**
		 * Whether a #WebKitOptionMenuItem is a group label.
		 * @returns %TRUE if the #item is a group label or %FALSE otherwise.
		 */
		public is_group_label(): boolean;
		/**
		 * Whether a #WebKitOptionMenuItem is the currently selected one.
		 * @returns %TRUE if the #item is selected or %FALSE otherwise.
		 */
		public is_selected(): boolean;
	}

	interface OptionMenuPrivate {}
	class OptionMenuPrivate {
		public constructor();
	}

	interface PermissionRequestIface {}
	class PermissionRequestIface {
		public constructor();
		public parent_interface: GObject.TypeInterface;
		public allow: {(request: PermissionRequest): void;};
		public deny: {(request: PermissionRequest): void;};
	}

	interface PluginClass {}
	class PluginClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface PluginPrivate {}
	class PluginPrivate {
		public constructor();
	}

	interface PointerLockPermissionRequestClass {}
	class PointerLockPermissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface PointerLockPermissionRequestPrivate {}
	class PointerLockPermissionRequestPrivate {
		public constructor();
	}

	interface PolicyDecisionClass {}
	class PolicyDecisionClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface PolicyDecisionPrivate {}
	class PolicyDecisionPrivate {
		public constructor();
	}

	interface PrintCustomWidgetClass {}
	class PrintCustomWidgetClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public apply: {(print_custom_widget: PrintCustomWidget, widget: Gtk.Widget): void;};
		public update: {(print_custom_widget: PrintCustomWidget, widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void;};
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface PrintCustomWidgetPrivate {}
	class PrintCustomWidgetPrivate {
		public constructor();
	}

	interface PrintOperationClass {}
	class PrintOperationClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface PrintOperationPrivate {}
	class PrintOperationPrivate {
		public constructor();
	}

	interface ResponsePolicyDecisionClass {}
	class ResponsePolicyDecisionClass {
		public constructor();
		public parent_class: PolicyDecisionClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface ResponsePolicyDecisionPrivate {}
	class ResponsePolicyDecisionPrivate {
		public constructor();
	}

	interface ScriptDialog {}
	class ScriptDialog {
		public constructor();
		/**
		 * Close #dialog. When handling a #WebKitScriptDialog asynchronously (webkit_script_dialog_ref()
		 * was called in #WebKitWebView::script-dialog callback), this function needs to be called to notify
		 * that we are done with the script dialog. The dialog will be closed on destruction if this function
		 * hasn't been called before.
		 */
		public close(): void;
		/**
		 * This method is used for %WEBKIT_SCRIPT_DIALOG_CONFIRM and %WEBKIT_SCRIPT_DIALOG_BEFORE_UNLOAD_CONFIRM dialogs when
		 * #WebKitWebView::script-dialog signal is emitted to set whether the user
		 * confirmed the dialog or not. The default implementation of #WebKitWebView::script-dialog
		 * signal sets %TRUE when the OK or Stay buttons are clicked and %FALSE otherwise.
		 * It's an error to use this method with a #WebKitScriptDialog that is not of type
		 * %WEBKIT_SCRIPT_DIALOG_CONFIRM or %WEBKIT_SCRIPT_DIALOG_BEFORE_UNLOAD_CONFIRM
		 * @param confirmed whether user confirmed the dialog
		 */
		public confirm_set_confirmed(confirmed: boolean): void;
		/**
		 * Get the dialog type of a #WebKitScriptDialog.
		 * @returns the #WebKitScriptDialogType of #dialog
		 */
		public get_dialog_type(): ScriptDialogType;
		/**
		 * Get the message of a #WebKitScriptDialog.
		 * @returns the message of #dialog.
		 */
		public get_message(): string;
		/**
		 * Get the default text of a #WebKitScriptDialog of type %WEBKIT_SCRIPT_DIALOG_PROMPT.
		 * It's an error to use this method with a #WebKitScriptDialog that is not of type
		 * %WEBKIT_SCRIPT_DIALOG_PROMPT.
		 * @returns the default text of #dialog
		 */
		public prompt_get_default_text(): string;
		/**
		 * This method is used for %WEBKIT_SCRIPT_DIALOG_PROMPT dialogs when
		 * #WebKitWebView::script-dialog signal is emitted to set the text
		 * entered by the user. The default implementation of #WebKitWebView::script-dialog
		 * signal sets the text of the entry form when OK button is clicked, otherwise %NULL is set.
		 * It's an error to use this method with a #WebKitScriptDialog that is not of type
		 * %WEBKIT_SCRIPT_DIALOG_PROMPT.
		 * @param text the text to set
		 */
		public prompt_set_text(text: string): void;
		/**
		 * Atomically increments the reference count of #dialog by one. This
		 * function is MT-safe and may be called from any thread.
		 * @returns The passed in #WebKitScriptDialog
		 */
		public ref(): ScriptDialog;
		/**
		 * Atomically decrements the reference count of #dialog by one. If the
		 * reference count drops to 0, all memory allocated by the #WebKitScriptdialog is
		 * released. This function is MT-safe and may be called from any
		 * thread.
		 */
		public unref(): void;
	}

	interface SecurityManagerClass {}
	class SecurityManagerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface SecurityManagerPrivate {}
	class SecurityManagerPrivate {
		public constructor();
	}

	interface SecurityOrigin {}
	class SecurityOrigin {
		public constructor();
		/**
		 * Create a new security origin from the provided protocol, host and
		 * port.
		 * @param protocol The protocol for the new origin
		 * @param host The host for the new origin
		 * @param _port The port number for the new origin, or 0 to indicate the
		 *        default port for #protocol
		 * @returns A #WebKitSecurityOrigin.
		 */
		public static new(protocol: string, host: string, _port: number): SecurityOrigin;
		/**
		 * Create a new security origin from the provided URI. Components of
		 * #uri other than protocol, host, and port do not affect the created
		 * #WebKitSecurityOrigin.
		 * @param uri The URI for the new origin
		 * @returns A #WebKitSecurityOrigin.
		 */
		public static new_for_uri(uri: string): SecurityOrigin;
		/**
		 * Gets the hostname of #origin. It is reasonable for this to be %NULL
		 * if its protocol does not require a host component.
		 * @returns The host of the #WebKitSecurityOrigin
		 */
		public get_host(): string;
		/**
		 * Gets the port of #origin. This function will always return 0 if the
		 * port is the default port for the given protocol. For example,
		 * http://example.com has the same security origin as
		 * http://example.com:80, and this function will return 0 for a
		 * #WebKitSecurityOrigin constructed from either URI.
		 * @returns The port of the #WebKitSecurityOrigin.
		 */
		public get_port(): number;
		/**
		 * Gets the protocol of #origin.
		 * @returns The protocol of the #WebKitSecurityOrigin
		 */
		public get_protocol(): string;
		/**
		 * This function returns %FALSE. #WebKitSecurityOrigin is now a simple
		 * wrapper around a &lt;protocol, host, port&gt; triplet, and no longer
		 * represents an origin as defined by web standards that may be opaque.
		 * @returns %FALSE
		 */
		public is_opaque(): boolean;
		/**
		 * Atomically increments the reference count of #origin by one.
		 * This function is MT-safe and may be called from any thread.
		 * @returns The passed #WebKitSecurityOrigin
		 */
		public ref(): SecurityOrigin;
		/**
		 * Gets a string representation of #origin. The string representation
		 * is a valid URI with only protocol, host, and port components, or
		 * %NULL.
		 * @returns a URI representing #origin.
		 */
		public to_string(): string;
		/**
		 * Atomically decrements the reference count of #origin by one.
		 * If the reference count drops to 0, all memory allocated by
		 * #WebKitSecurityOrigin is released. This function is MT-safe and may be
		 * called from any thread.
		 */
		public unref(): void;
	}

	interface SettingsClass {}
	class SettingsClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface SettingsPrivate {}
	class SettingsPrivate {
		public constructor();
	}

	interface URIRequestClass {}
	class URIRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface URIRequestPrivate {}
	class URIRequestPrivate {
		public constructor();
	}

	interface URIResponseClass {}
	class URIResponseClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface URIResponsePrivate {}
	class URIResponsePrivate {
		public constructor();
	}

	interface URISchemeRequestClass {}
	class URISchemeRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface URISchemeRequestPrivate {}
	class URISchemeRequestPrivate {
		public constructor();
	}

	interface UserContentFilter {}
	class UserContentFilter {
		public constructor();
		/**
		 * Obtain the identifier previously used to save the #user_content_filter in the
		 * #WebKitUserContentFilterStore.
		 * @returns the identifier for the filter
		 */
		public get_identifier(): string;
		/**
		 * Atomically increments the reference count of #user_content_filter by one.
		 * This function is MT-safe and may be called from any thread.
		 * @returns 
		 */
		public ref(): UserContentFilter;
		/**
		 * Atomically decrements the reference count of #user_content_filter by one.
		 * If the reference count drops to 0, all the memory allocated by the
		 * #WebKitUserContentFilter is released. This function is MT-safe and may
		 * be called from any thread.
		 */
		public unref(): void;
	}

	interface UserContentFilterStoreClass {}
	class UserContentFilterStoreClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface UserContentFilterStorePrivate {}
	class UserContentFilterStorePrivate {
		public constructor();
	}

	interface UserContentManagerClass {}
	class UserContentManagerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface UserContentManagerPrivate {}
	class UserContentManagerPrivate {
		public constructor();
	}

	interface UserMediaPermissionRequestClass {}
	class UserMediaPermissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface UserMediaPermissionRequestPrivate {}
	class UserMediaPermissionRequestPrivate {
		public constructor();
	}

	interface UserMessageClass {}
	class UserMessageClass {
		public constructor();
		public parent_class: GObject.InitiallyUnownedClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface UserMessagePrivate {}
	class UserMessagePrivate {
		public constructor();
	}

	interface UserScript {}
	class UserScript {
		public constructor();
		/**
		 * Creates a new user script. Scripts can be applied to some URIs
		 * only by passing non-null values for #allow_list or #block_list. Passing a
		 * %NULL allow_list implies that all URIs are on the allow_list. The script
		 * is applied if an URI matches the allow_list and not the block_list.
		 * URI patterns must be of the form `[protocol]://[host]/[path]`, where the
		 * *host* and *path* components can contain the wildcard character (`*`) to
		 * represent zero or more other characters.
		 * @param source Source code of the user script.
		 * @param injected_frames A #WebKitUserContentInjectedFrames value
		 * @param injection_time A #WebKitUserScriptInjectionTime value
		 * @param allow_list An allow_list of URI patterns or %NULL
		 * @param block_list A block_list of URI patterns or %NULL
		 * @returns A new #WebKitUserScript
		 */
		public static new(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, allow_list: string[], block_list: string[]): UserScript;
		/**
		 * Creates a new user script for script world with name #world_name.
		 * See webkit_user_script_new() for a full description.
		 * @param source Source code of the user script.
		 * @param injected_frames A #WebKitUserContentInjectedFrames value
		 * @param injection_time A #WebKitUserScriptInjectionTime value
		 * @param world_name the name of a #WebKitScriptWorld
		 * @param allow_list An allow_list of URI patterns or %NULL
		 * @param block_list A block_list of URI patterns or %NULL
		 * @returns A new #WebKitUserScript
		 */
		public static new_for_world(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, world_name: string, allow_list: string[], block_list: string[]): UserScript;
		/**
		 * Atomically increments the reference count of #user_script by one.
		 * This function is MT-safe and may be called from any thread.
		 * @returns The passed #WebKitUserScript
		 */
		public ref(): UserScript;
		/**
		 * Atomically decrements the reference count of #user_script by one.
		 * If the reference count drops to 0, all memory allocated by
		 * #WebKitUserScript is released. This function is MT-safe and may be called
		 * from any thread.
		 */
		public unref(): void;
	}

	interface UserStyleSheet {}
	class UserStyleSheet {
		public constructor();
		/**
		 * Creates a new user style sheet. Style sheets can be applied to some URIs
		 * only by passing non-null values for #allow_list or #block_list. Passing a
		 * %NULL allow_list implies that all URIs are on the allow_list. The style
		 * sheet is applied if an URI matches the allow_list and not the block_list.
		 * URI patterns must be of the form `[protocol]://[host]/[path]`, where the
		 * *host* and *path* components can contain the wildcard character (`*`) to
		 * represent zero or more other characters.
		 * @param source Source code of the user style sheet.
		 * @param injected_frames A #WebKitUserContentInjectedFrames value
		 * @param level A #WebKitUserStyleLevel
		 * @param allow_list An allow_list of URI patterns or %NULL
		 * @param block_list A block_list of URI patterns or %NULL
		 * @returns A new #WebKitUserStyleSheet
		 */
		public static new(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, allow_list: string[], block_list: string[]): UserStyleSheet;
		/**
		 * Creates a new user style sheet for script world with name #world_name.
		 * See webkit_user_style_sheet_new() for a full description.
		 * @param source Source code of the user style sheet.
		 * @param injected_frames A #WebKitUserContentInjectedFrames value
		 * @param level A #WebKitUserStyleLevel
		 * @param world_name the name of a #WebKitScriptWorld
		 * @param allow_list An allow_list of URI patterns or %NULL
		 * @param block_list A block_list of URI patterns or %NULL
		 * @returns A new #WebKitUserStyleSheet
		 */
		public static new_for_world(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, world_name: string, allow_list: string[], block_list: string[]): UserStyleSheet;
		/**
		 * Atomically increments the reference count of #user_style_sheet by one.
		 * This function is MT-safe and may be called from any thread.
		 * @returns The passed #WebKitUserStyleSheet
		 */
		public ref(): UserStyleSheet;
		/**
		 * Atomically decrements the reference count of #user_style_sheet by one.
		 * If the reference count drops to 0, all memory allocated by
		 * #WebKitUserStyleSheet is released. This function is MT-safe and may be
		 * called from any thread.
		 */
		public unref(): void;
	}

	interface WebContextClass {}
	class WebContextClass {
		public constructor();
		public parent: GObject.ObjectClass;
		public download_started: {(context: WebContext, download: Download): void;};
		public initialize_web_extensions: {(context: WebContext): void;};
		public initialize_notification_permissions: {(context: WebContext): void;};
		public automation_started: {(context: WebContext, session: AutomationSession): void;};
		public user_message_received: {(context: WebContext, message: UserMessage): boolean;};
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
	}

	interface WebContextPrivate {}
	class WebContextPrivate {
		public constructor();
	}

	interface WebInspectorClass {}
	class WebInspectorClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface WebInspectorPrivate {}
	class WebInspectorPrivate {
		public constructor();
	}

	interface WebResourceClass {}
	class WebResourceClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface WebResourcePrivate {}
	class WebResourcePrivate {
		public constructor();
	}

	interface WebViewBaseClass {}
	class WebViewBaseClass {
		public constructor();
		public parentClass: Gtk.ContainerClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface WebViewBasePrivate {}
	class WebViewBasePrivate {
		public constructor();
	}

	interface WebViewClass {}
	class WebViewClass {
		public constructor();
		public parent: WebViewBaseClass;
		public load_changed: {(web_view: WebView, load_event: LoadEvent): void;};
		public load_failed: {(web_view: WebView, load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean;};
		public create: {(web_view: WebView, navigation_action: NavigationAction): Gtk.Widget;};
		public ready_to_show: {(web_view: WebView): void;};
		public run_as_modal: {(web_view: WebView): void;};
		public close: {(web_view: WebView): void;};
		public script_dialog: {(web_view: WebView, dialog: ScriptDialog): boolean;};
		public decide_policy: {(web_view: WebView, decision: PolicyDecision, _type: PolicyDecisionType): boolean;};
		public permission_request: {(web_view: WebView, permission_request: PermissionRequest): boolean;};
		public mouse_target_changed: {(web_view: WebView, hit_test_result: HitTestResult, modifiers: number): void;};
		public print: {(web_view: WebView, print_operation: PrintOperation): boolean;};
		public resource_load_started: {(web_view: WebView, resource: WebResource, request: URIRequest): void;};
		public enter_fullscreen: {(web_view: WebView): boolean;};
		public leave_fullscreen: {(web_view: WebView): boolean;};
		public run_file_chooser: {(web_view: WebView, request: FileChooserRequest): boolean;};
		public context_menu: {(web_view: WebView, context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean;};
		public context_menu_dismissed: {(web_view: WebView): void;};
		public submit_form: {(web_view: WebView, request: FormSubmissionRequest): void;};
		public insecure_content_detected: {(web_view: WebView, event: InsecureContentEvent): void;};
		public web_process_crashed: {(web_view: WebView): boolean;};
		public authenticate: {(web_view: WebView, request: AuthenticationRequest): boolean;};
		public load_failed_with_tls_errors: {(web_view: WebView, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean;};
		public show_notification: {(web_view: WebView, notification: Notification): boolean;};
		public run_color_chooser: {(web_view: WebView, request: ColorChooserRequest): boolean;};
		public show_option_menu: {(web_view: WebView, rectangle: Gdk.Rectangle, menu: OptionMenu): boolean;};
		public web_process_terminated: {(web_view: WebView, reason: WebProcessTerminationReason): void;};
		public user_message_received: {(web_view: WebView, message: UserMessage): boolean;};
		public _webkit_reserved0: {(): void;};
	}

	interface WebViewPrivate {}
	class WebViewPrivate {
		public constructor();
	}

	interface WebViewSessionState {}
	class WebViewSessionState {
		public constructor();
		/**
		 * Creates a new #WebKitWebViewSessionState from serialized data.
		 * @param data a #GBytes
		 * @returns a new #WebKitWebViewSessionState, or %NULL if #data doesn't contain a
		 *     valid serialized #WebKitWebViewSessionState.
		 */
		public static new(data: GLib.Bytes): WebViewSessionState;
		/**
		 * Atomically increments the reference count of #state by one. This
		 * function is MT-safe and may be called from any thread.
		 * @returns The passed in #WebKitWebViewSessionState
		 */
		public ref(): WebViewSessionState;
		/**
		 * Serializes a #WebKitWebViewSessionState.
		 * @returns a #GBytes containing the #state serialized.
		 */
		public serialize(): GLib.Bytes;
		/**
		 * Atomically decrements the reference count of #state by one. If the
		 * reference count drops to 0, all memory allocated by the #WebKitWebViewSessionState is
		 * released. This function is MT-safe and may be called from any thread.
		 */
		public unref(): void;
	}

	interface WebsiteData {}
	class WebsiteData {
		public constructor();
		/**
		 * Gets the name of #WebKitWebsiteData. This is the website name, normally represented by
		 * a domain or host name. All local documents are grouped in the same #WebKitWebsiteData using
		 * the name "Local files".
		 * @returns the website name of #website_data.
		 */
		public get_name(): string;
		/**
		 * Gets the size of the data of types #types in a #WebKitWebsiteData.
		 * Note that currently the data size is only known for %WEBKIT_WEBSITE_DATA_DISK_CACHE data type
		 * so for all other types 0 will be returned.
		 * @param types a bitmask  of #WebKitWebsiteDataTypes
		 * @returns the size of #website_data for the given #types.
		 */
		public get_size(types: WebsiteDataTypes): number;
		/**
		 * Gets the types of data stored in the client for a #WebKitWebsiteData. These are the
		 * types actually present, not the types queried with webkit_website_data_manager_fetch().
		 * @returns a bitmask of #WebKitWebsiteDataTypes in #website_data
		 */
		public get_types(): WebsiteDataTypes;
		/**
		 * Atomically increments the reference count of #website_data by one.
		 * This function is MT-safe and may be called from any thread.
		 * @returns The passed #WebKitWebsiteData
		 */
		public ref(): WebsiteData;
		/**
		 * Atomically decrements the reference count of #website_data by one.
		 * If the reference count drops to 0, all memory allocated by
		 * #WebKitWebsiteData is released. This function is MT-safe and may be
		 * called from any thread.
		 */
		public unref(): void;
	}

	interface WebsiteDataAccessPermissionRequestClass {}
	class WebsiteDataAccessPermissionRequestClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface WebsiteDataAccessPermissionRequestPrivate {}
	class WebsiteDataAccessPermissionRequestPrivate {
		public constructor();
	}

	interface WebsiteDataManagerClass {}
	class WebsiteDataManagerClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface WebsiteDataManagerPrivate {}
	class WebsiteDataManagerPrivate {
		public constructor();
	}

	interface WebsitePoliciesClass {}
	class WebsitePoliciesClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface WebsitePoliciesPrivate {}
	class WebsitePoliciesPrivate {
		public constructor();
	}

	interface WindowPropertiesClass {}
	class WindowPropertiesClass {
		public constructor();
		public parent_class: GObject.ObjectClass;
		public _webkit_reserved0: {(): void;};
		public _webkit_reserved1: {(): void;};
		public _webkit_reserved2: {(): void;};
		public _webkit_reserved3: {(): void;};
	}

	interface WindowPropertiesPrivate {}
	class WindowPropertiesPrivate {
		public constructor();
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PermissionRequest} instead.
	 */
	interface IPermissionRequest {
		/**
		 * Allow the action which triggered this request.
		 */
		allow(): void;
		/**
		 * Deny the action which triggered this request.
		 */
		deny(): void;
	}

	/** This construct is only for enabling class multi-inheritance,
	 * use {@link PermissionRequest} instead.
	 */
	type PermissionRequestMixin = IPermissionRequest;

	interface PermissionRequest extends PermissionRequestMixin {}

	class PermissionRequest {
		public constructor();
	}



	/**
	 * Enum values representing the authentication scheme.
	 */
	enum AuthenticationScheme {
		/**
		 * The default authentication scheme of WebKit.
		 */
		DEFAULT = 1,
		/**
		 * Basic authentication scheme as defined in RFC 2617.
		 */
		HTTP_BASIC = 2,
		/**
		 * Digest authentication scheme as defined in RFC 2617.
		 */
		HTTP_DIGEST = 3,
		/**
		 * HTML Form authentication.
		 */
		HTML_FORM = 4,
		/**
		 * NTLM Microsoft proprietary authentication scheme.
		 */
		NTLM = 5,
		/**
		 * Negotiate (or SPNEGO) authentication scheme as defined in RFC 4559.
		 */
		NEGOTIATE = 6,
		/**
		 * Client Certificate Authentication (see RFC 2246).
		 */
		CLIENT_CERTIFICATE_REQUESTED = 7,
		/**
		 * Server Trust Authentication.
		 */
		SERVER_TRUST_EVALUATION_REQUESTED = 8,
		/**
		 * Authentication scheme unknown.
		 */
		UNKNOWN = 100
	}

	/**
	 * Enum values used for determining the automation browsing context presentation.
	 */
	enum AutomationBrowsingContextPresentation {
		/**
		 * a window
		 */
		WINDOW = 0,
		/**
		 * a tab
		 */
		TAB = 1
	}

	/**
	 * Enum values used to specify autoplay policies.
	 */
	enum AutoplayPolicy {
		/**
		 * Do not restrict autoplay.
		 */
		ALLOW = 0,
		/**
		 * Allow videos to autoplay if
		 *     they have no audio track, or if their audio track is muted.
		 */
		ALLOW_WITHOUT_SOUND = 1,
		/**
		 * Never allow autoplay.
		 */
		DENY = 2
	}

	/**
	 * Enum values used for determining the #WebKitWebContext cache model.
	 */
	enum CacheModel {
		/**
		 * Disable the cache completely, which
		 *   substantially reduces memory usage. Useful for applications that only
		 *   access a single local file, with no navigation to other pages. No remote
		 *   resources will be cached.
		 */
		DOCUMENT_VIEWER = 0,
		/**
		 * Improve document load speed substantially
		 *   by caching a very large number of resources and previously viewed content.
		 */
		WEB_BROWSER = 1,
		/**
		 * A cache model optimized for viewing
		 *   a series of local files -- for example, a documentation viewer or a website
		 *   designer. WebKit will cache a moderate number of resources.
		 */
		DOCUMENT_BROWSER = 2
	}

	/**
	 * Enum values used to denote the stock actions for
	 * #WebKitContextMenuItem<!-- -->s
	 */
	enum ContextMenuAction {
		/**
		 * No action, used by separator menu items.
		 */
		NO_ACTION = 0,
		/**
		 * Open current link.
		 */
		OPEN_LINK = 1,
		/**
		 * Open current link in a new window.
		 */
		OPEN_LINK_IN_NEW_WINDOW = 2,
		/**
		 * Download link destination.
		 */
		DOWNLOAD_LINK_TO_DISK = 3,
		/**
		 * Copy link location to the clipboard.
		 */
		COPY_LINK_TO_CLIPBOARD = 4,
		/**
		 * Open current image in a new window.
		 */
		OPEN_IMAGE_IN_NEW_WINDOW = 5,
		/**
		 * Download current image.
		 */
		DOWNLOAD_IMAGE_TO_DISK = 6,
		/**
		 * Copy current image to the clipboard.
		 */
		COPY_IMAGE_TO_CLIPBOARD = 7,
		/**
		 * Copy current image location to the clipboard.
		 */
		COPY_IMAGE_URL_TO_CLIPBOARD = 8,
		/**
		 * Open current frame in a new window.
		 */
		OPEN_FRAME_IN_NEW_WINDOW = 9,
		/**
		 * Load the previous history item.
		 */
		GO_BACK = 10,
		/**
		 * Load the next history item.
		 */
		GO_FORWARD = 11,
		/**
		 * Stop any ongoing loading operation.
		 */
		STOP = 12,
		/**
		 * Reload the contents of current view.
		 */
		RELOAD = 13,
		/**
		 * Copy current selection the clipboard.
		 */
		COPY = 14,
		/**
		 * Cut current selection to the clipboard.
		 */
		CUT = 15,
		/**
		 * Paste clipboard contents.
		 */
		PASTE = 16,
		/**
		 * Delete current selection.
		 */
		DELETE = 17,
		/**
		 * Select all text.
		 */
		SELECT_ALL = 18,
		/**
		 * Input methods menu.
		 */
		INPUT_METHODS = 19,
		/**
		 * Unicode menu.
		 */
		UNICODE = 20,
		/**
		 * A proposed replacement for a misspelled word.
		 */
		SPELLING_GUESS = 21,
		/**
		 * An indicator that spellchecking found no proposed replacements.
		 */
		NO_GUESSES_FOUND = 22,
		/**
		 * Causes the spellchecker to ignore the word for this session.
		 */
		IGNORE_SPELLING = 23,
		/**
		 * Causes the spellchecker to add the word to the dictionary.
		 */
		LEARN_SPELLING = 24,
		/**
		 * Ignore grammar.
		 */
		IGNORE_GRAMMAR = 25,
		/**
		 * Font options menu.
		 */
		FONT_MENU = 26,
		/**
		 * Bold.
		 */
		BOLD = 27,
		/**
		 * Italic.
		 */
		ITALIC = 28,
		/**
		 * Underline.
		 */
		UNDERLINE = 29,
		/**
		 * Outline.
		 */
		OUTLINE = 30,
		/**
		 * Open current element in the inspector.
		 */
		INSPECT_ELEMENT = 31,
		/**
		 * Open current video element in a new window.
		 */
		OPEN_VIDEO_IN_NEW_WINDOW = 32,
		/**
		 * Open current audio element in a new window.
		 */
		OPEN_AUDIO_IN_NEW_WINDOW = 33,
		/**
		 * Copy video link location in to the clipboard.
		 */
		COPY_VIDEO_LINK_TO_CLIPBOARD = 34,
		/**
		 * Copy audio link location in to the clipboard.
		 */
		COPY_AUDIO_LINK_TO_CLIPBOARD = 35,
		/**
		 * Enable or disable media controls.
		 */
		TOGGLE_MEDIA_CONTROLS = 36,
		/**
		 * Enable or disable media loop.
		 */
		TOGGLE_MEDIA_LOOP = 37,
		/**
		 * Show current video element in fullscreen mode.
		 */
		ENTER_VIDEO_FULLSCREEN = 38,
		/**
		 * Play current media element.
		 */
		MEDIA_PLAY = 39,
		/**
		 * Pause current media element.
		 */
		MEDIA_PAUSE = 40,
		/**
		 * Mute current media element.
		 */
		MEDIA_MUTE = 41,
		/**
		 * Download video to disk. Since 2.2
		 */
		DOWNLOAD_VIDEO_TO_DISK = 42,
		/**
		 * Download audio to disk. Since 2.2
		 */
		DOWNLOAD_AUDIO_TO_DISK = 43,
		/**
		 * Insert an emoji. Since 2.26
		 */
		INSERT_EMOJI = 44,
		/**
		 * Paste clipboard contents as plain text. Since 2.30
		 */
		PASTE_AS_PLAIN_TEXT = 45,
		/**
		 * Custom action defined by applications.
		 */
		CUSTOM = 10000
	}

	/**
	 * Enum values used to denote the cookie acceptance policies.
	 */
	enum CookieAcceptPolicy {
		/**
		 * Accept all cookies unconditionally.
		 */
		ALWAYS = 0,
		/**
		 * Reject all cookies unconditionally.
		 */
		NEVER = 1,
		/**
		 * Accept only cookies set by the main document loaded.
		 */
		NO_THIRD_PARTY = 2
	}

	/**
	 * Enum values used to denote the cookie persistent storage types.
	 */
	enum CookiePersistentStorage {
		/**
		 * Cookies are stored in a text
		 *  file in the Mozilla "cookies.txt" format.
		 */
		TEXT = 0,
		/**
		 * Cookies are stored in a SQLite
		 *  file in the current Mozilla format.
		 */
		SQLITE = 1
	}

	/**
	 * Enum values representing the duration for which a credential persists.
	 */
	enum CredentialPersistence {
		/**
		 * Credential does not persist
		 */
		NONE = 0,
		/**
		 * Credential persists for session only
		 */
		FOR_SESSION = 1,
		/**
		 * Credential persists permanently
		 */
		PERMANENT = 2
	}

	/**
	 * Enum values used to denote the various download errors.
	 */
	enum DownloadError {
		/**
		 * Download failure due to network error
		 */
		NETWORK = 499,
		/**
		 * Download was cancelled by user
		 */
		CANCELLED_BY_USER = 400,
		/**
		 * Download failure due to destination error
		 */
		DESTINATION = 401
	}

	/**
	 * Enum values used to denote the various errors related to the #WebKitFaviconDatabase.
	 */
	enum FaviconDatabaseError {
		/**
		 * The #WebKitFaviconDatabase has not been initialized yet
		 */
		NOT_INITIALIZED = 0,
		/**
		 * There is not an icon available for the requested URL
		 */
		FAVICON_NOT_FOUND = 1,
		/**
		 * There might be an icon for the requested URL, but its data is unknown at the moment
		 */
		FAVICON_UNKNOWN = 2
	}

	/**
	 * Enum values used for determining the hardware acceleration policy.
	 */
	enum HardwareAccelerationPolicy {
		/**
		 * Hardware acceleration is enabled/disabled as request by web contents.
		 */
		ON_DEMAND = 0,
		/**
		 * Hardware acceleration is always enabled, even for websites not requesting it.
		 */
		ALWAYS = 1,
		/**
		 * Hardware acceleration is always disabled, even for websites requesting it.
		 */
		NEVER = 2
	}

	/**
	 * Enum values used to describe the primary purpose of the active editable element.
	 */
	enum InputPurpose {
		/**
		 * Editable element expects any characters
		 */
		FREE_FORM = 0,
		/**
		 * Editable element expects digits
		 */
		DIGITS = 1,
		/**
		 * Editable element expects a number
		 */
		NUMBER = 2,
		/**
		 * Editable element expects a telephone
		 */
		PHONE = 3,
		/**
		 * Editable element expects a URL
		 */
		URL = 4,
		/**
		 * Editable element expects an email
		 */
		EMAIL = 5,
		/**
		 * Editable element expects a password
		 */
		PASSWORD = 6
	}

	/**
	 * Enum values used to denote the different events which can trigger
	 * the detection of insecure content.
	 */
	enum InsecureContentEvent {
		/**
		 * Insecure content has been detected by
		 * trying to execute any kind of logic (e.g. a script) from an
		 * untrusted source.
		 */
		RUN = 0,
		/**
		 * Insecure content has been
		 * detected by trying to display any kind of resource (e.g. an image)
		 * from an untrusted source.
		 */
		DISPLAYED = 1
	}

	/**
	 * Enum values used to denote errors happening when executing JavaScript
	 */
	enum JavascriptError {
		/**
		 * An exception was raised in JavaScript execution
		 */
		FAILED = 699
	}

	/**
	 * Enum values used to denote the different events that happen during a
	 * #WebKitWebView load operation.
	 */
	enum LoadEvent {
		/**
		 * A new load request has been made.
		 * No data has been received yet, empty structures have
		 * been allocated to perform the load; the load may still
		 * fail due to transport issues such as not being able to
		 * resolve a name, or connect to a port.
		 */
		STARTED = 0,
		/**
		 * A provisional data source received
		 * a server redirect.
		 */
		REDIRECTED = 1,
		/**
		 * The content started arriving for a page load.
		 * The necessary transport requirements are established, and the
		 * load is being performed.
		 */
		COMMITTED = 2,
		/**
		 * Load completed. All resources are done loading
		 * or there was an error during the load operation.
		 */
		FINISHED = 3
	}

	/**
	 * Enum values used to denote the various navigation types.
	 */
	enum NavigationType {
		/**
		 * The navigation was triggered by clicking a link.
		 */
		LINK_CLICKED = 0,
		/**
		 * The navigation was triggered by submitting a form.
		 */
		FORM_SUBMITTED = 1,
		/**
		 * The navigation was triggered by navigating forward or backward.
		 */
		BACK_FORWARD = 2,
		/**
		 * The navigation was triggered by reloading.
		 */
		RELOAD = 3,
		/**
		 * The navigation was triggered by resubmitting a form.
		 */
		FORM_RESUBMITTED = 4,
		/**
		 * The navigation was triggered by some other action.
		 */
		OTHER = 5
	}

	/**
	 * Enum values used to denote the various network errors.
	 */
	enum NetworkError {
		/**
		 * Generic load failure
		 */
		FAILED = 399,
		/**
		 * Load failure due to transport error
		 */
		TRANSPORT = 300,
		/**
		 * Load failure due to unknown protocol
		 */
		UNKNOWN_PROTOCOL = 301,
		/**
		 * Load failure due to cancellation
		 */
		CANCELLED = 302,
		/**
		 * Load failure due to missing file
		 */
		FILE_DOES_NOT_EXIST = 303
	}

	/**
	 * Enum values used to set the network proxy mode.
	 */
	enum NetworkProxyMode {
		/**
		 * Use the default proxy of the system.
		 */
		DEFAULT = 0,
		/**
		 * Do not use any proxy.
		 */
		NO_PROXY = 1,
		/**
		 * Use custom proxy settings.
		 */
		CUSTOM = 2
	}

	/**
	 * Enum values used to denote the various plugin and multimedia errors.
	 */
	enum PluginError {
		/**
		 * Generic plugin load failure. Deprecated 2.32
		 */
		FAILED = 299,
		/**
		 * Load failure due to missing plugin. Deprecated 2.32
		 */
		CANNOT_FIND_PLUGIN = 200,
		/**
		 * Load failure due to inability to load plugin. Deprecated 2.32
		 */
		CANNOT_LOAD_PLUGIN = 201,
		/**
		 * Load failure due to missing Java support that is required to load plugin. Deprecated 2.32
		 */
		JAVA_UNAVAILABLE = 202,
		/**
		 * Load failure due to connection cancellation. Deprecated 2.32
		 */
		CONNECTION_CANCELLED = 203,
		/**
		 * Preliminary load failure for media content types. A new load will be started to perform the media load.
		 */
		WILL_HANDLE_LOAD = 204
	}

	/**
	 * Enum values used for determining the type of a policy decision during
	 * #WebKitWebView::decide-policy.
	 */
	enum PolicyDecisionType {
		/**
		 * This type of policy decision
		 *   is requested when WebKit is about to navigate to a new page in either the
		 *   main frame or a subframe. Acceptable policy decisions are either
		 *   webkit_policy_decision_use() or webkit_policy_decision_ignore(). This
		 *   type of policy decision is always a #WebKitNavigationPolicyDecision.
		 */
		NAVIGATION_ACTION = 0,
		/**
		 * This type of policy decision
		 *   is requested when WebKit is about to create a new window. Acceptable policy
		 *   decisions are either webkit_policy_decision_use() or
		 *   webkit_policy_decision_ignore(). This type of policy decision is always
		 *   a #WebKitNavigationPolicyDecision. These decisions are useful for implementing
		 *   special actions for new windows, such as forcing the new window to open
		 *   in a tab when a keyboard modifier is active or handling a special
		 *   target attribute on &lt;a&gt; elements.
		 */
		NEW_WINDOW_ACTION = 1,
		/**
		 * This type of decision is used when WebKit has
		 *   received a response for a network resource and is about to start the load.
		 *   Note that these resources include all subresources of a page such as images
		 *   and stylesheets as well as main documents. Appropriate policy responses to
		 *   this decision are webkit_policy_decision_use(), webkit_policy_decision_ignore(),
		 *   or webkit_policy_decision_download(). This type of policy decision is always
		 *   a #WebKitResponsePolicyDecision. This decision is useful for forcing
		 *   some types of resources to be downloaded rather than rendered in the WebView
		 *   or to block the transfer of resources entirely.
		 */
		RESPONSE = 2
	}

	/**
	 * Enum values used to denote the various policy errors.
	 */
	enum PolicyError {
		/**
		 * Generic load failure due to policy error
		 */
		FAILED = 199,
		/**
		 * Load failure due to unsupported mime type
		 */
		CANNOT_SHOW_MIME_TYPE = 100,
		/**
		 * Load failure due to URI that can not be shown
		 */
		CANNOT_SHOW_URI = 101,
		/**
		 * Load failure due to frame load interruption by policy change
		 */
		FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE = 102,
		/**
		 * Load failure due to port restriction
		 */
		CANNOT_USE_RESTRICTED_PORT = 103
	}

	/**
	 * Enum values used to denote the various print errors.
	 */
	enum PrintError {
		/**
		 * Unspecified error during a print operation
		 */
		GENERAL = 599,
		/**
		 * Selected printer cannot be found
		 */
		PRINTER_NOT_FOUND = 500,
		/**
		 * Invalid page range
		 */
		INVALID_PAGE_RANGE = 501
	}

	/**
	 * Enum values representing the response of the print dialog shown with
	 * webkit_print_operation_run_dialog().
	 */
	enum PrintOperationResponse {
		/**
		 * Print button was clicked in print dialog
		 */
		PRINT = 0,
		/**
		 * Print dialog was cancelled
		 */
		CANCEL = 1
	}

	/**
	 * Enum values used for determining the #WebKitWebContext process model.
	 */
	enum ProcessModel {
		/**
		 * Deprecated 2.26.
		 */
		SHARED_SECONDARY_PROCESS = 0,
		/**
		 * Use one process
		 *   for each #WebKitWebView, while still allowing for some of them to
		 *   share a process in certain situations. The main advantage
		 *   of this process model is that the rendering process for a web view
		 *   can crash while the rest of the views keep working normally. This
		 *   process model is indicated for applications which may use a number
		 *   of web views and the content of in each must not interfere with the
		 *   rest — for example a full-fledged web browser with support for
		 *   multiple tabs.
		 */
		MULTIPLE_SECONDARY_PROCESSES = 1
	}

	/**
	 * Enum values to specify the different ways in which a #WebKitWebView
	 * can save its current web page into a self-contained file.
	 */
	enum SaveMode {
		/**
		 * Save the current page using the MHTML format.
		 */
		MHTML = 0
	}

	/**
	 * Enum values used for determining the type of #WebKitScriptDialog
	 */
	enum ScriptDialogType {
		/**
		 * Alert script dialog, used to show a
		 * message to the user.
		 */
		ALERT = 0,
		/**
		 * Confirm script dialog, used to ask
		 * confirmation to the user.
		 */
		CONFIRM = 1,
		/**
		 * Prompt script dialog, used to ask
		 * information to the user.
		 */
		PROMPT = 2,
		/**
		 * Before unload confirm dialog,
		 * used to ask confirmation to leave the current page to the user. Since 2.12
		 */
		BEFORE_UNLOAD_CONFIRM = 3
	}

	/**
	 * Enum values used to denote errors happening when creating snapshots of #WebKitWebView
	 */
	enum SnapshotError {
		/**
		 * An error occurred when creating a webpage snapshot.
		 */
		CREATE = 799
	}

	/**
	 * Enum values used to specify the region from which to get a #WebKitWebView
	 * snapshot
	 */
	enum SnapshotRegion {
		/**
		 * Specifies a snapshot only for the area that is
		 * visible in the webview
		 */
		VISIBLE = 0,
		/**
		 * A snapshot of the entire document.
		 */
		FULL_DOCUMENT = 1
	}

	/**
	 * Enum values used to denote the TLS errors policy.
	 */
	enum TLSErrorsPolicy {
		/**
		 * Ignore TLS errors.
		 */
		IGNORE = 0,
		/**
		 * TLS errors will emit
		 *   #WebKitWebView::load-failed-with-tls-errors and, if the signal is handled,
		 *   finish the load. In case the signal is not handled,
		 *   #WebKitWebView::load-failed is emitted before the load finishes.
		 */
		FAIL = 1
	}

	enum UserContentFilterError {
		/**
		 * The JSON source for a content filter is invalid.
		 */
		INVALID_SOURCE = 0,
		/**
		 * The requested content filter could not be found.
		 */
		NOT_FOUND = 1
	}

	/**
	 * Specifies in which frames user style sheets are to be inserted in.
	 */
	enum UserContentInjectedFrames {
		/**
		 * Insert the user style
		 *   sheet in all the frames loaded by the web view, including
		 *   nested frames. This is the default.
		 */
		ALL_FRAMES = 0,
		/**
		 * Insert the user style
		 *   sheet *only* in the top-level frame loaded by the web view,
		 *   and *not* in the nested frames.
		 */
		TOP_FRAME = 1
	}

	/**
	 * Enum values used to denote errors happening when sending user messages.
	 */
	enum UserMessageError {
		/**
		 * The message was not handled by the receiver.
		 */
		MESSAGE = 0
	}

	/**
	 * Specifies at which place of documents an user script will be inserted.
	 */
	enum UserScriptInjectionTime {
		/**
		 * Insert the code of the user
		 *   script at the beginning of loaded documents. This is the default.
		 */
		START = 0,
		/**
		 * Insert the code of the user
		 *   script at the end of the loaded documents.
		 */
		END = 1
	}

	/**
	 * Specifies how to treat an user style sheet.
	 */
	enum UserStyleLevel {
		/**
		 * The style sheet is an user style sheet,
		 *   its contents always override other style sheets. This is the default.
		 */
		USER = 0,
		/**
		 * The style sheet will be treated as if
		 *   it was provided by the loaded documents. That means other user style
		 *   sheets may still override it.
		 */
		AUTHOR = 1
	}

	/**
	 * Enum values used to specify the reason why the web process terminated abnormally.
	 */
	enum WebProcessTerminationReason {
		/**
		 * the web process crashed.
		 */
		CRASHED = 0,
		/**
		 * the web process exceeded the memory limit.
		 */
		EXCEEDED_MEMORY_LIMIT = 1
	}

	/**
	 * Enum values with flags representing typing attributes.
	 */
	enum EditorTypingAttributes {
		/**
		 * No typing attributes.
		 */
		NONE = 2,
		/**
		 * Bold typing attribute.
		 */
		BOLD = 4,
		/**
		 * Italic typing attribute.
		 */
		ITALIC = 8,
		/**
		 * Underline typing attribute.
		 */
		UNDERLINE = 16,
		/**
		 * Strikethrough typing attribute.
		 */
		STRIKETHROUGH = 32
	}

	/**
	 * Enum values used to specify search options.
	 */
	enum FindOptions {
		/**
		 * no search flags, this means a case
		 *   sensitive, no wrap, forward only search.
		 */
		NONE = 0,
		/**
		 * case insensitive search.
		 */
		CASE_INSENSITIVE = 1,
		/**
		 * search text only at the
		 *   begining of the words.
		 */
		AT_WORD_STARTS = 2,
		/**
		 * treat
		 *   capital letters in the middle of words as word start.
		 */
		TREAT_MEDIAL_CAPITAL_AS_WORD_START = 4,
		/**
		 * search backwards.
		 */
		BACKWARDS = 8,
		/**
		 * if not present search will stop
		 *   at the end of the document.
		 */
		WRAP_AROUND = 16
	}

	/**
	 * Enum values with flags representing the context of a #WebKitHitTestResult.
	 */
	enum HitTestResultContext {
		/**
		 * anywhere in the document.
		 */
		DOCUMENT = 2,
		/**
		 * a hyperlink element.
		 */
		LINK = 4,
		/**
		 * an image element.
		 */
		IMAGE = 8,
		/**
		 * a video or audio element.
		 */
		MEDIA = 16,
		/**
		 * an editable element
		 */
		EDITABLE = 32,
		/**
		 * a scrollbar element.
		 */
		SCROLLBAR = 64,
		/**
		 * a selected element. Since 2.8
		 */
		SELECTION = 128
	}

	/**
	 * Enum values used to describe hints that might be taken into account by input methods.
	 */
	enum InputHints {
		/**
		 * No special behavior suggested
		 */
		NONE = 0,
		/**
		 * Suggest spell checking
		 */
		SPELLCHECK = 1,
		/**
		 * Suggest to not autocapitlize
		 */
		LOWERCASE = 2,
		/**
		 * Suggest to capitalize all text
		 */
		UPPERCASE_CHARS = 4,
		/**
		 * Suggest to capitalize the first character of each word
		 */
		UPPERCASE_WORDS = 8,
		/**
		 * Suggest to capitalize the first word of each sentence
		 */
		UPPERCASE_SENTENCES = 16,
		/**
		 * Suggest to not show an onscreen keyboard
		 */
		INHIBIT_OSK = 32
	}

	/**
	 * Enum values used to specify options when taking a snapshot
	 * from a #WebKitWebView.
	 */
	enum SnapshotOptions {
		/**
		 * Do not include any special options.
		 */
		NONE = 0,
		/**
		 * Whether to include in the
		 * snapshot the highlight of the selected content.
		 */
		INCLUDE_SELECTION_HIGHLIGHTING = 1,
		/**
		 * Do not fill the background with white before
		 * rendering the snapshot. Since 2.8
		 */
		TRANSPARENT_BACKGROUND = 2
	}

	/**
	 * Enum values with flags representing types of Website data.
	 */
	enum WebsiteDataTypes {
		/**
		 * Memory cache.
		 */
		MEMORY_CACHE = 1,
		/**
		 * HTTP disk cache.
		 */
		DISK_CACHE = 2,
		/**
		 * Offline web application cache.
		 */
		OFFLINE_APPLICATION_CACHE = 4,
		/**
		 * Session storage data.
		 */
		SESSION_STORAGE = 8,
		/**
		 * Local storage data.
		 */
		LOCAL_STORAGE = 16,
		/**
		 * WebSQL databases. Deprecated 2.24
		 */
		WEBSQL_DATABASES = 32,
		/**
		 * IndexedDB databases.
		 */
		INDEXEDDB_DATABASES = 64,
		/**
		 * Plugins data. Deprecated 2.32
		 */
		PLUGIN_DATA = 128,
		/**
		 * Cookies.
		 */
		COOKIES = 256,
		/**
		 * Hash salt used to generate the device ids used by webpages. Since 2.24
		 */
		DEVICE_ID_HASH_SALT = 512,
		/**
		 * HSTS cache. Since 2.26
		 */
		HSTS_CACHE = 1024,
		/**
		 * Intelligent Tracking Prevention data. Since 2.30.
		 */
		ITP = 2048,
		/**
		 * Service worker registrations. Since 2.30
		 */
		SERVICE_WORKER_REGISTRATIONS = 4096,
		/**
		 * DOM (CacheStorage) cache. Since 2.30
		 */
		DOM_CACHE = 8192,
		/**
		 * All types.
		 */
		ALL = 16383
	}

	/**
	 * Type definition for a function that will be called back when an URI request is
	 * made for a user registered URI scheme.
	 */
	interface URISchemeRequestCallback {
		/**
		 * Type definition for a function that will be called back when an URI request is
		 * made for a user registered URI scheme.
		 * @param request the #WebKitURISchemeRequest
		 */
		(request: URISchemeRequest): void;
	}

	function download_error_quark(): GLib.Quark;

	function favicon_database_error_quark(): GLib.Quark;

	/**
	 * Returns the major version number of the WebKit library.
	 * (e.g. in WebKit version 1.8.3 this is 1.)
	 * 
	 * This function is in the library, so it represents the WebKit library
	 * your code is running against. Contrast with the #WEBKIT_MAJOR_VERSION
	 * macro, which represents the major version of the WebKit headers you
	 * have included when compiling your code.
	 * @returns the major version number of the WebKit library
	 */
	function get_major_version(): number;

	/**
	 * Returns the micro version number of the WebKit library.
	 * (e.g. in WebKit version 1.8.3 this is 3.)
	 * 
	 * This function is in the library, so it represents the WebKit library
	 * your code is running against. Contrast with the #WEBKIT_MICRO_VERSION
	 * macro, which represents the micro version of the WebKit headers you
	 * have included when compiling your code.
	 * @returns the micro version number of the WebKit library
	 */
	function get_micro_version(): number;

	/**
	 * Returns the minor version number of the WebKit library.
	 * (e.g. in WebKit version 1.8.3 this is 8.)
	 * 
	 * This function is in the library, so it represents the WebKit library
	 * your code is running against. Contrast with the #WEBKIT_MINOR_VERSION
	 * macro, which represents the minor version of the WebKit headers you
	 * have included when compiling your code.
	 * @returns the minor version number of the WebKit library
	 */
	function get_minor_version(): number;

	function javascript_error_quark(): GLib.Quark;

	/**
	 * Get the key system for which access permission is being requested.
	 * @param request a #WebKitMediaKeySystemPermissionRequest
	 * @returns the key system name for #request
	 */
	function media_key_system_permission_get_name(request: MediaKeySystemPermissionRequest): string;

	function network_error_quark(): GLib.Quark;

	function plugin_error_quark(): GLib.Quark;

	function policy_error_quark(): GLib.Quark;

	function print_error_quark(): GLib.Quark;

	function snapshot_error_quark(): GLib.Quark;

	/**
	 * Use this function to format a URI for display. The URIs used internally by
	 * WebKit may contain percent-encoded characters or Punycode, which are not
	 * generally suitable to display to users. This function provides protection
	 * against IDN homograph attacks, so in some cases the host part of the returned
	 * URI may be in Punycode if the safety check fails.
	 * @param uri the URI to be converted
	 * @returns #uri suitable for display, or %NULL in
	 *    case of error.
	 */
	function uri_for_display(uri: string): string;

	function user_content_filter_error_quark(): GLib.Quark;

	function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean;

	function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean;

	function user_message_error_quark(): GLib.Quark;

}