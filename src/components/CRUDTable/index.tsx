import { ColumnProps, TableProps } from '@alifd/next/types/table';
import { Table, Typography } from '@alifd/next';
import { cloneDeep } from 'lodash';

export interface CRUDTableProps<T> {
  data?: Array<T>;
  columns?: Array<ColumnProps>;
  tableProps?: TableProps;
  title?: string;
  authMap?: {
    create?: boolean;
    read?: boolean;
    update?: boolean;
    delete?: boolean;
  };
  operationMap?: {
    createHandler?: (data: any) => void;
    readHandler?: (data: any) => void;
    updateHandler?: (data: any) => void;
    deleteHandler?: (data: any) => void;
    queryHandler?: (data: any) => void;
  };
}

const BASE_CLASS_NAME = 'admin-crud-table';
function CRUDTable<T>(props: CRUDTableProps<T>) {
  const {
    data,
    columns,
    tableProps = {},
    title,
    authMap = {},
    operationMap = {},
  } = props;

  const { create, read, update, delete: del } = authMap;
  const { createHandler, readHandler, updateHandler, deleteHandler } = operationMap;

  const newColumns: Array<any> = cloneDeep(columns || []);

  if (create) {
    newColumns.push({
      title: '操作',
      render: (value: any, index: number, record: any) => {
        return (
          <div className={`${BASE_CLASS_NAME}-operation`}>
            { read && <a onClick={() => readHandler && readHandler(record)}>查看</a> }
            { update && <a onClick={() => updateHandler && updateHandler(record)}>编辑</a> }
            { del && <a onClick={() => deleteHandler && deleteHandler(record)}>删除</a> }
          </div>
        );
      },
    });
  }

  return (
    <div className={`${BASE_CLASS_NAME}-wrapper`}>
      <div className={`${BASE_CLASS_NAME}-content`}>
        { title && <Typography.H1>{title}</Typography.H1> }

        <Table
          {...tableProps}
          columns={newColumns}
          dataSource={data}
        />
      </div>
    </div>
  );
}

export default CRUDTable;
