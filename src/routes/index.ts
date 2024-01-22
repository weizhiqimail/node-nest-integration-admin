import { RouteItem } from './types';

import accountRoutes from './account';
import docsRoutes from './docs';
import entryRoutes from './entry';

const routes: Array<RouteItem> = [
  ...entryRoutes,
  ...accountRoutes,
  ...docsRoutes,

  {
    path: '/*',
    name: '404',
    component: '@/pages/NotFound',
  },
];

export default routes;
