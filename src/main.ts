import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

import '@/assets/styles/_reset.scss'
import '@/assets/styles/_main.scss'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
