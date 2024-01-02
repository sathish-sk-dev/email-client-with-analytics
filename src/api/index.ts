import { IUser } from "../redux-toolkit/interfaces/IUser";
import { generateMockUser } from "../utils/fakeDataGenerator";

const fetchUserDetails = (): Promise<IUser> => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = generateMockUser();
      resolve(user);
    } catch (error) {
      reject(error);
    }
  });
};

export { fetchUserDetails };
