import { IUser } from "../../interfaces/IUser";
import { IUserStatus } from "../../../interfaces/IUserStatus";
import {
  appReducer,
  setSelectedViewType,
  setUser,
  toggleLoading,
  toggleTheme,
} from "../appSlice";
import { ViewType } from "../../../enums/ViewType";
import { Theme } from "../../../contexts/theme-provider/enums/Theme";
import { initialAppState } from "../../initial-state/initialState";

describe("appSlice", () => {
  const mockInitialState = initialAppState;
  const mockUser: IUser = {
    id: "37506019-f757-4c09-9346-3ce268db565b",
    name: "Sathish Kumar",
    email: "sathishsk.dev@gmail.com",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/563.jpg",
    status: IUserStatus.ONLINE,
  };

  it("should toggle loading state", () => {
    const action = toggleLoading(false);

    const state = appReducer(mockInitialState, action);

    expect(state.isLoading).toBe(false);
  });

  it("should toggle theme", () => {
    const newTheme = Theme.DARK;
    const action = toggleTheme(newTheme);

    const state = appReducer(mockInitialState, action);

    expect(state.theme).toBe(newTheme);
  });

  it("should set user", () => {
    const action = setUser(mockUser);

    const state = appReducer(mockInitialState, action);

    expect(state.user).toBe(mockUser);
  });

  it("should set selected view type", () => {
    const newViewType = ViewType.SEND;

    const action = setSelectedViewType(newViewType);

    const state = appReducer(mockInitialState, action);

    expect(state.selectedViewType).toBe(newViewType);
  });
});
