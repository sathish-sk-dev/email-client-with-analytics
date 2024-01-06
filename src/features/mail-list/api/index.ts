import { generateMockMailList } from "../../../utils/fakeDataGenerator";
import { IMailListItem } from "../../../interfaces/IMailListItem";

const fetchMailList = (): Promise<IMailListItem[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const mailList = generateMockMailList(100);
      resolve(mailList);
    } catch (error) {
      reject(error);
    }
  });
};
export { fetchMailList };
