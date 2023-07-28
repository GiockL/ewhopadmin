import {RouteRecordRaw} from "vue-router";
import Layout from '@/layout/index.vue'
const routeName = 'dashboard'
/*
*   name:路由名称，必须设置，且不能重名
*   meta:路由元信息（路由附带扩展信息）
*   redirect:重定向地址，访问这个路由时，自定进行重定向
*   meta.disabled:禁用整合菜单
*   meta.title:菜单名称
*   meta.icon:菜单图标
*   meta.keepAlive:缓存该路由
*   meta.sort: 排序越小越排前
* */
const routes:Array<RouteRecordRaw> = [
    {
        path:'/dashboard',
        name:routeName,
        component:Layout,
        redirect:'/dashboard/console',
        meta:{
            title:'Dashboard',
            icon:'dashboard'
        },
        children:[
            {
                path:'console',
                name:`${routeName}_console`,
                meta:{
                    title:'主控台',
                    icon:'console'
                },
                component:()=>import('@/views/dashboard/index.vue')
            }
        ]
    }
]
export default routes