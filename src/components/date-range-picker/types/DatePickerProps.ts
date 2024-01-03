import * as React from "react";

export type DatePickerProps = {
  date: Date | null;
  onChangeDate: (dateRange: Date, event: React.SyntheticEvent<any>) => void;
  containerClass?: string;
  placeholderText: string;
  minDate?: Date | null;
  maxDate?: Date | null;
};
