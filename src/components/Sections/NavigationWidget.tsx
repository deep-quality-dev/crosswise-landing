import {
  Container,
  Button,
  Stack,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import PrimaryButton from '../Button/PrimaryButton';

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
      p={{ base: '17px' }}
      spacing={{ base: '17px' }}
      width={{ base: '100%', md: 'fit-content' }}
      direction={{ base: 'column', md: 'row' }}
      alignItems={'center'}
      bg={useColorModeValue('transparent', '#25272C')}
      borderRadius={'10'}
      boxShadow={'0 .5rem 1rem rgb(0 0 0/15%) !important'}
    >
      <NextLink href={primary.href} passHref>
        <Link>
          <PrimaryButton cursor={'pointer'} label={primary.label} />
        </Link>
      </NextLink>
      
      <Stack
        display={'flex'}
        width={{ base: 'max-content' }}
        direction={'row'}
        justifyContent={'space-between'}
      >
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
    </Stack>
  );
};
