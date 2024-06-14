import {defineConfig} from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.scss','resources/js/app.js'],
            refresh: true,
        }),
    ],
    resolve: {
        alias: {
            '@': '/resources',
            'jsvectormap': 'node_modules/jsvectormap/dist/jsvectormap.css'
        },
    },
    server: {
        hmr: {
            host: 'localhost',
            protocol: 'ws',
            port: 3000
        }
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true
        }
    }
});
