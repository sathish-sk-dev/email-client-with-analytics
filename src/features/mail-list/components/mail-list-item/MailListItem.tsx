import styles from "./MailListItem.module.scss";
import { FC } from "react";
import { MailListItemProps } from "../../types/MailListItemProps";
import cx from "classnames";
import { useMailListItem } from "./useMailListItem";

export const MailListItem: FC<MailListItemProps> = ({ item }) => {
  const { from, body } = item;
  const { name, avatar } = from;
  const {
    onClickItem,
    readContainerClass,
    statusContainerClass,
    selectedContainerClass,
    timeAgoText,
    subjectText,
  } = useMailListItem({ item });

  const renderHeader = () => {
    return (
      <div className={styles.header}>
        <img src={avatar} className={styles.avatar} loading="lazy" />
        <div className={styles.headerContent}>
          <span className={styles.name}>{name}</span>
          <div className={styles.time}> {timeAgoText} </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={cx(
        styles.container,
        readContainerClass,
        selectedContainerClass,
      )}
      onClick={onClickItem}
    >
      <div className={cx(styles.statusIndicator, statusContainerClass)} />
      {renderHeader()}
      <span className={styles.subject}>{subjectText}</span>
      <div className={styles.body}> {body} </div>
    </div>
  );
};
