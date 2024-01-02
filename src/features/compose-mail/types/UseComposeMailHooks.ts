import { IAutoCompleteSuggestion } from "../../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";

export type UseComposeMailHooks = {
  editorHtml: string;
  suggestions: IAutoCompleteSuggestion[];
  selectedSuggestions: IAutoCompleteSuggestion[];
  subject: string;
  onChangeSubject: (value: string) => void;
  onChangeEditorHtml: (value: string) => void;
  onAdd: (suggestion: IAutoCompleteSuggestion) => void;
  onDelete: (tagIndex: number) => void;
  fromEmailId: string;
  onClose: () => void;
  isLoading: boolean;
};
