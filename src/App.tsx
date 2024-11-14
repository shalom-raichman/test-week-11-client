import { createContext, useState } from 'react'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { IUser } from './types/models/user.model'
import Nav from './components/Nav'
import { Navigate, Route, Routes } from 'react-router-dom'
import Terorists from './components/pages/Terorists'
import Inteseptors from './components/pages/Inteseptors'
import { OrgnizationsEnum } from './types/enums/orgnizationEnum'
import { io } from 'socket.io-client'
import { Provider } from 'react-redux'


export const UserContext = createContext<
  { user: IUser; setUser: (x: IUser) => void } | undefined
>(undefined)

const App = () => {
  // const initialUser: IUser = {
  //   name: 'shalom2',
  //   password: '$2b$10$Tfj3TzmxEtkxrB6mu8v8c.nhpogBPUKFhVwdl/LHhzdgeVUUIsYMS',
  //   orgnization: {
  //     name: OrgnizationsEnum.Hezbollah,
  //     resources: [
  //       {
  //         name: 'Iron Dome',
  //         amount: 25,
  //       },
  //       {
  //         name: "David's Sling",
  //         amount: 15,
  //       },
  //     ],
  //     budget: 8000000,
  //   },
  // }
  // const [user, setUser] = useState<IUser>(initialUser)

  return (
    // <UserContext.Provider value={{ user, setUser }}>
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
    // </UserContext.Provider>
  )
}

export default App
