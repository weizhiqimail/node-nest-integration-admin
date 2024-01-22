import { RouteItem } from '@/routes/types';
import routes from '@/routes';

export const moduleEntryRoutes: Array<RouteItem> = routes.filter((route) => {
  if (route.meta) {
    return route.meta.isModuleEntry;
  }
  return false;
});
