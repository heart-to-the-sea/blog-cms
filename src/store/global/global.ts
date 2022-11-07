import { createSlice, configureStore } from '@reduxjs/toolkit'
import { RootState } from '..'
interface InitialState {
  altFlag: number
}
const initialState: InitialState = {
  altFlag: 1
}
const counterSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    trueAlfFlag: state => {
      console.log('trueAltFlag')
      state.altFlag = 1
    },
    falseAltFlag: state => {
      debugger
      console.log('falseAlfFlag')
      state.altFlag = 0
    },
    toggleAlfFlag: state => {
      if (state.altFlag) {
        state.altFlag = 0
      } else {
        state.altFlag = 1
      }
    }
  }
})

export const { trueAlfFlag, falseAltFlag, toggleAlfFlag } = counterSlice.actions
export const selectAlfFlag = (state: RootState) => state.global.altFlag


export default counterSlice.reducer