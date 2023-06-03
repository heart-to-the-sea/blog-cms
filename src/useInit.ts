import { init } from "./api";
import { registerMicroApps, start } from "qiankun";
import { useEffect } from "react";
import { add } from "./store/container/container";
import { useAppDispatch } from "./utils/hooks";

export default function useInit() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(async () => {
      const data = await init();
      // 添加一个App窗口
      // dispatch(
      //   add({
      //     workspace: 0,
      //     id: -1,
      //     big: 1,
      //     showTop: 0,
      //     zIndex: 1,
      //   })
      // );
      // 注册一个App
      // setTimeout(() => {
      //   registerMicroApps([
      //     {
      //       name: "wecome-" + 0 + "--" + 1,
      //       entry: "//localhost:5173",
      //       container: "#contain-" + 0 + "--" + 1,
      //       activeRule: "",
      //     },
      //   ]);
      //   start();
      // });
    });
  });
}
