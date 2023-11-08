import { useLocation, useParams } from 'react-router-dom';

import { TeamsService } from '@api/teams';
import { UsersService } from '@api/users';
import Card from '@components/Card';
import { Container } from '@components/GlobalComponents';
import Header from '@components/Header';
import List from '@components/List';
import { Item } from '@models/Item';
import { UserData } from '@models/User';

const mapArray = (users: UserData[]) => {
  return users.map((u) => {
    const columns = [
      {
        key: 'Name',
        value: `${u.firstName} ${u.lastName}`,
      },
      {
        key: 'Display Name',
        value: u.displayName,
      },
      {
        key: 'Location',
        value: u.location,
      },
    ];
    return {
      id: u.id,
      url: `/user/${u.id}`,
      columns,
      navigationProps: u,
    };
  }) as Item[];
};

const mapTLead = (tlead) => {
  const columns = [
    {
      key: 'Team Lead',
      value: '',
    },
    {
      key: 'Name',
      value: `${tlead.firstName} ${tlead.lastName}`,
    },
    {
      key: 'Display Name',
      value: tlead.displayName,
    },
    {
      key: 'Location',
      value: tlead.location,
    },
  ];
  return (
    <Card columns={columns} navigationProps={tlead} url={`/user/${tlead.id}`} />
  );
};

interface PageState {
  teamLead?: UserData;
  teamMembers?: UserData[];
}

const TeamOverview = () => {
  const location = useLocation();
  const { teamId } = useParams();
  const [pageData, setPageData] = React.useState<PageState>({});
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    const getTeamUsers = async () => {
      const { teamLeadId, teamMemberIds = [] } =
        await TeamsService.getOverviewById(teamId);
      const teamLead = await UsersService.getById(teamLeadId);

      const teamMembers = [];
      for (const teamMemberId of teamMemberIds) {
        const data = await UsersService.getById(teamMemberId);
        teamMembers.push(data);
      }
      setPageData({
        teamLead,
        teamMembers,
      });
      setIsLoading(false);
    };
    getTeamUsers();
  }, [teamId]);

  return (
    <Container>
      <Header title={`Team ${location.state.name}`} />
      {!isLoading && mapTLead(pageData.teamLead)}
      <List
        isLoading={isLoading}
        items={mapArray(pageData?.teamMembers ?? [])}
      />
    </Container>
  );
};

export default TeamOverview;
