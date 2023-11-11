import styled from 'styled-components';

export const CardContainer = styled.div<{ $clickable: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 15rem;
  padding: 1rem;
  margin: 0.25rem;

  background-color: #dddddd;
  border: 1px solid #777777;
  border-radius: 1rem;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
`;
