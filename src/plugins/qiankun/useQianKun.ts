import { registerMicroApps, start } from "qiankun";
export default function useQiankun() {
  registerMicroApps([
    {
      name: "wecome",
      entry: "//localhost:5501",
      container: "#we-come-desktop",
      activeRule: "/app-react",
    },
  ]);
  start();
  return false;
}
