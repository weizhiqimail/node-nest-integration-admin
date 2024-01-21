const routes = [
  {
    path: '/',
    name: '根路由',
    exact: true,
    component: 'index',
    wrappers: ['@/layouts/HomeLayout'],
  },
  {
    path: '/index',
    name: '根路由',
    exact: true,
    redirect: '/',
  },
  {
    path: '/home',
    name: '根路由',
    exact: true,
    redirect: '/',
  },
  {
    path: '/admin',
    name: '管理后台首页面',
    exact: true,
    component: '@/pages/Admin',
    wrappers: ['@/layouts/AdminLayout'],
  },
  {
    path: '/account',
    name: '账号中心',
    exact: true,
    component: '@/pages/Account',
    wrappers: ['@/layouts/AccountLayout'],
  },
  {
    path: '/account/login',
    name: '账号登录',
    exact: true,
    component: '@/pages/Account/Login',
    wrappers: ['@/layouts/AccountLayout'],
  },
  {
    path: '/sys/navList',
    name: '系统导航',
    exact: true,
    component: '@/pages/Sys/NavList',
  },
  {
    path: '/*',
    name: '404',
    component: '@/pages/NotFound',
  },
];

export default routes;
