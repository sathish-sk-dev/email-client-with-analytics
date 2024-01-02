import {
  mailListReducer,
  toggleLoadingMailList,
  setSearchText,
  setUnReadCount,
  setMailList,
  setSearchedMailList,
} from "../mailListSlice";
import { initialMailListState } from "../../initial-state/initialState";
import {
  filterMailListByStatus,
  getMailStatusByViewType,
  getUnReadCount,
} from "../../../features/mail-list/utils/mailListUtils";
import { UserMailStatus } from "../../../enums/UserMailStatus";
import { IMailListItem } from "../../../interfaces/IMailListItem";
import { MailStatus } from "../../../enums/MailStatus";
import { ViewType } from "../../../enums/ViewType";

describe("mailListSlice", () => {
  const mockMailList = [
    {
      id: "1",
      userMailStatus: UserMailStatus.READ,
      status: MailStatus.INBOX,
    },
    {
      id: "2",
      userMailStatus: UserMailStatus.UN_READ,
      status: MailStatus.INBOX,
    },
    {
      id: "3",
      userMailStatus: UserMailStatus.UN_READ,
      status: MailStatus.SEND,
    },
    {
      id: "4",
      userMailStatus: UserMailStatus.READ,
      status: MailStatus.DELETED,
    },
  ] as IMailListItem[];

  it("should toggle loading mail list state", () => {
    const action = toggleLoadingMailList(true);

    const state = mailListReducer(initialMailListState, action);

    expect(state.isLoading).toBe(true);
  });

  it("should set search text", () => {
    const searchText = "survey";
    const action = setSearchText(searchText);

    const state = mailListReducer(initialMailListState, action);

    expect(state.searchText).toBe(searchText);
  });

  it("should set unReadCount based on mail list", () => {
    const action = setUnReadCount(mockMailList);

    const state = mailListReducer(initialMailListState, action);

    const expectedUnReadCount = getUnReadCount(mockMailList);

    expect(state.unReadCount).toBe(expectedUnReadCount);
  });

  it("should set mail list", () => {
    const selectedViewType = ViewType.INBOX;
    const action = setMailList({ selectedViewType, mailList: mockMailList });

    const state = mailListReducer(initialMailListState, action);

    const mailStatus = getMailStatusByViewType(selectedViewType);
    const expectedViewTypeMailList = filterMailListByStatus(
      mockMailList,
      mailStatus,
    );

    expect(state.mailList).toEqual(mockMailList);
    expect(state.mailListByViewType).toEqual(expectedViewTypeMailList);
    expect(state.searchedMailList).toEqual(expectedViewTypeMailList);
    expect(state.searchText).toEqual("");
    const expectedUnReadCount = getUnReadCount(expectedViewTypeMailList);
    expect(state.unReadCount).toEqual(expectedUnReadCount);
  });

  it("should set searched list", () => {
    const action = setSearchedMailList(mockMailList);

    const state = mailListReducer(initialMailListState, action);

    expect(state.searchedMailList).toEqual(mockMailList);
  });
});
