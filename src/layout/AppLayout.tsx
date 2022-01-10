import { ReactNode } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Box, useColorModeValue } from '@chakra-ui/react';

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  const color = useColorModeValue('transparent', '#060514');
  return (
    <>
      <Header />
      <Box
        _before={{
          content: '""',
          background: color,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
