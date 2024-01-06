import { ViewType } from "../enums/ViewType";

export type UseAppHooks = {
  isLoading: boolean;
  isOpenComposeView: boolean;
  canShowMailDetailsView: boolean;
  selectedViewType: ViewType;
  canShowAnalytics: boolean;
};
