import { Outlet } from 'umi';

import layoutsStyle from '../layouts.module.less';

function LoginLayout() {
  return (
    <div className={layoutsStyle.pageLayout}>
      LoginLayout
      <Outlet />
    </div>
  );
}

export default LoginLayout;
