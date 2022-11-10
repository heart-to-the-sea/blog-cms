import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import Icon from "../Icon/Icon";
import IconMap from "../Icon/IconsMap";
import "./style/index.less";
/**
 * 操作时配合qiankun实现在指定的workspace中动态创建dom元素，进行元素创建
 * @returns 
 */
export default function Navbar() {
  const alfFlag = useAppSelector((state) => state.global.altFlag);
  const dispatch = useAppDispatch();
  const handleMore = () => {
    console.log('1312313')
  };
  return (
    <div id="list-center" style={{bottom: !alfFlag ? '' : '-50px'}}>
      <div id="list">
        <div className="node">
          <div className="before">123123</div>
        </div>
        <div className="node"></div>
        <div className="node"></div> <div className="node"></div>
        <div className="node"></div> <div className="node"></div>
        <div className="node"></div> <div className="node"></div>
        <div className="node"></div> <div className="node"></div>
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
    </div>
  );
}
