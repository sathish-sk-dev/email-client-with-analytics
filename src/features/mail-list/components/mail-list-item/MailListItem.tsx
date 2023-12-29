import styles from "./MailListItem.module.scss";
import { FC } from "react";
import { MailListItemProps } from "../../types/MailListItemProps";
import cx from "classnames";
import { formatTimeAgo } from "../../../../utils/dateUtils";
import { UserMailStatus } from "../../../../enums/UserMailStatus";
import { capitalizeFirstLetter } from "../../../../utils/stringUtils";

export const MailListItem: FC<MailListItemProps> = ({ item, index }) => {
  const { from, subject, body, updatedAt, userMailStatus } = item;
  const { name, mailId, avatar } = from;

  const isUnRead = userMailStatus === UserMailStatus.UN_READ;

  const isSelected = index === 0;

  const readContainerClass = isUnRead ? "" : styles.readContainer;

  const statusClass = isUnRead ? styles.unReadStatus : styles.readStatus;

  const selectedContainerClass = isSelected ? styles.selectedContainer : "";

  return (
    <div
      key={mailId}
      className={cx(
        styles.container,
        readContainerClass,
        selectedContainerClass,
      )}
    >
      <div className={cx(styles.statusIndicator, statusClass)} />
      <div className={styles.header}>
        <img src={avatar} className={styles.avatar} loading="lazy" />
        <div className={styles.headerContent}>
          <span className={styles.name}>{name}</span>
          <div className={styles.time}> {formatTimeAgo(updatedAt)} </div>
        </div>
      </div>
      <span className={styles.subject}>{capitalizeFirstLetter(subject)}</span>
      <div className={styles.body}> {body} </div>
    </div>
  );
};
