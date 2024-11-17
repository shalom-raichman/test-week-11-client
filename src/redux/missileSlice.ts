import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { MissileLaunch } from '../types/models/missileLaunch.model'
import { MissileLaunchStatusEnum } from '../types/enums/MissileLaunchStatusEnum'
import { AreaEnum } from '../types/enums/orgnizationEnum'
import { InterceptorsEnum } from '../types/enums/interceptorsEnum'

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
      const res = await fetch('http://localhost:1414/api/missiles/', {
        headers: {
          authorization: localStorage.getItem('authorization')!,
          'Content-Type': 'application/json',
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

export const fetchMissileLaunchListByArea = createAsyncThunk(
  'missileLaunch/getListByArea',
  async (area: AreaEnum, thunkApi) => {
    try {
      const res = await fetch(`http://localhost:1414/api/missiles/${area}`, {
        headers: {
          authorization: localStorage.getItem('authorization')!,
          'Content-Type': 'application/json',
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
  async (missileLaunch: MissileLaunch, thunkApi) => {
    try {
      const res = await fetch('http://localhost:1414/api/missiles', {
        method: 'POST',
        headers: {
          authorization: localStorage.getItem('authorization')!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(missileLaunch),
      })
      if (!res.ok) {
        return thunkApi.rejectWithValue(
          "Can't launch missile, please try again"
        )
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
  async (
    missileLaunchStatus: { _id: string; status: MissileLaunchStatusEnum },
    thunkApi
  ) => {
    try {
      const res = await fetch('http://localhost:1414/api/missiles', {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization')!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(missileLaunchStatus),
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

export const fetchInterception = createAsyncThunk(
  'missileLaunch/launchMissileStatus',
  async (
    missileLaunchStatus: { _id: string; interceptorType: InterceptorsEnum },
    thunkApi
  ) => {
    try {
      const res = await fetch('http://localhost:1414/api/missiles/intercept', {
        method: 'PATCH',
        headers: {
          authorization: localStorage.getItem('authorization')!,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(missileLaunchStatus),
      })
      if (!res.ok) {
        return thunkApi.rejectWithValue('Interception failed')
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
        // state.missileLaunch.push(action.payload.data)
      })
      .addCase(fetchMissileLaunch.rejected, (state) => {
        state.missileLaunch = []
      })
      .addCase(fetchMissileLaunchList.fulfilled, (state, action) => {
        state.missileLaunch = action.payload.data
      })
      .addCase(fetchMissileLaunchListByArea.fulfilled, (state, action) => {
        state.missileLaunch = action.payload.data
      })
  },
})

export default missileLaunchSlice
