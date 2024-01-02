import { IMailListItem } from "../../interfaces/IMailListItem";

export interface IMailListState {
  searchText: string;
  mailList: IMailListItem[];
  searchedMailList: IMailListItem[];
  unReadCount: number;
  isLoading: boolean;
}
