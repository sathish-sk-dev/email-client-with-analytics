import { FC } from "react";
import { DatePickerProps } from "./types/DatePickerProps";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DatePicker: FC<DatePickerProps> = ({
  date,
  onChangeDate,
  containerClass = "",
  placeholderText,
  minDate = null,
  maxDate = null,
}) => {
  return (
    <ReactDatePicker
      selected={date}
      onChange={onChangeDate}
      className={containerClass}
      placeholderText={placeholderText}
      minDate={minDate}
      maxDate={maxDate}
      dateFormat={"dd MMM YYY"}
    />
  );
};
