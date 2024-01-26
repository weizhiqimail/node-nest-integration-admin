import { Field, Form } from '@alifd/next';

import CRUD, { CRUDProps } from '@/components/CRUD';
import styles from './index.module.less';
import { FormItemsType } from '@/components/FormItems/types';

interface DataSourceItem {}

function PermissionPage() {
  const searchFormField = Field.useField({});

  const crudProps: CRUDProps = {
    headerProps: {
      title: '权限列表',
    },
    formProps: {
      itemList: [
        {
          type: FormItemsType.input,
          label: '权限名称',
          name: 'permissionName',
          formItemProps: { style: { marginRight: 12 } },
        },
        {
          type: FormItemsType.input,
          label: '权限标识',
          name: 'permissionCode',
          formItemProps: { style: { marginRight: 12 } },
        },
        {
          type: FormItemsType.input,
          label: '所属应用',
          name: 'appName',
          formItemProps: { style: { marginRight: 12 } },
        },
      ],
      field: searchFormField,
    },
    tableProps: {
      dataSource: [
        { name: '1', code: '1', appName: '1' },
        { name: '2', code: '2', appName: '2' },
      ],
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
    },
  };

  return (
    <div className={styles.permissionWrapper}>
      <CRUD {...crudProps} />
    </div>
  );
}

export default PermissionPage;
