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
    typescript: {
        ignoreBuildErrors: true
    }
};

export default nextConfig;
