import styles from "./MailListItem.module.scss";
import React, { FC, useCallback } from "react";
import { MailListItemProps } from "../../types/MailListItemProps";
import cx from "classnames";
import { useMailListItem } from "./useMailListItem";
import { Checkbox } from "@mui/material";
import useDesktopMediaQuery from "../../../../components/responsive/hooks/useDesktopMediaQuery";

export const MailListItem: FC<MailListItemProps> = ({ item }) => {
  const { from } = item;
  const { name, avatar } = from;
  const { onClickItem, readContainerClass, timeAgoText, subjectText } =
    useMailListItem({ item });
  const isDesktop = useDesktopMediaQuery();

  const renderContent = useCallback(
    () => (
      <div className={styles.contentContainer}>
        <div className={styles.name}>{name}</div>
        <span className={styles.subject}>{subjectText}</span>
      </div>
    ),
    [name, subjectText],
  );

  const renderCheckbox = useCallback(() => {
    if (isDesktop) {
      return <Checkbox defaultChecked />;
    }
  }, [isDesktop]);

  return (
    <div
      className={cx(styles.container, readContainerClass)}
      onClick={onClickItem}
    >
      {renderCheckbox()}
      <img
        src={avatar}
        className={styles.avatar}
        loading="lazy"
        alt={"avatar"}
      />
      {renderContent()}
      <div className={styles.time}> {timeAgoText} </div>
    </div>
  );
};
