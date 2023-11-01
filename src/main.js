import { createApp } from 'vue'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import $bus from './utils/Events'
import router from './routes'
import $pages from './data'

const app = createApp(App)
app.use(router)

app.provide('$pages', $pages)
app.provide('$bus', $bus)

app.mount('#app')
