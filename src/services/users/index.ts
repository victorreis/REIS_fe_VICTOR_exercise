import { User } from '@models/User';
import { fetcher } from '@services/fetcher';

const getById = (userId: string): Promise<User> => {
  return fetcher(`users/${userId}`);
};

export const UsersService = {
  getById,
};
