import { ReactElement, ReactNode, ReactPropTypes, useEffect, useRef } from "react";
import { useAppSelector } from "../utils/hooks";
interface Props {
  children: ReactElement<HTMLDivElement>[] | ReactElement;
}
// 真正的盒子容器
export default function WorkSpaceContainer(props: Props) {
  const altFlag = useAppSelector((state) => state.global.altFlag);
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!altFlag) {
      console.log(props.children);
      const childrens = container.current?.querySelectorAll<HTMLDivElement>(".app-contain");
      childrens?.forEach(item=>{
        item.style.position = 'relative'
      })
    } else {
      console.log(props.children);
      const childrens = container.current?.querySelectorAll<HTMLDivElement>(".app-contain");
      childrens?.forEach(item=>{
        item.style.position = ''
      })
    }
  }, [altFlag]);
  return (
    <>
      <div className="workspace-node">
        <div className="container" ref={container}>
          {props.children}
        </div>
      </div>
    </>
  );
}
