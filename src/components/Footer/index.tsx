import {
  Container,
  Box,
  Stack,
  Text,
  SimpleGrid,
  Button,
  Flex,
  Link,
  useColorModeValue,
  Spacer,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
// import IconCrosswiseDark from '../../assets/images/logo-dark.png';
// import IconCrosswiseLight from '../../assets/images/logo-light.png';

import {
  TELEGRAM_LINK,
  TWITTER_LINK,
  MEDIUM_LINK,
  GITHUB_LINK,
} from '@/constants/index';
import { Logo } from '@/components/Logo';
import {
  IconChat,
  IconSend,
  TelegramIcon,
  TwitterIcon,
  MediumIcon,
  GitIcon,
  CopyRightIcon,
  UpIcon,
} from '@/components/icons';

const About = [
  {
    icon: <IconChat />,
    label: 'English (United States)',
    key: 'chat',
  },
  {
    icon: <IconSend />,
    label: 'United States',
    key: 'send',
  },
];

const SOCIAL_LINKS = [
  {
    icon: <TelegramIcon />,
    href: TELEGRAM_LINK,
  },
  {
    icon: <TwitterIcon />,
    href: TWITTER_LINK,
  },
  {
    icon: <MediumIcon />,
    href: MEDIUM_LINK,
  },
  {
    icon: <GitIcon />,
    href: GITHUB_LINK,
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Box fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Box>
  );
};

const GotoTopBtn = ({ onClick }: { onClick: any }) => {
  return (
    <Box
      position={'relative'}
      zIndex={0}
      borderRadius={'60px'}
      overflow={'hidden'}
      padding={'3px'}
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
        borderRadius={'60px'}
        backgroundColor={'#0e263e'}
        fontSize={'20px'}
        boxShadow={'inset 1px 10px 50px rgba(0, 0, 0, 0.45)'}
        padding={'5px 12px'}
        fontWeight={'600'}
        display={'flex'}
        flexDirection={'row'}
        alignItems={'center'}
      >
        <Text fontSize={'13px'} mr={'30px'}>
          GO TO TOP
        </Text>
        <UpIcon />
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
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Flex>
          <ListHeader>
            <Stack direction={'row'} align={'center'} spacing={3}>
              <Logo width={26} height={25} />
              <Text as={'span'} fontWeight={'extrabold'}>
                crosswise
              </Text>
            </Stack>
          </ListHeader>
          <Spacer />
          {About.map((link) => (
            <>
              <Box key={link.key} display={'flex'} alignItems={'center'}>
                <Stack direction={'row'} align={'center'} spacing={3}>
                  {link.icon}
                  <Text fontSize={'13px'}>{link.label}</Text>
                </Stack>
              </Box>
              <Spacer />
            </>
          ))}
          <Spacer />
          <GotoTopBtn onClick={scrollToTop} />
        </Flex>

        <Box
          width={'100%'}
          height={'2px'}
          backgroundColor={'rgba(196, 196, 196, 0.1)'}
          my={'10px !important'}
        />

        <SimpleGrid columns={{ base: 3, sm: 1, md: 1, lg: 3 }} spacing={3}>
          <SimpleGrid columns={{ base: 4, sm: 4, md: 4, lg: 4 }}>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} isExternal>
                {link.icon}
              </Link>
            ))}
          </SimpleGrid>

          <Link href="#help">
            <Text
              display={'flex'}
              flexDirection={'row'}
              fontWeight={'extrabold'}
            >
              <CopyRightIcon />
              2022 Crosswise Finance
            </Text>
          </Link>

          <Link href="#privacy" textDecoration={'none'}>
            <Text fontWeight={'extrabold'}>
              TERMS & CONDITIONS | PRIVACY POLICY
            </Text>
          </Link>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
