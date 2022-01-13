import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import { withSection } from './withSection';

const Feature = ({ label }: { label: string }) => {
  return (
    <Box
      position={'relative'}
      zIndex={0}
      borderRadius={'20px'}
      width={'fit-content'}
      overflow={'hidden'}
      padding={'1px'}
    >
      <Box
        position={'absolute'}
        left={0}
        top={0}
        zIndex={-1}
        width={'100%'}
        height={'100%'}
        backgroundImage={
          'linear-gradient(270deg, #3F81EF 24.48%, #04F8AD 100%)'
        }
      ></Box>
      <Box
        borderRadius={'20px'}
        backgroundColor={'rgba(0, 184, 185)'}
        padding={'5px 10px'}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        <Text color={'#04F8AD'}>{label}</Text>
      </Box>
    </Box>
  );
};

const Adoption = () => {
  const color =
    'linear-gradient(90deg, rgba(4, 248, 173, 0.9) 0%, rgba(63, 129, 239, 0.8) 24.48%, rgba(135, 80, 244, 0.72) 48.96%, rgba(135, 80, 244, 0) 100%), url("/images/adoption.png")';
  return (
    <Box
      position={'relative'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      bgImage={color}
      color={'white'}
    >
      <Stack
        as={Container}
        maxW={'7xl'}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 5 }}
        direction={{ base: 'column' }}
        alignItems={'start'}
        justifyContent={'center'}
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
        <HStack spacing={'10'} pt={{ base: 5 }}>
          <Feature label={'Cost-Effective'}></Feature>
          <Feature label={'Performance'}></Feature>
          <Feature label={'UI/UX Optimized'}></Feature>
        </HStack>
        <SimpleGrid columns={2}>
          <Text fontSize={{ base: '2xl' }} fontWeight={'light'}>
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
