import { Item } from '@models/Item';
import Card from '@components/Card';
import { Spinner } from '@components/Spinner';
import { Container } from './styles';

interface Props {
  items?: Item[];
  hasNavigation?: boolean;
  isLoading: string;
}

const List = ({ items, hasNavigation = true, isLoading }: Props) => {
  return (
    <Container>
      {isLoading && <Spinner />}
      {!isLoading &&
        items.map(({ url, id, columns, navigationProps }, index) => {
          return (
            <Card
              key={`${id}-${index}`}
              id={id}
              columns={columns}
              navigationProps={navigationProps}
              hasNavigation={hasNavigation}
              url={url}
            />
          );
        })}
    </Container>
  );
};

export default List;
