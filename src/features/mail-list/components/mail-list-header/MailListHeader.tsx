import React, { FC, useCallback } from "react";
import { MailListHeaderProps } from "../../types/MailListHeaderProps";
import styles from "./MailListHeader.module.scss";
import { Checkbox } from "@mui/material";
import useDesktopMediaQuery from "../../../../components/responsive/hooks/useDesktopMediaQuery";
import Button from "../../../../components/button/Button";
import { IconType } from "../../../../assets/svg/types/IconType";

export const MailListHeader: FC<MailListHeaderProps> = ({
  title,
  unReadCount,
  onChangeSelectAll,
  canShowUnRead,
  isSelectAll,
  onClickDelete,
  canShowDelete,
}) => {
  const isDesktop = useDesktopMediaQuery();

  const renderSelectAll = useCallback(
    () => <Checkbox checked={isSelectAll} onChange={onChangeSelectAll} />,
    [isSelectAll, onChangeSelectAll],
  );

  const renderTitleWithCount = useCallback(
    () => (
      <>
        <div className={styles.title}> {title} </div>
        {canShowUnRead && <div className={styles.count}> {unReadCount} </div>}
      </>
    ),
    [canShowUnRead, title, unReadCount],
  );

  const renderDeleteIcon = useCallback(
    () => (
      <Button
        title={""}
        onClick={onClickDelete}
        containerClass={styles.deleteButton}
        canShowIcon={true}
        iconType={IconType.DELETE_OUTLINE}
      />
    ),
    [onClickDelete],
  );

  return (
    <div className={styles.container}>
      {isDesktop && renderSelectAll()}
      {renderTitleWithCount()}
      {canShowDelete && renderDeleteIcon()}
    </div>
  );
};
