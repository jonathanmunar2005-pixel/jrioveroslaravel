import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import ProductsServices from './pages/ProductsServices.vue';
import About from './pages/About.vue';
import Contact from './pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products-services', component: ProductsServices },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
