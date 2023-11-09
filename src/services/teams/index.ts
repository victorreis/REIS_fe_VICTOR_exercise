import { Team, TeamOverview } from '@models/Team';
import { fetcher } from '@services/fetcher';

const getAll = (): Promise<Team[]> => {
  return fetcher('teams');
};

const getOverviewById = (teamId: string): Promise<TeamOverview> => {
  return fetcher(`teams/${teamId}`);
};

export const TeamsService = {
  getAll,
  getOverviewById,
};
