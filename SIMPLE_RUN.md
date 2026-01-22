# 简单运行指南（推荐）

如果 `start.sh` 脚本有问题，请使用以下方式：

## 方式一：使用 npm 命令（最简单）

### 步骤 1：打开终端
在 Cursor 中按 `Ctrl + `` 或 `Cmd + `` 打开终端

### 步骤 2：安装依赖
```bash
npm run install:all
```

### 步骤 3：启动项目
```bash
npm run dev
```

完成！所有应用会自动启动。

## 方式二：手动安装（如果方式一失败）

### 1. 安装根目录依赖
```bash
npm install
```

### 2. 安装主应用依赖
```bash
cd main-app
npm install
cd ..
```

### 3. 安装会议室系统依赖
```bash
cd meeting-room-app
npm install
cd ..
```

### 4. 安装考试系统依赖
```bash
cd exam-app
npm install
cd ..
```

### 5. 安装聊天室依赖
```bash
cd chat-app
npm install
cd ..
```

### 6. 启动所有应用
```bash
npm run dev
```

## 方式三：分别启动（调试用）

如果同时启动有问题，可以分别启动：

**终端 1：**
```bash
cd main-app
npm run dev
```

**终端 2：**
```bash
cd meeting-room-app
npm run dev
```

**终端 3：**
```bash
cd exam-app
npm run dev
```

**终端 4：**
```bash
cd chat-app
npm run dev
```

## 访问应用

启动成功后，在浏览器中访问：
- 主应用: http://localhost:5173
