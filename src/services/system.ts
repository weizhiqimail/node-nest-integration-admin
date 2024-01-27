import request from '@/request';

export function queryDatabaseTableList(data = {}) {
  return request.get('/api/sys/db/table/list', { data });
}
