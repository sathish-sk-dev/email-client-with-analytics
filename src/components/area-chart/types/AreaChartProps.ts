import { IAreaChartData } from "../interfaces/IAreaChartData";
import { AreaChartSlot } from "../enums/AreaChartSlot";

export type AreaChartProps = {
  data: IAreaChartData[];
  slot: AreaChartSlot;
  colors: string[]
};
