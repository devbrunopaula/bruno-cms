import React from 'react'

import './sidebar.scss'
import SideBarItems from './SideBarItems'
import {ManageLinks, ProFeatures} from '../../route'

function Sidebar() {
	return (
		<div className='ml-10 mt-7'>
			<h4 className='mb-9 text-blue-light'>Manage</h4>
			<div className='flex flex-row items-center'>
				<div className='flex flex-col w-full'>
					{ManageLinks &&
						ManageLinks.map((link, i) => (
							<SideBarItems data={link} key={i} />
						))}

					<h4 className='mb-9 text-blue-light'>Pro features</h4>
					{ProFeatures &&
						ProFeatures.map((link, i) => (
							<SideBarItems key={i} data={link} />
						))}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
