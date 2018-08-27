import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta:{title: 'Lian - Home', pageNumber: 1}

        },
        {
            path: '/about',
            name: 'about',
            meta:{title: 'Lian - About',pageNumber: 2},
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            meta:{title: 'Lian - Portfolio',pageNumber: 3},
            component: () => import(/* webpackChunkName: "portfolio" */ './views/Portfolio.vue')
        }
    ]
})
