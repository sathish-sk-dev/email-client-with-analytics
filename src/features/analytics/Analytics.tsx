import styles from "./Analytics.module.scss";
import { MailCount } from "./components/mail-count/MailCount";
import { useAnalytics } from "./useAnalytics";

export const Analytics = () => {
  const { emailCountChartData, emailCountColors } = useAnalytics();

  const renderTitle = () => {
    return <div className={styles.title}> {"Analytics"} </div>;
  };

  return (
    <div className={styles.container}>
      {renderTitle()}
      <MailCount colors={emailCountColors} pieChartData={emailCountChartData} />
    </div>
  );
};
