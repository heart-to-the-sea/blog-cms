import { ReactNode, ReactPropTypes } from "react";
interface Props {
  children: ReactNode;
}
// 真正的盒子容器
export default function WorkSpaceContainer(props: Props) {
  return (
    <>
      <div className="workspace-node">
        <div className="container">{props.children}</div>
      </div>
    </>
  );
}
