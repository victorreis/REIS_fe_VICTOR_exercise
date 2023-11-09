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

  return (
    <CardContainer
      data-testid={`cardContainer-${id}`}
      hasNavigation={hasNavigation}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (hasNavigation && url) {
          navigate(url, {
            state: navigationProps,
          });
        }
        e.preventDefault();
      }}
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
