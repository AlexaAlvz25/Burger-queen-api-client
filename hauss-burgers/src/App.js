import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import Waiters from './components/Waiters';
import Kitchen from './components/Kitchen';
import Login from './components/Login';

function App() {
  const [user,setuser]=useState(null)
  const handleSetUser=(account)=>{
    setuser(account)
  }
  return (
    <div>
      {user?<Routes>
      
        <Route path='/waiters' element={ <Waiters handleSetUser={handleSetUser} user={user} /> }/>
        <Route path='/kitchen' element={ <Kitchen handleSetUser={handleSetUser} /> }/>
      </Routes>:
      <Routes>
      <Route path='/' element={ <Login handleSetUser={handleSetUser}/> }/>
    </Routes>}
    </div>
  )
}

export default App