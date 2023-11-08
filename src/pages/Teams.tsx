import * as React from 'react';
import { Item } from '@models/Item';
import { Team } from '@models/Team';
import { TeamsService } from '@api/teams';
import Header from '@components/Header';
import List from '@components/List';
import { Container } from '@components/GlobalComponents';

var MapT = (teams: Team[]) => {
  return teams.map((team) => {
    var columns = [
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
    } as Item;
  });
};

const Teams = () => {
  const [teams, setTeams] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState<any>(true);

  React.useEffect(() => {
    const getTeams = async () => {
      const response = await TeamsService.getAll();
      setTeams(response);
      setIsLoading(false);
    };
    getTeams();
  }, []);

  return (
    <Container>
      <Header title="Teams" showBackButton={false} />
      <List items={MapT(teams)} isLoading={isLoading} />
    </Container>
  );
};

export default Teams;
