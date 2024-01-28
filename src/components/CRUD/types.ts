import React from 'react';
import { Field } from '@alifd/next';
import { ColumnProps, TableProps } from '@alifd/next/types/table';

import { ItemProps } from '@/components/FormItems/types';
import { PaginationProps } from '@alifd/next/lib/pagination';
import { ButtonProps } from '@alifd/next/lib/button';

export interface CRUDHeaderProps {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  desc?: React.ReactNode;
}

export interface CRUDFormProps {
  itemList?: Array<ItemProps>;
  field?: Field;
  loading?: boolean;
  showCreateBtn?: boolean;
  createBtnProps?: ButtonProps;
  createHandler?: (record: any) => void;
  showQueryBtn?: boolean;
  queryBtnProps?: ButtonProps;
  showResetBtn?: boolean;
  resetBtnProps?: ButtonProps;
}

export interface CRUDTableProps<RowItemType = any, UpdateItemType = any> {
  dataSource?: Array<RowItemType>;
  total?: number;
  columns?: Array<ColumnProps>;
  tableProps?: TableProps;
  queryHandler?: (data: any) => void;

  showPagination?: boolean;
  paginationProps?: PaginationProps;
}
