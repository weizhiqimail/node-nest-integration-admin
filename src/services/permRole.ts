import request from '@/request';

/**
 * 获取权限列表
 */
export function queryPermissionList(data = {}) {
  return request.post('/api/auth/permission/list', data);
}

/**
 * 通过 id 获取权限
 */
export function queryPermissionById(data: any) {
  return request.post('/api/auth/permission/queryById', data);
}

/**
 * 创建权限
 */
export function createPermission(data: any) {
  return request.post('/api/auth/permission/create', data);
}

/**
 * 更新权限
 */
export function updatePermission(data: any) {
  return request.post('/api/auth/permission/update', data);
}

/**
 * 删除权限
 */
export function deletePermission(data: any) {
  return request.post('/api/auth/permission/delete', data);
}
