import React from 'react'
import { useHistory } from 'react-router-dom'

const OrderObj = ({ order }) => {
  const history = useHistory()
  return (
    <div
      style={{ border: '1px solid' }}
      onClick={() => {
        history.push(`/mypage/order/${order.id}`)
      }}>
      <div>{order.id}</div>
      <div>{order.itemName}</div>
    </div>
  )
}

export default OrderObj
