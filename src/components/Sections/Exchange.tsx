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
    <Stack
      bg={useColorModeValue('transparent', 'rgba(157, 249, 219, 0.17)')}
      p={{ base: '16px' }}
      border={
        '6px solid linear-gradient(180deg, #04F8AD 0%, #3F81EF 50%, #8750F4 100%)'
      }
      borderRadius={'30px'}
      boxShadow={'inset 1px 10px 50px rgba(0, 0, 0, 0.45)'}
      direction={'column'}
      padding={10}
      alignItems={'center'}
      width={'320px'}
    >
      {icon}
      <Text pt={{ base: 5 }} fontSize={{ base: '2xl' }}>
        {title}
      </Text>
      <Text>{description}</Text>
    </Stack>
  );
};

const Exchange = () => {
  const color = useColorModeValue(
    'gray.100',
    'linear-gradient(90deg, #04F8AD 0%, #3F81EF 50.52%, #8750F4 100%)'
  );
  return (
    <Box position={'relative'}>
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
          textAlign={'center'}
        >
          User-first Unified Decentralized Exchange
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          pt={{ base: 10, lg: 24 }}
        >
          <Feature
            icon={<Icon as={IconBridge} width={'60px'} height={'53px'} />}
            title={'Cross-Chain Bridee'}
            description={
              'Crosswise will employ a node architecture to create cross-chain bridges in order to promote interoperability across blockchain networks. This will enable network swaps to be executed swiftly.'
            }
          ></Feature>
          <Feature
            icon={<Icon as={IconSwap} width={'60px'} height={'53px'} />}
            title={'Swap'}
            description={
              'Quick swap executions with low fees and slippage - powered by a Hybrid Automated Market Maker (AMM) with incentivized liquidity pools.'
            }
          ></Feature>
          <Feature
            icon={<Icon as={IconTools} width={'60px'} height={'53px'} />}
            title={'Advanced tools'}
            description={
              'Switchable DEX interface to utilize limit and stop orders.'
            }
          ></Feature>
          <Feature
            icon={<Icon as={IconFarms} width={'60px'} height={'53px'} />}
            title={'Farms & Liquidity Pools'}
            description={
              'Users are incentivized to provide liquidity with generous liquidity provider rewards in our farms.'
            }
          ></Feature>
        </SimpleGrid>
      </Stack>

      <Box position={'absolute'} bg={color}></Box>
    </Box>
  );
};

export default withSection(Exchange);
