import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import userSlice from './userSlice'
import missileLaunchSlice from './missileSlice'

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    missileLaunch: missileLaunchSlice.reducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default store