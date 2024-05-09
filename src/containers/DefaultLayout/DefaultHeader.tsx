import React from 'react';

const DefaultHeader = () => {
    const [showPopup, setPopup] = React.useState(false)
    const togglePopup = (e: any, show = true) => {
        e.preventDefault();
        setPopup(show);
    };
    const d = new Date(__BUILD__);

    return (
        <>
            <div className="navbar">
                <a href="" onClick={togglePopup}>
                    About
                </a>
            </div>
            {showPopup ? (
                <div id="open-modal" className="modal-window">
                    <div>
                        <a
                            href=""
                            title="Close"
                            className="modal-close"
                            onClick={e => togglePopup(e, false)}
                        >
                            Close
                        </a>
                        <h1>Greetings!</h1>
                        <div>
                            <div>This is an offline timer</div>
                            <p>
                                <small>Support</small>
                            </p>
                            <p>
                                <a href="https://safiullin.com" target="_blank">
                                    About Me
                                </a>
                            </p>
                            <p>
                                <a className="icon google-play"
                                   href="https://play.google.com/store/apps/details?id=io.safiullin.puzzle"/>
                            </p>
                            <p>
                                <small>Last update time: {`${d.toDateString()} ${d.toLocaleTimeString()}`}</small>
                            </p>
                            <a
                                href=""
                                title="Close"
                                className="modal-close bottom"
                                onClick={e => togglePopup(e, false)}
                            >
                                Close
                            </a>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}

export default DefaultHeader;
