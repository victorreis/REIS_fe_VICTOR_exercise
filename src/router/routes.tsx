import { createBrowserRouter } from 'react-router-dom';

import TeamOverview from '@pages/TeamOverview';
import Teams from '@pages/Teams';
import UserOverview from '@pages/UserOverview';

export const routes = createBrowserRouter([
  {
    path: '/team/:teamId',
    element: <TeamOverview />,
  },
  {
    path: '/user/:useId',
    element: <UserOverview />,
  },
  {
    path: '/',
    element: <Teams />,
  },
]);
