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

  const disableContainerClass = isDisabled ? styles.disabled : "";

  return (
    <div
      className={cx(
        styles.iconContainer,
        disableContainerClass,
        containerClass,
      )}
      onClick={onClick}
    >
      {/*// @ts-ignore*/}
      <IconComponent className={styles.container} />
    </div>
  );
};
