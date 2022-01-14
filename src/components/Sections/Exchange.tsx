import React from 'react';
import { useInView } from 'react-intersection-observer';
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
import { zoomInAnimation } from '@/constants/animations';
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
    <Box
      position={'relative'}
      zIndex={0}
      borderRadius={'30px'}
      overflow={'hidden'}
      padding={'6px'}
      width={'fit-content'}
      cursor={'pointer'}
      height={'320px'}
    >
      <Box
        position={'absolute'}
        left={0}
        top={0}
        zIndex={-1}
        width={'332px'}
        height={'100%'}
        backgroundImage={
          'linear-gradient(180deg, #04F8AD 0%, #3F81EF 50%, #8750F4 100%)'
        }
      ></Box>

      <Box
        borderRadius={'25px'}
        backgroundColor={useColorModeValue('#cefced', '#0e263e')}
        boxShadow={useColorModeValue(
          '1px 10px 50px 0px #00000073 inset',
          'inset 1px 10px 50px rgba(0, 0, 0, 0.45)'
        )}
        width={{ base: '270px', md: '320px' }}
        height={'100%'}
        padding={'30px'}
        fontWeight={'600'}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        textAlign={'center'}
      >
        {icon}
        <Text
          pt={{ base: '30px' }}
          fontWeight={{ base: '400' }}
          fontSize={'20px'}
          color={useColorModeValue('#2C09E2', '#ffffff')}
        >
          {title}
        </Text>
        <Text
          pt={{ base: '30px' }}
          fontWeight={{ base: '300' }}
          fontSize={{ base: '13px' }}
          color={useColorModeValue('#2C09E2', '#ffffff')}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

const Exchange = () => {
  const color = useColorModeValue(
    'linear-gradient(90deg, #04F8AD80 0%, #3F81EF80 50.52%, #8750F480 100%)',
    'linear-gradient(90deg, #04F8AD26 0%, #3F81EF26 50.52%, #8750F426 100%)'
  );
  const [ref, inView] = useInView();
  return (
    <Box bg={color} position={'relative'} ref={ref}>
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
          as={'span'}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          maxW={'2xl'}
          fontWeight={{ base: '300' }}
          textAlign={'center'}
        >
          <Text fontWeight={{ base: '400' }}>User-First Unified</Text>
          Decentralized Exchange
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          pt={{ base: 10, lg: 24 }}
          animation={inView ? zoomInAnimation : ''}
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
