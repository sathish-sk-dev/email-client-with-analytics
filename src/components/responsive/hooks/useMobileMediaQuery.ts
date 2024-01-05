import { useMediaQuery } from "react-responsive";
import ResponsiveMediaQuery from "../enums/ResponsiveMediaQuery";

const useMobileMediaQuery = () => {
  return useMediaQuery({ query: ResponsiveMediaQuery.MOBILE });
};

export default useMobileMediaQuery;
