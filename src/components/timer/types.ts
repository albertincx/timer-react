export type FilesData = {
    filenames: string[],
    items: any[]
}

export type StorageFile = {
    bstr: string;
    filename: string;
    sep?: any;
}

export type ISettings = {
    pitch: number;
    voice: string;
    volume: number;
    rate: number;
}
