import { CardContainer, CardItem } from '@components/Card/styles';
import { Column } from '@models/Column';

export type CardProps = {
  id?: string;
  columns: Column[];
  onClick?: () => void;
};

const Card = ({ id, columns, onClick }: CardProps): JSX.Element | null => {
  if (!columns || columns.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) onClick();
  };

  return (
    <CardContainer
      $clickable={Boolean(onClick)}
      data-testid={`cardContainer-${id}`}
      onClick={handleClick}
    >
      {columns.map(({ key, value }) => (
        <CardItem key={key}>
          <strong>{key}</strong>
          {value}
        </CardItem>
      ))}
    </CardContainer>
  );
};

export default Card;
