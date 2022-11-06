import { useEffect, useRef } from "react";
import "./style/index.less";
import PerformanceBar  from "./components/PerformanceBar";
import DateBar from "./components/DateBar";
export default function TopBar() {
  useEffect(()=>{
  },[])
  return (
    <div id="top">
      <PerformanceBar />
      <DateBar />
    </div>
  );
}
