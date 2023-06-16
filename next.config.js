/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["admin.vanguardinvestconsult.com"],
  },
  env: {
    API_GET_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
