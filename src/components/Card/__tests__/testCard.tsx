import Card from '@components/Card';
import { Column } from '@models/Column';
import { fireEvent, render, screen } from '@testing-library/react';
import { teamMock1 } from 'src/mocks/team';

describe('card', () => {
  const mockOnClick = jest.fn();

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
    render(
      <Card
        columns={[{ key: 'columnKey', value: 'columnValue' }]}
        id={teamMock1.id}
        onClick={mockOnClick}
      />
    );

    fireEvent.click(screen.getByText('columnKey'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not navigate when card is clicked and there is no onClick', () => {
    expect.assertions(1);
    render(<Card columns={[{ key: 'columnKey', value: 'columnValue' }]} />);

    fireEvent.click(screen.getByText('columnKey'));

    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
