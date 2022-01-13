import {
  Box,
  Container,
  Flex,
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
      p={{ base: '17px' }}
      spacing={{ base: '17px' }}
      direction={'row'}
      alignItems={'center'}
      bg={useColorModeValue(
        'linear-gradient(89.98deg, #F5F7FA 0.02%, #FFFFFF 50%, #FFFFFF 99.99%)',
        'linear-gradient(89.98deg, rgba(245, 247, 250, 0.12) 0.02%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0) 99.99%) #25272C'
      )}
      borderRadius={'10'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
    >
      <Flex
        padding={'10px'}
        width={'48px'}
        height={'48px'}
        justifyContent={'center'}
        alignItems={'center'}
        position={'relative'}
      >
        {icon}
        <Box
          opacity={'0.1'}
          position={'absolute'}
          left={'0px'}
          right={'0px'}
          top={'0px'}
          bottom={'0px'}
          bg={'rgba(22, 184, 184, 0.3)'}
          borderRadius={'50%'}
        />
      </Flex>
      <Text>{label}</Text>
    </Stack>
  );
};

const About = () => {
  const color = useColorModeValue('gray.100', '#060514');
  return (
    <Box bg={color} position={'relative'} zIndex={0}>
      <Stack
        as={Container}
        maxW={'7xl'}
        minH={1000}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 10, lg: 24 }}
        direction={{ base: 'column' }}
        alignItems={'center'}
        bg={useColorModeValue(
          'transparent',
          'radial-gradient(20% 25% at 50% 22%, rgba(40, 94, 176, 0.31) 0%, rgba(6, 19, 31, 0) 100%)'
        )}
      >
        <Box>
          <Logo width={'160'} height={'145'} />
        </Box>
        <Heading
          as={'h3'}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          fontWeight={{ base: '400' }}
          maxW={'2xl'}
        >
          About Crosswise
        </Heading>
        <Text fontSize={{ base: '2xl' }} textAlign={'center'}>
          A next generation cross-chain decentralized exchange
          <br />
          with integrated trading tools & incentives.
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
        <Text
          fontSize={{ base: '2xl' }}
          align={'center'}
          color={{ base: '#606060' }}
        >
          Crosswise Finance aims to combine CeFi and DeFi, enhance
          interoperability, and drive mass adoption.
        </Text>
      </Stack>

      <Box
        position={'absolute'}
        bg={"url('/images/pattern-top-right.png')"}
        bgRepeat={'no-repeat'}
        top={0}
        left={'80%'}
        right={'0%'}
        bottom={'0%'}
        zIndex={-1}
      ></Box>

      <Box
        position={'absolute'}
        bg={"url('/images/pattern-top-right.png')"}
        bgRepeat={'no-repeat'}
        transform={'rotate(180deg)'}
        top={0}
        left={'0%'}
        right={'80%'}
        bottom={'0%'}
        zIndex={-1}
      ></Box>
    </Box>
  );
};

export default withSection(About);
