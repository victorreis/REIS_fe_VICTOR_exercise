import Card from '@components/Card';
import { ListContainer } from '@components/List/styles';
import { Spinner } from '@components/Spinner';
import { Item } from '@models/Item';

export type ListProps = {
  items?: Item[];
  isLoading: boolean;
  onClick?: (item: Item) => void;
};

const List = ({ items, isLoading, onClick }: ListProps) => {
  const hasItems = items && items.length > 0;
  const showItems = !isLoading && hasItems;
  const showEmptyListMessage = !isLoading && !hasItems;

  const handleClick = (item: Item) => () => {
    if (onClick) onClick(item);
  };

  return (
    <ListContainer>
      {isLoading ? <Spinner /> : null}

      {showItems
        ? items.map((item) => (
            <Card key={item.id} onClick={handleClick(item)} {...item} />
          ))
        : null}
      {showEmptyListMessage ? <>No items to show.</> : null}
    </ListContainer>
  );
};

export default List;
