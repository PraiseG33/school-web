import './assets/main.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

AOS.init({
    duration: 700,   // animation length in ms
    once: true,      // only animate the first time an element scrolls into view
  })