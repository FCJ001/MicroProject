# 项目结构

```
MIrcoProject/
├── main-app/                    # 主应用（基座）
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx            # 入口文件，初始化 micro-app
│       ├── App.jsx              # 主应用组件，包含路由和导航
│       ├── App.css
│       └── index.css
│
├── meeting-room-app/            # 会议室预定系统子应用
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js          # 端口: 5174, base: /meeting-room/
│   └── src/
│       ├── main.jsx
│       ├── App.jsx              # 仅显示项目名称
│       ├── App.css
│       └── index.css
│
├── exam-app/                    # 考试系统子应用
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js          # 端口: 5175, base: /exam/
│   └── src/
│       ├── main.jsx
│       ├── App.jsx              # 仅显示项目名称
│       ├── App.css
│       └── index.css
│
├── chat-app/                    # 聊天室子应用
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js          # 端口: 5176, base: /chat/
│   └── src/
│       ├── main.jsx
│       ├── App.jsx              # 仅显示项目名称
│       ├── App.css
│       └── index.css
│
├── package.json                 # 根目录配置，管理所有子应用
├── README.md                    # 项目说明文档
└── .gitignore                   # Git 忽略文件
```

## 端口分配

- 主应用: `5173`
- 会议室预定系统: `5174`
- 考试系统: `5175`
- 聊天室: `5176`

## 路由配置

- `/` - 主应用首页
- `/meeting-room/*` - 会议室预定系统
- `/exam/*` - 考试系统
- `/chat/*` - 聊天室
