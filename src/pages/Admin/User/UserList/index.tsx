import { Field } from '@alifd/next';
import CRUD, { CRUDProps } from '@/components/CRUD';
import { FormItemsType } from '@/components/FormItems/types';

function UserListPage() {
  const searchFormField = Field.useField({});

  const crudProps: CRUDProps = {
    headerProps: {
      title: '用户列表',
    },
    formProps: {
      itemList: [
        {
          type: FormItemsType.input,
          label: '用户姓名',
          name: 'name',
          formItemProps: { style: { marginRight: 12 } },
        },
        {
          type: FormItemsType.input,
          label: 'app code',
          name: 'code',
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
    <div className={'p12'}>
      <CRUD {...crudProps} />
    </div>
  );
}

export default UserListPage;
