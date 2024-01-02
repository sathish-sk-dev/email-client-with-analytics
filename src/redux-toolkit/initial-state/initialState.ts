import { IAppState } from "../interfaces/IAppState";
import { Theme } from "../../contexts/theme-provider/enums/Theme";
import { ViewType } from "../../enums/ViewType";
import { IMailListState } from "../interfaces/IMailListState";

const initialAppState: IAppState = {
  isLoading: true,
  user: null,
  theme: Theme.LIGHT,
  selectedViewType: ViewType.INBOX,
  isOpenComposeView: false,
};

const initialMailListState: IMailListState = {
  mailList: [],
  searchedMailList: [],
  searchText: "",
  unReadCount: 0,
  isLoading: true,
};

export { initialAppState, initialMailListState };
