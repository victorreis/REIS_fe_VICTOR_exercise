import styled from 'styled-components';

export const HeaderContainer = styled.div`
  height: 5rem;
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const NavigationHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem;
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  width: 5rem;
  height: 3rem;
  outline: 0;
  border: 1px solid #777777;
  border-radius: 1rem;
`;
