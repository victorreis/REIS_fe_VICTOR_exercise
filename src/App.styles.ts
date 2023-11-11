import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
    margin: 0;
  }

  * {
    font-family: sans-serif;
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 1rem 0 0.5rem 0;
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
  height: 100vh;
`;
