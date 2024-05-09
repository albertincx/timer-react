import React, {Component, useState} from 'react';
import {CascadeData} from "mobile-select";
import {CountdownCircleTimer, useCountdown} from 'react-countdown-circle-timer'

// import MSComponent from "./components/Ms";
import Storage from '../../utils/storage';
import Settings from "./components/Settings";
import {APP_SETTINGS, POPUP_DEMO, POPUP_DISCUSS, POPUP_SETTINGS, SCROLL_VAR, SUBS_KEY} from "./consts";

import {
    getLocales,
    findSubs,
    getItems,
    getSettings,
    getSubs,
    saveToLocalStorage,
    speak,
    testLoadVoices,
} from "./utils";
import {ISettings} from "./types";
import notifySound from '../../alarm-clock-short.mp3'

import './style.css';

// import Countdown from "react-countdown";

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
let isNotifyOn = false;
if ('Notification' in window) {
    Notification.requestPermission().then(function (permission) {
        isNotifyOn = permission === 'granted';
    });
}

// @ts-ignore
let demoData: { id: string; value: string; childs: { id: string; value: string; }[]; }[] = [];
const minDemoData: { id: string; value: string; }[] = [];
const minDemoDataCurrent: { id: string; value: string; }[] = [];
const h = new Date().getHours();
const getH = () => new Date().getHours();
const m = new Date().getMinutes();
// console.log(h);

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};
import type {Props} from 'react-countdown-circle-timer'

// @ts-ignore
const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

// @ts-ignore
const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
// @ts-ignore
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
// @ts-ignore
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
// @ts-ignore
const getTimeDays = (time) => (time / daySeconds) | 0;

const UrgeWithPleasureComponent = ({t}: any) => {
    const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = startTime + t; // use UNIX timestamp in seconds

    const remainingTime = endTime - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    const size = 80;
    timerProps.size = size;
    // console.log(remainingTime);
    const dd = !!getTimeDays(daysDuration - remainingTime);
    // console.log(timerProps);
    // timerProps.key = t;
    const isShowHours = t / 60 / 60 > 1;
    console.log(isShowHours, t / 60 / 60);
    // console.log(daysDuration, getTimeHours(daysDuration - (remainingTime % daySeconds)));
    return (
        <>
            {/*<CountdownCircleTimerS*/}
            {/*    duration={t} size={80} colors="#ddd" onComplete={() => {}} isPlaying*/}
            {/*    initialRemainingTime={remainingTime}*/}
            {/*    trailColor="#7E2E84"*/}
            {/*    strokeWidth={6}*/}
            {/*/>*/}
            {dd && (
                <CountdownCircleTimer
                    {...timerProps}
                    key={`d${t}`}
                    colors="#7E2E84"
                    duration={daysDuration}
                    initialRemainingTime={remainingTime}
                >
                    {({elapsedTime, color}) => (
                        <span style={{color}}>
            {renderTime("days", getTimeDays(daysDuration - elapsedTime))}
          </span>
                    )}
                </CountdownCircleTimer>
            )}
            {isShowHours && (
                <CountdownCircleTimer
                    {...timerProps}
                    key={`h${t}`}
                    colors="#D14081"
                    duration={daySeconds}
                    initialRemainingTime={remainingTime % daySeconds}
                    onComplete={(totalElapsedTime) => ({
                        shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                    })}
                >
                    {({elapsedTime, color}) => (
                        <span style={{color}}>
            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
                    )}
                </CountdownCircleTimer>
            )}
            <CountdownCircleTimer
                {...timerProps}
                key={`m${t}`}
                colors="#EF798A"
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                })}
            >
                {({elapsedTime, color}) => (
                    <span style={{color}}>
            {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                key={`s${t}`}
                colors="#218380"
                updateInterval={2}
                onUpdate={(rrr) => {
                    let tt: any = document.title.split('Timer ');
                    tt = t - (60 - rrr);
                    // console.log(tt, rrr);
                    const hour = Math.floor(+tt / 60);
                    if (hour > 0) {
                        const d = `${hour}:${+tt % 60}`;
                        // console.log(rrr)
                        // console.log(Math.floor(tt / 60))

                        document.title = `(${d}) Timer ${tt}`;
                        // console.log(remainingTime, rrr, remainingTime - totalElapsedTime);
                    }

                }}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => {
                    const shouldRepeat = remainingTime - totalElapsedTime > 0;
                    if (!shouldRepeat) {
                        if (isNotifyOn) {
                            try {
                                new Notification("Hi there!");
                            } catch (e) {
                                navigator.serviceWorker.ready.then(function (registration) {
                                    registration.showNotification("Hi there!", {body: "TIMER EXPIRED!"});
                                });
                            }
                        }
                        playSound()
                    }
                    return {shouldRepeat}
                }}
            >
                {({elapsedTime, color}) => (
                    <span style={{color}}>
            {renderTime("seconds", getTimeSeconds(elapsedTime))}
          </span>
                )}
            </CountdownCircleTimer>
        </>
    )
}

