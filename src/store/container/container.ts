import { createSlice } from "@reduxjs/toolkit";
export interface IAppContainer {
  workspace: string | number; //  工作区
  appName?: string; //            app名称
  big: 0 | 1; //                  是否最大化
  showTop?: 0 | 1; //             是否显示在第一层
  id: string | number; //         唯一标识
  width?: string; //              窗口宽度
  height?: string; //             窗口高度
  zIndex: 1; //                   窗口层级
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
    /**
     * 根据id删除窗口
     * @param state // 状态
     * @param prop  // 参数
     */
    removeById(state: InitialState, prop) {
      const index = state.appContainer.findIndex(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      console.log(index);
      if (-1 !== index) {
        state.appContainer.splice(index, 1);
      }
    },
    /**
     * 根据id最大化窗口
     * @param state 
     * @param prop 
     */
    big1ById(state: InitialState, prop) {
      const obj = state.appContainer.find(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      if (obj) {
        obj.big = 1;
      }
    },
    /**
     * 根据id取消最大化
     * @param state 
     * @param prop 
     */
    big0ById(state: InitialState, prop) {
      const obj = state.appContainer.find(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      if (obj) {
        obj.big = 1;
      }
    },
    /**
     * 根据id和工作区id设置窗口对象
     * @param state 
     * @param prop 
     */
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
    /**
     * 根据id切换最大化窗口
     * @param state 
     * @param prop 
     */
    toggleBigById(state: InitialState, prop) {
      console.log(prop);
      const obj = state.appContainer.find(
        (item) => item.id === prop.payload.id && item.workspace === prop.payload.workspace
      );
      if (obj) {
        obj.big = obj.big ? 0 : 1;
      }
    },
    /**
     * 添加一个app对象
     * @param state 
     * @param prop 
     */
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
