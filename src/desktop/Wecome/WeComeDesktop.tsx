import WorkSpaceContainer from "../../workspaces/WorkSpaceContainer";
import './style/index.less'
export default function WeComeDesktop(){
  return<>
    <WorkSpaceContainer>
      <div id="we-come-desktop" className="we-come-desktop">
        <header>
          <p className="we-come-title">欢迎关注我的博客页面</p>
        </header>
      </div>
    </WorkSpaceContainer>
  </>
}