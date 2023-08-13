import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Icon from "../Icon/Icon";
import IconMap from "../Icon/IconsMap";
import "./style/index.less";
import { HashRouter, Link } from "react-router-dom";
import { registerMicroApps, start } from "qiankun";
import { add } from "../../store/container/container";
/**
 * 操作时配合qiankun实现在指定的workspace中动态创建dom元素，进行元素创建
 * @returns
 */
export default function Navbar() {
  const alfFlag = useAppSelector((state) => state.global.altFlag);
  const workspaceIndex = useAppSelector((state) => state.global.workspaceIndex);
  // const appContainer = useAppSelector((state) => state.container.appContainer);
  const dispatch = useAppDispatch();
  const handleMore = () => {};
  const handleOpen = (i: number) => () => {
    dispatch(
      add({
        workspace: workspaceIndex,
        appName: 'name+' + i,
        id: i,
        big: 0,
        showTop: 1,
        zIndex: 1
      })
    );
    setTimeout(() => {
      registerMicroApps([
        {
          name: "wecome-" + workspaceIndex+ '-' +i,
          entry: "http://www.baidu.com",
          container: "#contain-" + workspaceIndex +'-'+i,
          activeRule: "#/app-react-"+ workspaceIndex +'-'+ i,
        },
      ]);
      start();
    });
  };
  return (
    <div id="list-center" style={{ bottom: !alfFlag ? "" : "-50px" }}>
      <HashRouter>
        <div id="list">
          <Link to={`/app-react-${workspaceIndex}-0`} onClick={handleOpen(0)}>
            <div className="node"></div>
          </Link>
          <Link to={`/app-react-${workspaceIndex}-1`} onClick={handleOpen(1)}>
            <div className="node"></div>
          </Link>
          <div className="node node-more" onClick={handleMore}>
            <Icon
              name={IconMap.ZIYUANXHDPI}
              style={{
                width: "30px",
                height: "30px",
                fontWight: "800",
                fill: "#fff",
              }}
            />
          </div>
        </div>
      </HashRouter>
    </div>
  );
}
