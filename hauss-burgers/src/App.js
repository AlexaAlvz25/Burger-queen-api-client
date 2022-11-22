import { Routes, Route } from 'react-router-dom';
import Waiters from './components/Waiters';
import Kitchen from './components/Kitchen';
import Login from './components/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={ <Waiters /> }/>
        <Route path='/waiters' element={ <Login /> }/>
        <Route path='/kitchen' element={ <Kitchen /> }/>
      </Routes>
    </div>
  )
}

export default App