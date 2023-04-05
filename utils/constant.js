import {
	MySqlSvg,
	DataGripSvg,
	TailwindSvg,
	CubeJsSvg,
	ArcplanSvg,
	ReactSvg,
	DockerSvg,
	GitlabSvg,
	PythonSvg,
	ExcelSvg,
	NextJsSvg,
	FigmaSvg,
	ReduxSvg,
	CloseIconSvg,
} from '../assets/svg/SkillsSvg';

const ROUTES = [
	{ routeName: 'Welcome', path: '/' },
	{ routeName: 'About', path: '/about' },
	{ routeName: 'Skills', path: '/skills' },
	{ routeName: 'Works', path: '/works' },
	{ routeName: 'Contact', path: '/contact' },
];

const headersParams = [
	{
		label: 'Welcome',
		idSection: 'sec-home',
		marginSlider: '0px',
	},
	{
		label: 'About',
		idSection: 'sec-about',
		marginSlider: '105px',
	},
	{
		label: 'Skills',
		idSection: 'sec-skills',
		marginSlider: '210px',
	},
	{
		label: 'Works',
		idSection: 'sec-works',
		marginSlider: '315px',
	},
	{
		label: 'Contact',
		idSection: 'sec-contact',
		marginSlider: '420px',
	},
];

const dailyIcons = [
	{
		icon: <MySqlSvg />,
		title: 'MySql',
		description: "Of course i'm a data analyst",
		url: 'https://www.mysql.com/',
	},
	{
		icon: <CubeJsSvg />,
		title: 'CubeJs',
		description:
			'This powerful tool helps me to aggregating, quering and displying datas',
		url: 'https://cube.dev',
	},
	{
		icon: <ArcplanSvg />,
		title: 'Arcplan',
		description: 'The BI software to generate all the reports',
		url: 'https://insightsoftware.com/longview/longview-analytics/',
	},
	{
		icon: <DataGripSvg />,
		title: 'DataGrip',
		description: 'Perfect IDE for creating amazing SQL queries',
		url: 'https://www.jetbrains.com/datagrip/',
	},
	{
		icon: <ReactSvg />,
		title: 'ReactJs',
		description:
			'The fullstack part, mixing BI software and react to create beautiful dashboard',
		url: 'https://reactjs.org/',
	},
	{
		icon: <DockerSvg />,
		title: 'Docker',
		description:
			'Shipping and deploying dashboards and report easily to customers ',
		url: 'https://www.docker.com',
	},
	{
		icon: <GitlabSvg />,
		title: 'Gitlab',
		description: 'Everthing need to be build and controlled',
		url: 'https://about.gitlab.com/',
	},
	{
		icon: <ExcelSvg />,
		title: 'Excel',
		description: `The grand father of data analysis tools,`,
		url: 'https://www.microsoft.com/',
	},
	{
		icon: <PythonSvg />,
		title: 'Python',
		description: 'Fetching, formatting, scrapping,displaying datas and more',
		url: 'https://www.python.org',
	},
	{
		icon: <TailwindSvg />,
		title: 'Tailwind',
		description: 'The power of CSS easier and faster',
		url: 'https://tailwindcss.com',
	},
	{
		icon: <NextJsSvg />,
		title: 'NextJs',
		description: 'Sometimes a side projects pops from nowhere',
		url: 'https://nextjs.org/',
	},
	{
		icon: <FigmaSvg />,
		title: 'Figma',
		description: 'Trying to build something beautiful like this portfolio',
		figma: 'https://www.figma.com/',
	},
	{
		icon: <ReduxSvg />,
		title: 'Redux',
		description: 'Once uppon a time it was an amazing tool',
		url: 'https://redux.js.org',
	},
];

const andIcons = [
	{
		icon: <ExcelSvg />,
		title: 'Excel',
		description: `The grand father of data analysis tools,`,
		url: 'https://www.microsoft.com/',
	},
	{
		icon: <PythonSvg />,
		title: 'Python',
		description: 'Fetching, formatting, scrapping,displaying datas and more',
		url: 'https://www.python.org',
	},
	{
		icon: <TailwindSvg />,
		title: 'Tailwind',
		description: 'The power of CSS easier and faster',
		url: 'https://tailwindcss.com',
	},
];

