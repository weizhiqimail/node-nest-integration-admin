import { Outlet } from 'umi';

import layoutsStyle from '../layouts.module.less';

function HomeLayout() {
  return (
    <div className={layoutsStyle.pageLayout}>
      <Outlet />
    </div>
  );
}

export default HomeLayout;
