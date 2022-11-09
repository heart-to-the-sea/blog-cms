import { MouseEventHandler, useEffect, useRef } from "react";
import { setWorkspaceIndex } from "../../../store/global/global";
import { useAppDispatch, useAppSelector } from "../../../utils/hooks";

const generatorBar = (length: number, call: (index: number) => MouseEventHandler<HTMLDivElement>) => {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(<div className="work-node" onClick={call(i)}></div>);
  }
  return arr;
};

export default function WorkBar() {
  const workspaceIndex = useAppSelector((state) => state.global.workspaceIndex);
  const workspaceLength = useAppSelector((state) => state.global.workspaceLength);
  const activeNode = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const workBar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!activeNode.current) return;
    const children = workBar.current?.children as unknown as HTMLDivElement[];
    if (children && workspaceIndex >= children.length) return;
    const left = children[workspaceIndex].offsetLeft
    // children[workspaceIndex].ap
    activeNode.current.style.left = `${left-3}px`
  }, [workspaceIndex]);
  const handleClick = (index: number) => {
    return (e: any) => {
      console.log(index);
      // dispatch(setWorkspaceIndex(index));
    };
  };
  return (
    <div id="work-bar" ref={workBar}>
      {generatorBar(workspaceLength,  handleClick)}
      <div className="work-node-active work-node" ref={activeNode}></div>
    </div>
  );
}
