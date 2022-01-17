import sample from 'lodash/sample';
import { ChainId } from '../constants';

if (
  process.env.NODE_ENV !== 'production' &&
  (!process.env.NEXT_PUBLIC_RPC_URL1 ||
    !process.env.NEXT_PUBLIC_RPC_URL2 ||
    !process.env.NEXT_PUBLIC_RPC_URL3)
) {
  throw Error('One base RPC URL is undefined');
}

// Array of available nodes to connect to
export const nodes = [
  process.env.NEXT_PUBLIC_RPC_URL1,
  process.env.NEXT_PUBLIC_RPC_URL2,
  process.env.NEXT_PUBLIC_RPC_URL3,
];

const getNodeUrl = (): string => {
  // Use custom node if available (both for development and production)
  // However on the testnet it wouldn't work, so if on testnet - comment out the REACT_APP_NODE_PRODUCTION from env file
  if (process.env.NEXT_PUBLIC_NODE_PRODUCTION) {
    return process.env.NEXT_PUBLIC_NODE_PRODUCTION;
  }
  return sample(nodes)!;
};

export const getChainId = () => {
  return process.env.ChainId
    ? parseInt(process.env.ChainId, 10)
    : ChainId.MAINNET;
};

export default getNodeUrl;
