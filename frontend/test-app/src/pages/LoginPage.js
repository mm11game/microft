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
    const { data } = await axios.post(
      'http://localhost:5000/user/login',
      body,
      {
        'Context-Type': 'application/json',
      },
    )
    setToken(() => data.token)
    window.localStorage.setItem('Token', data.token)

    history.push('/')
  }

  return (
    <div>
      <h1>로그인페이지</h1>
      <div>
        <Link to="/">Back</Link>
      </div>
      <input
        placeholder="email"
        name="email"
        onChange={(e) =>
          setDetails({ ...details, email: e.target.value })
        }></input>
      <input
        placeholder="password"
        name="password"
        onChange={(e) =>
          setDetails({ ...details, password: e.target.value })
        }></input>
      <button onClick={loginAndSaveToken}>완료</button>
    </div>
  )
}

export default LoginPage
