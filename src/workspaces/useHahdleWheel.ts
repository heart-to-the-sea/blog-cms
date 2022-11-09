import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";
import { setWorkspaceLength } from "../store/global/global";
import { useAppDispatch } from "../utils/hooks";

export default function useHandleWheel(
  altFlag: number,
  workspaceContainer: RefObject<HTMLDivElement>,
  workspaceIndex: number,
  setWorkspaceIndex: Dispatch<SetStateAction<number>>
) {
  const [style, setStyle] = useState({ height: "" });
  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(altFlag);
    if (altFlag) {
      setStyle({
        height: "80%",
      });
    } else {
      setStyle({
        height: "100%",
      });
    }
  }, [altFlag]);
  let left = 0;
  let index = workspaceIndex;
  const handleLeft = (e: WheelEvent) => {
    if(!e.altKey&&altFlag) return
    if(altFlag) return
    const workspaces = workspaceContainer.current?.children as unknown as HTMLDivElement[];
    if (!workspaces?.length || !workspaceContainer.current) return;
    dispatch(setWorkspaceLength(workspaces?.length || 0))
    if (e.deltaY > 0) {
      index++;
    } else {
      index--;
    }
    if (index >= workspaces?.length) {
      index = workspaces?.length - 1;
    }
    if (index < 0) {
      index = 0;
    }
    console.log(index)
    setWorkspaceIndex(index);
    left = -(workspaces[index].offsetLeft - window.innerWidth * 0.1);
    workspaceContainer.current.style.left = left + "px";
  };

  useEffect(() => {
    window.addEventListener("wheel", handleLeft, false);
    return () => {
      window.removeEventListener("wheel", handleLeft);
    };
  });
  return {
    style,
  };
}
