import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { IUser } from '../../types/models/user.model'
import { fetchLogin, joinRoom } from '../../redux/userSlice'

const Login = () => {
  const user = useAppSelector((s) => s.user.user) as IUser
  const dispatch = useAppDispatch()
  const navigator = useNavigate()
  const [name, setName] = useState<string>('')
  const [password, setPasword] = useState<string>('')

  const handelLogin = () => {
    dispatch(fetchLogin({ name, password }))
    if(!user.name) return
  }
  
  useEffect(() => {
    if(!user.name) return
    dispatch(joinRoom())
    user.orgnization.name.split(' ')[0] === 'IDF'
    ? navigator('/interseptors')
    : navigator('/terorists')
  }, [user])

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
