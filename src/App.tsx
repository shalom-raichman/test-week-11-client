import { createContext, useState } from 'react'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import { IUser } from './types/models/user.model'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Terorists from './components/pages/Terorists'
import Inteseptors from './components/pages/Inteseptors'
import { OrgnizationsEnum } from './types/enums/orgnizationEnum'
import { IResource } from './types/models/resource.model'

export const UserContext = createContext<any>(null)

const App = () => {
  // { user: IUser | null, setUser: (x: IUser) => void } | null
  // const initialUser: IUser = {
  //   name: '',
  //   password: '',
  //   orgnization: {
  //     name: '' as OrgnizationsEnum,
  //     resources: [] as IResource[],
  //     budget: 0
  //   }
  // }

  const [user, setUser] = useState<IUser | null>()

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='app'>
        <Nav />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/terorists' element={<Terorists />} />
          <Route path='/interseptors' element={<Inteseptors />} />
        </Routes>
      </div>
    </UserContext.Provider>
  )
}

export default App