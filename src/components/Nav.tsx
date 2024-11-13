import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import { useContext } from 'react'

const Nav = () => {
  const { user } = useContext(UserContext)

  if(!user) return

  const navigator = useNavigate()

  const handelLogout = () => {
    localStorage.removeItem('authorization')
    navigator('/login')
  }
  return (
    <div className='nav'>

      <NavLink to='/interseptors'>Votes</NavLink>
      {user.organization.name.split()[0] == 'IDF' ?
        (<NavLink to='/interseptors'>Interseptors</NavLink>) :
        <NavLink to='/interseptors'>Votes</NavLink>}

      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink>

      <button onClick={handelLogout}>Logout</button>
    </div>
  )
}

export default Nav