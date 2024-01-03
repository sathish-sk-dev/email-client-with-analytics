import { IPieChartData } from "../interfaces/IPieChartData";
import { IBar } from "../../../components/stacked-bar-chart/interfaces/IBar";
import { KeyValueData } from "../../../types/KeyValueData";

export type UseAnalyticsHooks = {
  emailCountChartData: IPieChartData[];
  emailCountColors: string[];
  emailDistributionDataKey: string;
  emailDistributionBarData: IBar[];
  emailDistributionColors: KeyValueData[];
};
