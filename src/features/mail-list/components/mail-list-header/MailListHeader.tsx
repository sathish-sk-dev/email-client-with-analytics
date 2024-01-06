import React, { FC, useCallback } from "react";
import { MailListHeaderProps } from "../../types/MailListHeaderProps";
import styles from "./MailListHeader.module.scss";
import { Checkbox } from "@mui/material";
import useDesktopMediaQuery from "../../../../components/responsive/hooks/useDesktopMediaQuery";

export const MailListHeader: FC<MailListHeaderProps> = ({
  title,
  unReadCount,
  onChangeSelectAll,
  canShowUnRead,
}) => {
  const isDesktop = useDesktopMediaQuery();

  const renderSelectAll = useCallback(
    () => <Checkbox defaultChecked onChange={onChangeSelectAll} />,
    [onChangeSelectAll],
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

  return (
    <div className={styles.container}>
      {isDesktop && renderSelectAll()}
      {renderTitleWithCount()}
    </div>
  );
};
