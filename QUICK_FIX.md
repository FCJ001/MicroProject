# 快速修复指南

## 当前问题

子应用的 `node_modules` 缺失，导致 `vite` 命令找不到。

## 解决方案

### 方法一：重新安装依赖（推荐）

在终端中运行：

```bash
# 清理并重新安装
rm -rf node_modules main-app/node_modules meeting-room-app/node_modules exam-app/node_modules chat-app/node_modules
pnpm install
```

### 方法二：使用修复后的脚本

运行修复后的脚本：

```bash
./start.sh
```

脚本现在会检查所有子应用的依赖，如果缺失会自动安装。

### 方法三：手动安装

如果上述方法都不行，可以手动安装：

```bash
# 1. 安装根目录依赖
pnpm install

# 2. 进入每个子应用安装（pnpm workspace 应该会自动处理，但可以手动确认）
cd main-app && pnpm install && cd ..
cd meeting-room-app && pnpm install && cd ..
cd exam-app && pnpm install && cd ..
cd chat-app && pnpm install && cd ..
```

## 验证安装

安装完成后，检查是否有 vite：

```bash
# 检查根目录
ls node_modules/.bin/vite

# 检查子应用
ls main-app/node_modules/.bin/vite
```

如果文件存在，说明安装成功。

## 启动项目

```bash
pnpm run dev
```
