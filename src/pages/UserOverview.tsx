import { useLocation } from 'react-router-dom';

import Card from '@components/Card';
import { Container } from '@components/GlobalComponents';
import Header from '@components/Header';
import { User } from '@models/User';
import { hasAllValuesDefined } from '@utils/objects';

import { UsersService } from '../services/users/index';

export interface LocationState {
  state?: Partial<User>;
}

const UserOverview = () => {
  const { state: user } = useLocation() as LocationState;
  if (!hasAllValuesDefined(user)) return null;

  const columns = UsersService.mapToColumns(user);

  return (
    <Container>
      <Header title={`User ${user.firstName} ${user.lastName}`} />
      {columns ? (
        <Card columns={columns} hasNavigation={false} navigationProps={user} />
      ) : null}
    </Container>
  );
};

export default UserOverview;
