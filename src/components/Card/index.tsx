import { useNavigate } from 'react-router-dom';

import { CardContainer } from '@components/Card/styles';
import { Team } from '@models/Team';
import { UserData } from '@models/User';

export interface CardProps {
  id?: string;
  url?: string;
  columns: Array<{
    key: string;
    value: string;
  }>;
  hasNavigation?: boolean;
  navigationProps?: UserData | Team;
}

const Card = ({
  id,
  columns,
  url,
  hasNavigation = true,
  navigationProps,
}: CardProps): JSX.Element => {
  const navigate = useNavigate();

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
      {columns.map(({ key: columnKey, value }) => (
        <p key={columnKey}>
          <strong>{columnKey}</strong>&nbsp;{value}
        </p>
      ))}
    </CardContainer>
  );
};

export default Card;
