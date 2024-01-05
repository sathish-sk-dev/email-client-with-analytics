import { useMediaQuery } from "react-responsive";
import ResponsiveMediaQuery from "../enums/ResponsiveMediaQuery";

const useTabletMediaQuery = () => {
  return useMediaQuery({ query: ResponsiveMediaQuery.TABLET });
};

export default useTabletMediaQuery;
