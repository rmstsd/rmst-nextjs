# nextjs ISR demo

# 先决条件

- 先要在 m4 内建好业务对象, 业务对象名为 `Article`, 添加字段 `title` `author` `summary` `content` `cover` 5 个字段; 其中 `cover` 选图片 其他都选文字
- 可以通过执行 `node fk.mjs` 批量生成测试数据 (但不能生成图片), 图片需要到 m4 内上传

# 本地开发

- 执行 `dev` 即可

# 生产构建-运行

- 执行 `build` 会开始构建, 会生成一个文章列表页的 html, 和 两个文章详情页的 html
- 之后 运行 `start`, 当用户访问时, nextjs 会按需增量构建

# 更新文章数据 (ISR) ISR

- 当文章数据发生变化(增删改)后, 需要 调用 [/api](./src/app/api/route.ts) 接口使缓存失效 (不用重新 build, 也不用重新 start)
  - 可以通过 Postman 进行本地测试
- 然后当用户下一次访问时, nextjs 才会开始增量构建
