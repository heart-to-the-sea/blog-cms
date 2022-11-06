import { createSlice } from "@reduxjs/toolkit";
import { AppThunk, RootState } from ".";

interface GlobalState {
  altFlag: number;
}

const initialState: GlobalState = {
  altFlag: 0,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    incurrent: state => {
      state.altFlag = 1
    }
  }
});

export const { incurrent } = globalSlice.actions

export const incurrentAsync = (amount: number): AppThunk => dispatch => {
  setTimeout(() => {
    dispatch(incurrentAsync(amount))
  })
}

export const selectCount = (state: RootState) => state.globals.altFlag

export default globalSlice.reducer