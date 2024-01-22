export interface RouteItemMeta {
  isModuleEntry?: boolean;
}

export interface RouteItem {
  path: string;
  name: string;
  component?: string;
  redirect?: string;
  wrappers?: string[];
  meta?: RouteItemMeta;
  routes?: RouteItem[];
}
