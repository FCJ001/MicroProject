#!/bin/bash

# Micro-app 微前端项目启动脚本 (使用 pnpm)

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "🚀 启动 Micro-app 微前端项目 (使用 pnpm)..."
echo "当前目录: $(pwd)"
echo ""

# 检查 pnpm 是否安装
if ! command -v pnpm &> /dev/null; then
  echo "❌ pnpm 未安装，请先安装 pnpm:"
  echo "   npm install -g pnpm"
  exit 1
fi

echo "✅ 检测到 pnpm: $(pnpm -v)"
echo ""

# 检查是否已安装依赖
NEED_INSTALL=false

# 检查根目录
if [ ! -d "node_modules" ]; then
  echo "⚠️  根目录 node_modules 缺失"
  NEED_INSTALL=true
fi

# 检查子应用
for app in main-app meeting-room-app exam-app chat-app; do
  if [ ! -d "$app/node_modules" ]; then
    echo "⚠️  $app/node_modules 缺失"
    NEED_INSTALL=true
  fi
done

if [ "$NEED_INSTALL" = true ]; then
  echo ""
  echo "📦 安装所有依赖 (使用 pnpm workspace)..."
  echo "   这可能需要几分钟时间，请耐心等待..."
  pnpm install || {
    echo ""
    echo "❌ 依赖安装失败"
    echo "   请尝试手动运行: pnpm install"
    exit 1
  }
  echo ""
  echo "✅ 依赖安装完成"
else
  echo "✅ 所有依赖已存在"
fi

echo ""
echo "✅ 依赖检查完成"
echo ""
echo "🌐 启动所有应用..."
echo "   - 主应用: http://localhost:5173"
echo "   - 会议室预定系统: http://localhost:5174"
echo "   - 考试系统: http://localhost:5175"
echo "   - 聊天室: http://localhost:5176"
echo ""

# 启动所有应用
pnpm run dev
