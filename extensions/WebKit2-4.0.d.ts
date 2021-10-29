declare namespace imports.gi.WebKit2 {
    interface IWebView {
        /**
         * The current active URI of the WebKit2.WebView.
         * See WebKit2.WebView.get_uri for more details.
         */
        readonly uri: string
        connect(event: 'load-changed', callback: (actor: this, event: LoadEvent) => void): number;
    }
}