import { Column } from '@models/Column';
import { Item } from '@models/Item';
import { Team, TeamOverview } from '@models/Team';
import { fetcher } from '@services/fetcher';

const getAll = (): Promise<Team[]> => {
  return fetcher('teams');
};

const getOverviewById = (teamId: string): Promise<TeamOverview> => {
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
    navigationProps: team,
  };
};

const mapTeamsToItems = (teams: Team[]): Item[] => {
  return teams
    .map(mapToItem)
    .filter((item): item is Item => item !== undefined);
};

export const TeamsService = {
  getAll,
  getOverviewById,
  mapToItem,
  mapTeamsToItems,
};
