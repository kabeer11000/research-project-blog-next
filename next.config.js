/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    typescript: {
        ignoreBuildErrors: true
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: `${process.env.KABEERS_NETWORK}/research/`,
                permanent: true
            }
        ]
    }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
})
const withPreact = require('next-plugin-preact');
module.exports = withPreact(withBundleAnalyzer(nextConfig));
// module.exports = nextConfig
