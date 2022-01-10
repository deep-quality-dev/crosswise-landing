import type { NextPage } from 'next';
import About from '@/components/Sections/About';
import Adoption from '@/components/Sections/Adoption';
import DApp from '@/components/Sections/DApp';
import LearnMore from '@/components/Sections/LearnMore';
import { AppLayout } from '@/layout/AppLayout';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <DApp></DApp>
      <LearnMore></LearnMore>
      <About></About>
      <Adoption></Adoption>
    </AppLayout>
  );
};

export default Home;
