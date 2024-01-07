import { ChangeEvent } from "react";

export type UseMailListItemHooks = {
  onClickItem: () => void;
  readContainerClass: string;
  statusContainerClass: string;
  selectedContainerClass: string;
  timeAgoText: string;
  subjectText: string;
  onSelect: (event: ChangeEvent, checked: boolean) => void;
};
