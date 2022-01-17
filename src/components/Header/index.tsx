import {
  Box,
  Flex,
  Container,
  Stack,
  useDisclosure,
  IconButton,
  useColorModeValue,
  Icon,
  useColorMode,
  Heading,
  Button,
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { IoMoon, IoSunny } from 'react-icons/io5';
import Link from 'next/link';

// import { Logo } from './Logo';
import { MobileNav } from '@/components/Header/MobileNav';
import { DesktopNav } from '@/components/Header/DesktopNav';
import { Logo } from '@/components/Logo';

export const Header = () => {
  const { isOpen: isMobileNavOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box>
      <Flex
        as={'header'}
        pos="fixed"
        top="0"
        w={'full'}
        minH={'60px'}
        boxShadow={'sm'}
        zIndex="999"
        justify={'center'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
          backgroundColor: useColorModeValue(
            'rgba(255, 255, 255, 0.8)',
            'rgba(26, 32, 44, 0.8)'
          ),
        }}
      >
        <Container as={Flex} maxW={'7xl'} align={'center'} width="100%">
          <Flex
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'start', md: 'start' }}
          >
            <Link href={'/'} passHref>
              <Stack
                as={'a'}
                direction={'row'}
                alignItems={'center'}
                spacing={{ base: 2, sm: 4 }}
              >
                <Icon as={Logo} w={{ base: 8 }} h={{ base: 8 }} />
                <Heading
                  as={'h1'}
                  fontSize={'xl'}
                  display={{ base: 'none', md: 'block' }}
                >
                  crosswise
                </Heading>
              </Stack>
            </Link>
          </Flex>

          <Stack
            direction={'row'}
            align={'center'}
            spacing={{ base: 6, md: 8 }}
            flex={{ base: 1, md: 'auto' }}
            justify={'flex-end'}
          >
            <DesktopNav display={{ base: 'none', md: 'flex' }} />
            <Link href={'https://app.crosswise.finance'} passHref>
              <Button
                color={'white'}
                bgImage={'linear-gradient(107deg, #0fa, #4579f5 55%, #9c42f5)'}
                boxShadow={'0 .5rem 1rem rgba(0, 0, 0, .15)'}
                cursor={'pointer'}
                size={'sm'}
              >
                Launch APP
              </Button>
            </Link>

            <IconButton
              size={'sm'}
              variant={'ghost'}
              aria-label={'Toggle Color Mode'}
              onClick={toggleColorMode}
              icon={
                colorMode == 'light' ? (
                  <IoMoon size={18} />
                ) : (
                  <IoSunny size={18} />
                )
              }
            />
          </Stack>

          <Flex
            flex={{ base: '0', md: 'auto' }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isMobileNavOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              size={'sm'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        </Container>
      </Flex>
      <MobileNav isOpen={isMobileNavOpen} />
    </Box>
  );
};
