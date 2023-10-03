import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

export default defineConfig({
    plugins: [
        VueRouter({
            routesFolder: 'resources/js/pages',
            dts: 'resources/js/typed-router.d.ts',
        }),
        AutoImport({
            dts: 'resources/js/auto-imports.d.ts',
            imports:[
                VueRouterAutoImports,
                'vue'
            ],
        }),
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
    ],
});
