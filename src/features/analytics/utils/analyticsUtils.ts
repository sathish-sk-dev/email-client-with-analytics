import { getThemeColor } from "../../../utils/themeUtils";
import { IEmailCount } from "../interfaces/IEmailCount";
import { IPieChartData } from "../interfaces/IPieChartData";
import { IMailListItem } from "../../../interfaces/IMailListItem";
import { MailStatus } from "../../../enums/MailStatus";
import { capitalizeFirstLetter } from "../../../utils/stringUtils";
import { KeyValueData } from "../../../types/KeyValueData";
import { IDashboardItem } from "../interfaces/IDashboardItem";
import { FC, SVGProps } from "react";
import { IconType } from "../../../assets/svg/types/IconType";

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

const getIconByEmailCountKey = (type: keyof IEmailCount) => {
  switch (type) {
    case "inbox":
      return IconType.MAIL_OPEN_SOLID;
    case "send":
      return IconType.SEND_SOLID;
    case "deleted":
      return IconType.DELETE_SOLID;
    case "spam":
      return IconType.SPAM_SOLID;
  }
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

const getDashboardItems = (
  emailCount: IEmailCount,
  mailList: IMailListItem[],
): IDashboardItem[] => {
  const emailCountKeys = Object.keys(emailCount);
  const totalMailsItem = {
    icon: IconType.MAIL_SOLID,
    title: "Total Mails",
    count: mailList.length,
  };
  const dashboardItemsByEmailCount = emailCountKeys.map((key) => {
    const title = capitalizeFirstLetter(key);
    const count = emailCount[key as keyof IEmailCount];
    const icon = getIconByEmailCountKey(key as keyof IEmailCount);
    return {
      icon,
      title,
      count,
    };
  });
  return [totalMailsItem, ...dashboardItemsByEmailCount];
};

const getEmailDistributionColors = (): KeyValueData[] => {
  const inboxColor = getThemeColor("--inbox-color");
  const sendColor = getThemeColor("--send-color");
  const deletedColor = getThemeColor("--deleted-color");
  const spamColor = getThemeColor("--spam-color");

  return [
    { key: "inbox", value: inboxColor },
    { key: "send", value: sendColor },
    { key: "deleted", value: deletedColor },
    { key: "spam", value: spamColor },
  ];
};

export {
  getEmailCountColors,
  constructEmailCountPieChartData,
  constructEmailCountFromMailList,
  getEmailDistributionColors,
  getDashboardItems,
};
