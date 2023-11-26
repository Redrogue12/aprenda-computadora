import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './components/NotFound.vue';
import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';
import ModulesPage from './pages/ModulesPage.vue';
import ModulePage from './pages/ModulePage.vue';

// https://router.vuejs.org/guide/essentials/dynamic-matching.html
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound,
    },
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/modules',
      name: 'modules',
      component: ModulesPage,
    },
    {
      path: '/module/:module/exercise/:exercise',
      name: 'exercise',
      component: ModulePage,
      props: true,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return {top: 0}
  },
})
