import { UseComposeMailHooks } from "./types/UseComposeMailHooks";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux-toolkit/hooks/hooks";
import { IAutoCompleteSuggestion } from "../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";
import {
  resetComposeMail,
  setBody,
  setReceipients,
  setSelectedReceipients,
  setSubject,
} from "../../redux-toolkit/slices/composeMailSlice";
import { IAppState } from "../../redux-toolkit/interfaces/IAppState";
import { toggleComposeView } from "../../redux-toolkit/slices/appSlice";
import { useEffect } from "react";
import { fetchReceipientsList } from "./api";
import {
  constructMail,
  constructReceipientFromUser,
  constructSuggestionsFromReceipients,
} from "./utils/composeMailUtils";
import { IUser } from "../../redux-toolkit/interfaces/IUser";
import { addMail } from "../../redux-toolkit/slices/mailListSlice";

export const useComposeMail = (): UseComposeMailHooks => {
  const { isLoading, receipients, selectedReceipients, subject, body } =
    useAppSelector((state) => state.composeMailState);
  const { user }: IAppState = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();
  const fromEmailId = user?.email || "";

  useEffect(() => {
    fetchReceipientsList().then((response) => {
      const suggestions = constructSuggestionsFromReceipients(response);
      dispatch(setReceipients(suggestions));
    });
  }, [dispatch]);

  const onAddReceipient = (suggestion: IAutoCompleteSuggestion) => {
    const suggestions = [...selectedReceipients, suggestion];
    dispatch(setSelectedReceipients(suggestions));
  };

  const onDeleteReceipient = (tagIndex: number) => {
    const suggestions = selectedReceipients.filter(
      (_, index) => index !== tagIndex,
    );
    dispatch(setSelectedReceipients(suggestions));
  };

  const onChangeEditorHtml = (html: string) => {
    dispatch(setBody(html));
  };

  const onChangeSubject = (text: string) => {
    dispatch(setSubject(text));
  };

  const resetMail = () => {
    dispatch(resetComposeMail());
  };

  const onClose = () => {
    dispatch(toggleComposeView(false));
  };

  const onSend = () => {
    onClose();
    resetMail();
    const fromReceipient = constructReceipientFromUser(user as IUser);
    const newMail = constructMail(
      subject,
      body,
      fromReceipient,
      selectedReceipients,
    );
    dispatch(addMail(newMail));
  };

  const onDelete = () => {
    onClose();
    resetMail();
  };

  return {
    isLoading,
    editorHtml: body,
    fromEmailId,
    subject,
    suggestions: receipients,
    selectedSuggestions: selectedReceipients,
    onAddReceipient,
    onChangeSubject,
    onChangeEditorHtml,
    onDeleteReceipient,
    onClose,
    onSend,
    onDelete,
  };
};
