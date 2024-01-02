import { UserStatus } from "../../enums/UserStatus";

export interface IUser {
  id: string;
  name: string;
  email: string;
  avatar: string;
  status: UserStatus;
}
