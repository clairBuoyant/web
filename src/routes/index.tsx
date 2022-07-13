import { Globe } from '@clairbuoyant/worldwind-react';
import { useRoutes } from 'react-router-dom';

import { publicRoutes } from './public';

export default function AppRoutes() {
  // TODO: handle auth flow
  // const auth = useAuth();

  const commonRoutes = [
    {
      element: <Globe />,
      path: '/',
    },
  ];

  // const routes = auth.user ? protectedRoutes : publicRoutes;

  const element = useRoutes([...publicRoutes, ...commonRoutes]);

  return element;
}
