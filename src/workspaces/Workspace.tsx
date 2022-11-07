import { useEffect, useState } from "react";
import { useAppSelector } from "../utils/hooks";
import "./style/index.less";
export default function Workspace() {
  const altFlag = useAppSelector((state) => state.global.altFlag);
  const [style, setStyle] = useState({width: '', height: ''})
  // useEffect(()=>{
  //   console.log(altFlag)
  //   if (altFlag) {
  //     setStyle({
  //       width:'80%',
  //       height:'80%'
  //     })
  //   } else {
  //     setStyle({
  //       width:'100%',
  //       height:'100%'
  //     })
  //   }
  // },[altFlag])
  return (
    <div className="workspace">
      <div className="workspace-container" style={style}>
        <div className="workspace-node"></div>
      </div>
    </div>
  );
}
