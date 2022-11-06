import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import globalSlice from './globalSlice'

const store = configureStore({
  reducer: {
    globals:globalSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void>=ThunkAction<ReturnType,RootState,unknown,Action<string>>