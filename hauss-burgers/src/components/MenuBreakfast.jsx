import { useState, useEffect } from "react";
import axios from "axios";
import Dishes from "./Dishes";

function MenuBreakfast({handleAddItem}) {
  const [menu, setMenu] = useState();
  
  useEffect(() => {
    axios.get("https://6375b37bb5f0e1eb85f6feaa.mockapi.io/api/hb/menu")
    .then((result) => setMenu(result.data))
  },[])
  
  return (
    <>
      <table id='products-container'>
        <tr>
          <th>Description</th>
          <th>Price</th>
          <th>Unit</th>
        </tr>
        {menu && menu.map((plate, i) => <Dishes dish={plate}  key={i} handleAddItem={handleAddItem} />)}
        
        
      </table>
    </>
  )
}

export default MenuBreakfast;
