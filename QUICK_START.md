# 快速开始指南

## 前置要求

- Node.js >= 18
- npm >= 9

## 安装步骤

### 方式一：使用脚本（推荐）

**macOS/Linux:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

### 方式二：手动安装

1. **安装根目录依赖**
```bash
npm install
```

2. **安装所有子应用依赖**
```bash
npm run install:all
```

## 启动项目

### 启动所有应用（推荐）

```bash
npm run dev
```

这将同时启动：
- 主应用: http://localhost:5173
- 会议室预定系统: http://localhost:5174
- 考试系统: http://localhost:5175
- 聊天室: http://localhost:5176

### 单独启动应用

```bash
# 启动主应用
npm run dev:main

# 启动会议室预定系统
npm run dev:meeting

# 启动考试系统
npm run dev:exam

# 启动聊天室
npm run dev:chat
```

## 访问应用

1. 打开浏览器访问: http://localhost:5173
2. 通过导航栏切换不同的子应用
3. 或直接访问子应用：
   - http://localhost:5174 (会议室预定系统)
   - http://localhost:5175 (考试系统)
   - http://localhost:5176 (聊天室)

## 常见问题

### 端口被占用

如果端口被占用，可以修改对应应用的 `vite.config.js` 中的 `server.port` 配置。

### 依赖安装失败

尝试清除缓存后重新安装：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 子应用无法加载

确保：
1. 所有应用都已启动
2. 子应用的端口配置正确
3. 主应用中的 `url` 配置与子应用端口一致

## 下一步

- 查看 [ARCHITECTURE.md](./ARCHITECTURE.md) 了解架构详情
- 查看 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) 了解项目结构
- 查看 [README.md](./README.md) 了解项目说明
