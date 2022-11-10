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
  name: "container",
  initialState,
  reducers: {
    trueAlfFlag: (state) => {
      console.log("trueAltFlag");
      state.altFlag = 1;
    }
  },
});
// 控制alt标志位
export const { trueAlfFlag } = counterSlice.actions;
export const selectAlfFlag = (state: RootState) => state.global.altFlag;

export default counterSlice.reducer;
