import React, { useState } from 'react';
import { Tab } from '@alifd/next';

import { PermissionTab } from '@/pages/Admin/PermRole/Permission/config';

import Permission from '@/pages/Admin/PermRole/Permission/components/Permission';
import PermissionGroup from '@/pages/Admin/PermRole/Permission/components/PermissionGroup';

function PermissionPage() {
  const [permissionTab, setPermissionTab] = useState<string>(
    PermissionTab.Permission,
  );

  return (
    <div className={'p12'}>
      <Tab
        accessKey={permissionTab}
        onChange={(v: string) => {
          setPermissionTab(v);
        }}
      >
        <Tab.Item title="权限" key={PermissionTab.Permission} />
        <Tab.Item title="权限组" key={PermissionTab.PermissionGroup} />
      </Tab>

      {permissionTab === PermissionTab.Permission && <Permission />}
      {permissionTab === PermissionTab.PermissionGroup && <PermissionGroup />}
    </div>
  );
}

export default PermissionPage;
