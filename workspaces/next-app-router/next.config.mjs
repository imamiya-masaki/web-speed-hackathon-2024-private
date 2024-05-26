/* eslint-disable */

import analyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = analyzer({
    enabled: process.env["ANALYZE"] === 'true',
  })

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'webspeed-api.anpan-playground.com',
            port: '',
            pathname: '/images/**'
        },
        {
            protocol: 'http',
            hostname: 'localhost',
          },
    ]
    },
    "compiler": {
        "removeConsole": true,
    },
    typescript: {
        ignoreBuildErrors: true
    },
    experimental: {
        ppr: true
    }
    // "productionBrowserSourceMaps": true
};

export default withBundleAnalyzer(nextConfig);
