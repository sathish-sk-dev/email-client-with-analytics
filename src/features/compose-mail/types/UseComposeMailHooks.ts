import { IAutoCompleteSuggestion } from "../../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";

export type UseComposeMailHooks = {
  isOpenComposeView: boolean;
  editorHtml: string;
  suggestions: IAutoCompleteSuggestion[];
  selectedSuggestions: IAutoCompleteSuggestion[];
  subject: string;
  onChangeSubject: (value: string) => void;
  onChangeEditorHtml: (value: string) => void;
  onAddReceipient: (suggestion: IAutoCompleteSuggestion) => void;
  onDeleteReceipient: (tagIndex: number) => void;
  fromEmailId: string;
  onClose: () => void;
  isLoading: boolean;
  onSend: () => void;
  onDelete: () => void;
};
