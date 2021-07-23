import React, { useEffect, useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { tokenState } from '../atom/atom'
const axios = require('axios')

const RegisterPage = () => {
  const [token, setToken] = useRecoilState(tokenState)
  const [details, setDetails] = useState({
    email: '',
    password: '',
    mobile: '',
  })
  const history = useHistory()

  const registerAndSaveToken = async () => {
    //이메일 유효성 검증
    //비밀번호는 8~15
    //비밀번호 일치여부 확인
    //가입 성공시 서비스 페이지로 이동
    const body = { ...details }
    const { data } = await axios.post(
      'http://localhost:5000/user/sign-up',
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
      <h1>가입 페이지</h1>
      <div>
        <Link to="/">Back</Link>
      </div>
      <input
        placeholder="이메일"
        name="email"
        onChange={(e) =>
          setDetails({ ...details, name: e.target.value })
        }></input>
      <input
        placeholder="비밀번호"
        name="password"
        onChange={(e) =>
          setDetails({ ...details, password: e.target.value })
        }></input>
      <input
        placeholder="전화번호"
        name="mobile"
        onChange={(e) =>
          setDetails({ ...details, phone: e.target.value })
        }></input>

      <button onClick={registerAndSaveToken}>가입하기</button>
    </div>
  )
}

export default RegisterPage
