import { configureStore } from '@reduxjs/toolkit'
import global from './global/global'

const store = configureStore({
  reducer: {
    global: global
  }
})

// state类型
export type RootState = ReturnType<typeof store.getState>
// 操作
export type AppDispatch = typeof store.dispatch

export default store