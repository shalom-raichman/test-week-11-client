import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { MissileLaunch } from '../types/models/missileLaunch.model'

interface missileLaunchState {
  missileLaunch: MissileLaunch[]
}

const initialState: missileLaunchState = {
  missileLaunch: [],
}

export const fetchMissileLaunch = createAsyncThunk(
  'missileLaunch/getList',
  async (_, thunkApi) => {
    try {
      const res = await fetch('http://localhost:1414/api/missileLaunch', {
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
