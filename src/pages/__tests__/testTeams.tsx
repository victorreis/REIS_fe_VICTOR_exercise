import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from '@testing-library/react';
import Teams from '@pages/Teams';
import { TeamsService } from '@api/teams';

jest.mock('react-router-dom', () => ({
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

describe('Teams', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render spinner while loading', async () => {
    // TODO - Add code for this test
  });

  it('should render teams list', async () => {
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
