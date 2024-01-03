import { IBar } from "../../../components/stacked-bar-chart/interfaces/IBar";
import {KeyValueData} from "../../../types/KeyValueData";

export type MailDistributionProps = {
  bars: IBar[];
  dataKey: string;
  colors: KeyValueData[];
};
