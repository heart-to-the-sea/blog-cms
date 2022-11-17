import { registerMicroApps, start } from "qiankun";
import React, { useEffect } from "react";
import { init } from "./api";
import "./App.less";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import WorkspaceDesktop from "./desktop/workspaceDesktop/WorkspaceDesktop";
import useQiankun from "./plugins/qiankun/useQianKun";
import useIcons from "./plugins/useIcons";
import { AppDispatch } from "./store";
import { add } from "./store/container/container";
import { toggleAlfFlag } from "./store/global/global";
import useInit from "./useInit";
import { useAppDispatch } from "./utils/hooks";
import Workspace from "./workspaces/Workspace";


function App() {
  useIcons();
  useQiankun();
  useInit()
  const dispatch = useAppDispatch();
  useEffect(() => {
    let time;
    clearTimeout(time);
    time = setTimeout(() => {
      console.log("time");
      window.onkeydown = (e: KeyboardEvent) => {
        if (e.altKey) {
          console.log("keydown123", e.altKey);
          dispatch(toggleAlfFlag());
          return false;
        }
      };
    });
  }, []);
  return (
    <div className="base-desktop">
      <TopBar />
      <Workspace>
        <WorkspaceDesktop workspaceId = {0} />
        <WorkspaceDesktop workspaceId = {1} />
        <WorkspaceDesktop workspaceId = {2} />
      </Workspace>
      <Navbar />
    </div>
  );
}
export default App;
