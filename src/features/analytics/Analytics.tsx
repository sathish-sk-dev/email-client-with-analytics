import styles from "./Analytics.module.scss";
import { MailCount } from "./components/mail-count/MailCount";
import { useAnalytics } from "./useAnalytics";
import { DatePicker } from "../../components/date-range-picker/DatePicker";
import React, { useState } from "react";
import { subDays } from "date-fns";
import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import { MailDistribution } from "./components/mail-distribution/MailDistribution";
import { IDashboardItem } from "./interfaces/IDashboardItem";
import MonthlyBarChart from "./components/MonthlyBarChart";
import IncomeAreaChart from "./components/IncomeAreaChart";
import { Button } from "@mui/material";

export const Analytics = () => {
  const {
    emailCountChartData,
    emailCountColors,
    emailDistributionDataKey,
    emailDistributionBarData,
    emailDistributionColors,
    dashboardItems,
  } = useAnalytics();
  const [fromDate, setFromDate] = useState<Date | null>(subDays(new Date(), 7));
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const [slot, setSlot] = useState("week");
  const maxDate = new Date();

  const renderTitle = () => {
    return (
      <div className={styles.headingContainer}>
        <div className={styles.heading}> {"Analytics"} </div>
        <div className={styles.subHeading}> {"Details by week"} </div>
      </div>
    );
  };

  const renderDatePicker = () => {
    return (
      <div className={styles.dateContainer}>
        <div className={styles.iconContainer}>
          <Icon iconType={IconType.CALENDER} />
        </div>
        <DatePicker
          date={fromDate}
          onChangeDate={setFromDate}
          containerClass={styles.dateInputContainer}
          placeholderText={"From Date"}
          minDate={null}
          maxDate={maxDate}
        />
        <span> - </span>
        <DatePicker
          date={toDate}
          onChangeDate={setToDate}
          containerClass={styles.dateInputContainer}
          placeholderText={"To Date"}
          minDate={fromDate}
          maxDate={maxDate}
        />
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className={styles.headerContainer}>
        <div className={styles.title}> {"Analytics"} </div>
      </div>
    );
  };

  const renderInnerContainer = () => {
    return (
      <div className={styles.innerContainer}>
        <MailCount
          colors={emailCountColors}
          pieChartData={emailCountChartData}
        />
        <MailDistribution
          bars={emailDistributionBarData}
          dataKey={emailDistributionDataKey}
          colors={emailDistributionColors}
        />
      </div>
    );
  };

  const renderDashboardItem = (item: IDashboardItem) => {
    const { title, count } = item;
    return (
      <div className={styles.dashboardItem}>
        <div className={styles.dashboardItemTitle}> {title} </div>
        <div className={styles.countContainer}>
          <div className={styles.dashboardItemCount}> {count} </div>
          <div className={styles.chip}>
            <Icon iconType={IconType.LOSS} containerClass={styles.icon} />
            <div className={styles.count}> {"25.4%"} </div>
          </div>
        </div>
        <div className={styles.dashboardItemInfo}>
          {"You made an extra"}
          <span className={styles.color}> {"35,000"} </span> {"this year"}
        </div>
      </div>
    );
  };

  const renderWeekOverview = () => {
    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <div className={styles.chartTitle}> {"Total Mails Overview"}</div>
        </div>
        <div className={styles.monthlyBarChart}>
          <MonthlyBarChart />
        </div>
      </div>
    );
  };

  const renderMailAnalytics = () => {
    return (
      <div className={styles.chartContainer}>
        <div className={styles.chartHeader}>
          <div className={styles.chartTitle}>{"Overall Analytics"}</div>
          <div className={styles.buttonList}>
            <Button
              onClick={() => setSlot("week")}
              variant={slot === "week" ? "outlined" : "text"}
            >
              Week
            </Button>
            <Button
              onClick={() => setSlot("month")}
              variant={slot === "month" ? "outlined" : "text"}
            >
              Month
            </Button>
          </div>
        </div>
        <div className={styles.monthlyBarChart}>
          <IncomeAreaChart slot={slot} />
        </div>
      </div>
    );
  };

  const renderDashboardItems = () => {
    return (
      <div className={styles.dashboardContainer}>
        {dashboardItems.map(renderDashboardItem)}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}> {"Analytics"} </div>
      {renderDashboardItems()}
      <div className={styles.innerContainer}>
        {renderWeekOverview()}
        {renderMailAnalytics()}
      </div>
    </div>
  );
};
