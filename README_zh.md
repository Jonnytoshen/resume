# 响应式在线简历

一个面向前端开发工程师的现代化响应式在线简历项目。项目采用组件化开发与配置驱动渲染，便于快速调整内容与样式，同时保持清晰的页面结构与可维护的代码组织。

[English](./README.md) | **中文**

## 项目目录结构

```
.
├── public/                     # 静态资源
│   └── favicon/                # 站点图标与清单
├── src/
│   ├── assets/                 # 资源文件
│   ├── components/             # 可复用组件
│   │   └── icons/              # 图标组件
│   ├── router/                 # 路由配置
│   ├── views/                  # 页面视图
│   ├── App.vue                 # 根组件
│   ├── config.ts               # 简历内容配置
│   ├── main.ts                 # 应用入口
│   └── styles.css              # 全局样式
├── index.html                  # 入口 HTML
├── vite.config.ts              # Vite 配置
├── tsconfig*.json              # TypeScript 配置
├── eslint.config.ts            # ESLint 配置
├── stylelint.config.ts         # Stylelint 配置
└── package.json                # 依赖与脚本
```

## 使用技术栈

- Vue 3
- Vite
- TypeScript
- Vue Router
- ESLint + Stylelint
- pnpm

## 如何使用

1. 安装依赖

   pnpm install

2. 启动开发服务器

   pnpm dev

3. 构建生产版本

   pnpm build

4. 预览生产构建

   pnpm preview

## 内容修改

简历内容集中在 [src/config.ts](src/config.ts) 中配置，组件会自动读取并渲染。你可以按需修改个人信息、项目经历、技能与联系方式等字段。
