import {ChangeEvent} from "react";

export type MailListHeaderProps = {
  title: string;
  unReadCount: number;
  onChangeSelectAll: (event: ChangeEvent) => void;
  canShowUnRead: boolean;
};
