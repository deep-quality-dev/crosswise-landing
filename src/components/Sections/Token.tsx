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
        width={'100%'}
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
          fontSize={{ base: '20px' }}
          color={useColorModeValue('#141029', '#E0E0FF')}
        >
          {title}
        </Text>
        <Text
          pt={{ base: '30px' }}
          fontWeight={{ base: '300' }}
          fontSize={{ base: '14px' }}
          color={useColorModeValue('#141029', '#E0E0FF')}
        >
          {description}
        </Text>
      </Box>
    </Box>
  );
};

const Token = () => {
  const color = useColorModeValue(
    'linear-gradient(90deg, #04F8AD26 0%, #3F81EF26 50.52%, #8750F426 100%)',
    'linear-gradient(90deg, #04F8AD26 0%, #3F81EF26 50.52%, #8750F426 100%)'
  );
  const [ref, inView] = useInView();
  return (
    <Box bg={color} position={'relative'} zIndex={0} ref={ref}>
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
          fontWeight={{ base: '400' }}
          textAlign={'center'}
        >
          $CRSS Token
        </Heading>

        <Text
          fontSize={{ base: '2xl', sm: '3xl' }}
          textAlign={'center'}
          fontWeight={{ base: '300' }}
        >
          Staking rewards, low fees and incentives for holders.
        </Text>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={8}
          pt={{ base: 10, lg: 24 }}
          animation={inView ? zoomInAnimation : ''}
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
            title={'Liquidity Pools'}
            description={'High APR rewards for AMM liquidity pools.'}
          ></Feature>
          <Feature
            icon={<Icon as={IconTxFee} width={'60px'} height={'53px'} />}
            title={'Low Transaction Fees'}
            description={
              'Low transaction fees that are used to fund development, grow liquidity and support the CRSS price.'
            }
          ></Feature>
        </SimpleGrid>
      </Stack>

      <Box position={'absolute'} bg={color}></Box>

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

export default withSection(Token);
