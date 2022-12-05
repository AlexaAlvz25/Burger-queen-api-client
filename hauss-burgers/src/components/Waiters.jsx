/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import MenuBreakfast from './MenuBreakfast'
import UnitDishes from "./UnitDishes"
import './Waiters.css'
import handleAddOrder from './Orders'


function Waiters({user}) {
  const [order, setOrder]= useState({
    table:'',
    user: user.email,
    items:[]
  })
  console.log(order.user)

  const handleDeleteItem=(item)=>{
    const product = order.items.find((product) => product.id === item.id)
    if(product) {
      setOrder({...order, items:[...order.items.map((element) => {
        if(element.id !== item.id) {
          return element
        }else{
          if(element.qty < 1) {
            return element
          }else{
            return {...item, qty: item.qty-1, total: (item.qty-1)*item.price}
          }
        }
      })]})
    }else{
      setOrder({...order, items:[...order.items, item]});
    }
  }

  const handleAddItem=(item)=>{
    const product = order.items.find((product) => product.id === item.id)
    if(product) {
      setOrder({...order, items:[...order.items.map((element) => {
        if(element.id !== item.id) {
          return element
        }else{
          return {...item, qty: item.qty+1, total: (item.qty+1)*item.price}
        }
      })]})
    }else{
      setOrder({...order, items:[...order.items, item]});
    }
  }

  const handleSumTotal=()=>{
    let totalCount = 0;
    order.items.map((element)=>{
      totalCount += element.total;
    })
    return totalCount
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
        <input onKeyPress = {() => { 
          let inputValue = document.querySelector('#table-number').value
          let asciiCode = inputValue.charCodeAt(0)
          asciiCode >= 48 && asciiCode <= 57 ?  
          setOrder({...order, table: document.querySelector('#table-number').value})
          : console.log('Enter a number')} } type="number" id='table-number' />
          <h2>Resumen</h2>
        </div>
        
        <table id='resumen-products'>
        <tr>
          <th>Description</th>
          <th>Unit</th>
          <th>Price</th>
        </tr>
        {order&& order.items.map(item=>{
         {return (<tr>
          <td className='products-center'>{item.name}</td>
          <UnitDishes item={item} handleAddItem={handleAddItem} handleDeleteItem={handleDeleteItem}/>
          <td className='products-center'>$ {item.total}.00</td>
        </tr>)}
        })}

        </table>
        <p id='total'>Total: $ {handleSumTotal()}.00</p>
        <div className='btns'>
          <button id="cancelBtn">Cancel</button>
          <button id="orderBtn"  onClick={ () => {  handleAddOrder(order) }} >Order</button>
        </div>
      </div>
    </div>
  )
}

export default Waiters