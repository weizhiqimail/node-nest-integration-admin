export interface AdminMenuItem {
  title: string;
  path?: string;
  key?: string;
  children?: Array<AdminMenuItem>;
  parent?: AdminMenuItem;
  level?: number;
}

const MenuList: Array<AdminMenuItem> = [
  {
    title: '首页',
    path: '/admin',
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
        title: '权限组管理',
        path: '/admin/permRole/permissionGroup',
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
    ],
  },
].map((menuItem: AdminMenuItem) => {
  menuItem.key = menuItem.title;
  menuItem.children = (menuItem.children || []).map(
    (childMenuItem: AdminMenuItem) => {
      childMenuItem.key = `${menuItem.key}-${childMenuItem.title}`;
      return childMenuItem;
    },
  );

  return menuItem;
});

class AdminMenu {
  menuList: Array<AdminMenuItem>;
  allMenuList: Array<AdminMenuItem>;
  pathMap: Record<string, AdminMenuItem>;
  keyMap: Record<string, AdminMenuItem>;

  constructor(menuList: Array<AdminMenuItem>) {
    this.menuList = menuList;

    const allMenuList = this.transformToAllMenuList(menuList);

    const pathMap: Record<string, AdminMenuItem> = {};
    const keyMap: Record<string, AdminMenuItem> = {};

    allMenuList.forEach((menuItem) => {
      if (menuItem.path) {
        pathMap[menuItem.path] = menuItem;
      }
      if (menuItem.key) {
        keyMap[menuItem.key] = menuItem;
      }
    });

    this.menuList = menuList;
    this.allMenuList = allMenuList;
    this.pathMap = pathMap;
    this.keyMap = keyMap;
  }

  transformToAllMenuList(menuList: Array<AdminMenuItem>): Array<AdminMenuItem> {
    const list: Array<AdminMenuItem> = [];

    menuList.forEach((menuItem) => {
      pushMenuItem(menuItem);
    });

    return list;

    function pushMenuItem(menuItem: AdminMenuItem) {
      list.push(menuItem);
      if (menuItem.children) {
        menuItem.children.forEach((childMenuItem) => {
          pushMenuItem(childMenuItem);
        });
      }
    }
  }
}

export const adminMenuMap = new AdminMenu(MenuList);
