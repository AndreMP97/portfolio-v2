/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/_error",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
