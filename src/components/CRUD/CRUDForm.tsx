import React from 'react';
import { Button, Form } from '@alifd/next';
import { isFunction } from 'lodash';

import { CRUDFormProps } from '@/components/CRUD/types';
import { CRUD_BASE_CN } from '@/components/CRUD/config';
import FormItems from '@/components/FormItems';

function CRUDForm(props: CRUDFormProps) {
  const {
    itemList = [],
    field,
    showCreateBtn = true,
    createBtnProps = {},
    createHandler,
    showQueryBtn = true,
    showResetBtn = true,
    queryBtnProps = {},
    resetBtnProps = {},
  } = props;

  return (
    <Form field={field} className={`${CRUD_BASE_CN}-form`}>
      <div className={`${CRUD_BASE_CN}-form-left`}>
        <FormItems itemList={itemList} field={field} />
        {showQueryBtn && (
          <Button
            type={'primary'}
            style={{ marginRight: 12 }}
            {...queryBtnProps}
          >
            查询
          </Button>
        )}
        {showResetBtn && <Button {...resetBtnProps}>重置</Button>}
      </div>
      <div className={`${CRUD_BASE_CN}-form-right`}>
        {showCreateBtn && (
          <Button
            type={'secondary'}
            {...createBtnProps}
            onClick={() => {
              if (isFunction(createHandler)) {
                createHandler({});
              }
            }}
          >
            创建
          </Button>
        )}
      </div>
    </Form>
  );
}

export default CRUDForm;
