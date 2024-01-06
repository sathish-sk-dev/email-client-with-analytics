import { ViewType } from "../enums/ViewType";

export type UseAppHooks = {
  isLoading: boolean;
  isOpenComposeView: boolean;
  canShowModuleDetailsView: boolean;
  selectedViewType: ViewType;
  canShowAnalytics: boolean;
};
