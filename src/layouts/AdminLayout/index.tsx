import { useState } from 'react';
import { Outlet, history } from 'umi';
import { Nav, Shell } from '@alifd/next';
import classNames from 'classnames';

import layoutsStyle from '../layouts.module.less';
import styles from './index.module.less';
import { AdminMenuItem, adminMenuList, AdminMenuCacheKey } from './config';
import { safeGetLocalStorage, safeSetLocalStorage } from '@/utils/browser';

function AdminLayout() {
  const [navCollapse, setNavCollapse] = useState(false);

  const [navSelectKeys, setNavSelectKeys] = useState<string[]>(
    safeGetLocalStorage(AdminMenuCacheKey, [adminMenuList[0].title]),
  );

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
        <Nav selectedKeys={navSelectKeys}>
          {adminMenuList.map((menuItem) => {
            return renderNavItem(menuItem);
          })}
          <Nav.Item icon="account">Nav Item 1</Nav.Item>
        </Nav>
      </Shell.Navigation>

      <Shell.Content>
        <Outlet />
      </Shell.Content>
    </Shell>
  );

  function renderNavItem(menuItem: AdminMenuItem) {
    if (Array.isArray(menuItem.children) && menuItem.children.length > 0) {
      return (
        <Nav.SubNav key={menuItem.key} label={menuItem.title}>
          {menuItem.children.map((childMenuItem) => {
            return renderNavItem(childMenuItem);
          })}
        </Nav.SubNav>
      );
    }
    return (
      <Nav.Item
        key={menuItem.key}
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

    if (menuItem.key) {
      setNavSelectKeys([menuItem.key]);
      safeSetLocalStorage(AdminMenuCacheKey, [menuItem.key]);
    }

    history.push(menuItem.path);
  }
}

export default AdminLayout;
