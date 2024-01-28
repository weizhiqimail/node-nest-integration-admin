import { ColumnProps } from '@alifd/next/types/table';

export interface DatabaseColumnItem {
  propertyName: string;
  type: string;
  comment: string;
  default: any;
  isNullable: boolean;
  isPrimary: boolean;
  length: number;
}

export interface DBTabItem {
  name: string;
  tableName: string;
  givenTableName: string;
  targetName: string;
  comment: string;
  columnList: Array<DatabaseColumnItem>;
}

export function generateDBTableColumn(): Array<ColumnProps> {
  return [
    {
      title: '字段名',
      dataIndex: 'propertyName',
      lock: 'left',
      width: 140,
      cell: (value: string) => <span className={'code'}>{value}</span>,
    },
    {
      title: '数据表字段名',
      dataIndex: 'givenDatabaseName',
      lock: 'left',
      width: 140,
      cell: (value: string) => <span className={'code'}>{value}</span>,
    },
    {
      title: '字段类型',
      dataIndex: 'type',
      width: 120,
    },
    {
      title: '字段长度',
      dataIndex: 'length',
      width: 120,
    },
    {
      title: '是否主键',
      dataIndex: 'isPrimary',
      cell: (text: boolean) => (text ? '是' : '否'),
      width: 120,
    },
    {
      title: '是否可空',
      dataIndex: 'isNullable',
      cell: (text: boolean) => (text ? '是' : '否'),
      width: 120,
    },
    {
      title: '默认值',
      dataIndex: 'default',
      width: 120,
    },
    {
      title: '备注',
      dataIndex: 'comment',
    },
  ];
}
