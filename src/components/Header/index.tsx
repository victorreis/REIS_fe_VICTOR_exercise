import { useNavigate } from 'react-router-dom';

import { HeaderContainer, NavigationHeader, BackButton, Title } from './styles';

export interface HeaderProps {
  title: string;
  showBackButton?: boolean;
}

const Header = ({ title, showBackButton = true }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <NavigationHeader>
        {showBackButton ? (
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          >
            🔙
          </BackButton>
        ) : null}
        <Title>{title}</Title>
      </NavigationHeader>
    </HeaderContainer>
  );
};

export default Header;
