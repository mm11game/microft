import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { tokenState } from '../atom/atom'

const MyPageDetail = ({ match }) => {
  const [token, setToken] = useRecoilState(tokenState)
  const [item, setItem] = useState({})
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/order/${match.params.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          'Content-Type': 'application/json',
        },
      )
      setItem(() => data)
    }
    fetchData()
  }, [])
  return (
    <div>
      <div>{item.id}</div>
      <div>{item.itemName}</div>
    </div>
  )
}

export default MyPageDetail
