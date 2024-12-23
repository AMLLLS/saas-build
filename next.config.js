/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    return config;
  },
  images: {
    disableStaticImages: false,
  },
  experimental: {
    optimizeFonts: true,
  },
}

module.exports = nextConfig; 