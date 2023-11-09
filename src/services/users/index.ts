import { Column } from '@models/Column';
import { Item } from '@models/Item';
import { User } from '@models/User';
import { fetcher } from '@services/fetcher';
import { hasAllValuesDefined } from '@utils/objects';

const getById = (userId: string): Promise<User> => {
  return fetcher(`users/${userId}`);
};

const mapToColumns = (
  user?: Partial<User> | undefined
): Column[] | undefined => {
  if (!user || !hasAllValuesDefined(user)) return undefined;

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

const mapToItem = (user?: Partial<User> | undefined): Item | undefined => {
  if (!user || !hasAllValuesDefined(user)) return undefined;
  const columns = mapToColumns(user);
  if (!columns) return undefined;

  return {
    id: user.id,
    url: `/user/${user.id}`,
    columns,
    navigationProps: user,
  };
};

const mapUsersToItems = (users?: Partial<User>[] | undefined): Item[] => {
  if (!users) return [];

  return users
    .map(mapToItem)
    .filter((item): item is Item => item !== undefined);
};

const mapTeamLeadToColumns = (user?: Partial<User> | undefined): Column[] => {
  if (!user || !hasAllValuesDefined(user)) return [];

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
