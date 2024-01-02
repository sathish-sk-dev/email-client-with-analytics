import { IAppState } from "../interfaces/IAppState";
import { Theme } from "../../contexts/theme-provider/enums/Theme";
import { ViewType } from "../../enums/ViewType";

const initialAppState: IAppState = {
  isLoading: true,
  user: null,
  theme: Theme.LIGHT,
  selectedViewType: ViewType.INBOX,
};

export { initialAppState };
