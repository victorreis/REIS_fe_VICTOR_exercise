import { useCallback, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import Card from '@components/Card';
import { Container } from '@components/Container';
import Header from '@components/Header';
import { Spinner } from '@components/Spinner';
import { NO_PARAMETER_NOR_NAVIGATION_DATA_PASSED } from '@configs/error.messages';
import { Column } from '@models/Column';
import { User } from '@models/User';

import { UsersService } from '../services/users/index';
import { hasAllValuesDefined } from '../utils/objects/objects.utils';

interface UserOverviewLocationState {
  user?: User;
}
interface UserOverviewParams {
  userId?: string;
}

const UserOverview = () => {
  const location = useLocation() as UserOverviewLocationState;
  const params = useParams() as UserOverviewParams;

  const [user, setUser] = useState<User | undefined>();
  const [columns, setColumns] = useState<Column[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getUser = useCallback(async () => {
    if (location.user && hasAllValuesDefined(location.user)) {
      const mappedColumns = UsersService.mapToColumns(location.user);
      setUser(location.user);
      setColumns(mappedColumns);
      setIsLoading(false);
      return;
    }
    if (params?.userId) {
      const fetchedUser = await UsersService.getById(params.userId);
      const mappedColumns = UsersService.mapToColumns(fetchedUser);
      setUser(fetchedUser);
      setColumns(mappedColumns);
      setIsLoading(false);
      return;
    }
    console.error(NO_PARAMETER_NOR_NAVIGATION_DATA_PASSED);
  }, [location.user, params.userId]);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (isLoading) return <Spinner />;
  if (!user || !hasAllValuesDefined(user)) return null;

  return (
    <Container>
      {isLoading ? <Spinner /> : null}
      <Header title={`User ${user.firstName} ${user.lastName}`} />
      {columns ? <Card columns={columns} {...user} /> : null}
    </Container>
  );
};

export default UserOverview;
