import { Column } from '@models/Column';
import { Item } from '@models/Item';
import { User } from '@models/User';
import { fetcher } from '@services/fetcher';

const getById = (userId: string): Promise<User> => {
  return fetcher(`users/${userId}`);
};

const mapToColumns = (user: User): Column[] => {
  const columns: Column[] = [
    {
      key: 'Name',
      value: `${user.firstName} ${user.lastName}`,
    },
    {
      key: 'Display Name',
      value: user.displayName,
    },
    {
      key: 'Location',
      value: user.location,
    },
  ];

  return columns;
};

const mapToItem = (user: User): Item => {
  const columns = mapToColumns(user);

  return {
    id: user.id,
    url: `/user/${user.id}`,
    columns,
    navigationProps: user,
  };
};

const mapUsersToItems = (users: User[]): Item[] => {
  return users
    .map(mapToItem)
    .filter((item): item is Item => item !== undefined);
};

const mapTeamLeadToColumns = (user: User): Column[] => {
  const columns: Column[] = [
    {
      key: 'Team Lead',
      value: '',
    },
    {
      key: 'Name',
      value: `${user.firstName} ${user.lastName}`,
    },
    {
      key: 'Display Name',
      value: user.displayName,
    },
    {
      key: 'Location',
      value: user.location,
    },
  ];
  return columns;
};

export const UsersService = {
  getById,
  mapToItem,
  mapUsersToItems,
  mapToColumns,
  mapTeamLeadToColumns,
};
