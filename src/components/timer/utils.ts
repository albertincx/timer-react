import Storage from '../../utils/storage';
import {APP_SETTINGS} from './consts';
import {ISettings} from "./types";

export const floorTime = (num: number | string, sep = 60) => Math.floor(sep ? +num / sep : +num);

export const getSettings = (): ISettings => {
    return Storage.getJ(APP_SETTINGS) || {};
};

export const getRandomMs = () => Math.random();

export const getTimeStr = (t: number) => `${t < 10 ? `0${t}` : t}`;

export const getHoursStr = (hour: number) => {
    let str = getTimeStr(hour);
    let h = floorTime(hour);
    if (h > 0) {
        if (h > 23) {
            h = floorTime(h, 24)
            str = `${h} days ${getTimeStr(floorTime(h / 24, 0))}:${getTimeStr(hour % 60)}`
        } else {
            str = `${h}:${getTimeStr(hour % 60)}`
        }
    }

    return str;
}
