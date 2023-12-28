import { FC } from "react";
import { MailListHeaderProps } from "../../types/MailListHeaderProps";
import styles from "./MailListHeader.module.scss";
import { Icon } from "../../../../components/icon/Icon";
import { IconType } from "../../../../assets/svg/types/IconType";

export const MailListHeader: FC<MailListHeaderProps> = ({
  title,
  unReadCount,
  onClickAdd,
}) => {
  const showCount = unReadCount > 0;
  const renderTitle = () => {
    return <div className={styles.title}> {title} </div>;
  };

  const renderCount = () => {
    return <div className={styles.count}> {unReadCount} </div>;
  };

  const renderComposeIcon = () => {
    return (
      <Icon iconType={IconType.ADD} containerClass={styles.composeButton} />
    );
  };

  return (
    <div className={styles.container}>
      {renderTitle()}
      {showCount && renderCount()}
      {renderComposeIcon()}
    </div>
  );
};
