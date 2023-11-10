import { Column } from '@models/Column';
import { Team } from '@models/Team';
import { User } from '@models/User';

export type Item = {
  id: string;
  url?: string;
  columns: Column[];
  navigationProps?: ({ type: 'user' } & User) | ({ type: 'team' } & Team);
};
