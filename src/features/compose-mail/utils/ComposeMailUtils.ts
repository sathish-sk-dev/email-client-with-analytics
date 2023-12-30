import { IAutoCompleteSuggestion } from "../../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";
import { IReceipient } from "../../../interfaces/IReceipient";

const constructSuggestionsFromReceipients = (
  receipients: IReceipient[],
): IAutoCompleteSuggestion[] => {
  return receipients.map((receipient) => {
    const { id, name } = receipient;
    const suggestion: IAutoCompleteSuggestion = {
      value: id,
      label: name,
    };
    return suggestion;
  });
};

export { constructSuggestionsFromReceipients };
