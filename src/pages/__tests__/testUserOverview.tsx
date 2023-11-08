import React from 'react';

import UserOverview from '@pages/UserOverview';
import { render, screen } from '@testing-library/react';

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

describe('userOverview', () => {
  it('should render UserOverview', () => {
    render(<UserOverview />);

    expect(screen.getByText('Test User')).toBeInTheDocument();
    expect(screen.getByText('userName')).toBeInTheDocument();
    expect(screen.getByText('location')).toBeInTheDocument();
  });
});
