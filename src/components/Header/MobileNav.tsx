import {
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import { NaviationItems, NavigationItem } from '@/components/Header/navData';
import useActiveWeb3React from '@/hooks/useActiveWeb3React';
import useAuth from '@/hooks/useAuth';
import ConnectWalletButton from '../Button/ConnectWalletButton';
import { shortenAddress } from '@/utils/address';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { IoExitOutline } from 'react-icons/io5';

interface MobileNavProps {
  isOpen: boolean;
}

export const MobileNav = ({ isOpen }: MobileNavProps) => {
  const backgroundColor = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)'
  );

  const { account } = useActiveWeb3React();
  const { logout } = useAuth();

  if (!isOpen) return null;

  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos="fixed"
      top="60px"
      w={'full'}
      bg={'white'}
      minH={'calc(100vh - 60px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor,
      }}
    >
      {NaviationItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}

      {!account ? (
        <ConnectWalletButton />
      ) : (
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronRightIcon />} size={'sm'}>
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
  );
};

const MobileNavItem = ({ href, label }: NavigationItem) => {
  return (
    <Stack spacing={4}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
