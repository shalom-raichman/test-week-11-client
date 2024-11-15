import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { MissileLaunch } from '../types/models/missileLaunch.model'
import { MissileLaunchStatusEnum } from '../types/enums/MissileLaunchStatusEnum'

interface missileLaunchState {
  missileLaunch: MissileLaunch[]
}

const initialState: missileLaunchState = {
  missileLaunch: [],
}

export const fetchMissileLaunchList = createAsyncThunk(
  'missileLaunch/getList',
  async (_, thunkApi) => {
    try {
      const res = await fetch('http://localhost:1414/api/missiles', {
        headers: {
          authorization: localStorage.getItem('authorization')!,
        },
      })
      if (!res.ok) {
        return thunkApi.rejectWithValue("Can't get the list, please try again")
      }
      const data = await res.json()
      return thunkApi.fulfillWithValue(data)
    } catch (err) {
      return thunkApi.rejectWithValue("Can't get the list, please try again")
    }
  }
)

export const fetchMissileLaunch = createAsyncThunk(
  'missileLaunch/launchMissile',
  async (missileLaunch, thunkApi) => {
    try {
      const res = await fetch('http://localhost:1414/api/missiles', {
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('authorization')!,
        },
        body: JSON.stringify(missileLaunch)
      })
      if (!res.ok) {
        return thunkApi.rejectWithValue("Can't launch missile, please try again")
      }
      const data = await res.json()
      return thunkApi.fulfillWithValue(data)
    } catch (err) {
      return thunkApi.rejectWithValue("Can't launch missile, please try again")
    }
  }
)

export const fetchMissileLaunchStatus = createAsyncThunk(
  'missileLaunch/launchMissileStatus',
  async (missileLaunchStatus: {id: string, status: MissileLaunchStatusEnum}, thunkApi) => {
    try {
      const res = await fetch('http://localhost:1414/api/missiles', {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization')!,
        },
        body: JSON.stringify(missileLaunchStatus)
      })
      if (!res.ok) {
        return thunkApi.rejectWithValue("Can't fetch status, please try again")
      }
      const data = await res.json()
      return thunkApi.fulfillWithValue(data)
    } catch (err) {
      return thunkApi.rejectWithValue("Can't fetch status, please try again")
    }
  }
)

const missileLaunchSlice = createSlice({
  name: 'missileLaunch',
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<missileLaunchState>) => {
    builder
      .addCase(fetchMissileLaunch.fulfilled, (state, action) => {
        state.missileLaunch = action.payload.data
      })
      .addCase(fetchMissileLaunch.rejected, (state) => {
        state.missileLaunch = []
      })
  },
})

export default missileLaunchSlice
