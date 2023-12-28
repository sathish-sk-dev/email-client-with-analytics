import { act, renderHook } from "@testing-library/react";
import { useSearchBar } from "../useSearchBar";
import { ChangeEvent, KeyboardEvent } from "react";
import { UseSearchBarProps } from "../types/UseSearchBarProps";

describe("useSearchBar Hook", () => {
  let onChangeMock: jest.Mock;
  let onSearchMock: jest.Mock;
  let useSearchBarProps: UseSearchBarProps;

  beforeEach(() => {
    onChangeMock = jest.fn();
    onSearchMock = jest.fn();
    useSearchBarProps = {
      inputRef: { current: null },
      searchText: "test",
      onChange: onChangeMock,
      onSearch: onSearchMock,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call onChange with input value when onChangeInput", () => {
    const { result } = renderHook(() =>
      useSearchBar({
        ...useSearchBarProps,
        searchText: "",
      }),
    );

    act(() => {
      result.current.onChangeInput({
        target: { value: "test" },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(useSearchBarProps.onChange).toHaveBeenCalledWith("test");
  });

  it("should call onChange with empty text when onClear", () => {
    const { result } = renderHook(() => useSearchBar(useSearchBarProps));

    act(() => {
      result.current.onClear();
    });

    expect(useSearchBarProps.onChange).toHaveBeenCalledWith("");
  });

  it("should call onSearch on Enter key press", () => {
    const { result } = renderHook(() => useSearchBar(useSearchBarProps));

    act(() => {
      result.current.onKeyDown({ key: "Enter" } as KeyboardEvent<HTMLElement>);
    });

    expect(onSearchMock).toHaveBeenCalled();
  });

  it("should not call onSearch on non-Enter key press", () => {
    const { result } = renderHook(() => useSearchBar(useSearchBarProps));

    act(() => {
      result.current.onKeyDown({ key: "Escape" } as KeyboardEvent<HTMLElement>);
    });

    expect(onSearchMock).not.toHaveBeenCalled();
  });

  it("should set shouldShowCloseIcon to true when searchText is not empty", () => {
    const { result } = renderHook(() => useSearchBar(useSearchBarProps));

    expect(result.current.shouldShowCloseIcon).toBe(true);
  });

  it("should set shouldShowCloseIcon to false when searchText is empty", () => {
    const { result } = renderHook(() =>
      useSearchBar({ ...useSearchBarProps, searchText: "" }),
    );

    expect(result.current.shouldShowCloseIcon).toBe(false);
  });
});
