import {
  Box,
  Container,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { FaGithub, FaMedium, FaTelegram, FaTwitter } from 'react-icons/fa';

import ImageDapp from '@/assets/dapp.png';
import { withSection } from '@/components/Sections/withSection';
import { NavigationWidget } from './NavigationWidget';
import { MEDIUM_LINK, GITHUB_LINK, TELEGRAM_LINK } from '@/constants/index';

const DApp = () => {
  const color = useColorModeValue('gray.100', '#060514');
  return (
    <Box bg={color} position={'relative'} zIndex={0}>
      <Stack
        as={Container}
        maxW={'7xl'}
        h={{ base: '100%', lg: '100vh' }}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 10, lg: 24 }}
        direction={{ base: 'column', lg: 'row' }}
        alignItems={'center'}
      >
        <Stack spacing={4} mb={{ base: 12, lg: 0 }} flex={1}>
          <Heading
            as={'h2'}
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
            maxW={'2xl'}
          >
            Crosswise Finance - Bringing CeFi to DeFi
          </Heading>
          <Text fontSize={{ base: '2xl' }}>
            Cross-chain Automated Market-maker
          </Text>
          <Text fontSize={{ base: '2xl' }}>Swap, Stake & Earn</Text>
          <NavigationWidget
            primary={{
              label: 'Launch APP',
              href: 'https://app.crosswise.finance',
            }}
            icons={[
              {
                key: 'github',
                icon: <Icon as={FaGithub} color={'#00B8B9'} />,
                href: GITHUB_LINK,
              },
              {
                key: 'medium',
                icon: <Icon as={FaMedium} color={'#00B8B9'} />,
                href: MEDIUM_LINK,
              },
              {
                key: 'telegram',
                icon: <Icon as={FaTelegram} color={'#00B8B9'} />,
                href: TELEGRAM_LINK,
              },
              {
                key: 'twitter',
                icon: <Icon as={FaTwitter} color={'#00B8B9'} />,
              },
            ]}
          />
        </Stack>
        <Box flex={1}>
          <Image
            src={ImageDapp}
            alt="dapp"
            objectFit={'cover'}
            className={'dapp-screen'}
          />
        </Box>
      </Stack>

      <Box
        position={'absolute'}
        bg={
          'radial-gradient(50% 50% at 50% 50%, rgba(66, 214, 214, 0.31) 0%, rgba(92, 193, 59, 0) 100%)'
        }
        transform={'rotate(180deg)'}
        left={'-30%'}
        top={'-20%'}
        right={'10%'}
        bottom={'90%'}
        zIndex={-1}
      ></Box>

      <Box
        position={'absolute'}
        bg={
          'radial-gradient(50% 50% at 50% 50%, rgba(74, 39, 74, 0.74) 0%, rgba(76, 38, 73, 0) 100%)'
        }
        transform={'rotate(180deg)'}
        left={'-50%'}
        top={'-30%'}
        right={'85%'}
        bottom={'40%'}
        zIndex={-1}
      ></Box>
    </Box>
  );
};

export default withSection(DApp);
