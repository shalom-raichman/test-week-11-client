import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Nav from './components/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Terorists from './components/pages/terorists/Terorists'
import Inteseptors from './components/pages/Intrcptors/Inteseptors'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/terorists' element={<Terorists />} />
        <Route path='/interseptors' element={<Inteseptors />} />
      </Routes>
    </div>
  )
}

export default App
