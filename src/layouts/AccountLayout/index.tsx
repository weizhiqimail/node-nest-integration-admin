import { Outlet } from 'umi';

import layoutsStyle from '../layouts.module.less';

function AccountLayout() {
  return (
    <div className={layoutsStyle.pageLayout}>
      AccountLayout
      <Outlet />
    </div>
  );
}

export default AccountLayout;
