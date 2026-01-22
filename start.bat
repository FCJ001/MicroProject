@echo off
REM Micro-app 微前端项目启动脚本 (Windows, 使用 pnpm)

echo 🚀 启动 Micro-app 微前端项目 (使用 pnpm)...
echo.

REM 检查 pnpm 是否安装
where pnpm >nul 2>&1
if %errorlevel% neq 0 (
  echo ❌ pnpm 未安装，请先安装 pnpm:
  echo    npm install -g pnpm
  exit /b 1
)

echo ✅ 检测到 pnpm
echo.

REM 检查是否已安装依赖
if not exist "node_modules" (
  echo 📦 安装所有依赖 (使用 pnpm workspace)...
  call pnpm install
  if %errorlevel% neq 0 (
    echo ❌ 依赖安装失败
    exit /b 1
  )
) else (
  echo ✅ 依赖已存在，跳过安装
)

echo.
echo ✅ 依赖检查完成
echo.
echo 🌐 启动所有应用...
echo    - 主应用: http://localhost:5173
echo    - 会议室预定系统: http://localhost:5174
echo    - 考试系统: http://localhost:5175
echo    - 聊天室: http://localhost:5176
echo.

REM 启动所有应用
call pnpm run dev
