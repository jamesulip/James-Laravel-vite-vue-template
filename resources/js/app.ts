import './bootstrap';
import {createApp} from 'vue'

import App from './App.vue'




const app = createApp(App)


Object.values(import.meta.glob<{ install: any }>('./modules/*.ts', { eager: true }))
.forEach(i => i.install?.(app))



app.mount("#app")
