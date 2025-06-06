// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from 'prism-react-renderer';

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '10up - WP Block Editor Best Practices',
	tagline: 'The central hub for everything Block Editor related at 10up',
	url: 'https://gutenberg.10up.com',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	organizationName: '10up', // Usually your GitHub org/user name.
	projectName: 'gutenberg-best-practices', // Usually your repo name.

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: false,
				blog: false,
				gtag: {
					trackingID: 'G-WF1Z7JSCXS',
					anonymizeIP: true,
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],

	plugins: [
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'guides',
				path: 'guides',
				routeBasePath: 'guides',
				sidebarPath: require.resolve('./sidebars.js'),
				showLastUpdateTime: true,
				showLastUpdateAuthor: true,
				editUrl: 'https://github.com/10up/gutenberg-best-practices/tree/main/',
				sidebarCollapsed: false,
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				id: 'training',
				path: 'training',
				routeBasePath: 'training',
				sidebarPath: require.resolve('./sidebars.js'),
				showLastUpdateTime: true,
				showLastUpdateAuthor: true,
				editUrl: 'https://github.com/10up/gutenberg-best-practices/tree/main/',
				sidebarCollapsed: false,
			},
		],
		[
			'@docusaurus/plugin-content-docs',
			{
				path: 'reference',
				routeBasePath: 'reference',
				sidebarPath: require.resolve('./sidebars.js'),
				showLastUpdateTime: true,
				showLastUpdateAuthor: true,
				editUrl: 'https://github.com/10up/gutenberg-best-practices/tree/main/',
				sidebarCollapsed: false,
			},
		],
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			{

				indexDocs: true,
				docsRouteBasePath: ['reference', 'guides', 'training'],
				docsDir: ['reference', 'guides', 'training'],
				hashed: true,

			},
		],
		[
			require.resolve('@docusaurus/plugin-client-redirects'),
			{
				redirects: [
					{
						to: '/training/Blocks/overview/',
						from: '/training/overview/',
					},
					{
						to: '/training/Blocks/cta-lesson/',
						from: '/training/cta-lesson/',
					},
					{
						to: '/training/Blocks/styles/',
						from: '/training/styles/',
					},
					{
						to: '/training/Blocks/patterns/',
						from: '/training/patterns/',
					},
					{
						to: '/training/Blocks/variations/',
						from: '/training/variations/',
					},
					{
						to: '/training/Blocks/inner-blocks/',
						from: '/training/inner-blocks/',
					},
					{
						to: '/training/Blocks/rich-text-formats/',
						from: '/training/rich-text-formats/',
					},
					{
						to: '/training/Blocks/slot-fill/',
						from: '/training/slot-fill/',
					},
					{
						to: '/training/Blocks/build-your-own/',
						from: '/training/build-your-own/',
					},
				]
			}
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: 'light',
				disableSwitch: true,
			},
			navbar: {
				title: 'Block Editor Best Practices',
				logo: {
					src: 'img/10up-logo-full.svg'
				},
				items: [
					{
						type: 'doc',
						docId: 'index',
						position: 'right',
						label: 'Reference',
					},
					{
						type: 'doc',
						docId: 'index',
						position: 'right',
						label: 'Training',
						docsPluginId: 'training'
					},
					{
						type: 'doc',
						docId: 'index',
						position: 'right',
						label: 'Guides',
						docsPluginId: 'guides'
					}
				],
			},
			announcementBar: {
				id: 'support_us',
				content:
					'Have any questions or suggestions? Just open a discussion in <a target="_blank" rel="noopener noreferrer" href="https://github.com/10up/gutenberg-best-practices/discussions/new">this GitHub Repository</a>',
				backgroundColor: '#fafbfc',
				textColor: '#091E42',
				isCloseable: false,
			},
			footer: {
				style: 'light',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Reference',
								to: '/reference',
							},
							{
								label: 'Training',
								to: '/training',
							},
							{
								label: 'Guides',
								to: '/guides',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Slack Channel (internal)',
								href: 'https://10up.slack.com/archives/C8Z3WMN1K',
							},
							{
								label: 'GitHub Discussions',
								href: 'https://github.com/10up/gutenberg-best-practices/discussions/',
							}
						],
					},
					{
						title: 'Resources',
						items: [
							{
								label: 'Block Components',
								href: 'https://github.com/10up/block-components',
							},
							{
								label: 'Block Examples (internal)',
								href: 'https://github.com/10up/block-examples',
							},
							{
								label: 'WP Scaffold',
								href: 'https://github.com/10up/wp-scaffold',
							},
						],
					},
				]
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
				additionalLanguages: ['php', 'bash'],
			},
		}),
};

module.exports = config;
