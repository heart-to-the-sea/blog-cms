import moment from "moment";
import { useEffect,  useState } from "react";
export default function DateBar() {
  const [dateStr, setDateStr] = useState<string>();
  useEffect(() => {
    setInterval(() => {
      let str = moment().format("YYYY年MM月DD日 HH:mm:ss");
      setDateStr(str)
    }, 100);
  }, []);
  return (
    <>
      <div id="date">{dateStr}</div>
    </>
  );
}
