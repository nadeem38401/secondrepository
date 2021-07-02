import Vue from 'vue'
import VueRouter from 'vue-router'


import Container from '../components/Container.vue'
import home from '../components/home.vue'
import blog from '../components/blog.vue'
import about from '../components/about.vue'
import details from '../components/details.vue'
import Main from '../googleMap/Main.vue'



Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
     routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'Container',
            component: Container,
            children: [
                {
                  path: '/home',
                  name: 'home',
                  component: home,

                },
                {
                    path: '/details/:Pid',
                    name: 'details',
                    component: details
                },
            ]
        },
         {
             path: '/home',
             name: 'home',
             component: home
         },
         {
            path: '/blog',
            name: 'blog',
            component: blog
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/details/:Pid',
            name: 'details',
            component: details
        },
        {
            path: '/Main',
            name: 'Main',
            component: Main
        },
     ]
})