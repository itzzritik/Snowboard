export const favorites = ['Overview', 'Projects'];
export const dashboards: TNavItem[] = [
	{
		icon: 'f64e',
		label: 'Overview',
		defaultOpen: false,
		subItems: [],
	},
	{
		icon: 'f290',
		label: 'eCommerce',
		defaultOpen: false,
		subItems: ['Products', 'Sales', 'Expense'],
	},
	{
		icon: 'f07b',
		label: 'Projects',
		defaultOpen: false,
		subItems: ['In Progress', 'Completed', 'Pending', 'Collaborators'],
	},
	{
		icon: 'f518',
		label: 'Online Courses',
		defaultOpen: false,
		subItems: ['All', 'Featured', 'Categories', 'My Courses'],
	},
];

export const pages: TNavItem[] = [
	{
		icon: 'f2c1',
		label: 'User Profile',
		defaultOpen: true,
		subItems: ['Overview ', 'Projects ', 'Campaigns', 'Documents', 'Followers'],
	},
	{
		icon: 'f2c2',
		label: 'Account',
		defaultOpen: false,
		subItems: ['Profile', 'Security', 'Notification', 'Billing', 'Activity'],
	},
	{
		icon: 'f0c0',
		label: 'Corporate',
		defaultOpen: false,
		subItems: ['Company', 'Investors', 'Leadership'],
	},
	{
		icon: 'e201',
		label: 'Blog',
		defaultOpen: false,
		subItems: ['Articles', 'Spotlight', 'Trending', 'Archives'],
	},
	{
		icon: 'f086',
		label: 'Social',
		defaultOpen: false,
		subItems: ['Feed', 'Explore', 'Friends', 'Groups', 'Events', 'Chat', 'Notifications'],
	},
];

export type TNavItem = {
	icon: string,
	label: string,
	defaultOpen: boolean,
	subItems: string[]
}
