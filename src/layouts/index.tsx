import { useState } from 'react';

import { useLocation } from 'umi';
import '@alifd/next/dist/next.css';
import { ConfigProvider } from '@alifd/next';

import AdminLayout from '@/layouts/AdminLayout';
import HomeLayout from '@/layouts/HomeLayout';
import LoginLayout from '@/layouts/LoginLayout';
import { getDevice } from '@/utils/common';

function Layout() {
  const routeLocation = useLocation();
  const pathname = String(routeLocation.pathname);

  const [device, setDevice] = useState(getDevice(NaN));

  let layoutChildren = null;
  switch (pathname.toLowerCase()) {
    case '/login':
      layoutChildren = <LoginLayout />;
      break;
    case '/':
    case '/home':
    case '/index':
      layoutChildren = <HomeLayout />;
      break;
    case '/admin':
      layoutChildren = <AdminLayout />;
      break;
    default:
      layoutChildren = <AdminLayout />;
      break;
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('optimizedResize', (e) => {
      const deviceWidth =
        (e && e.target && (e.target as Window).innerWidth) || NaN;
      setDevice(getDevice(deviceWidth));
    });
  }

  return <ConfigProvider device={device}>{layoutChildren}</ConfigProvider>;
}

export default Layout;
