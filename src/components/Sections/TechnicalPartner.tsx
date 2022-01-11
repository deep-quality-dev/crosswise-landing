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

import {
  IconTechRate,
  IconChainLink,
  IconCERTIK,
  IconBiconomy,
} from '../icons';
import Link from 'next/link';

const Partners = [
  {
    href: 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/October/Crosswise%20Token%20Full%20Smart%20Contract%20Security%20Audit.pdf',
    icon: <Icon as={IconTechRate} width={'42px'} height={'42px'} />,
    label: 'TechRate',
  },
  {
    href: 'https://data.chain.link/users/crosswise',
    icon: <Icon as={IconChainLink} width={'42px'} height={'42px'} />,
    label: 'ChainLink',
  },
  {
    href: 'https://www.certik.com/projects/crosswise-finance',
    icon: <Icon as={IconCERTIK} width={'42px'} height={'42px'} />,
    label: 'CERTIK',
  },
  {
    href: 'https://www.biconomy.io/',
    icon: <Icon as={IconBiconomy} width={'42px'} height={'42px'} />,
    label: 'Biconomy',
  },
];

const Feature = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactElement;
  label: string;
}) => {
  return (
    <Stack
      as={Container}
      p={{ base: '10px 30px' }}
      spacing={{ base: '17px' }}
      direction={'row'}
      alignItems={'center'}
      bg={useColorModeValue(
        'linear-gradient(89.98deg, #F5F7FA 0.02%, #FFFFFF 50%, #FFFFFF 99.99%)',
        'linear-gradient(89.98deg, rgba(245, 247, 250, 0.12) 0.02%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0) 99.99%);'
      )}
      borderRadius={'10'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
    >
      <Link href={href} passHref>
        {icon}
      </Link>
      <Text>{label}</Text>
    </Stack>
  );
};

const TechnicalPartner = () => {
  const color =
    'radial-gradient(50% 288% at 50% 79.57%, rgba(4, 248, 173, 0.4) 0%, rgba(63, 129, 239, 0.4) 52.6%, rgba(135, 80, 244, 0.4) 100%)';
  return (
    <Box position={'relative'} bg={color} zIndex={0} py={'80px'}>
      <Stack
        as={Container}
        maxW={'7xl'}
        minH={550}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 5 }}
        direction={{ base: 'column' }}
        alignItems={'center'}
      >
        <Heading
          as={'h3'}
          fontSize={{ base: '3xl', sm: '4xl', md: '4xl', lg: '5xl' }}
          maxW={'2xl'}
          textAlign={'center'}
          fontWeight={'light'}
        >
          Technical Partners
        </Heading>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8 }}
          pt={{ base: 10, lg: 24 }}
        >
          {Partners.map((partner) => (
            <Feature
              key={partner.label}
              href={partner.href}
              icon={partner.icon}
              label={partner.label}
            />
          ))}
        </Stack>
      </Stack>

      <Box position={'absolute'} bg={color}></Box>

      <Box
        position={'absolute'}
        bg={"url('/images/pattern-top-right.png')"}
        bgRepeat={'no-repeat'}
        transform={'rotate(180deg) scaleX(-1)'}
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

export default withSection(TechnicalPartner);
