import { FC } from "react";
import { ResponsiveTypeProps } from "./types/ResponsiveTypeProps";
import useMobileMediaQuery from "./hooks/useMobileMediaQuery";

const Mobile: FC<ResponsiveTypeProps> = ({ children }) => {
  const isDesktop = useMobileMediaQuery();
  return isDesktop ? children : null;
};

export default Mobile;
