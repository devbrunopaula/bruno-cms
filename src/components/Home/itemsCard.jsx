import React from 'react'

function ItemsCard({data}) {
	return (
		<div className='bg-blue-sidebarBg grid grid-cols-12 gap-4 mb-4'>
			<div className='test col-span-4'>
				<h3>{data.title}</h3>
			</div>
			<div className='test test col-span-4 '>{data.status}</div>
			<div className='col-span-3'>{data.stats}</div>
			<div className='test col-span-1 '>...</div>
		</div>
	)
}

export default ItemsCard
