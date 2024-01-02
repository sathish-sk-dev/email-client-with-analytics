import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { Provider } from "react-redux";
import { mockInitialState } from "./mockInitialState";
import { createTestStore } from "./mockStore";
import { ProviderWrapper } from "../components/provider-wrapper/ProviderWrapper";
import { RootState } from "../redux-toolkit/store/store";

const mockStore = createTestStore(mockInitialState);

const AllTheProviders = ({ children }: any) => {
  return (
    <Provider store={mockStore}>
      <ProviderWrapper> {children} </ProviderWrapper>
    </Provider>
  );
};

const customRender = (ui: ReactElement, options?: RenderOptions) => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

const customRenderHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderOptions,
) => {
  const { ...restOptions } = options || {};
  return renderHook(callback, {
    // @ts-ignore
    wrapper: AllTheProviders,
    ...restOptions,
  });
};

const getRootState = (): RootState => {
  return mockStore.getState() as RootState;
};

// re-export everything
export * from "@testing-library/react";

// override render method
export {
  customRender as render,
  customRenderHook as renderHook,
  mockStore,
  getRootState,
};
