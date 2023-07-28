/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'BlackHole Kasm',
    description: 'Personal',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/runinit/kasmworkspaces',
    contactUrl: 'https://github.com/runinit/kasmworkspaces',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasmworkspaces/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
