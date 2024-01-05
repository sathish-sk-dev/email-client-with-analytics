import { FC } from "react";
import { ResponsiveTypeProps } from "./types/ResponsiveTypeProps";
import useDesktopMediaQuery from "./hooks/useDesktopMediaQuery";

const Desktop: FC<ResponsiveTypeProps> = ({ children }) => {
  const isDesktop = useDesktopMediaQuery();
  return isDesktop ? children : null;
};

export default Desktop;
