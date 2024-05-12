import React from 'react'

import {useRegisterSW} from 'virtual:pwa-register/react'

function ReloadPrompt() {
    // replaced dynamically
    const buildDate = '__DATE__'
    // replaced dyanmicaly
    const reloadSW = '__RELOAD_SW__'

    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
        updateServiceWorker,
    } = useRegisterSW({
        onRegisteredSW(swUrl: string, r: ServiceWorkerRegistration | undefined) {
            // console.log(`Service Worker at: ${swUrl}`)
            // @ts-expect-error just ignore
            if (reloadSW === 'true') {
                r && setInterval(() => {
                    console.log('Checking for sw update')
                    r.update()
                }, 20000 /* 20s for testing purposes */)
            }
        },
        onRegisterError(error) {
            console.log('SW registration error', error)
        },
    })

    const close = () => {
        setOfflineReady(false)
        setNeedRefresh(false)
    }

    return null;
}

export default ReloadPrompt
