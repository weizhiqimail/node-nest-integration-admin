import { history } from 'umi';
import { Typography, List, Card } from '@alifd/next';

import styles from './index.module.less';
import { CardList, CardItem } from '@/pages/Entry/Home/config';
import { RouteItem } from '@/routes/types';

export default function HomePage() {
  return (
    <div className={styles.pageWrapper}>
      <Typography.H1>
        欢迎来到 node-nest-integration-admin 管理后台
      </Typography.H1>

      <Typography.H2>
        这个是首页面，目前没有设计，预计是作为整个项目的介绍和入口，类似于其他项目的入口页面。
      </Typography.H2>

      <div className={styles.cardList}>
        {CardList.map((cardItem: CardItem) => {
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
