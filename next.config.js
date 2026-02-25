/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,

	turbopack: {
		rules: {
			'*.svg': {
				loaders: [
					{
						loader: '@svgr/webpack',
						options: {
							typescript: true,
							ext: 'tsx',
						},
					},
				],
				as: '*.js',
			},
		},
	},
};

module.exports = nextConfig;
