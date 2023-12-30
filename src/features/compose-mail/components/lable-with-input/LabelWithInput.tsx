import styles from "./LabelWithInput.module.scss";
import { ChangeEvent, FC } from "react";
import { LabelWithInputProps } from "../../types/LabelWithInputProps";

export const LabelWithInput: FC<LabelWithInputProps> = ({
  label,
  value,
  onChangeValue,
}) => {
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onChangeValue(value);
  };

  return (
    <div className={styles.container}>
      <span className={styles.label}> {`${label} :`} </span>
      <input
        type="text"
        onChange={onChange}
        value={value}
        className={styles.input}
      />
    </div>
  );
};
