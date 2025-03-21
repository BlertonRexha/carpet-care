import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import List from '../views/List.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'list',
    component: List,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes,
});

export default router;
