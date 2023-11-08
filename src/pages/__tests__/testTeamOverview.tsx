import { TeamsService } from '@api/teams';
import { UsersService } from '@api/users';
import TeamOverview from '@pages/TeamOverview';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
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

describe('teamOverview', () => {
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
    expect.assertions(1);
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
      .mockResolvedValueOnce({} as any);
    jest.spyOn(UsersService, 'getById').mockResolvedValueOnce({} as any);

    render(<TeamOverview />);

    await waitFor(() => {
      expect(screen.queryAllByText('userData')).toHaveLength(4);
    });
  });
});
