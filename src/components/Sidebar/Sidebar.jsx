import React, {useState} from 'react'
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

import './sidebar.scss'
import SideBarItems from './SideBarItems'

const ManageLinks = [
	{icon: HomeIcon, title: 'View Site'},
	{icon: DocumentAddIcon, title: 'Create page'},
	{icon: PencilAltIcon, title: 'Blog articles'},
	{icon: PhotographIcon, title: 'Files'},
	{icon: UsersIcon, title: 'Users'},
	{icon: LightningBoltIcon, title: 'Subscription'},
	{icon: TrashIcon, title: 'Archived pages'},
]

const ProFeatures = [
	{icon: BookOpenIcon, title: 'Themes'},
	{icon: CubeIcon, title: 'Plugins'},
	// {icon: ChartBarIcon, title: 'Plugins'},
]

function Sidebar() {
	const [show, setShow] = useState(false)
	return (
		<div className='ml-10 mt-9'>
			<h4 className='mb-9 text-blue-light'>Manage</h4>
			<div className='flex flex-row items-center'>
				<div className='flex flex-col w-full'>
					{ManageLinks &&
						ManageLinks.map(link => (
							<SideBarItems
								Icon={link.icon}
								title={link.title}
								status={show}
							/>
						))}
					<h4 className='mb-9 text-blue-light'>Pro features</h4>
					{ProFeatures &&
						ProFeatures.map(link => (
							<SideBarItems
								Icon={link.icon}
								title={link.title}
								status={show}
							/>
						))}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
