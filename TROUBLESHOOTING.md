# 故障排除指南

## 常见错误及解决方案

### 1. npm 权限错误 (EPERM)

**错误信息：**
```
npm error code EPERM
npm error syscall open
```

**解决方案：**

**方法一：清理 npm 缓存**
```bash
npm cache clean --force
```

**方法二：使用 sudo（不推荐，但可以临时解决）**
```bash
sudo npm install
```

**方法三：修复 npm 权限（推荐）**
```bash
# 检查 npm 全局目录权限
npm config get prefix

# 如果权限有问题，重新安装 npm
npm install -g npm@latest
```

### 2. 依赖安装失败

**解决方案：**

**方法一：手动安装每个应用的依赖**
```bash
# 在项目根目录
npm install

# 进入每个子应用目录安装
cd main-app && npm install && cd ..
cd meeting-room-app && npm install && cd ..
cd exam-app && npm install && cd ..
cd chat-app && npm install && cd ..
```

**方法二：使用 npm run install:all**
```bash
npm run install:all
```

**方法三：删除 node_modules 重新安装**
```bash
# 删除所有 node_modules
rm -rf node_modules main-app/node_modules meeting-room-app/node_modules exam-app/node_modules chat-app/node_modules

# 重新安装
npm run install:all
```

### 3. vite 命令找不到

**错误信息：**
```
sh: vite: command not found
```

**解决方案：**

这表示依赖没有正确安装，需要：
```bash
cd main-app
npm install
```

### 4. 端口被占用

**错误信息：**
```
Port 5173 is already in use
```

**解决方案：**

修改对应应用的 `vite.config.js` 中的端口号：
```javascript
server: {
  port: 5177,  // 改为其他端口
}
```

### 5. 脚本执行权限问题

**错误信息：**
```
Permission denied: ./start.sh
```

**解决方案：**
```bash
chmod +x start.sh
./start.sh
```

## 推荐的运行方式

如果脚本有问题，可以直接使用 npm 命令：

```bash
# 1. 安装所有依赖
npm run install:all

# 2. 启动所有应用
npm run dev
```

或者分别启动：

```bash
# 终端1 - 启动主应用
npm run dev:main

# 终端2 - 启动会议室系统
npm run dev:meeting

# 终端3 - 启动考试系统
npm run dev:exam

# 终端4 - 启动聊天室
npm run dev:chat
```

## 检查环境

确保已安装：
- Node.js >= 18
- npm >= 9

检查命令：
```bash
node -v
npm -v
```
