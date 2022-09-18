import { createApp } from 'vue'
import App from './js/App'
import router from "@/js/router/router";

createApp(App)
    .use(router)
    .mount('#app')
