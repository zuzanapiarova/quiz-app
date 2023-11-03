//define routing rules
import { createRouter, createWebHistory } from "vue-router";
import Quiz from "../views/Quiz.vue";
import Home from '../views/Home.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), 
    routes: [
        {
            path: "/", 
            name: "Home", 
            component: Home
        }, 
        {
            path: "/quiz/:id", 
            name: "Quiz", 
            component: Quiz
        }
    ]
})

export default router;
