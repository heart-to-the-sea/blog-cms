import { ReactComponentElement, ReactNode, useEffect, useRef, useState } from "react";
import { setWorkspaceIndex, setWorkspaceLength } from "../store/global/global";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import "./style/index.less";
import useAltKeyWorkspace from "./useAltKeyWorkspace";
import useHandleWheel from "./useHahdleWheel";

interface Props {
  children: ReactNode[] | ReactNode;
}

export default function Workspace(props: Props) {
  const altFlag = useAppSelector((state) => state.global.altFlag);
  const dispatch = useAppDispatch();
  const [workspaceIndex, setStateWorkspaceIndex] = useState(0);
  const workspaceContainer = useRef<HTMLDivElement>(null);

  const { style } = useHandleWheel(altFlag, workspaceContainer, workspaceIndex, setStateWorkspaceIndex);
  useAltKeyWorkspace(altFlag, workspaceContainer, workspaceIndex, setStateWorkspaceIndex);
  useEffect(() => {
    dispatch(setWorkspaceIndex(workspaceIndex));
    const workspaces = workspaceContainer.current?.children as unknown as HTMLDivElement[];
    dispatch(setWorkspaceLength(workspaces?.length || 0));
  }, [workspaceIndex]);
  return (
    <div className="workspace">
      <div className="workspace-container" style={style} ref={workspaceContainer}>
        {
          // 默认为9个窗口页面
          props.children
        }
      </div>
    </div>
  );
}
