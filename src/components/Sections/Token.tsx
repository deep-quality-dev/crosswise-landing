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

import { IconEmission, IconStaking, IconLiquidity, IconTxFee } from '../icons';

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

const Token = () => {
  const color = useColorModeValue(
    'linear-gradient(90deg, #04F8AD26 0%, #3F81EF26 50.52%, #8750F426 100%)',
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
          $CRSS Token
        </Heading>

        <Text fontSize={{ base: '2xl', sm: '3xl' }} textAlign={'center'}>
          Staking rewards, low fees and incentives for holders.
        </Text>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          pt={{ base: 10, lg: 24 }}
        >
          <Feature
            icon={<Icon as={IconEmission} width={'60px'} height={'53px'} />}
            title={'Emission Based'}
            description={
              'Emission will be 1.2 CRSS per block for the first 14 days, and 1 per block thereafter. We estimate that it will take 5-8 years to reach max supply.'
            }
          ></Feature>
          <Feature
            icon={<Icon as={IconStaking} width={'60px'} height={'53px'} />}
            title={'Incentivized Staking'}
            description={
              'Users can stake $CRSS to accumulate greater rewards over longer periods of time.'
            }
          ></Feature>
          <Feature
            icon={<Icon as={IconLiquidity} width={'60px'} height={'53px'} />}
            title={'Max Supply'}
            description={'Maximum supply is limited to only 50 Million CRSS.'}
          ></Feature>
          <Feature
            icon={<Icon as={IconTxFee} width={'60px'} height={'53px'} />}
            title={'Deflationary Features'}
            description={
              'A range of fees are used to buy-back and burn CRSS token, in order to keep inflation at bay.'
            }
          ></Feature>
        </SimpleGrid>
      </Stack>

      <Box position={'absolute'} bg={color}></Box>
    </Box>
  );
};

export default withSection(Token);
