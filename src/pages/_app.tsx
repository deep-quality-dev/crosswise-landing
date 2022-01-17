/* eslint-disable @next/next/no-page-custom-font */
import '@fontsource/montserrat/100.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../theme';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from '@/utils/web3React';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider resetCSS theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <meta
            name="description"
            content="crosswise takes the trading experience on DEX to the next level with tighter security, a friendly interface, cross-chain transactions, gasless swaps, verified listings and the right tools"
          />
          <title>crosswise - Cross-Chain DEX 2.0</title>
        </Head>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
