import {
  useAppDispatch,
  useAppSelector,
} from "../../redux-toolkit/hooks/hooks";
import { UseMailDetailsHooks } from "./types/UseMailDetailsHooks";
import { IMailListState } from "../../redux-toolkit/interfaces/IMailListState";
import { setSelectedMailItem } from "../../redux-toolkit/slices/mailListSlice";
import { IUser } from "../../redux-toolkit/interfaces/IUser";

export const useMailDetails = (): UseMailDetailsHooks => {
  const { selectedMailItem }: IMailListState = useAppSelector(
    (state) => state.mailListState,
  );
  const { user } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  const onClose = () => {
    dispatch(setSelectedMailItem(null));
  };

  return {
    selectedMailItem,
    onClose,
    user: user as IUser,
  };
};
