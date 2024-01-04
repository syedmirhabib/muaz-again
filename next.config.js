/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    path: isProd ? "https://renebitter.github.io/" : "",
  },
  basePath: "/portfolio",
  presets: ["next/babel"],
};

module.exports = nextConfig;
