import { history } from 'umi';
import { Typography, List, Card } from '@alifd/next';

import styles from './index.module.less';
import { moduleEntryRoutes } from '@/pages/Entry/Home/config';
import { RouteItem } from '@/routes/types';

interface CardItem {
  title: string;
  list: Array<RouteItem>;
  jumpType: 1 | 2;
}

export default function HomePage() {
  const cardList: Array<CardItem> = [
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
          path: 'https://umijs.org/zh-CN/docs',
        },
        {
          name: 'fusion 官网',
          path: 'https://fusion.design/pc/doc/component/102?themeid=2',
        },
        {
          name: 'nest 中文官网',
          path: 'https://nest.nodejs.cn/',
        },
      ],
      jumpType: 2,
    },
  ];

  return (
    <div className={styles.pageWrapper}>
      <Typography.H1>
        欢迎来到 node-nest-integration-admin 管理后台
      </Typography.H1>

      <Typography.H2>
        这个是首页面，目前没有设计，预计是作为整个项目的介绍和入口，类似于其他项目的入口页面。
      </Typography.H2>

      <div className={styles.cardList}>
        {cardList.map((cardItem: CardItem) => {
          return renderCardItem(cardItem);
        })}
      </div>
    </div>
  );

  function renderCardItem(cardItem: CardItem) {
    return (
      <Card free className={styles.cardItem}>
        <Card.Header title={cardItem.title} />
        <Card.Divider />
        <Card.Content>
          <List
            className={styles.moduleEntryList}
            dataSource={cardItem.list}
            renderItem={(item: RouteItem) => {
              return (
                <List.Item
                  className={styles.moduleEntryItem}
                  key={item.path}
                  onClick={() => {
                    if (cardItem.jumpType === 1) {
                      history.push(item.path);
                    } else if (cardItem.jumpType === 2) {
                      window.open(item.path);
                    }
                  }}
                >
                  {item.name}
                </List.Item>
              );
            }}
          />
        </Card.Content>
      </Card>
    );
  }
}
