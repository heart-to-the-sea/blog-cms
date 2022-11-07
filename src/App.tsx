import React, { useEffect } from "react";
import "./App.less";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import useIcons from "./plugins/useIcons";
import { toggleAlfFlag } from "./store/global/global";
import { useAppDispatch } from "./utils/hooks";
import Workspace from "./workspaces/Workspace";

function App() {
  useIcons();
  const dispatch = useAppDispatch();
  useEffect(() => {
    window.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.altKey) {
        console.log("keydown");
        dispatch(toggleAlfFlag());
      }
    });
  }, []);
  return (
    <div className="base-desktop">
      <TopBar />
      <Workspace />
      <Navbar />
    </div>
  );
}
export default App;
