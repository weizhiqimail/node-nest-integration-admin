import React from 'react';
import { Table, Pagination } from '@alifd/next';

import { CRUDTableProps } from '@/components/CRUD/types';
import { CRUD_BASE_CN } from '@/components/CRUD/config';

function CRUDTable<T>(props: CRUDTableProps<T>) {
  const {
    dataSource,
    columns = [],
    tableProps,
    total = 0,

    showPagination = true,
    paginationProps,
  } = props;

  const tablePropsInfo: any = {
    dataSource,
    columns,
  };

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
