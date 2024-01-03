import { useCallback, useState } from "react";
import { UsePieChartWithAngleProps } from "./types/UsePieChartWithAngleProps";

export const usePieChartWithAngle = (): UsePieChartWithAngleProps => {
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
