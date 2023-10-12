/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ["localhost"],
    },
    env: {
      API_URL: "http://localhost:3001",
      imageUser: "http://localhost:3001/users/image",
      imageJob: "http://localhost:3001/jobhire/image",
    }
}

module.exports = nextConfig
