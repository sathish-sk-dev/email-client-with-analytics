import { useCallback, useEffect, useState } from "react";
import { IAreaChartData } from "../../../../components/area-chart/interfaces/IAreaChartData";
import { AreaChartSlot } from "../../../../components/area-chart/enums/AreaChartSlot";
import { UseCountAnalyticsProps } from "../../types/UseCountAnalyticsProps";
import { getThemeColor } from "../../../../utils/themeUtils";
import { ButtonVariant } from "../../../../components/button/ButtonVariant";

const useMailCountAnalytics = (): UseCountAnalyticsProps => {
  const [chartData, setChartData] = useState<IAreaChartData[]>([]);
  const [slot, setSlot] = useState(AreaChartSlot.WEEK);

  useEffect(() => {
    const isMonth = slot === AreaChartSlot.MONTH;
    setChartData([
      {
        name: "Send",
        data: isMonth
          ? [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
          : [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "Inbox",
        data: isMonth
          ? [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
          : [11, 32, 45, 32, 34, 52, 41],
      },
    ]);
  }, [slot]);

  const getColors = useCallback(() => {
    const sendColor = getThemeColor("--send-color");
    const inboxColor = getThemeColor("--inbox-color");
    return [sendColor, inboxColor];
  }, []);

  const onClickMonth = () => setSlot(AreaChartSlot.MONTH);

  const onClickWeek = () => setSlot(AreaChartSlot.WEEK);

  const weekButtonVariant = useCallback(
    () =>
      slot === AreaChartSlot.WEEK
        ? ButtonVariant.OUTLINED
        : ButtonVariant.PLAIN,
    [slot],
  );

  const monthButtonVariant = useCallback(
    () =>
      slot === AreaChartSlot.MONTH
        ? ButtonVariant.OUTLINED
        : ButtonVariant.PLAIN,
    [slot],
  );

  return {
    slot,
    onClickWeek,
    onClickMonth,
    chartData,
    colors: getColors(),
    weekButtonVariant: weekButtonVariant(),
    monthButtonVariant: monthButtonVariant(),
  };
};

export default useMailCountAnalytics;
