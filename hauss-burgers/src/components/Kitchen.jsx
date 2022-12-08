import { useState, useEffect } from "react";
import axios from "axios";
import './Kitchen.css'

export default function Kitchen({handleSetUser, user}){
  const [orders, setOrders] = useState();
  
  useEffect(() => {
    axios.get("https://6375b37bb5f0e1eb85f6feaa.mockapi.io/api/hb/orders")
    .then((result) => setOrders(result.data))
  },[])


  return(
    <div className="kitchen-view">
      <div className="kitchen-header">
      <img className= "logo-hauss"src="img/logo-hauss.png" alt="logo-hauss" />
      <h2 className="kitchen-orders">ORDERS</h2>
      <img src="img/flag-colors.png" alt="flag-colors" className="flag-colors" />
      </div>
      {orders && orders.map((item) => {
        
        return (
        <article key={item.id} className="order">
          <div className="header-color">
            <p>TABLE: {item.order.table}.</p>
            <p>WAITER: {item.order.user}</p>
          </div>
          {item.order.items.map((dish) => {
            return(
              <div key={dish.name} className="order-resumen">
                <p>{dish.qty} x {dish.name}</p>
              </div>
            )
          })}
          <button>DONE</button>
        </article>)})}
      
  
  </div>
  )
}