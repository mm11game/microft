import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { tokenState } from '../atom/atom'
import OrderObj from '../components/OrderObj'
import { useHistory } from 'react-router-dom'

const MyPage = ({ location }) => {
  const page = location.search ? location.search.split('=')[1] : 0
  const [token, setToken] = useRecoilState(tokenState)
  const [orders, setOrders] = useState([])
  const [totalPage, setTotalPage] = useState(3)
  const history = useHistory()

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/order?page=${page}}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          'Content-Type': 'application/json',
        },
      )
      setOrders(() => data.content)
      setTotalPage(() => data.totalPages)
    }
    fetchData()
  }, [page])

  const handlePage = (e) => {
    history.push(`/mypage/order?page=${e.target.value - 1}`)
  }

  return (
    <div>
      {orders.map((order) => {
        return <OrderObj key={order.id} order={order} />
      })}
      {[...Array(totalPage).keys()].map((x) => (
        <button onClick={handlePage} value={x + 1}>
          {x + 1}
        </button>
      ))}
    </div>
  )
}

export default MyPage
