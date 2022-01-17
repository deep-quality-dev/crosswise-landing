import React from 'react';

export const PRESALE_CROSS_LINK = 'https://presale.crosswise.finance/';

export const CROSS_DOCS_LINK =
  'https://crosswise.gitbook.io/crosswise-litepaper';

export const TELEGRAM_LINK = 'https://t.me/crosswise';

export const TWITTER_LINK = 'https://twitter.com/crosswisefi';

export const DISCORD_LINK = 'https://discord.gg/4BuwxMz24J';

export const MEDIUM_LINK = 'https://crosswise.medium.com/';

export const GITHUB_LINK = 'https://github.com/crosswise-finance';

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
}

export const BASE_BSC_SCAN_URLS = {
  [ChainId.MAINNET]: 'https://bscscan.com',
  [ChainId.TESTNET]: 'https://testnet.bscscan.com',
};

export const BASE_BSC_SCAN_URL = BASE_BSC_SCAN_URLS[ChainId.MAINNET];

export const BASE_URL = 'https://crosswise.finance';

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
  BSC = 'bsc',
}

export const connectorLocalStorageKey = 'connectorIdv2';

export interface ConnectorConfig {
  title: string;
  icon: React.FC<React.SVGAttributes<SVGElement>>;
  description?: string;
  connectorId: ConnectorNames;
}
