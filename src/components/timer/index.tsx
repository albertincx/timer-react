import React, {Component, useState} from 'react';
import {CascadeData} from 'mobile-select';

import Storage from '../../utils/storage';

import MSComponent from './components/Ms';
import Settings from './components/Settings';
import UrgeWithPleasureComponent from './components/Timer';

import {APP_SETTINGS, POPUP_DISCUSS, POPUP_SETTINGS, SCROLL_VAR} from './consts';

import {getRandomMs, getSettings} from './utils';

import {ISettings, IState} from './types';

import './style.css';
import notifySound from "../../alarm-clock-short.mp3";

let isNotifyOn = false;

if ('Notification' in window) {
    Notification.requestPermission().then(function (permission) {
        isNotifyOn = permission === 'granted';
    });
}

const sound = new Audio(notifySound)

function playSound() {
    sound.play().then(() => {
        //
    })
}

function stopSound() {
    sound.pause();
    sound.currentTime = 0;
}

const demoData: { id: string; value: string; childs: { id: string; value: string; }[]; }[] = [];

const minDemoData: { id: string; value: string; }[] = [];

const h = new Date().getHours();
const m = new Date().getMinutes();

Array.from({length: 59}).map((_, idx) => {
    let min: string | number = idx + 1;
    if (min <= 9) {
        min = `0${min}`;
    }
    minDemoData.push({id: `${idx + 1}`, value: `${min}`})
})

Array.from({length: 23}).map((_, idx) => {
    let minArr = [...minDemoData];
    if (h === (idx + 1)) {
        const curMin = m;
        minArr = minArr.filter(({id}) => +id > curMin);
    }
    (idx + 1) >= h && demoData.push({id: `${idx + 1}`, value: `${idx + 1}`, childs: [...minArr]})
})

let countD: number = 0;

const url: string[] = location.href.split('timer=');

if (url[1]) {
    countD = +url[1];
    document.title = `Timer ${countD}`
}

const initDemoData = [...demoData];

const MyApp = () => {
    const [countDown, setCountDown] = useState(countD);
    const [curDemoData, setDemoData] = useState(initDemoData);
    const reset = (cb?: () => void | number) => {
        // console.log(cb);
        if (typeof cb === "number") {
            if (cb === 1) {
                setCountDown(0);
                stopSound();
            }
            return;
        }
        setCountDown(0);
        stopSound();
        window.history.pushState(null, document.title, '/');
        if (cb instanceof Function) {
            cb()
        }
    }

    const config = {
        ensureBtnText: 'start',
        cancelBtnText: 'cancel',
        wheels: [
            {
                data: curDemoData,
            },
        ],
        onChange: (data: string[] | number[] | CascadeData[]) => {
            const d = new Date();
            if (data?.length) {
                d.setHours((data[0] as CascadeData).id)
                d.setMinutes((data[1] as CascadeData).id)
                d.setSeconds(0)
                const tm = d.getTime() - (new Date()).getTime();
                const diffInSec = tm / 1000;
                if (diffInSec) {
                    reset(() => {
                        setCountDown(diffInSec);
                    });
                }
            }
        },
    }

    const setTimer = (e: React.SyntheticEvent<EventTarget>) => {
        e.stopPropagation();
        e.preventDefault();
        if (!(e.target instanceof HTMLElement)) {
            return;
        }
        const tm = e.target.dataset.time;

        if (tm) {
            reset(() => {
                window.history.pushState('time', '', '/time?timer=' + tm);
                document.title = `Timer ${tm}`
                setCountDown(+tm + getRandomMs());
            })
        }

        return false;
    }

    const handleReset = (_: React.SyntheticEvent<EventTarget>) => {
        reset();
    }

    return (
        <div className="App1">
            <div className="grid times">
                <a className="btn" href="/timer?timer=3" onClick={setTimer} data-time="3">3 sec</a>
                <a className="btn" href="/timer?timer=30" onClick={setTimer} data-time="30">30 sec</a>
                <a className="btn" href="/timer?timer=600" onClick={setTimer} data-time="600">10 min</a>
                <a className="btn" href="/timer?timer=1200" onClick={setTimer} data-time="1200">20 min</a>
                <a className="btn" href="/timer?timer=1800" onClick={setTimer} data-time="1800">30 min</a>
                <a className="btn" href="/timer?timer=3600" onClick={setTimer} data-time="3600">1 hour</a>
                <a className="btn" href="/timer?timer=4800" onClick={setTimer} data-time="4800">1 hour 20 min</a>
                <a className="btn" href="/timer?timer=86460" onClick={setTimer} data-time="86460">1 day 1 min</a>
            </div>
            <br/>
            <MSComponent config={config}/>
            {!!countDown && (
                <>
                    <br/>
                    <div className="App">
                        <UrgeWithPleasureComponent
                            countDown={countDown}
                            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                            // @ts-ignore
                            reset={reset}
                            isNotifyOn={isNotifyOn}
                            playSound={playSound}
                        />
                    </div>
                    <br/>
                    <button className="stop-timer btn" onClick={handleReset}>Stop timer!</button>
                </>
            )}
        </div>
    );
}

interface Props {
    some?: string;
}

class Index extends Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        const {voice, rate = 1, volume = 1, pitch = 1} = getSettings();
        this.state = {
            showStr: '',
            ind: 0,
            isShown: -1,
            error: '',
            showPopupFiles: false,
            modal: '',
            voice,
            rate,
            volume,
            pitch,
        };
    }

    componentDidMount() {
        const s = Storage.get(SCROLL_VAR, '0');
        if (s) {
            window.scrollTo(0, +s);
        }
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        Storage.set(SCROLL_VAR, window.scrollY);
    };

    togglePopup = (e: React.SyntheticEvent, s: boolean = true) => {
        e.preventDefault();
        this.setState({showPopupFiles: s, modal: ''});
    };

    closeModal = () => {
        this.setState({modal: ''});
    };

    voiceSetting = (e: React.SyntheticEvent) => {
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
        const {modal} = this.state;

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
                <div>
                    <div className='buttons'>
                        <button
                            className='icon speech-voice-setting'
                            onClick={this.voiceSetting}
                        />
                    </div>
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
