const headers = {
  'Content-Type': 'application/json',
  Cookie: 'xzz-qyq-5800=67BBE095E1621E19CBC5D767; xzz-qyx-5800=ayPwtwHrk3Wp1PiOZBLRvEn7;',
  Host: 'localhost:5800'
}
const req = { entityName: 'Article', query: {}, pageNo: 1, pageSize: 10, sort: ['-id'] }

;(async () => {
  const r = await fetch(`http://localhost:5800/api/entity/find/page`, {
    method: 'POST',
    headers,
    body: JSON.stringify(req),
    credentials: 'include'
  })

  console.log(r.status)
})()

// import axios from 'axios'
// axios.post('http://192.168.15.124:5800/api/entity/find/page', req, { headers }).then(r => console.log(r.status))
