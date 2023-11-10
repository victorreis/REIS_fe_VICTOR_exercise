import { Column } from '@models/Column';
import { Item } from '@models/Item';
import { Team } from '@models/Team';
import { fetcher } from '@services/fetcher';

const getAll = (): Promise<Team[]> => {
  return fetcher('teams');
};

const getById = (teamId: string): Promise<Team> => {
  return fetcher(`teams/${teamId}`);
};

const mapToItem = (team: Team): Item => {
  const columns: Column[] = [
    {
      key: 'Name',
      value: team.name,
    },
  ];

  return {
    id: team.id,
    url: `/team/${team.id}`,
    columns,
    navigationProps: { type: 'team', ...team },
  };
};

const mapTeamsToItems = (teams: Team[]): Item[] => {
  return teams
    .map(mapToItem)
    .filter((item): item is Item => item !== undefined);
};

export const TeamsService = {
  getAll,
  getById,
  mapToItem,
  mapTeamsToItems,
};
