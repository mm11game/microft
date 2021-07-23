import React from 'react'

const ItemObj = ({ item, handleOrder }) => {
  return (
    <div style={{ border: '1px solid' }}>
      <div>{item.itemName}</div>
      <div>{item.image}</div>
      <button
        onClick={() => {
          handleOrder(item.id)
        }}>
        주문하기
      </button>
    </div>
  )
}

export default ItemObj
