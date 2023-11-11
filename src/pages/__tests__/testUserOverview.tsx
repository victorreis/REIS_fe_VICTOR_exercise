import { RouterProvider } from 'react-router-dom';

import { User } from '@models/User';
import { act, render, screen } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import { routes } from 'src/router/routes';

const user: User = {
  id: '371d2ee8-cdf4-48cf-9ddb-04798b79ad9e',
  firstName: 'Randy',
  lastName: 'Funk',
  displayName: 'randyFunk',
  avatarUrl: 'https://cdn.fakercloud.com/avatars/thomasschrijer_128.jpg',
  location: 'West Ericashire',
};

const mockUseLocation = jest.fn().mockReturnValue({
  user,
  location: `users/${user.id}}`,
});
const mockUseNavigate = jest.fn().mockReturnValue({ store: { user: user.id } });

describe('userOverview', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: mockUseLocation,
    useNavigate: mockUseNavigate,
  }));

  it('should render UserOverview', () => {
    expect.assertions(3);
    fetchMock.mockResponse(JSON.stringify(user));
    render(<RouterProvider router={routes} />);

    act(() => {
      expect(screen.getByText(user.firstName)).toBeInTheDocument();
      expect(screen.getByText(user.lastName)).toBeInTheDocument();
      expect(screen.getByText(user.location)).toBeInTheDocument();
    });
  });
});
