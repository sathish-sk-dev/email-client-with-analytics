import styles from "./EmptyView.module.scss";
import { Icon } from "../../../../components/icon/Icon";
import { IconType } from "../../../../assets/svg/types/IconType";

const EmptyView = () => {
  return (
    <div className={styles.container}>
      <Icon iconType={IconType.MAIL_OPEN} containerClass={styles.icon} />
      <div className={styles.title}> {"No mails found!"} </div>
    </div>
  );
};

export default EmptyView;
