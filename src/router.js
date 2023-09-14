import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/login',
    name: 'Login', // Используйте строку в качестве имени компонента
    meta: { layout: 'empty' },
    component: () => import('./views/LoginForm.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {layout: 'empty'},
    component: () => import('./views/RegisterForm.vue')
  },
  {
    path: '/categories',
    name: 'Categories', // Используйте строку в качестве имени компонента
    meta: { layout: 'main' },
    component: () => import('./views/CategoriesComponent.vue')
  },
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main', auth: true},
    component: () => import('./views/HomeSteich.vue')
  },
  {
    path: '/detail/:id',
    name: 'detail',
    meta: {layout: 'main', auth: true},
    omponent: () => import('./views/DetailCreate.vue')
  },
  {
    path: '/history',
    name: 'history',
    meta: {layout: 'main', auth: true},
    component: () => import('./views/HistoryStori.vue')
  },
  {
    path: '/planning',
    name: 'planning',
    meta: {layout: 'main', auth: true},
    component: () => import('./views/PlanningEvent.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    meta: {layout: 'main', auth: true},
    component: () => import('./views/UserProfile.vue')
  },
  {
    path: '/record',
    name: 'record',
    meta: {layout: 'main', auth: true},
    component: () => import('./views/RecordEntry.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
