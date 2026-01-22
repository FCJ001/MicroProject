# 在 Cursor 中运行项目

## 方法一：使用启动脚本（推荐）

### macOS/Linux

在 Cursor 的终端中运行：

```bash
./start.sh
```

或者：

```bash
bash start.sh
```

### Windows

在 Cursor 的终端中运行：

```bash
start.bat
```

## 方法二：使用 npm 命令

### 1. 安装依赖

```bash
npm run install:all
```

### 2. 启动所有应用

```bash
npm run dev
```

这将同时启动：
- 主应用: http://localhost:5173
- 会议室预定系统: http://localhost:5174
- 考试系统: http://localhost:5175
- 聊天室: http://localhost:5176

## 方法三：单独启动应用

如果需要单独启动某个应用：

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

## 快速步骤

1. **打开终端**
   - 快捷键：`Ctrl + `` (Windows/Linux) 或 `Cmd + `` (Mac)
   - 或点击菜单：Terminal → New Terminal

2. **运行脚本**
   ```bash
   ./start.sh
   ```

3. **等待启动**
   - 脚本会自动检查并安装依赖
   - 然后启动所有应用

4. **访问应用**
   - 打开浏览器访问：http://localhost:5173
   - 通过导航栏切换不同的子应用

## 注意事项

- 确保已安装 Node.js (>= 18)
- 如果端口被占用，可以修改对应应用的 `vite.config.js` 中的端口配置
- 首次运行需要安装依赖，可能需要几分钟时间
