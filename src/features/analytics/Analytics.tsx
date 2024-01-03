import styles from "./Analytics.module.scss";
import { MailCount } from "./components/mail-count/MailCount";
import { useAnalytics } from "./useAnalytics";
import { DatePicker } from "../../components/date-range-picker/DatePicker";
import { useState } from "react";
import { subDays } from "date-fns";
import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import { MailDistribution } from "./components/mail-distribution/MailDistribution";
import { DashboardItem } from "./components/dashboard-item/DashboardItem";
import { Divider } from "../../components/divider/Divider";

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

  const renderButton = () => {
    return <button className={styles.submitButton}> {"Submit"} </button>;
  };

  const renderHeader = () => {
    return (
      <div className={styles.headerContainer}>
        {renderTitle()}
        {renderDatePicker()}
        {renderButton()}
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

  const renderDashboardItems = () => {
    return (
      <div className={styles.dashboardItemsContainer}>
        {dashboardItems.map((item) => (
          <DashboardItem item={item} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderHeader()}
      <Divider />
      {renderInnerContainer()}
      {renderDashboardItems()}
    </div>
  );
};
