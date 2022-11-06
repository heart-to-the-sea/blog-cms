import React from "react";
import "./App.less";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/TopBar/TopBar";
import useIcons from "./plugins/useIcons";
import Workspace from "./workspaces/Workspace";

function App() {
  useIcons();
  return (
    <div className="base-desktop">
      <TopBar />
      <Workspace />
      <Navbar />
    </div>
  );
}
export default App;
