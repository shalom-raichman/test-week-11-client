import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Nav from './components/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Terorists from './components/pages/terorists/Terorists'
import Inteseptors from './components/pages/Intrcptors/Inteseptors'
import Gourd from './components/Gourd'

const App = () => {

  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/terorists' element={<Gourd component={<Terorists />} />} />
        <Route path='/interseptors' element={<Gourd component={<Inteseptors />} />} />
      </Routes>
    </div>
  )
}

export default App
