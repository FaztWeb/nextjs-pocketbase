/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "atlas-content-cdn.pixelsquid.com",
      },
      {
        hostname: "127.0.0.1",
      },
      {
        hostname: "localhost",
      },
    ],
  },
};

export default nextConfig;
