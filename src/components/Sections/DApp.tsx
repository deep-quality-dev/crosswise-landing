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
import styles from 'styled-components';
import { FaGithub, FaMedium, FaRetweet, FaTelegram } from 'react-icons/fa';

import ImageDapp from '@/assets/dapp.png';
import { withSection } from '@/components/Sections/withSection';
import { NavigationWidget } from './NavigationWidget';

const RoundedImage = styles(Image)`
  border-radius: 6px;
  transform: transateX(72px);
`;

const DApp = () => {
  const color = useColorModeValue('gray.100', '#060514');
  return (
    <Box bg={color}>
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
            Crosswise Finance - Bringing CeFi capabilities into DeFi
          </Heading>
          <Text fontSize={{ base: '2xl' }}>
            Cross-chain Automated Market Maker
          </Text>
          <Text fontSize={{ base: '2xl' }}>Swap, Stake & Earn</Text>
          <NavigationWidget
            primary={{
              label: 'Launch APP',
              href: 'https://crosswise.finance',
            }}
            icons={[
              {
                key: 'github',
                icon: <Icon as={FaGithub} color={'#00B8B9'} />,
              },
              {
                key: 'medium',
                icon: <Icon as={FaMedium} color={'#00B8B9'} />,
              },
              {
                key: 'telegram',
                icon: <Icon as={FaTelegram} color={'#00B8B9'} />,
              },
              {
                key: 'twitter',
                icon: <Icon as={FaRetweet} color={'#00B8B9'} />,
              },
            ]}
          />
        </Stack>
        <Box flex={1}>
          <RoundedImage src={ImageDapp} alt="dapp" objectFit={'cover'} />
        </Box>
      </Stack>
    </Box>
  );
};

export default withSection(DApp);
