import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import allusersApp from './components/allusers.vue'
import userdetailsApp from './components/userdetails.vue'
import createuserApp from './components/createuser.vue'
import edituserApp from './components/edituser.vue'
import errApp from './components/err.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const routes = [
    {
        path: '/', component: allusersApp, alias: '/users',
    },
    {
        path: '/users/:id', component: userdetailsApp
    },
    {
        path: '/:NotFound(.*)*', component: errApp, meta: { hideNavbar: true }
    },
    {
        path: '/create', component: createuserApp
    },
    {
        path: '/edit/:id', component: edituserApp
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
