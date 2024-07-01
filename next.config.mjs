import nextra from "nextra"

const withNextra = nextra({
	theme: 'nextra-theme-docs',
	themeConfig: './src/theme.config.tsx',
	defaultShowCopyCode: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
};

export default withNextra(nextConfig);
