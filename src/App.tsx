import React, { useEffect } from "react";
import "./App.less";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import WeComeDesktop from "./desktop/Wecome/WeComeDesktop";
import useQiankun from "./plugins/qiankun/useQianKun";
import useIcons from "./plugins/useIcons";
import { toggleAlfFlag } from "./store/global/global";
import { useAppDispatch } from "./utils/hooks";
import Workspace from "./workspaces/Workspace";
import WorkSpaceContainer from "./workspaces/WorkSpaceContainer";

function App() {
  useIcons();
  useQiankun();
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
        <WeComeDesktop/>
        <WeComeDesktop/>
        <WeComeDesktop/>
      </Workspace>
      <Navbar />
    </div>
  );
}
export default App;
