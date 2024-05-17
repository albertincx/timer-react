import React from 'react'

// @ts-ignore
import {useRegisterSW} from 'virtual:pwa-register/react'

function ReloadPrompt() {
    // replaced dynamically
    const buildDate = new Date(__BUILD__)
    const buildDate2 = '__DATE__'
    // const d = new Date(__BUILD__);
    // const d = new Date(__BUILD__);
    // replaced dyanmicaly
    const reloadSW = '__RELOAD_SW__'

    let {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegisteredSW(swUrl: string, r: ServiceWorkerRegistration | undefined) {
            console.log(`Service Worker at: ${swUrl} ${reloadSW}`)
            // @ts-expect-error just ignore
            if (reloadSW === 'true') {
                r && setInterval(() => {
                    console.log('Checking for sw update')
                    // r.update()
                }, 20000 /* 20s for testing purposes */)
            } else {
                // eslint-disable-next-line prefer-template
                console.log('SW Registered: ' + r)
            }
        },
        onRegisterError(error: any) {
            console.log('SW registration error', error)
        },
    })

    const close = () => {
        setOfflineReady(false)
        setNeedRefresh(false)
    }

    return (
        <div className="ReloadPrompt-container">
            {(offlineReady || needRefresh)
                && (
                    <div className="ReloadPrompt-toast">
                        <div className="ReloadPrompt-message">
                            {offlineReady
                                ? <span>App ready to work offline</span>
                                : <span>New content available, click on reload button to update.</span>}
                        </div>
                        {needRefresh && <button className="ReloadPrompt-toast-button"
                                                onClick={() => updateServiceWorker(true)}>Reload</button>}
                        <button className="ReloadPrompt-toast-button" onClick={() => close()}>Close</button>
                    </div>
                )}
        </div>
    )
}

export default ReloadPrompt
