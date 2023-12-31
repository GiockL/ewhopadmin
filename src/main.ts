import { createApp } from 'vue'
import {createPinia} from "pinia";

import App from './App.vue'
import './style/tailwindcss.css'
import {router} from "./router";
import './style/index.less'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
