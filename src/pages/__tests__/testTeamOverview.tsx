/* eslint-disable react/jsx-no-literals */
import { FunctionComponent, createElement } from 'react';
import { Route, Routes } from 'react-router-dom';

import TeamOverview from '@pages/TeamOverview';
import { TeamsService } from '@services/teams';
import { UsersService } from '@services/users';
import { render, screen, waitFor } from '@testing-library/react';
import { teamMock1 } from 'src/mocks/team';
import { userMock } from 'src/mocks/user';

describe('teamOverview', () => {
  // const mockUseLocation = jest.fn().mockReturnValue({
  //   user: {
  //     teamName: 'Some Team',
  //   },
  // });
  // const mockUseNavigate = jest.fn();
  // const mockUseParams = jest.fn().mockReturnValue({ teamId: '1' });
  // jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
  //   ...jest.requireActual('react-router-dom'),
  //   useLocation: mockUseLocation,
  //   useNavigate: mockUseNavigate,
  //   useParams: mockUseParams,
  // }));
  // jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
  //   ...jest.requireActual('react-router-dom'),
  //   useLocation: jest.fn().mockImplementation(() => ({
  //     user: {
  //       teamName: 'Some Team',
  //     },
  //   })),
  //   useNavigate: jest.fn().mockImplementation(() => ({})),
  //   useParams: jest.fn().mockImplementation(() => ({ teamId: '1' })),
  // }));

  jest.spyOn(TeamsService, 'getById').mockResolvedValue(teamMock1);
  jest.spyOn(UsersService, 'getById').mockResolvedValue(userMock);
  // jest.spyOn(ALL, 'useParams').mockImplementation(() => ({ teamId: '1' }));

  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    // jest.clearAllMocks();
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render team overview users', async () => {
    expect.hasAssertions();

    // render(
    //   <BrowserRouter>
    //     <TeamOverview />
    //   </BrowserRouter>
    // );

    const renderWithRouter = (component: FunctionComponent<unknown>) => {
      function Wrapper({ children }: React.PropsWithChildren) {
        return (
          <Routes>
            <Route path="teams/1">{children}</Route>
          </Routes>
        );
      }
      render(createElement(component), { wrapper: Wrapper });
      // return {
      //   ...render(component, { wrapper: Wrapper }),
      // };
    };

    // const { queryAllByText } = renderWithRouter(<TeamOverview />);
    renderWithRouter(TeamOverview);

    await waitFor(() => {
      // expect(screen.getByText('userData')).toBeTruthy();
      expect(screen.queryAllByText('userData')).toHaveLength(4);
    });
  });
});
