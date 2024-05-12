export type ISettings = {
    pitch: number;
    voice: string;
    volume: number;
    rate: number;
}

export interface IState {
    showStr: string,
    error: string,
    showPopupFiles: boolean,
    modal: string,
    voice: string,

    ind: number | string,
    isShown: boolean | number,
    volume: number,
    rate: number,
    pitch: number,
}
