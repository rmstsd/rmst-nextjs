import 'server-only'

import axios from 'axios'

const baseURL = `http://localhost:5800/api`
const headers = {
  'Content-Type': 'application/json',
  Cookie: 'xzz-qyq-5800=67BBE095E1621E19CBC5D767; xzz-qyx-5800=ayPwtwHrk3Wp1PiOZBLRvEn7',
  Host: 'localhost:5800'
}
// const axiosInstance = axios.create({ baseURL, headers })

export async function findEntityPage() {
  const req = { entityName: 'Article', query: {}, pageNo: 1, pageSize: 10, sort: ['-id'] }

  return dataList

  const r = await fetch(`${baseURL}/entity/find/page`, {
    method: 'POST',
    headers,
    body: JSON.stringify(req),
    cache: 'force-cache'
  }).then(res => res.json())

  return r.page
}

export async function findEntityOne(id: string) {
  return dataList.find(item => item.id === id)

  const r = await fetch(`${baseURL}/entity/find/one`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ entityName: 'Article', id })
  }).then(r => r.json())

  return r.entityValue
}

export const dataList = [
  {
    summary: 'summary 哈哈哈',
    modifiedOn: 1740990738738,
    createdBy: '67BBE095E1621E19CBC5D767',
    author: 'lcl-3',
    modifiedBy: '67BBE095E1621E19CBC5D767',
    id: '67C56912E2FD5A1A87B4F46C',
    title: '哈哈哈',
    createdOn: 1740990738738,
    content: 'content 哈哈哈 content 哈哈哈 content 哈哈哈'
  },
  {
    cover: {
      originalName: '24.png',
      path: 'upload\\20250362\\67C55833E2FD5A1A87B49DE5.png',
      size: 35382,
      md5: null
    },
    summary: '东北的冬 刮西北风',
    modifiedOn: 1740994435066,
    createdBy: '67BBE095E1621E19CBC5D767',
    author: 'lcl-2',
    modifiedBy: '67BBE095E1621E19CBC5D767',
    id: '67C5584EE2FD5A1A87B49E0A',
    title: '东北的冬3',
    createdOn: 1740986446986,
    version: 1,
    content: '东北的冬 content 刮西北风，东北的冬 content 刮西北风，东北的冬 content 刮西北风'
  },
  {
    cover: {
      originalName: 'u=2842321530,644071605&fm=253&app=120&f=JPEG.jpg',
      path: 'upload\\20250362\\67C557C5E2FD5A1A87B49D4E.jpg',
      size: 37615,
      md5: null
    },
    summary: '家 summary 人 summary 们 summary 好 summary',
    modifiedOn: 1740986382961,
    createdBy: '67BBE095E1621E19CBC5D767',
    author: 'lcl',
    modifiedBy: '67BBE095E1621E19CBC5D767',
    id: '67C5580EE2FD5A1A87B49DB3',
    title: '家人们好',
    createdOn: 1740986382961,
    content: '家人们好 content 家人们好 content 家人们好 content'
  }
]
