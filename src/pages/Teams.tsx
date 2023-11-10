import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from '@components/Container';
import Header from '@components/Header';
import List from '@components/List';
import Search from '@components/Search';
import { Spinner } from '@components/Spinner';
import { Item } from '@models/Item';
import { Team } from '@models/Team';
import { TeamsService } from '@services/teams';

const Teams = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [teams, setTeams] = useState<Team[]>([]);
  const [teamsToBeShown, setTeamsToBeShown] = useState<Team[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const getTeams = useCallback(async () => {
    const response = await TeamsService.getAll();
    setTeams(response);
    setTeamsToBeShown(response);
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

  const handleSearchChange = (newValue: string, filteredTeams: Team[]) => {
    setSearchValue(newValue);
    setTeamsToBeShown(filteredTeams);
  };

  if (isLoading) return <Spinner />;

  const searchItems = teams.map((team) => ({ id: team.id, item: team }));
  return (
    <Container>
      <Header showBackButton={false} title="Teams" />
      <Search
        items={searchItems}
        onChange={handleSearchChange}
        value={searchValue}
      />
      <List
        isLoading={isLoading}
        items={TeamsService.mapToItems(teamsToBeShown)}
        onClick={handleClick}
      />
    </Container>
  );
};

export default Teams;
