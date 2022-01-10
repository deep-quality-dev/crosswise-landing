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

const Partners = [
  {
    icon: <Icon as={IconTechRate} width={'42px'} height={'42px'} />,
    label: 'TehchRate',
  },
  {
    icon: <Icon as={IconChainLink} width={'42px'} height={'42px'} />,
    label: 'ChainLink',
  },
  {
    icon: <Icon as={IconCERTIK} width={'42px'} height={'42px'} />,
    label: 'CERTIK',
  },
  {
    icon: <Icon as={IconBiconomy} width={'42px'} height={'42px'} />,
    label: 'Biconomy',
  },
];

const Feature = ({
  icon,
  label,
}: {
  icon: React.ReactElement;
  label: string;
}) => {
  return (
    <Stack
      as={Container}
      p={{ base: '17px' }}
      spacing={{ base: '17px' }}
      direction={'row'}
      alignItems={'center'}
      bg={useColorModeValue(
        'transparent',
        'linear-gradient(89.98deg, rgba(245, 247, 250, 0.12) 0.02%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0) 99.99%);'
      )}
      borderRadius={'10'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
    >
      {icon}
      <Text>{label}</Text>
    </Stack>
  );
};

const TechnicalPartner = () => {
  const color = useColorModeValue(
    'transparent',
    'radial-gradient(50% 288% at 50% 79.57%, rgba(4, 248, 173, 0.4) 0%, rgba(63, 129, 239, 0.4) 52.6%, rgba(135, 80, 244, 0.4) 100%)'
  );
  return (
    <Box position={'relative'} bg={color}>
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
              icon={partner.icon}
              label={partner.label}
            />
          ))}
        </Stack>
      </Stack>

      <Box position={'absolute'} bg={color}></Box>
    </Box>
  );
};

export default withSection(TechnicalPartner);
