import { IAutoCompleteSuggestion } from "../../../components/auto-complete-tag/interfaces/IAutoCompleteSuggestion";
import { IReceipient } from "../../../interfaces/IReceipient";
import { IMailListItem } from "../../../interfaces/IMailListItem";
import { ILabel } from "../../../interfaces/ILabel";
import { IAttachment } from "../../../interfaces/IAttachment";
import { MailStatus } from "../../../enums/MailStatus";
import { UserMailStatus } from "../../../enums/UserMailStatus";
import { generateUUID } from "../../../utils/uuidUtils";
import { IUser } from "../../../redux-toolkit/interfaces/IUser";

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

const constructReceipientFromUser = (user: IUser): IReceipient => {
  return {
    name: user.name,
    id: user.id,
    avatar: user.avatar,
    mailId: user.email,
  };
};

const constructMail = (
  subject: string,
  body: string,
  from: IReceipient,
  receipients: IReceipient[],
): IMailListItem => {
  const id = generateUUID();
  const updatedAt = new Date().toISOString();
  const status = MailStatus.SEND;
  const userMailStatus = UserMailStatus.READ;
  return {
    id,
    subject,
    body,
    from,
    receipients,
    updatedAt,
    status,
    userMailStatus,
  };
};

export {
  constructSuggestionsFromReceipients,
  constructMail,
  constructReceipientFromUser,
};
