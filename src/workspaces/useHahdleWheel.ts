import { Dispatch, RefObject, SetStateAction, useEffect, useState } from "react";

export default function useHandleWheel(
  altFlag: number,
  workspaceContainer: RefObject<HTMLDivElement>,
  workspaceIndex: number,
  setWorkspaceIndex: Dispatch<SetStateAction<number>>
) {
  const [style, setStyle] = useState({ height: "" });
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
    const workspaces = workspaceContainer.current?.children as unknown as HTMLDivElement[];
    if (!workspaces?.length || !workspaceContainer.current) return;

    if (e.deltaY > 0) {
      index++;
    } else {
      index--;
    }
    if (index >= 9) {
      index = 9 - 1;
    }
    if (index < 0) {
      index = 0;
    }
    console.log(index)
    setWorkspaceIndex(index);
    console.log(workspaces[index].offsetLeft);
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
