import styles from "./Analytics.module.scss";
import { MailCount } from "./components/mail-count/MailCount";
import { useAnalytics } from "./useAnalytics";
import { MailDistribution } from "./components/mail-distribution/MailDistribution";
import MailCountAnalytics from "./components/mail-count-analytics/MailCountAnalytics";
import { DashboardItem } from "./components/dashboard-item/DashboardItem";
import TotalMailsOverview from "./components/total-mails-overview/TotalMailsOverview";

export const Analytics = () => {
  const {
    emailCountChartData,
    emailCountColors,
    emailDistributionDataKey,
    emailDistributionBarData,
    emailDistributionColors,
    dashboardItems,
  } = useAnalytics();

  const renderDashboardItems = () => {
    return (
      <div className={styles.dashboardContainer}>
        {dashboardItems.map((item) => (
          <DashboardItem item={item} />
        ))}
      </div>
    );
  };

  const renderWeekAnalytics = () => {
    return (
      <div className={styles.innerContainer}>
        <MailDistribution
          bars={emailDistributionBarData}
          dataKey={emailDistributionDataKey}
          colors={emailDistributionColors}
        />
        <MailCount
          colors={emailCountColors}
          pieChartData={emailCountChartData}
        />
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}> {"Analytics"} </div>
      {renderDashboardItems()}
      <div className={styles.innerContainer}>
        <TotalMailsOverview />
        <MailCountAnalytics />
      </div>
      {renderWeekAnalytics()}
    </div>
  );
};
