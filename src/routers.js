import Home from './components/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import Add from './components/Add.vue';
import {createRouter, createWebHistory} from 'vue-router';
import Update from './components/Update.vue';

const routes = [
    {
        name: 'Home-Page',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'Login-Page',
        component: Login,
        path: '/login'
    },
    {
        name: 'Add-Page',
        component: Add,
        path: '/add-restaurant'
    },
    {
        name: 'Update-Page',
        component: Update,
        path: '/update-restaurant/:id'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;