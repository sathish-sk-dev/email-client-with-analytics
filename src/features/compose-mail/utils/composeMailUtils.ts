import { IAutoCompleteSuggestion } from "../../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";
import { IReceipient } from "../../../interfaces/IReceipient";

/**
 * Constructs autocomplete suggestions from an array of receipients.
 * @param {IReceipient[]} receipients - The array of receipients to construct suggestions from.
 * @returns {IAutoCompleteSuggestion[]} - The array of autocomplete suggestions.
 */
const constructSuggestionsFromReceipients = (
  receipients: IReceipient[],
): IAutoCompleteSuggestion[] => {
  return receipients.map((receipient) => {
    const { id, name } = receipient;
    const suggestion: IAutoCompleteSuggestion = {
      value: id,
      label: name,
      ...receipient,
    };
    return suggestion;
  });
};

export { constructSuggestionsFromReceipients };
