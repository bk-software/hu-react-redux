import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';
import routes from '../router/routes';

function AboutPage() {
  return (
    <Layout>
      <div>About My app</div>
      <Link to={routes.HOMEPAGE}>Goto Homepage</Link>
    </Layout>
  );
}

export default AboutPage;
