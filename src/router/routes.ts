import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayoutNoDrawer.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'form', component: () => import('pages/Form.vue') },
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
