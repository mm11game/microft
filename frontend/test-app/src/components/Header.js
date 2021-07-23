import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { tokenState } from '../atom/atom'

const Header = () => {
  const [token, setToken] = useRecoilState(tokenState)
  const history = useHistory()
  const handleLogout = () => {
    window.localStorage.removeItem('Token')
    setToken(() => '')
    history.push('/')
  }
  return (
    <div>
      <Link to="/">로고</Link>
      {!token ? (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/sign-up">회원가입</Link>
        </>
      ) : (
        <>
          <Link to="/mypage/order">주문목록</Link>
          <Link to="/" onClick={handleLogout}>
            로그아웃
          </Link>
        </>
      )}
    </div>
  )
}

export default Header
