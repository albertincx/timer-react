import React, {Component, useState} from 'react';
// @ts-ignore
// import { TimePicker } from 'react-ios-time-picker';
import {CascadeData} from "mobile-select";
import MSComponent from "./components/Ms";
import Storage from '../../utils/storage';
import Settings from "./components/Settings";
import {APP_SETTINGS, POPUP_DEMO, POPUP_DISCUSS, POPUP_SETTINGS, SCROLL_VAR, SUBS_KEY} from "./consts";

import {
    getLocales,
    findSubs,
    getItems, getSettings,
    getSubs,
    saveToLocalStorage,
    speak,
    testLoadVoices,
} from "./utils";
import {ISettings} from "./types";

import './style.css';

// import "mobile-select/dist/style/mobile-select.css";

const errors: any = {
    SAME: 'Files same, please upload different filename',
    EMPTY: 'One of uploaded file has empty content, please upload another file',
};

interface IState {
    showStr: string,
    ind: any,
    isShown: any,
    error: string,
    filenames: any[],
    items: any[],
    showPopupFiles: boolean,
    modal: string,
    voice: any,
    rate: any,
    volume: any,
    pitch: any,
}

let demoData = [
    {id: "1", value: "兰博基尼"},
    {
        id: "2",
        value: "劳斯莱斯",
        childs: [
            {
                id: "1",
                value: "曜影"
            },
            {
                id: "2",
                value: "幻影",
                childs: [
                    {
                        id: "1",
                        value: "标准版"
                    },
                    {
                        id: "2",
                        value: "加长版"
                    },
                    {
                        id: "3",
                        value: "巅峰之旅"
                    },
                    {
                        id: "4",
                        value: "流光熠世"
                    },
                    {
                        id: "5",
                        value: "都会典藏版"
                    }
                ]
            },
            {
                id: "3",
                value: "古思特",
                childs: [
                    {
                        id: "1",
                        value: "加长版"
                    },
                    {
                        id: "2",
                        value: "永恒之爱"
                    },
                    {
                        id: "3",
                        value: "英骥"
                    },
                    {
                        id: "4",
                        value: "阿尔卑斯典藏版"
                    }
                ]
            },
            {
                id: "4",
                value: "魅影",
                childs: [
                    {
                        id: "1",
                        value: "标准版"
                    },
                    {
                        id: "2",
                        value: "Black Badge"
                    }
                ]
            }
        ]
    },
    {
        id: "3",
        value: "宾利",
        childs: [
            {
                id: "1",
                value: "慕尚",
                childs: [
                    {
                        id: "1",
                        value: "标准版"
                    },
                    {
                        id: "2",
                        value: "极致版"
                    }
                ]
            },
            {
                id: "2",
                value: "欧陆",
                childs: [
                    {
                        id: "1",
                        value: "尊贵版"
                    },
                    {
                        id: "2",
                        value: "敞篷标准版"
                    },
                    {
                        id: "3",
                        value: "敞篷尊贵版"
                    }
                ]
            }
        ]
    },
    {
        id: "4",
        value: "法拉利",
        childs: [
            {
                id: "1",
                value: "LaFerrari"
            },
            {
                id: "2",
                value: "法拉利488"
            },
            {
                id: "3",
                value: "GTC4Lusso"
            }
        ]
    },
    {
        id: "5",
        value: "玛莎拉蒂",
        childs: [
            {
                id: "1",
                value: "总裁"
            },
            {
                id: "2",
                value: "玛莎拉蒂GT"
            },
            {
                id: "3",
                value: "Levante"
            }
        ]
    }
];
demoData = [];
Array.from({length: 23}).map((_, idx) => {
    console.log(idx);
    demoData.push({id: `${idx + 1}`, value: `${idx + 1}`, childs: [{id: `${idx + 1}`, value: `${idx + 1}` }]})
})
console.log(demoData);
const MyApp = () => {
    const [value, setValue] = useState('10:00');
    const config = {
        ensureBtnText: 'save',
        cancelBtnText: 'cancel',
        wheels: [
            {
                data: demoData
            }
        ],
        onChange: (
            data: number[] | string[] | CascadeData[],
            indexArr: number[],
            instance: any
        ) => {
            console.log("callback", data, indexArr, instance);
            // setVal(JSON.stringify(data));
        }
    }
    const onChange = (timeValue: React.SetStateAction<string>) => {
        setValue(timeValue);
    }

    return (
        <div className="App">
            <MSComponent config={config}/>
        </div>
    );
}

