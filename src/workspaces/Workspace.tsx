import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "../utils/hooks";
import "./style/index.less";
import useAltKeyWorkspace from "./useAltKeyWorkspace";
import useHandleWheel from "./useHahdleWheel";
export default function Workspace() {
  const altFlag = useAppSelector((state) => state.global.altFlag);
  const [workspaceIndex, setWorkspaceIndex] = useState(0);
  const workspaceContainer = useRef<HTMLDivElement>(null);

  const { style } = useHandleWheel(
    altFlag,
    workspaceContainer,
    workspaceIndex,
    setWorkspaceIndex
  );
  useAltKeyWorkspace(
    altFlag,
    workspaceContainer,
    workspaceIndex,
    setWorkspaceIndex
  );
  return (
    <div className="workspace">
      <div
        className="workspace-container"
        style={style}
        ref={workspaceContainer}
      >
        {
          [1,2,3,4,5,6,7,8,9].map(item=>{
            return <div className="workspace-node" key={item+'123123'}>
            <div className="container">{item}</div>
          </div>
          })
        }
      </div>
    </div>
  );
}
