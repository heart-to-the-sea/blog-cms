import { ReactNode, useRef } from "react";
import { IAppContainer } from "../../store/container/container";
import { useAppSelector } from "../../utils/hooks";
import TopBarRight from "./components/TopBar/TopBarRight";
import "./style/index.less";
import useAppHandler from "./use/useAppHandler";
interface Props {
  id?: string | number;
  appObj: IAppContainer;
  children?: ReactNode | ReactNode[];
  workspaceId?: string | number;
}
export default function AppContain(props: Props) {
  const container = useRef<HTMLDivElement>(null);
  const altFlag = useAppSelector((state) => state.global.altFlag);
  const appContainTopBar = useRef<HTMLDivElement>(null);
  const { top, left } = useAppHandler(appContainTopBar);
  return (
    <div
      className={["app-contain", props.appObj.big ? "app-contain-big" : ""].join(" ")}
      style={{ top, left }}
      ref={container}
    >
      <div className="top-bar" ref={appContainTopBar}>
        {props.appObj.appName}
        <TopBarRight id={props.id} key={props.id} />
      </div>
      <div className="contain-main" id={"contain-" + props.workspaceId + "-" + props.id}>
        {props.children}
      </div>
      {altFlag ? "" : <div className="main-icon">{props.appObj.appName || "-"}</div>}
    </div>
  );
}
