import { IReceipient } from "../../interfaces/IReceipient";
import { IAutoCompleteSuggestion } from "../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";

export interface IComposeMailState {
  isLoading: boolean;
  subject: string;
  body: string;
  receipients: IAutoCompleteSuggestion[];
  selectedReceipients: IAutoCompleteSuggestion[];
}
