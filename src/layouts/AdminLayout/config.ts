export interface AdminMenuItem {
  title: string;
  path?: string;
  key?: string;
  children?: Array<AdminMenuItem>;
}

export const adminMenuList: Array<AdminMenuItem> = [
  {
    title: '首页',
    path: '/admin',
  },
  {
    title: '权限角色',
    children: [
      {
        title: '权限管理',
        path: '/admin/permRole/permission',
      },
      {
        title: '权限组管理',
        path: '/admin/permRole/permissionGroup',
      },
    ],
  },
].map((item) => {
  return processMenuItemKey(item);
});

function processMenuItemKey(menuItem: AdminMenuItem) {
  menuItem.key = menuItem.title;
  if (menuItem.children) {
    menuItem.children.forEach((childMenuItem) => {
      childMenuItem.key = `${menuItem.key}-${childMenuItem.title}`;
    });
  }
  return menuItem;
}

export const AdminMenuCacheKey = 'AdminMenuCacheKey';
