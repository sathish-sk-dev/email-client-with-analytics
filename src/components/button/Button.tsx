import { FC, useCallback } from "react";
import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.scss";
import cx from "classnames";
import { Icon } from "../icon/Icon";

const Button: FC<ButtonProps> = ({
  onClick,
  isDisabled = false,
  containerClass = "",
  title,
  iconType = null,
  canShowIcon = false,
}) => {
  const renderIcon = useCallback(
    () => (
      <Icon
        isDisabled={true}
        iconType={iconType}
        containerClass={styles.icon}
      />
    ),
    [iconType],
  );

  const disableClassName = isDisabled ? styles.disabled : "";

  return (
    <button
      className={cx(styles.container, disableClassName, containerClass)}
      disabled={isDisabled}
      onClick={onClick}
    >
      {canShowIcon && renderIcon()}
      {title}
    </button>
  );
};

export default Button;
