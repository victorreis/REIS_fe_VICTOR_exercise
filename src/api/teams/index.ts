import { Team, TeamOverview } from '@models/Team';
import { getData } from '@api/fetcher';

const getAll = (): Promise<Team[]> => {
  return getData('teams');
};

const getOverviewById = (teamId: string): Promise<TeamOverview> => {
  return getData(`teams/${teamId}`);
};

export const TeamsService = {
  getAll,
  getOverviewById,
};
