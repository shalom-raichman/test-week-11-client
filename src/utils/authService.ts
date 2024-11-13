import { UserLoginDTO, UserRegisterDTO } from '../types/DTO/user.DTO'
import { IUser } from '../types/models/user.model'

export const login = async (userData: UserLoginDTO) => {
  try {
    const res = await fetch('http://localhost:1414/api/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })

    if (!res.ok) throw new Error("Can't login, please try again")

    const data = await res.json()

    localStorage.setItem('authorization', data.token)

    return data
  } catch (err) {
    console.error(err)
    alert("Can't login, please try again")
  }
}

export const register = async (userData: UserRegisterDTO): Promise<IUser | void> => {
  try {
    console.log(userData)
    const res = await fetch('http://localhost:1414/api/users/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userData),
    })
    console.log(res)
    if (!res.ok) throw new Error("Can't create new user, please try again")
    return await res.json()
  } catch (err) {
    console.error(err)
    alert("Can't create new user, please try again")
  }
}
