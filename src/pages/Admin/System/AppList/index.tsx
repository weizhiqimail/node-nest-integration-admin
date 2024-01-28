import { useEffect, useState } from 'react';
import { Field, Loading } from '@alifd/next';
import CRUD, { CRUDProps } from '@/components/CRUD';
import { FormItemsType } from '@/components/FormItems/types';
import { queryAppList } from '@/services/system';

function AppPage() {
  const searchFormField = Field.useField({});
  const [appListResult, setAppListResult] = useState({
    dataSource: [],
    total: 0,
  });
  const [loading, setLoading] = useState(false);

  const crudProps: CRUDProps = {
    headerProps: {
      title: 'APP列表',
    },
    formProps: {
      itemList: [
        {
          type: FormItemsType.input,
          label: 'app ID',
          name: 'appId',
          formItemProps: { style: { marginRight: 12 } },
        },
        {
          type: FormItemsType.input,
          label: 'app名称',
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
      loading,
      queryBtnProps: {
        onClick: () => {
          pageQueryAppList();
        },
      },
      resetBtnProps: {
        onClick: () => {
          searchFormField.reset();
        },
      },
    },
    tableProps: {
      dataSource: appListResult.dataSource,
      total: appListResult.total,
      columns: [
        {
          title: 'app ID',
          dataIndex: 'id',
        },
        {
          title: 'app 名称',
          dataIndex: 'name',
        },

        {
          title: 'app code',
          dataIndex: 'code',
        },
        {
          title: 'app 描述',
          dataIndex: 'desc',
        },
        {
          title: '负责人',
          dataIndex: 'ownerName',
        },
        {
          title: '负责人 ID',
          dataIndex: 'ownerId',
        },
      ],
    },
  };

  useEffect(() => {
    pageQueryAppList();
  }, []);

  return (
    <div className={'p12'}>
      <CRUD {...crudProps} />
    </div>
  );

  function pageQueryAppList() {
    setLoading(true);
    queryAppList(searchFormField.getValues())
      .then((res) => {
        const data = res?.data || {};
        setAppListResult({
          dataSource: data.list || [],
          total: data.total || 0,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }
}

export default AppPage;
