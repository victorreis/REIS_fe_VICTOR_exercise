import * as React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Card from '@components/Card';
import { Container } from '@components/GlobalComponents';
import Header from '@components/Header';
import List from '@components/List';
import { Item } from '@models/Item';
import { UserData } from '@models/User';
import { TeamsService } from '@api/teams';
import { UsersService } from '@api/users';

var mapArray = (users: UserData[]) => {
  return users.map((u) => {
    var columns = [
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

var mapTLead = (tlead) => {
  var columns = [
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
    <Card columns={columns} url={`/user/${tlead.id}`} navigationProps={tlead} />
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
    var getTeamUsers = async () => {
      const { teamLeadId, teamMemberIds = [] } =
        await TeamsService.getOverviewById(teamId);
      const teamLead = await UsersService.getById(teamLeadId);

      const teamMembers = [];
      for (var teamMemberId of teamMemberIds) {
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
        items={mapArray(pageData?.teamMembers ?? [])}
        isLoading={isLoading}
      />
    </Container>
  );
};

export default TeamOverview;
