/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,

  allowedDevOrigins: [
    'unrelated-expensive-throwback.ngrok-free.dev',
  ],

  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        'unrelated-expensive-throwback.ngrok-free.dev',
      ],
    },
  },
};

module.exports = nextConfig;