'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

export default function SidebarImport() {
  const router = useRouter()

  const onChange = async e => {
    const fileInput = e.target

    if (!fileInput.files || fileInput.files.length === 0) {
      console.warn('files list is empty')
      return
    }

    const file = fileInput.files[0]

    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        console.error('response.ok是 false')
        return
      }

      const data = await response.json()

      router.push(`/note/${data.uid}`)
    } catch (error) {
      console.error(error)
    }

    // 重置 file input
    e.target.type = 'text'
    e.target.type = 'file'
  }

  return (
    <form method="post" encType="multipart/form-data" className="border border-gray-400 p-1">
      <div style={{ textAlign: 'center' }}>
        <label htmlFor="file" style={{ cursor: 'pointer' }}>
          导入 .md 文件 (api 接口方式)
        </label>
        <input
          type="file"
          id="file"
          name="file"
          multiple
          onChange={onChange}
          style={{ position: 'absolute', clip: 'rect(0 0 0 0)' }}
        />
      </div>
    </form>
  )
}
