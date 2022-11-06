import Icon from "../Icon/Icon";
import IconMap from "../Icon/IconsMap";
import "./style/index.less";

export default function Navbar() {
  return (
    <div id="list-center">
      <div id="list">
        <div className="node">
          <div className="before">123123</div>
        </div>
        <div className="node"></div>
        <div className="node"></div> <div className="node"></div>
        <div className="node"></div> <div className="node"></div>
        <div className="node"></div> <div className="node"></div>
        <div className="node"></div> <div className="node"></div>
        <div className="node node-more">
        <Icon name={IconMap.ZIYUANXHDPI} style={{width:"30px",height:"30px", fontWight:"800",fill:"#fff"}}/>
        </div>
      </div>
    </div>
  );
}
