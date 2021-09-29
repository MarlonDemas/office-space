import Vue from 'vue';
import Router from 'vue-router';
import OfficeList from '@/views/OfficeList';
import NewOffice from '@/views/NewOffice';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            alias: "/offices",
            name: "offices",
            component: OfficeList
        },
        {
            path: "/offices/new",
            name: "new-office",
            component: NewOffice
        }
    ]
})