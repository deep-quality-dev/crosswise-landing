import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import {
  IconCrosswine,
  IconGasless,
  IconIntegrated,
  IconUserFriendly,
} from '@/components/icons';
import { Logo } from '../Logo';
import { withSection } from './withSection';

const Feature = ({
  icon,
  label,
}: {
  icon: React.ReactElement;
  label: string;
}) => {
  return (
    <Stack
      as={Container}
      p={{ base: '17px' }}
      spacing={{ base: '17px' }}
      direction={'row'}
      alignItems={'center'}
      bg={useColorModeValue(
        'transparent',
        'linear-gradient(89.98deg, rgba(245, 247, 250, 0.12) 0.02%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0) 99.99%);'
      )}
      borderRadius={'10'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
    >
      {icon}
      <Text>{label}</Text>
    </Stack>
  );
};

const About = () => {
  const color = useColorModeValue('gray.100', '#060514');
  return (
    <Box bg={color}>
      <Stack
        as={Container}
        maxW={'7xl'}
        h={{ base: '100%', lg: '100vh' }}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 10, lg: 24 }}
        direction={{ base: 'column' }}
        alignItems={'center'}
      >
        <Box>
          <Logo width={'160'} height={'145'} />
        </Box>
        <Heading
          as={'h3'}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          maxW={'2xl'}
        >
          About Crosswise
        </Heading>
        <Text fontSize={{ base: '2xl' }}>
          A next generation cross-chain decentralized exchange with integrated
          trading tools & incentives.
        </Text>
        <SimpleGrid columns={{ base: 2 }} spacing={8}>
          <Feature
            icon={<Icon as={IconUserFriendly} />}
            label="User Friendly"
          ></Feature>
          <Feature
            icon={<Icon as={IconCrosswine} />}
            label="Cross Chain"
          ></Feature>
          <Feature
            icon={<Icon as={IconGasless} />}
            label="Gasless Mode"
          ></Feature>
          <Feature
            icon={<Icon as={IconIntegrated} />}
            label="Integrated Tools"
          ></Feature>
        </SimpleGrid>
        <Text fontSize={{ base: '2xl' }} align={'center'}>
          Crosswise Finance is inspired by the intention to integrate CeFi tools
          into DeFi in order to drive greater integration & interoperability and
          facilitate mass adoption.
        </Text>
      </Stack>
    </Box>
  );
};

export default withSection(About);
