import './assets/main.css'
import i18nPlugin from "@/plugins/i18n"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// register i18n custom plugin from @/plugins/i18n.ts
app.use(i18nPlugin, {
    greetings: {
        hello: 'Halo!'
    }
})

app.mount('#app')
