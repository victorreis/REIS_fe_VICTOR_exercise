import Teams from '@pages/Teams';
import { TeamsService } from '@services/teams';
import { render, screen, waitFor } from '@testing-library/react';

jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      firstName: 'Test',
      lastName: 'User',
      displayName: 'userName',
      location: 'location',
    },
  }),
  useNavigate: () => ({}),
}));

describe('teams', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it.todo('should render spinner while loading');

  it('should render teams list', async () => {
    expect.assertions(2);
    jest.spyOn(TeamsService, 'getAll').mockResolvedValue([
      {
        id: '1',
        name: 'Team1',
      },
      {
        id: '2',
        name: 'Team2',
      },
    ]);

    render(<Teams />);

    await waitFor(() => {
      expect(screen.getByText('Team1')).toBeInTheDocument();
    });
    expect(screen.getByText('Team2')).toBeInTheDocument();
  });
});
