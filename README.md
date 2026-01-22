# Micro-app 微前端项目

基于 [micro-app](https://zeroing.jd.com/) 框架构建的微前端项目，包含三个业务子应用。

## 项目结构

```
MIrcoProject/
├── main-app/              # 主应用（基座应用）
├── meeting-room-app/      # 会议室预定系统
├── exam-app/              # 考试系统
└── chat-app/              # 聊天室
```

## 技术栈

- **主应用**: React + Vite + Micro-app
- **子应用**: React + Vite

## 子应用说明

本项目主要展示 Micro-app 微前端架构，三个子应用仅作为架构演示，只显示项目名称。

### 🏢 会议室预定系统 (meeting-room-app)
- 端口: 5174
- 仅显示项目名称，用于演示 micro-app 加载

### 📝 考试系统 (exam-app)
- 端口: 5175
- 仅显示项目名称，用于演示 micro-app 加载

### 💬 聊天室 (chat-app)
- 端口: 5176
- 仅显示项目名称，用于演示 micro-app 加载

## 快速开始

### 前置要求

- Node.js >= 18
- pnpm >= 8

如果未安装 pnpm：
```bash
npm install -g pnpm
```

### 安装依赖

```bash
pnpm install
```

或使用脚本：
```bash
pnpm run install:all
```

### 开发模式

同时启动所有应用：

```bash
pnpm run dev
```

或者分别启动：

```bash
# 启动主应用（端口：5173）
pnpm run dev:main

# 启动会议室预定系统（端口：5174）
pnpm run dev:meeting

# 启动考试系统（端口：5175）
pnpm run dev:exam

# 启动聊天室（端口：5176）
pnpm run dev:chat
```

### 构建

```bash
# 构建所有应用
pnpm run build

# 单独构建
pnpm run build:main
pnpm run build:meeting
pnpm run build:exam
pnpm run build:chat
```

## 访问地址

- 主应用: http://localhost:5173
- 会议室预定系统: http://localhost:5174
- 考试系统: http://localhost:5175
- 聊天室: http://localhost:5176

## 项目说明

### 主应用（main-app）

主应用作为微前端的基座，负责：
- 加载和渲染子应用
- 管理子应用的路由
- 统一的导航和布局

### 子应用

每个子应用都是独立的微前端模块：
- 可以独立开发和部署
- 通过 micro-app 组件在主应用中运行
- 样式和 JavaScript 隔离

## 更多信息

查看 [Micro-app 官方文档](https://zeroing.jd.com/docs.html)
