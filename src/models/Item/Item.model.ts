import { Column } from '@models/Column';
import { Team } from '@models/Team';
import { User } from '@models/User';

export interface Item {
  id: string;
  url?: string;
  columns: Column[];
  navigationProps?: User | Team;
}
