import { useRoutes } from "react-router-dom";
import { MailRoutes } from "./MailRoutes";

const Routes = () => {
  // @ts-ignore
  return useRoutes([MailRoutes]);
};
export default Routes;
