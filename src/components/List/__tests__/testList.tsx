import List from '@components/List';
import { Item } from '@models/Item';
import { render, screen } from '@testing-library/react';

jest.mock<typeof import('react-router-dom')>('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('list', () => {
  it('should render spinner and not render items when it is loading', () => {
    expect.assertions(2);
    const items: Item[] = [
      {
        id: '1',
        columns: [
          {
            key: 'columnKey1',
            value: 'columnValue1',
          },
        ],
      },
    ];
    render(<List isLoading items={items} />);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.queryByTestId('cardContainer')).not.toBeInTheDocument();
  });

  it('should not render spinner and render items when it is not loading', () => {
    expect.assertions(2);
    const items: Item[] = [
      {
        id: '1',
        columns: [
          {
            key: 'columnKey1',
            value: 'columnValue1',
          },
        ],
      },
    ];
    render(<List isLoading={false} items={items} />);

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    expect(screen.getByTestId('cardContainer-1')).toBeInTheDocument();
  });

  it('should render multiple card when multiple items', () => {
    expect.assertions(2);
    const items: Item[] = [
      {
        id: '1',
        columns: [
          {
            key: 'columnKey1',
            value: 'columnValue1',
          },
        ],
      },
      {
        id: '2',
        columns: [
          {
            key: 'columnKey2',
            value: 'columnValue2',
          },
        ],
      },
    ];
    render(<List isLoading={false} items={items} />);

    expect(screen.getByTestId('cardContainer-1')).toBeInTheDocument();
    expect(screen.getByTestId('cardContainer-2')).toBeInTheDocument();
  });
});
