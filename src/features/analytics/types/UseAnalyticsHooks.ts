import { IPieChartData } from "../interfaces/IPieChartData";
import { IBar } from "../../../components/stacked-bar-chart/interfaces/IBar";
import { KeyValueData } from "../../../types/KeyValueData";
import { IDashboardItem } from "../interfaces/IDashboardItem";

export type UseAnalyticsHooks = {
  emailCountChartData: IPieChartData[];
  emailCountColors: string[];
  emailDistributionDataKey: string;
  emailDistributionBarData: IBar[];
  emailDistributionColors: KeyValueData[];
  dashboardItems: IDashboardItem[];
};