const tableData = {
	headers: [
		'id',
		'year',
		'company',
		'id_parent',
		'main_stack',
		'project',
		'description',
		'is_data',
	],
	datas: [
		{
			id: 'BDX1',
			year: '2013',
			company: 'Sport Trader',
			id_parent: 'NULL',
			main_stack: 'excel_vba',
			project: 'Sport Trader',
			description:
				'creating and handling excel application to manage football bets',
			is_data: '0',
		},
		{
			id: 'BDX2',
			year: '2014',
			company: 'IBS Online',
			id_parent: 'NULL',
			main_stack: 'prestashop',
			project: 'Ibs Online',
			description:
				'developping prestashop e-commerce website for selling  baby stuffs ',
			is_data: '0',
		},
		{
			id: 'BDX3',
			year: '2015',
			company: 'L’Addition',
			id_parent: 'NULL',
			main_stack: 'titanium',
			project: 'Caisse',
			description:
				'developping cash register application for restaurant and hotels',
			is_data: '0',
		},
		{
			id: 'BDX4',
			year: '2017',
			company: 'L’Addition',
			id_parent: 'NULL',
			main_stack: 'arcplan',
			project: 'Reporting',
			description: "creating BI dashboard and reports for l'Addition customers",
			is_data: '1',
		},
		{
			id: 'BDX5',
			year: '2017',
			company: 'L’Addition',
			id_parent: 'BDX4',
			main_stack: 'arplan',
			project: 'Reporting - Specific report',
			description:
				'creating specifis report for restaurant manager,financial directors and more',
			is_data: '1',
		},
		{
			id: 'BDX6',
			year: '2018',
			company: 'L’Addition',
			id_parent: 'BDX4',
			main_stack: 'arcplan',
			project: 'Reporting - TMA',
			description: "maintinig and fixing L'Addition reporting",
			is_data: '1',
		},
		{
			id: 'BDX7',
			year: '2018',
			company: 'L’Addition',
			id_parent: 'BDX4',
			main_stack: 'arcplan',
			project: 'Reporting- Training',
			description:
				"training customers and sales agent to use l'Addition reporting",
			is_data: '1',
		},
		{
			id: 'BDX8',
			year: '2021',
			company: 'L’Addition',
			id_parent: 'NULL',
			main_stack: 'react_js',
			project: 'Reporting (new)',
			description:
				"moving l'Addition reporting from Arcplan software to a full js stack",
			is_data: '1',
		},
		{
			id: 'BDX9',
			year: '2021',
			company: 'L’Addition',
			id_parent: 'BDX8',
			main_stack: 'javascript',
			project: 'Reporting (new) - CubeJS',
			description: 'handling reportings datas with CubeJs',
			is_data: '1',
		},
		{
			id: 'BDX10',
			year: '2021',
			company: 'L’Addition',
			id_parent: 'BDX8',
			main_stack: 'javascript',
			project: 'Reporting (new) - CubeJS ',
			description: 'creating pre-aggregated reporting datas',
			is_data: '1',
		},
		{
			id: 'BDX11',
			year: '2021',
			company: 'Side Project',
			id_parent: 'NULL',
			main_stack: 'nextjs',
			project: 'Sorami Thaï',
			description:
				'creating and developing a website for my best friend restaurant ',
			is_data: '0',
		},
		{
			id: 'BDX12',
			year: '2021',
			company: 'Side Project',
			id_parent: 'NULL',
			main_stack: 'wordpress',
			project: 'Tizi-Electronic',
			description: 'creating and developing a wordpress basic site',
			is_data: '0',
		},
		{
			id: 'BDX13',
			year: '2022',
			company: 'Side project',
			id_parent: 'NULL',
			main_stack: 'nextjs_tailwind',
			project: 'This Portfolio',
			description:
				'creating and developing the website that you are actually using.',
			is_data: '0',
		},
		{
			id: 'BDX14',
			year: '2022',
			company: 'Certification',
			id_parent: 'NULL',
			main_stack: 'NULL',
			project: 'AgilePM Certifcation',
			description: 'learning and seek the AgilePM certification',
			is_data: '0',
		},
		{
			id: 'BDX15',
			year: '2022',
			company: 'L’Addition',
			id_parent: 'NULL',
			main_stack: 'node_js',
			project: 'Customer Area - KPI',
			description:
				"modelling, creating and handling L'Addition customers area KPI",
			is_data: '1',
		},
		{
			id: 'BDX16',
			year: '2022',
			company: 'Side project',
			id_parent: 'NULL',
			main_stack: 'python',
			project: 'Python',
			description:
				'learning the datas part of python and playing with some scripts',
			is_data: '1',
		},
		{
			id: 'BDX17',
			year: '2023',
			company: "L'Adddition",
			id_parent: 'BDX12',
			main_stack: 'node_js',
			project: 'Customer Area - KPI',
			description:
				'creating the strategy and scripts to refresh and format KPI datas',
			is_data: '1',
		},
	],
};

const aboutDatas = [
	{
		title: '2015 - Hybrid mobile development.',
		description:
			'My first work was as a junior mobile developer at L’Addtion in Bordeaux. Hybrid developement was an amazing discovery for me.One code for every device.',
	},
	{
		title: '2017 - Business intelligence.',
		description:
			'But i always loved data, all the aspects of datas, that’s why i became the chief of reporting at L’Addition. That was my first BI experience.My job was to re-create a brand new reporting and dashboards for our customers.',
	},
	{
		title: '2019 - Next level BI.',
		description:
			'Moved to another type of BI. I stopped using Arcplan (software) to create handmade dahsboards with web and dataviz frameworks.',
	},
	{
		title: 'Now.',
		description:
			'Still working and enjoying datas at the same time i’m woking on increasing my skills about data analysis by learning new tools like Snowflake or Airflow.',
	},
];

module.exports = {
	ROUTES,
	headersParams,
	dailyIcons,
	andIcons,
	tableData,
	aboutDatas,
};
