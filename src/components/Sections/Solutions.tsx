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
import Image from 'next/image';
import React, { useState } from 'react';

import { withSection } from './withSection';

import ImageRocket from '@/assets/images/rocket.png';
import { IconArrowDown } from '../icons';

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <Stack
      p={{ base: '17px' }}
      spacing={{ base: '17px' }}
      direction={'column'}
      alignItems={'center'}
      bg={useColorModeValue(
        'transparent',
        'linear-gradient(89.98deg, rgba(245, 247, 250, 0.12) 0.02%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0) 99.99%) #25272C'
      )}
      borderRadius={'10'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
    >
      <Stack
        justifyContent={'space-between'}
        spacing={2}
        direction={'row'}
        alignItems={'center'}
        width={'full'}
        position={'relative'}
      >
        <Text>{title}</Text>
        <Icon
          as={IconArrowDown}
          onClick={handleExpand}
          color={useColorModeValue('gray.100', 'white')}
          cursor={'pointer'}
        />
      </Stack>
      {expand && <Text pt={5}>{description}</Text>}
    </Stack>
  );
};

const Solutions = () => {
  const color = useColorModeValue(
    'gray.100',
    'radial-gradient(50% 50% at 50% 50%, rgba(40, 94, 176, 0.31) 0%, rgba(6, 19, 31, 0) 100%), url("/images/shine2.png")'
  );
  return (
    <Box
      bg={color}
      position={'relative'}
      opacity={'0.8'}
      bgRepeat={'no-repeat'}
      bgPosition={'bottom'}
    >
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
        >
          Our Solutions
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={4}
          pt={{ base: 10, lg: 24 }}
        >
          <Stack
            spacing={4}
            flex={1}
            direction={'column'}
            maxW={{ base: '400px' }}
          >
            <Feature
              title={'Seamless & Optimized DeFi Experience'}
              description={
                'Crosswise Finance strives to provide the greatest possible balance of performance, fees, and UI/UX for a far superior decentralized trading experience. Crosswise Fin which combines high speed and low cost with our cross-chain transfers and low on-chain transaction cost.'
              }
            ></Feature>
            <Feature
              title={'Cross-Chain'}
              description={
                'Bridges between current protocols that allow for frictionless asset transfers are required for decentralized finance to actually acquire widespread acceptance. This would enable a new paradigm of untapped money to exchange between the various networks, resulting in a flood of new choices for staking, exchanging, and trading assets.'
              }
            ></Feature>
            <Feature
              title={'Bot & Front-Running Deterrents'}
              description={
                'We want to avoid distortion and price manipulation that bots may cause, thus keeping users safe from such activity. To restrict botting activities, Crosswise employs a variety of technological techniques. We utilize Chainlink Price Feeds to mitigate the risk of flash loan assaults and other front-running deterrents that make front-running unprofitable. Tokens listed on Crosswise will have the option of adopting our security measures.'
              }
            ></Feature>
            <Feature
              title={'Launchpad'}
              description={
                'Crosswise will provide a launchpad for aspiring entrepreneurs to obtain funding and deploy their token on our DEX in a smooth manner. Selected projects will also be able to participate in our incubation program. Project teams have the option of launching on certain chains or providing cross-chain liquidity. The Crosswise launchpad seeks to protect investors by thoroughly assessing projects before releasing them into the Crosswise Finance ecosystem. We will also provide extra information to assist investors in navigating the volatile space of DeFi.'
              }
            ></Feature>
            <Feature
              title={'Unparalleled Trading Experience'}
              description={
                "Our objective is to improve the user's overall DeFi trading experience. Crosswise will also provide DeFi customers with the tools they need to do sophisticated swaps utilizing integrated capabilities similar to those present in CeFi. Our users will be able to move assets between blockchains such as Binance Smart Chain and Ethereum thanks to cross-chain technology. As we focus on interoperability, Crosswise will enable you to overcome the constraints of the fragmented DeFi ecosystem and gain access to money that is presently separated inside each chain."
              }
            ></Feature>
            <Feature
              title={'User Support System'}
              description={
                'Crosswise Finance offers conversational user experiences that aim for provision of user service and support in order to promote inclusivity and deepen relationships with greater operational efficiency.'
              }
            ></Feature>
          </Stack>

          <Box flex={1}>
            <Image src={ImageRocket} alt="dapp" objectFit={'cover'} />
          </Box>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default withSection(Solutions);
