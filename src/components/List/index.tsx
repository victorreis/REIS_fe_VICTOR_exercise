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
  const showItems = !isLoading && items && items.length > 0;

  return (
    <ListContainer>
      {isLoading ? <Spinner /> : null}

      {showItems ? (
        items.map(({ url, id, columns, navigationProps }) => {
          return (
            <Card
              key={id}
              columns={columns}
              hasNavigation={hasNavigation}
              id={id}
              navigationProps={navigationProps}
              url={url}
            />
          );
        })
      ) : (
        <>No items to show.</>
      )}
    </ListContainer>
  );
};

export default List;
