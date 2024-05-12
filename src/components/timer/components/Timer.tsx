import React, {useEffect, useState} from 'react';
import {CountdownCircleTimer} from 'react-countdown-circle-timer'

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

const UrgeWithPleasureComponent = ({countDown, reset, isNotifyOn, playSound}: Props) => {
    const startTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = startTime + countDown; // use UNIX timestamp in seconds

    useEffect(() => {
        if (notificationOne) {
            notificationOne.onclose = () => {
                reset(2)
            }
            notificationOne.close();
        }
        return () => {
            if (notificationOne) {
                notificationOne.onclose = () => {
                    reset(2)
                }
                notificationOne.close();
            }
        }
    }, [countDown]);

    const remainingTime = endTime - startTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;
    timerProps.size = 80;
    // const dd = !!getTimeDays(daysDuration - remainingTime);
    const dd = countDown / 60 / 60 / 24 > 1;
    const isShowHours = countDown / 60 / 60 > 1;
    const isShowMinutes = countDown / 60 > 1;

    return (
        <>
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
                onUpdate={(rrr) => {
                    let tt: string[] | number = document.title.split('Timer ');
                    tt = countDown - (60 - rrr);
                    const hour = Math.floor(+tt / 60);
                    if (hour > 0) {
                        const d = `${hour}:${+tt % 60}`;
                        document.title = `(${d}) Timer ${tt}`;
                    }
                }}
                duration={minuteSeconds}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => {
                    const shouldRepeat = remainingTime - totalElapsedTime > 0;
                    if (!shouldRepeat) {
                        if (isNotifyOn) {
                            try {
                                notificationOne = new Notification("Hi there!");
                                notificationOne.onclose = () => {
                                    reset(1)
                                }
                                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                // @ts-ignore
                                notificationOne.onclick = reset
                            } catch (e) {
                                navigator.serviceWorker.ready.then(function (registration) {
                                    registration.showNotification("Offline timer!", {body: "TIMER EXPIRED!"});
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

export default UrgeWithPleasureComponent;
