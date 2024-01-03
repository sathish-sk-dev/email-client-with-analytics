import { getThemeColor } from "../../../utils/themeUtils";
import { IEmailCount } from "../interfaces/IEmailCount";
import { IPieChartData } from "../interfaces/IPieChartData";
import { IMailListItem } from "../../../interfaces/IMailListItem";
import { MailStatus } from "../../../enums/MailStatus";
import { capitalizeFirstLetter } from "../../../utils/stringUtils";

const constructEmailCountFromMailList = (mailList: IMailListItem[]) => {
  const initializeEmailCount: IEmailCount = {
    inbox: 0,
    send: 0,
    deleted: 0,
    spam: 0,
  };
  return mailList.reduce((emailCount, item) => {
    switch (item.status) {
      case MailStatus.INBOX:
        emailCount.inbox++;
        break;
      case MailStatus.SEND:
        emailCount.send++;
        break;
      case MailStatus.DELETED:
        emailCount.deleted++;
        break;
      default:
        emailCount.spam++;
    }
    return emailCount;
  }, initializeEmailCount);
};

const getEmailCountColors = (): string[] => {
  const inboxColor = getThemeColor("--inbox-color");
  const sendColor = getThemeColor("--send-color");
  const deletedColor = getThemeColor("--deleted-color");
  const spamColor = getThemeColor("--spam-color");

  return [inboxColor, sendColor, deletedColor, spamColor];
};

const constructEmailCountPieChartData = (
  emailCount: IEmailCount,
): IPieChartData[] => {
  const emailCountKeys = Object.keys(emailCount);
  return emailCountKeys.map((key) => {
    const name = capitalizeFirstLetter(key);
    const value = emailCount[key as keyof IEmailCount];
    return {
      name,
      value,
    };
  });
};

export {
  getEmailCountColors,
  constructEmailCountPieChartData,
  constructEmailCountFromMailList,
};
