import { AreaChartSlot } from "./enums/AreaChartSlot";
import { UseAreaChartProps } from "./types/UseAreaChartProps";
import { UseAreaChartHooks } from "./types/UseAreaChartHooks";
import { useCallback } from "react";
import {
  defaultAreaChartOptions,
  monthShortNames,
  weekDaysShortNames,
} from "./utils/AreaChartUtils";

const useAreChart = ({
  slot,
  colors,
}: UseAreaChartProps): UseAreaChartHooks => {
  const getTickAmount = useCallback(
    () => (slot === AreaChartSlot.MONTH ? 11 : 7),
    [slot],
  );

  const getCategories = useCallback(
    () => (slot === AreaChartSlot.MONTH ? monthShortNames : weekDaysShortNames),
    [slot],
  );

  const getAreaChartOptions = useCallback(
    () => ({
      ...defaultAreaChartOptions,
      colors,
      xaxis: {
        categories: getCategories(),
        axisBorder: {
          show: true,
        },
        tickAmount: getTickAmount(),
      },
    }),
    [colors, getCategories, getTickAmount],
  );

  return {
    // @ts-ignore
    areaChartOptions: getAreaChartOptions(),
  };
};

export default useAreChart;
