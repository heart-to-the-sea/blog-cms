import AppContain from "../../components/AppContain/AppContain";
import { useAppSelector } from "../../utils/hooks";
import WorkSpaceContainer from "../../workspaces/WorkSpaceContainer";
import "./style/index.less";
interface Props {
  workspaceId: number;
}
export default function WorkspaceDesktop(props: Props) {
  const altFlag = useAppSelector((state) => state.global.altFlag);
  const container = useAppSelector((state) => state.container.appContainer);

  return (
    <>
      <WorkSpaceContainer>
        <div id="we-come-desktop" className={["we-come-desktop", altFlag ? "" : "desktop"].join(" ")}>
          {container.filter(item => Number(item.workspace) === props.workspaceId).map((item) => {
            return <AppContain appObj={item} id={item.id} key={item.id} workspaceId={item.workspace}/>;
          })}
        </div>
      </WorkSpaceContainer>
    </>
  );
}
