import {
  Container,
  Box,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import Image from 'next/image';
import NextLink from 'next/link';
import { ReactNode } from 'react';
import { FaLocationArrow, FaLanguage } from 'react-icons/fa';

// import IconCrosswiseDark from '../../assets/images/logo-dark.png';
// import IconCrosswiseLight from '../../assets/images/logo-light.png';

import {
  TELEGRAM_LINK,
  TWITTER_LINK,
  MEDIUM_LINK,
  GITHUB_LINK,
} from '@/constants/index';
import { Logo } from '@/components/Logo';

const About = [
  {
    icon: FaLanguage,
    label: 'English (United States)',
  },
  {
    icon: FaLocationArrow,
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
    label: 'Telegram',
    href: TELEGRAM_LINK,
  },
  {
    label: 'Twitter',
    href: TWITTER_LINK,
  },
  {
    label: 'Medium',
    href: MEDIUM_LINK,
  },
  {
    label: 'Github',
    href: GITHUB_LINK,
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>
              <Stack direction={'row'} align={'center'} spacing={3}>
                <Logo width={26} height={25} />
                <Text>crosswise</Text>
              </Stack>
            </ListHeader>
            {About.map((link) => (
              <Stack
                key={link.label}
                direction={'row'}
                align={'center'}
                spacing={3}
              >
                <Icon as={link.icon} w={5} h={5} />
                <Text>{link.label}</Text>
              </Stack>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Learn</ListHeader>
            {LearnLinks.map((link) => (
              <NextLink key={link.label} passHref href={link.href}>
                <Link>{link.label}</Link>
              </NextLink>
            ))}
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Social</ListHeader>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
