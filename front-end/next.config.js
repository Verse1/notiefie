/** @type {import('next').NextConfig} */

const config = {
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,
};

module.exports = {
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };

    return config;
  },
  env: {
    AUTH0_SECRET: process.env.AUTH0_SECRET,
  },
};
