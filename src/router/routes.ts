import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayoutNoDrawer.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'menu', component: () => import('pages/Menu.vue') },
      { path: 'select', component: () => import('pages/MenuSelect.vue') },
      { path: 'history', component: () => import('pages/History.vue') },
      { path: 'evaluate', component: () => import('pages/Evaluate.vue') },
      { path: 'cutscreen', component: () => import('pages/CutScreen.vue') },
      { path: 'result', component: () => import('pages/Result.vue') }
    ],
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
