import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

export default function useAltKeyWorkspace(
  altFlag: number,
  workspaceContainer: RefObject<HTMLDivElement>,
  workspaceIndex: number,
  setWorkspaceIndex: Dispatch<SetStateAction<number>>
) {
  useEffect(() => {
    console.log(workspaceContainer);
  });
  useEffect(() => {
    console.log("altflag", altFlag);
    if (!workspaceContainer.current) return;
    ((Array.from(workspaceContainer.current.children) || []) as unknown as HTMLDivElement[]).map((node) => {
      node?.classList.remove("workspace-node-active");
    });

    let node = workspaceContainer.current?.children[workspaceIndex];
    if (!altFlag) {
      workspaceContainer.current?.classList.remove("workspace-container-active");
      node?.classList.remove("workspace-node-active");
    } else {
      workspaceContainer.current?.classList.add("workspace-container-active");
      node?.classList.add("workspace-node-active");
    }
  }, [altFlag, workspaceContainer,workspaceIndex]);
  return {};
}
