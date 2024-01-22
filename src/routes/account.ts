import { RouteItem } from './types';

const accountRoutes: Array<RouteItem> = [
  {
    path: '/account',
    name: '账号中心',
    component: '@/pages/Account',
    wrappers: ['@/layouts/AccountLayout'],
    meta: {
      isModuleEntry: true,
    },
  },
  {
    path: '/account/login',
    name: '账号登录',
    component: '@/pages/Account/Login',
    wrappers: ['@/layouts/AccountLayout'],
  },
];

export default accountRoutes;
