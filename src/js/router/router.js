import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import HomePage from "@/js/pages/HomePage";

const routes = [
    {
        path: '/',
        component: HomePage
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;