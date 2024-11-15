import { UserRegisterDTO } from '../types/DTO/user.DTO'

export const register = async (userData: UserRegisterDTO) => {
  try {
    const res = await fetch('http://localhost:1414/api/users/register', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(userData),
    })
    if (!res.ok) throw new Error("Can't create new user, please try again")
    return await res.json()
  } catch (err) {
    console.error(err)
    alert("Can't create new user, please try again")
  }
}
