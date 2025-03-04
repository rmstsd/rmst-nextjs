import 'server-only'

const baseURL = `http://localhost:5800/api`
const headers = {
  'Content-Type': 'application/json',
  'xyy-app-id': 'm4',
  'xyy-app-key': 'Seer1234'
}

export async function findEntityPage() {
  const req = { entityName: 'Article', query: {}, pageNo: 1, pageSize: 20, sort: ['-id'] }
  console.log('findEntityPage')
  const r = await fetch(`${baseURL}/entity/find/page`, {
    method: 'POST',
    headers,
    body: JSON.stringify(req)
  }).then(res => res.json())

  return r.page
}

export async function findEntityOne(id: string) {
  const r = await fetch(`${baseURL}/entity/find/one`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ entityName: 'Article', id })
  }).then(r => r.json())

  return r.entityValue
}
