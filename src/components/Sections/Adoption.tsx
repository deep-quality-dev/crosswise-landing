import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import ImageAdoption from '@/assets/images/adoption.png';
import { withSection } from './withSection';

const Feature = ({ label }: { label: string }) => {
  // border-image-source: linear-gradient(270deg, #3F81EF 24.48%, #04F8AD 100%);
  return (
    <Box
      bg={useColorModeValue(
        'transparent',
        'linear-gradient(270deg, #3F81EF 24.48%, #04F8AD 100%)'
      )}
      p={{ base: '10px' }}
      borderRadius={'20px'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
    >
      <Text>{label}</Text>
    </Box>
  );
};

const Adoption = () => {
  const color = useColorModeValue(
    'white',
    'linear-gradient(90deg, rgba(4, 248, 173, 0.9) 0%, rgba(63, 129, 239, 0.8) 24.48%, rgba(135, 80, 244, 0.72) 48.96%, rgba(135, 80, 244, 0) 100%)'
  );
  return (
    <Box bg={color} position={'relative'} opacity={'0.8'}>
      <Stack
        as={Container}
        maxW={'7xl'}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 5 }}
        direction={{ base: 'column' }}
        alignItems={'start'}
      >
        <Heading
          as={'h3'}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          maxW={'2xl'}
        >
          Crosswise Finance
        </Heading>
        <Heading
          as={'h3'}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          maxW={'2xl'}
          fontWeight={'400'}
        >
          Facilitating DeFi Adoption
        </Heading>
        <HStack spacing={'10'}>
          <Feature label={'Cost-Effective'}></Feature>
          <Feature label={'Performance'}></Feature>
          <Feature label={'UI/UX Optimized'}></Feature>
        </HStack>
        <SimpleGrid columns={2}>
          <Text fontSize={{ base: '2xl' }}>
            In spite of accelerated innovation & development, decentralized
            exchanges have yet to find a perfect balance between transactional
            speed, cost & user experience.
          </Text>
        </SimpleGrid>
      </Stack>
      {/* <Box position={'absolute'} left={'0px'} top={'0px'} width={'100%'}>
        <Image src={ImageAdoption} objectFit={'cover'} alt={'Adoption'} />
      </Box> */}
    </Box>
  );
};

export default withSection(Adoption);
