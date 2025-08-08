// @ts-nocheck

'use client'
import { useEffect } from 'react'
import { unstableSetRender } from 'antd'
import { createRoot } from 'react-dom/client'

export default function Client() {
  useEffect(() => {
    unstableSetRender(function (node, container) {
      container._reactRoot || (container._reactRoot = createRoot(container))
      var root = container._reactRoot
      root.render(node)
      return function () {
        return new Promise(function (resolve) {
          setTimeout(function () {
            root.unmount()
            resolve()
          }, 0)
        })
      }
    })
  }, [])

  return null
}
