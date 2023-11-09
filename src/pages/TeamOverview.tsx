import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Card from '@components/Card';
import { Container } from '@components/GlobalComponents';
import Header from '@components/Header';
import List from '@components/List';
import { User } from '@models/User';
import { TeamsService } from '@services/teams';
import { UsersService } from '@services/users';
import { hasAllValuesDefined } from '@utils/objects';

interface PageState {
  teamLead?: User;
  teamMembers?: User[];
}

export interface LocationState {
  state?: { name?: string };
}

const TeamOverview = () => {
  const { state } = useLocation() as LocationState;
  const { teamId } = useParams();
  const [pageData, setPageData] = useState<PageState>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTeamUsers = async () => {
      if (!teamId) return;

      const { teamLeadId, teamMemberIds = [] } =
        await TeamsService.getOverviewById(teamId);
      const teamLead = await UsersService.getById(teamLeadId);

      const teamMembers = await Promise.all(
        teamMemberIds.map(async (teamMemberId) =>
          UsersService.getById(teamMemberId)
        )
      );

      setPageData({
        teamLead,
        teamMembers,
      });
      setIsLoading(false);
    };
    getTeamUsers();
  }, [teamId]);

  if (!teamId || !hasAllValuesDefined(state)) return null;

  return (
    <Container>
      <Header title={`Team ${state.name}`} />
      {!isLoading && (
        <Card
          columns={UsersService.mapTeamLeadToColumns(pageData.teamLead)}
          navigationProps={pageData.teamLead}
          url={`/user/${pageData.teamLead?.id}`}
        />
      )}
      <List
        isLoading={isLoading}
        items={UsersService.mapUsersToItems(pageData.teamMembers)}
      />
    </Container>
  );
};

export default TeamOverview;
