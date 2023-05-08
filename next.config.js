/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
