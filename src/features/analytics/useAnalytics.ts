import { UseAnalyticsHooks } from "./types/UseAnalyticsHooks";
import { useCallback } from "react";
import {
  constructEmailCountFromMailList,
  constructEmailCountPieChartData,
  getEmailCountColors,
} from "./utils/analyticsUtils";
import { IMailListState } from "../../redux-toolkit/interfaces/IMailListState";
import { useAppSelector } from "../../redux-toolkit/hooks/hooks";

export const useAnalytics = (): UseAnalyticsHooks => {
  const { mailList }: IMailListState = useAppSelector(
    (state) => state.mailListState,
  );

  const emailCountChartData = useCallback(() => {
    const emailCount = constructEmailCountFromMailList(mailList);
    return constructEmailCountPieChartData(emailCount);
  }, [mailList]);

  const emailCountColors = useCallback(() => {
    return getEmailCountColors();
  }, []);

  return {
    emailCountChartData: emailCountChartData(),
    emailCountColors: emailCountColors(),
  };
};
