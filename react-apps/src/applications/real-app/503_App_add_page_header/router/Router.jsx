import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: routes.HOMEPAGE,
    element: <HomePage />,
  },
  {
    path: routes.ABOUT_PAGE,
    element: <AboutPage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
