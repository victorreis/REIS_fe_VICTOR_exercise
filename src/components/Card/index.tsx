import { useNavigate } from 'react-router-dom';

import { CardContainer } from '@components/Card/styles';
import { Column } from '@models/Column';
import { Team } from '@models/Team';
import { User } from '@models/User';

export interface CardProps {
  id?: string;
  url?: string;
  columns: Column[];
  hasNavigation?: boolean;
  navigationProps?: User | Team;
}

const Card = ({
  id,
  columns,
  url,
  hasNavigation = true,
  navigationProps,
}: CardProps): JSX.Element | null => {
  const navigate = useNavigate();
  if (!url || !navigationProps || !columns || columns.length === 0) return null;

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    if (hasNavigation && url) {
      navigate(url, {
        state: navigationProps,
      });
    }
  };

  return (
    <CardContainer
      $hasNavigation={hasNavigation}
      data-testid={`cardContainer-${id}`}
      onClick={handleClick}
    >
      {columns.map(({ key, value }) => (
        <p key={key}>
          <strong>{key}</strong>&nbsp;{value}
        </p>
      ))}
    </CardContainer>
  );
};

export default Card;
