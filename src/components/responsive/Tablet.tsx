import { FC } from "react";
import { ResponsiveTypeProps } from "./types/ResponsiveTypeProps";
import useTabletMediaQuery from "./hooks/useTabletMediaQuery";

const Tablet: FC<ResponsiveTypeProps> = ({ children }) => {
  const isDesktop = useTabletMediaQuery();
  return isDesktop ? children : null;
};

export default Tablet;
