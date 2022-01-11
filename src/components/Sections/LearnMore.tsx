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
import { NavigationWidget } from './NavigationWidget';
import { withSection } from './withSection';

const LearnMore = () => {
  const color = useColorModeValue('#F7F8F9', '#060514');
  return (
    <Box
      bg={color}
      bgImage={useColorModeValue(
        "url('/images/shine-light.png')",
        "url('/images/shine.png')"
      )}
      bgRepeat={'no-repeat'}
      bgPosition={'bottom'}
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
        <Box flex={1}>
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
            maxW={'2xl'}
          >
            Low Fees Powered by Binance Smart Chain
          </Heading>
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
        </Stack>
      </Stack>
    </Box>
  );
};

export default withSection(LearnMore);
