import { RouteItem } from './types';

const entryRoutes: Array<RouteItem> = [
  {
    path: '/',
    name: '根路由',
    component: '@/pages/Entry/Home',
    wrappers: ['@/layouts/HomeLayout'],
    meta: {
      isModuleEntry: true,
    },
  },
  {
    path: '/index',
    name: '根路由',
    redirect: '/',
  },
  {
    path: '/entry',
    name: '根路由',
    redirect: '/',
  },
  {
    path: '/home',
    name: '根路由',
    redirect: '/',
  },
  {
    path: '/entry/navList',
    name: '系统导航',
    component: '@/pages/Entry/NavList',
  },
];

export default entryRoutes;
