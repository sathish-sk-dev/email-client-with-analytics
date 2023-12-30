import { IAutoCompleteSuggestion } from "../interfaces/IAutoCompleteSuggestion";

export type AutoCompleteTagProps = {
  suggestions: IAutoCompleteSuggestion[];
  selectedSuggestions: IAutoCompleteSuggestion[];
  onAdd: (newTag: IAutoCompleteSuggestion) => void;
  onDelete: (index: number) => void;
  placeholderText: string;
  noSuggestionsText: string;
};
