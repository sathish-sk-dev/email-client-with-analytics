import styles from "./UserInfo.module.scss";
import { Icon } from "../../components/icon/Icon";
import { IconType } from "../../assets/svg/types/IconType";
import { FC } from "react";
import { UserInfoProps } from "./types/UserInfoProps";
import { IUser } from "../../redux-toolkit/interfaces/IUser";
import { getUserStatusText } from "./userInfoUtils";

export const UserInfo: FC<UserInfoProps> = ({ user, onClose }) => {
  const { name, avatar, status } = user as IUser;

  const userStatusText = getUserStatusText(status);

  return (
    <div className={styles.container}>
      <Icon
        iconType={IconType.ARROW_LEFT}
        onClick={onClose}
        containerClass={styles.closeIcon}
      />
      <div className={styles.innerContainer}>
        <span className={styles.title}> {name} </span>
        <div className={styles.status}>
          <div className={styles.statusColor} /> {userStatusText}
        </div>
      </div>
      <img className={styles.avatar} src={avatar} />
    </div>
  );
};
