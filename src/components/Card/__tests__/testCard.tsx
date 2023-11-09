import Card from '@components/Card';
import { Column } from '@models/Column';
import { Team } from '@models/Team';
import { fireEvent, render, screen } from '@testing-library/react';

const mockUseNavigate = jest.fn();

jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('card', () => {
  const url = 'path';

  it('should render card with single column', () => {
    expect.assertions(2);
    const columns: Column[] = [{ key: 'columnKey', value: 'columnValue' }];
    render(<Card columns={columns} />);

    expect(screen.getByText('columnKey')).toBeInTheDocument();
    expect(screen.getByText('columnValue')).toBeInTheDocument();
  });

  it('should render card with multiple columns', () => {
    expect.assertions(7);
    const columns: Column[] = [
      { key: 'columnKey1', value: 'columnValue1' },
      { key: 'columnKey2', value: 'columnValue2' },
      { key: 'columnKey3', value: 'columnValue3' },
      { key: 'columnKey4', value: '' },
    ];
    render(<Card columns={columns} />);

    expect(screen.getByText('columnKey1')).toBeInTheDocument();
    expect(screen.getByText('columnValue1')).toBeInTheDocument();
    expect(screen.getByText('columnKey2')).toBeInTheDocument();
    expect(screen.getByText('columnValue2')).toBeInTheDocument();
    expect(screen.getByText('columnKey3')).toBeInTheDocument();
    expect(screen.getByText('columnValue3')).toBeInTheDocument();
    expect(screen.getByText('columnKey4')).toBeInTheDocument();
  });

  it('should navigate when card is clicked and navigation is enabled', () => {
    expect.assertions(1);
    const navProps: Team = {
      id: '1',
      name: 'Team 1',
    };
    render(
      <Card
        columns={[{ key: 'columnKey', value: 'columnValue' }]}
        navigationProps={navProps}
        url={url}
      />
    );

    fireEvent.click(screen.getByText('columnKey'));

    expect(mockUseNavigate).toHaveBeenCalledWith(url, { state: navProps });
  });

  it('should not navigate when card is clicked and navigation is disabled', () => {
    expect.assertions(1);
    render(
      <Card
        columns={[{ key: 'columnKey', value: 'columnValue' }]}
        hasNavigation={false}
      />
    );

    fireEvent.click(screen.getByText('columnKey'));

    expect(mockUseNavigate).not.toHaveBeenCalled();
  });
});
