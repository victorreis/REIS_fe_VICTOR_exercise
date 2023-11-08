import { useEffect, useState } from 'react';

import { TeamsService } from '@api/teams';
import { Container } from '@components/GlobalComponents';
import Header from '@components/Header';
import List from '@components/List';
import { Item } from '@models/Item';
import { Team } from '@models/Team';

const MapT = (teams: Team[]) => {
  return teams.map((team) => {
    const columns = [
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
  const [teams, setTeams] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<any>(true);

  useEffect(() => {
    const getTeams = async () => {
      const response = await TeamsService.getAll();
      setTeams(response);
      setIsLoading(false);
    };
    getTeams();
  }, []);

  return (
    <Container>
      <Header showBackButton={false} title="Teams" />
      <List isLoading={isLoading} items={MapT(teams)} />
    </Container>
  );
};

export default Teams;
