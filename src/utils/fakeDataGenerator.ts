import { faker } from "@faker-js/faker";
import { MailStatus } from "../enums/MailStatus";
import { UserMailStatus } from "../enums/UserMailStatus";
import { IMailListItem } from "../interfaces/IMailListItem";
import { IReceipient } from "../interfaces/IReceipient";
import { ILabel } from "../interfaces/ILabel";
import { IAttachment } from "../interfaces/IAttachment";

const createReceipient = (): IReceipient => ({
  id: faker.string.uuid(),
  name: faker.internet.displayName(),
  mailId: faker.internet.email(),
  avatar: faker.image.avatar(),
});

const createLabel = (): ILabel => ({
  id: faker.string.uuid(),
  name: faker.internet.domainWord(),
  color: faker.internet.color(),
});

const createAttachment = (): IAttachment => ({
  id: faker.string.uuid(),
  name: faker.system.fileName(),
  size: faker.number.int({ min: 1024, max: 10024 }),
  url: faker.image.url(),
  extension: faker.system.fileType(),
});

const getMailStatus = (): {
  mailStatus: MailStatus;
  userMailStatus: UserMailStatus;
} => {
  const mailStatus = faker.helpers.enumValue(MailStatus);
  let userMailStatus: UserMailStatus;
  if (mailStatus === MailStatus.INBOX) {
    userMailStatus = faker.helpers.enumValue(UserMailStatus);
  } else {
    userMailStatus = UserMailStatus.READ;
  }
  return {
    mailStatus,
    userMailStatus,
  };
};

const createMailListItem = (): IMailListItem => {
  const { mailStatus, userMailStatus } = getMailStatus();
  return {
    id: faker.string.uuid(),
    subject: faker.lorem.words(),
    body: faker.lorem.paragraph({ min: 200, max: 1000 }),
    from: createReceipient(),
    receipients: Array.from(
      { length: faker.number.int({ min: 1, max: 5 }) },
      createReceipient,
    ),
    label: createLabel(),
    labelColor: faker.internet.color(),
    attachments: Array.from(
      { length: faker.number.int({ min: 1, max: 5 }) },
      createAttachment,
    ),
    updatedAt: faker.date.recent().toISOString(),
    status: mailStatus,
    userMailStatus: userMailStatus,
  };
};

const generateMockMailList = (count: number): IMailListItem[] =>
  faker.helpers.multiple(createMailListItem, {
    count,
  });

const generateMockReceipients = (count: number): IReceipient[] =>
  faker.helpers.multiple(createReceipient, {
    count,
  });

export { generateMockMailList, generateMockReceipients };
