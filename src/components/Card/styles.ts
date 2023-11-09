import styled from 'styled-components';

export const CardContainer = styled.div<{ $clickable: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background: #ddd;
  padding: 20px;
  width: 250px;
  max-height: 200px;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  margin: 5px;
`;
