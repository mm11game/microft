import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import ItemObj from '../components/ItemObj'
import { useRecoilState } from 'recoil'
import { tokenState } from '../atom/atom'

const HomePage = () => {
  const [items, setItems] = useState([])
  const [token, setToken] = useRecoilState(tokenState)
  const [orderState, setOrderState] = useState({})

  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        'http://localhost:5000/mypage/itemlist',
        {
          'Content-Type': 'application/json',
        },
      )
      setItems(() => data)
    }
    fetchData()
  }, [])

  const handleOrder = async (id) => {
    if (!token) {
      alert('로그인이 필요')
      history.push('/sign-up')
    } else {
      //백앤드에서 1초 슬립해서 보낸다?
      let body = {
        itemId: id,
      }
      let { data } = await axios.post('http://localhost:5000/order', body, {
        headers: { Authorization: `Bearer ${token}` },
        'Content-Type': 'application/json',
      })
      data.err ? alert('이미 추가 되어있습니다.') : alert('주문성공')
    }
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexFlow: 'row wrap',
          padding: '50px',
        }}>
        {items.map((item) => (
          <ItemObj key={item.id} item={item} handleOrder={handleOrder} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
