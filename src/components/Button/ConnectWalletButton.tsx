import {
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  SimpleGrid,
  Text,
  Stack,
  useDisclosure,
  useBreakpointValue,
} from '@chakra-ui/react';

import MetaMask from '@/components/Icons/MetaMask';
import TrustWallet from '@/components/Icons/TrustWallet';
import WalletConnect from '@/components/Icons/WalletConnect';
import { ConnectorConfig, ConnectorNames } from '@/constants/index';
import PrimaryButton from './PrimaryButton';
import useAuth from '@/hooks/useAuth';

const connectors: ConnectorConfig[] = [
  {
    title: 'MetaMask',
    icon: MetaMask,
    description: 'Desktop Chrome or Mobile MetaMask Dapp browser',
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'TrustWallet',
    icon: TrustWallet,
    description: 'TrustWallet Dapp browser only',
    connectorId: ConnectorNames.Injected,
  },
  {
    title: 'WalletConnet',
    icon: WalletConnect,
    description: 'Mobile Chrome with MetaMask, TrustWallet, Coinomi, & more',
    connectorId: ConnectorNames.WalletConnect,
  },
];

const ConnectWalletButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modalSize = useBreakpointValue({ base: 'md', lg: '2xl' });
  const { login } = useAuth();

  return (
    <>
      <PrimaryButton
        label={'Connect Wallet'}
        cursor={'pointer'}
        size={'sm'}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>CONNECT</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text textAlign={'center'}>Connect with your favorite wallet.</Text>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} pt={8}>
              {connectors.map((connector: ConnectorConfig) => {
                return (
                  <Stack
                    key={connector.title}
                    direction={'column'}
                    spacing={3}
                    alignItems={'center'}
                    textAlign={'center'}
                  >
                    <Icon
                      as={connector.icon}
                      width={'64px'}
                      height={'64px'}
                      onClick={() => login(connector.connectorId)}
                      cursor={'pointer'}
                    />
                    <Text>{connector.title}</Text>
                    <Text>{connector.description}</Text>
                  </Stack>
                );
              })}
            </SimpleGrid>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectWalletButton;
