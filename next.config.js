/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/car-dealer-app',
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['vpic.nhtsa.dot.gov'],
  },
};
module.exports = nextConfig;
