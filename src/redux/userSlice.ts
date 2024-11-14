import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../types/models/user.model'
import { OrgnizationsEnum } from '../types/enums/orgnizationEnum'

const initialState: IUser = {
  name: '',
  password: '',
  orgnization: {
    name: OrgnizationsEnum.Hezbollah,
    resources: [
      {
        name: '',
        amount: 0,
      },
      {
        name: '',
        amount: 0,
      },
    ],
    budget: 0,
  },
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state = initialState
      return state
    },
    setState: (state, action: PayloadAction<IUser>) => {
      state = action.payload
      return state
    },
  },
})

export const { logout, setState } = userSlice.actions

export default userSlice
