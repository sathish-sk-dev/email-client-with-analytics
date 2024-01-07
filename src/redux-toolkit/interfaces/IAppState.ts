import { IUser } from "./IUser";
import { Theme } from "../../contexts/theme-provider/enums/Theme";
import { ViewType } from "../../enums/ViewType";

export interface IAppState {
  isLoading: boolean;
  user?: IUser | null;
  theme: Theme;
  selectedViewType: ViewType;
  isOpenComposeView: boolean;
  isOpenDrawer: boolean;
  searchText: string
}
