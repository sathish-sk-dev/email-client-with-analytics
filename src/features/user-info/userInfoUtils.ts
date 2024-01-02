import { UserStatus } from "../../enums/UserStatus";

const getUserStatusText = (userStatus: UserStatus) => {
  if (userStatus === UserStatus.ONLINE) {
    return "ONLINE";
  }
  return "OFFLINE";
};

export { getUserStatusText };
