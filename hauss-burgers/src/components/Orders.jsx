import axios from "axios";


const handleAddOrder = (order) =>{
    
    axios.post('https://6375b37bb5f0e1eb85f6feaa.mockapi.io/api/hb/orders', { order })
    .then((res) => res.data)
  }

  export default handleAddOrder