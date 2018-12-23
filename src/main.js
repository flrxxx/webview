import Vue from 'vue';
import App from './app.vue';
import router from './router/router';
import ElementUI from 'element-ui';
import store from './store/store.js';

import './css/reset.css';
import 'element-ui/lib/theme-chalk/index.css';
import './less/fonticon.less';
Vue.use(ElementUI);


console.log(router);

const app1 =new Vue({
    router,
    store,
    el:"#app",
    template:'<App/>',
    components:{App},
    render: h => h(App)
})


