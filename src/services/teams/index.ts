import { Column } from '@models/Column';
import { Item } from '@models/Item';
import { Team, TeamOverview } from '@models/Team';
import { fetcher } from '@services/fetcher';
import { hasAllValuesDefined } from '@utils/objects';

const getAll = (): Promise<Team[]> => {
  return fetcher('teams');
};

const getOverviewById = (teamId: string): Promise<TeamOverview> => {
  return fetcher(`teams/${teamId}`);
};

const mapToItem = (team?: Partial<Team> | undefined): Item | undefined => {
  if (!team || !hasAllValuesDefined(team)) return undefined;

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

const mapTeamsToItems = (teams?: Partial<Team>[]): Item[] => {
  if (!teams) return [];

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
