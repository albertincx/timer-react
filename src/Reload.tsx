import {useRegisterSW} from 'virtual:pwa-register/react'

function ReloadPrompt() {
    // replaced dynamically
    const reloadSW = '__RELOAD_SW__'

    const {
        offlineReady: [offlineReady, setOfflineReady],
        needRefresh: [needRefresh, setNeedRefresh],
    } = useRegisterSW({
        onRegisteredSW(swUrl: string, r: ServiceWorkerRegistration | undefined) {
            // @ts-expect-error just ignore
            if (reloadSW === 'true') {
                r && setInterval(() => {
                    r.update()
                }, 20000 /* 20s for testing purposes */)
            }
        },
    })

    return null;
}

export default ReloadPrompt
