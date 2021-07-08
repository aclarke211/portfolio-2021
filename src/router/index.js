import Vue from 'vue';
import VueRouter from 'vue-router';
import Bio from '../views/Bio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'About',
    component: Bio,
  },
  {
    path: '/dev',
    name: 'Dev',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dev" */ '../views/Dev.vue'),
  },
  {
    path: '/sites',
    name: 'Sites',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "sites" */ '../views/Sites.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
});

export default router;