Array.from({length: 59}).map((_, idx) => {
    minDemoData.push({id: `${idx + 1}`, value: `${idx + 1}`})
})

Array.from({length: 23}).map((_, idx) => {
    (idx + 1) >= h && demoData.push({id: `${idx + 1}`, value: `${idx + 1}`, childs: [...minDemoData]})
})

const Completionist = () => {
    return <span>You are good to go!</span>;
}

// Renderer callback with condition
const renderer = ({hours, minutes, seconds, completed}: any) => {
    if (completed) {
        // Render a completed state
        return <Completionist/>;
    } else {
        // Render a countdown
        return <span>{hours}:{minutes}:{seconds}</span>;
    }
};
let countD: number = 0, url = location.href.split('timer=');
if (url[1]) {
    countD = +url[1];
    document.title = `Timer ${countD}`
}
const initDemoData = [...demoData];

const sound = new Audio(notifySound)

function playSound() {
    sound.play().then(() => {
    })
}

function stopSound() {
    sound.pause();
    sound.currentTime = 0;
}

const MyApp = () => {
    // const [value, setValue] = useState('10:00');
    const [countDown, setCountDown] = useState(countD);
    const [curDemoData, setDemoData] = useState(initDemoData);
    // console.log(demoData);
    const config = {
        ensureBtnText: 'save',
        cancelBtnText: 'cancel',
        wheels: [
            {
                data: curDemoData
            }
        ],
        onChange: (
            data: number[] | string[] | CascadeData[],
            indexArr: number[],
            instance: any
        ) => {
            // console.log("callback", data, indexArr, instance);
            // setVal(JSON.stringify(data));
            // console.log('onS', curDemoData);
            // setDemoData(curDemoData.map(dd => dd.id > getH()))
        }
    }

    const setTimer = (e: any) => {
        const tm = e.target.dataset.time;
        if (tm) {
            window.history.pushState('time', '', '/time?timer=' + tm);
            document.title = `Timer ${tm}`
            setCountDown(+tm)
        }
    }
    const reset = () => {
        setCountDown(0);
        stopSound()
        window.history.pushState('home', '', '/');
    }

    return (
        <div className="App1">
            <div className="grid times">
                <div onClick={setTimer} data-time="3">3 sec</div>
                <div onClick={setTimer} data-time="600">10 min</div>
                <div onClick={setTimer} data-time="1200">20 min</div>
                <div onClick={setTimer} data-time="1800">30 min</div>
                <div onClick={setTimer} data-time="3600">1 hour</div>
                <div onClick={setTimer} data-time="4800">1 hour 20 min</div>
            </div>
            {/*<MSComponent config={config}/>*/}
            <br/>
            {!!countDown && (
                <>
                    {/*<Countdown*/}
                    {/*    date={Date.now() + (countDown * 1000)}*/}
                    {/*    onComplete={reset}*/}
                    {/*    // renderer={renderer}*/}
                    {/*>*/}
                    {/*    <Completionist/>*/}
                    {/*</Countdown>*/}
                    <br/>
                    <div className="App">
                        <UrgeWithPleasureComponent t={countDown}/>
                    </div>
                    <br/>
                    <button className="stop-timer btn" onClick={reset}>Stop timer!</button>
                </>
            )}
        </div>
    );
}

class Index extends Component<any, IState> {
    constructor(props: any) {
        super(props);
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
                onMouseDown={this.show}
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
