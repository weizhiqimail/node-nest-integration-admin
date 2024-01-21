import { useState } from 'react';
import { Outlet } from 'umi';
import { Nav, Shell } from '@alifd/next';
import classNames from 'classnames';

import layoutsStyle from '../layouts.module.less';
import styles from './index.module.less';

function AdminLayout() {
  const [navCollapse, setNavCollapse] = useState(false);

  return (
    <Shell className={classNames(layoutsStyle.pageLayout, styles.pageLayout)}>
      <Shell.Branding>
        <span style={{ marginLeft: 10 }}>node-nest-integration-admin</span>
      </Shell.Branding>

      <Shell.Action>
        <span style={{ marginLeft: 10 }}>username</span>
      </Shell.Action>

      <Shell.Navigation
        collapse={navCollapse}
        onCollapseChange={() => {
          setNavCollapse(!navCollapse);
        }}
      >
        <Nav embeddable aria-label="global navigation">
          <Nav.Item icon="account">Nav Item 1</Nav.Item>
        </Nav>
      </Shell.Navigation>

      <Shell.Content>
        <Outlet />
      </Shell.Content>
    </Shell>
  );
}

export default AdminLayout;
