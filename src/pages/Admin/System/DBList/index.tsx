import React, { useState, useEffect } from 'react';
import { Form, Tab, Table, Typography, Loading, Button } from '@alifd/next';

import AdminHeader from '@/components/admin/Header';
import { queryDatabaseTableList } from '@/services/system';
import {
  DBTabItem,
  generateDBTableColumn,
} from '@/pages/Admin/System/DBList/config';

function DBListPage() {
  const [pageLoading, setPageLoading] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string>('');
  const [tabList, setTabList] = useState<Array<DBTabItem>>([]);

  useEffect(() => {
    pageQuery();
  }, []);

  return (
    <div className={'p12'}>
      <div className={'fsb'}>
        <AdminHeader title={'数据库表'} />
        <Button
          type={'primary'}
          loading={pageLoading}
          onClick={() => {
            pageQuery();
          }}
        >
          查询
        </Button>
      </div>
      <Loading style={{ width: '100%' }} visible={pageLoading}>
        <Tab
          activeKey={activeKey}
          onChange={(v) => {
            setActiveKey(v);
          }}
        >
          {tabList.map((tabItem) => {
            const fields = [
              'name',
              'tableName',
              'givenTableName',
              'targetName',
            ];
            return (
              <Tab.Item key={tabItem.tableName} title={tabItem.tableName}>
                <Form className={'globalForm'}>
                  {fields.map((field) => {
                    // @ts-ignore
                    const value = tabItem[field] || '';
                    return (
                      <Form.Item
                        className={'mr12'}
                        key={field}
                        label={field}
                        colon
                      >
                        {value}
                      </Form.Item>
                    );
                  })}
                </Form>
                {tabItem.comment && (
                  <Typography.Paragraph>
                    备注：{tabItem.comment}
                  </Typography.Paragraph>
                )}
                <Table
                  className={'mt10'}
                  columns={generateDBTableColumn()}
                  dataSource={tabItem.columnList || []}
                ></Table>
              </Tab.Item>
            );
          })}
        </Tab>
      </Loading>
    </div>
  );

  function pageQuery() {
    setPageLoading(true);
    queryDatabaseTableList()
      .then((res) => {
        const data = res?.data || [];
        if (Array.isArray(data) && data.length > 0) {
          setTabList(data);
          setActiveKey(data[0].tableName);
        }
      })
      .finally(() => {
        setPageLoading(false);
      });
  }
}

export default DBListPage;
