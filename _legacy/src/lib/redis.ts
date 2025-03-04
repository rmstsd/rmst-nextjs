import Redis from 'ioredis'

import chalk from 'chalk'

const redis = new Redis({ host: 'localhost', port: 6379 })

export interface Note {
  title: string
  content: string
  updateTime: string
}

export async function getAllNotes() {
  const initialData = {
    '1702459181837':
      '{"title":"cc","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
    '1702459182837':
      '{"title":"bb","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
    '1702459188837': '{"title":"aa","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
  }

  const data = await redis.hgetall('notes')

  if (Object.keys(data).length == 0) {
    await redis.hset('notes', initialData)
  }
  return await redis.hgetall('notes')
}

export async function addNote(data) {
  const uuid = Date.now().toString()
  await redis.hset('notes', [uuid], data)
  return uuid
}

export async function updateNote(uuid, data) {
  await redis.hset('notes', [uuid], data)
}

export async function getNote(uuid): Promise<Note> {
  return JSON.parse(await redis.hget('notes', uuid))
}

export async function delNote(uuid) {
  return redis.hdel('notes', uuid)
}

export default redis

export async function addUser(username, password) {
  await redis.hset('users', [username], password)
  return {
    name: username,
    username
  }
}

export async function getUser(username, password) {
  const passwordFromDB = await redis.hget('users', username)
  if (!passwordFromDB) return 0
  if (passwordFromDB !== password) return 1
  return {
    name: username,
    username
  }
}
