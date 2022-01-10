import { Flex, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';

import { NaviationItems, NavigationItem } from '@/components/Header/navData';

interface MobileNavProps {
  isOpen: boolean;
}

export const MobileNav = ({ isOpen }: MobileNavProps) => {
  const backgroundColor = useColorModeValue(
    'rgba(255, 255, 255, 0.8)',
    'rgba(26, 32, 44, 0.8)'
  );

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
