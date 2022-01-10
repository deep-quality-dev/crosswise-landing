import {
  Container,
  Button,
  Stack,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

interface WidgetIconProps {
  key: string;
  icon: React.ReactElement;
  href?: string;
}

export interface WidgetProps {
  primary: {
    label: string;
    href: string;
  };
  icons?: WidgetIconProps[];
}

export const NavigationWidget = ({ primary, icons }: WidgetProps) => {
  return (
    <Stack
      as={Container}
      p={{ base: '17px' }}
      spacing={{ base: '17px' }}
      direction={'row'}
      alignItems={'center'}
      bg={useColorModeValue('transparent', '#25272C')}
      borderRadius={'10'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
      maxW={'fit-content'}
    >
      <NextLink href={primary.href} passHref>
        <Button
          color={'white'}
          bgImage={'linear-gradient(107deg, #0fa, #4579f5 55%, #9c42f5)'}
          boxShadow={'0 .5rem 1rem rgba(0, 0, 0, .15)'}
          cursor={'pointer'}
        >
          {primary.label}
        </Button>
      </NextLink>
      {icons &&
        icons.map((item: WidgetIconProps) => {
          return (
            <Button
              key={item.key}
              as={Link}
              href={item.href ?? ''}
              borderRadius={'50%'}
              width={'48px'}
              height={'48px'}
              bg={'#E0E0FF02'}
              boxShadow={'inset 1px 1px 6px #00000040'}
              cursor={'pointer'}
            >
              {item.icon}
            </Button>
          );
        })}
    </Stack>
  );
};
