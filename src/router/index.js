import Vue from 'vue'
import VueRouter from 'vue-router'
import PaginaInicial from '../views/PaginaInicial.vue'
import Login from '../views/Login.vue'
import MemberMenu from '../views/MemberMenu.vue'
import EmpresasArea from '../views/EmpresasArea.vue'
import OngArea from '../views/OngArea.vue'
import AreaFAQ from '../views/AreaFAQ.vue'
import ProfissionaisArea from '../views/ProfissionaisArea.vue'
import ProfissionaisCadastro from '../views/ProfissionaisCadastro.vue'
import EmpresaCadastro from '../views/EmpresaCadastro.vue'
import OngsCadastro from '../views/OngsCadastro.vue'
import RegisterMenu from '../views/RegisterMenu.vue'

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
    {
        path: '/ProfissionaisArea',
        name: 'ProfissionaisArea',
        component: ProfissionaisArea
    },
    {
        path: '/EmpresaCadastro',
        name: 'EmpresaCadastro',
        component: EmpresaCadastro
    },
    {
        path: '/OngsCadastro',
        name: 'OngsCadastro',
        component: OngsCadastro
    },
    {
        path: '/ProfissionaisCadastro',
        name: 'ProfissionaisCadastro',
        component: ProfissionaisCadastro
    },
    {
        path: '/RegisterMenu',
        name: 'RegisterMenu',
        component: RegisterMenu
    },
]

const router = new VueRouter({
    routes
})

export default router