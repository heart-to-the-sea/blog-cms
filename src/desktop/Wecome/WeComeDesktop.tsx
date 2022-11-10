import AppContain from "../../components/AppContain/AppContain";
import { useAppSelector } from "../../utils/hooks";
import WorkSpaceContainer from "../../workspaces/WorkSpaceContainer";
import './style/index.less'
export default function WeComeDesktop(){
  const altFlag = useAppSelector(state=>state.global.altFlag)
  return<>
    <WorkSpaceContainer>
      <div id="we-come-desktop" className={['we-come-desktop', altFlag?'':'desktop'].join(' ')}>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
        <AppContain/>
      </div>
    </WorkSpaceContainer>
  </>
}