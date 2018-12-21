import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const notFound={
    template:'<h1>NotFound</h1>'
}

const router = new Router({
    routes:[
        {
            path:'/',
            redirect: '/index',
        },{
            path:'/index',
            name:'index',
            component:resolve => require(['../components/index.vue'],resolve),
        },
        {
            path:'*',
            component:notFound
        },
    ]
})
router.beforeEach((to, from, next) => {
    // ...
    next();
})
export default router;