import { RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name:"Home",
    component: Home
  },
  {
    path: '/login',
    name:"Login",
    component: Login
  },
  {
    path: '/register',
    name:"Register",
    component: Register
  },
  {
    path: '/about',
    name:"About",
    component: About
  },
  {
    path:'/contact',
    name:'Contact',
    component: Contact
  }
]

export default routes;