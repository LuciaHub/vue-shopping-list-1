import Vue from 'vue'
import VueRouter from 'vue-router';
import List from './pages/list/List';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: List
        },
        {
            path: '/add',
            component: () => import('./pages/add/Add')
        },
        {
            path: '/:id',
            component: () => import('./pages/details/Details')
        }
    ]
})



