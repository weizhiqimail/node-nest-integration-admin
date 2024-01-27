import React from 'react';
import { Typography } from '@alifd/next';

interface AdminHeaderProps {
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  desc?: React.ReactNode;
}

function AdminHeader(props: AdminHeaderProps) {
  const { title, subTitle, desc } = props;

  return (
    <div className={'mb12'}>
      {title && <Typography.H1>{title}</Typography.H1>}
      {subTitle && <Typography.H4>{title}</Typography.H4>}
      {desc && <Typography.Text>{desc}</Typography.Text>}
    </div>
  );
}

export default AdminHeader;
