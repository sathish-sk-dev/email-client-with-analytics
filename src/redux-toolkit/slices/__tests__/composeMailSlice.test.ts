import { initialComposeMailState } from "../../initial-state/initialState";
import {
  composeMailReducer,
  setBody,
  setReceipients,
  setSelectedReceipients,
  setSubject,
  toggleLoadingComposeMail,
} from "../composeMailSlice";

describe("composeMailSlice", () => {
  const mockInitialState = initialComposeMailState;

  it("should toggle loading state for compose mail", () => {
    const action = toggleLoadingComposeMail(false);

    const state = composeMailReducer(mockInitialState, action);

    expect(state.isLoading).toBe(false);
  });

  it("should set receipients for compose mail", () => {
    const receipients = ["recipient1@example.com", "recipient2@example.com"];
    const action = setReceipients(receipients);

    const state = composeMailReducer(mockInitialState, action);

    expect(state.receipients).toEqual(receipients);
  });

  it("should set subject for compose mail", () => {
    const subject = "Test Subject";
    const action = setSubject(subject);

    const state = composeMailReducer(mockInitialState, action);

    expect(state.subject).toBe(subject);
  });

  it("should set body for compose mail", () => {
    const body = "Test Body Content";
    const action = setBody(body);

    const state = composeMailReducer(mockInitialState, action);

    expect(state.body).toBe(body);
  });

  it("should set selected receipients for compose mail", () => {
    const selectedReceipients = ["selectedRecipient@example.com"];
    const action = setSelectedReceipients(selectedReceipients);

    const state = composeMailReducer(mockInitialState, action);

    expect(state.selectedReceipients).toEqual(selectedReceipients);
  });
});
