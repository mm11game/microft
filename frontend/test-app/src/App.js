import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MyPage from './pages/MyPage'
import MyPageDetail from './pages/MyPageDetail'
import RegisterPage from './pages/RegisterPage'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={HomePage} exact />
      <Route path="/sign-up" component={RegisterPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/mypage/order" component={MyPage} exact />
      <Route path="/mypage/order/:id" component={MyPageDetail} />
    </Router>
  )
}

export default App
