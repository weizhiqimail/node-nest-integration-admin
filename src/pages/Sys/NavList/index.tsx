import { history } from 'umi';

import routes from '@/routes';
import styles from './index.module.less';

function NavListPage() {
  return (
    <div className={'p12'}>
      <div className={styles.routeList}>
        {routes.map((routItem) => {
          return renderRouteItem(routItem);
        })}
      </div>
    </div>
  );

  function renderRouteItem(routeItem: any) {
    if (!routeItem) {
      return null;
    }
    if (Array.isArray(routeItem.children)) {
      return routeItem.children.map((childItem: any) => {
        return renderRouteItem(childItem);
      });
    }
    return (
      <div className={styles.routeItem} key={routeItem.path}>
        <div
          className={styles.routeItemName}
          onClick={() => {
            history.push(routeItem.path);
          }}
        >
          {routeItem.name} {routeItem.path}
        </div>
      </div>
    );
  }
}

export default NavListPage;
