import Card from '@components/Card';
import { Spinner } from '@components/Spinner';
import { Item } from '@models/Item';

import { Container } from './styles';

export interface ListProps {
  items?: Item[];
  hasNavigation?: boolean;
  isLoading: string;
}

const List = ({ items, hasNavigation = true, isLoading }: ListProps) => {
  return (
    <Container>
      {isLoading ? <Spinner /> : null}
      {!isLoading &&
        items.map(({ url, id, columns, navigationProps }, index) => {
          return (
            <Card
              key={`${id}-${index}`}
              columns={columns}
              hasNavigation={hasNavigation}
              id={id}
              navigationProps={navigationProps}
              url={url}
            />
          );
        })}
    </Container>
  );
};

export default List;
