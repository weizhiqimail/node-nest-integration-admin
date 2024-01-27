import { AdminMenuItem } from '@/layouts/AdminLayout/types';

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

export default AdminMenu;
