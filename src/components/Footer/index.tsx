import {
  Container,
  Box,
  Stack,
  Text,
  SimpleGrid,
  Link,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
// import { ReactNode } from 'react';
import {
  TELEGRAM_LINK,
  TWITTER_LINK,
  MEDIUM_LINK,
  GITHUB_LINK,
  DISCORD_LINK,
} from '@/constants/index';
import { Logo } from '@/components/Logo';
import {
  IconChat,
  IconSend,
  IconCopyRight,
  IconUp,
  IconMail,
  IconCoinGecko,
  IconCoinMarketCaps,
} from '@/components/icons';
import {
  FaDiscord,
  FaGithub,
  FaMedium,
  FaTelegram,
  FaTwitter,
} from 'react-icons/fa';

const SOCIAL_LINKS = [
  {
    icon: <Icon as={FaTwitter} color={'#00B8B9'} />,
    href: TWITTER_LINK,
  },
  {
    icon: <Icon as={FaTelegram} color={'#00B8B9'} />,
    href: TELEGRAM_LINK,
  },
  {
    icon: <Icon as={FaDiscord} color={'#00B8B9'} />,
    href: DISCORD_LINK,
  },
  {
    icon: <Icon as={FaMedium} color={'#00B8B9'} />,
    href: MEDIUM_LINK,
  },
  {
    icon: <Icon as={IconMail} />,
    href: 'mail_link',
  },
  {
    icon: <Icon as={FaGithub} color={'#00B8B9'} />,
    href: GITHUB_LINK,
  },
  {
    icon: <Icon as={IconCoinGecko} />,
    href: 'coingecho_link',
  },
  {
    icon: <Icon as={IconCoinMarketCaps} />,
    href: 'coinmarketcaps_link',
  },
];

const GotoTopBtn = ({ onClick }: { onClick: any }) => {
  return (
    <Box
      position={'relative'}
      zIndex={0}
      borderRadius={'8px'}
      overflow={'hidden'}
      padding={'2px'}
      width={'fit-content'}
      cursor={'pointer'}
      onClick={() => onClick()}
    >
      <Box
        position={'absolute'}
        left={0}
        top={0}
        zIndex={-1}
        width={'100%'}
        height={'100%'}
        backgroundImage={'linear-gradient(45deg, #04F8AD, #3F81EF, #8750F4)'}
      ></Box>
      <Box
        borderRadius={'6px'}
        backgroundColor={useColorModeValue('#ffffff', '#0e263e')}
        fontSize={'20px'}
        boxShadow={useColorModeValue(
          '',
          'inset 1px 10px 50px rgba(0, 0, 0, 0.45)'
        )}
        padding={'5px 12px'}
        fontWeight={'600'}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        <Text fontSize={'13px'} mr={{ sm: '10px', md: '10px' }}>
          GO TO TOP
        </Text>
        <IconUp />
      </Box>
    </Box>
  );
};

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'auto',
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  return (
    <Box
      bg={useColorModeValue(
        'linear-gradient(90deg, rgba(0, 0, 0, 0.007) 0%, rgba(0, 0, 0, 0.059) 47.4%, rgba(0, 0, 0, 0.007) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.0432292) 50.52%, rgba(255, 255, 255, 0) 100%), linear-gradient(90deg, rgba(250, 251, 252, 0.97) 0%, #FAFBFC 100%)',
        'gray.900'
      )}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, md: 3 }}>
          <Stack direction={'row'} align={'center'} spacing={3}>
            <Logo width={26} height={25} />
            <Text as={'span'} fontWeight={{ base: '700' }}>
              crosswise
            </Text>
          </Stack>
          <Stack
            direction={'row'}
            align={'center'}
            spacing={3}
            pt={{ sm: '10px', md: '0px' }}
          >
            <IconChat />
            <Text
              fontSize={'13px'}
              color={useColorModeValue('#606060', '#E0E0FF')}
            >
              English (United States)
            </Text>
          </Stack>
          <Stack justifyContent={'space-between'} direction={'row'}>
            <Stack direction={'row'} align={'center'} spacing={3}>
              <IconSend />
              <Text
                fontSize={'13px'}
                color={useColorModeValue('#606060', '#E0E0FF')}
              >
                United States
              </Text>
            </Stack>
            <GotoTopBtn onClick={scrollToTop} />
          </Stack>
        </SimpleGrid>

        <Box
          width={'100%'}
          height={'2px'}
          backgroundColor={'rgba(196, 196, 196, 0.1)'}
          my={'10px !important'}
        />

        <SimpleGrid columns={{ base: 1, lg: 3 }}>
          <Stack spacing={5} direction={'row'}>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} isExternal>
                {link.icon}
              </Link>
            ))}
          </Stack>

          <Link
            href="#help"
            textDecoration={'none'}
            pt={{ base: '10px', lg: '0px' }}
          >
            <Text
              display={'flex'}
              flexDirection={'row'}
              fontWeight={{ base: '600' }}
              color={useColorModeValue('#606060', '#E0E0FF')}
            >
              <IconCopyRight />
              2022 Crosswise Finance
            </Text>
          </Link>

          <Link
            href="#privacy"
            textDecoration={'none'}
            pt={{ base: '10px', lg: '0px' }}
          >
            <Text
              fontWeight={{ base: '600' }}
              color={useColorModeValue('#606060', '#E0E0FF')}
            >
              TERMS & CONDITIONS | PRIVACY POLICY
            </Text>
          </Link>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
