import {
  mailListReducer,
  toggleLoadingMailList,
  setSearchText,
  setUnReadCount,
  setMailList,
  setSearchedMailList,
} from "../mailListSlice";
import { initialMailListState } from "../../initial-state/initialState";
import { getUnReadCount } from "../../../features/mail-list/utils/MailListUtils";
import { UserMailStatus } from "../../../enums/UserMailStatus";
import { IMailListItem } from "../../../interfaces/IMailListItem";

describe("mailListSlice", () => {
  const mockMailList = [
    { id: "1", userMailStatus: UserMailStatus.READ },
    { id: "2", userMailStatus: UserMailStatus.UN_READ },
    { id: "3", userMailStatus: UserMailStatus.UN_READ },
    { id: "4", userMailStatus: UserMailStatus.READ },
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
    const action = setMailList(mockMailList);

    const state = mailListReducer(initialMailListState, action);

    expect(state.mailList).toEqual(mockMailList);
  });

  it("should set searched list", () => {
    const action = setSearchedMailList(mockMailList);

    const state = mailListReducer(initialMailListState, action);

    expect(state.searchedMailList).toEqual(mockMailList);
  });
});
