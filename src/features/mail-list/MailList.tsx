import styles from "./MailList.module.scss";
import { MailListItem } from "./components/mail-list-item/MailListItem";
import { useMailList } from "./useMailList";
import React, { useCallback } from "react";
import { MailListHeader } from "./components/mail-list-header/MailListHeader";
import EmptyView from "./components/empty-view/EmptyView";

const MailList = () => {
  const {
    title,
    unReadCount,
    canShowUnRead,
    searchedMailList,
    onChangeSelectAll,
    isSelectAll,
    onClickDelete,
    canShowDelete,
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
        isSelectAll={isSelectAll}
        unReadCount={unReadCount}
        onChangeSelectAll={onChangeSelectAll}
        canShowUnRead={canShowUnRead}
        onClickDelete={onClickDelete}
        canShowDelete={canShowDelete}
      />
    ),
    [
      canShowDelete,
      canShowUnRead,
      isSelectAll,
      onChangeSelectAll,
      onClickDelete,
      title,
      unReadCount,
    ],
  );

  if (searchedMailList.length === 0) {
    return <EmptyView />;
  }

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
