import * as VueRouter from 'vue-router';
import Home from '../pages/Home.vue'
const routes = [
    {
        path: '/',
        name: "Home",
        component: Home
    },
    {
        path: '/dashboard',
        name: "Dashboard",
        component: () => import('../pages/Dashboard.vue')
    },
    {
        path: '/login',
        name: "Login",
        component: () => import('../pages/Login.vue')
    },
    {
        path: '/register',
        name: "Register",
        component: () => import('../pages/Register.vue')
    },
    {
        path: '/todos',
        name: "Todos",
        component: () => import('../pages/Todos.vue')
    },
    {
        path: '/todos/:id',
        name: "SingleTodo",
        component: () => import('../pages/SingleTodo.vue')
    },
]
const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
})

export default router