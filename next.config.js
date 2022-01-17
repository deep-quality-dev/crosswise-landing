require('dotenv').config({
  path: `./.env.${process.env.NODE_ENV}`,
});

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    ChainId: process.env.NEXT_PUBLIC_CHAIN_ID,
  },
};
