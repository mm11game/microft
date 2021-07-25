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
      {!token ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '50px',
          }}>
          <div>
            <Link to="/">
              <img
                src={'../../logo192.png'}
                style={{
                  display: 'inline-block',
                  width: '50px',
                }}
                alt="kiun"></img>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ marginRight: '10px' }}>
              서비스
            </Link>
            <Link to="/sign-up" style={{ marginRight: '10px' }}>
              회원가입
            </Link>
            <Link to="/login" style={{ marginRight: '10px' }}>
              로그인
            </Link>
          </div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '50px',
          }}>
          <div>
            <Link to="/">
              <img
                src={'../../logo192.png'}
                style={{
                  display: 'inline-block',
                  width: '50px',
                }}
                alt="kiun"></img>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ marginRight: '10px' }}>
              서비스
            </Link>
            <Link to="/mypage/order" style={{ marginRight: '10px' }}>
              마이페이지
            </Link>
            <Link to="/" onClick={handleLogout}>
              로그아웃
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
