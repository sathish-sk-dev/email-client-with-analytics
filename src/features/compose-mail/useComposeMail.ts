import { UseComposeMailHooks } from "./types/UseComposeMailHooks";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux-toolkit/hooks/hooks";
import { IAutoCompleteSuggestion } from "../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";
import {
  setBody,
  setReceipients,
  setSelectedReceipients,
  setSubject,
} from "../../redux-toolkit/slices/composeMailSlice";
import { IAppState } from "../../redux-toolkit/interfaces/IAppState";
import { toggleComposeView } from "../../redux-toolkit/slices/appSlice";
import { useEffect } from "react";
import { fetchReceipientsList } from "../mail-details/api";
import { constructSuggestionsFromReceipients } from "./utils/composeMailUtils";

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
  }, []);

  const onAdd = (suggestion: IAutoCompleteSuggestion) => {
    const suggestions = [...selectedReceipients, suggestion];
    dispatch(setSelectedReceipients(suggestions));
  };

  const onDelete = (tagIndex: number) => {
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

  const onClose = () => {
    dispatch(toggleComposeView(false));
  };

  return {
    isLoading,
    editorHtml: body,
    fromEmailId,
    subject,
    suggestions: receipients,
    selectedSuggestions: selectedReceipients,
    onAdd,
    onChangeSubject,
    onChangeEditorHtml,
    onDelete,
    onClose,
  };
};
