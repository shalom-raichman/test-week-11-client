import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { IUser } from '../types/models/user.model'
import { UserLoginDTO } from '../types/DTO/user.DTO'
import { socket } from '../main'
import { OrgnizationsEnum } from '../types/enums/orgnizationEnum'

interface userState {
  user: IUser
}

const initialState: userState = {
  user: {
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
  },
}

export const fetchLogin = createAsyncThunk(
  'user/login',
  async (user: UserLoginDTO, thunkApi) => {
    try {
      const res = await fetch('http://localhost:1414/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      if (!res.ok) {
        return thunkApi.rejectWithValue("Can't login, please try again")
      }
      const data = await res.json()

      localStorage.setItem('authorization', data.data.token)
      return thunkApi.fulfillWithValue(data)
    } catch (err) {
      return thunkApi.rejectWithValue("Can't login, please try again")
    }
  }
)

export const fetchProfile = createAsyncThunk(
  'user/profile',
  async (id: string, thunkApi) => {
    try {
      const res = await fetch('http://localhost:1414/api/users/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })
      if (!res.ok) {
        return thunkApi.rejectWithValue("Can't get profile, please try again")
      }
      const data = await res.json()
      return thunkApi.fulfillWithValue(data)
    } catch (err) {
      return thunkApi.rejectWithValue((err as Error).message)
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('authorization')
      state = initialState
    },
    joinRoom: (state) => {
      if (state.user) {
        console.log('user conected')
        socket.emit('join_room', state.user.orgnization.name)
      }
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<userState>) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state = initialState
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.user = action.payload.data
      })
      .addCase(fetchLogin.rejected, (state) => {
        state = initialState
      })
      .addCase(fetchProfile.fulfilled, (state, action)=> {
        state = action.payload
      })
  },
})

export const { logout, joinRoom } = userSlice.actions

export default userSlice
