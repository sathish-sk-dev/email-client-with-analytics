import { FC } from "react";
import { Icon } from "../../../../components/icon/Icon";
import { IconType } from "../../../../assets/svg/types/IconType";
import styles from "./ComposeMailHeader.module.scss";
import { ComposeMailHeaderProps } from "../../types/ComposeMailHeaderProps";

const ComposeMailHeader: FC<ComposeMailHeaderProps> = ({ onClose, onSend }) => {
  return (
    <div className={styles.container}>
      <Icon
        iconType={IconType.ARROW_LEFT}
        containerClass={styles.leftIcon}
        onClick={onClose}
      />
      <div className={styles.title}> {"New Mail"} </div>
      <Icon
        iconType={IconType.SEND_OUTLINE}
        containerClass={styles.sendIcon}
        onClick={onSend}
      />
    </div>
  );
};

export default ComposeMailHeader;
