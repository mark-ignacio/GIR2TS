declare namespace imports.gi.Caribou {
    interface IKeyboardModel {
        keyboard_type: string;
        active_group: string;
    }

    interface KeyboardModelOptions extends Pick<IKeyboardModel, "keyboard_type"> {
        
    }
}