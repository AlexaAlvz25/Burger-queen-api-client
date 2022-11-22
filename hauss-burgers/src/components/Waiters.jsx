import MenuBreakfast from './MenuBreakfast'
import './Waiters.css'

function Waiters() {
  return (
    <div id="waiters-container">
      <img alt="hauss-logo" src="img/logo-hauss.png" className="hauss-logo" />
      <img alt="flag-color" src="img/flag-colors.png" className="flag-colors" />
      <button id="breakfastBtn">Breakfast</button>
      <button id="AllDayBtn">All Day</button>
      <MenuBreakfast/>
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
        <tr>
          <td className='products-center'>example1</td>
          <td className='products-center'>- 0 +</td>
          <td className='products-center'>$20.00</td>
        </tr>
        <tr>
          <td className='products-center'>example2</td>
          <td className='products-center'>- 0 +</td>
          <td className='products-center'>$20.00</td>
        </tr>
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