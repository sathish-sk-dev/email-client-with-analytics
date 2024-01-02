import configureMockStore from "redux-mock-store";
import { RootState } from "../redux-toolkit/store/store";

const mockStore = configureMockStore();

export const createTestStore = (initialState?: RootState) => {
  return mockStore(initialState);
};
