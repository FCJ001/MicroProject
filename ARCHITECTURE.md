# Micro-app 架构说明

## 架构概述

本项目采用 Micro-app 微前端架构，由一个主应用（基座）和三个子应用组成。

## 技术栈

- **构建工具**: Vite
- **框架**: React 18
- **微前端框架**: @micro-zoe/micro-app
- **路由**: React Router v6

## 架构图

```
┌─────────────────────────────────────────┐
│           主应用 (Main App)              │
│  ┌───────────────────────────────────┐  │
│  │  Navigation & Router              │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  <micro-app> 组件                 │  │
│  │  - name: "meeting-room"           │  │
│  │  - url: "http://localhost:5174"  │  │
│  │  - baseroute: "/meeting-room"     │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  <micro-app> 组件                 │  │
│  │  - name: "exam"                   │  │
│  │  - url: "http://localhost:5175"  │  │
│  │  - baseroute: "/exam"             │  │
│  └───────────────────────────────────┘  │
│  ┌───────────────────────────────────┐  │
│  │  <micro-app> 组件                 │  │
│  │  - name: "chat"                   │  │
│  │  - url: "http://localhost:5176"  │  │
│  │  - baseroute: "/chat"             │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
         │              │              │
         ▼              ▼              ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│ 会议室预定系统 │ │   考试系统    │ │   聊天室     │
│  (5174)      │ │   (5175)     │ │   (5176)    │
└──────────────┘ └──────────────┘ └──────────────┘
```

## 核心配置

### 主应用配置

**main-app/src/main.jsx**

```javascript
import microApp from '@micro-zoe/micro-app'

// 初始化 micro-app
microApp.start()
```

**main-app/src/App.jsx**

```jsx
<micro-app name="meeting-room" url="http://localhost:5174" baseroute="/meeting-room"></micro-app>
```

### 子应用配置

**子应用 vite.config.js**

```javascript
export default defineConfig({
  server: {
    port: 5174, // 每个子应用独立端口
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  base: '/meeting-room/', // 配置 base 路径
})
```

## 关键特性

1. **独立开发**: 每个子应用可以独立开发和部署
2. **样式隔离**: Micro-app 自动处理样式隔离
3. **JS 沙箱**: 子应用的 JavaScript 运行在沙箱环境中
4. **路由隔离**: 通过 `baseroute` 配置实现路由隔离
5. **通信机制**: 支持主应用和子应用之间的数据通信

## 开发流程

1. 主应用启动，监听 5173 端口
2. 子应用独立启动，各自监听不同端口
3. 主应用通过 `<micro-app>` 组件加载子应用
4. 子应用通过 `base` 配置支持独立访问

## 部署说明

每个应用都可以独立构建和部署：

```bash
# 构建主应用
cd main-app && npm run build

# 构建子应用
cd meeting-room-app && npm run build
cd exam-app && npm run build
cd chat-app && npm run build
```

构建后的文件在各自的 `dist` 目录中，可以部署到不同的服务器或 CDN。
