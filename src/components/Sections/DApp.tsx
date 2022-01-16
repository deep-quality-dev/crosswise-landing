import React from 'react';
import { useInView } from 'react-intersection-observer';
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
import {
  FaDiscord,
  FaGithub,
  FaMedium,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa';
import ImageDapp from '@/assets/images/dapp.png';
import ImageDappLight from '@/assets/images/dapp-light.png';
import { withSection } from '@/components/Sections/withSection';
import { NavigationWidget } from './NavigationWidget';
import {
  MEDIUM_LINK,
  GITHUB_LINK,
  TELEGRAM_LINK,
  DISCORD_LINK,
  TWITTER_LINK,
} from '@/constants/index';
import {
  fadeInLeftAnimation,
  fadeInRightAnimation,
} from '@/constants/animations';

const Widget = () => {
  return (
    <NavigationWidget
      primary={{
        label: 'Launch APP',
        href: 'https://app.crosswise.finance',
      }}
      icons={[
        {
          key: 'twitter',
          icon: <Icon as={FaTwitter} color={'#00B8B9'} />,
          href: TWITTER_LINK,
        },
        {
          key: 'telegram',
          icon: <Icon as={FaTelegram} color={'#00B8B9'} />,
          href: TELEGRAM_LINK,
        },
        {
          key: 'discord',
          icon: <Icon as={FaDiscord} color={'#00B8B9'} />,
          href: DISCORD_LINK,
        },
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
      ]}
    />
  );
};

const DApp = () => {
  const color = useColorModeValue('gray.100', '#060514');
  const [ref, inView] = useInView();
  return (
    <Box bg={color} position={'relative'} zIndex={0} ref={ref}>
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
        <Stack
          spacing={4}
          mb={{ base: 12, lg: 0 }}
          flex={1}
          animation={inView ? fadeInLeftAnimation : ''}
        >
          <Heading
            as={'h2'}
            fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
            maxW={'2xl'}
            fontWeight={'400'}
          >
            Crosswise Finance - Bringing CeFi to DeFi
          </Heading>
          <Text fontSize={{ base: '20px' }} fontWeight={{ base: '300' }}>
            Cross-chain Automated Market-maker
            <br />
            <br />
            Swap, Stake & Earn
          </Text>
          <Box display={{ base: 'none', md: 'block' }}>
            <Widget />
          </Box>
        </Stack>
        <Box
          flex={1}
          boxShadow={'-0.5rem 0rem 1rem rgb(0 0 0/15%) !important'}
          animation={inView ? fadeInRightAnimation : ''}
        >
          <Image
            src={useColorModeValue(ImageDappLight, ImageDapp)}
            alt="dapp"
            objectFit={'cover'}
            className={'dapp-screen'}
          />
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <Widget />
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
        display={useColorModeValue('none', 'block')}
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
        display={useColorModeValue('none', 'block')}
        zIndex={-1}
      ></Box>

      <Box
        position={'absolute'}
        bg={
          'radial-gradient(50% 50% at 50% 50%, rgba(40, 94, 176, 0.31) 0%, rgba(6, 19, 31, 0) 100%)'
        }
        transform={'rotate(180deg)'}
        left={'45%'}
        top={'-25%'}
        right={'10%'}
        bottom={'0%'}
        display={useColorModeValue('none', 'block')}
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
        display={useColorModeValue('none', 'block')}
      ></Box>
    </Box>
  );
};

export default withSection(DApp);
