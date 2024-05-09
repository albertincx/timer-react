// @ts-ignore
import fs from 'fs/promises'
import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

let faviconURL = '/favicon.png'
export default ({mode}) => {
    const dev = mode === 'development';
    // console.log(mode, dev);

    return defineConfig({
        define: {
            __BUILD__: `"${new Date().toISOString()}"` // wrapping in "" since it's a string
        },
        plugins: [
            react(),
            VitePWA({
                registerType: 'autoUpdate',
                includeAssets: [faviconURL],
                manifest: {
                    name: "offline timer",
                    short_name: 'offline timer',
                    description: 'offline timer',
                    theme_color: '#ffffff',
                    icons: [
                        {
                            src: faviconURL,
                            sizes: '32x42',
                            type: 'image/png',
                        }
                    ]
                },
            }),
            dev && {
                name: "deep-index",
                configureServer(server) {
                    server.middlewares.use(
                        (req: any, res, next) => {
                            if (req.url === '/') {
                                req.url = '/dev.html';
                            }
                            next();
                        }
                    )
                }
            },
            {
                name: 'my-plugin-for-index-html-build-replacement',
                transformIndexHtml: {
                    enforce: 'pre', // Tells Vite to run this before other processes
                    async transform() {
                        // Do some logic; whatever you want
                        return await fs.readFile('./index-build.html', 'utf8')
                    }
                }
            }
        ]
    })
}
