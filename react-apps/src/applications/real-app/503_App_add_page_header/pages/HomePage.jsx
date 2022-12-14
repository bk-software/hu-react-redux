import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Layout>
      <div>Homepage</div>
      <Link to="/about">About Page</Link>
    </Layout>
  );
}

export default HomePage;
