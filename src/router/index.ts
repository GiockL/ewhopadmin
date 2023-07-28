import {createRouter,createWebHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/login/index.vue'
import dishboard from './modules/dashboard'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login,
        meta:{
            title:'登录',
        }
    },

]
const baseRouter = [...routes,...dishboard]
export const router = createRouter({
    history: createWebHistory(),
    routes:baseRouter,
})

router.beforeEach((to,from,next)=>{
    document.title = (to?.meta?.title as string) || document.title
    if (to.name != 'Login'){
        if(!localStorage.getItem('token')){
            next({
                path:'/login',
                query:{
                    redirect: to.fullPath
                }
            })
        }
    }
    next()
})

