import { FC } from "react";
import { IProviderWrapperProps } from "./IProviderWrapperProps";
import { ThemeProvider } from "../../contexts/theme-provider/ThemeProvider";

export const ProviderWrapper: FC<IProviderWrapperProps> = (props) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};
