import { useNavigate } from 'react-router-dom';

import {
  HeaderContainer,
  NavigationHeader,
  BackButton,
  Title,
} from '@components/Header/styles';

export type HeaderProps = {
  title: string;
  showBackButton?: boolean;
};

const Header = ({ title, showBackButton = true }: HeaderProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <HeaderContainer>
      <NavigationHeader>
        {showBackButton ? (
          <BackButton onClick={handleClick}>🔙</BackButton>
        ) : null}
        <Title>{title}</Title>
      </NavigationHeader>
    </HeaderContainer>
  );
};

export default Header;
