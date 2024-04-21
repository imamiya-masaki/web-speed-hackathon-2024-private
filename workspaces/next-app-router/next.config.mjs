/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
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
