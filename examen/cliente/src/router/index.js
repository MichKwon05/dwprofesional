import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        redirect: '/inicio'
    },
    {
        path: '/formulario',
        name:'formulario',
        component: () => import('../components/Formulario.vue')
    },
    {
        path:'/paginacion',
        name: 'paginacion',
        component: () => import('../components/reservations/Persona.vue')
    },
    {
        path:'*',
        component: () => import('../view/Error.vue')
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
                component: () => import('../components/Inicio.vue')
            },
            {
                path:'/main',
                name: 'main',
                component: () => import('../components/Main.vue')
            },
            {
                path:'/tercero',
                name: 'tercero',
                component: () => import('../components/Tercero.vue')
            },
            {
                path:'/reserva',
                name: 'reserva',
                component: () => import('../components/reservations/Flight.vue')
            },
            {
                path:'/asientos',
                name: 'asientos',
                component: () => import('../components/reservations/Seat.vue')
            },
            {
                path:'/disponible',
                name: 'disponible',
                component: () => import('../components/flight/Available.vue')
            },
            {
                path:'/lineas',
                name: 'lineas',
                component: () => import('../components/flight/Line.vue')
            },
            {
                path:'/cancelado',
                name: 'cancelado',
                component: () => import('../components/flight/Canceled.vue')
            },
            {
                path:'/proximo',
                name: 'proximo',
                component: () => import('../components/flight/Next.vue')
            },
        ]
    }
]

const router = new VueRouter({routes, })
export default router; 