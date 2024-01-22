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
    path: '/admin/permRole/permissionGroup',
    name: '权限组管理',
    component: '@/pages/Admin/PermRole/PermissionGroup',
    wrappers: ['@/layouts/AdminLayout'],
  },
];

export default adminRoutes;