class Index extends Component<any, IState> {
    buttonPressTimer: any;

    constructor(props: any) {
        super(props);
        this.buttonPressTimer = undefined;
        const {items = [], filenames = []} = getItems(getSubs());
        const {voice, rate = 1, volume = 1, pitch = 1} = getSettings();
        this.state = {
            showStr: '',
            ind: '',
            isShown: -1,
            error: '',
            filenames,
            items,
            showPopupFiles: false,
            modal: '',
            voice,
            rate,
            volume,
            pitch,
        };
    }

    handleUpload = (files: any[], restore = false) => {
        let {filenames: stateFiles} = this.state;
        // const groups = groupSubs(files.map(i => i.filename));
        if (stateFiles.length === 1 && files[0].filename === stateFiles[0]) {
            this.setState({error: 'SAME'});
            return;
        }
        if (files.length === 1 && stateFiles.length === 1 && getSubs()[0]) {
            files = files.concat([...getSubs()]);
        }
        const newState: any = findSubs(files, restore);
        if (restore) {
            newState.modal = '';
        }
        newState.modal = '';
        newState.showPopupFiles = false;

        this.setState(() => ({...newState}));
    }

    clear = () => {
        const subs = getSubs();
        saveToLocalStorage(subs, true);
        Storage.rm(SUBS_KEY);
        this.setState({
            filenames: [],
            items: [],
            showPopupFiles: false,
            showStr: '',
            error: '',
        });
    };

    show = ({target}: any, trySpeak = false) => {
        if (target.tagName === 'BUTTON') {
            return
        }
        const currentRowIndex = target.dataset.ind;

        const {items, isShown: isShown1, ind: indFrom} = this.state;
        let isShown = isShown1;
        const [, itemTwo] = items;

        if (itemTwo[currentRowIndex]) {
            isShown = currentRowIndex !== indFrom || !isShown;
            let showStr = '';
            if (isShown) {
                showStr = itemTwo[currentRowIndex];
            }
            this.setState({showStr, ind: currentRowIndex, isShown}, () => {
                trySpeak && this.tryToSpeak(showStr)()
            });
        }
    };

    handleButtonRelease = () => {
        if (this.buttonPressTimer) {
            clearTimeout(this.buttonPressTimer);
        }
    };

    componentDidMount() {
        const s = Storage.get(SCROLL_VAR, false);
        testLoadVoices();
        if (s) {
            window.scrollTo(0, s);
        }
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        Storage.set(SCROLL_VAR, window.scrollY);
    };

    getStr = (str: string) => {
        const strS = str.split(/>\s[0-9]+:[0-9]+:[0-9]+[.,][0-9]+/);
        if (strS[1]) str = strS[1];
        return str;
    };

    renderRow = (str: string, index: any) => {
        str = this.getStr(str);
        if (!str) {
            return null;
        }
        return (
            <div
                key={`${str}${index}`}
                onTouchEnd={this.handleButtonRelease}
                onMouseDown={this.show}
                onMouseUp={this.handleButtonRelease}
                data-ind={index}
            >
                <div data-ind={index}>
                    {str}
                    <span className='tooltiptext'>
                        {str ? (
                            <button
                                data-ind={this.state.showStr && index}
                                onClick={this.tryToSpeak(str)}
                                className='icon speech-voice'
                            />
                        ) : null}
                    </span>
                </div>
            </div>
        );
    };

    togglePopup = (e: any, s: boolean = true) => {
        e.preventDefault();
        this.setState({showPopupFiles: s, modal: ''});
    };

