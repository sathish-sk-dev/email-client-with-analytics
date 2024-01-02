import styles from "../../side-navigation-bar/SideNavigationBar.module.scss";
import { INavigationBarItem } from "../interfaces/INavigationBarItem";
import { IconType } from "../../../assets/svg/types/IconType";
import { ViewType } from "../../../enums/ViewType";

const getNavBarItems = (): INavigationBarItem[] => {
  return [
    {
      outlineIcon: IconType.MAIL_OPEN_OUTLINE,
      solidIcon: IconType.MAIL_OPEN_SOLID,
      title: "Inbox",
      containerClass: "",
      selectedContainerClass: styles.inboxSolidIcon,
      type: ViewType.INBOX,
    },
    {
      outlineIcon: IconType.SEND_OUTLINE,
      solidIcon: IconType.SEND_SOLID,
      title: "Send",
      containerClass: "",
      selectedContainerClass: styles.sendSolidIcon,
      type: ViewType.SEND,
    },
    {
      outlineIcon: IconType.DELETE_OUTLINE,
      solidIcon: IconType.DELETE_OUTLINE,
      title: "Deleted",
      containerClass: styles.deleteIcon,
      selectedContainerClass: styles.deleteSolidIcon,
      type: ViewType.DELETED,
    },
  ];
};

export { getNavBarItems };
