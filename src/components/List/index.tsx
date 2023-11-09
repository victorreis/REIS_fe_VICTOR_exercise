import Card from '@components/Card';
import { ListContainer } from '@components/List/styles';
import { Spinner } from '@components/Spinner';
import { Item } from '@models/Item';

export interface ListProps {
  items?: Item[];
  hasNavigation?: boolean;
  isLoading: boolean;
}

const List = ({ items, hasNavigation = true, isLoading }: ListProps) => {
  const hasItems = items && items.length > 0;
  const showItems = !isLoading && hasItems;
  const showEmptyListMessage = !isLoading && !hasItems;

  return (
    <ListContainer>
      {isLoading ? <Spinner /> : null}

      {showItems
        ? items.map(({ url, id, columns, navigationProps }) => (
            <Card
              key={id}
              columns={columns}
              hasNavigation={hasNavigation}
              id={id}
              navigationProps={navigationProps}
              url={url}
            />
          ))
        : null}
      {showEmptyListMessage ? <>No items to show.</> : null}
    </ListContainer>
  );
};

export default List;
