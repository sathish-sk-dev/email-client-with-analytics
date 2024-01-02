import { generateMockReceipients } from "../../../utils/fakeDataGenerator";
import { IReceipient } from "../../../interfaces/IReceipient";

const fetchReceipientsList = (): Promise<IReceipient[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      const receipients = generateMockReceipients(100);
      resolve(receipients);
    } catch (error) {
      reject(error);
    }
  });
};
export { fetchReceipientsList };
