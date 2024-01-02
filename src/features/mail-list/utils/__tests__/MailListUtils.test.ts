import { IMailListItem } from "../../../../interfaces/IMailListItem";
import {
  filterMailListByStatus,
  getMailListSearchKeys,
  getMailListTitleByViewType,
  getMailStatusByViewType,
  getUnReadCount,
  updateReadStatus,
} from "../mailListUtils";
import { UserMailStatus } from "../../../../enums/UserMailStatus";
import { MailStatus } from "../../../../enums/MailStatus";
import { ViewType } from "../../../../enums/ViewType";
import { UserStatus } from "../../../../enums/UserStatus";

describe("getUnReadCount", () => {
  it("should return 0 for an empty mail list", () => {
    const mailList: IMailListItem[] = [];
    const result = getUnReadCount(mailList);
    expect(result).toBe(0);
  });

  it("should return correct count when mail list is available", () => {
    const mailList: IMailListItem[] = [
      { id: "1", userMailStatus: UserMailStatus.READ },
      { id: "2", userMailStatus: UserMailStatus.UN_READ },
      { id: "3", userMailStatus: UserMailStatus.UN_READ },
      { id: "4", userMailStatus: UserMailStatus.READ },
    ] as IMailListItem[];
    const result = getUnReadCount(mailList);
    expect(result).toBe(2);
  });
});

describe("filterMailListByStatus", () => {
  const mailList: IMailListItem[] = [
    { id: "1", status: MailStatus.INBOX },
    { id: "2", status: MailStatus.SEND },
    { id: "3", status: MailStatus.INBOX },
  ] as IMailListItem[];

  it("should return inbox mail list for status MailStatus.INBOX", () => {
    const filteredMailList = filterMailListByStatus(mailList, MailStatus.INBOX);
    expect(filteredMailList).toEqual([
      { id: "1", status: MailStatus.INBOX },
      { id: "3", status: MailStatus.INBOX },
    ]);
  });

  it("should return send mail list for status MailStatus.SEND", () => {
    const filteredMailList = filterMailListByStatus(mailList, MailStatus.SEND);
    expect(filteredMailList).toEqual([{ id: "2", status: MailStatus.SEND }]);
  });
});

describe("getMailListSearchKeys", () => {
  it("should return the expected search keys", () => {
    const expectedKeys: (keyof IMailListItem | string)[] = [
      "subject",
      "body",
      "from.mailId",
      "from.name",
    ];
    const searchKeys = getMailListSearchKeys();
    expect(searchKeys).toEqual(expectedKeys);
  });
});

describe("getMailListTitleByViewType", () => {
  it('should return "Inbox" for ViewType.INBOX', () => {
    let title: string;
    title = getMailListTitleByViewType(ViewType.INBOX);
    expect(title).toBe("Inbox");
  });

  it('should return "Send" for ViewType.SEND', () => {
    const title = getMailListTitleByViewType(ViewType.SEND);
    expect(title).toBe("Send");
  });

  it('should return "Deleted" for ViewType.DELETED', () => {
    const title = getMailListTitleByViewType(ViewType.DELETED);
    expect(title).toBe("Deleted");
  });
});

describe("getMailStatusByViewType", () => {
  it("should return MailStatus.INBOX for ViewType.INBOX", () => {
    const status = getMailStatusByViewType(ViewType.INBOX);
    expect(status).toBe(MailStatus.INBOX);
  });

  it("should return MailStatus.SEND for ViewType.SEND", () => {
    const status = getMailStatusByViewType(ViewType.SEND);
    expect(status).toBe(MailStatus.SEND);
  });

  it("should return MailStatus.DELETED for ViewType.DELETED", () => {
    const status = getMailStatusByViewType(ViewType.DELETED);
    expect(status).toBe(MailStatus.DELETED);
  });
});

describe("updateReadStatus", () => {
  it("should update read status for selected mail list item", () => {
    const mailList: IMailListItem[] = [
      { id: "1", userMailStatus: UserMailStatus.READ },
      { id: "2", userMailStatus: UserMailStatus.UN_READ },
      { id: "3", userMailStatus: UserMailStatus.UN_READ },
      { id: "4", userMailStatus: UserMailStatus.READ },
    ] as IMailListItem[];
    const selectedItem = {
      id: "2",
      userMailStatus: UserMailStatus.UN_READ,
    } as IMailListItem;
    const result = updateReadStatus(mailList, selectedItem);
    expect(result[1].userMailStatus).toBe(UserMailStatus.READ);
  });
});
