/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/react-portfolio' : '',
}

module.exports = nextConfig
