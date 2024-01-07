import { IAppState } from "../interfaces/IAppState";
import { Theme } from "../../contexts/theme-provider/enums/Theme";
import { ViewType } from "../../enums/ViewType";
import { IMailListState } from "../interfaces/IMailListState";
import { IComposeMailState } from "../interfaces/IComposeMailState";

const initialAppState: IAppState = {
  isLoading: true,
  user: null,
  theme: Theme.LIGHT,
  selectedViewType: ViewType.INBOX,
  isOpenComposeView: false,
  isOpenDrawer: window.innerWidth > 768,
  searchText: "",
};

const initialMailListState: IMailListState = {
  mailList: [],
  searchedMailList: [],
  mailListByViewType: [],
  searchText: "",
  unReadCount: 0,
  isLoading: true,
  selectedMailItem: null,
  isSelectAll: false,
  selectedItems: []
};

const initialComposeMailState: IComposeMailState = {
  body: "",
  isLoading: true,
  subject: "",
  receipients: [],
  selectedReceipients: [],
};

export { initialAppState, initialMailListState, initialComposeMailState };
