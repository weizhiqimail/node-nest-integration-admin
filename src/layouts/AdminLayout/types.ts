export interface NavSelectInfo {
  selectedKeys: string[];
  openKeys: string[];
}

export interface AdminMenuItem {
  title: string;
  path?: string;
  icon?: string;
  key?: string;
  children?: Array<AdminMenuItem>;
  parent?: AdminMenuItem;
  level?: number;
}
