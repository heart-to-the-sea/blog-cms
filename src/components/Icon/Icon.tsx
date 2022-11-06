import { useEffect, useState } from "react";
import Svg from "../../assets/icons/index.svg";
interface Props {
  name: string;
  style: Object;
}
export default function Icon(props: Props) {
  const [style, setStyle] = useState<Object>({});
  useEffect(() => {
    setStyle({
      ...props.style
    });
  }, [props]);
  return (
    <svg className="icon" aria-hidden="true" style={style}>
      <use xlinkHref={props.name}></use>
    </svg>
  );
}
