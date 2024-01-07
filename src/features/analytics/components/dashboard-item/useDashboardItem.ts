import { DashboardItemProps } from "../../types/DashboardItemProps";
import { getThemeColor } from "../../../../utils/themeUtils";
import { IconType } from "../../../../assets/svg/types/IconType";

const useDashboardItem = ({ item }: DashboardItemProps) => {
  const { count, prevCount } = item;

  const percentageChange = () => {
    const percentage = Math.abs(((count - prevCount) / prevCount) * 100);
    return percentage.toFixed(1);
  };

  const countChange = Math.abs(count - prevCount);

  const isGain = count - prevCount >= 0;

  const prefixInfo = isGain ? "You made an extra" : "You incurred a loss of";

  const chipColor = isGain
    ? getThemeColor("--primary-color")
    : getThemeColor("--warning");

  const iconType = isGain ? IconType.GAIN : IconType.LOSS;

  return {
    percentageChange: percentageChange(),
    countChange,
    prefixInfo,
    chipColor,
    iconType,
  };
};

export default useDashboardItem;
