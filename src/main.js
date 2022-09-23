import { createApp } from 'vue'
import App from './js/App'
import router from "@/js/router/router";
import store from "@/store";

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
