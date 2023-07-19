/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["admin.vanguardinvestconsult.com", "getjson.vectoranet.com"],
  },
  env: {
    API_GET_URL: "https://getjson.vectoranet.com",
  },
};

module.exports = nextConfig;
