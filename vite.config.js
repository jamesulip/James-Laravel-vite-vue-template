import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue'
import VueRouter from 'unplugin-vue-router/vite'

export default defineConfig({
    plugins: [
        VueRouter({
            routesFolder: 'resources/js/pages',
          }),
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.ts'],
            refresh: true,
        }),
    ],
});
