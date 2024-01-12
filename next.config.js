/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production';

const repoName = 'react-portfolio'; // Replace with your actual repo name if different.

module.exports = {
    // Asset Prefix
    assetPrefix: isProd ? `/${repoName}/` : '',
    output: 'export',

    // For routing with GitHub Pages
    basePath: isProd ? `/${repoName}` : '',
    trailingSlash: true,

    // Next.js Image and CSS Configuration
    images: {
        loader: 'imgix', // or any other valid loader
        path: isProd ? `https://nvaneethm.github.io/${repoName}/blob/gh-pages/` : '',
    },

    // Custom Webpack config
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = { fs: false };
        }
        return config;
    },

    // Export Path Map
    exportPathMap: async function (
        defaultPathMap,
        { dev, dir, outDir, distDir, buildId }
    ) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/articles': { page: '/articles' },
            '/contact': { page: '/contact' },
            '/projects': { page: '/projects' },
            // Add more paths here
        };
    },
};
