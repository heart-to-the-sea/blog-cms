import { RefObject, useEffect, useState } from "react";
import { IAppContainer, setObjByIdAndWorkspaceId } from "../../../store/container/container";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";
function handleResetZIndex(containers: IAppContainer[]) {
  console.log(Math.max(...containers.map((item) => item.zIndex)) + 1);
  return Math.max(...containers.map((item) => item.zIndex)) + 1;
}
/**
 * 处理应用插件窗口的放大，移动，关闭等操作
 * @param appContainTopBar 
 * @param appObj 
 * @returns 
 */
export default function useAppHandler(appContainTopBar: RefObject<HTMLDivElement>, appObj: IAppContainer) {
  const dispatch = useAppDispatch();
  const altFlag = useAppSelector(state => state.global.altFlag)
  const containers = useAppSelector((state) => state.container.appContainer);
  const [left, setLeft] = useState(100);
  const [top, setTop] = useState(100);
  let pageX = 0,
    pageY = 0;
  const handleClick = (e: MouseEvent) => {
    dispatch(
      setObjByIdAndWorkspaceId({
        ...appObj,
        zIndex: handleResetZIndex(containers).toString(),
      })
    );
  };
  const handleMouseDown = (e: MouseEvent) => {
    dispatch(
      setObjByIdAndWorkspaceId({
        ...appObj,
        zIndex: handleResetZIndex(containers).toString(),
      })
    );

    pageX = e.offsetX;
    pageY = e.offsetY;
    window.onmousemove = handleMouseMove;
  };
  const handleMouseUp = (e: MouseEvent) => {
    window.onmousemove = null;
  };
  const handleMouseMove = (e: MouseEvent) => {
    const dom = e.target as HTMLDivElement;
    if (!dom) return;
    let x = e.pageX - pageX;
    let y = e.pageY - pageY;
    if (x < 0) {
      x = 0;
    }
    if (y < 0) {
      y = 0;
    }
    if (x > window.innerWidth) {
      x = window.innerWidth - 10;
    }
    if (y > window.innerHeight) {
      y = window.innerHeight - 10;
    }
    setLeft(x);
    setTop(y);
  };

  useEffect(() => {
    if (!appContainTopBar.current) return;
    const dom = appContainTopBar.current;
    const parent = appContainTopBar.current?.parentElement;
    dom.onmousedown = handleMouseDown;
    window.onmouseup = handleMouseUp;
    if (!parent) return;
    // parent.onmouseleave = handleMouseLeave
    parent.onclick = handleClick;
  });
  return {
    left,
    top,
  };
}
function falseAlfFlag(): any {
  throw new Error("Function not implemented.");
}

