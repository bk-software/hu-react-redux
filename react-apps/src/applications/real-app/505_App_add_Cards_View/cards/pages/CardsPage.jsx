import Layout from '../../layout/Layout';
import PageHeader from '../../components/PageHeader';
import Cards from '../components/Cards';

function CardsPage() {
  return (
    <Layout>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />

      <Cards />
    </Layout>
  );
}

export default CardsPage;
