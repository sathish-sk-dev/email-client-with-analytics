import { ReactTags } from "react-tag-autocomplete";
import { FC } from "react";
import { AutoCompleteTagProps } from "./types/AutoCompleteTagProps";
import "./auto-complete-tag.scss";

export const AutoCompleteTag: FC<AutoCompleteTagProps> = ({
  suggestions,
  selectedSuggestions,
  onAdd,
  onDelete,
  placeholderText,
  noSuggestionsText,
}) => {
  return (
    <ReactTags
      placeholderText={placeholderText}
      selected={selectedSuggestions}
      suggestions={suggestions}
      // @ts-ignore
      onAdd={onAdd}
      onDelete={onDelete}
      labelText={"To :"}
      allowNew
    />
  );
};
