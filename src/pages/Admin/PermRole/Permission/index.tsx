import CRUDTable, {CRUDTableProps} from "@/components/CRUDTable";
import styles from './index.module.less';
import {queryPermissionList} from "@/services/permRole";

interface DataSourceItem {

}

function PermissionPage() {

  const crudTableProps: CRUDTableProps<DataSourceItem> = {
    data: [],
    columns: [
      {
        title: '权限名称',
        dataIndex: 'name',
      },
      {
        title: '权限标识',
        dataIndex: 'code',
      },
      {
        title: '所属应用',
        dataIndex: 'appName',
      },
    ],
    title: '权限列表',
    authMap: {
      create: true,
      read: true,
      update: true,
      delete: true,
    },
    operationMap: {
      createHandler: (data) => {},
      readHandler: (data) => {},
      updateHandler: (data) => {},
      deleteHandler: (data) => {},
      queryHandler: (data) => {
        return queryPermissionList(data);
      },
    },
  };

  return (
    <div className={styles.permissionWrapper}>
      <CRUDTable {...crudTableProps} />
    </div>
  );
}

export default PermissionPage;
