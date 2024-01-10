/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    // Asset Prefix
    assetPrefix: isProd ? '/react-portfolio/' : '',

    // Output Configuration
    output: 'export',

    // For routing with GitHub Pages
    basePath: isProd ? '/react-portfolio' : '',
    trailingSlash: true,

    // Next.js Image and CSS Configuration
    images: {
        loader: 'imgix', // change to your preferred loader
        path: isProd ? 'https://nvaneethm.github.io/react-portfolio/' : '',
    },

    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Fixes npm packages that depend on `fs` module
            config.resolve.fallback = { fs: false };
        }

        // Further custom webpack configuration can be defined here

        return config;
    },
};

