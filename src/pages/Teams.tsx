import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '@components/Container';
import Header from '@components/Header';
import List from '@components/List';
import { Spinner } from '@components/Spinner';
import { Item } from '@models/Item';
import { Team } from '@models/Team';
import { TeamsService } from '@services/teams';
import { useSearch } from 'src/hooks/useSearch';

const Teams = () => {
  const navigate = useNavigate();

  const [teams, setTeams] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { itemsToBeShown, renderedSearchInput } = useSearch({
    items: teams,
  });

  const getTeams = useCallback(async () => {
    const response = await TeamsService.getAll();
    setTeams(response);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (teams.length === 0) getTeams();
  }, [getTeams, teams.length]);

  const handleClick = (item: Item) => {
    if (item.url) {
      navigate(item.url, {
        state: { user: item.navigationProps },
      });
    }
  };

  if (isLoading) return <Spinner />;

  return (
    <Container data-testid="123123123">
      <Header showBackButton={false} title="Teams" />

      <h3>Search for teams</h3>
      {renderedSearchInput}

      <List
        isLoading={isLoading}
        items={TeamsService.mapToItems(itemsToBeShown)}
        onClick={handleClick}
      />
    </Container>
  );
};

export default Teams;
