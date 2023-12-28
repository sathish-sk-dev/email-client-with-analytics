import { FC } from "react";
import { IconProps } from "./types/IconProps";
import styles from "./Icon.module.scss";
import cx from "classnames";

export const Icon: FC<IconProps> = ({
  iconType,
  containerClass = "",
  isDisabled = false,
  onClick,
}) => {
  const IconComponent = iconType;

  return (
    <div className={cx(styles.iconContainer, containerClass)} onClick={onClick}>
      <IconComponent className={styles.container} />
    </div>
  );
};
