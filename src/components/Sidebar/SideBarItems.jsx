import React, {useEffect, useState} from 'react'
import bubble from '../../assets/images/Ellipse.png'

import {NavLink, useLocation} from 'react-router-dom'

function SideBarItems({data}) {
	const [pathname, setPathname] = useState('/')
	const location = useLocation()

	useEffect(() => {
		setPathname(location.pathname)
	}, [location])
	return (
		<div className='flex mb-5 items-center'>
			<div className='mr-3 flex items-center'>
				<data.icon className='h-5 w-5  mx-2' />
				<NavLink
					exact
					className='w-36 text-lg'
					to={data.path}
					activeClassName='active-link-text'
				>
					{data.title}
				</NavLink>
			</div>

			<div className='flex items-center justify-end '>
				{pathname === data.path ? (
					<img src={bubble} alt={data.title} />
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default SideBarItems
