import { createSlice } from "@reduxjs/toolkit";
export interface IAppContainer {
  workspace: string | number;
  appName?: string;
  big: 0 | 1;
  // 唯一标识
  id: string | number;
  width?: string;
  height?: string;
  zIndex: 1;
}
interface InitialState {
  appContainer: IAppContainer[];
}
const initialState: InitialState = {
  appContainer: [],
};
const counterSlice = createSlice({
  name: "container",
  initialState,
  reducers: {
    removeById(state: InitialState, prop) {
      const index = state.appContainer.findIndex(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      console.log(index);
      if (-1 !== index) {
        state.appContainer.splice(index, 1);
      }
    },
    big1ById(state: InitialState, prop) {
      const obj = state.appContainer.find(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      if (obj) {
        obj.big = 1;
      }
    },
    big0ById(state: InitialState, prop) {
      const obj = state.appContainer.find(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      if (obj) {
        obj.big = 1;
      }
    },
    setObjByIdAndWorkspaceId(state: InitialState, prop) {
      const obj = state.appContainer.find(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      if (obj) {
        obj.big = prop.payload.big;
        obj.height = prop.payload.height;
        obj.id = prop.payload.id;
        obj.width = prop.payload.width;
        obj.workspace = prop.payload.workspace;
        obj.zIndex = prop.payload.zIndex;
      }
    },
    toggleBigById(state: InitialState, prop) {
      console.log(prop);
      const obj = state.appContainer.find(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      if (obj) {
        obj.big = obj.big ? 0 : 1;
      }
    },
    add(state: InitialState, prop: { payload: IAppContainer; type: string }) {
      const obj = state.appContainer.find(
        (item) => item.id === prop.payload.id && prop.payload.workspace === item.workspace
      );
      if (!obj) {
        state.appContainer.push(prop.payload);
      }
    },
  },
});
// 控制alt标志位
export const { removeById, toggleBigById, add, setObjByIdAndWorkspaceId } = counterSlice.actions;

export default counterSlice.reducer;
