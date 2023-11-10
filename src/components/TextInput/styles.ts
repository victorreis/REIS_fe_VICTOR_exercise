import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 0.5rem;
`;

export const InputIconsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InputLabel = styled.div`
  margin: 0 0.5rem 0 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin: 0.5rem;
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background-color: white;
  border-width: 1px;
  border-color: #777;
  border-style: solid;
  border-radius: 1rem;
`;
