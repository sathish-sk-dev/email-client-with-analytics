import { AreaChartSlot } from "../../../components/area-chart/enums/AreaChartSlot";
import { IAreaChartData } from "../../../components/area-chart/interfaces/IAreaChartData";
import { ButtonVariant } from "../../../components/button/ButtonVariant";

export type UseCountAnalyticsProps = {
  slot: AreaChartSlot;
  onClickWeek: () => void;
  onClickMonth: () => void;
  chartData: IAreaChartData[];
  colors: string[];
  weekButtonVariant: ButtonVariant;
  monthButtonVariant: ButtonVariant;
};
