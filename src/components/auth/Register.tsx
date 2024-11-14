import { useState } from 'react'
import { OrgnizationsEnum } from '../../types/enums/orgnizationEnum'
import { register } from '../../utils/authService'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState<string>('')
  const [password, setPasword] = useState<string>('')
  const [organization, setOrganization] = useState<OrgnizationsEnum>()
  const navigator = useNavigate()

  const handelRegister = async () => {
    const registered = await register({
      name,
      password,
      orgnizationName: organization as OrgnizationsEnum,
    })
    if (registered.err) return
    navigator('/login')
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
      <div className='form-group'>
        <label htmlFor='Select'>Organization</label>
        <select
          onChange={(e) => setOrganization(e.target.value as OrgnizationsEnum)}
          id='disabledSelect'
          className='form-control'
        >
          <option value={OrgnizationsEnum.Hamas}>
            {OrgnizationsEnum.Hamas}
          </option>
          <option value={OrgnizationsEnum.Hezbollah}>
            {OrgnizationsEnum.Hezbollah}
          </option>
          <option value={OrgnizationsEnum.Houthis}>
            {OrgnizationsEnum.Houthis}
          </option>
          <option value={OrgnizationsEnum.IRGC}>{OrgnizationsEnum.IRGC}</option>
          <option value={'IDF'}>IDF</option>
        </select>
      </div>
      {organization == 'IDF' && (
        <div className='form-group'>
          <label htmlFor='Select'>Organization</label>
          <select id='disabledSelect' className='form-control'>
            <option value={OrgnizationsEnum.IDFNorth}>
              {OrgnizationsEnum.IDFNorth}
            </option>
            <option value={OrgnizationsEnum.IDFSouth}>
              {OrgnizationsEnum.IDFSouth}
            </option>
            <option value={OrgnizationsEnum.IDFWestBank}>
              {OrgnizationsEnum.IDFWestBank}
            </option>
            <option value={OrgnizationsEnum.IDFCenter}>
              {OrgnizationsEnum.IDFCenter}
            </option>
          </select>
        </div>
      )}
      <button
        onClick={handelRegister}
        type='submit'
        className='btn btn-primary'
      >
        Submit
      </button>
      <button
        onClick={() => navigator('/login')}
        type='submit'
        className='btn btn-light'
      >
        Login
      </button>
    </div>
  )
}

export default Register