    toggleDemo = (e: any) => {
        if (this.state.modal === POPUP_DEMO) {
            return this.togglePopup(e, false);
        }
        this.toggleModal(e, POPUP_DEMO);
    };

    toggleModal = (e: any, modal = POPUP_DISCUSS) => {
        e.preventDefault();
        this.setState({modal});
    };

    closeModal = () => {
        this.setState({modal: ''});
    };

    tryToSpeak = (text: string) => (event?: any) => {
        const {voice, showStr, ind} = this.state;
        let fromPopup = false;

        if (event && event.target.dataset.ind && ind !== event.target.dataset.ind) {
            return this.show({target: {tagName: 'DIV', dataset: event.target.dataset}}, true);
        }

        if (showStr) {
            text = this.getStr(showStr);
            fromPopup = true;
        }

        const subs = getSubs();
        const locale = getLocales(subs[fromPopup ? 1 : 0]);

        if (voice || locale) {
            return speak(text, locale);
        } else {
            this.voiceSetting(event);
        }
    };

    voiceSetting = (e: any) => {
        e && e.preventDefault();
        this.setState({modal: POPUP_SETTINGS});
    };

    voiceSettingSave = (newSettings: ISettings, force = false) => {
        const {voice, rate, pitch, volume} = newSettings;
        if (force) {
            //
        } else {
            if (this.state.voice === voice || (!voice && this.state.voice)) {
                return this.closeModal();
            }
        }
        const oldSettings = getSettings();
        Storage.setJ(APP_SETTINGS, {
            ...oldSettings,
            voice,
            rate,
            pitch,
            volume,
        });
        this.setState({modal: '', voice, rate, pitch, volume});
    };


    render() {
        const {
            items,
            showStr,
            error,
            filenames,
            showPopupFiles,
            modal,
        } = this.state;
        const fldCl = `folder${items.length ? '-fill' : ''}`;

        return (
            <div>
                {modal === POPUP_DISCUSS ? (
                    <div className='modal-window'>
                        <div>
                            <a
                                href=''
                                title='Close'
                                className='modal-close'
                                onClick={e => this.togglePopup(e, false)}
                            >
                                Close
                            </a>
                            <div>
                                <a
                                    href=''
                                    title='Close'
                                    className='modal-close bottom'
                                    onClick={e => this.togglePopup(e, false)}
                                >
                                    Close
                                </a>
                            </div>
                        </div>
                    </div>
                ) : null}
                {showStr ? (
                    <div className='tooltip1'>
                        <span className='tooltiptext'>{this.getStr(showStr)}</span>
                    </div>
                ) : null}
                <div>
                    <div className='buttons'>
                        {items.length === 2 ? (
                            <button
                                className={`icon ${fldCl}-icon`}
                                onClick={this.togglePopup}
                            />
                        ) : null}
                        <button
                            className='icon speech-voice-setting'
                            onClick={this.voiceSetting}
                        />
                    </div>
                </div>
                <div className='lang-items'>
                    {items.length === 1 ? (
                        <div className='load-step'>
                            {error ? (
                                <>
                                    <div className='alert alert-danger'>{errors[error]}
                                    </div>
                                    <br/>
                                </>
                            ) : null}
                            <div>
                                1 File {filenames[0]}
                                <span className='green'> loaded</span>
                            </div>
                            <div>
                                2 File <span className='gray'>not loaded</span>
                            </div>
                            <br/>
                            <div>
                                <button className='btn' onClick={this.clear}>
                                    Delete all
                                </button>
                            </div>
                        </div>
                    ) : null}
                    {items.length === 2
                        ? items[0].map((str: string, ind: number) => this.renderRow(str, ind))
                        : null}
                </div>
                {modal === POPUP_SETTINGS ? (
                    <Settings
                        data={this.state}
                        togglePopup={this.togglePopup}
                        voiceSettingSave={this.voiceSettingSave}
                    />
                ) : null}
                <MyApp/>
            </div>
        );
    }
}

export default Index;
