import React from 'react'
import ReactDOM from 'react-dom/client'
import microApp from '@micro-zoe/micro-app'
import App from './App'
import './index.less'

// 初始化 micro-app
microApp.start()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
