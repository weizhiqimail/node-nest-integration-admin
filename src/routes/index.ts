import { RouteItem } from './types';

import accountRoutes from './account';
import adminRoutes from './admin';
import docsRoutes from './docs';
import entryRoutes from './entry';

const routes: Array<RouteItem> = [
  ...entryRoutes,
  ...adminRoutes,
  ...accountRoutes,
  ...docsRoutes,

  {
    path: '/*',
    name: '404',
    component: '@/pages/NotFound',
  },
];

export default routes;
