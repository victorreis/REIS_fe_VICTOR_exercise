import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
  }

  * {
    font-family: sans-serif;
  }
`;

export const ContainerScroll = styled.div`
  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #777777;
  }

  &::-webkit-scrollbar-track {
    background: #aaaaaa;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #777777cc;
  }

  &::-webkit-scrollbar-track:hover {
    background: #aaaaaacc;
  }
`;

export const PageContainer = styled(ContainerScroll)`
  padding: 0 2rem;
  height: 100vh;
`;
