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
            redirect: '/main',
        },{
            path:'/main',
            name:'main',
            redirect:'index',
            component:resolve => require(['../components/main.vue'],resolve),
            children:[
                {
                    path:'/index',
                    name:'index',
                    component:resolve => require(['../components/page/index.vue'],resolve),
                },
            ]
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