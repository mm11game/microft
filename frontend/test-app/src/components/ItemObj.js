import React from 'react'

const ItemObj = ({ item, handleOrder }) => {
  return (
    <div
      style={{
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        alignItems: 'center',
        width: '200px',
        height: '200px',
        padding: '10px',
        marginBottom: '10px',
      }}>
      <div>{item.itemName}</div>
      <img
        src={item.image}
        style={{ width: '120px', height: '120px' }}
        alt="kiun"></img>
      <div>
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
