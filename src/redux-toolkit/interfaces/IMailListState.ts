import { IMailListItem } from "../../interfaces/IMailListItem";

export interface IMailListState {
  searchText: string;
  mailList: IMailListItem[];
  searchedMailList: IMailListItem[];
  mailListByViewType: IMailListItem[];
  unReadCount: number;
  isLoading: boolean;
  selectedMailItem: IMailListItem | null;
  isSelectAll: boolean;
}
