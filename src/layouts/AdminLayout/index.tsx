import { useState, useEffect } from 'react';
import { Outlet, history, useLocation } from 'umi';
import { Nav, Shell } from '@alifd/next';
import classNames from 'classnames';
import { useSetState } from 'ahooks';

import layoutsStyle from '../layouts.module.less';
import styles from './index.module.less';
import {
  AdminMenuItem,
  adminMenuMap,
} from '@/layouts/AdminLayout/adminMenuList';
import { safeGetLocalStorage, safeSetLocalStorage } from '@/utils/browser';
import { NavSelectInfo } from '@/layouts/AdminLayout/types';
import { AdminMenuCacheMap } from '@/layouts/AdminLayout/config';

const adminMenuList = adminMenuMap.menuList;
const adminAllMenuPathMap = adminMenuMap.pathMap;

function AdminLayout() {
  const routeLocation = useLocation();

  const [navCollapse, setNavCollapse] = useState(false);

  const startNavSelectInfo = initNavSelectInfo();
  const [navSelectInfo, setNavSelectInfo] =
    useSetState<NavSelectInfo>(initNavSelectInfo());

  return (
    <Shell className={classNames(layoutsStyle.pageLayout, styles.pageLayout)}>
      <Shell.Branding>node-nest-integration-admin</Shell.Branding>

      <Shell.Action>username</Shell.Action>

      <Shell.Navigation
        collapse={navCollapse}
        onCollapseChange={() => {
          setNavCollapse(!navCollapse);
        }}
      >
        <Nav
          openKeys={navSelectInfo.openKeys}
          defaultSelectedKeys={navSelectInfo.selectedKeys}
          selectedKeys={navSelectInfo.selectedKeys}
          openMode={'multiple'}
          onOpen={(openKeys, extra) => {
            if (extra.open) {
              const localOpenKeys = Array.from(
                new Set([...openKeys, ...(navSelectInfo.openKeys || [])]),
              );
              setNavSelectInfo({
                openKeys: localOpenKeys,
              });
              safeSetLocalStorage(AdminMenuCacheMap.OpenKeys, localOpenKeys);
            } else {
              const localOpenKeys = navSelectInfo.openKeys?.filter(
                (key) => !openKeys.includes(key),
              );
              setNavSelectInfo({
                openKeys: localOpenKeys,
              });
              safeSetLocalStorage(AdminMenuCacheMap.OpenKeys, localOpenKeys);
            }
          }}
        >
          {adminMenuList.map((menuItem) => {
            return renderNavItem(menuItem);
          })}
        </Nav>
      </Shell.Navigation>

      <Shell.Content>
        <Outlet />
      </Shell.Content>
    </Shell>
  );

  function initNavSelectInfo(): NavSelectInfo {
    const pathItem = adminAllMenuPathMap[routeLocation.pathname];

    if (pathItem) {
      const pathItemKey = pathItem.key!;

      const keys = String(pathItemKey).split('-');
      const openKeys = keys.slice(0, keys.length - 1);

      return {
        selectedKeys: [pathItemKey],
        openKeys: openKeys,
      };
    } else {
      const storageSelectedKeys = safeGetLocalStorage(
        AdminMenuCacheMap.SelectedKeys,
      );
      const storageOpenKeys = safeGetLocalStorage(AdminMenuCacheMap.OpenKeys);
      return {
        selectedKeys: storageSelectedKeys || [adminMenuList[0].title],
        openKeys: storageOpenKeys || [adminMenuList[0].title],
      };
    }
  }

  function renderNavItem(menuItem: AdminMenuItem) {
    if (Array.isArray(menuItem.children) && menuItem.children.length > 0) {
      return (
        <Nav.SubNav key={menuItem.title} label={menuItem.title}>
          {menuItem.children.map((childMenuItem) => {
            return renderNavItem(childMenuItem);
          })}
        </Nav.SubNav>
      );
    }
    return (
      <Nav.Item
        key={menuItem.title}
        onClick={() => {
          naveItemOnClick(menuItem);
        }}
      >
        {menuItem.title}
      </Nav.Item>
    );
  }

  function naveItemOnClick(menuItem: AdminMenuItem) {
    if (!menuItem.path) {
      return;
    }

    if (menuItem.title) {
      setNavSelectInfo({
        selectedKeys: [menuItem.title],
      });
      safeSetLocalStorage(AdminMenuCacheMap.SelectedKeys, [menuItem.title]);
    }

    history.push(menuItem.path);
  }
}

export default AdminLayout;
