import styles from "./FloatingActionButton.module.scss";
import { Icon } from "../icon/Icon";
import { FC } from "react";
import { FloatingActionButtonProps } from "./FloatingActionButtonProps";

const FloatingActionButton: FC<FloatingActionButtonProps> = ({
  iconType,
  onClick,
}) => {
  return (
    <div className={styles.container} onClick={onClick}>
      <Icon iconType={iconType} containerClass={styles.icon} />
    </div>
  );
};

export default FloatingActionButton;
