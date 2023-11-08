import { Team } from '@models/Team';
import { UserData } from '@models/User';

export interface ListItemColumn {
  key: string;
  value: string;
}

export interface Item {
  id: string;
  url?: string;
  columns: Array<ListItemColumn>;
  navigationProps?: UserData | Team;
}
