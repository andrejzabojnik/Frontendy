import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/Home.vue';
import Contact from '@/pages/Contact.vue';
import Products from '@/pages/Products.vue';
import Cart from '@/pages/Cart.vue';
import Summary from '@/pages/Summary.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/products',
    name: 'products',
    component: Products,
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
  },
  {
    path: '/summary',
    name: 'summary',
    component: Summary,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;