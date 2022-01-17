import {
  Stack,
  Box,
  BoxProps,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';
import NextLink from 'next/link';

import { NaviationItems, NavigationItem } from '@/components/Header/navData';
import PrimaryButton from '@/components/Button/PrimaryButton';
import ConnectWalletButton from '../Button/ConnectWalletButton';
import useActiveWeb3React from '@/hooks/useActiveWeb3React';
import { shortenAddress } from '@/utils/address';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { IoExitOutline } from 'react-icons/io5';
import useAuth from '@/hooks/useAuth';

export const DesktopNav = (props: BoxProps) => {
  const color = useColorModeValue('gray.600', 'gray.200');
  const color2 = useColorModeValue('gray.800', 'white');

  const { account } = useActiveWeb3React();
  const { logout } = useAuth();

  return (
    <>
      <Stack direction={'row'} spacing={4} alignItems={'center'} {...props}>
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

        <PrimaryButton
          as={Link}
          cursor={'pointer'}
          href={'https://app.crosswise.finance'}
          label={'Launch APP'}
          size={'sm'}
          isExternal
        />

        {!account ? (
          <ConnectWalletButton />
        ) : (
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} size={'sm'}>
              <Text>{shortenAddress(account)}</Text>
            </MenuButton>
            <MenuList>
              <MenuItem icon={<IoExitOutline />} onClick={logout}>
                Disconnect
              </MenuItem>
            </MenuList>
          </Menu>
        )}
      </Stack>
    </>
  );
};
