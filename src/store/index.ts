import { configureStore } from '@reduxjs/toolkit'
import global from './global/global'
import container from './container/container'
const store = configureStore({
  reducer: {
    global: global,
    container
  }
})

// state类型
export type RootState = ReturnType<typeof store.getState>
// 操作
export type AppDispatch = typeof store.dispatch

export default store