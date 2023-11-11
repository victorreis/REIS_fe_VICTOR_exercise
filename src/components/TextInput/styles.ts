import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.5rem;
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
  margin-bottom: 0;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid #777;
  border-radius: 1rem;
`;
