import { faker } from '@faker-js/faker/locale/zh_CN'

addData(30)

function addData(length) {
  const headers = {
    'Content-Type': 'application/json',
    'xyy-app-id': 'm4', // 从 m4 左侧菜单 代理账户获取
    'xyy-app-key': 'Seer1234' // 从 m4 左侧菜单 代理账户获取
  }

  Array.from({ length }).forEach(async () => {
    const req = {
      entityName: 'Article',
      entityValue: {
        title: faker.animal.cat(),
        author: faker.person.fullName(),
        summary: faker.hacker.noun(),
        content: faker.lorem.text()
      }
    }
    console.log('req', req)

    const r = await fetch(`http://localhost:5800/api/entity/create/one`, {
      method: 'POST',
      headers,
      body: JSON.stringify(req)
    })

    console.log(r.status, await r.json())
  })
}
