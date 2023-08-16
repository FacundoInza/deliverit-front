const path = require('path');

module.exports = {
    images: {
        domains: ['localhost', 'cdn-icons-png.flaticon.com'],
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname, 'src');
		return config;
	},
};
