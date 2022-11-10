import { registerMicroApps, start } from "qiankun";
export default function useQiankun() {
  // 服务注册
  registerMicroApps([
    {
      name: "wecome",
      entry: "//localhost:5500",
      container: "#we-come-desktop",
      activeRule: "/app-react",
    },
  ]);
  start();
  return false;
}
