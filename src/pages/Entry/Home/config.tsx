import { RouteItem } from '@/routes/types';
import routes from '@/routes';

export const moduleEntryRoutes: Array<RouteItem> = routes.filter((route) => {
  if (route.meta) {
    return route.meta.isModuleEntry;
  }
  return false;
});

export interface CardItem {
  title: string;
  list: Array<RouteItem>;
  jumpType: 1 | 2;
}

export const CardList: Array<CardItem> = [
  {
    title: '主模块路由入口',
    list: moduleEntryRoutes,
    jumpType: 1,
  },
  {
    title: '辅助文档地址',
    list: [
      {
        name: 'umi 官网',
        path: 'https://umijs.org/docs/guides/getting-started',
      },
      {
        name: 'fusion 官网',
        path: 'https://fusion.design/pc/doc/component/102?themeid=2',
      },
      {
        name: 'nest 中文官网',
        path: 'https://nest.nodejs.cn/',
      },
      {
        name: 'swagger 接口文档',
        path: 'http://localhost:4000/api-docs',
      },
      {
        name: 'iconfont',
        path: 'https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=4425329',
      },
      {
        name: 'iconfont 阿里云',
        path: 'https://www.iconfont.cn/collections/detail?cid=16472',
      },
      {
        name: 'typeorm',
        path: 'https://typeorm.io/',
      },
    ],
    jumpType: 2,
  },
];
