import Storage from "../../utils/storage";
import {APP_SETTINGS, timerHistory, SUBS_KEY} from "./consts";
import {FilesData, ISettings, StorageFile} from "./types";

export const getSubs = () => {
    let s = Storage.getJ(SUBS_KEY) || [];
    if (!s) {
        s = [];
    }
    return s;
};
export const getSettings = (): ISettings => {
    return Storage.getJ(APP_SETTINGS) || {};
};

function shuffle(arr: string[]) {
    let currentIndex = arr.length;
    let temporaryValue;
    let randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        // eslint-disable-next-line no-param-reassign
        arr[currentIndex] = arr[randomIndex];
        // eslint-disable-next-line no-param-reassign
        arr[randomIndex] = temporaryValue;
    }

    return arr;
}

function getLocale(arr: string[]) {
    const h = new Date().getHours();
    const keys1 = shuffle(arr);
    return keys1.find((k: string, i: number) => h <= (24 / arr.length) * (i + 1)) || arr[0];
}

export function getLocales(sub: StorageFile) {
    return '';
}

export function speak(text: string, locale: string) {
    const {voice: voiceSelected, rate = 1, volume = 1, pitch = 1} = getSettings();
    const msg = new SpeechSynthesisUtterance();
    msg.text = `${text}`.replace(/\n/g, '');
    // Set the attributes.
    msg.volume = parseFloat(String(volume));
    msg.rate = parseFloat(String(rate));
    msg.pitch = parseFloat(String(pitch));
    // If a voice has been selected, find the voice and set the
    // utterance instance's voice attribute.
    if (voiceSelected || locale) {
        let _locale = `${locale}`.replace('-', '_');
    }
    window.speechSynthesis.speak(msg);
}

export const getItems = (subs?: any[]): FilesData => {
    if (!subs || !Array.isArray(subs) || subs.length === 0) {
        return {items: [], filenames: []};
    }
    const filenames = [subs[0].filename];
    let items: any[] = [];

    return {items, filenames};
};

export const findSubs = (files: any[], restore = false) => {
    if (files.length > 2) {
        files = files.slice(0, 2);
    }
    let subs = [];
    let error = '';

    for (let i = 0; i < files.length; i += 1) {
        if (files[i].bstr.trim()) {
            subs.push({
                bstr: files[i].bstr,
                filename: files[i].filename,
            });
        } else {
            error = 'EMPTY';
        }
    }

    if (subs.length) {
        if (restore) {
            subs = files;
            const currentSubs = getSubs();
            if (currentSubs) {
                saveToLocalStorage(currentSubs, true);
            }
        }
        Storage.setJ(SUBS_KEY, subs);
    }

    const {items, filenames} = getItems([...subs]);
    if (!restore) {
        saveToLocalStorage(subs);
    }

    return {items, showStr: '', error, filenames};
};

export const saveToLocalStorage = (subs: any, add = false) => {
    let h = Storage.getJ(timerHistory) || [];
    let filtered = [], set = false, firstAdded = false;
    if (h.length) {
        if (subs.length > 1) {
            filtered = h.filter((subsArray: any) => {
                if (!Array.isArray(subsArray) || subsArray.length === 0) {
                    return false;
                }
                return subsArray[0].filename !== subs[0].filename || subsArray[0].filename !== subs[1].filename
            });
            if (h.length !== filtered.length) {
                set = true;
            }
        }
    } else if (subs.length > 1) {
        filtered = [subs];
        firstAdded = true;
    }
    if (add) {
        if (subs.length > 1 && !firstAdded) {
            filtered = filtered.concat([subs]);
        }
    }
    if (filtered.length && (set || add)) {
        Storage.setJ(timerHistory, filtered);
    }
}

function pathsObj(paths: string[]) {
    let result: any[] = [];
    let level = {result};

    paths.forEach((path: string) => {
        path.split('/').reduce((r: any, name: string) => {
            if (!r[name]) {
                r[name] = {result: []};
                r.result.push({name, children: r[name].result})
            }

            return r[name];
        }, level)
    })

    return result;
}

