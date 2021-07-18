import Vue from 'vue'
import VueRouter from 'vue-router'
import EmpresasArea from '../views/EmpresasArea.vue'
import OngArea from '../views/OngArea.vue'
import AreaFAQ from '../views/AreaFAQ.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'EmpresasArea',
        component: EmpresasArea
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
]

const router = new VueRouter({
    routes
})

export default router