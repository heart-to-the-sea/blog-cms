import * as charts from "echarts";
import { useEffect, useRef } from "react";
const getConfig = (arr: number[]) => {
  return {
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: arr,
    },
    yAxis: {
      type: "value",
      show: false,
      boundaryGap: [0, "100%"],
    },
    series: [
      {
        name: "Fake Data",
        type: "line",
        symbol: "none",
        sampling: "lttb",
        itemStyle: {
          color: "rgb(255, 70, 131)",
        },
        areaStyle: {
          color: new charts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 158, 68)",
            },
            {
              offset: 1,
              color: "rgb(255, 70, 131)",
            },
          ]),
        },
        data: arr,
      },
    ],
  };
};
export default function PerformanceBar() {
  const performanceDom = useRef<any>();
  let chart: charts.ECharts;
  useEffect(() => {
    if (!performanceDom.current) {
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    if (!chart) chart = charts.init(performanceDom.current);
    const arr: number[] = [];
    setInterval(() => {
      if (arr.length >= 10000) {
        arr.splice(0, 1);
      }
      arr.push(
        //@ts-ignore
        Number((performance.memory.usedJSHeapSize / (1024 * 1024)).toFixed(2))
      );
      chart.setOption(getConfig(arr));
    }, 0);
  }, []);
  return (
    <>
      <div id="performance" ref={performanceDom}></div>
    </>
  );
}