export function findGroup(filenames: string[]) {
    let groups: string[] = [];
    let ff = filenames[0];

    filenames.map((i: string) => {
        let f = i;
        let _g = '';
        for (let ss = 0; ss < f.length; ss += 1) {
            if (f[ss] !== ff[ss]) {
                break;
            }
            _g += f[ss];
        }

        if (_g && _g !== ff && !groups.includes(_g)) {
            groups.push(_g);
        }
    });
    groups.sort();
    return groups[0];
}

export function _groupSubs(filenames: string[]) {
    let checkOther = true;
    const allGroups: any = [];
    let uniq = [...filenames];

    while (checkOther) {
        const group = findGroup([...uniq]);
        if (!group) {
            checkOther = false;
            break;
        }
        if (!allGroups.includes(group)) {
            allGroups.push(group);
        }
        uniq = filenames.filter(i => !allGroups.some((gr: string) => i.startsWith(gr)));
        checkOther = uniq.length > 0;
    }

    return allGroups;
}

function getFilenames(filenames: string[], txt: string) {
    let newF: string[] = [];
    filenames.map(f => {
        if (f.startsWith(txt)) {
            newF.push(f.replace(txt, txt + '/'));
            // newF.push(f.substring(txt.length));
        }
    })
    return newF;
}

export function groupSubs(filenames: string[]) {
    const sources = _groupSubs(filenames);
    //1 level various source subtitles
    const series: any = [];
    sources.map((s: string) => {
        const seasons: any = pathsObj(getFilenames(filenames, s));
        const files = seasons[0].children.map((f: any) => f.name);
        files.sort();
        seasons[0].files = [...files];
        series.push(seasons[0]);
    });

    return series;
}

function findDiff(str1: string, str2: string) {
    let diff = "";
    str2.split('').forEach(function (val: string, i: number) {
        if (val != str1.charAt(i))
            diff += val;
    });
    return diff;
}

export function getName(subs?: StorageFile[]) {
    if (!subs) {
        subs = getSubs();
    }
    const filenames = subs?.map(s => s.filename);
    if (filenames?.length) {
        if (filenames?.length === 1) {
            return;
        }
    }

    return filenames;
}

// Fetch the list of voices and populate the voice options.
export function loadVoices(selVoice: string, showMsg: boolean = false) {
    try {
        // Fetch the available voices.
        const voices = speechSynthesis.getVoices();
        // Create a new option element.
        const voiceSelect = document.getElementById('voice');
        if (!voiceSelect) {
            return;
        }
        const option = document.createElement('option');

        // Set the options value and text.
        option.value = '';
        option.innerHTML = '';

        // Add the option to the voice selector.
        voiceSelect.appendChild(option);
        if (voices && showMsg) {
            // speechSynthesis
            const supportMsg = document.getElementById('msg');
            if (supportMsg) {
                if (voices.length) {
                    supportMsg.innerHTML +=
                        ` And <strong>has</strong> ${voices.length} speech synthesis.`;
                } else {
                    supportMsg.innerHTML +=
                        ` But don't have any speech synthesis. We recommend using Google 
 <strong>Chrome / Chrome Mobile</strong> for this <strong>text-to-speech</strong>`;
                }
            }
        }
        // Loop through each of the voices.
        voices.forEach(function (voice) {
            // Create a new option element.
            const option = document.createElement('option');
            // Set the options value and text.
            option.value = voice.name;
            option.innerHTML = voice.name;
            if (voice.name === selVoice) {
                option.selected = true;
            }
            // Add the option to the voice selector.
            voiceSelect.appendChild(option);
        });
    } catch (e) {
        //
    }
}

export function testLoadVoices(currentVoice: string = '') {
    const supportMsg = document.getElementById('msg');
    if (supportMsg) {
        if ('speechSynthesis' in window) {
            supportMsg.innerHTML =
                'Your browser <strong onclick="return tryToCopyLines()">supports</strong> speech synthesis.';
        } else {
            supportMsg.innerHTML =
                'Sorry your browser <strong>does not support</strong> speech synthesis.<br>Try this in <a href="https://www.google.co.uk/intl/en/chrome/browser/canary.html">Chrome Canary</a>.';
            supportMsg.classList.add('not-supported');
        }
    }
    // Get the voice select element.
    loadVoices(currentVoice);
    // Chrome loads voices asynchronously.
    window.speechSynthesis.onvoiceschanged = function () {
        loadVoices(currentVoice, true);
    };
}
