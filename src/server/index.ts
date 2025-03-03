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

  const r = await fetch(`${baseURL}/entity/find/page`, {
    method: 'POST',
    headers,
    body: JSON.stringify(req)
  }).then(res => res.json())

  return r.page
}

export async function findEntityOne(id: string) {
  return {}
  // const r = await fetch(`${baseURL}/entity/find/one`, {
  //   method: 'POST',
  //   headers,
  //   body: JSON.stringify({ entityName: 'Article', id })
  // }).then(r => r.json())

  // return r.data
}
