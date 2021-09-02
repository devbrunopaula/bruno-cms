import React from 'react'
import bubble from '../../assets/images/Ellipse.png'

function SideBarItems({Icon, title, show}) {
	return (
		<div className='flex mb-5 items-center'>
			<div className='mr-3'>
				<Icon className='h-5 w-5 text-blue-primary ' />
			</div>
			<div className='w-36 text-lg'>{title}</div>
			<div className='flex items-center justify-end '>
				{show ? <img src={bubble} alt={`${title}`} /> : ''}
			</div>
		</div>
	)
}

export default SideBarItems
