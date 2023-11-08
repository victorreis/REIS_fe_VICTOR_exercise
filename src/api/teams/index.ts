import { getData } from '@api/fetcher';
import { Team, TeamOverview } from '@models/Team';

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
