import { useMediaQuery } from "react-responsive";
import ResponsiveMediaQuery from "../enums/ResponsiveMediaQuery";

const useDesktopMediaQuery = () => {
  return useMediaQuery({ query: ResponsiveMediaQuery.DESKTOP });
};

export default useDesktopMediaQuery;
