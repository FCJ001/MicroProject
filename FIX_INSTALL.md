# 修复安装问题

## 问题原因

项目中存在 `pnpm-lock.yaml` 文件，说明之前使用过 pnpm，现在用 npm 安装会导致冲突。

## 解决方案

### 方法一：清理后重新安装（推荐）

```bash
# 1. 删除 pnpm 锁文件
rm -f pnpm-lock.yaml

# 2. 删除所有 node_modules
rm -rf node_modules main-app/node_modules meeting-room-app/node_modules exam-app/node_modules chat-app/node_modules

# 3. 清理 npm 缓存
npm cache clean --force

# 4. 重新安装
npm run install:all
```

### 方法二：使用 --legacy-peer-deps 标志

如果方法一不行，尝试：

```bash
# 删除锁文件
rm -f pnpm-lock.yaml

# 使用 legacy-peer-deps 安装
cd main-app
npm install --legacy-peer-deps
cd ../meeting-room-app
npm install --legacy-peer-deps
cd ../exam-app
npm install --legacy-peer-deps
cd ../chat-app
npm install --legacy-peer-deps
cd ..
```

### 方法三：统一使用 pnpm（如果系统已安装 pnpm）

```bash
# 删除 npm 的 node_modules
rm -rf node_modules main-app/node_modules meeting-room-app/node_modules exam-app/node_modules chat-app/node_modules

# 使用 pnpm 安装
pnpm install
cd main-app && pnpm install && cd ..
cd meeting-room-app && pnpm install && cd ..
cd exam-app && pnpm install && cd ..
cd chat-app && pnpm install && cd ..
```

## 快速修复命令

复制粘贴以下命令到终端：

```bash
rm -f pnpm-lock.yaml && \
rm -rf node_modules main-app/node_modules meeting-room-app/node_modules exam-app/node_modules chat-app/node_modules && \
npm cache clean --force && \
npm run install:all
```
