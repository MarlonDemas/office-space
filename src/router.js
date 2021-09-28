import Vue from 'vue';
import Router from 'vue-router';
import OfficeList from '@/views/OfficeList'


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: "/",
        alias: "/offices",
        component: OfficeList
    }]
})