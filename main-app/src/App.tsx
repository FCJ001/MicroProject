import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.less'

// 导航组件
function Nav() {
  const location = useLocation()

  return (
    <nav className="nav">
      <div className="nav-brand">
        <h1>微前端主应用</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          首页
        </Link>
        <Link
          to="/meeting-room"
          className={location.pathname.startsWith('/meeting-room') ? 'active' : ''}
        >
          会议室预定
        </Link>
        <Link to="/exam" className={location.pathname.startsWith('/exam') ? 'active' : ''}>
          考试系统
        </Link>
        <Link to="/chat" className={location.pathname.startsWith('/chat') ? 'active' : ''}>
          聊天室
        </Link>
      </div>
    </nav>
  )
}

// 首页组件
function Home() {
  return (
    <div className="page">
      <h2>欢迎来到微前端主应用</h2>
      <p>这是一个基于 Micro-app 的微前端项目，包含三个子应用</p>
      <div className="cards-grid">
        <div className="card">
          <h3>🏢 会议室预定系统</h3>
          <p>管理和预定会议室资源</p>
          <Link to="/meeting-room" className="card-link">
            进入系统 →
          </Link>
        </div>
        <div className="card">
          <h3>📝 考试系统</h3>
          <p>在线考试和答题系统</p>
          <Link to="/exam" className="card-link">
            进入系统 →
          </Link>
        </div>
        <div className="card">
          <h3>💬 聊天室</h3>
          <p>实时聊天和消息系统</p>
          <Link to="/chat" className="card-link">
            进入系统 →
          </Link>
        </div>
      </div>
    </div>
  )
}

// 会议室预定系统容器
function MeetingRoomContainer() {
  return (
    <div className="page">
      <micro-app
        name="meeting-room"
        url="http://localhost:5174"
        baseroute="/meeting-room"
      ></micro-app>
    </div>
  )
}

// 考试系统容器
function ExamContainer() {
  return (
    <div className="page">
      <micro-app name="exam" url="http://localhost:5175" baseroute="/exam"></micro-app>
    </div>
  )
}

// 聊天室容器
function ChatContainer() {
  return (
    <div className="page">
      <micro-app name="chat" url="http://localhost:5176" baseroute="/chat"></micro-app>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Nav />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meeting-room/*" element={<MeetingRoomContainer />} />
            <Route path="/exam/*" element={<ExamContainer />} />
            <Route path="/chat/*" element={<ChatContainer />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
