import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '@components/Container';
import Header from '@components/Header';
import List from '@components/List';
import { Spinner } from '@components/Spinner';
import { Item } from '@models/Item';
import { Team } from '@models/Team';
import { TeamsService } from '@services/teams';

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const getTeams = useCallback(async () => {
    const response = await TeamsService.getAll();
    setTeams(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getTeams();
  }, [getTeams]);

  const handleClick = (item: Item) => {
    if (item.url) {
      navigate(item.url, {
        state: { user: item.navigationProps },
      });
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <Container>
      <Header showBackButton={false} title="Teams" />
      <List
        isLoading={isLoading}
        items={TeamsService.mapTeamsToItems(teams)}
        onClick={handleClick}
      />
    </Container>
  );
};

export default Teams;
