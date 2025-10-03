import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import router from './router';
import PrimeVue from 'primevue/config';
const pinia = createPinia()

createApp(App).use(router).use(pinia).use(PrimeVue).mount('#app')
