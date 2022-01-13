import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Spacer,
  Stack,
  Flex,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import { withSection } from './withSection';

import ImageEarth from '@/assets/images/earth.png';

interface StageProps {
  title: string;
}

// 'border-image-source: linear-gradient(180deg, #04F8AD 0%, #3F81EF 50%, #8750F4 100%)'
const Stage = ({ title }: StageProps) => {
  return (
    <Box
      position={'relative'}
      zIndex={0}
      borderRadius={'60px'}
      overflow={'hidden'}
      padding={'6px'}
      marginY={'26px'}
    >
      <Box
        position={'absolute'}
        left={0}
        top={0}
        zIndex={-1}
        width={'100%'}
        height={'100%'}
        backgroundImage={
          'linear-gradient(180deg, #04F8AD 0%, #3F81EF 50%, #8750F4 100%)'
        }
      ></Box>
      <Box
        borderRadius={'60px'}
        backgroundColor={'#1B272D'}
        fontSize={'20px'}
        boxShadow={'inset 1px 10px 50px rgba(0, 0, 0, 0.45)'}
        padding={'12px 30px'}
        color={'white'}
      >
        {title}
      </Box>
    </Box>
  );
};

interface CircleProps {
  description?: string;
}
const Circle = ({ description }: CircleProps) => {
  return (
    <Box position={'relative'} width={'100%'}>
      <Box
        position={'relative'}
        zIndex={0}
        borderRadius={'50%'}
        overflow={'hidden'}
        padding={'2px'}
        width={'22px'}
        height={'22px'}
        marginX={'auto'}
        marginY={'13px'}
      >
        <Box
          position={'absolute'}
          left={0}
          top={0}
          zIndex={-1}
          width={'100%'}
          height={'100%'}
          backgroundImage={
            'linear-gradient(180deg, #04F8AD 0%, #3F81EF 50%, #8750F4 100%)'
          }
        ></Box>
        <Box
          borderRadius={'50%'}
          backgroundColor={'#1B272D'}
          fontSize={'20px'}
          boxShadow={'inset 1px 10px 50px rgba(0, 0, 0, 0.45)'}
          height={'100%'}
        ></Box>
      </Box>
      <Box
        position={'absolute'}
        left={'calc(50% + 30px)'}
        top={'12px'}
        maxWidth={'240px'}
        fontSize={'16px'}
      >
        {description}
      </Box>
    </Box>
  );
};

const Map = () => {
  return (
    <Flex
      position={'relative'}
      zIndex={0}
      direction={'column'}
      alignItems={'center'}
      width={'100%'}
      paddingBottom={'40px'}
    >
      <Stage title="Q1 2022" />
      <Circle description="Token Listing onDEX - launch on BSC" />
      <Circle description="Smart Contract Audits" />
      <Circle description="Crosswise API Implementation" />
      <Stage title="Q2 2022" />
      <Circle description="Launchpad Release" />
      <Circle description="Ramp Network Integration" />
      <Circle description="Front-Running Deterrents" />
      <Circle description="Launch on Polygon" />
      <Stage title="Q3 2022" />
      <Circle description="Industry Partnerships" />
      <Circle description="Synthetic Assets" />
      <Circle description="Cross-Chain Swaps" />
      <Circle description="Token Bridge" />
      <Circle description="Launch on Ethereum" />

      <Box
        position={'absolute'}
        left={'calc(50% - 4px)'}
        top={0}
        width={'8px'}
        height={'100%'}
        backgroundImage={
          'linear-gradient(180deg, rgba(4, 248, 173, 0) 0%, #04F8AD 19.79%, #3F81EF 45.31%, #8750F4 80.73%, rgba(135, 80, 244, 0) 100%)'
        }
        zIndex={-1}
      />
    </Flex>
  );
};

const RoadMap = () => {
  return (
    <Box position={'relative'}>
      <Stack
        as={Container}
        maxW={'7xl'}
        minH={950}
        py={{ base: 200, lg: 32 }}
        spacing={{ base: 5 }}
        bgImage="url('/images/spary-2.png')"
        bgRepeat={'no-repeat'}
        bgPosition={'bottom'}
        bgSize={'contain'}
      >
        <Stack
          alignItems={'center'}
          bgImage="url('/images/spary-1.png')"
          bgRepeat={'no-repeat'}
          bgPosition={'left'}
          bgSize={'contain'}
        >
          <Heading
            as={'h3'}
            fontWeight={{ base: '400' }}
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
            maxW={'2xl'}
            textAlign={'center'}
          >
            Roadmap
          </Heading>
          <Map />
        </Stack>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          py={{ base: 24, lg: 24 }}
        >
          <Image alt={'earth-img'} src={ImageEarth} objectFit="contain" />
          <Stack direction={'column'}>
            <Box
              position={'relative'}
              zIndex={0}
              borderRadius={'60px'}
              overflow={'hidden'}
              padding={'1px'}
              width={'fit-content'}
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
                borderRadius={'60px'}
                backgroundColor={useColorModeValue('#d4f3f3', '#0e263e')}
                fontSize={'20px'}
                boxShadow={useColorModeValue(
                  '',
                  'inset 1px 10px 50px rgba(0, 0, 0, 0.45)'
                )}
                padding={'5px 12px'}
                color={'#04F8AD'}
                fontWeight={'light'}
              >
                Coming soon
              </Box>
            </Box>

            <Spacer />
            <Heading
              as={'h3'}
              fontWeight={{ base: '400' }}
              fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
              maxW={'2xl'}
            >
              Crosswise Launchpad
            </Heading>
            <Spacer />
            <Text fontSize={'20px'} fontWeight={'300'}>
              The Crosswise Launchpad is a protocol designed for cross-chain
              token pools as well as auctions, enabling our ecosystem projects
              to raise capital on a decentralized & interoperable environment.
            </Text>
            <Spacer />
            <Link style={{ textDecoration: 'none' }} href={'#'}>
              <Text color={'#04F8AD'}>Learn more &#8594;</Text>
            </Link>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default withSection(RoadMap);
