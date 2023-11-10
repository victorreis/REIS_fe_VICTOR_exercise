import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Card from '@components/Card';
import { Container } from '@components/Container';
import Header from '@components/Header';
import List from '@components/List';
import { Spinner } from '@components/Spinner';
import { Item } from '@models/Item';
import { Team } from '@models/Team';
import { User } from '@models/User';
import { ItemsService } from '@services/items';
import { TeamsService } from '@services/teams';
import { UsersService } from '@services/users';

type PageData = {
  team?: Team;
  teamLead?: User;
  teamMembers?: User[];
};

// type TeamOverviewLocation = {
//   team?: Partial<Team>;
// };

type TeamOverviewParams = {
  teamId?: string;
};

const TeamOverview = () => {
  // const location = useLocation() as TeamOverviewLocation;
  // console.log('>>>', { location });
  const params = useParams() as TeamOverviewParams;
  const navigate = useNavigate();

  const [pageData, setPageData] = useState<PageData>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTeamUsers = useCallback(async () => {
    if (!params.teamId) return;

    const team = await TeamsService.getById(params.teamId);
    const teamLead = await UsersService.getById(team.teamLeadId);
    const teamMembers = await Promise.all(
      team.teamMemberIds.map((teamMemberId) =>
        UsersService.getById(teamMemberId)
      )
    );

    setPageData({
      team,
      teamLead,
      teamMembers,
    });
    setIsLoading(false);
  }, [params.teamId]);

  useEffect(() => {
    getTeamUsers();
  }, [getTeamUsers, params.teamId]);

  if (isLoading) return <Spinner />;
  if (!pageData.teamLead) return null;
  if (!pageData.teamMembers) return null;

  const handleClickTeamLead = () => {
    if (!pageData.teamLead) return;

    navigate(`/user/${pageData.teamLead?.id}`, {
      state: { user: pageData.teamLead },
    });
  };

  const handleClickUsers = (item: Item) => {
    navigate(`/user/${item?.id}`, {
      state: { user: ItemsService.mapToUser(item) },
    });
  };

  const teamMembersView = pageData.teamMembers ? (
    <List
      isLoading={isLoading}
      items={UsersService.mapUsersToItems(pageData.teamMembers)}
      onClick={handleClickUsers}
    />
  ) : (
    <Spinner />
  );

  return (
    <Container>
      <Header title={`Team ${pageData.team?.name}`} />

      <Card
        columns={UsersService.mapTeamLeadToColumns(pageData.teamLead)}
        onClick={handleClickTeamLead}
        {...pageData.teamLead}
      />
      {teamMembersView}
    </Container>
  );
};

export default TeamOverview;
