import {
  Stack,
  Box,
  BoxProps,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import { NaviationItems, NavigationItem } from '@/components/Header/navData';

export const DesktopNav = (props: BoxProps) => {
  const color = useColorModeValue('gray.600', 'gray.200');
  const color2 = useColorModeValue('gray.800', 'white');

  return (
    <Stack direction={'row'} spacing={4} {...props}>
      {NaviationItems.map((navItem: NavigationItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={color}
                _hover={{
                  textDecoration: 'none',
                  color: color2,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
