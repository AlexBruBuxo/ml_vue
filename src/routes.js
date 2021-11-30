import Vue from 'vue';
import VueRouter from 'vue-router';
import Reg from './views/Reg';
import LSTM from './views/LSTM';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Reg',
            component: Reg
        },
        {
            path: '/lstm',
            name: 'LSTM',
            component: LSTM
        },
    ]
})