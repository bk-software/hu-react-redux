import Layout from '../layout/Layout';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Layout>
      <div>About My app</div>
      <Link to="/">Goto Homepage</Link>
    </Layout>
  );
}

export default AboutPage;
