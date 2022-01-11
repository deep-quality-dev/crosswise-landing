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

import { withSection } from './withSection';

import { IconBridge, IconSwap, IconTools, IconFarms } from '../icons';

const Feature = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactElement;
  title: string;
  description: string;
}) => {
  return (
    <Box position={'relative'}>
      <Stack
        bg={useColorModeValue(
          'rgba(157, 249, 219, 0.57)',
          'rgba(157, 249, 219, 0.17)'
        )}
        p={{ base: '16px' }}
        borderRadius={'30px'}
        boxShadow={'inset 1px 10px 50px rgba(0, 0, 0, 0.45)'}
        direction={'column'}
        padding={10}
        alignItems={'center'}
        width={'320px'}
        height={'100%'}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          left: '0',
          top: '0',
          right: '0',
          bottom: '0',
          padding: '6px',
          borderRadius: '30px',
          background:
            'linear-gradient(180deg, #04F8AD 0%, #3F81EF 50%, #8750F4 100%)',
          '-webkit-mask':
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          '-webkit-mask-composite': 'destination-out',
        }}
      >
        {icon}
        <Text pt={{ base: 5 }} fontSize={{ base: '2xl' }}>
          {title}
        </Text>
        <Text>{description}</Text>
      </Stack>
    </Box>
  );
};

const Exchange = () => {
  const color = useColorModeValue(
    'linear-gradient(90deg, #04F8AD80 0%, #3F81EF80 50.52%, #8750F480 100%)',
    'linear-gradient(90deg, #04F8AD26 0%, #3F81EF26 50.52%, #8750F426 100%)'
  );
  return (
    <Box bg={color} position={'relative'}>
      <Stack
        as={Container}
        maxW={'7xl'}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 5 }}
        direction={{ base: 'column' }}
        alignItems={'center'}
      >
        <Heading
          as={'h3'}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          maxW={'2xl'}
          fontWeight={'100'}
          textAlign={'center'}
        >
          User-First Unified
          <br />
          Decentralized Exchange
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          pt={{ base: 10, lg: 24 }}
        >
          <Feature
            icon={<Icon as={IconBridge} width={'60px'} height={'53px'} />}
            title={'Cross-Chain Bridges'}
            description={
              'Crosswise will deploy nodes on chosen blockchains to create cross-chain bridges, enabling interoperability across networks. This will enable cross-chain swaps to be executed efficiently.'
            }
          ></Feature>
          <Feature
            icon={<Icon as={IconSwap} width={'60px'} height={'53px'} />}
            title={'Swaps'}
            description={
              'Quick swaps with low fees and slippage - powered by a Hybrid Automated Market-Maker (AMM) using incentivized liquidity pools.'
            }
          ></Feature>
          <Feature
            icon={<Icon as={IconTools} width={'60px'} height={'53px'} />}
            title={'Advanced Tools'}
            description={
              'Switchable DEX interface to utilize limit and stop orders.'
            }
          ></Feature>
          <Feature
            icon={<Icon as={IconFarms} width={'60px'} height={'53px'} />}
            title={'Farms & Liquidity Pools'}
            description={
              'Users are incentivized to provide liquidity with generous rewards in our farms and pools.'
            }
          ></Feature>
        </SimpleGrid>
      </Stack>

      <Box position={'absolute'} bg={color}></Box>
    </Box>
  );
};

export default withSection(Exchange);
