import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
interface InitialState {
  altFlag: number;
  workspaceIndex: number;
  workspaceLength: number;
}
const initialState: InitialState = {
  altFlag: 1,
  workspaceIndex: 0,
  workspaceLength: 9,
};
const counterSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    trueAlfFlag: (state) => {
      console.log("trueAltFlag");
      state.altFlag = 1;
    },
    falseAltFlag: (state) => {
      debugger;
      console.log("falseAlfFlag");
      state.altFlag = 0;
    },
    toggleAlfFlag: (state) => {
      if (state.altFlag) {
        state.altFlag = 0;
      } else {
        state.altFlag = 1;
      }
    },
    setWorkspaceIndex(state, action) {
      console.log(state.workspaceIndex,action);
      state.workspaceIndex = action.payload;
    },
    setWorkspaceLength(state, action) {
      state.workspaceLength = action.payload;
    },
  },
});
// 控制alt标志位
export const { trueAlfFlag, falseAltFlag, toggleAlfFlag } = counterSlice.actions;
export const { setWorkspaceIndex, setWorkspaceLength } = counterSlice.actions;
export const selectAlfFlag = (state: RootState) => state.global.altFlag;

export default counterSlice.reducer;
