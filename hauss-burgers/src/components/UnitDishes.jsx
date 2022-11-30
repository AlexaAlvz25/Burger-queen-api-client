/* eslint-disable react/prop-types */

function UnitDishes({item, handleAddItem, handleDeleteItem}) {

  return(
    <div className="count-container">
      <button className="btn-decrese" onClick={() => handleDeleteItem(item)}>-</button>
      <p className="valueCount">{item.qty}</p>
      <button className="btn-increse" onClick={() => handleAddItem(item)}>+</button>
    </div>
  )
}

export default UnitDishes