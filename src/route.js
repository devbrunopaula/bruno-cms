import {
	HomeIcon,
	DocumentAddIcon,
	PencilAltIcon,
	PhotographIcon,
	UsersIcon,
	LightningBoltIcon,
	TrashIcon,
	BookOpenIcon,
	CubeIcon,
	ChartBarIcon,
} from '@heroicons/react/solid'

export const ManageLinks = [
	{icon: HomeIcon, title: 'View Site', path: '/'},
	{icon: DocumentAddIcon, title: 'Create page', path: '/create-page'},
	{icon: PencilAltIcon, title: 'Blog articles', path: '/blog-articles'},
	{icon: PhotographIcon, title: 'Files', path: '/files'},
	{icon: UsersIcon, title: 'Users', path: '/users'},
	{icon: LightningBoltIcon, title: 'Subscription', path: '/subscription'},
	{icon: TrashIcon, title: 'Archived pages', path: '/archived-pages'},
]

export const ProFeatures = [
	{icon: BookOpenIcon, title: 'Themes', path: '/themes'},
	{icon: CubeIcon, title: 'Plugins', path: '/plugins'},
	{icon: ChartBarIcon, title: 'Upgrade plans', path: '/chart'},
]
