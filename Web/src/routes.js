import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const SystemDashboard = Loadable({
    loader: () => import('./views/System/Dashboard'),
    loading: Loading,
});

const Users = Loadable({
  loader: () => import('./views/System/Users/Users'),
  loading: Loading,
});

const User = Loadable({
    loader: () => import('./views/System/Users/User'),
  loading: Loading,
});

const CreateUser = Loadable({
    loader: () => import('./views/System/Users/Create'),
    loading: Loading,
});

const Accounts = Loadable({
    loader: () => import('./views/Accounts/Accounts'),
    loading: Loading,
});

const Records = Loadable({
  loader: () => import('./views/Records/Records'),
  loading: Loading,
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },

  { path: '/system', exact: true, name: 'System', component: Users },
  { path: '/system/dashboard', exact: true, name: 'Dashboard', component: SystemDashboard },
  { path: '/system/users', exact: true,  name: 'Users', component: Users },
  { path: '/system/users/:id', exact: true, name: 'User Details', component: User },
  { path: '/system/userscreate', exact: true, name: 'Create User', component: CreateUser },
    
  { path: '/accounts', name: '账户中心', component: Accounts },
  { path: '/records', name: '财务记录', component: Records },
];

export default routes;