import React from 'react';

import { CRUDHeaderProps } from '@/components/CRUD/types';
import { CRUD_BASE_CN } from '@/components/CRUD/config';

function CRUDHeader(props: CRUDHeaderProps) {
  const { title, subTitle, desc } = props || {};

  return (
    <div className={`${CRUD_BASE_CN}-header`}>
      {title && <div className={`${CRUD_BASE_CN}-header-title`}>{title}</div>}
      {subTitle && (
        <div className={`${CRUD_BASE_CN}-header-subtitle`}>{subTitle}</div>
      )}
      {desc && <div className={`${CRUD_BASE_CN}-header-desc`}>{desc}</div>}
    </div>
  );
}

export default CRUDHeader;
