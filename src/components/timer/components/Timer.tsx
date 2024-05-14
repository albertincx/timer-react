import React, {useEffect} from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import {floorTime, showRemaining} from "../utils";
import {TIMER_TITLE} from "../consts";

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6,
};

const renderTime = (dimension: string, time: number) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time: number) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time: number) => (time / daySeconds) | 0;

interface Props {
    countDown: number;
    isNotifyOn: boolean;
    reset: (type?: number) => void
    playSound: () => void
}

let notificationOne: Notification;
// @ts-ignore
window.timerNotificationOne = notificationOne;
const UrgeWithPleasureComponent = ({countDown, reset, isNotifyOn, playSound}: Props) => {
    const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const countDownNum = floorTime(countDown, 0);

    const endTime = startTime + countDownNum; // use UNIX timestamp in seconds
    // const [dTT, setDT] = useState('')
    useEffect(() => {
        const umount = () => {
            if (notificationOne) {
                notificationOne.onclose = () => {
                    reset(2)
                }
                notificationOne.close();
            }
        };
        umount();

        return umount
    }, [countDown]);

    const remainingTime = endTime - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    timerProps.size = 80;
    const dd = countDownNum / 60 / 60 / 24 > 1;
    const isShowHours = countDownNum / 60 / 60 > 1;
    const isShowMinutes = countDownNum / 60 > 1;

    return (
        <>
            <div className="App">
                {dd && (
                    <CountdownCircleTimer
                        {...timerProps}
                        key={`d${countDown}`}
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
                        key={`h${countDown}`}
                        colors="#D14081"
                        duration={daySeconds}
                        initialRemainingTime={remainingTime % daySeconds}
                        onComplete={(totalElapsedTime) => ({
                            shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
                        })}
                    >
                        {({elapsedTime, color}) => (
                            <span style={{color}}>
                            {renderTime("hours", getTimeHours(daySeconds - elapsedTime))}
                        </span>
                        )}
                    </CountdownCircleTimer>
                )}
                {isShowMinutes && (
                    <CountdownCircleTimer
                        {...timerProps}
                        key={`m${countDown}`}
                        colors="#EF798A"
                        duration={hourSeconds}
                        initialRemainingTime={remainingTime % hourSeconds}
                        onComplete={(totalElapsedTime) => ({
                            shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
                        })}
                    >
                        {({elapsedTime, color}) => (
                            <span style={{color}}>
                        {renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))}
                    </span>
                        )}
                    </CountdownCircleTimer>
                )}
                <CountdownCircleTimer
                    {...timerProps}
                    key={`s${countDown}`}
                    colors="#218380"
                    // updateInterval={2}
                    duration={minuteSeconds}
                    initialRemainingTime={remainingTime % minuteSeconds}
                    onComplete={(totalElapsedTime) => {
                        const shouldRepeat = remainingTime - totalElapsedTime > 0;
                        if (!shouldRepeat) {
                            if (isNotifyOn) {
                                try {
                                    notificationOne = new Notification("Offline timer!", {data: {url: '/'}});
                                    // @ts-ignore
                                    notificationOne.onclose = reset
                                    // @ts-ignore
                                    notificationOne.onclick = reset
                                } catch (e) {
                                    navigator.serviceWorker.ready.then(function (registration) {
                                        const d = registration.showNotification("Offline timer!", {
                                            body: "TIMER EXPIRED!",
                                        });
                                        console.log(d);
                                    });
                                }
                            }
                            playSound()
                        }
                        return {shouldRepeat}
                    }}
                    onUpdate={() => {
                        let elapsedTimeArr: string[] | number = document.title.split(TIMER_TITLE);
                        let elapsedTime = countDownNum - 1;
                        if (elapsedTimeArr[1]) {
                            elapsedTime = +elapsedTimeArr[1]
                            elapsedTime -= 1;
                        }
                        const cnd = showRemaining(elapsedTime);
                        const dt = `(${cnd}) ${TIMER_TITLE}${elapsedTime}`;

                        document.title = `${dt}`;
                    }}
                >
                    {({elapsedTime, color}) => (
                        <span style={{color}}>
                        {renderTime("seconds", getTimeSeconds(elapsedTime))}
                    </span>
                    )}
                </CountdownCircleTimer>
            </div>
            {/*<div>dTT - {dTT}</div>*/}
        </>
    )
}

export default UrgeWithPleasureComponent;
