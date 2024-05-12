import Storage from "../../utils/storage";
import {APP_SETTINGS} from "./consts";
import {ISettings} from "./types";

export const getSettings = (): ISettings => {
    return Storage.getJ(APP_SETTINGS) || {};
};

export function getRandomMs() {
    return Math.random();
}
