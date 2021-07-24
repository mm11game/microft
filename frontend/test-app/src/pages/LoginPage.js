import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { tokenState } from '../atom/atom'
const axios = require('axios')

const LoginPage = () => {
  const [details, setDetails] = useState({ email: '', password: '' })
  const history = useHistory()
  const [token, setToken] = useRecoilState(tokenState)

  const loginAndSaveToken = async () => {
    //- 비밀번호를 8글자 미만으로 하여 백엔드 API 호출 시, 401 Unauthorized 실패 응답 코드를 받는다.
    const body = { ...details }

    const { data } = await axios.post('http://localhost:5000/login', body, {
      'Context-Type': 'application/json',
    })

    if (data.err || !data) {
      alert('비밀번호를 확인해주세요')
      return
    }
    setToken(() => data.token)
    window.localStorage.setItem('Token', data.token)

    history.push('/mypage/order')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h1 style={{ padding: '10px', marginBottom: '10px' }}>로그인하기</h1>

      <input
        style={{ padding: '10px', marginBottom: '10px' }}
        placeholder="email"
        name="email"
        onChange={(e) =>
          setDetails({ ...details, email: e.target.value })
        }></input>
      <input
        style={{ padding: '10px', marginBottom: '10px' }}
        placeholder="password"
        name="password"
        onChange={(e) =>
          setDetails({ ...details, password: e.target.value })
        }></input>
      <button
        style={{ padding: '10px', marginBottom: '10px' }}
        onClick={loginAndSaveToken}>
        완료
      </button>
    </div>
  )
}

export default LoginPage
