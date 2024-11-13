import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utils/authService'
import { useSelector } from 'react-redux'
import { UserContext } from '../../App'

const Login = () => {
  const { setUser } = useContext(UserContext)
  const navigator = useNavigate()
  const [name, setName] = useState<string>('')
  const [password, setPasword] = useState<string>('')
  const handelLogin = async () => {
    const logedIn = await login({ name, password })
    if (!logedIn) return
    setUser(logedIn.data)
    logedIn.data.orgnization.name.split(' ')[0] === 'IDF' ?
    navigator('/interseptors') :
    navigator('/terorists')
  }
  return (
    <div className='form'>
      <div className="form-group">
        <label htmlFor="exampleInput">Name</label>
        <input onChange={e => setName(e.target.value)} value={name} type="text" className="form-control" id="exampleInput" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input onChange={e => setPasword(e.target.value)} value={password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <button onClick={handelLogin} type="submit" className="btn btn-primary">Submit</button>
      <button onClick={() => navigator('/register')} type="submit" className="btn">Register</button>
    </div>
  )
}

export default Login