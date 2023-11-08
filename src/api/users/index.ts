import { UserData } from '@models/User';
import { getData } from '@api/fetcher';

const getById = (userId: string): Promise<UserData> => {
  return getData(`users/${userId}`);
};

export const UsersService = {
  getById,
};
