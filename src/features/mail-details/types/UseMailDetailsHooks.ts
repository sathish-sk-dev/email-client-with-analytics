import { IMailListItem } from "../../../interfaces/IMailListItem";
import { IUser } from "../../../redux-toolkit/interfaces/IUser";

export type UseMailDetailsHooks = {
  selectedMailItem: IMailListItem | null;
  onClose: () => void;
  user: IUser | null;
};
