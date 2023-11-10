import { RouterProvider } from 'react-router-dom';

import { GlobalStyle, PageContainer } from 'src/App.styles';
import { routes } from 'src/router/routes';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <RouterProvider router={routes} />
      </PageContainer>
    </>
  );
};
