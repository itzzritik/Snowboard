/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.pravatar.cc',
			},
		],
	},

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
