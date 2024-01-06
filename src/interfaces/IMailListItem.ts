import { IAttachment } from "./IAttachment";
import { ILabel } from "./ILabel";
import { IReceipient } from "./IReceipient";
import { MailStatus } from "../enums/MailStatus";
import { UserMailStatus } from "../enums/UserMailStatus";

export interface IMailListItem {
  id: string;
  subject: string;
  body: string;
  from: IReceipient;
  receipients: IReceipient[];
  label?: ILabel;
  labelColor?: string;
  attachments?: IAttachment[];
  updatedAt: string;
  status: MailStatus;
  userMailStatus: UserMailStatus;
}
