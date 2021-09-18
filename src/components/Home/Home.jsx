import React from 'react'
import {PencilIcon} from '@heroicons/react/solid'
import ItemsCard from './itemsCard'
import {data} from '../../data'

function Home() {
	return (
		<div className='w-full min-w-full '>
			<div className='grid grid-cols-12 gap-4'>
				<h5 className='test col-span-4'>Title</h5>
				<h5 className='test test col-span-4 '>Status</h5>
				<h5 className='test sm:col-span-2 md:col-span-2 col-span-2  '>
					Stats
				</h5>
				<div className='lg:col-span-2 flex bg-blue-navBlue min-w-min rounded text-white  xs:hidden sm:col-span-2 md:col-span-2 sm:justify-center  md:justify-centermd:col-span-2 '>
					<PencilIcon className='xs:hidden w-5 mx-2  sm:hidden' />
					<button>Add New</button>
				</div>
			</div>
			<div className='w-full border border-blue-primary border-opacity-10 mt-5'></div>
			<div>{data && data.map(item => <ItemsCard data={item} />)}</div>
		</div>
	)
}

export default Home
