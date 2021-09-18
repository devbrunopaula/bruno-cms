import React from 'react'
import {PencilIcon} from '@heroicons/react/solid'
import ItemsCard from './itemsCard'
import {data} from '../../data'

function Home() {
	return (
		<div className='w-full min-w-full '>
			<div className='grid grid-cols-12 gap-4'>
				<h5 className='col-span-4 text-blue-primary text-lg active-link-text '>
					Title
				</h5>
				<h5 className='col-span-4 text-blue-primary text-lg active-link-text'>
					Status
				</h5>
				<h5 className='sm:col-span-2 md:col-span-2 col-span-2 text-blue-primary text-lg active-link-text'>
					Stats
				</h5>
				<div className='lg:col-span-2 flex justify-end  xs:hidden sm:col-span-2 md:col-span-2 sm:justify-center  md:justify-centermd:col-span-2 '>
					<div className='flex bg-blue-navBlue p-2 rounded text-white'>
						<PencilIcon className='xs:hidden w-5 mx-2  sm:hidden' />
						<button className='px-2 '>Add New</button>
					</div>
				</div>
			</div>
			<div className='w-full border border-blue-primary border-opacity-10 mt-5 mb-6'></div>
			<div>
				{data &&
					data.map(item => <ItemsCard key={item.id} data={item} />)}
			</div>
		</div>
	)
}

export default Home
