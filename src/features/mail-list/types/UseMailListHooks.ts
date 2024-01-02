import { IMailListItem } from "../../../interfaces/IMailListItem";

export type UseMailListHooks = {
  searchText: string;
  onChangeSearch: (text: string) => void;
  searchedMailList: IMailListItem[];
  unReadCount: number;
  onSearch: () => void;
  onAdd: () => void;
  isLoading: boolean;
  title: string;
  onClearSearch: () => void;
};
