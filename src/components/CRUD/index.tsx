import React from 'react';
import { Loading } from '@alifd/next';

import {
  CRUDFormProps,
  CRUDHeaderProps,
  CRUDTableProps,
} from '@/components/CRUD/types';

import CRUDHeader from '@/components/CRUD/CRUDHeader';
import CRUDForm from '@/components/CRUD/CRUDForm';
import CRUDTable from '@/components/CRUD/CRUDTable';
import { CRUD_BASE_CN } from '@/components/CRUD/config';
import './index.less';

export interface CRUDProps<RowItemType = any, UpdateItemType = any> {
  headerProps?: CRUDHeaderProps;
  formProps?: CRUDFormProps;
  tableProps?: CRUDTableProps<RowItemType, UpdateItemType>;
}

function CRUD<T = Record<any, any>>(props: CRUDProps<T>) {
  const { headerProps = {}, formProps = {}, tableProps = {} } = props;

  return (
    <div className={`${CRUD_BASE_CN}-wrapper`}>
      <Loading style={{ width: '100%' }} visible={formProps.loading}>
        <CRUDHeader {...headerProps}></CRUDHeader>
        <CRUDForm {...formProps}></CRUDForm>
        <CRUDTable {...tableProps}></CRUDTable>
      </Loading>
    </div>
  );
}

CRUD.Header = CRUDHeader;
CRUD.Form = CRUDForm;
CRUD.Table = CRUDTable;

export default CRUD;
