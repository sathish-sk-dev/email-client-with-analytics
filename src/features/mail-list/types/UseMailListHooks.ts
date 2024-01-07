import { IMailListItem } from "../../../interfaces/IMailListItem";
import { ChangeEvent } from "react";

export type UseMailListHooks = {
  searchText: string;
  onChangeSearch: (text: string) => void;
  searchedMailList: IMailListItem[];
  unReadCount: number;
  onSearch: () => void;
  onChangeSelectAll: (event: ChangeEvent, isChecked: boolean) => void;
  isLoading: boolean;
  title: string;
  onClearSearch: () => void;
  canShowUnRead: boolean;
  isSelectAll: boolean;
  onClickDelete: () => void;
  canShowDelete: boolean;
};
