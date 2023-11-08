import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import TeamOverview from '@pages/TeamOverview';
import { TeamsService } from '@api/teams';
import { UsersService } from '@api/users';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      teamName: 'Some Team',
    },
  }),
  useNavigate: () => ({}),
  useParams: () => ({
    teamId: '1',
  }),
}));

describe('TeamOverview', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render team overview users', async () => {
    const teamOverview = {
      id: '1',
      teamLeadId: '2',
      teamMemberIds: ['3', '4', '5'],
    };
    const userData = {
      id: '2',
      firstName: 'userData',
      lastName: 'userData',
      displayName: 'userData',
      location: '',
      avatar: '',
    };
    jest
      .spyOn(TeamsService, 'getOverviewById')
      .mockImplementationOnce(() => Promise.resolve({} as any));
    jest
      .spyOn(UsersService, 'getById')
      .mockImplementationOnce(() => Promise.resolve({} as any));

    render(<TeamOverview />);

    await waitFor(() => {
      expect(screen.queryAllByText('userData')).toHaveLength(4);
    });
  });
});
