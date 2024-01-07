import { UseAnalyticsHooks } from "./types/UseAnalyticsHooks";
import { useCallback } from "react";
import {
  constructEmailCountFromMailList,
  constructEmailCountPieChartData,
  getDashboardItems,
  getEmailCountColors,
  getEmailDistributionColors,
} from "./utils/analyticsUtils";
import { IMailListState } from "../../redux-toolkit/interfaces/IMailListState";
import { useAppSelector } from "../../redux-toolkit/hooks/hooks";

export const useAnalytics = (): UseAnalyticsHooks => {
  const { mailList }: IMailListState = useAppSelector(
    (state) => state.mailListState,
  );

  const emailCountData = useCallback(() => {
    return constructEmailCountFromMailList(mailList);
  }, [mailList]);

  const emailCountChartData = useCallback(() => {
    const emailCount = emailCountData();
    return constructEmailCountPieChartData(emailCount);
  }, [emailCountData]);

  const emailCountColors = useCallback(() => {
    return getEmailCountColors();
  }, []);

  const emailDistributionBarData = useCallback(() => {
    return [
      {
        name: "Sun",
        inbox: 60,
        send: 20,
        deleted: 10,
        spam: 10,
      },
      {
        name: "Mon",
        inbox: 50,
        send: 30,
        deleted: 5,
        spam: 5,
      },
      {
        name: "Tue",
        inbox: 30,
        send: 20,
        deleted: 10,
        spam: 10,
      },
      {
        name: "Wed",
        inbox: 60,
        send: 20,
        deleted: 10,
        spam: 10,
      },
      {
        name: "Thu",
        inbox: 50,
        send: 30,
        deleted: 5,
        spam: 5,
      },
      {
        name: "Fri",
        inbox: 30,
        send: 20,
        deleted: 10,
        spam: 10,
      },
      {
        name: "Sat",
        inbox: 60,
        send: 20,
        deleted: 10,
        spam: 10,
      },
    ];
  }, []);

  const emailDistributionColors = useCallback(() => {
    return getEmailDistributionColors();
  }, []);

  const dashboardItems = useCallback(() => {
    const emailCount = emailCountData();
    return getDashboardItems(emailCount, mailList);
  }, [emailCountData, mailList]);

  return {
    emailCountChartData: emailCountChartData(),
    emailCountColors: emailCountColors(),
    emailDistributionDataKey: "name",
    emailDistributionBarData: emailDistributionBarData(),
    emailDistributionColors: emailDistributionColors(),
    dashboardItems: dashboardItems(),
  };
};
