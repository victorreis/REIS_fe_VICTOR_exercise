import Header from '@components/Header';
import { fireEvent, render, screen } from '@testing-library/react';

const mockUseNavigate = jest.fn();

jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('header', () => {
  const header = 'Header';

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
    render(<Header title={header} />);

    expect(screen.getByText('Header')).toBeInTheDocument();
  });

  it('should render back button in header', () => {
    expect.assertions(1);
    render(<Header showBackButton title={header} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should not render back button in header', () => {
    expect.assertions(1);
    render(<Header showBackButton={false} title={header} />);

    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('should navigate back when back button is clicked', () => {
    expect.assertions(1);
    render(<Header showBackButton title={header} />);

    fireEvent.click(screen.getByRole('button'));

    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
  });
});
