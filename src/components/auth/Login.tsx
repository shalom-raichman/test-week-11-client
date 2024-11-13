import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigator = useNavigate()
  const [name, setName] = useState<string>()
  const [pasword, setPasword] = useState<string>()
  return (
    <div className='form'>
      <div className="form-group">
        <label htmlFor="exampleInput">Name</label>
        <input onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="Enter your name" />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input onChange={e => setPasword(e.target.value)} type="password" className="form-control" placeholder="Password" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
      <button onClick={() => navigator('/register')} type="submit" className="btn">Register</button>
    </div>
  )
}

export default Login