'use client'

export default function loader({ src }) {
  return 'http://192.168.13.16:5800/api/files/get/' + src
}
