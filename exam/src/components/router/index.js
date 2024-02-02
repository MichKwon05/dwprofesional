import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        redirect: '/inicio',
        component: () => import('../screens/Inicio.vue')
    },
    {
        path:'*',
        component: () => import('../screens/Error.vue')
    },
    {
        path: '/',
        component:{
            render(c){
                return c('router-view');
            },
        },
        children: [
            {
                path:'/inicio',
                name: 'inicio',
                component: () => import('../screens/Inicio.vue')
            },
            {
                path: '/formulario',
                name: 'formulario',
                component: () => import('../screens/Formulario.vue')
            },
            {
                path: '/pagination',
                name: 'pagination',
                component: () => import('../screens/Pagination.vue')
            },
        ]
    }
]

const router = new VueRouter({routes, })
export default router; 