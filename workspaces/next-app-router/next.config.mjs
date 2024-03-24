

/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'webspeed-api.anpan-playground.com',
            port: '',
            pathname: '/images/**'
        }
    ]
    }
};

export default nextConfig;
