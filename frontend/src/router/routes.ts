import { RouteRecordRaw } from 'vue-router';

import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';

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
  }
]

export default routes;