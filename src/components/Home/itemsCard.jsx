import React from 'react'
import {ArrowCircleDownIcon, ArrowCircleUpIcon} from '@heroicons/react/outline'

function ItemsCard({data}) {
	const statusIcon = () => {
		if (data.stats === 0) {
			return <span></span>
		} else if (data.stats > 0) {
			return <ArrowCircleUpIcon className='w-8 text-status-Published' />
		} else {
			return <ArrowCircleDownIcon className='w-8 text-status-Draft' />
		}
	}
	return (
		<div className='bg-blue-sidebarBg  mb-4 py-2 rounded'>
			<div className='p-5 grid grid-cols-12 gap-4'>
				<div className='col-span-4'>
					<h3 className='text-blue-primary text-lg active-link-text'>
						{data.title}
					</h3>
					<p className='text-main-subtitle text-opacity-98'>
						Posted {data.date}
					</p>
				</div>
				<div className='col-span-4  flex items-center'>
					<div
						className={`border-2 rounded-3xl border-status-${data.status} text-status-${data.status} h-8 w-36 flex items-center justify-center`}
					>
						<span>{data.status}</span>
					</div>
				</div>
				<div className='flex items-center col-span-3 '>
					<div className='text-blue-primary  active-link-text flex items-center'>
						<span className='px-1 w-8'>{data.stats}</span>
						<span className='px-1 text-main-subtitle text-opacity-99'>
							{data.stats === 0 || data.stats === 1
								? 'view'
								: 'views'}
						</span>
						<span className={`px-2`}>{statusIcon()}</span>
					</div>
				</div>
				<div className='flex items-center col-span-1 text-blue-primary text-xl active-link-text'>
					<span>...</span>
				</div>
			</div>
		</div>
	)
}

export default ItemsCard
