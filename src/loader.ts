'use client'

export default function loader({ src }) {
  return 'http://localhost:5800/api/files/get/' + src
}
