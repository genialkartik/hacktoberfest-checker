import React from 'react';
import { Suspense, lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import LoadingScreen from '../components/LoadingScreen';

const Loadable = (Component) => (props) => {
  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...{
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed',
            },
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Routers() {
  return useRoutes([
    {
      path: '/',
      element: <LandingPage />,
      // children: [{ path: '', element: <LandingPage /> }],
    },
  ]);
}

const LandingPage = Loadable(lazy(() => import('../components/LandingPage')));
