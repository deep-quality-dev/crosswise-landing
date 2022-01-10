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
  },
  {
    icon: <IconSend />,
    label: 'United States',
  },
];

const LearnLinks = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Help',
    href: '#help',
  },
  {
    label: 'Support',
    href: '#support',
  },
  {
    label: 'Privacy & Support',
    href: '#privacy',
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
              <Text fontWeight={'extrabold'}>crosswise</Text>
            </Stack>
          </ListHeader>
          <Spacer />
          {About.map((link) => (
            <>
              <Stack
                key={link.label}
                direction={'row'}
                align={'center'}
                spacing={3}
              >
                {link.icon}
                <Text fontSize={'13px'}>{link.label}</Text>
              </Stack>
              <Spacer />
            </>
          ))}
          <Spacer />
          <Box>
            <Button
              size="md"
              borderWidth={'2px'}
              borderStyle={'solid'}
              borderRadius={'10px'}
              background={'transparent'}
              style={{
                borderImage:
                  'linear-gradient(45deg, #04F8AD, #3F81EF, #8750F4) 1',
              }}
              onClick={() => scrollToTop()}
            >
              <Text fontSize={'13px'} mr={'30px'}>
                GO TO TOP
              </Text>
              <UpIcon />
            </Button>
          </Box>
        </Flex>

        <Box
          width={'100%'}
          height={'2px'}
          backgroundColor={'rgba(196, 196, 196, 0.1)'}
          my={'10px !important'}
        />

        <Flex>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} isExternal>
                {link.icon}
              </Link>
            ))}
          </SimpleGrid>

          <Spacer />

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

          <Spacer />

          <Link href="#privacy" textDecoration={'none'}>
            <Text fontWeight={'extrabold'}>
              TERMS & CONDITIONS | PRIVACY POLICY
            </Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};
