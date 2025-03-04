import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// 在合适的时机(增删改)使用 post 方法调用 http://localhost:3000/api?path=/67C65E34E2FD5A1A87B72DE6 使缓存失效

export function POST(request: NextRequest) {
  const path = request.nextUrl.searchParams.get('path')

  if (!path) {
    return NextResponse.json({ message: 'path 必传' }, { status: 400 })
  }

  console.log(path)

  revalidatePath('/')
  revalidatePath(path)

  return NextResponse.json({ message: 'ok' })
}
