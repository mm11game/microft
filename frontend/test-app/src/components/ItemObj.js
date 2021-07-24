import React from 'react'

const ItemObj = ({ item, handleOrder }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        width: '200px',
        height: '200px',
        padding: '10px',
        marginBottom: '10px',
      }}>
      <div>
        <div>{item.itemName}</div>
        <div>{item.image}</div>
        <button
          onClick={() => {
            handleOrder(item.id)
          }}>
          주문하기
        </button>
      </div>
    </div>
  )
}

export default ItemObj
