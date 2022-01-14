import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  Box,
  Container,
  Heading,
  Icon,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import ImageSwap from '@/assets/images/swap-dialog.png';
import ImageSwapLight from '@/assets/images/swap-dialog-light.png';
import { IconBNB, IconUSDT, IconBTC, IconXRH } from '@/components/icons';
import {
  fadeInLeftAnimation,
  fadeInDownBigAnimation,
  fadeInUpBigAnimation,
} from '@/constants/animations';
import { NavigationWidget } from './NavigationWidget';
import { withSection } from './withSection';

const LearnMore = () => {
  const color = useColorModeValue('#F7F8F9', '#060514');
  const [ref, inView] = useInView();
  return (
    <Box
      bg={color}
      bgImage={useColorModeValue(
        "url('/images/shine-light.png')",
        "url('/images/shine.png')"
      )}
      bgRepeat={'no-repeat'}
      bgPosition={'bottom'}
      ref={ref}
    >
      <Stack
        as={Container}
        maxW={'7xl'}
        h={{ base: '100%', lg: '100vh' }}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 10, lg: 24 }}
        direction={{ base: 'column', lg: 'row' }}
        bgRepeat={'no-repeat'}
        bgPosition={'bottom'}
      >
        <Box flex={1} animation={inView ? fadeInLeftAnimation : ''}>
          <Image
            src={useColorModeValue(ImageSwapLight, ImageSwap)}
            alt="swap"
            objectFit={'cover'}
          />
        </Box>
        <Stack spacing={4} pt={20} mb={{ base: 12, lg: 0 }} flex={1}>
          <Heading
            as={'h3'}
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
            fontWeight={{ base: '400' }}
            maxW={'2xl'}
            animation={inView ? fadeInDownBigAnimation : ''}
          >
            Low Fees Powered by Binance Smart Chain
          </Heading>
          <Box animation={inView ? fadeInUpBigAnimation : ''}>
            <NavigationWidget
              primary={{
                label: 'Learn more',
                href: 'https://crosswise.finance',
              }}
              icons={[
                {
                  key: 'usdt',
                  icon: <Icon as={IconUSDT} color={'#00B8B9'} />,
                },
                {
                  key: 'btc',
                  icon: <Icon as={IconBTC} color={'#00B8B9'} />,
                },
                {
                  key: 'xrh',
                  icon: <Icon as={IconXRH} color={'#00B8B9'} />,
                },
                {
                  key: 'bnb',
                  icon: <Icon as={IconBNB} color={'#00B8B9'} />,
                },
              ]}
            />
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default withSection(LearnMore);
