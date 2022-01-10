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
    <Box position={'relative'}>
      <Box
        bg={useColorModeValue(
          'transparent',
          'rgba(0, 184, 185, 0.17)' // 'linear-gradient(270deg, #3F81EF 24.48%, #04F8AD 100%)'
        )}
        p={{ base: '10px' }}
        borderRadius={'20px'}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          left: '0',
          top: '0',
          right: '0',
          bottom: '0',
          padding: '1px',
          borderRadius: '20px',
          background: 'linear-gradient(270deg, #3F81EF 24.48%, #04F8AD 100%)',
          '-webkit-mask':
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          '-webkit-mask-composite': 'destination-out',
        }}
      >
        <Text>{label}</Text>
      </Box>
    </Box>
  );
};

const Adoption = () => {
  const color = useColorModeValue(
    'transparent, url("/images/adoption.png")',
    'linear-gradient(90deg, rgba(4, 248, 173, 0.9) 0%, rgba(63, 129, 239, 0.8) 24.48%, rgba(135, 80, 244, 0.72) 48.96%, rgba(135, 80, 244, 0) 100%), url("/images/adoption.png")'
  );
  return (
    <Box
      position={'relative'}
      opacity={'0.8'}
      bgRepeat={'no-repeat'}
      bgSize={'cover'}
      bgImage={color}
    >
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
        <HStack spacing={'10'} pt={{ base: 5 }}>
          <Feature label={'Cost-Effective'}></Feature>
          <Feature label={'Performance'}></Feature>
          <Feature label={'UI/UX Optimized'}></Feature>
        </HStack>
        <SimpleGrid columns={2}>
          <Text fontSize={{ base: '2xl' }}>
            Crosswise Finance bridges the gap between centralised and
            decentralized exchanges, bringing together the best of both worlds.
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
