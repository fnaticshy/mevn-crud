import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        name: 'Start',
        component: () => import("@/components/pages/StartPage")
    },
    {
        path: '/posts',
        name: 'Posts',
        component: () => import("@/components/pages/PostPage")
    },
    {
        path: '/posts/new',
        name: 'NewPost',
        component: () => import("@/components/pages/NewPostPage")
    }
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) return savedPosition
        if (to.hash) return { selector: to.hash }
        return {
            x: 0,
            y: 0
        }
    },
    routes
})

export default router