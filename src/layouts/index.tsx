import { useState } from 'react';
import { Outlet } from 'umi';
import { ConfigProvider } from '@alifd/next';
import '@alifd/next/dist/next.css';

import { getDevice } from '@/utils/common';

function Layout() {
  const [device, setDevice] = useState(getDevice(NaN));

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth =
        (e && e.target && (e.target as Window).innerWidth) || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }

  return (
    <ConfigProvider device={device}>
      <Outlet />
    </ConfigProvider>
  );
}

export default Layout;
