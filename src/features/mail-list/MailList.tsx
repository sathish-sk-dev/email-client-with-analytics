import styles from "./MailList.module.scss";
import { MailListItem } from "./components/mail-list-item/MailListItem";
import { useMailList } from "./useMailList";
import React, { useCallback } from "react";
import { MailListHeader } from "./components/mail-list-header/MailListHeader";

const MailList = () => {
  const {
    title,
    unReadCount,
    canShowUnRead,
    searchedMailList,
    onChangeSelectAll,
  } = useMailList();

  const renderMailList = useCallback(
    () => (
      <div className={styles.listContainer}>
        {searchedMailList.map((item, index) => (
          <MailListItem key={index} item={item} />
        ))}
      </div>
    ),
    [searchedMailList],
  );

  const renderHeader = useCallback(
    () => (
      <MailListHeader
        title={title}
        unReadCount={unReadCount}
        onChangeSelectAll={onChangeSelectAll}
        canShowUnRead={canShowUnRead}
      />
    ),
    [canShowUnRead, onChangeSelectAll, title, unReadCount],
  );

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {renderHeader()}
        {renderMailList()}
      </div>
    </div>
  );
};

export default MailList;
