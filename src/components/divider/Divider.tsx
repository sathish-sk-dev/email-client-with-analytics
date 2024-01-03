import cx from "classnames";
import { DividerProps } from "./DividerProps";
import styles from "../../styles/Common.module.scss";

export const Divider = ({ containerClass = "" }: DividerProps) => {
  return <div className={cx(styles.divider, containerClass)}> </div>;
};
