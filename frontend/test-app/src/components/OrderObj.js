import React from 'react'
import { useHistory } from 'react-router-dom'

const OrderObj = ({ order }) => {
  const history = useHistory()
  return (
    <div
      style={{
        border: '1px solid',
        width: '200px',
        height: '50px',
        padding: '10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '10px',
      }}
      onClick={() => {
        history.push(`/mypage/order/${order.id}`)
      }}>
      <div>{order.id}</div>
      <div>{order.itemName}</div>
    </div>
  )
}

export default OrderObj
