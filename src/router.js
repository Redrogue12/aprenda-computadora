import { createRouter, createWebHistory } from 'vue-router'
import Modules from './components/Modules.vue'
import ModuleExercise from './components/ModuleExercise.vue'
import NotFound from './components/NotFound.vue'
import HomePage from './components/HomePage.vue'

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
      path: '/modules',
      name: 'modules',
      component: Modules,
    },
    {
      path: '/module/:module/exercise/:exercise',
      name: 'exercise',
      component: ModuleExercise,
      props: true,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return {top: 0}
  },
})
