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
  showCreateBtn?: boolean;
  createBtnProps?: ButtonProps;
  createHandler?: (record: any) => void;
  showQueryBtn?: boolean;
  showResetBtn?: boolean;
  queryBtnProps?: ButtonProps;
  resetBtnProps?: ButtonProps;
}

export interface CRUDTableProps<RowItemType = any, UpdateItemType = any> {
  dataSource?: Array<RowItemType>;
  total?: number;
  columns?: Array<ColumnProps>;
  tableProps?: TableProps;
  queryHandler?: (data: any) => void;

  showUpdateBtn?: boolean;
  showDelBtn?: boolean;

  updateHandler?: (value: any, index: number, record: any) => void;
  delHandler?: (value: any, index: number, record: any) => void;

  showPagination?: boolean;
  paginationProps?: PaginationProps;
}

export interface CRUDTableItemOption {
  field: string;
  canQuery?: boolean;
  canCreate?: boolean;
  canUpdate?: boolean;
}
