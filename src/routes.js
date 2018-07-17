import Home from './pages/Home/index';
import NotFound from './pages/NotFound/index';

export default [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
  },
];
