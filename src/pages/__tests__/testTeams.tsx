import { RouterProvider } from 'react-router-dom';

import { TeamsService } from '@services/teams';
import { render, screen, waitFor } from '@testing-library/react';
import { teamsMock } from 'src/mocks/team';
import { routes } from 'src/router/routes';

describe('teams', () => {
  const mockUseLocation = jest.fn().mockReturnValue({
    user: {
      firstName: 'Test',
      lastName: 'User',
      displayName: 'userName',
      location: 'location',
    },
  });
  const mockUseNavigate = jest.fn().mockReturnValue({});

  jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: mockUseLocation,
    useNavigate: mockUseNavigate,
  }));

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
    jest.spyOn(TeamsService, 'getAll').mockResolvedValue(teamsMock);

    render(<RouterProvider router={routes} />);

    await waitFor(() => {
      teamsMock.forEach((team) => {
        expect(screen.getByText(team.name)).toBeInTheDocument();
      });
    });
  });
});
