import { IUser } from "../../../redux-toolkit/interfaces/IUser";

export type UserInfoProps = {
  onClose: () => void;
  user: IUser | null;
};
