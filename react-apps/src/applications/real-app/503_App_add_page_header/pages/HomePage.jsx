import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

function HomePage() {
  return (
    <Layout>
      <div>Homepage</div>
      <Link to={routes.ABOUT_PAGE}>About Page</Link>
    </Layout>
  );
}

export default HomePage;
