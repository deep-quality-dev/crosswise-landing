import type { NextPage } from 'next';
import About from '@/components/Sections/About';
import Adoption from '@/components/Sections/Adoption';
import DApp from '@/components/Sections/DApp';
import LearnMore from '@/components/Sections/LearnMore';
import Solutions from '@/components/Sections/Solutions';
import Exchange from '@/components/Sections/Exchange';
import RoadMap from '@/components/Sections/RoadMap';
import Token from '@/components/Sections/Token';
import { AppLayout } from '@/layout/AppLayout';
import TechnicalPartner from '@/components/Sections/TechnicalPartner';
import CoreTeam from '@/components/Sections/CoreTeam';

const Home: NextPage = () => {
  return (
    <AppLayout>
      <DApp></DApp>
      <LearnMore></LearnMore>
      <About></About>
      <Adoption></Adoption>
      <Solutions></Solutions>
      <Exchange></Exchange>
      <RoadMap></RoadMap>
      <Token></Token>
      <TechnicalPartner></TechnicalPartner>
      <CoreTeam></CoreTeam>
    </AppLayout>
  );
};

export default Home;
