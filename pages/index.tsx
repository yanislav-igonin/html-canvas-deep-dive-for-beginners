import { Canvas, Layout } from '@components';
import { pulse } from 'animation';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return <Layout>
    <Canvas draw={pulse} />
  </Layout>;
};

export default HomePage;
