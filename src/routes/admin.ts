import { RouteItem } from './types';

const adminRoutes: Array<RouteItem> = [
  {
    path: '/admin',
    name: '后台管理',
    component: '@/pages/Admin/Home',
    wrappers: ['@/layouts/AdminLayout'],
    meta: {
      isModuleEntry: true,
    },
  },
  {
    path: '/admin/permRole/permission',
    name: '权限管理',
    component: '@/pages/Admin/PermRole/Permission',
    wrappers: ['@/layouts/AdminLayout'],
  },
  {
    path: '/admin/permRole/role',
    name: '角色管理',
    component: '@/pages/Admin/PermRole/Role',
    wrappers: ['@/layouts/AdminLayout'],
  },
  {
    path: '/admin/system/appList',
    name: 'App应用管理',
    component: '@/pages/Admin/System/AppList',
    wrappers: ['@/layouts/AdminLayout'],
  },
  {
    path: '/admin/user/userList',
    name: '用户管理',
    component: '@/pages/Admin/User/UserList',
    wrappers: ['@/layouts/AdminLayout'],
  },
  {
    path: '/admin/sys/dbList',
    name: '数据库表',
    component: '@/pages/Admin/System/DBList',
    wrappers: ['@/layouts/AdminLayout'],
  },
];

export default adminRoutes;
