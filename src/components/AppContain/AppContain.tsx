import { ReactNode, useRef } from "react";
import TopBarRight from "./components/TopBar/TopBarRight";
import "./style/index.less";
import useAppHandler from "./use/useAppHandler";
interface Props {
  children?: ReactNode | ReactNode[];
}
export default function AppContain(props: Props) {
  const container = useRef<HTMLDivElement>(null)
  const appContainTopBar = useRef<HTMLDivElement>(null);
  const { top, left } = useAppHandler(appContainTopBar);
  return (
    <div className="app-contain" style={{ top, left }} ref={container}>
      <div className="top-bar" ref={appContainTopBar}>
        <TopBarRight parent={container}/>
      </div>
      <div className="contain-main">{props.children}</div>
    </div>
  );
}
