import { UserData } from '@models/User';
import { fetcher } from '@services/fetcher';

const getById = (userId: string): Promise<UserData> => {
  return fetcher(`users/${userId}`);
};

export const UsersService = {
  getById,
};
