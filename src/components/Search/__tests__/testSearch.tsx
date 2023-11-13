import Search, { SearchItem } from '@components/Search';
import { Item } from '@models/Item';
import { render, screen } from '@testing-library/react';

describe('search', () => {
  const id = '1';
  const initialValue = '';
  const onChange = jest.fn();
  const items: SearchItem<Item>[] = [
    {
      id,
      item: {
        id,
        columns: [
          {
            key: 'columnKey1',
            value: 'columnValue1',
          },
        ],
      },
    },
  ];

  it('should render spinner and not render items when it is loading', () => {
    expect.assertions(1);

    render(<Search items={items} onChange={onChange} value={initialValue} />);

    expect(screen.getByTestId('search-input')).toBeInTheDocument();
  });
});
