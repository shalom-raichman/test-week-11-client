import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utils/authService'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setState } from '../../redux/userSlice'
import { socket } from '../../main'

const Login = () => {
  // const userContexst = useContext(UserContext)
  const user = useAppSelector((s) => s.user)
  const dispatch = useAppDispatch()
  const navigator = useNavigate()
  const [name, setName] = useState<string>('')
  const [password, setPasword] = useState<string>('')

  const joinRoom = () => {
    console.log('first')
    if (user.name !== '') {
      socket.emit('join_room', user.orgnization.name)
    }
  }

  const handelLogin = async () => {
    const logedIn = await login({ name, password })
    if (!logedIn) return
    dispatch(setState(logedIn.data))
    joinRoom()
    logedIn.data.orgnization.name.split(' ')[0] === 'IDF'
      ? navigator('/interseptors')
      : navigator('/terorists')
  }
  return (
    <div className='form'>
      <div className='form-group'>
        <label htmlFor='exampleInput'>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type='text'
          className='form-control'
          id='exampleInput'
          placeholder='Enter your name'
        />
      </div>
      <div className='form-group'>
        <label htmlFor='exampleInputPassword1'>Password</label>
        <input
          onChange={(e) => setPasword(e.target.value)}
          value={password}
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          placeholder='Password'
        />
      </div>
      <button onClick={handelLogin} type='submit' className='btn btn-primary'>
        Submit
      </button>
      <button
        onClick={() => navigator('/register')}
        type='submit'
        className='btn btn-light'
      >
        Register
      </button>
    </div>
  )
}

export default Login
