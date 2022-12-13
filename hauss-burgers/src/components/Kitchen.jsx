/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import './Kitchen.css'

export default function Kitchen({handleSetUser, user}){
  const [orders, setOrders] = useState();
  
  useEffect(() => {
    axios.get("https://6375b37bb5f0e1eb85f6feaa.mockapi.io/api/hb/orders")
    .then((result) => setOrders(result.data))
  },[])
  
  const navigate = useNavigate();

  const handleDoneOrder=(orderItem)=>{
    axios.put(`https://6375b37bb5f0e1eb85f6feaa.mockapi.io/api/hb/orders/${orderItem.id}`, {...orderItem,order:{...orderItem.order, status:'done'} })
    .then((res) => res.data)
  }

  return(
    <div className="kitchen-view">
      <div className="kitchen-header">
        <img className= "logo-hauss"src="img/logo-hauss.png" alt="logo-hauss" />
        <h2 className="kitchen-orders">ORDERS</h2>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon-kitchen-logout" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round"
        onClick= { () => { handleSetUser(null) ; navigate("/") }}>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
          <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>
        <img src="img/flag-colors.png" alt="flag-colors" className="flag-colors" />
      </div>
      <div className="order-container">
        {orders && orders.map((item) => {
          if(item.order.status !== 'done') {
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
                <button className="order-done" onClick={() => {
                  handleDoneOrder(item);
                }}>DONE</button>
              </article>)
          }
          })}
      </div>
  </div>
  )
}