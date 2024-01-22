import { RouteItem } from './types';

const docsRoutes: Array<RouteItem> = [
  {
    path: '/docs',
    name: '文档',
    component: '@/pages/Docs',
    meta: {
      isModuleEntry: true,
    },
  },
];

export default docsRoutes;
