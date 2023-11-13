import { Item } from '@models/Item';
import { Team } from '@models/Team';
import { User } from '@models/User';
import { hasAllValuesDefined } from '@utils/objects';

const mapToUser = (item: Item): User | null => {
  if (!item.navigationProps) return null;
  if (
    item.navigationProps.type === 'user' &&
    hasAllValuesDefined(item.navigationProps)
  ) {
    return item.navigationProps;
  }
  return null;
};

const mapToTeam = (item: Item): Team | null => {
  if (!item.navigationProps) return null;
  if (
    item.navigationProps.type === 'team' &&
    hasAllValuesDefined(item.navigationProps)
  ) {
    return item.navigationProps;
  }
  return null;
};

export const ItemsService = {
  mapToUser,
  mapToTeam,
};
