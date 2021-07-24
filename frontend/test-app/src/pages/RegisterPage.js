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
    password2: '',
    mobile: '',
  })
  const history = useHistory()

  const registerAndSaveToken = async () => {
    //이메일 유효성 검증 //cursor가 이동한다. // input이 빨간색으로 변함
    if (details.email.indexOf('@') === -1) {
      alert('이메일 형식이 틀립니다.')
      return
    }
    //비밀번호는 8~15
    if (details.password.length < 8 || details.password.length > 15) {
      alert('비밀번호를 확인해주세요')
      return
    }
    //비밀번호 일치여부 확인
    if (details.password !== details.password2) {
      alert('비밀번호가 다름')
      return
    }
    //가입 성공시 서비스 페이지로 이동
    const body = { ...details }
    const { data } = await axios.post('http://localhost:5000/sign-up', body, {
      'Context-Type': 'application/json',
    })

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
          setDetails({ ...details, email: e.target.value })
        }></input>
      <input
        placeholder="비밀번호"
        name="password"
        onChange={(e) =>
          setDetails({ ...details, password: e.target.value })
        }></input>
      <input
        placeholder="비밀번호확인"
        name="password2"
        onChange={(e) =>
          setDetails({ ...details, password2: e.target.value })
        }></input>
      <input
        placeholder="전화번호"
        name="mobile"
        onChange={(e) =>
          setDetails({ ...details, mobile: e.target.value })
        }></input>

      <button onClick={registerAndSaveToken}>가입하기</button>
    </div>
  )
}

export default RegisterPage
