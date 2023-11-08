import { fireEvent, render, screen } from '@testing-library/react';

import Header from '..';

const mockUseNavigate = jest.fn();

jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('header', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should render header', () => {
    expect.assertions(1);
    render(<Header title="Header" />);

    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('should render back button in header', () => {
    expect.assertions(1);
    render(<Header showBackButton title="Header" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not render back button in header', () => {
    expect.assertions(1);
    render(<Header showBackButton={false} title="Header" />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should navigate back when back button is clicked', () => {
    expect.assertions(1);
    render(<Header showBackButton title="Header" />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockUseNavigate).toHaveBeenCalled();
  });
});
