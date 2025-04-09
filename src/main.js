import './assets/css/main.css'
import 'animate.css/animate.min.css'
import '@vueuse/core'
import 'swiper/vue'
import 'swiper/modules'
import 'swiper/css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.mount('#app')

// createApp(App).mount('#app')
