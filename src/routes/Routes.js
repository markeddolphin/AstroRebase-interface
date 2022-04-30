import { lazy } from 'react';

import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

const Dashboard = Loadable(lazy(() => import('views/dashboard')));
const Account = Loadable(lazy(() => import('views/account')));
const Swap = Loadable(lazy(() => import('views/swap')));

export const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '',
            element: <Dashboard />
        },
        {
            path: 'account',
            element: <Account />
        },
        {
            path: 'swap',
            element: <Swap />
        }
    ]
};
