import { useEffect, useState } from 'react';

import { Container } from '@components/GlobalComponents';
import Header from '@components/Header';
import List from '@components/List';
import { Team } from '@models/Team';
import { TeamsService } from '@services/teams';

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      <List isLoading={isLoading} items={TeamsService.mapTeamsToItems(teams)} />
    </Container>
  );
};

export default Teams;
