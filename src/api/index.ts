import { useDispatch } from "react-redux";

export const init = () => {
  return new Promise((res) => {
    res({
      workspace: "1",
      id: 0,
      big: 1,
      zIndex: 1,
    });
  });
};
