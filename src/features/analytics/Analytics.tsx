import styles from "./Analytics.module.scss";
import { MailCount } from "./components/mail-count/MailCount";
import { useAnalytics } from "./useAnalytics";
import { DatePicker } from "../../components/date-range-picker/DatePicker";
import { useState } from "react";
import { subDays } from "date-fns";
import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";

export const Analytics = () => {
  const { emailCountChartData, emailCountColors } = useAnalytics();
  const [fromDate, setFromDate] = useState<Date | null>(subDays(new Date(), 7));
  const [toDate, setToDate] = useState<Date | null>(new Date());
  const maxDate = new Date();

  const renderTitle = () => {
    return <div className={styles.title}> {"Analytics"} </div>;
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

  return (
    <div className={styles.container}>
      {renderHeader()}
      <MailCount colors={emailCountColors} pieChartData={emailCountChartData} />
    </div>
  );
};
