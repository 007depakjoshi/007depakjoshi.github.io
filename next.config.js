const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // Add basePath for git
  basePath: '/gh-pages',
  output: 'export',
}

module.exports = nextConfig