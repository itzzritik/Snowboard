export const favorites = ['Overview', 'Projects'];
export const dashboards: TNavItem[] = [
	{
		icon: 'f64e',
		label: 'Overview',
		subItems: [],
	},
	{
		icon: 'f290',
		label: 'eCommerce',
		subItems: ['Products', 'Sales', 'Expense'],
	},
	{
		icon: 'f07b',
		label: 'Projects',
		subItems: ['In Progress', 'Completed', 'Pending', 'Collaborators'],
	},
	{
		icon: 'f518',
		label: 'Online Courses',
		subItems: ['All', 'Featured', 'Categories', 'My Courses'],
	},
];

export const pages: TNavItem[] = [
	{
		icon: 'f2c1',
		label: 'User Profile',
		subItems: ['Overview ', 'Projects ', 'Campaigns', 'Documents', 'Followers'],
	},
	{
		icon: 'f2c2',
		label: 'Account',
		subItems: ['Profile', 'Security', 'Notification', 'Billing', 'Activity'],
	},
	{
		icon: 'f0c0',
		label: 'Corporate',
		subItems: ['Company', 'Investors', 'Leadership'],
	},
	{
		icon: 'e201',
		label: 'Blog',
		subItems: ['Articles', 'Spotlight', 'Trending', 'Archives'],
	},
	{
		icon: 'f086',
		label: 'Social',
		subItems: ['Feed', 'Explore', 'Friends', 'Groups', 'Events', 'Chat', 'Notifications'],
	},
];

export type TNavItem = {
	icon: string,
	label: string,
	subItems: string[]
}
