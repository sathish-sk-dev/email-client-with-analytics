import { IBar } from "../interfaces/IBar";
import { KeyValueData } from "../../../types/KeyValueData";

export type StackedBarChartProps = {
  dataKey: string;
  bars: IBar[];
  colors: KeyValueData[];
};
