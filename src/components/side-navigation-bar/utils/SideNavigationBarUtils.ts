import styles from "../SideNavigationBar.module.scss";
import { ISideNavigationBarItem } from "../interfaces/ISideNavigationBarItem";
import { IconType } from "../../../assets/svg/types/IconType";

const getNavBarItems = (): ISideNavigationBarItem[] => {
  return [
    {
      outlineIcon: IconType.MAIL_OPEN_OUTLINE,
      solidIcon: IconType.MAIL_OPEN_SOLID,
      title: "Inbox",
      containerClass: "",
      selectedContainerClass: styles.inboxSolidIcon,
    },
    {
      outlineIcon: IconType.SEND_OUTLINE,
      solidIcon: IconType.SEND_SOLID,
      title: "Send",
      containerClass: "",
      selectedContainerClass: styles.sendSolidIcon,
    },
    {
      outlineIcon: IconType.DELETE_OUTLINE,
      solidIcon: IconType.DELETE_OUTLINE,
      title: "Deleted",
      containerClass: styles.deleteIcon,
      selectedContainerClass: styles.deleteSolidIcon,
    },
  ];
};

export { getNavBarItems };
