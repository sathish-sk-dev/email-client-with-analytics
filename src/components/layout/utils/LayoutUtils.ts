import styles from "../../side-navigation-bar/components/side-navigation-bar-item/SideNavigationBarItem.module.scss";
import { INavigationBarItem } from "../interfaces/INavigationBarItem";
import { IconType } from "../../../assets/svg/types/IconType";
import { ViewType } from "../../../enums/ViewType";

const getNavBarItems = (): INavigationBarItem[] => {
  return [
    {
      outlineIcon: IconType.MAIL_OPEN_OUTLINE,
      solidIcon: IconType.MAIL_OPEN_SOLID,
      title: "Inbox",
      iconContainerClass: "",
      selectedIconContainerClass: styles.inboxSolidIcon,
      type: ViewType.INBOX,
    },
    {
      outlineIcon: IconType.SEND_OUTLINE,
      solidIcon: IconType.SEND_SOLID,
      title: "Send",
      iconContainerClass: "",
      selectedIconContainerClass: styles.sendSolidIcon,
      type: ViewType.SEND,
    },
    {
      outlineIcon: IconType.DELETE_OUTLINE,
      solidIcon: IconType.DELETE_SOLID,
      title: "Deleted",
      iconContainerClass: styles.deleteIcon,
      selectedIconContainerClass: styles.deleteSolidIcon,
      type: ViewType.DELETED,
    },
    {
      outlineIcon: IconType.ANALYTICS_OUTLINE,
      solidIcon: IconType.ANALYTICS_SOLID,
      title: "Analytics",
      iconContainerClass: styles.analyticsIcon,
      selectedIconContainerClass: styles.analyticsSolidIcon,
      type: ViewType.ANALYTICS,
    },
  ];
};

export { getNavBarItems };
