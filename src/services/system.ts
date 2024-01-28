import request from '@/request';

export function queryDatabaseTableList(data = {}) {
  return request.get('/api/sys/db/table/list', { data });
}

export function queryAppList(data = {}) {
  return request.post('/api/sys/app/list', data);
}

export function queryAppById(appId: number | string) {
  return request.post(`/api/sys/app/queryById/${appId}`);
}

export function createApp(data = {}) {
  return request.post('/api/sys/app/create', data);
}

export function updateAppById(appId: number | string, data: Record<any, any>) {
  return request.post(`/api/sys/app/update/${appId}`, data);
}

export function deleteAppById(appId: number | string) {
  return request.post(`/api/sys/app/delete/${appId}`);
}
