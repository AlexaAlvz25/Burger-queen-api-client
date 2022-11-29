/* eslint-disable react/prop-types */
import { useState } from "react"

function UnitDishes({qty, setOrder}) {
  const [unit, setUnit] = useState(1);

  //increase counter
  const increase = () => {
    if(unit>=0){
      setUnit(unit => unit + 1);
      return setOrder(qty += 1)
    }
  };
 
  //decrease counter
  const decrease = () => {
    if(unit>=1){
      setUnit(unit => unit - 1);
      return setOrder({qty : unit})
    }
  };

  return(
    <div className="count-container">
      <button className="btn-decrese" onClick={decrease}>-</button>
      <p className="valueCount">{unit}</p>
      <button className="btn-increse" onClick={increase}>+</button>
    </div>
  )
}

export default UnitDishes