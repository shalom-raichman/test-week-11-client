import { NavLink, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../redux/store'
import { logout } from '../redux/userSlice'

const Nav = () => {
  // const  userContext  = useContext(UserContext)
  const user = useAppSelector((s) => s.user)
  const dispatch = useAppDispatch()
  const navigator = useNavigate()

  const handelLogout = () => {
    localStorage.removeItem('authorization')
    dispatch(logout())
    navigator('/login')
  }
  return (
    <div className='nav'>
      {user.name != '' && (
        <>
          {user.orgnization.name.split(' ')[0] == 'IDF' ? (
            <NavLink to='/interseptors'>Interseptors</NavLink>
          ) : (
            <NavLink to='/terorists'>Terorists</NavLink>
          )}
        </>
      )}

      {/* <NavLink to='/login'>Login</NavLink>
      <NavLink to='/register'>Register</NavLink> */}

      <button className='btn btn-danger' onClick={handelLogout}>
        Logout
      </button>
    </div>
  )
}

export default Nav
