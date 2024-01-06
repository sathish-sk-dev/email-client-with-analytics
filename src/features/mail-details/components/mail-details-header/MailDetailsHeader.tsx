import { formatTimeAgo } from "../../../../utils/dateUtils";
import { FC } from "react";
import { MailDetailsHeaderProps } from "../../types/MailDetailsHeaderProps";
import styles from "./MailDetailsHeader.module.scss";
import { Icon } from "../../../../components/icon/Icon";
import { IconType } from "../../../../assets/svg/types/IconType";

export const MailDetailsHeader: FC<MailDetailsHeaderProps> = ({
  mailDetails,
}) => {
  const { from, updatedAt } = mailDetails;
  const { name, mailId, avatar } = from;

  return (
    <div className={styles.header}>
      <img src={avatar} className={styles.avatar} loading="lazy" />
      <div className={styles.headerContent}>
        <span className={styles.name}>{name}</span>
        <span className={styles.to}> {mailId}</span>
      </div>
      <div className={styles.time}> {formatTimeAgo(updatedAt, true)} </div>
    </div>
  );
};
