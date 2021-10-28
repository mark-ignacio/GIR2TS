declare namespace imports.gi.Cvc {

    interface IMixerControl {
        connect(signal: 'stream-added', callback: (actor: this, streamId: number) => void): number;
    }

    interface MixerControlOptions {
        name: string;
    }

    interface IMixerStream {
        name: string;
        is_muted: boolean;
        volume: number;
        connect(signal: 'notify::volume', callback: (...args: any) => void): number;
    }
}