import { IMailListItem } from "../../../../interfaces/IMailListItem";
import {
  filterMailListByStatus,
  getMailListSearchKeys,
  getUnReadCount,
} from "../MailListUtils";
import { UserMailStatus } from "../../../../enums/UserMailStatus";
import { MailStatus } from "../../../../enums/MailStatus";

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
