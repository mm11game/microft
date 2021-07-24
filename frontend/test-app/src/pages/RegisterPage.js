import React, { useEffect, useState, useRef } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { tokenState } from '../atom/atom'
import '../css/RegisterPage.css'
const axios = require('axios')

const RegisterPage = () => {
  const [token, setToken] = useRecoilState(tokenState)
  const [valid, setValid] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [details, setDetails] = useState({
    email: '',
    password: '',
    password2: '',
    mobile: '',
  })
  const history = useHistory()
  const inputEl = useRef(null)

  const registerAndSaveToken = async () => {
    if (details.email.indexOf('@') === -1) {
      alert('이메일 형식이 틀립니다.')
      inputEl.current.focus()
      setValid(true)
      return
    }

    if (details.password.length < 8 || details.password.length > 15) {
      alert('비밀번호를 확인해주세요')
      setValidPassword(true)
      return
    }

    if (details.password !== details.password2) {
      alert('비밀번호가 다름')
      return
    }

    const body = { ...details }
    const { data } = await axios.post('http://localhost:5000/sign-up', body, {
      'Context-Type': 'application/json',
    })

    setToken(() => data.token)
    window.localStorage.setItem('Token', data.token)
    history.push('/')
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <h1 style={{ padding: '10px', marginBottom: '10px' }}>가입하기</h1>

      <input
        className={valid ? 'invalid' : null}
        ref={inputEl}
        style={{ padding: '10px', marginBottom: '10px' }}
        placeholder="이메일"
        name="email"
        onChange={(e) =>
          setDetails({ ...details, email: e.target.value })
        }></input>
      <input
        className={validPassword ? 'invalid' : null}
        style={{ padding: '10px', marginBottom: '10px' }}
        placeholder="비밀번호"
        name="password"
        onChange={(e) =>
          setDetails({ ...details, password: e.target.value })
        }></input>
      <input
        style={{ padding: '10px', marginBottom: '10px' }}
        placeholder="비밀번호확인"
        name="password2"
        onChange={(e) =>
          setDetails({ ...details, password2: e.target.value })
        }></input>
      <input
        style={{ padding: '10px', marginBottom: '10px' }}
        placeholder="전화번호"
        name="mobile"
        onChange={(e) =>
          setDetails({ ...details, mobile: e.target.value })
        }></input>

      <button
        style={{ padding: '10px', marginBottom: '10px' }}
        onClick={registerAndSaveToken}>
        가입하기
      </button>
    </div>
  )
}

export default RegisterPage
