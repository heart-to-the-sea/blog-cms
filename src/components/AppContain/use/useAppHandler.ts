import { RefObject, useEffect, useState } from "react";
function handleResetZIndex (dom:HTMLElement) {
  console.log(Math.max(...Array.from(dom.children as unknown as HTMLDivElement[]).map(item => Number(item.style.zIndex || 0))))
  return Math.max(...Array.from(dom.children as unknown as HTMLDivElement[]).map(item => Number(item.style.zIndex || 0)))+1
}
export default function useAppHandler(appContainTopBar: RefObject<HTMLDivElement>) {
  const [left, setLeft] = useState(100);
  const [top, setTop] = useState(100);
  let pageX = 0, pageY = 0
  // const handleMouseLeave = (e:MouseEvent) => {
  //   console.log('leave')
  //   const target = e.target as HTMLDivElement
  //   if (!target) return
  //   target.style.zIndex = '1'
  // }
  const handleClick = (e:MouseEvent) => {
    const target = e.target as HTMLDivElement
    if (!target.parentElement)  return
      handleResetZIndex(target.parentElement )
      if (!target) return
      target.style.zIndex = handleResetZIndex(target.parentElement ).toString()
  }
  const handleMouseDown = (e: MouseEvent) => {
    const dom = e.target as HTMLDivElement;
    if (!dom.parentElement)  return
    if (!dom) return;
    if (dom.parentElement.parentElement) {
      const parent = dom.parentElement.parentElement
      dom.parentElement.style.zIndex = handleResetZIndex(parent).toString()
    }
    pageX = e.offsetX
    pageY = e.offsetY
    window.onmousemove = handleMouseMove;
  };
  const handleMouseUp = (e: MouseEvent) => {
    window.onmousemove = null;
  };
  const handleMouseMove = (e: MouseEvent) => {
    const dom = e.target as HTMLDivElement;
    if (!dom) return;
    let x = e.pageX - pageX
    let y = e.pageY - pageY
    if (x<0) {
      x = 0
    }
    if (y<0) {
      y = 0
    }
    if (x>window.innerWidth) {
      x=window.innerWidth - 10
    }
    if (y>window.innerHeight) {
      y=window.innerHeight - 10
    }
    setLeft(x);
    setTop(y);
  };

  useEffect(() => {
    if (!appContainTopBar.current) return;
    const dom = appContainTopBar.current;
    const parent = appContainTopBar.current?.parentElement
    dom.onmousedown = handleMouseDown;
    window.onmouseup = handleMouseUp;
    if (!parent) return
    // parent.onmouseleave = handleMouseLeave
    parent.onclick = handleClick
    
  });
  return {
    left,
    top,
  };
}
