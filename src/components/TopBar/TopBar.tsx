import { useEffect, useRef } from "react";
import "./style/index.less";
import PerformanceBar  from "./components/PerformanceBar";
import DateBar from "./components/DateBar";
import { useAppSelector } from "../../utils/hooks";
export default function TopBar() {

  const altFlag = useAppSelector((state) => state.global.altFlag);
  useEffect(()=>{
  },[])
  return (
    <div id="top" style={{top: altFlag ? '': '-50px'}}>
      <PerformanceBar />
      <DateBar />
    </div>
  );
}
