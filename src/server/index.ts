import 'server-only'

import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5800/api',
  headers: {
    'Content-Type': 'application/json',
    Cookie: 'xzz-qyq-5173=67BBE095E1621E19CBC5D767; xzz-qyx-5173=ayPwtwHrk3Wp1PiOZBLRvEn7',
    Host: 'localhost:5173'
  }
})

export async function findEntityPage(entityName: string) {
  const req = { entityName, query: {}, pageNo: 1, pageSize: 10, sort: ['-id'] }
  const r = await axiosInstance.post(`/entity/find/page`, req)

  r.data.pageNum = Math.ceil(r.data.total / r.data.pageSize)
  return r.data
}

export async function findEntityOne(id: string) {
  const r = await axiosInstance.post(`/entity/find/one`, {
    entityName: 'Article',
    id
  })

  return r.data
}
