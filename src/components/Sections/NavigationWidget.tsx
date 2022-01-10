import {
  Container,
  Button,
  Icon,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import { PrimaryButton } from '@/components/Button';

interface WidgetIconProps {
  key: string;
  icon: React.ReactElement;
  href?: string;
}

export interface WidgetProps {
  primary: {
    label: string;
    href?: string;
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
      <Link href={primary.href ?? '#'} passHref>
        <PrimaryButton color={'white'}>{primary.label}</PrimaryButton>
      </Link>
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
            >
              {item.icon}
            </Button>
          );
        })}
    </Stack>
  );
};
