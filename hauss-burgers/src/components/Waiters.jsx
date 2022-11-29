import { useState } from 'react'
import MenuBreakfast from './MenuBreakfast'
import UnitDishes from "./UnitDishes"
import './Waiters.css'

function Waiters() {
  const [order, setOrder]= useState({
    table:'',
    user:'',
    items:[]
  })

  const handleAddItem=(item)=>{
    setOrder({...order, items:[...order.items, item]});
  }

  return (
    <div id="waiters-container">
      <header className='header-container'>
        <img alt="hauss-logo" src="img/logo-hauss.png" className="hauss-logo" />
        <img alt="flag-color" src="img/flag-colors.png" className="flag-colors" />
      </header>
      <div className="button-container">
        <button id="breakfastBtn">Breakfast</button>
        <button id="AllDayBtn">All Day</button>
      </div>
      <MenuBreakfast handleAddItem={handleAddItem}/>
      <div id='resumen-container'>
        <div className='table'>
          <h3>Table:</h3>
          <input type="number" id='table-number' />
          <h2>Resumen</h2>
        </div>
        
        <table id='resumen-products'>
        <tr>
          <th>Description</th>
          <th>Unit</th>
          <th>Total</th>
        </tr>
        {order&& order.items.map(item=>{
         {return (<tr>
          <td className='products-center'>{item.name}</td>
          <UnitDishes props={item.qty} propsDos={setOrder}/>
          <td className='products-center'>{item.price}</td>
        </tr>)}
        })}

        </table>
        <p id='total'>Total: $ 40.00</p>
        <div className='btns'>
          <button id="cancelBtn">Cancel</button>
          <button id="orderBtn">Order</button>
        </div>
      </div>
    </div>
  )
}

export default Waiters