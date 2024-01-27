import { AdminMenuItem } from '@/layouts/AdminLayout/types';
import AdminMenu from '@/layouts/AdminLayout/AdminMenu';

const MenuList: Array<AdminMenuItem> = [
  {
    title: '首页',
    path: '/admin',
    icon: 'dashboard',
  },
  {
    title: '权限角色',
    path: '/admin/permRole',
    children: [
      {
        title: '权限管理',
        path: '/admin/permRole/permission',
      },
      {
        title: '角色管理',
        path: '/admin/permRole/role',
      },
    ],
  },
  {
    title: '系统管理',
    path: '/admin/system',
    children: [
      {
        title: '应用管理',
        path: '/admin/system/appList',
      },
      {
        title: '数据库表',
        path: '/admin/sys/dbList',
      },
    ],
  },
  {
    title: '用户管理',
    path: '/admin/user',
    children: [
      {
        title: '用户列表',
        path: '/admin/user/userList',
      },
    ],
  },
];

function processMenuList(menuList: Array<AdminMenuItem>) {
  return menuList.map((menuItem: AdminMenuItem) => {
    menuItem.key = menuItem.title;
    menuItem.children = (menuItem.children || []).map(
      (childMenuItem: AdminMenuItem) => {
        childMenuItem.key = `${menuItem.key}-${childMenuItem.title}`;
        return childMenuItem;
      },
    );

    return menuItem;
  });
}

export const adminMenuMap = new AdminMenu(processMenuList(MenuList));
