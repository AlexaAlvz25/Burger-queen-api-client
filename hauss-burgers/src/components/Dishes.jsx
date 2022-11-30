/* eslint-disable react/prop-types */

function Dishes({dish, handleAddItem}) {
  return (
    <tr>
      <td className="products-center"> {dish.name} </td>
      <td className="products-center"> $ {dish.price}.00 </td>
      <td>
        <button className="btn-Add" onClick={()=>{handleAddItem({id:dish.id , name:dish.name, price:dish.price, qty: 1, total:dish.price})}}>Add</button>
      </td>
    </tr>
  )
}

export default Dishes