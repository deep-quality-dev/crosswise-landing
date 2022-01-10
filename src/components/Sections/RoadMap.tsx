import {
  Box,
  Container,
  Heading,
  Icon,
  SimpleGrid,
  Spacer,
  Stack,
  Flex,
  Text,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';

import { withSection } from './withSection';

import ImageRocket from '@/assets/images/rocket.png';
import ImageEarth from '@/assets/images/earth.png';
import { IconArrowDown } from '../icons';

const Feature = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [expand, setExpand] = useState(false);

  const handleExpand = () => {
    setExpand(!expand);
  };

  {
    /* <Box
        position={'absolute'}
        left={'0'}
        right={'0'}
        top={'0'}
        bottom={'0'}
        bg={'#25272C'}
      /> */
  }

  return (
    <Box
      bg={useColorModeValue(
        'transparent',
        'linear-gradient(89.98deg, rgba(245, 247, 250, 0.12) 0.02%, rgba(255, 255, 255, 0.06) 50%, rgba(255, 255, 255, 0) 99.99%);'
      )}
      p={{ base: '16px' }}
      borderRadius={'10px'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
      position={'relative'}
    >
      <Stack
        justifyContent={'space-between'}
        spacing={2}
        direction={'row'}
        alignItems={'center'}
      >
        <Text>{title}</Text>
        <Icon
          as={IconArrowDown}
          onClick={handleExpand}
          color={useColorModeValue('gray.100', 'white')}
        />
      </Stack>
      {expand && <Text pt={5}>{description}</Text>}
    </Box>
  );
};

const RoadMap = () => {
  return (
    <Box position={'relative'} opacity={'0.8'}>
      <Stack
        as={Container}
        maxW={'7xl'}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 5 }}
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} pt={{ base: 10, lg: 24 }}>  
          <Image src={ImageEarth} objectFit='contain' />
          <Stack
            direction={'column'}
          >
            <Box>
              <Box 
                as={'span'}
                borderRadius={'20px'}
                border={'2px solid #04F8AD'}
                fontWeight={'light'} 
                fontSize={'16px'}
                color={'#04F8AD'}
                py={'10px'}
                px={'25px'}
              >
                Coming soon
              </Box>
            </Box>
            <Heading
              as={'h5'}
            >
              Crosswise Launchpad
            </Heading>
            <Text fontSize={'20px'}>
              The Crosswise Launchpad is a protocol designed for cross-chain token pools as well as auctions, enabling our ecosystem projects to raise capital on a decentralized & interoperable environment. 
            </Text>
            <Link
              style={{ textDecoration: 'none' }}
              href={'#'}
            >
              <Text color={'#04F8AD'}>Learn more &#8594;</Text>
            </Link>
          </Stack>
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default withSection(RoadMap);
