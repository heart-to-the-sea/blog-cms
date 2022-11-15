import { createSlice } from "@reduxjs/toolkit";
export interface IAppContainer {
  workspace: string;
  appName?: string;
  big: 0 | 1;
  id: string | number;
}
interface InitialState {
  appContainer: IAppContainer[];
}
const initialState: InitialState = {
  appContainer: [
  ],
};
const counterSlice = createSlice({
  name: "container",
  initialState,
  reducers: {
    removeById(state: InitialState, prop) {
      const index = state.appContainer.findIndex((item) => item.id === prop.payload);
      console.log(index);
      if (-1 !== index) {
        state.appContainer.splice(index, 1);
      }
    },
    big1ById(state: InitialState, prop) {
      const obj = state.appContainer.find((item) => item.id === prop.payload);
      if (obj) {
        obj.big = 1;
      }
    },
    big0ById(state: InitialState, prop) {
      const obj = state.appContainer.find((item) => item.id === prop.payload);
      if (obj) {
        obj.big = 1;
      }
    },
    toggleBigById(state: InitialState, prop) {
      const obj = state.appContainer.find((item) => item.id === prop.payload);
      if (obj) {
        obj.big = obj.big ? 0 : 1;
      }
    },
    add(state:InitialState,prop) {
      const obj = state.appContainer.find((item) => item.id === prop.payload.id && prop.payload.workspace === item.workspace);
      if (!obj) {
        state.appContainer.push(prop.payload)
      }
    }
  },
});
// 控制alt标志位
export const { removeById, toggleBigById, add } = counterSlice.actions;

export default counterSlice.reducer;
