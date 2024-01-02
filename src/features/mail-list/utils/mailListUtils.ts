import { IMailListItem } from "../../../interfaces/IMailListItem";
import { UserMailStatus } from "../../../enums/UserMailStatus";
import { MailStatus } from "../../../enums/MailStatus";
import { ViewType } from "../../../enums/ViewType";

/**
 * Calculates the count of unread emails in the given mail list.
 * @param {IMailListItem[]} mailList - The list of mail items.
 * @returns {number} - The count of unread emails.
 */
const getUnReadCount = (mailList: IMailListItem[]): number => {
  return mailList.reduce((count, item) => {
    return item.userMailStatus === UserMailStatus.UN_READ ? count + 1 : count;
  }, 0);
};

/**
 * Filters a mail list based on the given mail status.
 * @param {IMailListItem[]} mailList - The list of mail items to filter.
 * @param {MailStatus} mailStatus - The mail status to filter by.
 * @returns {IMailListItem[]} - The filtered mail list.
 */
const filterMailListByStatus = (
  mailList: IMailListItem[],
  mailStatus: MailStatus,
): IMailListItem[] => {
  return mailList.filter((item) => item.status === mailStatus);
};

/**
 * Retrieves the search keys(with nested keys) for filtering a mail list.
 * @returns {(keyof IMailListItem | string)[]} - The search keys(with nested keys).
 */
const getMailListSearchKeys = (): (keyof IMailListItem | string)[] => {
  return ["subject", "body", "from.mailId", "from.name"];
};

/**
 * Retrieves the mail list title based on the specified view type.
 * @param {ViewType} viewType - The view type for which to retrieve the title.
 * @returns {string} - The mail list title.
 */
const getMailListTitleByViewType = (viewType: ViewType): string => {
  switch (viewType) {
    case ViewType.INBOX:
      return "Inbox";
    case ViewType.SEND:
      return "Send";
    case ViewType.DELETED:
      return "Deleted";
    default:
      return "Inbox";
  }
};

/**
 * Retrieves the mail status based on the specified view type.
 * @param {ViewType} viewType - The view type for which to retrieve the mail status.
 * @returns {string} - The mail status.
 */
const getMailStatusByViewType = (viewType: ViewType): MailStatus => {
  switch (viewType) {
    case ViewType.INBOX:
      return MailStatus.INBOX;
    case ViewType.SEND:
      return MailStatus.SEND;
    case ViewType.DELETED:
      return MailStatus.DELETED;
    default:
      return MailStatus.INBOX;
  }
};

/**
 * Updates the read status of a selected mail item in the given mail list.
 * @param {IMailListItem[]} mailList - The list of mail items.
 * @param {IMailListItem} selectedItem - The selected mail item to mark as read.
 * @returns {IMailListItem[]} - The updated mail list.
 */
const updateReadStatus = (
  mailList: IMailListItem[],
  selectedItem: IMailListItem,
): IMailListItem[] => {
  return mailList.map((item) => {
    if (item.id === selectedItem.id) {
      return { ...item, userMailStatus: UserMailStatus.READ };
    }
    return item;
  });
};

export {
  getUnReadCount,
  filterMailListByStatus,
  getMailListSearchKeys,
  getMailListTitleByViewType,
  getMailStatusByViewType,
  updateReadStatus,
};
