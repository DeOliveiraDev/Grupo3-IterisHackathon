import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import Login from '../views/Login.vue'
import MemberMenu from '../views/MemberMenu.vue'
import EmpresasArea from '../views/EmpresasArea.vue'
import OngArea from '../views/OngArea.vue'
import AreaFAQ from '../views/AreaFAQ.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'PaginaInicial',
        component: PaginaInicial
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/MemberMenu',
        name: 'MemberMenu',
        component: MemberMenu
    },
    {
        path: '/OngArea',
        name: 'OngArea',
        component: OngArea
    },
    {
        path: '/AreaFAQ',
        name: 'AreaFAQ',
        component: AreaFAQ
    },
    {
        path: '/EmpresasArea',
        name: 'EmpresasArea',
        component: EmpresasArea
    },
]

const router = new VueRouter({
    routes
})

export default router