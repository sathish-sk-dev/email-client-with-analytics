import { ChangeEvent } from "react";

export type MailListHeaderProps = {
  title: string;
  unReadCount: number;
  onChangeSelectAll: (event: ChangeEvent, isChecked: boolean) => void;
  canShowUnRead: boolean;
  isSelectAll: boolean;
  onClickDelete: () => void;
  canShowDelete: boolean;
};
