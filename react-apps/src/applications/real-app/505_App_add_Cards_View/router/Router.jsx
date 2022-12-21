import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage.jsx';
import CardsPage from '../cards/pages/CardsPage';

const router = createBrowserRouter([
  {
    path: routes.HOMEPAGE,
    element: <CardsPage />,
    errorElement: <ErrorPage />,
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
