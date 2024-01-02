import { IReceipient } from "../../../interfaces/IReceipient";

export interface IAutoCompleteSuggestion extends IReceipient {
  value: string | number | symbol | null;
  label: string;
}
