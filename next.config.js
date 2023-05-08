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

module.exports = nextConfig
