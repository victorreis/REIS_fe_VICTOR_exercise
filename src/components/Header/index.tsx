import { useNavigate } from 'react-router-dom';

import { HeaderContainer, BackButton, Title } from '@components/Header/styles';

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
      <Title>{title}</Title>
      {showBackButton ? (
        <BackButton onClick={handleClick}>🔙</BackButton>
      ) : null}
    </HeaderContainer>
  );
};

export default Header;
