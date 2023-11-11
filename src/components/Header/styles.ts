import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  min-height: 5rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
  padding: 0.5rem 3rem;
  border-bottom: 1px solid #777777;
  background-color: #dddddd;
`;

export const Title = styled.h1`
  margin: 0;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 2rem;
  cursor: pointer;
  width: 5rem;
  height: 3rem;
  outline: 0;
  border: 1px solid #777777;
  border-radius: 1rem;

  &:hover {
    background-color: #cccccc;
  }
`;
