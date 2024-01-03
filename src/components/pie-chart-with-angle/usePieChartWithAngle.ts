import { useCallback, useState } from "react";
import { UsePieChartWithAngleHooks } from "./types/UsePieChartWithAngleHooks";

export const usePieChartWithAngle = (): UsePieChartWithAngleHooks => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = useCallback(
    (_: any, index: number) => {
      setActiveIndex(index);
    },
    [setActiveIndex],
  );

  return {
    onPieEnter,
    activeIndex,
  };
};
