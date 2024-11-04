/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "delicate-eggs-595f0e58b8.media.strapiapp.com"
      }
    ]
  }
};

export default nextConfig;
