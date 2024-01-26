import React, { useEffect } from 'react';
import { Table, Pagination, Button, Divider } from '@alifd/next';
import { isFunction } from 'lodash';

import { CRUDTableProps } from '@/components/CRUD/types';
import { CRUD_BASE_CN } from '@/components/CRUD/config';

function CRUDTable<T>(props: CRUDTableProps<T>) {
  const {
    dataSource,
    columns = [],
    tableProps,
    total = 0,

    showUpdateBtn = true,
    showDelBtn = true,

    updateHandler,
    delHandler,

    showPagination = true,
    paginationProps,
  } = props;

  const tablePropsInfo: any = {
    dataSource,
    columns,
  };

  useEffect(() => {
    const hasOperationCol = columns.find((col) => col.title === '操作');
    if (hasOperationCol) {
      return;
    }
    columns.push({
      title: '操作',
      cell: (value, index, record) => {
        let updateJSX = null;
        let delJSX = null;

        if (showUpdateBtn) {
          updateJSX = (
            <Button
              text
              onClick={() => {
                if (isFunction(updateHandler)) {
                  updateHandler(value, index, record);
                }
              }}
            >
              编辑
            </Button>
          );
        }
        if (showDelBtn) {
          delJSX = (
            <Button
              text
              onClick={() => {
                if (isFunction(delHandler)) {
                  delHandler(value, index, record);
                }
              }}
            >
              删除
            </Button>
          );
        }

        return (
          <div>
            {updateJSX}
            {updateJSX && delJSX ? <Divider direction={'ver'} /> : null}
            {delJSX}
          </div>
        );
      },
    });
  }, [JSON.stringify(dataSource)]);

  return (
    <div className={`${CRUD_BASE_CN}-table`}>
      <Table {...tablePropsInfo} {...tableProps}></Table>
      {showPagination && (
        <div className={'fsb'}>
          <div></div>
          <Pagination
            style={{ marginTop: 16 }}
            total={total}
            {...paginationProps}
          ></Pagination>
        </div>
      )}
    </div>
  );
}

export default CRUDTable;
