import { getData } from '@api/fetcher';
import { UserData } from '@models/User';

const getById = (userId: string): Promise<UserData> => {
  return getData(`users/${userId}`);
};

export const UsersService = {
  getById,
};
