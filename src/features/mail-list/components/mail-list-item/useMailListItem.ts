import { UseMailListItemHooks } from "../../types/UseMailListItemHooks";
import { UserMailStatus } from "../../../../enums/UserMailStatus";
import styles from "./MailListItem.module.scss";
import { formatTimeAgo } from "../../../../utils/dateUtils";
import { capitalizeFirstLetter } from "../../../../utils/stringUtils";
import { IMailListState } from "../../../../redux-toolkit/interfaces/IMailListState";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../redux-toolkit/hooks/hooks";
import { UseMailListItemProps } from "../../types/UseMailListItemProps";
import {
  setMailList,
  setSelectedMailItem,
  toggleSelectedMailItem,
} from "../../../../redux-toolkit/slices/mailListSlice";
import { updateReadStatus } from "../../utils/mailListUtils";
import { IAppState } from "../../../../redux-toolkit/interfaces/IAppState";
import { ChangeEvent } from "react";

export const useMailListItem = ({
  item,
}: UseMailListItemProps): UseMailListItemHooks => {
  const dispatch = useAppDispatch();

  const { selectedViewType }: IAppState = useAppSelector(
    (state) => state.appState,
  );

  const { selectedMailItem, mailList }: IMailListState = useAppSelector(
    (state) => state.mailListState,
  );

  const { id, subject, updatedAt, userMailStatus } = item;

  const isUnRead = userMailStatus === UserMailStatus.UN_READ;

  const isSelected = selectedMailItem?.id === id;

  const readContainerClass = isUnRead ? "" : styles.readContainer;

  const statusContainerClass = isUnRead
    ? styles.unReadStatus
    : styles.readStatus;

  const selectedContainerClass = isSelected ? styles.selectedContainer : "";

  const timeAgoText = formatTimeAgo(updatedAt, false);

  const subjectText = capitalizeFirstLetter(subject);

  const setReadStatusForSelectedItem = () => {
    const updatedList = updateReadStatus(mailList, item);
    dispatch(setMailList({ mailList: updatedList, selectedViewType }));
  };

  const onClickItem = () => {
    dispatch(setSelectedMailItem(item));
    setReadStatusForSelectedItem();
  };

  const onSelect = (event: ChangeEvent, isChecked: boolean) => {
    dispatch(toggleSelectedMailItem({ mailItem: item, isChecked }));
  };

  return {
    onClickItem,
    readContainerClass,
    statusContainerClass,
    selectedContainerClass,
    timeAgoText,
    subjectText,
    onSelect,
  };
};
